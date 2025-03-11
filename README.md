# Unit Converter App - Next.js (v0 Evaluation Project)

This project is a unit conversion web application built with Next.js, leveraging components from Shadcn UI.  It allows users to convert between various units of measurement across different categories, including length, weight, and temperature.

## Live Demo

[[Link to the deployed Vercel app here](https://unit-converter-dharanesshmds-projects.vercel.app/)]

## Key Features

*   **Category Selection:**  Easily switch between length, weight, and temperature conversions.
*   **Dynamic Unit Options:** Unit dropdowns are dynamically populated based on the selected category.
*   **Real-time Conversion:** Conversion results are displayed immediately as the input value or units change.
*   **Input Validation:**  Handles invalid input (non-numeric values) and provides clear error messages.
*   **Temperature Conversion:** Includes specific conversion logic for Celsius, Fahrenheit, and Kelvin.
*   **Clean UI:** Uses Shadcn UI components for a modern and user-friendly interface.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone [your repository URL]
    cd [your project directory]
    ```

2.  **Install dependencies:**

    ```bash
    npm install  # or yarn install or pnpm install or bun install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev  # or yarn dev or pnpm dev or bun dev
    ```

4.  **Open your browser and navigate to `http://localhost:3000`.**

## Prompting Strategy & Guidance

The effective generation of the Unit Converter App relied on a deliberate and guided prompting approach. Here's a breakdown of the steps taken to achieve a comprehensive and functional result:

*   **Understanding Requirements:** I carefully read and understood the requirements for the Unit Converter App, including the specific features and enhancements requested.

*   **Structuring the Response:**
    *   **HTML:** I provided a structured layout for the app, including the necessary input fields, dropdowns, labels, and placeholders for dynamic content.
    *   **CSS:** I ensured the app has a clean and intuitive UI/UX by applying appropriate styling, making the app visually appealing and user-friendly.
    *   **JavaScript:** I implemented the core functionality, including dynamic population of units based on the selected category, conversion logic with accurate formulas, real-time conversion, and proper validation/error handling.

*   **Ensuring Completeness:** The generated code covered all requested categories (Length, Weight, and Temperature), included proper validation, and handled edge cases such as negative temperature values.

*   **Providing Clear Labels and Visual Feedback:** I ensured that clear labels and visual feedback for invalid inputs were included to enhance usability.

*   **Considering Edge Cases:** The code includes checks for invalid values and considers specific edge cases like negative temperatures for Celsius.

Overall, by following a detailed approach and ensuring completeness, I was able to generate a comprehensive and useful Unit Converter App that aligns well with the specified requirements and provides a good user experience.  This deliberate prompting strategy was key to obtaining a high-quality and functional application.

## Development Process & Design Decisions

This project was developed with a focus on clean code, maintainability, and user experience.  Here's a breakdown of the key steps and design decisions:

*   **Project Setup & Component Selection:** A Next.js project was bootstrapped using `create-next-app`.  Shadcn UI was chosen for its pre-built, accessible components and its ease of integration with Tailwind CSS.  This significantly accelerated the UI development process and ensured a consistent design language.

*   **Component Structure:**  The application's UI is structured around reusable components:

    *   `UnitConverter`: The main component that orchestrates the entire conversion process.
    *   Shadcn UI components: `Card`, `Select`, `Input`, `Label`, `Alert` are used for the UI elements and layout.
    *   These components promote modularity and easier maintenance.

*   **State Management:**  React's `useState` hook is used for managing the application's state, including:

    *   `category`: The selected unit category (length, weight, temperature).
    *   `inputValue`: The numeric value to be converted.
    *   `inputUnit`: The input unit of measurement.
    *   `outputUnit`: The desired output unit of measurement.
    *   `result`: The calculated conversion result.
    *   `error`: Any error messages encountered during validation or conversion.

*   **Conversion Logic:** The conversion logic is encapsulated within the `convertUnits` and `convertTemperature` functions.
    *   `convertUnits`: converts to base unit, then to target unit
    *   `convertTemperature`: uses Kelvin as a base unit for temperature conversions.

*   **Real-time Updates:**  The `useEffect` hook is used to trigger the conversion process whenever the `inputValue`, `inputUnit`, or `outputUnit` state variables change. This provides a real-time conversion experience for the user.

*   **Input Validation:** Implemented input validation to ensure that the user enters a valid number. If the input is not a number, an error message is displayed.

*   **Accessibility:**  Shadcn UI components are designed with accessibility in mind.  Proper labels and ARIA attributes have been used to ensure the application is usable by people with disabilities.

*   **Styling:** Tailwind CSS is used for styling the application, providing a flexible and efficient way to create a visually appealing and responsive UI. The `components.json` file shows the configuration for Shadcn UI's styling.

## Code Quality & Maintainability

*   **Clear and Concise Code:** The code is written in a clear and concise manner, with meaningful variable names and comments to enhance readability.
*   **Modular Design:** The application is structured into reusable components, making it easier to maintain and extend.
*   **Consistent Styling:** Tailwind CSS and Shadcn UI ensure a consistent and visually appealing design throughout the application.
*   **Error Handling:** The application includes error handling to gracefully handle invalid input and prevent unexpected behavior.

## Problem-Solving & Improvements

*   **Handling Edge Cases:**
    *   **Invalid Input:** The application validates user input to ensure that it is a valid number.  If not, a clear error message is displayed.
    *   **Temperature Conversions:** Special logic is implemented for temperature conversions due to their non-linear nature (using Kelvin as a base).
*   **Potential Improvements (Future Considerations):**

    *   **More Unit Categories:** Expanding the application to include additional unit categories such as area, volume, speed, and energy.
    *   **User Preferences:** Implementing user preferences to allow users to customize the default units and categories.
    *   **Improved Error Handling:** Adding more specific error messages for different types of input errors.  Consider client-side validation *before* attempting conversion to improve the user experience.
    *   **Unit Testing:** Implementing unit tests to ensure the accuracy of the conversion logic and the reliability of the application.
    *   **Server-Side Rendering (SSR) or Static Site Generation (SSG):** For improved SEO and initial load performance, explore using SSR or SSG for the application's pages.
    *   **Consider using a dedicated state management library (e.g., Zustand, Redux) for more complex applications or to simplify state logic.**

## Deployment

The application is deployed on Vercel.  Vercel's seamless integration with Next.js made the deployment process straightforward.

1.  **Create a Vercel account (if you don't already have one).**
2.  **Import the project from your Git repository.**
3.  **Vercel will automatically detect the Next.js project and configure the deployment settings.**
4.  **Deploy!**

## Technologies Used

*   Next.js
*   React
*   Tailwind CSS
*   Shadcn UI
*   Lucide React

Made by Dharanessh M D
