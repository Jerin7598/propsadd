import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateItem, removeItem } from "./actions";
const Test1 = () => {
    const jsonArray = useSelector((state) => state.jsonArray);
    const dispatch = useDispatch();
  
    const onUpdateItemHandler = (itemId, updatedData) => {
      dispatch(updateItem(itemId, updatedData));
    };
  
    const onRemoveItemHandler = (itemId) => {
      dispatch(removeItem(itemId));
    };
  return (
    <div>
      <h1>This is a Test1 Component</h1>

      <div>
      {/* Render your component's content */}
      {jsonArray.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={() => onUpdateItemHandler(item.id, { name: "Updated Name" })}>
            Update
          </button>
          <button onClick={() => onRemoveItemHandler(item.id)}>Remove</button>
        </div>
   ))}
   </div></div>
  );
};

export default Test1;