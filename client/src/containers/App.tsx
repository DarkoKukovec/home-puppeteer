import { css, cx } from 'emotion';
import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';

import { Map } from '../components/Map';
import { PoiDetails } from '../components/PoiDetails';
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
  max-width: 800px;
  min-width: 400px;
  flex: 3;
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

const containerClass = css`
  display: flex;
  flex-wrap: wrap;
`;

const sidebarClass = css`
  flex: 1;
  min-width: 400px;
  padding-top: 20px;
  padding-right: 20px;
`;

@observer
export class App extends React.Component<{
  history: {
    push(url: string): void;
  };
  location: {
    pathname: string;
  };
}> {
  public componentState: {
    selectedPoi?: string | number;
  } = observable({
    selectedPoi: undefined,
  });

  private get selectedPoiId() {
    return this.props.location.pathname.slice(1);
  }

  @computed
  private get selectedPoi() {
    return this.selectedPoiId
      ? state.findItem(this.selectedPoiId)
      : undefined;
  }

  public render() {
    return (
      <div className={cx(mainClass, 'bp3-dark')}>
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
        <div className={containerClass}>
          <Map
            className={cx(mapClass, {
              // [tiltedClass]: Boolean(this.selectedPoi),
            })}
            items={state.items}
            onClick={this.onPoiClick}
            activePoi={this.selectedPoi}
          />
          {this.selectedPoi && <PoiDetails className={sidebarClass} item={this.selectedPoi} />}
        </div>
      </div>
    );
  }

  @action.bound
  private onPoiClick(selected?: Item) {
    return (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      e.stopPropagation();
      const id = (!selected || this.componentState.selectedPoi === selected.meta.id)
        ? undefined : selected.meta.id;

      if (id !== undefined) {
        this.props.history.push(`/${id}`);
      }
    };
  }
}
