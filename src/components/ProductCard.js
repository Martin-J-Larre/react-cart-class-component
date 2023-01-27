import { Component } from 'react';
import Button from '../components/Button'


const styles = {
  product: {
    width: '20%',
    border: '1px solid #eee',
    margin: '10px',
    boxShadow: '0 5px 5px rgb(0, 0, 0, .1)',
    padding: '10px', 
    borderRadius: '5px'
  },
  image: {
    width: '100%'
  },
  text: {
    margin: '5px 0',
    textAlign: 'center'
  }
}

class ProductCard extends Component{
  render(){
    const { product, addToCart } = this.props;
    return(
      <div style={ styles.product }>
        <img 
          style={ styles.image }
          alt={ product.name } 
          src={ product.img }
        />
        <h3 style={styles.text}>{ product.name }</h3>
        <p style={styles.text}>{ product.price }</p>
        <Button onClick={() => addToCart(product)}>
          Add to cart
        </Button>
      </div>
    )
  }
}

export default ProductCard;