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

  element.innerHTML = ''; //* Esto evita apilar o acumular elementos al invocar el método Renderizar

  todos.forEach((todo) => {
    element.append(createTodoHTML(todo));
  });
};
