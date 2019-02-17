import { Trend } from "./NetatmoItem";
import { NetatmoType } from "./NetatmoType";

export interface INetatmoThermostat {
  type: NetatmoType.THERMOSTAT;
  id: string;
  temperature: number;
  updateTime: number;
}