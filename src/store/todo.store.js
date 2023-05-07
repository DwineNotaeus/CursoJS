import { Todo } from "../todos/models/todo.model";

const FILTERS = {
  All: "all",
  Completed: "completed",
  Pending: "pending",
};

const state = {
  todos: [
    new Todo("Piedra del alma"),
    new Todo("Piedra del infinito"),
    new Todo("Piedra del tiempo"),
  ],
  filter: FILTERS.All,
};

const initStore = () => {
  console.log(state);
  console.log("InitStore 🍏");
};

export default {
  initStore,
};
