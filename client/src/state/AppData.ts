import { Collection } from 'datx';
import { computed } from 'mobx';

import { Item, Room } from './models';

export class AppData extends Collection {
  public static types = [Item, Room];

  public static defaultModel = Item;

  @computed
  public get items(): Array<Item> {
    return this.filter((model) => model instanceof Item) as Array<Item>;
  }

  public findItem(id: string | number): Item | undefined {
    return this.items.find((model) => model.meta.id === id);
  }
}
