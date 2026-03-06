import { useState } from "react";
import { useDispatchContext, useTodoItemsContext } from './todoUtil';

const AddItem = () => {
  const [itemName, setItemName] = useState('');
  const toDoDispatch = useDispatchContext();
  const todoItems = useTodoItemsContext();

  const addNewItemName = (event) => {
    setItemName(event.target.value);
  }
  const addItemOnClick = () => {
    toDoDispatch({
      type: 'add-item',
      id: todoItems.length,
      name: itemName
    });
    setItemName('');
  }
  return (
    <>
      <input value={itemName} onChange={addNewItemName}/>
      <button onClick={addItemOnClick}>Add</button>
    </>
  )
};
export default AddItem;