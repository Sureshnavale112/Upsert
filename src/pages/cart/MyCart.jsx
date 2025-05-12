import React from 'react';
import Cart from '../../components/Cart/Cart';
import CertCardList from '../../components/CertCardList/CertCardList';


const MyCart = () => {
  return (
    <main className="my-cart-container">
      <Cart />   
      <CertCardList/>
    </main>
  );  
};

export default MyCart;
