import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-orange-700 text-white h-12 px-4 shadow-md">
      <h2 className="text-lg font-bold">Forbes</h2>
      <ul className="flex gap-8">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/login" className="hover:underline">Login</Link></li>
        <li><Link to="/register" className="hover:underline">Register</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

