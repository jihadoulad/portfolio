import React from 'react'

function About() {
  return (
                <div class="container px-60 mx-auto flex my-36 bg-slate-900">
                    <section class="kbRSgW" id="aboutme">
                        <header class="mb-20 text-center leading-3">
                            <h2>About Me</h2>
                            <hr class="mt-8 mb-4 w-28 h-0.5 mx-auto border-0 bg-cyan-500"/>
                            <p className='text-gray-500 text-2xl'>You will find a little intro about me and the skills and technologies I use daily.</p>
                        </header>
                        <div class="grid grid-cols-2 gap-24">
                            <div>
                                <section class="gyIMjU section__content-about">
                                    <header>
                                        <h3>Want to know me?</h3>
                                    </header>
                                    <p> 
                                    My name is Jihad Oulad Abdessalam and I am a <strong>front-end developer</strong> with expertise in CSS Sass, Tailwind, React JS, Node.js, and other tools.
                                    I am passionate about building beautiful and functional user interfaces that deliver seamless user experiences.
                                    </p>
                                    
                                    <p>
                                    With 2 years of experience in web development, I have a deep understanding of the latest web technologies and design principles. 
                                    I am constantly learning and expanding my skills to keep up with the ever-evolving web development landscape.
                                    </p>
                                    
                                    <p>
                                    My approach to development is rooted in collaboration and communication. I believe that by working closely with clients and other members of a development team, we can create the best possible outcomes for our projects. 
                                    I am always looking for new challenges and opportunities to grow as a developer.
                                    </p>
                                </section>
                                     <a class="bg-cyan-500 hover:bg-cyan-600 text-white py-5 px-8 border-spacing-8 rounded-2xl" href="/#contact">Contact Me</a>
                            </div>
                            <div class="">
                                <section class="StyledHomeContent__StyledSubSection-sc-5fo3qa-3 gyIMjU section__content-skills">
                                    <header>
                                        <h3>Skills and Technologies</h3>
                                    </header>
                                    <header>
                                        <h6>Front end</h6>
                                    </header>
                                    <ul class="technologies">
                                        <li class="tech">HTML</li>
                                        <li class="tech">CSS</li>
                                        <li class="tech">Tailwindcss</li>
                                        <li class="tech">Bootstrap</li>
                                        <li class="tech">Sass</li>
                                        <li class="tech">React</li>
                                        <li class="tech">Javascript</li>
                                        <li class="tech">Redux</li>  
                                        <li class="tech">Axios</li>  
                                    </ul> 
                                    <header>
                                        <h6>Back end</h6>
                                    </header>
                                    <ul class="technologies">
                                        <li class="tech">Node.js</li>
                                        <li class="tech">Express.js</li>
                                        <li class="tech">MongoDB</li>   
                                        <li class="tech">Python</li>   
                                        <li class="tech">REST API</li>   
                                    </ul>
                                    <header>
                                        <h6>Web services</h6>
                                    </header>
                                    <ul class="technologies">
                                        <li class="tech">Git</li>
                                        <li class="tech">Github</li>
                                        <li class="tech">Linux CLI</li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </section>
                </div>
  )
}

export default About