import React from 'react';
import './date.css';

const date=(props) =>
{
    let sdate=String(props.info.publishedAt).slice(0,10);

    return(
        <div className="info_wrap">
            <div className="date_wrap">
                Date: &nbsp;
                <span>
                  <strong>{sdate}</strong>
                </span>
            </div>
            <div className="date_wrap">
                Author: &nbsp;
                <span>
                    <strong>{props.info.source.name}</strong>
                </span>
            </div>
        </div>

    );
}
export default date;