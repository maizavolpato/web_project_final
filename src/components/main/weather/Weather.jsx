import { useEffect, useState } from "react";
import { getWeather } from "../../utils/OpenWeather.js";

export default function OpenWeather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getWeather("Lisbon")
      .then((data) => {
        setWeather(data);
      })
      .catch(() => {
        setError("Não foi possível carregar o clima");
      });
  }, []);

  if (error) return <p>{error}</p>;

  if (!weather) return <p>Carregando clima...</p>;

  return (
    <div className="weather">
      <p className="weather__city">{weather.name}</p>
      <p className="weather__temp">{Math.round(weather.main.temp)}°C</p>
      <p className="weather__description">{weather.weather[0].description}</p>
    </div>
  );
}
