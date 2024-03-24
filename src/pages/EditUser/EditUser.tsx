import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { requestUpdateUser } from '../../services/request';

function EditUser() {
  const id = localStorage.getItem('id');
  const userName = localStorage.getItem('name');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [updated, setUpdated] = useState(false);
  const updateUser = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    try {
      const { data } = await requestUpdateUser(`/users/${id}`, { name, email, password });
      setUpdated(true);
    } catch (error) {
      console.log('Não foi possível atualizar o usuário.');
      setUpdated(false);
    }
  };
  if (updated) return <Navigate to={ `/user/${id}` } />;
  return (
    <div>
      <h1>
        Olá,
        {' '}
        {userName}
      </h1>
      <form>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            name="name"
            id="name"
            value={ name }
            onChange={ (e) => setName(e.target.value) }
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            id="email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            id="password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <button
          type="submit"
          onClick={ (event) => updateUser(event) }
        >
          Editar usuário
        </button>
      </form>
    </div>
  );
}

export default EditUser;
