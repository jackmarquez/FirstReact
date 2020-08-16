import React, { Component } from 'react';
import './App.css';
import { ClientList } from './components/client-list/client-list.component'
import { SearchBox } from './components/searchfield/search.component'

class App extends Component {
  constructor(){
    super();

    this.state = {
      orders : [],
      searchField: ''
    };
}
componentDidMount(){
  fetch('https://erp.technestudioit.com/api/ordersapi/')
  .then(response => response.json())
  .then(orders => this.setState({orders: orders}));
}
  render(){
    const { orders, searchField } = this.state;
    const filteredOrders = orders.filter(order => 
      order.client_name.toLowerCase().includes(searchField.toLowerCase()) );
    return (
      <div className="App">
        <h1>Clientes</h1>
        <SearchBox
          placeholder = 'Buscar Cliente'
          handleChange = {e => this.setState({searchField : e.target.value})}
        />
        <ClientList orders={filteredOrders}>
        </ClientList>
      </div>
    );
}
}

export default App;
