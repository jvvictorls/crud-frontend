import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { deleteUser } from '../../services/request';

function User() {
  const navigate = useNavigate();
  const [deleted, setDeleted] = useState(false);
  const name = localStorage.getItem('name');
  const id = localStorage.getItem('id');
  if (!name) return <Navigate to="/" />;
  const deleteThisUser = async () => {
    try {
      await deleteUser(`/users/${id}`);
      localStorage.clear();
      setDeleted(true);
    } catch (error) {
      console.log('Não foi possível deletar o usuário.');
    }
  };
  if (deleted) return <Navigate to="/" />;
  return (
    <aside>
      <h1>
        Hi
        {' '}
        {name}
      </h1>
      <button
        onClick={ () => navigate(`/user/${id}/edit`) }
      >
        Editar usuário
      </button>
      <button
        onClick={ deleteThisUser }
      >
        Deletar minha conta
      </button>
    </aside>
  );
}

export default User;
