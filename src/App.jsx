import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import ProductCard from './components/Product';
import ContactForm from './components/Contact';
import SignUp from './components/SignUp';
import {Routes, Route} from 'react-router-dom'
import Product1 from "./components/ProductDetail";
import BestSeller from './components/BestSeller';

function App() {
  
  return (
    
    <div className="App bg-black">
      <Navbar/>
      <Routes>
      <Route path='/' element={<LoginForm/>}></Route>
      <Route path='Product' element={<ProductCard/>}></Route>
      <Route path='Featured' element={<BestSeller/>}></Route>
      <Route path='Contact' element={<ContactForm/>}></Route>
      <Route path='SignUp' element={<SignUp/>}></Route>
      <Route path='/product/:id' element={<Product1/>}></Route>
    </Routes> 
    </div>
  )
}

export default App
