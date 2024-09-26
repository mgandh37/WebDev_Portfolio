/*  projects.jsx  
    
    Mauli Gandhi
    301486344
    2024-09-26
 */
import accessiblityTesting from '../src/assets/accessiblity.jpg';
import functionalTesting from '../src/assets/functional.jpg';
import webDevelopment from '../src/assets/dev.jpg';

import '../src/project.css'
export default function Project() {
     return <>
     
     <section id="works">
         
     <div className="projectSection">
            <div className="projectCard left">
                <img src={accessiblityTesting} alt="BMO Project" className="projectImage" />
                <div className="projectInfo">
                <h3>BMO Content Management System Migration</h3>
                    <ul>
                        <li>Led the accessibility and functional testing efforts during the migration of BMO content management system.</li>
                        <li>Aimed to enhance digital accessibility standards and improve overall user experience.</li>
                        <li>Ensured compliance with WCAG 2.1 guidelines.</li>
                    </ul>
                </div>
            </div>

            <div className="projectCard right">
                <img src={functionalTesting} alt="CIBC Project" className="projectImage" />
                <div className="projectInfo">
                <h3>CIBC Co-brand Credit Card Launch</h3>
                <ul>
                        <li>Managed and led the quality assurance team for the launch of CIBC co-branded credit cards with Costco.</li>
                        <li>Handled intricate system integrations and rigorous testing phases.</li>
                        <li>Set a new standard in customer financial solutions.</li>
               </ul>
               </div>
            </div>

            <div className="projectCard left">
                <img src={webDevelopment} alt="Hospital Management System Project" className="projectImage" />
                <div className="projectInfo">
                <h3>Hospital Management System Development</h3>
                <ul>
                        <li>Contributed to the development and enhancement of a comprehensive hospital management system.</li>
                        <li>Improved patient care and automated administrative tasks.</li>
                        <li>Boosted efficiency and reduced manual errors in hospital operations.</li>
               </ul>
                </div>
            </div>
        </div>
                  
                  
     </section>
    

     </>
    }
    