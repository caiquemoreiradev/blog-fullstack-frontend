import { FormEvent, useState } from "react";
import { Header } from "../../components/Header"

import './styles.css'
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: FormEvent) => {

        e.preventDefault();

        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        });

        if(response.status === 200) {

            alert('Funcionou');

            navigate('/')
        }

        else {

            alert('Não funcionou')
        }
    }

    return (
        <section>
            <Header />

            <section className="login__container">

                <h3>Login</h3>

                <form>

                <input
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder="username" type="text"
                    />
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="password" type="password"
                    />

                    <button onClick={(e) => handleLogin(e)}>login</button>
                </form>
            </section>
        </section>
    )
}