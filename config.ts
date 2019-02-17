import { IDictionary } from './server/interfaces/IDictionary';
import { IRoom } from './server/interfaces/IRoom';
import { IPlugins } from './server/plugins/IPlugins';
import { NetatmoType } from './server/plugins/netatmo/NetatmoType';
import { TRADFRI_TOKEN, NETATMO_CLIENT_ID, NETATMO_CLIENT_SECRET, NETATMO_USERNAME, NETATMO_PASSWORD } from './secrets';

export const PORT = 3100;
export const HOST = '0.0.0.0';

export const ROOMS: IDictionary<IRoom> = {
  living: {
    name: 'Living room',
  },
  bedroom: {
    name: 'Bedroom',
  },
  kitchen: {
    name: 'Kitchen',
  },
  hall: {
    name: 'Hall',
  },
  dining: {
    name: 'Dining room',
  },
  bathroom: {
    name: 'Bathroom',
  },
  outside: {
    name: 'Outside',
  },
};

export const PLUGINS: IPlugins = {
  netatmo: {
    clientId: NETATMO_CLIENT_ID,
    clientSecret: NETATMO_CLIENT_SECRET,
    username: NETATMO_USERNAME,
    password: NETATMO_PASSWORD,
    items: [
      {
        coordinates: {
          x: 0.55,
          y: 0.72
        },
        id: '04:00:00:0b:c3:28',
        name: 'Thermostat',
        room: 'living',
        type: NetatmoType.THERMOSTAT,
      }, {
        coordinates: {
          x: 0.06,
          y: 0.58
        },
        id: '03:00:00:06:7c:c0',
        name: 'Weather',
        room: 'bedroom',
        type: NetatmoType.WEATHER,
      }, {
        coordinates: {
          x: 0.94,
          y: 0.88
        },
        id: '70:ee:50:2e:f9:b0',
        name: 'Weather',
        room: 'kitchen',
        type: NetatmoType.WEATHER,
      }, {
        coordinates: {
          x: 0.60,
          y: 0.15
        },
        id: '02:00:00:2e:ee:d8',
        name: 'Weather',
        room: 'outside',
        type: NetatmoType.WEATHER,
      },
    ],
  },
  tradfri: {
    ip: '192.168.0.101',
    token: TRADFRI_TOKEN,
    items: [
      {
        coordinates: {
          x: 0.79,
          y: 0.83
        },
        name: 'Lights',
        room: 'kitchen',
        key: '',
      }, {
        coordinates: {
          x: 0.85,
          y: 0.69
        },
        name: 'Lights',
        room: 'dining',
        key: '',
      }, {
        coordinates: {
          x: 0.50,
          y: 0.86
        },
        name: 'Lights',
        room: 'hall',
        key: '',
      }, {
        coordinates: {
          x: 0.22,
          y: 0.44
        },
        name: 'Lights',
        room: 'bedroom',
        key: '',
      }, {
        coordinates: {
          x: 0.63,
          y: 0.39
        },
        name: 'Lights',
        room: 'living',
        key: '',
      },
    ],
  },
  webos: {
    ip: '192.168.0.106',
    items: [
      {
        coordinates: {
          x: 0.94,
          y: 0.44
        },
        name: 'TV',
        room: 'living',
      },
    ],
  },
  inactive: {
    items: [{
        coordinates: {
          x: 0.405,
          y: 0.69
        },
        name: 'AC',
        room: 'living'
      }, {
        coordinates: {
          x: 0.58,
          y: 0.965
        },
        name: 'Intercom',
        room: 'hall',
      }, {
        coordinates: {
          x: 0.41,
          y: 0.88
        },
        name: 'Heating',
        room: 'bathroom',
      }, {
        coordinates: {
          x: 0.23,
          y: 0.85
        },
        name: 'Lights',
        room: 'bathroom',
      }, {
        coordinates: {
          x: 0.20,
          y: 0.96
        },
        name: 'Wall lights',
        room: 'bathroom'
      }, {
        coordinates: {
          x: 0.87,
          y: 0.24
        },
        name: 'Blinds',
        room: 'living',
      }, {
        coordinates: {
          x: 0.10,
          y: 0.17
        },
        name: 'Blinds',
        room: 'bedroom',
      }, {
        coordinates: {
          x: 0.25,
          y: 0.06
        },
        name: 'Lights 2',
        room: 'outside',
      }, {
        coordinates: {
          x: 0.69,
          y: 0.09
        },
        name: 'Lights 1',
        room: 'outside',
      }, {
        coordinates: {
          x: 0.44,
          y: 0.29
        },
        name: 'Roomba',
        room: 'living',
      }
    ],
  }
};
