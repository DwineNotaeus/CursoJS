import { Todo } from '../todos/models/todo.model';

const FILTERS = {
  All: 'all',
  Completed: 'completed',
  Pending: 'pending',
};

const state = {
  todos: [
    new Todo('Piedra del alma'),
    new Todo('Piedra del infinito'),
    new Todo('Piedra del tiempo'),
    new Todo('Piedra del poder'),
    new Todo('Piedra del realidad'),
  ],
  filter: FILTERS.All,
};

const initStore = () => {
  console.log(state);
  console.log('InitStore 🍏');
};

const loadStore = () => {
  throw new 'Not Implement'();
};

const getTodos = (filter = FILTERS.All) => {
  switch (filter) {
    case FILTERS.All:
      return [...state.todos]; // operador spred
    case FILTERS.Completed:
      return state.todos.filter((todo) => todo.done); // si todo.done es TRUE
    case FILTERS.Pending:
      return state.todos.filter((todo) => !todo.done); // si todo.done es FALSO
    default:
      throw new Error(`Opción ${filter} no es válida`);
  }
};

/**
 *
 * @param {string} description
 */
const addTodo = (description) => {
  if (!description) throw new Error('description es requerida');

  state.todos.push(new Todo(description));
};

const toogleTodo = (todoId) => {
  state.todos = state.todos.map((todo) => {
    if (todo.id === todoId) {
      todo.done = !todo.done;
    }
    return todo;
  });
};
const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
};

const deleteComplete = () => {
  state.todos = state.todos.filter((todo) => todo.done);
};
/**
 *
 * @param {FILTERS} newFilter
 */
const setFilter = (newFilter = FILTERS.All) => {
  state.filter = newFilter;
};

const getCurrentFilter = () => {
  return state.filter;
};

export default {
  addTodo,
  deleteComplete,
  deleteTodo,
  getCurrentFilter,
  getTodos,
  initStore,
  loadStore,
  setFilter,
  toogleTodo,
};
