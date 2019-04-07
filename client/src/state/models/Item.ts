import { Model, prop } from 'datx';

import { Room } from './Room';
import { Service } from './Service';

export class Item extends Model {
  public static type = 'item';

  @prop
  public coordinates!: {
    x: number;
    y: number;
  };

  @prop.toOne(Room)
  public room!: Room;

  @prop
  public name!: string;

  @prop
  public disabled?: boolean;

  @prop.toMany('service', 'items')
  public items?: Array<Service>;
}
