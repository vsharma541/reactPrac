import { ToDoItemsContext, TodoDispatch, myReducer } from "./todoUtil";
import { useImmerReducer } from "use-immer";
import { todoList } from "../public/data";

const TodoParent = ({ children }) => {
  const [items, dispatch] = useImmerReducer(myReducer, todoList);
  return (
    <ToDoItemsContext value={items}>
      <TodoDispatch value={dispatch}>{children}</TodoDispatch>
    </ToDoItemsContext>
  );
};

export default TodoParent;
