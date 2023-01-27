import { Component } from 'react';

const styles = {
  layout: {
    backgroundColor: '#F5F5F5',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  container: {
    width: '1000px'
  }
}

class Layout extends Component{
  render(){
    return(
      <div style={styles.layout}>
        <div style={styles.container}>{this.props.children}</div>
      </div>
    )
  }
}

export default Layout;