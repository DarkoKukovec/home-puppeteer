import { Model, prop } from 'datx';

import { Item } from './Item';

export class Service extends Model {
  public static type = 'service';

  public items!: Array<Item>;
}
