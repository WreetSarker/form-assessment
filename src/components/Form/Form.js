import React, { useState } from 'react';
import User from '../User/User';

const Form = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const [pass, setPass] = useState({
        password: '',
        confirmPassword: ''
    });
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: false,
    })

    const handleSubmit = (e) => {
        if (pass.password === pass.confirmPassword) {
            const newUserInfo = { ...user };
            newUserInfo.error = '';
            newUserInfo.success = true;
            setUser(newUserInfo);
            console.log(user);
            <User user={user}></User>
        }
        e.preventDefault();
    }





    const handleBlur = (event) => {
        let isFieldValid = true;
        let passValue = '';
        let confirmedPass = '';
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 7;
            const passwordHasNumber = /\d{1}/.test(event.target.value);
            const passwordHasUpperCase = /[A-Z]/.test(event.target.value);
            const passwordHasCharacter = /(?=.*[!@#$%^&*])/.test(event.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber && passwordHasUpperCase && passwordHasCharacter;
            if (isFieldValid) {
                console.log('valid password!');
                const newPassInfo = { ...pass };
                newPassInfo[event.target.name] = event.target.value;
                setPass(newPassInfo)
            }
        }
        if (event.target.name === 'confirmPassword') {
            const isConfirmedPasswordValid = event.target.value.length > 7;
            const confirmedPasswordHasNumber = /\d{1}/.test(event.target.value);
            const confirmedPasswordHasUpperCase = /[A-Z]/.test(event.target.value);
            const confirmedPasswordHasCharacter = /(?=.*[!@#$%^&*])/.test(event.target.value);
            isFieldValid = isConfirmedPasswordValid && confirmedPasswordHasNumber && confirmedPasswordHasUpperCase && confirmedPasswordHasCharacter;
            if (isFieldValid) {
                console.log('confirmed valid password');
                const newPassInfo = { ...pass };
                newPassInfo[event.target.name] = event.target.value;
                setPass(newPassInfo)
            }
        }

        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }
    return (
        <div>

            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />

            <label htmlFor="newUser">New User Sign up</label>
            <form onSubmit={handleSubmit}>
                {newUser && <input type="text" onBlur={handleBlur} name="name" placeholder="type your name" />}
                <br />
                <input type="text" onBlur={handleBlur} name="email" placeholder="email" required />
                <br />
                <input type="password" onBlur={handleBlur} name="password" placeholder="password" required />
                <br />
                <input type="password" onBlur={handleBlur} name="confirmPassword" placeholder="confirm password" required />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{ color: 'red' }}>{user.error}</p>
            {user.success && console.log('success') && <h2 style={{ color: 'red' }}>User {newUser ? 'created' : 'logged in'} successfully</h2>}
        </div>

    );
};

export default Form;