import { Link } from 'react-router-dom';
import '../src/index.css'

export default function Home() {
     return <>
     
     <section id="intro" className="introSection">
            <div className="introContent">
                <div className="textContainer">
                    <span className="helloText">Hello,</span><br />
                    <span className="introText">
                        I am <span className="introName">Mauli Gandhi</span><br/>Software QA Analyst
                    </span>
                    <p className="introParagraph">
                    As a dedicated Software QA Analyst with over four years of experience in manual and automated testing across diverse domains such as financial, banking, and healthcare, 
                    I am committed to enhancing product quality and user experience. Leveraging a deep proficiency in web and mobile testing, including functional, non-functional, regression, 
                    and accessibility testing in compliance with WCAG 2.0 and 2.1 standards, I strive to break down barriers to accessibility and usability.
                    </p>
                    <p className="introParagraph">
                    My mission is to continuously refine software products through meticulous testing and insightful feedback, utilizing a blend of traditional and innovative testing tools and methodologies. 
                    I am devoted to ensuring that all usersâ€”regardless of abilityâ€”have optimal interactions with technology, driving forward advancements that shape the future of software development and accessibility.
                    </p>
                    <Link to="/contact"><button className="hireButton">Hire Me</button></Link>
                </div>
                
            </div>
        </section>
    

     </>
     }
    