import React from 'react';
import Logo from './image/logo.jpeg'
import './Expense.css'
function Header({totalExpenses}) {
  return (
    <header>
         <div class="images" >
          <img src = {Logo} width = "150" alt="logo"/></div>
      <h1 className="Ex-topic">Machine Expenses </h1>
      <div className="total-expense">Rs{totalExpenses}</div>
    </header>
  );
}

export default Header;