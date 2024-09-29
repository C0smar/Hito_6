import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import NavComponent from './components/NavComponent'
import Home from './Pages/Home'
import Footer from './components/Footer'
import RegisterPages from './Pages/RegisterPages';
import LoginPages from './Pages/LoginPages'
import Cart from './Pages/Cart'
import Pizza from './Pages/Pizza'
import NotFound from './Pages/NotFound'
import Profile from './Pages/Profile'
import { Context } from './Context';  

function App() {
  return (
    <>
      <Context>  
        <NavComponent /> 
        <Routes>
          <Route 
            path="/"
            element= { <Home/> }
          />
          <Route 
            path="/register"
            element= { <RegisterPages/> }
          />
          <Route 
            path="/login"
            element= { <LoginPages/> }
          />
          <Route 
            path="/cart"
            element= { <Cart/> }
          />
          <Route 
            path="/pizza/p001"
            element= { <Pizza/> }
          />
          <Route 
            path="/profile"
            element= { <Profile/> }
          />
          <Route 
            path="/404"
            element= { <NotFound/> }
          />
        </Routes>
        <Footer />
      </Context>
    </>
  )
}

export default App;