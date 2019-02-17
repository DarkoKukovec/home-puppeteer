import { prop } from 'datx';

import { Service } from '../../state/models';

export class Inactive extends Service {
  public static type = 'inactive';

  constructor(...args) {
    super(...args);

    this.items.forEach((item) => {
      item.disabled = true;
    });
  }
}
