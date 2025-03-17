import axios from "axios";
import { CurrentWeather, WeatherResponse } from "../models/weather.model.ts";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "http://api.weatherstack.com/current";

export const fetchWeather = async (
  city: string,
  days: number = 3,
): Promise<{
  city: string;
  current: CurrentWeather;
} | null> => {
  try {
    const response = await axios.get<WeatherResponse>(BASE_URL, {
      params: {
        access_key: API_KEY,
        query: city,
        forecast_days: days,
      },
    });

    return {
      city: response.data.location.name,
      current: response.data.current,
    };
  } catch (error) {
    console.error("Weather API Error:", error);
    return null;
  }
};
