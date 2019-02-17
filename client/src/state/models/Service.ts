import { Model, prop } from 'datx';

import { Item } from './Item';

export class Service extends Model {
  public static type = 'service';

  @prop.toMany(Item)
  public items!: Array<Item>;

  constructor(...args: Array<any>) {
    super(...args);
    super['constructor'](...args);
  }
}
