import React, {Component} from 'react'
import Product from '../Product/Product'

class Dashboard extends Component {
    render() {
        return (
            <div>
                {this.props.inventory.map(product => {
                    return (
                        <Product key={product.id} imgurl={product.img} name={product.name} price={product.price}/>            
                    )
                })}
            </div>
        )
    }
}

export default Dashboard