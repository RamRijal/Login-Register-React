import React, { useState } from 'react'
import Css from "./css.css"

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    let onSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Successfully");

        const data = {
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }
        console.log(data);

        

    }
    return (
        <>  <div>
            <div className='register-form'>
                <form onSubmit={onSubmit}>
                    <h2>Register</h2>
                    <label htmlFor="username">Username: </label>
                    <br />

                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }} />
                    <br />

                    <label htmlFor="email">Email: </label>
                    <br />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }} /><br />

                    <label htmlFor="password">Password: </label>
                    <br />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                    <br />
                    <label htmlFor="confirmpassword">Confirm Password: </label>
                    <br />
                    <input
                        type="password"
                        id="confirmpassword"
                        name="confirmpassword"
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value)
                        }} />
                    <br />
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