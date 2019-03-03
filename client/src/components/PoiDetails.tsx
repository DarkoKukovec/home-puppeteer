import * as React from 'react';

import { fieldMapping } from '../services/field-mapping';
import { Item } from '../state/models';

export class PoiDetails extends React.Component<{
  item: Item;
  className?: string;
}> {
  public render() {
    const { className, item } = this.props;

    const fieldMap = fieldMapping[item.meta.type];
    const fields = Object.keys(fieldMap);

    return (
      <div className={className}>
        <ul>
          {fields
            .filter((field) => item[field] !== undefined)
            .map((field) => {
              const Component = fieldMap[field].component;

              return (
                <Component key={field} item={item} fieldName={field} {...fieldMap[field].props} />
              );
            })
          }
        </ul>
      </div>
    );
  }
}
