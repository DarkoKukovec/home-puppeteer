import { prop } from 'datx';
import fetch from 'node-fetch';

import { Service, Item } from '../../state/models';
import { NetatmoItem } from './NetatmoItem';
import { NetatmoType } from './NetatmoType';
import { INetatmoWeather } from './INetatmoWeather';
import { INetatmoThermostat } from './INetatmoThermostat';

const BASE_URL = 'https://api.netatmo.com';

const authData: {
  clientId?: string;
  clientSecret?: string;
  username?: string;
  password?: string;
  accessToken?: string;
  refreshToken?: string;
} = {};

export class Netatmo extends Service {
  public static type = 'netatmo';

  public static preprocess(data: any) {
    authData.clientId = data.clientId;
    authData.clientSecret = data.clientSecret;
    authData.username = data.username;
    authData.password = data.password;

    return {
      ...data,
      clientId: null,
      clientSecret: null,
      username: null,
      password: null,
    };
  }

  @prop.toMany(NetatmoItem)
  public items: Array<Item & (INetatmoWeather | INetatmoThermostat)>;

  constructor(...args) {
    super(...args);

    this.authenticate().then(() => {
      const needsWeather = this.items.some((item) => item.type === NetatmoType.WEATHER);

      if (needsWeather) {
        this.refreshWeather();
        setInterval(this.refreshWeather.bind(this), 60000);
      }
    });
  }

  private async refreshWeather() {
    const data = await this.request('/api/getstationsdata');
    // console.log(data);

    data.body.devices.forEach((device) => {
      this.setWeatherData(device);

      device.modules.forEach(this.setWeatherData.bind(this));
    })
  }

  private setWeatherData(itemData: {_id: string, dashboard_data: any}) {
    const item = this.items.find((i) => i.meta.id === itemData._id);
    const data = itemData.dashboard_data;

    if (item) {
      item.update({
        temperature: data.Temperature,
        co2: data.CO2,
        humidity: data.Humidity,
        noise: data.Noise,
        pressure: data.pressure,
        minTemp: data.min_temp,
        maxTemp: data.max_temp,
        updateTime: data.time_utc,
        tempTrend: data.temp_trend,
        pressureTrend: data.pressure_trend,
      });
    }
  }

  private async authenticate() {
    const body = [
      'grant_type=password',
      `client_id=${encodeURIComponent(authData.clientId)}`,
      `client_secret=${encodeURIComponent(authData.clientSecret)}`,
      `username=${encodeURIComponent(authData.username)}`,
      `password=${encodeURIComponent(authData.password)}`,
      `scope=${encodeURIComponent('read_station read_thermostat write_thermostat')}`,
    ];

    const res = await fetch(`${BASE_URL}/oauth2/token`, {
      method: 'POST',
      body: body.join('&'),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const data = await res.json();
    authData.accessToken = data.access_token;
    authData.refreshToken = data.refresh_token;
    authData.username = authData.password = null;
  }

  private async reauthenticate() {
    const body = [
      'grant_type=refresh_token',
      `client_id=${encodeURIComponent(authData.clientId)}`,
      `client_secret=${encodeURIComponent(authData.clientSecret)}`,
      `refresh_token=${encodeURIComponent(authData.refreshToken)}`,
    ];

    const res = await fetch(`${BASE_URL}/oauth2/token`, {
      method: 'POST',
      body: body.join('&'),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const data = await res.json();
    authData.accessToken = data.access_token;
    authData.refreshToken = data.refresh_token;
  }

  public async request(endpoint: string, body?: string, method: string = 'GET') {
    const req = await fetch(`${BASE_URL}${endpoint}`, {
      body,
      method,
      headers: {
        'Authorization': `Bearer ${authData.accessToken}`,
      }
    });

    if (req.status === 401) {
      await this.reauthenticate();
      return this.request(endpoint, body);
    }

    return req.json();
  }
}
