import axios from "axios";
import {
  CurrentWeather,
  ForecastDay,
  WeatherResponse,
} from "../models/weather.model.ts";

const API_KEY = import.meta.env.API_KEY;
const BASE_URL = "http://api.weatherstack.com/forecast";

export const fetchWeather = async (
  city: string,
  days: number = 3,
): Promise<{
  city: string;
  current: CurrentWeather;
  forecast: ForecastDay[];
} | null> => {
  try {
    const response = await axios.get<WeatherResponse>(BASE_URL, {
      params: {
        access_key: API_KEY,
        query: city,
        forecast_days: days,
      },
    });

    if (response.data.forecast === undefined) {
      throw new Error("No forecast data available");
    }

    return {
      city: response.data.location.name,
      current: response.data.current,
      forecast: Object.entries(response.data.forecast).map(([date, data]) => ({
        date,
        avgtemp: data.avgtemp,
        maxtemp: data.maxtemp,
        mintemp: data.mintemp,
        weather_icon: data.weather_icons ? data.weather_icons[0] : "",
        weather_description: data.weather_descriptions
          ? data.weather_descriptions[0]
          : "",
      })),
    };
  } catch (error) {
    console.error("Weather API Error:", error);
    return null;
  }
};
