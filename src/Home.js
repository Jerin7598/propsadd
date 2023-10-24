
import './App.css';

import App from './App';
import {useLocation} from 'react-router-dom'
import {useState} from 'react';

function Home() {
 


  const location=useLocation();
  const { from,from1,from2 }=location.state;

  const[c,setc]=useState(from);
  const[c2,setc2]=useState(from1);
  const[d1,setd1]=useState(from2)

 
  
  const touch2=(e2)=>{
     let x=e2.target.value;
let v=[...c];

setc2(c2-v[x].price)
     v.splice(x,1);
   setc(v);
    console.log(c)

    setd1(d1-1);
  
 
    
    
  }
  

  return ( 
     
  <div>
  
    <div> 
       <marquee><h2 className="cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Your Cart</h2></marquee>
      <table>
        <tr>
         <th><h2>product Name</h2></th>
          <th><h2>Image</h2></th>
          <th><h2>Price</h2></th>
          <th>clear cart</th>
        </tr><br></br>
        
         
      {c.map((data,key)=>(
        <tr>
     
    <th ><p>{data.name}</p></th>
    <th><img src={data.img} width="200px"></img></th>
    <th><p>₹{data.price}</p></th>
    <th>
    <button onClick={touch2} value={key} >clear</button>
      </th>
    </tr>
    
    
  ))}


  
    </table> 
    
    <h2 className="amount">Number of product={d1}</h2>
    <h2 className="amount">Total Amount = ₹ {c2}</h2>
    
 </div>
  </div>

   
  );
}

export default Home;