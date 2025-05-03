import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Navbar from './Navbar';


function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/Login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;