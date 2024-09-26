/*  
    Home.jsx
    Mauli Gandhi
    301486344
    2024-09-24
*/
import { Link } from 'react-router-dom';
import '../src/index.css';

// Main functional component for the Home page
export default function Home() {
    return (
        <>
            {/* Introduction section */}
            <section id="intro" className="introSection">
                <div className="introContent">
                    <div className="textContainer">
                        {/* Greeting and Name Introduction */}
                        <span className="helloText">Hello,</span><br />
                        <span className="introText">
                            I am <span className="introName">Mauli Gandhi</span><br/>Software QA Analyst
                        </span>
                        {/* Description Paragraphs */}
                        <p className="introParagraph">
                            As a dedicated Software QA Analyst with over four years of experience in manual and automated testing across diverse domains such as financial, banking, and healthcare, 
                            I am committed to enhancing product quality and user experience.
                        </p>
                        <p className="introParagraph">
                            My mission is to continuously refine software products through meticulous testing and insightful feedback, utilizing a blend of traditional and innovative testing tools and methodologies. 
                        </p>
                        {/* Hire Me Button */}
                        <Link to="/contact"><button className="hireButton">Hire Me</button></Link>
                    </div>
                </div>
            </section>
        </>
    );
}
