import React, {Component}  from 'react';
import NewslistItem from './newslist_item';
import './newslist.css';
import axios from 'axios';

class Newslist extends  Component
{
    state={
        item:[],
        more_news:[]

    }

    componentWillMount()
    {
        
        axios(`https://gnews.io/api/v4/search?q=india&token=19d7c7863355c5f9fe08cf869d2bfd0a`)
    .then( response =>{
        this.setState({
            item:(response.data.articles)
    })
})
    }
    
    render()
    {
        
        return(
            <div>
            <div>
                <br></br>
                {this.props.word}
              <NewslistItem data={this.state.item}/>
            </div>
            <br></br>
            <br></br>
            </div>
        )
    }
}
export default Newslist;
