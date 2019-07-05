import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: []
    }
    this.getInventory = this.getInventory.bind(this)
  }

  componentDidMount() {
   this.getInventory()
  }

  getInventory() {
    axios.get('/api/inventory')
    .then(res => { 
      this.setState({
        inventory: res.data
      })
    })
    .catch(err => {
      console.log('SERVER ERROR', err);
    })
  }

  render() {
  return (
    <div className="App">
     <Dashboard inventory={this.state.inventory} getInventory={this.getInventory}/>
     <Form getInventory={this.getInventory}/>
     <Header />
    </div>
  )};
}

export default App;
