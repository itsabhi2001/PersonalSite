import { useEffect, useState } from "react";
import axios from "axios";

type WeatherData = {
  temp: number;
  description: string;
  icon: string;
  city: string;
};

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Example: Phoenix; replace with navigator.geolocation for dynamic location
        const city = "Phoenix";
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        const { data } = await axios.get(url);

        setWeather({
          temp: data.main.temp,
          description: data.weather[0].main,
          icon: data.weather[0].icon,
          city: data.name,
        });
      } catch (err) {
        setError("Weather unavailable");
      }
    };

    fetchWeather();
  }, []);

  if (error) return <div className="text-sm text-red-500">{error}</div>;
  if (!weather) return <div className="text-sm text-neutral-500">Loading...</div>;

  return (
    <div
      className="flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10
                 px-3 py-1.5 text-sm text-orange-700 dark:text-orange-300 dark:border-orange-600/40
                 dark:bg-orange-600/10 backdrop-blur"
      title={weather.description}
    >
      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
        alt={weather.description}
        className="h-5 w-5"
      />
      <span>
        {Math.round(weather.temp)}°F
      </span>
    </div>
  );
}