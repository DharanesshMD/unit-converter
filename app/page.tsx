"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

// Conversion units for each category
const units = {
  length: [
    { value: "meter", label: "Meters (m)" },
    { value: "kilometer", label: "Kilometers (km)" },
    { value: "centimeter", label: "Centimeters (cm)" },
    { value: "millimeter", label: "Millimeters (mm)" },
    { value: "mile", label: "Miles (mi)" },
    { value: "yard", label: "Yards (yd)" },
    { value: "foot", label: "Feet (ft)" },
    { value: "inch", label: "Inches (in)" },
  ],
  weight: [
    { value: "kilogram", label: "Kilograms (kg)" },
    { value: "gram", label: "Grams (g)" },
    { value: "milligram", label: "Milligrams (mg)" },
    { value: "pound", label: "Pounds (lb)" },
    { value: "ounce", label: "Ounces (oz)" },
    { value: "ton", label: "Metric Tons (t)" },
  ],
  temperature: [
    { value: "celsius", label: "Celsius (°C)" },
    { value: "fahrenheit", label: "Fahrenheit (°F)" },
    { value: "kelvin", label: "Kelvin (K)" },
  ],
}

// Conversion factors to base unit for each category
const conversionFactors = {
  length: {
    meter: 1,
    kilometer: 1000,
    centimeter: 0.01,
    millimeter: 0.001,
    mile: 1609.34,
    yard: 0.9144,
    foot: 0.3048,
    inch: 0.0254,
  },
  weight: {
    kilogram: 1,
    gram: 0.001,
    milligram: 0.000001,
    pound: 0.453592,
    ounce: 0.0283495,
    ton: 1000,
  },
}

export default function UnitConverter() {
  const [category, setCategory] = useState("length")
  const [inputValue, setInputValue] = useState("")
  const [inputUnit, setInputUnit] = useState("")
  const [outputUnit, setOutputUnit] = useState("")
  const [result, setResult] = useState("")
  const [error, setError] = useState("")

  // Initialize default units when category changes
  useEffect(() => {
    if (units[category as keyof typeof units].length > 0) {
      setInputUnit(units[category as keyof typeof units][0].value)
      setOutputUnit(units[category as keyof typeof units][1].value)
    }
    setInputValue("")
    setResult("")
    setError("")
  }, [category])

  // Convert units when any input changes
  useEffect(() => {
    if (inputValue && inputUnit && outputUnit) {
      convertUnits()
    } else {
      setResult("")
    }
  }, [inputValue, inputUnit, outputUnit])

  const convertUnits = () => {
    setError("")

    // Validate input
    const value = Number.parseFloat(inputValue)
    if (isNaN(value)) {
      setError("Please enter a valid number")
      setResult("")
      return
    }

    // Handle temperature conversions separately
    if (category === "temperature") {
      const result = convertTemperature(value, inputUnit, outputUnit)
      setResult(result.toFixed(4))
      return
    }

    // For length and weight, convert to base unit then to target unit
    const categoryFactors = conversionFactors[category as keyof typeof conversionFactors]
    const inputFactor = categoryFactors[inputUnit as keyof typeof categoryFactors]
    const outputFactor = categoryFactors[outputUnit as keyof typeof categoryFactors]

    // Convert to base unit (meters or kilograms) then to target unit
    const baseValue = value * inputFactor
    const convertedValue = baseValue / outputFactor

    setResult(convertedValue.toFixed(4))
  }

  const convertTemperature = (value: number, from: string, to: string) => {
    // Convert to Kelvin first (our base unit for temperature)
    let kelvin

    switch (from) {
      case "celsius":
        kelvin = value + 273.15
        break
      case "fahrenheit":
        kelvin = (value + 459.67) * (5 / 9)
        break
      case "kelvin":
        kelvin = value
        break
      default:
        kelvin = 0
    }

    // Convert from Kelvin to target unit
    switch (to) {
      case "celsius":
        return kelvin - 273.15
      case "fahrenheit":
        return kelvin * (9 / 5) - 459.67
      case "kelvin":
        return kelvin
      default:
        return 0
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <Card className="w-full max-w-md shadow-lg border-border">
        <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
          <CardTitle className="text-center text-xl">Unit Converter</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {/* Category Selection */}
          <div className="space-y-2">
            <Label htmlFor="category">Select Category</Label>
            <Select value={category} onValueChange={(value) => setCategory(value)}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="length">Length</SelectItem>
                <SelectItem value="weight">Weight</SelectItem>
                <SelectItem value="temperature">Temperature</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Input Section */}

          
          <div className="space-y-2">
            <Label htmlFor="inputValue">From</Label>
            <div className="flex space-x-2">
              <Input
                id="inputValue"
                type="number"
                placeholder="Enter value"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 border-border"
              />
              
              <Select value={inputUnit} onValueChange={(value) => setInputUnit(value)}>
                <SelectTrigger id="inputUnit" className="w-[180px] bg-white text-black">
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent>
                  {units[category as keyof typeof units].map((unit) => (
                    <SelectItem key={unit.value} value={unit.value}>
                      {unit.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Output Section */}
          <div className="space-y-2">
            <Label htmlFor="outputUnit">To</Label>
            <Select value={outputUnit} onValueChange={(value) => setOutputUnit(value)}>
              <SelectTrigger id="outputUnit">
                <SelectValue placeholder="Select unit" />
              </SelectTrigger>
              <SelectContent>
                {units[category as keyof typeof units].map((unit) => (
                  <SelectItem key={unit.value} value={unit.value}>
                    {unit.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Result Display */}
          {result && (
            <div className="p-4 bg-secondary/20 rounded-lg text-center">
              <p className="text-lg font-medium">
                {inputValue} {units[category as keyof typeof units].find((u) => u.value === inputUnit)?.label} =
              </p>
              <p className="text-2xl font-bold text-primary">
                {result} {units[category as keyof typeof units].find((u) => u.value === outputUnit)?.label}
              </p>
            </div>
          )}

          {/* Error Display */}
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </main>
  )
}

