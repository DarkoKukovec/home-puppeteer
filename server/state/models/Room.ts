import { Model, prop } from 'datx';

export class Room extends Model {
  static type = 'room';

  @prop.identifier
  public id!: string;

  @prop
  public name!: string;
}
