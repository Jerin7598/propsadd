import React from "react";

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { updateItem, removeItem ,addItem} from "./actions";
import Test1 from './Test1';

const Testme = () => {
  const jsonArray = useSelector((state) => state.jsonArray);
  const dispatch = useDispatch();

  const onUpdateItemHandler = (itemId, updatedData) => {
    dispatch(updateItem(itemId, updatedData));
  };

  const onRemoveItemHandler = (itemId) => {
    dispatch(removeItem(itemId));
  };
  const onAddItemHandler = () => {
    let data={id:4,name:"vinoth",age:33};
    dispatch(addItem(data));
  };
  return (
    <div>
      {/* Render your component's content */}
      {jsonArray.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.age}</p>
          
         
            <Link state={{from:item}} to='/Update'>
            Update
          </Link>
          <button onClick={() => onRemoveItemHandler(item.id)}>Remove</button>
          <br/>
          <button onClick={() => onAddItemHandler()}>Add</button>

         
          
        

       
        </div>
      ))}

    
    </div>
  );
};

export default Testme;
