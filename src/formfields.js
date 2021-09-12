import React from 'react';
import './formfields.css';

const Formfield=({formdata,change,id})=>
{
    const showError=()=>
    {
        let msg=null;
        if(formdata.validation && !formdata.valid)
        {
            msg=(
                <div className="label">
                    {formdata.validationMessage}
                </div>
            )
        }
        return msg;
    }
       const rendtemp=()=>
       {
        let temp=null;
        switch(formdata.element)
        {
            case('input'):
            temp=(
                <div>
                   <input
                   {...formdata.config}
                   value={formdata.value}
                   onChange={(event)=>change({event,id,blur:false})}
                   onBlur={(event)=>change({event,id,blur:true})}
                   />
                   {showError()}
                </div>
            )
            break;
            default:
                temp=null;

        }
        return temp;

       } 
{
    return(
        <div>
            {rendtemp()}
        </div>
    )
}
}
export default Formfield;