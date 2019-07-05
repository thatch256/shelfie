import React, {Component} from 'react'

class Product extends Component {
    render() {
        let {imgurl, name, price} = this.props
        return (
            <div>
                {imgurl} {name} {price}
            </div>
        )
    }
}

export default Product