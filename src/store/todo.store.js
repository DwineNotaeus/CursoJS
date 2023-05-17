import { Todo } from '../todos/models/todo.model';

export const FILTERS = {
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
  loadStore();
  console.log('InitStore 🍏');
};

const loadStore = () => {
  if (!localStorage.getItem('state')) return;

  const { todos = [], filter = FILTERS.All } = JSON.parse(
    localStorage.getItem('state')
  );
  state.todos = todos;
  state.filter = filter;
};

const saveStateToLocalStored = () => {
  localStorage.setItem('state', JSON.stringify(state));
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
  localStorage.setItem('state', JSON.stringify(state));
};

/**
 *
 * @param {*} todoId
 */
const toogleTodo = (todoId) => {
  state.todos = state.todos.map((todo) => {
    if (todo.id === todoId) {
      todo.done = !todo.done;
    }
    return todo;
  });
  saveStateToLocalStored();
};
const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
  saveStateToLocalStored();
};

const deleteComplete = () => {
  state.todos = state.todos.filter((todo) => !todo.done);
  saveStateToLocalStored();
};
/**
 *
 * @param {FILTERS} newFilter
 */
const setFilter = (newFilter = FILTERS.All) => {
  state.filter = newFilter;
  saveStateToLocalStored();
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
