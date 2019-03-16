import { prop } from 'datx';

import { Service } from '../../state/models';
import { TradfriItem } from './TradfriItem';

export class Tradfri extends Service {
  public static type = 'tradfri';

  @prop.identifier
  public id: string;

  @prop.toMany(TradfriItem)
  public items: Array<TradfriItem>;
}
