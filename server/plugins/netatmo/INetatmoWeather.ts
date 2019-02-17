import { Trend } from "./NetatmoItem";
import { NetatmoType } from "./NetatmoType";

export interface INetatmoWeather {
  type: NetatmoType.WEATHER;
  id: string;
  temperature: number;
  co2: number;
  humidity: number;
  noise: number;
  pressure: number;
  minTemp: number;
  maxTemp: number;
  updateTime: number;
  tempTrend: Trend;
  pressureTrend: Trend;
}