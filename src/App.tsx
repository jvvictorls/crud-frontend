import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import User from './pages/User/users';
import EditUser from './pages/EditUser/EditUser';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="register" element={ <SignUp /> } />
      <Route path="/user/:id" element={ <User /> } />
      <Route path="/user/:id/edit" element={ <EditUser /> } />
    </Routes>
  );
}

export default App;
