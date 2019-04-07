// tslint:disable:object-literal-sort-keys

import { IDictionary } from '../interfaces/IDictionary';

import { NumberField } from '../components/fields/NumberField';
import { SliderField } from '../components/fields/SliderField';
import { TextField } from '../components/fields/TextField';
import { IFieldComponent } from '../interfaces/IFieldComponent';

interface IFieldMap {
  component: React.ElementType<IFieldComponent & any>;
  props: IDictionary<any>;
}

// tslint:disable-next-line:export-name
export const fieldMapping: IDictionary<IDictionary<IFieldMap>> = {
  netatmo_item: {
    temperature: {
      component: TextField,
      props: {
        label: 'Temperature',
        formatter(fieldData: any) {
          return `${fieldData} °C`;
        },
      },
    },
    setpoint: {
      component: NumberField,
      props: {
        label: 'Setpoint',
        step: 0.5,
        minValue: 12,
        maxValue: 30,
        decorator: '°C',
      },
    },
    setpointMode: {
      component: TextField,
      props: {
        label: 'Setpoint mode',
        formatter(fieldData: any) {
          return fieldData === 'program' ? 'Auto' : 'Custom';
        },
      },
    },
    co2: {
      component: TextField,
      props: {
        label: 'CO₂',
        formatter(fieldData: any) {
          return `${fieldData} ppm`;
        },
      },
    },
    humidity: {
      component: SliderField,
      props: {
        label: 'Humidity',
        readonly: true,
        scale: [{
          percentage: 0,
          color: 'red',
        }, {
          percentage: 30,
          color: 'red',
        }, {
          percentage: 40,
          color: 'yellow',
        }, {
          percentage: 45,
          color: 'green',
        }, {
          percentage: 50,
          color: 'green',
        }, {
          percentage: 55,
          color: 'yellow',
        }, {
          percentage: 65,
          color: 'red',
        }, {
          percentage: 100,
          color: 'red',
        }],
        formatter(fieldData: any) {
          return `${fieldData}%`;
        },
      },
    },
    pressure: {
      component: TextField,
      props: {
        label: 'Pressure',
        formatter(fieldData: any) {
          return `${fieldData} mb`;
        },
      },
    },
    noise: {
      component: TextField,
      props: {
        label: 'Noise level',
        formatter(fieldData: any) {
          return `${fieldData} dB`;
        },
      },
    },
    battery: {
      component: TextField,
      props: {
        label: 'Battery',
        formatter(fieldData: any) {
          return `${fieldData}%`;
        },
      },
    },
  },
  tradfri_item: {},
};
