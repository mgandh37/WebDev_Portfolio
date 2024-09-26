/*  
    Layout.jsx
    Mauli Gandhi
    301486344
    2024-09-24

    This file is the main navbar for my site
*/
import { Link } from 'react-router-dom';
import '../src/logo.css'; // Importing CSS for styling

// This is the Layout component which serves as a common layout structure for your website.
export default function Layout() {
    return (
        <>
            {/* Logo and heading section */}
            <div className="logo">MG</div> {/* Logo for the website, initialized with initials MG */}
            <h1>My Portfolio</h1> {/* Main heading of the website */}

            {/* Navigation bar for site navigation */}
            <nav>
                {/* Navigation links to different pages of the website. Utilizes React Router for SPA navigation */}
                <Link to="/">Home</Link> | {/* Link to the Home page */}
                <Link to="/about">About</Link> | {/* Link to the About page */}
                <Link to="/project">Project</Link> | {/* Link to the Project page */}
                <Link to="/services">Services</Link> | {/* Link to the Services page */}
                <Link to="/contact">Contact</Link> {/* Link to the Contact page */}
            </nav>
            
            <hr /> {/* Horizontal rule for visual separation */}
        </>
    );
}
