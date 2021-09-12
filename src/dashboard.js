import React ,{Component} from 'react';
import FormField from './formfields'
import './dashboard.css';
import {withRouter} from 'react-router-dom';
import firebase from 'firebase';

class dashboard extends Component{

    state={
        posterror:'',
        loading:false,
        formdata:{
            author:{
                element:'input',
                value:'',
                config:{
                    name:'author_input',
                    type:'text',
                    placeholder:'Enter your Name'
                },
                validation:{
                    required:true,
                    author:false
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            title:{
                element:'input',
                value:'',
                config:{
                    name:'title_input',
                    type:'text',
                    placeholder:'Enter the Title of News'
                },
                validation:{
                    required:true,
                    title:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            url:{
                element:'input',
                value:'',
                config:{
                    name:'url_input',
                    type:'url',
                    placeholder:'Enter the URL of News'
                },
                validation:{
                    required:true,
                    url:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            }

            



    }
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
validDate=(element)=>
{
    let error=[true,''];
    if(element.validation.title)
    {
        const valid=element.value.length >= 15;
        const msg=`${!valid?'Must Be Greater Than 15 Character':''}`;
        error=!valid?[valid,msg]:error;
    }
    if(element.validation.url)
    { 
        const pattern = new RegExp('^(https?:\\/\\/)?'+ 
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
    '(\\#[-a-z\\d_]*)?$','i'); 
        const valid=pattern.test(element.value);
        const msg=`${!valid?'Enter a Valid URL':''}`;
        error=!valid?[valid,msg]:error;

    }
    if(element.validation.required)
    {
        const valid=element.value.trim() !== '';
        const msg=`${!valid?'This field is required':''}`;
        error=!valid?[valid,msg]:error;
    }
    return error;
}
submitButton=()=>
{
    return (this.state.loading ? 
    'Loading....' 
    :
    <div>
      <button type="submit">Add Post</button>
    </div>)
}
submitForm=(event)=>
{
    event.preventDefault();
    let datatoSub={};
     let formisValid=true;
     for(let key in this.state.formdata)
     {
       datatoSub[key]=this.state.formdata[key].value;

     }
     for(let key in this.state.formdata)
     {
        formisValid=formisValid && this.state.formdata[key].valid;
     }
     if(formisValid)
     {
         this.setState({
             loading:true,
             posterror:''
         })
        firebase.database().ref('articles').push(datatoSub)
        .then(this.props.history.push('/newspost'));
        
     }
     else
     {
         this.setState({
             posterror:'Something went Wrong!!'
         })
     }

}
showError= () =>
(
    this.state.posterror !== ''?
    <div className="error">
        {this.state.posterror}
    </div>:
    ''
)
    render()
    {
      return(
          <div className="postcont">
            <form onSubmit={this.submitForm} className="go">
                <h2>
                    Post The News
                </h2>
                <FormField
                id={'author'} formdata={this.state.formdata.author}
                change={(element)=> this.update(element)}
                />
                <FormField
                id={'title'} formdata={this.state.formdata.title}
                change={(element)=> this.update(element)}
                />
                 <FormField
                id={'url'} formdata={this.state.formdata.url}
                change={(element)=> this.update(element)}
                />
                {this.submitButton()}
                {this.showError()}
            </form>
          </div>
      )
    }
}
export default withRouter(dashboard);