import React  from 'react';
import {Component} from 'react';
import './index.css';
import Slider from './homeslider';
import NewsList from './newslist';
class home extends Component 
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
      <div>
      <Slider/>
      <NewsList word=''/>
      </div>
      </div>
    );
    }
}
export default home;