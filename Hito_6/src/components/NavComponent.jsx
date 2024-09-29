import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, } from "react-router-dom"
import { MyContext } from '../Context';
import React, { useState,useContext } from 'react';


const NavComponent = () => {

  const {totalPrice } = useContext(MyContext);  
  const token = true;

 
  const formatTotal = (amount) => {
    return amount.toLocaleString('es-ES', { style: 'currency', currency: 'CLP' });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">¡Pizzería Mamma Mía! </a>
        <Link to='/' className="navbar-brand" href="#">🍕 Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            {token ? (
              <>
                <li className="nav-item">
                <Link to='/profile' className="btn btn-outline-light me-2">🔓 Profile</Link>
                </li>
                
              
              </>
            ) : (
               <>
                <li className="nav-item">
                  <button className="btn btn-outline-light me-2">🔐 Login</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light me-2">🔐 Register</button>
                </li>
              </> 
            )}
            </ul>
            <ul className="navbar-nav ms-auto me-3">
            <li className="nav-item">
                <Link to='/pizza/p001' className="btn btn-outline-light me-2">🔓 Pizza p001</Link>
                </li>
              <li className="nav-item">
                <Link to='cart' className="btn btn-outline-primary">🛒 Total: {formatTotal(totalPrice)}</Link>
              </li>
            </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;