import React from 'react';
import { Route,Redirect } from 'react-router-dom';


 const Publicroute=({user,component:Comp,...rest})=>
 {
     return  <Route {...rest} component={(props)=>
        (
            rest.permit?
            (
               user? 
               <Redirect to="/newspost"/>
               :
               <Comp {...props} user={user}/>
            )
            :
                <Comp {...props} user={user}/>

        )}/>
 }
 export default Publicroute;