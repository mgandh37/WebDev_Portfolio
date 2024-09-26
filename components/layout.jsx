/*  
    Layout.jsx
    Mauli Gandhi
    301486344
    2024-09-24
*/
import { Link } from 'react-router-dom';
import '../src/assets/logo.css';
export default function Layout() {
 return (
 <>
    <div className="logo">MG</div>
    <h1>My Portfolio</h1>
 
    <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>  | <Link to="/project">Project</Link>| <Link to="/services">Services</Link>|  <Link to="/contact">Contact</Link>
    </nav>
    <br/>
    <hr />
 
 </>
 
 );
}
