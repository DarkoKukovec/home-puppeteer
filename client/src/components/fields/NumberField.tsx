import { NumericInput } from '@blueprintjs/core';
import { Model } from 'datx';
import { css } from 'emotion';
import { action } from 'mobx';
import * as React from 'react';

import { PRIMARY_TEXT_COLOR, SECONDARY_TEXT_COLOR } from '../../consts/colors';

const labelClass = css`
  color: ${SECONDARY_TEXT_COLOR};
  font-size: 14px;
  padding-bottom: 4px;
`;

const valueClass = css`
  .bp3-numeric-input.bp3-large {
    margin-bottom: 16px;
  }

  .bp3-input-group.bp3-large {

    .bp3-input {
      box-shadow: none;
      background: transparent;
      color: ${PRIMARY_TEXT_COLOR};
      font-size: 24px;
      font-weight: bold;
      width: 94px;
    }
  }

  .bp3-numeric-input .bp3-button-group.bp3-vertical:first-of-type > .bp3-button:first-of-type {
    border-radius: 3px 3px 0 0;
  }

  .bp3-numeric-input .bp3-button-group.bp3-vertical:first-of-type > .bp3-button:last-of-type {
    border-radius: 0 0 3px 3px;
  }
`;

const valueDecoratorClass = css`
  color: ${PRIMARY_TEXT_COLOR};
  font-size: 24px;
  font-weight: bold;
  line-height: 40px;
`;

export class NumberField extends React.Component<{
  label: string;
  item: Model;
  fieldName: string;
  minValue: number;
  maxValue: number;
  step: number;
  decorator?: string;
}> {
  public static defaultProps = {
    maxValue: 100,
    minValue: 0,
    step: 1,
  };

  public render() {
    const { decorator, label, maxValue, minValue, step, item, fieldName } = this.props;
    // @ts-ignore
    const value = item[fieldName];

    return (
      <div>
        <div className={labelClass}>
          {label}
        </div>
        <div className={valueClass}>
          <NumericInput
            value={value}
            max={maxValue}
            min={minValue}
            stepSize={step}
            minorStepSize={null}
            onValueChange={this.updateValue}
            buttonPosition="left"
            rightElement={<div className={valueDecoratorClass}>{decorator}</div>}
            large
          />
        </div>
      </div>
    );
  }

  @action.bound
  private updateValue(value: number) {
    // @ts-ignore
    this.props.item[this.props.fieldName] = value;
  }
}
