import { Slider } from '@blueprintjs/core';
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
  display: flex;
`;

export class SliderField extends React.Component<IFieldComponent & {
  label: string;
  min?: number;
  max?: number;
  scale?: Array<{
    percentage: number;
    color: string;
  }>;
  readonly?: boolean;
  labels?(value: number): string;
  formatter(data: any, item: Item): string;
}> {
  public render() {
    const { fieldName, formatter, item, label, labels, min = 0, max = 100, readonly, scale } = this.props;

    const gradient = scale
      ? `linear-gradient(90deg, ${scale.map((step) => `${step.color} ${step.percentage}%`).join(', ')});`
      : 'inherit';

    const sliderClass = css`
      margin-left: 10px;
      margin-top: 6px;

      &.bp3-slider.bp3-disabled {
        opacity: 1;

        .bp3-slider-handle {
          border: 1px solid white;
          background: transparent;
        }
      }

      .bp3-slider-track {
        background-image: ${gradient}
      }
    `;

    return (
      <div>
        <div className={labelClass}>
          {label}
        </div>
        <div className={valueClass}>
          <span>{formatter(item[fieldName], item)}</span>
          <Slider
            className={sliderClass}
            disabled={readonly}
            value={item[fieldName]}
            min={min}
            max={max}
            labelRenderer={labels || !readonly}
            showTrackFill={!scale}
          />
        </div>
      </div>
    );
  }
}
