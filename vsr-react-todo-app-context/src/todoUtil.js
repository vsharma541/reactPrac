import { createContext, useContext } from "react";
import { todoList } from "../public/data.js";

const TodoDispatch = createContext(null);
const ToDoItemsContext = createContext(todoList);

const myReducer = (items, action) => {
  switch(action.type) {
    case 'add-item':
      items.push({
        id: action.id,
        name: action.name
      });
      break;
    case 'edit-item':
      const editedItem = items.find(item => item.id === action.id);
      editedItem.name = action.name;
      break;
    case 'delete-item':
      const itemToDelete = items.find(item => item.id === action.id);
      const index = items.indexOf(itemToDelete);
      items.splice(index, 1);
      break;
    default:
      return;
  }
}

const useDispatchContext = () => useContext(TodoDispatch);

const useTodoItemsContext = () => useContext(ToDoItemsContext);

export {
    ToDoItemsContext,
    TodoDispatch,
    myReducer,
    useDispatchContext,
    useTodoItemsContext
}