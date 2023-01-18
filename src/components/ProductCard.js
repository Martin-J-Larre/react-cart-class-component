import { Component, Fragment } from 'react';

class ProductCard extends Component{
  render(){
    const { product } = this.props;
    return(
      <Fragment>
        <img 
          alt={ product.name } 
          src={ product.img }
        />
        <h3>{ product.name }</h3>
        <p>{ product.price }</p>
      </Fragment>
    )
  }
}

export default ProductCard;