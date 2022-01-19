import React from 'react'
import "./FormInputs.css"


 const FormInputs = (props) =>{
const [focused,setFocused] =React.useState(false);
const {label, onChange, id,errorMessage, ...inputProps} = props;
const handleChange = (e)=>{
    setFocused(true);
}
    return (
        <div className='formInput'>
           
            <label>{label}</label>
            <input  {...inputProps} onChange={onChange} onBlur={handleChange}
             focused={focused.toString()}
             onFocus={()=>inputProps.name === "confirmPassword" && setFocused(true)}
             />
<span>{errorMessage}</span>
        </div>
    )
}
export default FormInputs