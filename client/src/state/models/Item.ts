import { Model, prop } from 'datx';
import { Room } from './Room';

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

  constructor(...args: Array<any>) {
    super(...args);
    super['constructor'](...args);
  }
}
