import "./style.css";
import { App } from "./src/todos/app";
// Cuando es una exportación por defecto va SIN las llaves E.g.  Store sin { }
import Store from "./src/store/todo.store";

Store.initStore();

App("#app");
