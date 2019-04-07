import { Provider } from 'mobx-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { App } from './containers/App';

import '@blueprintjs/core/lib/css/blueprint.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <Provider state={state}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import io from 'socket.io-client';
import state from './state';

const socket = io({
  transports: ['polling'],
});

socket.on('init', (data: any) => {
  state.insert(data);
  state.onPatch((patch) => {
    socket.emit('patch', patch);
  });
});
socket.on('patch', state.applyPatch.bind(state));
