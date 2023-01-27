import { Component} from 'react';

const styles = {
  button: {
    backgroundColor: '#20c997',
    color: '#fff',
    padding: '10px 15px',
    border: 'none', 
    cursor: 'pointer',
    borderRadius: '5px'
  }
}

class Button extends Component{

  render(){
    return(
      <button style={styles.button} {...this.props} />
    )
  }
}

export default Button;

