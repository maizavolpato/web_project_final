const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export function getWeather(city = "Lisbon") {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt&appid=${API_KEY}`,
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Erro ao buscar clima");
    }
    return response.json();
  });
}
