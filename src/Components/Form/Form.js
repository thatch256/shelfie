import React, {Component} from 'react'
import axios from 'axios';

class Form extends Component {
    constructor() {
        super()
        
        this.state = {
            name: '',
            price: 0,
            img: ''
        }
        this.handleImageChange = this.handleImageChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.cancelInv = this.cancelInv.bind(this)
        this.addProduct = this.addProduct.bind(this)
    }

    handleImageChange(e) {
        this.setState({
            img: e.target.value
        })
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handlePriceChange(e) {
        this.setState({
            price: e.target.value
        })
    }

    cancelInv() {
        this.setState({
            name: '',
            price: 0,
            img: ''
        })
    }

    addProduct() {
        console.log(this.state)
        axios.post('/api/product', {name: this.state.name, price: this.state.price, img: this.state.img})
        .then(res => { 
            this.props.getInventory()
            this.cancelInv()
          }) 
        .catch(err => console.log("Can't add product", err))
    } 

    render() {
        return (
            <div>
                <div>Product Name:
                    <input value={this.state.name} onChange={this.handleNameChange}/>
                </div>
                <div>Price:
                    <input value={this.state.price} onChange={this.handlePriceChange}/>
                </div>
                <div>Image URL:
                    <input value={this.state.img} onChange={this.handleImageChange}/>
                </div>
                <button onClick={this.cancelInv}>Cancel</button>
                <button onClick={this.addProduct}>Add to Inventory</button>
            </div>
        )
    } 
}

export default Form