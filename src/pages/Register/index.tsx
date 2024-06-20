import { FormEvent, useState } from "react"
import { Header } from "../../components/Header"

import './styles.css'

export const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleCreateUser = async (e: FormEvent) => {

        e.preventDefault();

        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({ username, password, email }),
            headers: { 'Content-Type': 'application/json' }
        });

        if(response.status === 200) {

            alert('Funcionou');
        }

        else {

            alert('Não funcionou')
        }
    }

    return (
        <section>
            <Header />

            <section className="register__container">

                <h3>Register</h3>

                <form>

                    <input
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder="username" type="text"
                    />
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="email" type="text"
                    />
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="password" type="password"
                    />

                    <button onClick={(e) => handleCreateUser(e)}>create user</button>
                </form>
            </section>
        </section>
    )
}