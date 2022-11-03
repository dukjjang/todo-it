import express from 'express';
import 'express-async-errors';

let todos = [
  {
    id: '1',
    title: '청소하기',
    createAt: Date.now().toString(),
    completed: true,
  },
  {
    id: '2',
    title: '공부하기',
    createAt: Date.now().toString(),
    completed: false,
  },
  {
    id: '3',
    title: '영화보기',
    createAt: Date.now().toString(),
    completed: false,
  },
];

const router = express.Router();

// Get /todos
router.get('/', (req, res, next) => {
  const id = req.query.id;
  const data = id ? todos.filter((tweet) => tweet.id === id) : todos;
  res.status(200).json(data);
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const todo = todos.find((tweet) => tweet.id === id);
  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(404).json({ message: `Todo id(${id}) not found` });
  }
});

router.post('/', (req, res, next) => {
  const { title } = req.body;
  const todo = {
    id: Date.now().toString(),
    title,
    createAt: new Date(),
    completed: false,
  };
  todos = [todo, ...todos];
  res.status(201).json(todo);
});

// PUT
router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const { title, completed } = req.body;
  let todo = todos.find((tweet) => tweet.id === id);
  if (title) todo.title = title;
  else if (!title) {
    todo.completed = completed;
    res.status(200).json(todo);
  } else {
    res.status(404).json({ message: `Todo id(${id}) not found` });
  }
});

//Delete
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  const todo = todos.find((tweet) => tweet.id === id);
  if (todo) todos = todos.filter((t) => t.id !== id);
  res.status(200).json(todos);
});

// Get /todos?todoid=:id
// GET /todos/:id
// POST /todos
// PUT /todos/:id
// DELETE /todos/:id
export default router;
