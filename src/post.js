import React ,{Component} from 'react';
import axios from 'axios';
import Date from './date'
import './post.css'

class post extends Component{

    state={
        data:[],
        i:(this.props.match.params.id),


    }

    componentWillMount()
    {
        axios('https://gnews.io/api/v4/search?q=india&token=19d7c7863355c5f9fe08cf869d2bfd0a')
    .then( response =>{
        this.setState({
            data:(response.data.articles)
    })
})
    }
    render()
    {
        console.log((this.state.data));
        return (
            <div>
            <div>
                {
                    this.state.data.map((it,i) =>
                    {
                        if(String({i}.i) === this.state.i)
                        {
                        return(
                        <div key={i} className="outer">
                            <div>
                            <div className="art_body">
                                <h1>{it.title}</h1>
                                <div className="back_img" 
                                style={{
                                    background:`url(${it.image})`
                                    }}
                                >
                                </div>
                                <div className="content">
                                    {it.description}

                                </div>
                            </div>
                            </div>
                            <Date info={it}/>
                            <br></br>
                         </div>
                        )
                        }
                        else
                        {
                            return(null);
                        }
                    })
                }

            </div>
            </div>
        )
    }
}
export default post;