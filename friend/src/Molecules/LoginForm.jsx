import InputField from "../Atoms/InputFields";
import Button from "../Atoms/Button";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const userLoginData = {
            Username:"Tmp",
            Email: Email,
            Password: Password,
            Role: "USER"
        };
        fetch("http://localhost:8080/user/register", 
        {
            method: "POST", 
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(userLoginData)
        }).then((response) => {
            if (response.ok) {
                console.log("User Logged In Successfully");
                navigate("/");
            } else {
                console.log("Login Failed");
            }
        });
    };

    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-80">
                <InputField
                    id="Email"
                    label="Email"
                    type="email"
                    placeholder="name@gmail.com" 
                    onChange={(value) => setEmail(value)}
                />
                <InputField
                    id="Password"
                    label="Password"
                    type="password"
                    placeholder="************"
                    onChange={(value) => setPassword(value)}
                />
                <Button name="Login" handleAction={handleLogin}></Button>
            </div>
        </div>
    );
}
