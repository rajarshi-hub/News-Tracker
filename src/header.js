import React from 'react';
import './header.css'
import Sidenav from './Sidenav'
const header = (props) =>
{
  let temp=
  (
    <i  className="fa fa-bars fa-2x" aria-hidden="true"></i>
  );
   return(

     <div className="head">
       <Sidenav {...props}/>
       <div className="navbar" onClick={props.onOpenNav}>
       {temp}
       </div>
       <div className="logo"> 
       <i className="fa fa-newspaper-o fa-2x" aria-hidden="true"></i>
       </div>
       <div className="tit">
         NEWS TRACKER
       </div>
     </div>
   )
    
}
export default header;