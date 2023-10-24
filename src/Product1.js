import './App.css';
import Home from './Home';
import App from './App';
import Calculate from './Calculate';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
function Product1(){
    return (
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Calculate' element={<Calculate/>}></Route>
       

</Routes>
       
       </BrowserRouter> 
    );
}
export default Product1;