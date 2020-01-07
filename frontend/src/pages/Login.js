import React, { useState } from 'react';

import api from '../services/api';

import './Login.css';
import logo from '../assets/logo.svg';

export default function Login({ history }) {
    let [username, setUsername] = useState('');

    async function handleSubmmit(e) {
        e.preventDefault(); /*Previne o comportamento padrão do form. Neste caso estaremos bloqueando
        o submit de redirecionar o usuário para uma outra página, já que este é seu comportamento
        padrão. */

        const response = await api.post('/devs', {
            username
        });

        const { _id } = response.data;

        history.push(`/dev/${_id}`);
    }
    return ( 
        <div className="login-container">
            <form onSubmit={handleSubmmit}>
                <img src={logo} alt="Tindev" /> 
                <input 
                    placeholder="Digite seu usuário no Github"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>      
        </div>
        
    );
}