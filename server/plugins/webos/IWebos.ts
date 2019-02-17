import { IPlugin } from '../../interfaces/IPlugin';
import { IPluginItem } from '../../interfaces/IPluginItem';

export interface IWebos {
  webos?: {
    ip: string;
  } & IPlugin;
}
