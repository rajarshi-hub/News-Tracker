import React, {Component}  from 'react';
import NewsPostItem from './newspostitem';
import './newslist.css';
import firebase from './firebase';

class Newslist extends  Component
{
    state={
        item:[],
        more_news:[],
        i:0

    }

    componentWillMount()
    {
        firebase.database().ref('articles').once('value')
        .then((snapshot)=>{
            const articles=[]
                snapshot.forEach((childSnapshot) => {
                    articles.push({
                        ...childSnapshot.val()
                    })
                })
                this.setState({
                    item:articles
                })

                    
            })
    }
    render()
    {
        console.log(this.state.item);
        return(
            <div>
                <strong><h2 style={{color:"#454545"}}>
                    Posted By Users
                </h2></strong>
            <div>
              <NewsPostItem data={this.state.item}/>
            </div>
            </div>
        )
    }
}
export default Newslist;
