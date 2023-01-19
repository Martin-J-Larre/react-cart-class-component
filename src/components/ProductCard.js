import { Component } from 'react';


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
  }
}

class ProductCard extends Component{
  render(){
    const { product } = this.props;
    return(
      <div style={ styles.product }>
        <img 
          style={ styles.image }
          alt={ product.name } 
          src={ product.img }
        />
        <h3>{ product.name }</h3>
        <p>{ product.price }</p>
      </div>
    )
  }
}

export default ProductCard;