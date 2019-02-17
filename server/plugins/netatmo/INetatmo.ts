import { IPlugin } from '../../interfaces/IPlugin';
import { INetatmoItem } from './INetatmoItem';

export interface INetatmo {
  netatmo?: {
    clientId: string;
    clientSecret: string;
    username: string;
    password: string;
  } & IPlugin<INetatmoItem>;
}
