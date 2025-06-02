# Weather App

A modern weather application built with React and Vite that provides real-time weather information for any location.

## Features

- Real-time weather data  
- Location-based weather information  
- Responsive design with Tailwind CSS  
- Modern and intuitive user interface  
- Search functionality for different locations  
- 🌍 **Localization of languages** for a personalized experience  
- 👕 **Clothing suggestions** based on current weather conditions  

## Tech Stack

- React 18  
- Vite  
- Tailwind CSS  
- Axios for API requests  
- ESLint for code quality  

## Prerequisites

- Node.js (v14 or higher)  
- npm or yarn package manager  

## Installation

1. Clone the repository:  
   ```bash
   git clone <repository-url>
   cd Weather_app
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API key:  
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

4. Start the development server:  
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## Images

### 🏠 Home Page  
![Home Page](./assets/images/homepage.png)

### 🔍 Search Functionality  
![Search](./assets/images/search.png)

### 👕 Clothing Suggestions  
![Clothing Suggestions](./assets/images/clothing.png)

> 📸 Replace the image paths (`./assets/images/...`) with the actual locations of your screenshots.

## Available Scripts

- `npm run dev` - Start development server  
- `npm run build` - Build for production  
- `npm run preview` - Preview production build  
- `npm run lint` - Run ESLint  

## Project Structure

```
Weather_app/
├── public/           # Static assets
├── src/              # Source files
│   ├── components/   # React components
│   ├── App.jsx       # Main application component
│   └── main.jsx      # Application entry point
├── assets/           # Image and icon assets
├── index.html        # HTML template
└── package.json      # Project dependencies and scripts
```

## Contributing

1. Fork the repository  
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)  
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)  
4. Push to the branch (`git push origin feature/AmazingFeature`)  
5. Open a Pull Request  

## License

This project is licensed under the ISC License.

## Acknowledgments

- Weather data provided by [OpenWeatherMap API](https://openweathermap.org/api)  
- Icons and UI components from various open-source libraries  
