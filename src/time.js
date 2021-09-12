import React from 'react';
import './time.css';

const time=(props) =>
{
    let sdate=String(props.time).slice(0,10);
    let stime=String(props.time).slice(12,19);

    return(
        <div>
            <span className="card_info">
                <span className="icon">
            <i className="fa fa-calendar" aria-hidden="true"></i>  &nbsp;  {sdate}
            &nbsp; &nbsp;
            <i className="fa fa-clock-o" aria-hidden="true"></i>   {stime}


            </span>
            </span>
        </div>

    );
}
export default time;