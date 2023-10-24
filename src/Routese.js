import Testme from './Testme';

import Update from './Update';
import App from './App'
import Home from './Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function Routese(){
    return (
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        
       

</Routes>
       
       </BrowserRouter> 
    );
}
export default Routese;