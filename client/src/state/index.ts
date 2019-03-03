import { AppData } from './AppData';
const state = new AppData();

// @ts-ignore
window['debug'] = { state };

// tslint:disable-next-line:no-default-export export-name
export default state;
