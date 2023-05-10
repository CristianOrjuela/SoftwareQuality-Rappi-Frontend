// Fundamentals
import { useState } from 'react'

// Imports styles
import './card.css'

//Services
import generateLogin from '../services/loginService';

function Card() {

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const executeSignIn = () => {
        
        if( username !== '' && password !== ''){
            generateLogin(username, password).then(
                serviceResponseStatus => console.log("serviceResponse", serviceResponseStatus.status)
            );            
        }

    };

    return (
    <>
        <article className='card-container'>
        <h3 className='card-title'>Log in</h3>
        <div className='card-input-container'>
            <input 
                className='card-input' 
                placeholder='Username' 
                onChange={(e) => setUsername(e.target.value)}
            />
            <input 
                className='card-input' 
                placeholder='Password'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button 
            className='card-button'
            onClick={() => executeSignIn()}
        >
            Sign in
        </button>
        </article>
    </>
    )
}

export default Card