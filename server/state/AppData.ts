import { Collection, Model } from 'datx';

import { Room } from './models';
import pluginModels, { itemTypes } from '../plugins/models';

export class AppData extends Collection {
  public static types = [Room, ...pluginModels];

  public getSnapshot() {
    let models: Array<Model> = [...this.findAll(Room)];
    models = models.concat(...itemTypes.map((type) => this.findAll<Model>(type).slice()));

    return models.map((model) => model.toJSON());
  }
}
