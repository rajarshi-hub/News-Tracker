import React from 'react';
import Side from 'react-simple-sidenav';
import Sideitem from './Sideitem.js'
const Sidenav = (props) =>
{
    return(
        <div>
            <Side
            showNav={props.showNav}
            onHideNav={props.onHideNav}
            navStyle={{
                background:"#242424",
                maxWidth:"250px"

            }}
            >
                <Sideitem {...props}/>
            </Side>
            </div>
    )

}
export default Sidenav ;