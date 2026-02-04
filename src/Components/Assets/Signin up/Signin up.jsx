import React, { useState } from 'react' 
import './Signinup.css'

import user_icon from '../person.png'
import email_icon from '../email.png'
import password_icon from '../password.png'

const Loginup =() => {

    const [action,setAction] = useState("Sign Up");
    
    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
                <div className="image"></div>
            </div>

            <div className="inputs">

                
                {action==="Log In"?<div></div>:<div className="input">
                    <img src={user_icon} alt="person" width='14px' height='20px'/>
                    <input type="text" placeholder='Name' />
                </div>}
                

                <div className="input">
                    <img src={email_icon} alt="email" width='14px' height='20px'/>
                    <input type="email" placeholder='Email Id'/>
                </div>

                <div className="input">
                    <img src={password_icon} alt="password" width='14px' height='20px'/>
                    <input type="password" placeholder='Password'/>
                </div>
            </div>

            {action==="Sing Up"?<div></div>:<div className="forgot-password">Last Password? <span>Click Here!...😎😎🔥🔥🔥</span></div>}

            
            <div className="submit-container">
                <div className={action==="Log In"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Log In")}}>Log In</div>
            </div>
            
        </div>
    )
}

export default Loginup