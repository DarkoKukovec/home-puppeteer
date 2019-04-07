import { ROOMS, PLUGINS } from '../../config';
import state from '../state';
import { Room } from '../state/models';
import { Model } from 'datx';

Object.keys(PLUGINS).forEach((activePlugin) => {
  const data = state.add<Model>(PLUGINS[activePlugin], activePlugin);
});

Object.keys(ROOMS).forEach((id) => {
  state.add({ id, ...ROOMS[id] }, Room);
})

// console.log(state.snapshot);
