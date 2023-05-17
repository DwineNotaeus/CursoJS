import todoStore, { FILTERS } from '../store/todo.store';
import html from './app.html?raw';
import { renderPending, renderTodos } from './use-cases';

const ElementIDs = {
  TodoList: '.todo-list',
  NewTodoInput: '#new-todo-input',
  ClearCompletedButton: '.clear-completed',
  Filters: '.filtro',
  PendingCountLabel: '#pending-count',
};

/**
 *
 * @param {*} elementId
 */
export const App = (elementId) => {
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(ElementIDs.TodoList, todos);
    updatePendingCount();
  };

  const updatePendingCount = () => {
    renderPending(ElementIDs.PendingCountLabel);
  };

  //* Funtion main of App()
  (() => {
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();

  //Referencias HTML
  const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
  const todoListUL = document.querySelector(ElementIDs.TodoList);
  const clearCompletedButton = document.querySelector(
    ElementIDs.ClearCompletedButton
  );
  const filtersUL = document.querySelectorAll(ElementIDs.Filters);

  //Listeners
  newDescriptionInput.addEventListener('keyup', (event) => {
    if (event.keyCode !== 13) return;
    if (event.target.value.trim().lenght === 0) return;

    todoStore.addTodo(event.target.value);
    displayTodos();
    event.target.value = '';
  });

  todoListUL.addEventListener('click', (event) => {
    const element = event.target.closest('[data-id]');
    // console.log(element);
    // console.log(element.getAttribute('data-id'));
    if (!element) return; // no es posible eliminar elemento(variable -> element) ya que es null
    let todoId = element.getAttribute('data-id');
    todoStore.toogleTodo(todoId);
    displayTodos();
  });

  todoListUL.addEventListener('click', (event) => {
    const isDestroyElement = event.target.className === 'destroy';
    const element = event.target.closest('[data-id]');
    if (!element || !isDestroyElement) return;

    todoStore.deleteTodo(element.getAttribute('data-id'));
    displayTodos();
  });

  clearCompletedButton.addEventListener('click', () => {
    todoStore.deleteComplete();
    displayTodos();
  });

  filtersUL.forEach((element) => {
    element.addEventListener('click', (element) => {
      filtersUL.forEach((el) => el.classList.remove('selected'));
      element.target.classList.add('selected');

      switch (element.target.text) {
        case 'Todos':
          todoStore.setFilter(FILTERS.All);
          break;
        case 'Pendientes':
          todoStore.setFilter(FILTERS.Pending);
          break;
        case 'Completados':
          todoStore.setFilter(FILTERS.Completed);
          break;
      }

      displayTodos();
    });
  });
};
