import { css, cx } from 'emotion';
import { observer } from 'mobx-react';
import * as React from 'react';

import { Item } from '../state/models';
import { InlineSVG } from './InlineSVG';
import { PoiItem } from './PoiItem';

const mainClass = css`
  position: relative;
  max-width: 95vw;
  width: 600px;

  svg {
    width: 100%;
    height: auto;
    transition: opacity .3s ease-in-out;
  }

  @media (max-width: 800px) {
    width: fit-content;
    margin: 32px auto 0;
    text-align: center;

    svg {
      width: auto;
      max-width: 100%;
      max-height: 500px;
    }
  }
`;

const selectedClass = css`
  svg {
    opacity: 0.8;
  }
`;

@observer
export class Map extends React.Component<{
  items: Array<Item>;
  activePoi?: Item;
  className?: string;
  onClick?(selected?: Item): (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}> {
  public render() {
    const { activePoi, className, onClick, items } = this.props;

    return (
      <div
        className={cx(mainClass, className, {
          [selectedClass]: Boolean(activePoi),
        })}
        onClick={onClick && onClick()}
        role="menuitem"
      >
        <InlineSVG src="/floorplan.svg" />
        {
          items.map((poi) => (
            <PoiItem
              key={poi.meta.id}
              coordinates={poi.coordinates}
              onClick={onClick && onClick(poi)}
              active={activePoi === poi}
              disabled={poi.disabled}
            />
          ))
        }
      </div>
    );
  }
}
