/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { Todo } from '@nx-workshop/shared/domain';

const app = express();
const todos: Todo[] = [];

app.get('/api/todos', (req, res) => {
  res.send(todos);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
