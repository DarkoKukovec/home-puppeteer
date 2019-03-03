import { Item } from '../state/models';
import { IDictionary } from './IDictionary';

export interface IFieldComponent extends IDictionary<any> {
  item: Item;
  fieldName: string;
}
