import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component {
    
    deleteProduct = id => {
    axios.delete(`/api/inventory/${id}`)
    .then(res => {
        this.props.getInventory()
    })
    .catch(err => console.log("Can't delete product", err))
    }

    render() {
        return (
            <div>
                {this.props.inventory.map(product => {
                    return (
                        <Product key={product.id} id={product.id} name={product.name} price={product.price} img={product.img} deleteProduct={this.deleteProduct}/>            
                    )
                })}
            </div>
        )
    }
}

export default Dashboard