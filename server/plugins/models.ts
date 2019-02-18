import { Inactive } from './inactive/Inactive';
import { Netatmo } from './netatmo/Netatmo';
import { NetatmoItem } from './netatmo/NetatmoItem';

export default [
  Inactive,
  Netatmo,
  NetatmoItem,
];

export const itemTypes = [
  NetatmoItem.type,
];
