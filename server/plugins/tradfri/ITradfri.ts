import { IPlugin } from '../../interfaces/IPlugin';
import { IPluginItem } from '../../interfaces/IPluginItem';

export interface ITradfri {
  tradfri?: {
    ip: string;
    token: string;
  } & IPlugin<{key: string}>;
}
