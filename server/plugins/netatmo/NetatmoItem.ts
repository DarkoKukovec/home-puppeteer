import { prop } from 'datx';

import { Item } from '../../state/models';
import { NetatmoType } from './NetatmoType';
import { Netatmo } from './Netatmo';

export enum Trend {
  UP = 'up',
  STABLE = 'stable',
  DOWN = 'down',
}

export class NetatmoItem extends Item {
  public static type = 'netatmo_item';

  @prop
  public type: NetatmoType;

  @prop.identifier
  public id: string;

  @prop
  public temperature: number;

  @prop
  public co2: number;

  @prop
  public humidity: number;

  @prop
  public noise: number;

  @prop
  public pressure: number;

  @prop
  public minTemp: number;

  @prop
  public maxTemp: number;

  @prop
  public updateTime: number;

  @prop
  public tempTrend: Trend;

  @prop
  public pressureTrend: Trend;

  @prop.toMany('netatmo', 'items')
  private plugins: Netatmo;
}
