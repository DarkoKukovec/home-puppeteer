import { Model } from 'datx';
import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';

import { HOST, PORT } from './config';
import './server/plugins/init';
import state from './server/state';
import { Item, Room } from './server/state/models';

const app = express();

const indexPath = path.join(__dirname, 'client', 'dist', 'index.html');

app.use(express.static(path.join(__dirname, 'static')));

app.get('/api/rooms', (_req, res) => {
  res.send(state.findAll(Room).map((room) => room.meta.snapshot));
});
app.get('/api/items', (_req, res) => {
  res.send(state.findAll(Item).map((item) => item.meta.snapshot));
});
app.get('/api/:type', (req: express.Request, res) => {
  res.send(state.findAll(req.params.type).map((item: Model) => item.meta.snapshot));
});

if (process.env.NODE_ENV !== 'development') {
  app.use(express.static('./client/dist'));
  app.get('*', (_req, res) => {
    res.set('Content-Type', 'text/html');
    fs.createReadStream(indexPath).pipe(res);
  });
}

app.listen(PORT, HOST, () => {
  console.log(`Listening on ${HOST}:${PORT}...`);
});
