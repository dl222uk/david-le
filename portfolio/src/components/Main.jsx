import React from "react";
import image from "../assets/home_image1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
const Main = () => {
    return (
      <div>
        <section id="home" title="home-section" class=" m-0 pt-24">
            <div class="flex flex-col justify-center items-center">
            <img src={image} alt="David" class="rounded-full h-60 w-60 object-cover mb-6" />
                <h1 class="text-6xl font-bold ">Hello, I'm David.</h1>
                <p class="text-2xl p-2 max-w-xl text-center mb-2">Welcome to my portfolio! I specialize in building secure, efficient tech solutions that bridge business and technology. With expertise in programming, information security, and system design, I help businesses protect their data and optimize operations. 
                    Explore my projects to see how I turn technical knowledge into impactful solutions in today’s digital world.</p>
                    <p class="text-base">FINAL YEAR BSC. INFORMATIONS SYSTEMS</p>
                    <p>LINNAEUS UNIVERSITY, SWEDEN</p>
                    {/* Social Media Icons Section */}
           
        <div className="flex space-x-6 mt-4">
            <a href="mailto:davidbooab@hotmail.com" className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg grid h-screen">
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
            </a>

            <a href="https://www.linkedin.com/in/david-le-bab5071ab/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg">
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </a>

            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg">
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </a>
            </div>
        
        </div>
        </section>
        <div className="mt-10">   
        <section className="about" title="about-section">
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="text-2xl p-2 max-w-xl text-center mb-2">I am a final year student at Linnaeus University, Sweden, pursuing a BSc. in Information Systems. My passion for technology and innovation has driven me to specialize in programming, information security, and system design. I am committed to building secure, efficient tech solutions that bridge business and technology, helping businesses protect their data and optimize operations.</p>
            </div>
        </section>
       
       
       
        </div>



      </div>
    );
    } 

    export default Main;