/*  services.jsx 
    Mauli Gandhi
    301486344
    2024-09-24
*/
import qaTestingImg from '../src/assets/accessiblity.jpg';  // Path to an image that represents QA Testing
import softwareDevelopmentImg from '../src/assets/dev.jpg';  // Path to an image for Software Development
import '../src/services.css';
import '../src/index.css'

export default function Services() {
    return (
      <>
      <section id="services">
      <div className="servicesSection">
            <div className="serviceCard">
                <img src={qaTestingImg} alt="QA Testing" className="serviceImage" />
                <h3>QA Testing</h3>
                <p>Expert in conducting thorough QA testing to ensure software reliability, functionality, and compliance with all standards.</p>
            </div>

            <div className="serviceCard">
                <img src={softwareDevelopmentImg} alt="Software Development" className="serviceImage" />
                <h3>Software Development</h3>
                <p>Skilled in developing robust software solutions across various platforms, focusing on efficiency, scalability, and user-centric design.</p>
            </div>
        </div>
      </section>
      </>
    );
}