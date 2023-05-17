import todoStore, { FILTERS } from '../../store/todo.store';

let element;
/**
 *
 * @param {*} elementId
 */
export const renderPending = (elementId) => {
  if (!element) {
    element = document.querySelector(elementId);
  }

  if (!element) {
    throw new Error(`Elemento ${elementId} not found`);
  }

  element.innerHTML = todoStore.getTodos(FILTERS.Pending).length;
};
