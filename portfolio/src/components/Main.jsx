import React from "react";
import image from "../assets/home_image1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { DiHtml5, DiJava, DiCss3, DiJsBadge , DiMysql, DiDatabase, DiFirebase, DiWindows, DiUbuntu, DiApple } from "react-icons/di";
import foodImage from "../assets/food.png";
import frontEndImage from "../assets/frontend.png";
import PageIcons from "./Page-icons";
const Main = () => {
    return (
      <div>
        <section id="home" title="home-section" class=" m-0 pt-20">
            <div class="flex flex-col justify-center items-center">
            <img src={image} alt="David" class="rounded-full h-60 w-60 object-cover mb-6" />
                <h1 class="text-6xl font-bold ">Hello, I'm David.</h1>
                <p class="text-2xl p-2 max-w-xl text-center mb-2">Welcome to my portfolio! I specialize in building secure, efficient tech solutions that bridge business and technology. With experience in programming, information security, and system design, I help businesses protect their data and optimize operations. 
                   </p>
                    <p class="text-base">FINAL YEAR BSC. INFORMATIONS SYSTEMS.</p>
                    <p>LINNAEUS UNIVERSITY, SWEDEN.</p>
                    {/* Social Media Icons Section */}
           
        <div className="flex space-x-6 mt-16">
            <a href="mailto:davidbooab@hotmail.com" className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg">
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
        <div className="mt-20">   
        <section className="about" title="about-section">
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold">About Me</h2>
            <div className="flex flex-row items-center mt-4">
              <p className="text-2xl p-2 max-w-xl leading-relaxed">
                I'm someone who enjoys the little things in life—like cooking up a new recipe in the kitchen or spending quality time with my friends.
                Whether it's experimenting with different flavors or hosting casual get-togethers, I love creating experiences that bring people together.
                When I’m not in the kitchen or with friends, you’ll probably find me spending time with my girl.<br></br> I’m always up for trying new things and making the most of everyday moments.
                Feel free to reach out or say hello—I'm always open to meeting new people and sharing stories!
              </p>
              <img src={foodImage} alt="food" className="h-96 w-96 object-cover ml-6 rounded-xl"/>
            </div>
           </div> 
        </section>
        <div className="flex flex-col justify-center items-center mt-24">
          <section className="skills" title="skills-section">
            <h2 className="text-4xl font-bold">Skills</h2>
            <div className="flex flex-row items-center mt-20">
            <PageIcons/>
            
              
            </div>
          </section>
         </div>
        </div>
       </div> 
    );
} 

export default Main;