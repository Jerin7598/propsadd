import {useLocation} from 'react-router-dom'
import {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { updateItem, removeItem ,addItem} from "./actions";
function Update() {
    const location=useLocation();
  const { from}=location.state;
  const [m,setm]=useState(from.name);
  const [n,setn]=useState(from.age);
const id=from.id
  const a=(i)=>{
    setm(i.target.value);
   
  }

  const b=(j)=>{
    setn(j.target.value);
  }

  const dispatch = useDispatch();

  const onUpdateItemHandler = (itemId, updatedData) => {
    console.log(updatedData)
    dispatch(updateItem(itemId, updatedData));
   
    };
  
  
    return (
       <div>
        <input type="text" onChange={a} value={m}></input><br></br><br></br>

        <input type="text" onChange={b} value={n}></input>

        <button onClick={() => onUpdateItemHandler(id, { name:m,age:n})}>Submit</button>

      
      
       </div>
   
    );
}

export default Update;