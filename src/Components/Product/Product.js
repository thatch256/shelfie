import React, {Component} from 'react'

class Product extends Component {
    
    render() {
        let {name, price, img} = this.props
        return (
            <div>
                {name} {price} {img} <button onClick={() => this.props.deleteProduct(this.props.id)}>Delete</button>
            </div>
        )
    }
}

export default Product