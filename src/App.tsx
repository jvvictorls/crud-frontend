import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import User from './pages/User/users';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="register" element={ <SignUp /> } />
      <Route path="/user/:id" element={ <User /> } />
    </Routes>
  );
}

export default App;
