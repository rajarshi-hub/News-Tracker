import React,{Component} from 'react';
import './news.css';
import NewslistItem from './newslist_item';
import FormField from './formfields';
import axios from 'axios';
class news extends Component
{
    state={
        item:[],
        newsdata:[],
        registererror:'',
        loading:false,
        searchword:'india',
        formdata:{
            wordin:{
                element:'input',
                value:'',
                config:{
                    name:'wordin_input',
                    type:'text',
                    placeholder:'Enter word to be searched for News'
                },
                validation:{
                    required:true,
                }
            }
        }


    }
    validDate=(element)=>
{
    let error=[true,''];
    if(element.validation.required)
    {
        const valid=element.value.trim() !== '';
        const msg=`${!valid?'This field is required':''}`;
        error=!valid?[valid,msg]:error;
    }
    return error;
}
update=(element)=>
{
    const newdata={
        ...this.state.formdata
    }
    const newele={
        ...newdata[element.id]
    }
    newele.value=element.event.target.value;
    if(element.blur)
    {
       let validData=this.validDate(newele);
       newele.valid=validData[0];
       newele.validationMessage=validData[1];

    }
      newele.touched=element.blur;
    newdata[element.id]=newele;
    this.setState(
        {
            formdata:newdata
        }
    )
}
submitButton=()=>
{
    return (
        this.state.loading?
       <h3>Loading...</h3>
    :<div>
     <button  type="submit">Search</button>
    </div>)
}
submitForm=(event)=>
{
event.preventDefault();
     let formisValid=true;
     for(let key in this.state.formdata)
     {
        formisValid=formisValid && this.state.formdata[key].valid;
     }
     if(formisValid)
     {
         const word=this.state.formdata.wordin.value;
         this.setState(
             {
                 searchword:word,
                 loading:true,
                 newsdata:[] 
             }
         ) 
             axios(`https://gnews.io/api/v4/search?q=${this.state.searchword}&token=19d7c7863355c5f9fe08cf869d2bfd0a`)
            .then( response =>{
                this.setState({
                    
                    item:(response.data.articles),
                    loading:false
            })
        })
        

     }
}
   render(){
    return (
        <div className="list">
            <br></br>
            <form className="former" onSubmit={this.submitForm}>
                <h2>Search The News </h2>
                <FormField
                id={'wordin'} formdata={this.state.formdata.wordin}
                change={(element)=> this.update(element)}
                />
                {this.submitButton()}
            </form>
            <NewslistItem data={this.state.item} link='dont'/>

        </div>
           )
    }
        
}
export default news;