import React from 'react';
import './sideitem.css';
import {Link,withRouter} from 'react-router-dom';
import firebase from './firebase';
const Sideitem = (props) =>
{
    const list_item =[
        {
            name:"Home",
            tag:"fa fa-home",
            link:"/",
            login:''
        },
        {
            name:"News Search",
            tag:"fa fa-tasks",
            link:"/news",
            login:''
        },
        {
            name:"Posted News",
            tag:"fa fa-window-maximize",
            link:"/newspost",
            login:''
        },
        {
            name:"Sign-in",
            tag:"fa fa-sign-in",
            link:"/sign-in",
            login:true
        },
        {
            name:"DashBoard",
            tag:"fa fa-plus-square",
            link:"/dashboard",
            login:false
        },
        {
            name:"Sign-out",
            tag:"fa fa-sign-out",
            link:"/sign-out",
            login:false
        }
    ]
    const element=(item,i)=>
    {
       return( 
           <div>
       <Link to={item.link}>
        <div className="options">
            <div className="item">
                <i className={item.tag}  aria-hidden="true"></i>
            </div>
                <div className="cont">
                    {item.name}
                </div>
        </div>
        </Link>
        </div>)
    }
    const restricted=(item,i)=>
    {
        let temp=null;
       if(props.user === null && item.login)
       {
         temp=element(item,i);
       }
       if(props.user !== null && !item.login)
       {
           if(item.link === '/sign-out')
           {
              temp=(
              <div style={{cursor:"pointer"}} className="options"
              onClick={()=>{firebase.auth().signOut()
              .then(()=> {props.history.push("/")
            })
              }}>
              <div className="item">
                  <i className={item.tag}  aria-hidden="true"></i>
              </div>
                  <div className="cont">
                      {item.name}
                  </div>
          </div>)
           }
           else
           {
          temp=element(item,i);
           }
       }
       return temp;
    }
    return (
        list_item.map((item,i) => {
           return(
            <div key={i}>
               { item.login === ''?
                element(item,{i}):
                restricted(item,i)
               }
            </div>
           )
        }) 
    )
        
        
        
        
        
        
        
        
        
}
export default withRouter(Sideitem);