import { Inactive } from './inactive/Inactive';
import { Netatmo } from './netatmo/Netatmo';
import { NetatmoItem } from './netatmo/NetatmoItem';
import { Tradfri } from './tradfri/Tradfri';
import { TradfriItem } from './tradfri/TradfriItem';

export default [
  Inactive,
  Netatmo,
  NetatmoItem,
  Tradfri,
  TradfriItem,
];

export const itemTypes = [
  NetatmoItem.type,
  TradfriItem.type,
];
