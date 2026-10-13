# SkylineWeather

A responsive weather dashboard built with React, TypeScript, and the OpenWeather API. Search for a city to view current weather conditions, weather metrics, hourly details, and a five-day forecast.

## 🔗 Live Demo

[View SkylineWeather](https://mzwandilem.github.io/Weather-app/)

## ✨ Features

### Current Weather

- View the current temperature and feels-like temperature.
- View weather conditions and key metrics such as humidity, pressure, wind speed, and visibility.
- View sunrise and sunset times.

### City Search

- Search for weather by city name.
- Display weather information for the selected location.

### Forecasts

- View hourly weather information.
- View a five-day forecast.

### User Experience

- Responsive dashboard layout for different screen sizes.
- Loading and error states.
- Uses the browser's location when available, with Mbabane as the fallback location.

## 🛠️ Technologies

- React
- TypeScript
- Vite
- CSS
- OpenWeather API

## 🧠 Concepts Practiced

- React components and props
- State management and custom hooks
- `useEffect` for API requests and side effects
- TypeScript interfaces and typed component props
- Fetching and handling API data
- Loading and error handling
- Search input and event handling
- Environment variables with Vite
- Responsive CSS Grid and Flexbox layouts
- Building and deploying a Vite application

## 📁 Project Structure

```text
Weather-app/
├── public/
├── src/
│   ├── components/
│   ├── css/
│   │   └── App.css
│   ├── hooks/
│   ├── services/
│   ├── App.tsx
│   └── main.tsx
├── .env                 # Local API key; not committed
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

Adjust the tree to match the actual folders in your repository.

## 🎯 Purpose

SkylineWeather was built to practise front-end development with React and TypeScript while working with a real weather API. The project focuses on reusable components, typed data, API integration, responsive styling, and a clear dashboard interface.

## ⚙️ Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/MzwandileM/Weather-app.git
   ```

2. Move into the project folder:

   ```bash
   cd Weather-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and add your OpenWeather API key:

   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

## 🚀 Build

Create the production build:

```bash
npm run build
```

Vite generates the production files in the `dist/` folder. To preview the production build locally:

```bash
npm run preview
```

## 🔐 Security Note

Keep your `.env` file out of Git. Variables prefixed with `VITE_` are included in the client-side bundle and are visible to users. Do not store secrets that must remain private in them.
