import { Link } from 'react-router-dom';
import './styles.css';
import { useEffect, useState } from 'react';

export const Header = () => {

    const [userName, setUserName] = useState('');

    const handleLogout = () => {

        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST'
        })

        setUserName('');
    }

    useEffect(() => {

        fetch('http://localhost:4000/profile', {
            credentials: 'include'
        }).then(response => {

            response.json().then(userInfo => {

                setUserName(userInfo.username);
            })
        })
    }, []);

    return (
        <header>
            <Link to={'/'}>
                <h2>My Blog</h2>
            </Link>

            <nav>
                {userName ? (
                    <>
                        <Link to={'/create-new-post'}>Create new post</Link>
                        <Link to={'/'} onClick={handleLogout}>Logout</Link>
                    </>
                ) : (
                    <>
                        <Link to={'/login'}>Login</Link>
                        <Link to={'/register'}>Register</Link>
                    </>
                )
                }
            </nav >
        </header >
    )
}