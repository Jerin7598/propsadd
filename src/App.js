
import './App.css';
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react';
function App(){
 const[add,setadd]=useState(0);
const[d,setd]=useState(0);


  const [a,seta]=useState([
    {img:"lap.png",name:"ASUS ROG Strix G15",price:"price=₹30,000",
    ph:"price=",price:65999,dp:"₹80,000",off:"10%0ff",
    h:"specifications:",
    spec1:"AMD Ryzen 7 Octa Core Processor",
    spec2:"16 GB DDR4 RAM",
    spec3:"Windows 11 Operating System",
    spec4:"1 TB SSD",
    spec5:"39.62 cm (15.6 inch) Display",clear:"clear"

  
  },
{img:"tv.png",name:"LG 80 cm WebOS TV",
ph:"Price =",price:50234,dp:"70,000",off:"20%off",
h:"specifications:",
spec1:"3-side Bezel-less Design,",
spec2:"impeccable HD Picture Quality,",
spec3:"One Remote Superiority...",
spec4:"Splendid HDR",
spec5:"PurColor Supremacy",clear:"clear"},

{img:"camara.png",name:"Canon EOS M50",price:"price=₹89,999",
 ph:"Price =",price:58599,dp:"₹74,000",off:"5%off",
 h:"Specifications:",
 spec1:"4K and vertical movies, Live YouTube streaming, Auto video transcoding, Use as a webcam,",
 spec2:" Great in low light, 10fps continuous shooting",
 spec3:" 3.5mm external microphone input,",
 spec4:"Full HD movie at 60p",
 spec5:" handy trick for taking group photos.",
 spec:"Effective Pixels: 24.1 MP",clear:"clear"
}]);
 


const [b,setb]=useState([]);
const touch1=(e1)=>{

  let y=e1.target.value
  let y1=a[y]
  setb(e=>[...e,y1]);                  
  
                          setadd(add+y1.price)   
                          console.log(add);
                          setd(d+1);
}

useEffect(()=>{
  console.log(b);
},[b])








  return (
    <div>
      
      <div className="all">
<div>


</div>

      <div>
     
      {a.map((v,a)=>{
     return (

<div>
        <div class="style">
         
          <h2 className="head">{v.name}</h2>
        <img src={v.img} width="250px"></img><br></br>
       
       <ul class="spec">
         <h2>{v.h}</h2>
        <li>{v.spec1}</li>
        <li>{v.spec2}</li>
        <li>{v.spec3}</li>
        <li>{v.spec4}</li>
        <li>{v.spec5}</li>
        </ul> 
       
       <ul className="off">
        <li className="hh"><h3>{v.ph}</h3></li>
        <li className="f">{v.price}</li>
        <li className="del"><del>{v.dp}</del></li>
        <li className="g">{v.off}</li>
       </ul>
        <button className="b3">Buy now</button>
        <button className="b3" value={a} onClick={touch1}>Add to cart</button>
      
      </div>
  

     </div> )})}
     </div>
      <div className="car">

     <button className="sh">
    <Link to={'/Home'} state={{from:b,from1:add,from2:d}}>
    
    <i class="fa fa-shopping-cart" aria-hidden="true"></i> MY Cart
    </Link></button> <br></br>

  
</div>
    
    </div> 
   
   </div>
  );
}

export default App;
