import { Collection } from 'datx';
import { computed } from 'mobx';

import { Item, Room } from './models';

export class AppData extends Collection {
  public static types = [Item, Room];

  public static defaultModel = Item;

  @computed
  public get items(): Array<Item> {
    return this.findAll(Item);
  }
}
