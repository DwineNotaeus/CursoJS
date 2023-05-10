import { Todo } from '../models/todo.model';
import { createTodoHTML } from './create-todo-html';

let element;

/**
 *
 * @param {string} elementId
 * @param {Todo} todos
 */
export const renderTodos = (elementId, todos = []) => {
  if (!element) element = document.querySelector(elementId);
  if (!element) throw new Error('Element id not found');

  todos.forEach((todo) => {
    element.append(createTodoHTML(todo));
  });
};