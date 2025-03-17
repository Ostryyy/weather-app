import { useWeatherStore } from "../store/weatherStore";
import { Card, CardContent, Typography, Box } from "@mui/material";

const WeatherCard = () => {
  const { weatherData } = useWeatherStore();

  if (!weatherData) return <p>No data available</p>;

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
      <Card sx={{ p: 2, maxWidth: 400, width: "90%" }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h5">{weatherData.city}</Typography>
          <img
            src={weatherData.current.weather_icons[0]}
            alt="Weather icon"
            style={{ maxWidth: 80 }}
          />
          <Typography>
            Temperature: {weatherData.current.temperature}°C
          </Typography>
          <Typography>Wind: {weatherData.current.wind_speed} km/h</Typography>
          <Typography>Humidity: {weatherData.current.humidity}%</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WeatherCard;
