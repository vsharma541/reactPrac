import { useState } from "react";
import { useDispatchContext, useTodoItemsContext } from './todoUtil';

const Item = ({ item }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editName, setEditName] = useState(item.name);
  const toDoDispatch = useDispatchContext();

  const editButtonAction = (event) => setEditName(event?.target.value);

  const itemButtonClickAction = () => {
    if (isEdit) {
      toDoDispatch({
        type: 'edit-item',
        id: item.id,
        name: editName
      });
    }
    setIsEdit(!isEdit);
  }

  const itemDeleteAction = () => {
    toDoDispatch({
      type: 'delete-item',
      id: item.id
    })
  }

  return (
    <>
      {isEdit ? <input onChange={editButtonAction} value={editName}/> : item.name}
      <button onClick={itemButtonClickAction}>{isEdit ? 'Save' : 'Edit'}</button>
      <button onClick={itemDeleteAction}>Delete</button>
    </>
  );
}

const ToDoList = () => {
  const todoItems = useTodoItemsContext();
  return (
    <ul>
      {todoItems.map(item => (
        <li key={item.id}>
          <Item item={item} />
        </li>
      ))}
    </ul>
  )
}

export default ToDoList;
