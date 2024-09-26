/*  
    About jsx 
    Mauli Gandhi
    301486344
    2024-09-24
*/
import profileImage from "../src/assets/profileImg.jpg"
import resumePDF from '../src/assets/MauliResume.pdf';
import '../src/index.css'
import '../src/about.css'
export default function About() {
     return <>
     
     <section id="aboutMe">
           {/* Section with Display picture and introduction */}
          <div className="profile">
               <img src={profileImage} alt="Headshot" className="profileImg" />
               <h1>Mauli Gandhi</h1>
               <p>I am a dedicated Software QA Analyst with extensive experience in manual and automated testing across diverse industries such as financial, banking, and healthcare. Committed to enhancing product quality and user experience, I strive to break down barriers to accessibility and usability in software.</p>
               <a href={resumePDF} className="resumeDownload" target="_blank" rel="noopener noreferrer">Download My Resume</a>
          </div>
          {/* Section for skills */}
          <div className="skills">
               <h2>Professional Skills</h2>
               <ul>
                    <li>Expert in Manual & Automated Testing</li>
                    <li>Proficient with Selenium WebDriver, HP ALM, JIRA</li>
                    <li>Experienced in Agile and Waterfall methodologies</li>
               </ul>
          </div>
          {/* Section for experience */}
          <div className="experience">
               <h2>Work Experience</h2>
               <div className="job">
                    <h3>Accessibility Test Specialist - BMO Bank, Toronto [Oct 2022 â€“ Present]</h3>
                    <p>Performed rigorous accessibility testing across multiple platforms, ensuring compliance with WCAG 2.0/2.1 guidelines and improving web accessibility for all users.</p>
               </div>
               <div className="job">
                    <h3>QA Analyst - CIBC Bank, Toronto [May 2021 â€“ Oct 2022]</h3>
                    <p>Lead tester on multiple projects, ensuring the quality of web and mobile applications through comprehensive testing strategies.</p>
               </div>
          </div>
          {/* Section for projects */}
          <div className="projects">
               <h2>Key Projects</h2>
               <div className="project">
                    <h3>Content Management System Migration - Client: BMO Bank</h3>
                    <p>Guided a team through a critical accessibility testing phase for a CMS migration, enhancing user engagement and compliance.</p>
               </div>

               <div className="project">
                    <h3>Costco Co-brand Credit Card Launch - CIBC Bank</h3>
                    <p>Led the QA process for the launch of Costco co-brand credit card, managing a seamless integration of systems to handle a $28bn annual purchase volume.</p>
               </div>

               <div className="project">
                    <h3>E-commerce Platform Overhaul - IOFIT Enhancement & Web-branding</h3>
                    <p>Played a pivotal role in redesigning and enhancing the user experience and backend capabilities of an established e-commerce platform, boosting client productivity and brand visibility.</p>
               </div>

               <div className="project">
                    <h3>Mobile App Development for Health Monitoring - Freelance</h3>
                    <p>Developed a mobile application that enables users to monitor health metrics, integrating user-friendly design with reliable functionality, significantly enhancing user engagement and retention.</p>
               </div>

               <div className="project">
                    <h3>Hospital Management System - Login IT Solutions</h3>
                    <p>Contributed to the development and testing of a comprehensive hospital management system, which streamlined patient management and improved operational efficiency for a specialty kidney hospital.</p>
               </div>
          </div>
          {/* Section for education */}
          <div className="education">
               <h2>Education & Certifications</h2>
               <h3>Artificial Intelligence - Software Engineering Technology</h3>
               <p>Centennial College</p>
               <p>September 2024 - Present</p>
               <h3>Software QA Lead â€“ Advanced Level [Manual + Automation]</h3>
               <p>Institute of Information Technology (IofIt), Calgary, Canada</p>
               <p>June 2020 - November 2020</p>
               <h3>Bachelor of Computer Applications (B.C.A)</h3>
               <p>Gujarat University, India</p>
               <p>2009</p>
          </div>
          {/* Section for contact with button */}
          <div className="contact">
               <h2>Contact Me</h2>
               <p>Feel free to reach out for collaborations or just a chat about potential opportunities.</p>
    
          </div>
     </section>
     </>
    }
    