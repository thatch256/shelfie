import React, {Component} from 'react'
import axios from 'axios';

class Form extends Component {
    constructor() {
        super()
        
        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
        this.handleImageChange = this.handleImageChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.cancelInv = this.cancelInv.bind(this)
        this.addProduct = this.addProduct.bind(this)
    }

    handleImageChange(e) {
        let {imgValue} = e.target
        this.setState({
            imgurl: imgValue
        })
    }

    handleNameChange(e) {
        let {nameValue} = e.target
        this.setState({
            name: nameValue
        })
    }

    handlePriceChange(e) {
        let {priceValue} = e.target
        this.setState({
            price: priceValue
        })
    }

    cancelInv() {
        this.setState({
            name: '',
            price: 0,
            imgurl: ''
        })
    }

    addProduct() {
        axios.post('/api/product', {name: this.state.name, price: this.state.price, imgurl: this.state.imgurl})
        .then(res => { 
            this.props.getInventory()
            this.cancelInv()
          }) 
        .catch(err => console.log("Can't add product", err))
    } 

    render() {
        return (
            <div>
                <div>Image URL:
                    <input onChange={this.handleImageChange}/>
                </div>
                <div>Product Name:
                    <input onChange={this.handleNameChange}/>
                </div>
                <div>Price:
                    <input onChange={this.handlePriceChange}/>
                </div>
                <button onClick={this.cancelInv}>Cancel</button>
                <button onClick={this.addProduct}>Add to Inventory</button>
            </div>
        )
    } 
}

export default Form