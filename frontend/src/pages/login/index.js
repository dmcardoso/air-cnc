import React, {useState} from 'react';
import api from "../../services/api";

function Login({history}) {
    const [email, setEmail] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/sessions', {email});

        const {_id} = response.data;

        localStorage.setItem('user', _id);

        history.push('/dashboard');
    }

    return (
        <>
            <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para a sua
                empresa</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL *</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Seu melhor e-mail"
                />

                <button type="submit" className="btn">Entrar</button>
            </form>
        </>
    );
}

export default Login;