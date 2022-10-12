/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { Todo } from '@nx-workshop/shared/domain';

const app = express();
const todos: Todo[] = [];

app.use(express.json());

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const todo: Todo = {
    id: todos.length,
    text: req.body.text,
    done: false,
  };

  todos.push(todo);

  res.json(todos);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
