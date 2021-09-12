import React from 'react';
import './newslist_item.css';
import {Link} from 'react-router-dom';
import Author from './author'

const NewslistItem=(props)=>
{
    let temp=null;
    temp= props.data.map((it,i) =>
       {
           return(
           <div key={i} className="outer">
               <Link to={{pathname:`${it.url}`}} target ="_blank">
            <div className="card">
                <Author author={it.author}/>
               <div className="news_title">
                  {it.title}
               </div>
               </div>
               </Link>
           </div>
           )
       })
  return (
      <div>
      <div>
          {temp}
      </div>
      </div>
  )
}
export default NewslistItem;