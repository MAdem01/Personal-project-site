import express from 'express';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirPath = dirname(fileURLToPath(import.meta.url));
const clientPath = join(__dirPath, '..', 'client');

const app = express();

app.listen(4000, () => console.log('Your server is running on port: 4000'));

app.use('/static', express.static(clientPath));

app.get('/', (req, res) => {
  const mainPageHtml = join(clientPath, 'index.html');
  res.sendFile(mainPageHtml);
});
