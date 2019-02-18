import { css, cx } from 'emotion';
import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';

import { Map } from '../components/Map';
import state from '../state';
import { Item } from '../state/models';

// fetch('/api/rooms').then((res) => res.json()).then(state.insert.bind(state));
// fetch('/api/items').then((res) => res.json()).then(state.insert.bind(state));

// @ts-ignore
window.debug = { state };

const mainClass = css`
  max-width: 1280px;
  padding: 0 20px;
  margin: auto;
`;

const mapClass = css`
  transform: perspective(300px) rotateX(5deg) scale(0.8) translateY(-100px);
`;

const titleClass = css`
  color: #FFF;
  font-size: 40px;

  > span {
    color: #AAA;
    font-size: 32px;
    line-height: 46px;
    vertical-align: top;
  }
`;

@observer
export class App extends React.Component {
  public componentState: {
    selectedPoi?: string | number;
  } = observable({
    selectedPoi: undefined,
  });

  @computed
  private get selectedPoi() {
    return this.componentState.selectedPoi
      ? state.find(Item, this.componentState.selectedPoi) || undefined
      : undefined;
  }

  public render() {
    return (
      <div className={mainClass}>
        <h1 className={titleClass}>
          Home control
          {this.selectedPoi &&
            <React.Fragment>
              <span> / </span>
              {this.selectedPoi.room.name}
              <span> / </span>
              {this.selectedPoi.name}
            </React.Fragment>
          }
        </h1>
        <Map
          className={cx(mapClass, {
            // [tiltedClass]: Boolean(this.selectedPoi),
          })}
          items={state.items}
          onClick={this.onPoiClick}
          activePoi={this.selectedPoi}
        />
      </div>
    );
  }

  @action.bound
  private onPoiClick(selected?: Item) {
    return (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      e.stopPropagation();
      this.componentState.selectedPoi = (!selected || this.componentState.selectedPoi === selected.meta.id)
        ? undefined : selected.meta.id;
    };
  }
}
