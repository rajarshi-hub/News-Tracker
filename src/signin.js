import React,{Component} from 'react';
import './signin.css';
import FormField from './formfields';
import firebase from 'firebase';

class Signin extends Component
{
    state={
        registererror:'',
        loading:false,
        formdata:{
            email:{
                element:'input',
                value:'',
                config:{
                    name:'email_input',
                    type:'email',
                    placeholder:'Enter your Email'
                },
                validation:{
                    required:true,
                    email:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
                password:{
                    element:'input',
                    value:'',
                    config:{
                        name:'password_input',
                        type:'password',
                        placeHolder:'Enter your Password'
                    },
                    validation:{
                        required:true,
                        password:true
                    },
                    valid:false,
                    touched:false,
                    validationMessage:''
    

        }

    }
}
validDate=(element)=>
{
    let error=[true,''];
    if(element.validation.email)
    {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const valid= re.test(element.value);
        
        const msg=`${!valid?'Must Be valid email':''}`;
        error=!valid?[valid,msg]:error;
    }
    if(element.validation.password)
    {
        const valid=element.value.length >= 5;
        const msg=`${!valid?'Must Be Greater Than 5':''}`;
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
    return (this.state.loading ? 
    'Loading....' 
    :
    <div>
     <button  onClick={(event) =>this.submitForm(event,false)}>Register Now</button>
      <button className="left" onClick={(event) =>this.submitForm(event,true)}>Log In</button>
    </div>)
}
submitForm=(event,type)=>
{
    event.preventDefault();
  if(type  !== null)
  {
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
         this.setState(
             {
                 loading:true
             }
         )
     }
     if(type  === true)
     {
         firebase.auth()
         .signInWithEmailAndPassword(datatoSub.email,datatoSub.password).then(()=>{
            this.props.history.push('/');
           }).catch(error=>{
               this.setState({
                   loading:false,
                   registererror:error.message
               })
           })
     }
     else
     {
         firebase.auth().createUserWithEmailAndPassword(datatoSub.email,datatoSub.password).then(()=>{
             this.props.history.push('/');
            }).catch(error=>{
                this.setState({
                    loading:false,
                    registererror:error.message
                })
            })
  }
}
}
showError= () =>
(
    this.state.registererror !== ''?
    <div className="error" style={{color:"red"}}>
        {this.state.registererror}
    </div>:
    ''
)

render()  
{
    return(
        <div>
            <div className="logc">
            <form className="go" onSubmit={(event)=>this.submitForm(event,null)}>
                <h2>Register / Log in</h2>
                <FormField
                id={'email'} formdata={this.state.formdata.email}
                change={(element)=> this.update(element)}
                />
                 <FormField
                id={'password'} formdata={this.state.formdata.password}
                change={(element)=> this.update(element)}
                />
                {this.submitButton()}
                {this.showError()}
            </form>
            </div>

        </div>
    )
}  
} 
export default Signin;