import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, ChevronDown, Award, Briefcase, GraduationCap, User } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">John Doe</h1>
          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('home')}
              className={`${activeSection === 'home' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`${activeSection === 'about' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className={`${activeSection === 'experience' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`}
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className={`${activeSection === 'education' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`}
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className={`${activeSection === 'skills' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`}
            >
              Skills
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">John Doe</h1>
            <h2 className="text-xl md:text-2xl text-blue-600 mb-6">Software Developer & Data Enthusiast</h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Passionate about creating elegant solutions to complex problems. I specialize in full-stack development with a focus on scalable and maintainable code.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="mailto:john.doe@example.com" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                <Mail size={18} />
                Contact Me
              </a>
              <a href="#" className="flex items-center gap-2 bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition">
                <User size={18} />
                View Resume
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="John Doe" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <button 
            onClick={() => scrollToSection('about')} 
            className="animate-bounce bg-white p-3 rounded-full shadow-md"
          >
            <ChevronDown size={24} className="text-blue-600" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-600 mb-6">
                I'm a software developer with 5+ years of experience building web applications and data-driven solutions. My journey in technology began with a curiosity about how things work, which led me to pursue a degree in Computer Science.
              </p>
              <p className="text-gray-600 mb-6">
                I believe in writing clean, maintainable code and am passionate about using technology to solve real-world problems. When I'm not coding, you can find me hiking, reading, or experimenting with new technologies.
              </p>
              <h3 className="text-xl font-semibold mb-4">My Core Values</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Continuous learning and growth</li>
                <li>Attention to detail and quality</li>
                <li>Collaborative problem-solving</li>
                <li>User-centered design thinking</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-600" size={20} />
                  <a href="mailto:john.doe@example.com" className="text-gray-600 hover:text-blue-600">john.doe@example.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-blue-600" size={20} />
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600">(123) 456-7890</a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="text-blue-600" size={20} />
                  <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">linkedin.com/in/johndoe</a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="text-blue-600" size={20} />
                  <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">github.com/johndoe</a>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p className="text-gray-600 mb-6">
                San Francisco, California
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center mb-12">
            <Briefcase size={28} className="text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold">Work Experience</h2>
          </div>
          
          <div className="space-y-12">
            {/* Experience Item 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Senior Software Engineer</h3>
                  <p className="text-blue-600">TechCorp Inc.</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">Jan 2021 - Present</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Lead developer for the company's flagship product, responsible for architecture decisions and implementation of new features.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Redesigned the application architecture, resulting in a 40% improvement in load times</li>
                <li>Implemented CI/CD pipeline that reduced deployment time by 60%</li>
                <li>Mentored junior developers and conducted code reviews</li>
                <li>Collaborated with product and design teams to deliver features that increased user engagement by 25%</li>
              </ul>
            </div>
            
            {/* Experience Item 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Software Developer</h3>
                  <p className="text-blue-600">InnovateSoft</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">Mar 2018 - Dec 2020</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Full-stack developer working on web applications for clients in finance and healthcare sectors.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Developed and maintained RESTful APIs using Node.js and Express</li>
                <li>Built responsive front-end interfaces with React and Redux</li>
                <li>Implemented data visualization dashboards that helped clients increase operational efficiency</li>
                <li>Participated in agile development processes, including daily stand-ups and sprint planning</li>
              </ul>
            </div>
            
            {/* Experience Item 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Junior Web Developer</h3>
                  <p className="text-blue-600">WebSolutions Co.</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">Jun 2016 - Feb 2018</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Worked on front-end development for various client websites and internal tools.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Created responsive websites using HTML, CSS, and JavaScript</li>
                <li>Collaborated with designers to implement UI/UX improvements</li>
                <li>Assisted in the migration of legacy systems to modern frameworks</li>
                <li>Participated in client meetings to gather requirements and provide technical insights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center mb-12">
            <GraduationCap size={28} className="text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Item 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Master of Science in Computer Science</h3>
                  <p className="text-blue-600">Stanford University</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">2014 - 2016</span>
              </div>
              <p className="text-gray-600 mb-4">
                Specialized in Artificial Intelligence and Machine Learning
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>GPA: 3.8/4.0</li>
                <li>Research Assistant in the Natural Language Processing Lab</li>
                <li>Thesis: "Improving Neural Network Efficiency for Real-time Applications"</li>
              </ul>
            </div>
            
            {/* Education Item 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Bachelor of Science in Computer Engineering</h3>
                  <p className="text-blue-600">University of California, Berkeley</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">2010 - 2014</span>
              </div>
              <p className="text-gray-600 mb-4">
                Minor in Mathematics
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>GPA: 3.7/4.0</li>
                <li>Dean's List: 7 semesters</li>
                <li>Member of the ACM Student Chapter</li>
                <li>Senior Project: Developed an IoT system for smart home energy management</li>
              </ul>
            </div>
            
            {/* Certifications */}
            <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Certifications & Additional Education</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-600">AWS Certified Solutions Architect</h4>
                  <p className="text-gray-600">Amazon Web Services • 2022</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600">Google Professional Data Engineer</h4>
                  <p className="text-gray-600">Google Cloud • 2021</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600">Deep Learning Specialization</h4>
                  <p className="text-gray-600">Coursera (Andrew Ng) • 2020</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600">Full Stack Web Development</h4>
                  <p className="text-gray-600">Udacity • 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center mb-12">
            <Award size={28} className="text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold">Skills & Achievements</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">JavaScript</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">TypeScript</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Python</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Java</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">C++</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">SQL</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Frameworks & Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">React</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Node.js</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Express</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Django</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">TensorFlow</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Redux</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Tools & Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Git</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Docker</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">AWS</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Google Cloud</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">MongoDB</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">PostgreSQL</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Methodologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Agile/Scrum</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">CI/CD</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">TDD</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Microservices</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">DevOps</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Soft Skills & Achievements */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>Team Leadership</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>Problem Solving</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>Communication</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>Project Management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>Critical Thinking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>Adaptability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>Time Management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>Mentoring</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Achievements</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <Award className="text-blue-600 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Employee of the Year</p>
                      <p className="text-gray-600 text-sm">TechCorp Inc. • 2022</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Award className="text-blue-600 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Best Technical Solution Award</p>
                      <p className="text-gray-600 text-sm">Regional Hackathon • 2020</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Award className="text-blue-600 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Published Research Paper</p>
                      <p className="text-gray-600 text-sm">IEEE Conference on Machine Learning • 2019</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Award className="text-blue-600 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Open Source Contributor</p>
                      <p className="text-gray-600 text-sm">Top 100 contributor to React ecosystem • 2018</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-400">Software Developer & Data Enthusiast</p>
            </div>
            <div className="flex space-x-4">
              <a href="mailto:john.doe@example.com" className="hover:text-blue-400 transition">
                <Mail size={20} />
              </a>
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <Github size={20} />
              </a>
              <a href="tel:+1234567890" className="hover:text-blue-400 transition">
                <Phone size={20} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;