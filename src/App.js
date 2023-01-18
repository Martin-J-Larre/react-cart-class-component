import { Component,Fragment } from 'react';
import  ProductsList  from './components/ProductsList';

class App extends Component {
  state = {
    products: [
      { name: 'product1', price: 10, img: './products/sushi1.png' },
      { name: 'product2', price: 20, img: './products/sushi2.png' },
      { name: 'product3', price: 15, img: './products/sushi3.png' },
      { name: 'product4', price: 10, img: './products/sushi4.png' },
      { name: 'product5', price: 15, img: './products/sushi5.png' },
      { name: 'product6', price: 20, img: './products/sushi6.png' },
      { name: 'product7', price: 10, img: './products/sushi7.png' },
      { name: 'product8', price: 15, img: './products/sushi8.png' }
    ]
  }
  render(){
    return (
      <Fragment>
        <ProductsList
          addToCart={() => console.log("Working")}
          products={this.state.products}
        />
      </Fragment>
    )
  }
}


export default App;
