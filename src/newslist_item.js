import React from 'react';
import './newslist_item.css';
import {Link} from 'react-router-dom';
import Time from './time';

const NewslistItem=(props)=>
{
    let temp=null;
    temp= props.data.map((it,i) =>
       {
           if(props.link === 'dont')
           {
            return(
                <div key={i} className="outer">
                     <Link to={{pathname:`${it.url}`}} target ="_blank">
                 <div className="card">
                    <div className="news_title">
                        <Time time={it.publishedAt}/>
                       {it.title}
                    </div>
                 </div>
                 </Link>
                </div>
     
                )

           }
           else
           {
           return(
           <div key={i} className="outer">
               <Link to={`./articles/${i}`}>
            <div className="card">
               <div className="news_title">
                   <Time time={it.publishedAt}/>
                  {it.title}
               </div>
            </div>
            </Link>
           </div>

           )
           }
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