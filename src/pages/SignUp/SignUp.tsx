import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { requestRegister } from '../../services/request';

function SignUp() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [register, setRegister] = useState<boolean>(false);
  const signUp = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    try {
      const { data } = await requestRegister(
        '/users/signup',
        { name, email, password },
      );
      console.log(data);
      setRegister(true);
    } catch (erro) {
      setRegister(false);
    }
  };

  if (register) return <Navigate to="/" />;

  return (
    <div>
      <section>
        <h1>Cadastre-se!</h1>
        <form>
          <label htmlFor="name-input">
            <input
              type="text"
              data-testid="signup__input-name"
              placeholder="Nome"
              value={ name }
              onChange={ (e) => setName(e.target.value) }
            />
            Nome
          </label>
          <label htmlFor="email-input">
            <input
              type="email"
              data-testid="signup__input-email"
              placeholder="Email"
              value={ email }
              onChange={ (e) => setEmail(e.target.value) }
            />
            Email
          </label>
          <label htmlFor="password-input">
            <input
              type="password"
              data-testid="signup__input-password"
              placeholder="Senha"
              value={ password }
              onChange={ (e) => setPassword(e.target.value) }
            />
            Senha
          </label>
          <button
            type="submit"
            data-testid="signup__button"
            onClick={ (e) => signUp(e) }
          >
            Cadastrar
          </button>
        </form>
      </section>
    </div>
  );
}

export default SignUp;
