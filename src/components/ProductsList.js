import { Component, Fragment } from 'react';
import ProductCard from './ProductCard';

const styles = {
  products: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  }
}

class ProductsList extends Component{
  render(){
    const { addToCart, products } = this.props;

    return(
      <div style={ styles.products }>
        {products.map(product =>
          <ProductCard 
            addToCart={ addToCart }
            product={ product }
            key={ product.name }
          />
        )}
      </div>
    )
  }
}

export default ProductsList;