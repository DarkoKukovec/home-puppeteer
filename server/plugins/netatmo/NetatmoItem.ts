import { prop } from 'datx';

import { Item } from '../../state/models';
import { NetatmoType } from './NetatmoType';
import { Netatmo } from './Netatmo';
import { NetatmoSetpointMode } from './NetatmoSetpointMode';

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
  public setpoint?: number;

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

  @prop
  public battery: number;

  @prop
  public setpointMode: NetatmoSetpointMode;

  @prop.toMany('netatmo', 'items')
  private plugins: Array<Netatmo>;

  constructor(...args) {
    super(...args);

    if (this.type === NetatmoType.THERMOSTAT) {
      setTimeout(this.refreshData.bind(this), 1000);
      setInterval(this.refreshData.bind(this), 60000);
    }
  }

  private async refreshData() {
    const plugin = this.plugins && this.plugins.length ? this.plugins[0] : undefined;

    if (plugin && this.type === NetatmoType.THERMOSTAT) {
      const data = await plugin.request('/api/getthermostatsdata');
      const thermostat = data.body && data.body.devices && data.body.devices[0].modules
        .find((module: { _id: string }) => module._id === this.id);

      if (thermostat) {
        this.update({
          temperature: thermostat.measured.temperature,
          setpoint: thermostat.measured.setpoint_temp,
          battery: thermostat.battery_percent,
          setpointMode: thermostat.setpoint.setpoint_mode,
        });
      }
    }
  }
}
