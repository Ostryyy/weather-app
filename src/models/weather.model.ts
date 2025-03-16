export interface CurrentWeather {
  observation_time: string;
  temperature: number;
  weather_code: number;
  weather_icons: string[];
  weather_descriptions: string[];
  wind_speed: number;
  wind_degree: number;
  wind_dir: string;
  pressure: number;
  precip: number;
  humidity: number;
  cloudcover: number;
  feelslike: number;
  uv_index: number;
  visibility: number;
}

export interface ForecastDay {
  date: string;
  avgtemp: number;
  maxtemp: number;
  mintemp: number;
  weather_icon: string;
  weather_description: string;
}

export interface WeatherResponse {
  location: {
    name: string;
    country: string;
    region: string;
    lat: string;
    lon: string;
    timezone_id: string;
    localtime: string;
  };
  current: CurrentWeather;
  forecast: Record<
    string,
    {
      avgtemp: number;
      maxtemp: number;
      mintemp: number;
      weather_icons: string[];
      weather_descriptions: string[];
    }
  >;
}
