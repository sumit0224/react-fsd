import React from "react";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
}

interface WeatherDetailProps {
  message: string;
  data: WeatherData | null;
}

const WeatherDetail = ({ message, data }: WeatherDetailProps) => {
  return (
    <div>
      {message && (
        <p className="text-center mt-4 text-gray-700">
          {message}
        </p>
      )}

      {data && (
        <div className="bg-white mt-5 p-5 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold">{data.name}</h2>

          <p className="text-lg mt-2">
            🌡 Temperature: {data.main.temp}°C
          </p>

          <p className="text-lg">
            💧 Humidity: {data.main.humidity}%
          </p>

          <p className="text-lg capitalize">
            ☁ Weather: {data.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherDetail;