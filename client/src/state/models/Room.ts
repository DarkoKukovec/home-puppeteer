import { Model, prop } from 'datx';

export class Room extends Model {
  public static type = 'room';

  @prop
  public name!: string;
}
