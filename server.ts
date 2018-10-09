import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { HOST, PORT } from './config';

const app = express();

const indexPath = path.join(__dirname, 'client', 'dist', 'index.html');

if (process.env.NODE_ENV !== 'development') {
  app.use(express.static('client/dist'));
  app.get('*', (req, res) => {
    res.set('Content-Type', 'text/html');
    fs.createReadStream(indexPath).pipe(res);
  });
}

app.listen(PORT, HOST, () => {
  console.log(`Listening on ${HOST}:${PORT}...`);
});
