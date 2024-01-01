import React, { useState } from 'react'

const Register = () => {
    const [username,setUsername]=useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let onSubmit=(e)=>{
        e.preventDefault();
        console.log("Submitted");
    }
  return (
  <>  <div>
        <div className='register-form'>
            <form onSubmit={onsubmit}>
                <h2>Register</h2>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username" value={username}/><br/>

                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" value={email}/><br/>

                <label htmlFor="password">Password: </label>
                <input 
                type="password" 
                id="password" 
                name="password"
                value={password}/>
                <br/>
                <button 
                type="submit"
                >Register</button>

            </form>
        </div>
    </div>
    </>
  )
}

export default Register