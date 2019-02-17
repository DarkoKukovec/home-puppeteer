import { IPluginItem } from './IPluginItem';

export interface IPlugin<T = IPluginItem> {
  items: Array<IPluginItem & T>;
}
