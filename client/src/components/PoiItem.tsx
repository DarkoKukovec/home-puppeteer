import { css, cx } from 'emotion';
import * as React from 'react';

const transition = '.2s ease-in-out';

const mainClass = css`
  width: 48px;
  height: 48px;
  margin-left: -24px;
  margin-top: -24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

const pointClass = css`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #4A90E2;
  transition: width ${transition},
    height ${transition},
    margin-top ${transition},
    margin-left ${transition},
    box-shadow ${transition};
`;

const activeClass = css`
  width: 32px;
  height: 32px;
  box-shadow: 0 0 12px #4A90E2;
`;

const disabledClass = css`
  background: #AAA;
`;

const clickableClass = css`
  cursor: pointer;
`;

export class PoiItem extends React.Component<{
  coordinates: {
    x: number;
    y: number;
  };
  active?: boolean;
  disabled?: boolean;
  onClick?(e: React.MouseEvent<HTMLElement, MouseEvent>): void;
}> {
  public render() {
    return (
      <div
        className={cx(mainClass, {
          [clickableClass]: Boolean(this.props.onClick && !this.props.disabled),
        })}
        role="menuitem"
        onClick={this.props.disabled ? undefined : this.props.onClick}
        style={{
          left: `${this.props.coordinates.x * 100}%`,
          top: `${this.props.coordinates.y * 100}%`,
        }}
      >
        <div
          className={cx(pointClass, {
            [activeClass]: this.props.active || false,
            [disabledClass]: this.props.disabled || false,
          })}
        />
      </div>
    );
  }
}
