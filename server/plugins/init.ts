import { ROOMS, PLUGINS } from '../../config';
import state from '../state';
import { Room } from '../state/models';

Object.keys(PLUGINS).forEach((activePlugin) => {
  state.add(PLUGINS[activePlugin], activePlugin);
});

Object.keys(ROOMS).forEach((id) => {
  state.add({id, ...ROOMS[id]}, Room);
})

// console.log(state.snapshot);
