import React from 'react';
import './time.css';

const time=(props) =>
{

    return(
        <div>
            <span className="card_info">
                <span className="icon">
            <i className="fa fa-user" aria-hidden="true"></i> &nbsp; {props.author}


            </span>
            </span>
        </div>

    );
}
export default time;