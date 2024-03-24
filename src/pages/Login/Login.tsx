import { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { requestLogin } from '../../services/request';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  const login = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    try {
      const { data } = await requestLogin('/users/login', { email, password });

      setIsLogged(true);
    } catch (error) {
      setIsLogged(false);
    }
  };

  const id = localStorage.getItem('id');

  if (isLogged) return <Navigate to={ `/user/${id}` } />;

  return (
    <section className="login-container">
      <form className="login-form">
        <h1 className="login-title">Área do usuário</h1>
        <label htmlFor="email-input">
          Email:
          <input
            className="login-input"
            type="text"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
            data-testid="login__login_input"
            placeholder="Login"
          />
        </label>
        <label htmlFor="password-input">
          Password:
          <input
            className="login-input"
            type="password"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
            data-testid="login__password_input"
            placeholder="Senha"
          />

        </label>
        <button
          className="login-btn"
          data-testid="login__login_btn"
          type="submit"
          onClick={ (event) => login(event) }
        >
          Entrar
        </button>
        <Link to="/register">Ainda não tenho conta</Link>
      </form>
    </section>
  );
}

export default Login;
