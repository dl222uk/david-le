import React from "react";
import image from "../assets/home_image1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import foodImage from "../assets/food.png";
import PageIcons from "./Page-icons";
import KoreaUniversity from "../assets/Koreauniversity.png";
import work from "../assets/Work-sign.jpeg";
// Import your new project image
// import NewProjectImage from "../assets/new_project_image.png"; // Replace with the actual image

const Main = () => {
  return (
    <div>
      {/* Home Section */}
      <section id="home" title="home-section" className="m-0 pt-20">
        <div className="flex flex-col justify-center items-center">
          <img src={image} alt="David" className="rounded-full h-60 w-60 object-cover mb-6" />
          <h1 className="text-6xl font-bold">
            Hello, <span className="text-blue-500">I'm David.</span>
          </h1>
          <p className="text-2xl p-2 max-w-xl text-center mb-2">
            Welcome to my portfolio! I specialize in building secure, efficient tech solutions that bridge business and technology. 
            With experience in programming, information security, and system design, I help businesses protect their data and optimize operations.
          </p>
          <p className="text-base">FINAL YEAR BSC. INFORMATION SYSTEMS.</p>
          <p>LINNAEUS UNIVERSITY, SWEDEN.</p>
          {/* Social Media Icons Section */}
          <div className="flex space-x-6 mt-16">
            <a href="mailto:davidbooab@hotmail.com" className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-xl">
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
          </section>
        </div>

        {/* Work Experience Section */}
        <div className="mt-60">
          <section className="work-experience">
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
                    <p className="mt-5 text-xl">University Start</p>
                  </div>

                  <div className="relative flex flex-col items-center">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <span className="text-sm text-gray-500 mt-2">Jun 2023 - Aug 2023</span>
                    <p className="mt-5 text-xl">Rusta</p>
                  </div>

                  <div className="relative flex flex-col items-center">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <span className="text-sm text-gray-500 mt-2">Jun 2024 - Aug 2024</span>
                    <p className="mt-5 text-xl">Rusta</p>
                  </div>

                  <div className="relative flex flex-col items-center">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <span className="text-sm text-gray-500 mt-2">Aug 2024 - </span>
                    <p className="mt-5 text-xl">Internship hunting</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio Section */}
          <div className="mt-60">
            <section className="portfolio mt-24">
              <h1 className="text-6xl font-bold text-blue-500 text-center">Portfolio</h1>

              {/* Korea Project */}
              <div className="container mx-auto mt-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-12 max-w-6xl">
                {/* Text section on the left */}
                <div className="md:w-2/3 text-left">
                  <p className="text-gray-400 text-sm">2023</p>
                  <h2 className="text-3xl font-bold text-gray-800">Korea Project</h2>
                  <p className="text-lg text-gray-600 mt-4">
                    This web was constructed during one of my classes in University with AngularJS, Typescript and Firebase and contains CRUD-functions. The webpage is an attempt of Korea University's homesite and was primarily done for practise.
                    
                  </p>
                </div>

                {/* Image section on the right */}
                <div className="md:w-1/3">
                  <img className="object-contain w-full h-auto max-w-xs rounded-lg" src={KoreaUniversity} alt="Korea Project" />
                </div>
              </div>

              {/* New Project */}
              <div className="container mx-auto mt-44 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-12 max-w-6xl">
                {/* Image section on the left */}
                <div className="md:w-1/3">
                  <img className="object-contain w-full h-auto max-w-xs rounded-lg" src={KoreaUniversity} alt="New Project" />
                </div>

                {/* Text section on the right */}
                <div className="md:w-2/3 text-left">
                  <p className="text-gray-400 text-sm">2024</p>
                  <h2 className="text-3xl font-bold text-gray-800">Portfolio Website</h2>
                  <p className="text-lg text-gray-600 mt-4">
                    Created my own portfolio website to showcase my skills and projects. It was built using React and Tailwind CSS.
                  </p>
                </div>
              </div>

              <div className="container mx-auto mt-36 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-12 max-w-6xl">
                {/* Text section on the left */}
                <div className="md:w-2/3 text-left">
                  <p className="text-gray-400 text-sm">2024 </p>
                  <h2 className="text-3xl font-bold text-gray-800">Next Project To Be Built</h2>
                  <p className="text-lg text-gray-600 mt-4">
                    Upcoming project to be built. Stay tuned for more information. 
                  </p>
                </div>

                   {/* Image section on the right */}
                   <div className="md:w-1/3">
                  <img className="object-contain w-full h-auto max-w-xs rounded-lg" src={work} alt="Work" />
                </div>
              </div>

              <div className="mt-20">

              </div>
            

            </section>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
