import React from "react";
import image from "../assets/home_image1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { DiHtml5, DiJava, DiCss3, DiJsBadge , DiMysql, DiDatabase, DiFirebase, DiWindows, DiUbuntu, DiApple } from "react-icons/di";
import foodImage from "../assets/food.png";
import PageIcons from "./Page-icons";

const Main = () => {
    return (
        <div>
            <section id="home" title="home-section" className="m-0 pt-20">
                <div className="flex flex-col justify-center items-center">
                    <img src={image} alt="David" className="rounded-full h-60 w-60 object-cover mb-6" />
                    <h1 className="text-6xl font-bold">Hello, <span className="text-blue-500">I'm David.</span></h1>
                    <p className="text-2xl p-2 max-w-xl text-center mb-2">
                        Welcome to my portfolio! I specialize in building secure, efficient tech solutions that bridge business and technology. 
                        With experience in programming, information security, and system design, I help businesses protect their data and optimize operations.
                    </p>
                    <p className="text-base">FINAL YEAR BSC. INFORMATIONS SYSTEMS.</p>
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

            {/* About Section */}
            <div className="mt-20">   
                <section className="about" title="about-section">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-4xl font-bold">About Me</h2>
                        <div className="flex flex-row items-center mt-4">
                            <p className="text-2xl p-2 max-w-xl leading-relaxed">
                                I'm someone who enjoys the little things in life—like cooking up a new recipe in the kitchen or spending quality time with my friends.
                                Whether it's experimenting with different flavors or hosting casual get-togethers, I love creating experiences that bring people together.
                            
                            </p>
                            <img src={foodImage} alt="food" className="h-96 w-96 object-cover ml-6 rounded-xl" />
                        </div>
                    </div> 
                </section>

                {/* Skills Section */}
                <div className="flex flex-col justify-center items-center mt-24">
                    <section className="skills text-center" title="skills-section">
                        <h2 className="text-4xl font-bold">Skills</h2>
                        <PageIcons />


                     {/* Add animation slider here with icons*/}

                    </section>
                </div>

                {/* Work Experience Section */}
                <div className="mt-60">
                    <section className="work-experience ">
                        <h2 className="text-6xl font-bold text-blue-500 mx-60">Work Experience</h2>
                        <div className="mx-12">
                        <div className="timeline mt-12 w-full flex justify-between relative">
                            <div className="timeline-container w-full flex justify-between items-start relative">
                                {/* Horizontal Line */}
                                <div className="absolute w-full top-1/2 border-t border-gray-300"></div>

                                {/* Timeline Dots and Dates */}
                                <div className="relative flex flex-col items-center">
                                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                                    <span className="text-sm text-gray-500 mt-2">Aug 2022</span>
                                    <p className="mt-5 text-xl">University <br></br>start</p>
                                </div>

                                <div className="relative flex flex-col items-center">
                                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                                    <span className="text-sm text-gray-500 mt-2">Jun 2023 -  Aug 2023</span>
                                    <p className="mt-5 text-xl">Rusta</p>
                                </div>

                                <div className="relative flex flex-col items-center">
                                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                                    <span className="text-sm text-gray-500 mt-2">Jun 2024 -  Aug 2024</span>
                                    <p className="mt-5 text-xl">Rusta</p>
                                </div>

                                <div className="relative flex flex-col items-center">
                                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                                    <span className="text-sm text-gray-500 mt-2">Aug 2024 - </span>
                                    <p className="mt-5 text-xl">Searching for internship</p>
                                </div>
                  
                            </div>
                        </div>
                      </div>
                    </section>

                    {/* Portfolio */}
                  <div className="mt-60">
                   <section className="portfolio mt-24"> 
                    <h1 className="text-6xl font-bold text-blue-500 mx-60 text-center">Portfolio</h1>
          

                  </section>  
                 </div> 
                </div>
            </div>
        </div>
    );
}

export default Main;
