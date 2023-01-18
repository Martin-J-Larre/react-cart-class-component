import { Component, Fragment } from 'react';
import ProductCard from './ProductCard';

class ProductsList extends Component{
  render(){
    const { addToCart, products } = this.props;

    return(
      <Fragment>
        {products.map(product =>
          <ProductCard 
            addToCart={ addToCart }
            product={ product }
            key={ product.name }
          />
        )}
      </Fragment>
    )
  }
}

export default ProductsList;