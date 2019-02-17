import { Collection } from 'datx';

import { Room } from './models';
import pluginModels from '../plugins/models';

export class AppData extends Collection {
  public static types = [Room, ...pluginModels];
}
