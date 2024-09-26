/*  
    contact.jsx
    Mauli Gandhi
    301486344
    2024-09-26

    Here I want to create 2 cards side by side
    First card contain my contat information
    Second card has a form to submit your inquiry
*/
import '../src/contact.css'
import '../src/index.css'
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon
export default function Contact() {
     return (
     <>
     <section id="contactMe">
     <div className="contactSection">
            <div className="contactInfo">
                <h2>Contact Info</h2>
                <p>Email: mauli.gandhi@gmail.com</p>
                <p>Phone: +647-528-8935</p>
                <p>
                    <a href="https://www.linkedin.com/in/mg1989/" target="_blank" rel="noopener noreferrer" className="linkedinLink">
                    <FaLinkedin className="linkedinIcon" /> LinkedIn
              </a>
            </p>
            </div>
            <form className="contactForm">
                <h2>Send a Message</h2>
                <input type="text" name="firstName" placeholder="First Name" />
                <input type="text" name="lastName" placeholder="Last Name" />
                <input type="text" name="contactNumber" placeholder="Contact Number" />
                <input type="email" name="email" placeholder="Email Address" />
                <textarea name="message" placeholder="Your Message"></textarea>
                <Link to="/"><button className="hireButton">Send Message</button></Link>
            </form>
        </div>
        </section>
        </>
     );
     }
    