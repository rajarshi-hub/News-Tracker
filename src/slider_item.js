import React from 'react';
import './slider_item.css'
import Slick from 'react-slick';
import {Link} from 'react-router-dom';
const slider_item =(props) =>
{
    console.log(props.data);

    const sliderset={
        autoplay: true,
        autoplaySpeed: 4000,
        dots:false,
        infinite:true,
        arrows:true,
        speed:500,
        slidesToShow: 1,
        slidesToScroll: 1

    }
    let temp=null;
      temp=props.data.map((item,i) =>{
          return(
              <div key={i}>
                <div className="conti" style={{
                    background:`url(${item.image})`
                    }}
                >
              </div>
              <Link to={`/articles/${i}`} >
              <strong><h1 className="title">
                {item.title}
                </h1>
                </strong>
                </Link>
              </div>
          )

      })
    return(
        <div>
            <div>
            </div>
            <Slick {...sliderset}>
                {temp}
            </Slick>
        </div>
    )

}
export default slider_item; 