import './App.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Signup from './pages/Auth/Signup';
import Signin from './pages/Auth/Signin';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';


//import { createRoot } from "react-dom/client";
function App() {
  return (
    <BrowserRouter>
      <div>
       <Navbar/>

       <div id="content">
        <Routes>
          <Route path="/" exact Component={Products}></Route>
          <Route path="/product/:product_id" Component={ProductDetail}></Route>
          <Route path="/signin" Component={Signin}>Sign in</Route>
          <Route path="/signup" Component={Signup}> Sign up</Route>
        
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
