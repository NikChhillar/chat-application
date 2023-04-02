import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/a' element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
