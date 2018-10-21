import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="Shop">
        <h1>Shop</h1>
        <div className="ShopList">
        </div>
       </div>
       <div className="Add">
        <div>
          <h3>Name</h3>
          <input className="nameInput"></input>
          <input className="priceInput"></input>
          <input className="quantityInput"></input>
          <button>Add to shop</button>
        </div>
       </div>
       <div className="Cart">
        <h1>Client Cart</h1>
       </div>
      </div>
    );
  }
}

export default App;
