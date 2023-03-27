import React from 'react'
import { useNavigate } from "react-router-dom";


const VerificationPrompt = () => {
    const navigate = useNavigate();
    function navLogin(){
        navigate('/login')
    }
    return (
        <div className='auth-bg'>
            <div className='verification-modal'>
                <h1>Verification Successful</h1>
                <p>You'll be redirected shortly.</p>
                <button className='loginBtn' onClick={navLogin} >Redirect now</button>
            </div>
        </div>
    )
}

export default VerificationPrompt
