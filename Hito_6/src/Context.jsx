import { createContext, useState, useEffect } from "react";
import React from 'react';

export const MyContext = createContext({});

export const Context = ({children}) => {

  
  const [pizzasApi, setPizzasApi] = useState([]);
  const [pizzaCart, setPizzaCart] = useState([]);

  useEffect(() => {
    userFetch();
  }, []);

  useEffect(() => {
    if (pizzasApi.length > 0) {
      setPizzaCart(pizzasApi.map(pizza => ({ ...pizza, cantidad: 0 })));
    }
  }, [pizzasApi]);

  async function userFetch() {
    const response = await fetch('http://localhost:5000/api/pizzas');
    const pizzasApi = await response.json();
    setPizzasApi(pizzasApi);
  }

 
  const incrementarCantidad = (index) => {
    const actualizarCart = [...pizzaCart];
    actualizarCart[index].cantidad += 1;
    setPizzaCart(actualizarCart);
  };

  const disminuirCantidad = (index) => {
    const actualizarCart = [...pizzaCart];
    if (actualizarCart[index].cantidad > 1) {
      actualizarCart[index].cantidad -= 1;
    } else {
      actualizarCart.splice(index, 1);
    }
    setPizzaCart(actualizarCart);
  };

  const totalPrice = pizzaCart.reduce(
    (total, pizza) => total + pizza.price * pizza.cantidad,
    0
  );

  const globalState = {
    pizzasApi,
    totalPrice,
    disminuirCantidad,
    incrementarCantidad,
    pizzaCart,
  };

  return (
    <MyContext.Provider value={globalState}>
      {children}
    </MyContext.Provider>
  );
};

