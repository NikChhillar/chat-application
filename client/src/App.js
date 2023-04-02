import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/users/sign_in' element={<Form isSignInPage={true} />} />
        <Route path='/users/sign_up' element={<Form isSignInPage={false} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
