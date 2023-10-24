import './App.css';
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react';
function Calculate(){
const[aa,setaa]=useState([{"price":25},{"price":50},{"price":75},{"price":250}])
const[bb,setbb]=useState();

const click1=()=>{
    console.log(aa[0].price)
    let z=0
    for(let x=0;x<aa.length;x=x+1){
z=z+aa[x].price
console.log(z)
    }
setbb(z)
    
}



    return (
        <div>
<button onClick={click1}>caculate</button><br></br>
<h2> {bb}</h2>

        </div>
      
        
       
        
        );
}

export default Calculate;