import React from 'react'
import OtpInput from '../Components/OtpForm'
import { useNavigate } from "react-router-dom";


const Verification = () => {
    const navigate = useNavigate();
    function navHome(){
        navigate('/redirecting')
    }
    return (
        <div className='auth-bg'>
            <div className='verification-modal'>
                <h1>Please verify your account</h1>
                <p>A code has been sent to your registered mail.</p>
                <p>Please enter code below.</p>
                <div>
                    <OtpInput />
                </div>
                <button className='loginBtn' onClick={navHome} >Complete Sign Up</button>
            </div>
        </div>
    )
}

export default Verification
