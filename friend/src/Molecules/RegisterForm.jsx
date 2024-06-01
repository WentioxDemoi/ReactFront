import InputField from "../Atoms/InputFields";
import Button from "../Atoms/Button";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {

    const [Username, setUsername] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        const userLoginData = {
            Username:Username,
            Email: Email,
            Password: Password,
            Role: "USER"
        };
        fetch("http://localhost:8080/user/register", 
        {
            method: "POST", 
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(userLoginData)
        }).then(response => {
            if (!response.ok) {
                return response.text().then(errorMessage => {
                    throw new Error(errorMessage);
                });
            }
            console.log("User Logged In Succesfully : " + userLoginData);
        })
        .catch(error => {
            setErrorMessage(error.message); // Mettre à jour l'état avec le message d'erreur
        });
    };

    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-80">
                <InputField
                    id="Username"
                    label="Username"
                    type="username"
                    placeholder="Toobo" 
                    onChange={(value) => setUsername(value)}
                />
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
                {errorMessage && <p className="text-red-500">{errorMessage}</p>} {/* Afficher le message d'erreur s'il est défini */}
                <Button name="Login" handleAction={handleLogin}></Button>
            </div>
        </div>
    );
}
