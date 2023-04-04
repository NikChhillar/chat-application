import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';

// 
const ProtectedRoutes = ({ children, auth = false }) => {
  const isLoggedIn = localStorage.getItem('user:token') !== null || false;

  if (!isLoggedIn && auth) {
    return <Navigate to={'/users/sign_in'} />
  } else if (isLoggedIn && ['/users/sign_in', '/users/sign_up'].includes(window.location.pathname)) {
    console.log('object :>> ');
    return <Navigate to={'/'} />
  }

  return children
}

// 
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ProtectedRoutes auth={true}>
            <Dashboard />
          </ProtectedRoutes>} />
        <Route path='/users/sign_in' element={
          <ProtectedRoutes>
            <Form isSignInPage={true} />
          </ProtectedRoutes>} />
        <Route path='/users/sign_up' element={
          <ProtectedRoutes>
            <Form isSignInPage={false} />
          </ProtectedRoutes>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
