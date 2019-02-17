import { NetatmoType } from "./NetatmoType";
import { IPluginItem } from "../../interfaces/IPluginItem";

export interface INetatmoItem extends IPluginItem {
  type: NetatmoType;
  id: string;
}
