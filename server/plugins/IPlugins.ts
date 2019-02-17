import { IInactive } from './inactive/IInactive';
import { ITradfri } from './tradfri/ITradfri';
import { IWebos } from './webos/IWebOs';
import { INetatmo } from './netatmo/INetatmo';

export interface IPlugins extends INetatmo, ITradfri, IWebos, IInactive {}
