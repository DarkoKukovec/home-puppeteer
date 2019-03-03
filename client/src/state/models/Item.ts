import { Model, prop } from 'datx';

import { Room } from './Room';
import { Service } from './Service';

export class Item extends Model {
  public static type = 'item';

  [key: string]: any;

  public static preprocess(data: any) {
    // console.log('item', data);

    return {
      ...data,
    };
  }

  // @prop
  public coordinates!: {
    x: number;
    y: number;
  };

  // @prop.toOne(Room)
  public room!: Room;

  // @prop
  public name!: string;

  // @prop
  public disabled?: boolean;

  public items?: Array<Service>;

  constructor(...args: Array<any>) {
    super(...args);
    super['constructor'](...args);
  }
}

prop(Item, 'coordinates');
prop(Item, 'name');
prop(Item, 'disabled');
prop.toOne(Room)(Item, 'room');
prop.toMany('service', 'items')(Item, 'plugins');
