import React  from 'react';
import {Component} from 'react';
import './index.css';
import Header from './header';
import Footer from './footer';
class layout extends Component 
{
  state={
    showNav:false,
  }
  toggleSidenav=(action) => {
    this.setState({
      showNav:action
    })
  }

  render(){
    return(
      <div>
      <Header  
      user={this.props.user}
      showNav={this.state.showNav}
      onHideNav={() => this.toggleSidenav(false)}
      onOpenNav={() => this.toggleSidenav(true)}
      />
      <div>
          {this.props.children}
      </div>
      <Footer/>
      </div>
    );
    }
}
export default layout;