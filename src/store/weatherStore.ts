import { create } from "zustand";
import { fetchWeather } from "../services/fetchWeather";
import { CurrentWeather, ForecastDay } from "../models/weather.model.ts";

interface WeatherState {
  city: string;
  weatherData: {
    current: CurrentWeather;
    forecast: ForecastDay[];
  } | null;
  history: string[];
  setCity: (city: string) => void;
  fetchWeatherData: (city: string, days?: number) => Promise<void>;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  city: "Warszawa",
  weatherData: null,
  history: JSON.parse(localStorage.getItem("weather_history") || "[]"),

  setCity: (city) => set({ city }),

  fetchWeatherData: async (city, days = 3) => {
    const data = await fetchWeather(city, days);
    if (data) {
      set((state) => {
        const updatedHistory = [
          city,
          ...state.history.filter((c) => c !== city),
        ].slice(0, 5);
        localStorage.setItem("weather_history", JSON.stringify(updatedHistory));
        return { weatherData: data, history: updatedHistory };
      });
    }
  },
}));
