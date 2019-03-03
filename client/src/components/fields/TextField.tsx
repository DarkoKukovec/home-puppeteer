import { css } from 'emotion';
import * as React from 'react';

import { PRIMARY_TEXT_COLOR, SECONDARY_TEXT_COLOR } from '../../consts/colors';
import { IFieldComponent } from '../../interfaces/IFieldComponent';
import { Item } from '../../state/models';

const labelClass = css`
  color: ${SECONDARY_TEXT_COLOR};
  font-size: 14px;
  padding-bottom: 4px;
`;

const valueClass = css`
  color: ${PRIMARY_TEXT_COLOR};
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 16px;
`;

export class TextField extends React.Component<IFieldComponent & {
  label: string;
  formatter(data: any, item: Item): string;
}> {
  public render() {
    return (
      <div>
        <div className={labelClass}>
          {this.props.label}
        </div>
        <div className={valueClass}>
          {this.props.formatter(this.props.item[this.props.fieldName], this.props.item)}
        </div>
      </div>
    );
  }
}
