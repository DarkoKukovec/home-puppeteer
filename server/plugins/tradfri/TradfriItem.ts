import { prop } from 'datx';

import {Item } from '../../state/models';

export class TradfriItem extends Item {
  public static type = 'tradfri_item';

  @prop.identifier
  public id: string;
}
