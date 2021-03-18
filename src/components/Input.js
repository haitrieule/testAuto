import React, { useState } from 'react'

import './Input.css'

export default function Input(props) {

    
    const [Value, setValue] = useState({name:"",email:"",deadline:"",})
    props.ahihi(Value)
    function changeName(e){
        setValue(Value=>({...Value, name:e.target.value}))
    }
    function changeEmail(e){
        setValue(Value=>({...Value, email:e.target.value}))
    }
    function changeDeadline(e){
        setValue(Value=>({...Value, deadline:e.target.value}))
    }
    console.log(Value)
    return (
        <div className="form">
            <div>Name:</div>
            <input type="text" onChange={changeName} />
            <div>Email:</div>
            <input type="text" onChange={changeEmail} />
            <div>Deadline:</div>
            <input type="text" onChange={changeDeadline} />
        </div>
    )
}
