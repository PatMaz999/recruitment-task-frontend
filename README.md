# Recruitment task

 Frontend of a web application which presents clean energy percentage in UK energy mix and calculates optimal
 electric vehicle charging hours based on peak renewable energy availability.

---

## Tech stack
- Language: TypeScript
- Framework: Next.js
- Library: React
- Styling: SCSS (Sass)
- Data Visualization: Chart.js
- Package manager: Yarn

---

## Features

- **Interactive Energy Mix Charts:** Visualizes the generation mix for Today, Tomorrow, and the day after using dynamic Pie charts.
- **Smart Filtering:** Automatically filters out fuel sources with 0% contribution to keep the interface clean and informative.
- **EV Charging Calculator:** A dedicated form that communicates with the backend to find the best 1-6 hour charging window.
- **Dynamic Color Coding:** Distinct color palettes for Eco-friendly vs other energy sources.

---

## Component Documentation

### `SingleChart`
Renders a daily energy mix chart. It automatically filters out inactive energy sources and applies category-specific color palettes
- **Props:**
    - `day: string`: Label for the chart (e.g., "Today").
    - `totalGreenPerc: number`: Aggregate renewable energy percentage.
    - `greenEnergyPerc: EnergySource[]`: Array of renewable energy sources.
    - `otherEnergyPerc: EnergySource[]`: Array of non-renewable energy sources.

### `ThreeCharts`
The main dashboard responsible for the 3-day forecast display.

- **Internal Logic:** Handles global data fetching and manages the loading state for the entire dashboard.

### `CarCharging`
Component for the EV charging optimization feature.
- **Internal Logic:** Handles the calculation request to the backend.

### `OptimalChargingBox`
Component for displaying calculation results.
- **Props:**
    - `startDate: string`: timestamp for the window start.
    - `endDate: string`: timestamp for the window end.
    - `greenPerc: number`: Calculated green energy percentage.

### `Loading`
Reusable utility for handling asynchronous states.
- **Props:**
    - `text: string`: Custom message displayed during the loading process.



---

## Related Projects
- [Backend](https://github.com/PatMaz999/recruitment-task-backend)

---