import React,{Component} from 'react';
import Sliders from './slider_item';
import axios from 'axios'

class homeslider extends Component
{
    state={
        news:[]
    }
    
componentWillMount()
{
    axios('https://gnews.io/api/v4/search?q=india&token=19d7c7863355c5f9fe08cf869d2bfd0a')
    .then( response =>{
        this.setState({
            news:(response.data.articles)
    })
})
}
  render(){
      return(
          <div>
          <Sliders data={this.state.news}/>
          </div>
      )
  }
}
export default homeslider;