import { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { requestLogin } from '../../services/request';

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
    <section>
      <form>
        <h1>Área do usuário</h1>
        <label htmlFor="email-input">
          <input
            className="login__login_input"
            type="text"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
            data-testid="login__login_input"
            placeholder="Login"
          />
          Email
        </label>
        <label htmlFor="password-input">
          <input
            type="password"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
            data-testid="login__password_input"
            placeholder="Senha"
          />
          Password
        </label>
        <button
          data-testid="login__login_btn"
          type="submit"
          onClick={ (event) => login(event) }
        >
          Entrar
        </button>
      </form>
      <Link to="/register">Ainda não tenho conta</Link>
    </section>
  );
}

export default Login;
