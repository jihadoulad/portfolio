import React from 'react'

function Projects() {
  return (
                    <section className='mb-72 bg-slate-900' id='projects'>
                        <header class="mb-20 text-center leading-3">
                            <h2>PROJECTS</h2>
                            <hr className="mt-8 mb-4 w-28 h-0.5 mx-auto border-0 bg-cyan-500"/>
                            <p className='text-gray-500 text-2xl'>These are some of the projects I built to practice and get better at the technologies mentioned above.</p>
                        </header>
                        <ul class="container px-32 mx-auto grid grid-cols-2 gap-24">
                            <li class="dloBMj">
                                <article>
                                    
                                    <img src="./images/TodoApp.png" alt="Todo App" />
                                    <section class="project__details">
                                        <header>
                                            <h3>TODOS</h3>
                                        </header>
                                        <p class="project__para">Todos is a task management app to help you stay organized and manage your day-to-day. You can use it to make shopping lists or task lists, take notes, record collections, plan an event, or set reminders to increase your productivity and focus on what matters to you.</p>
                                        
                                        <ul aria-label="technologies used" class="technologies">
                                            <li class="tech">Reactjs</li>
                                            <li class="tech">css</li>
                            
                                        
                                        </ul>
                                        <div class="project__links">
                                        <a class="bg-transparent hover:bg-cyan-600 outline outline-1 outline-cyan-500 text-white py-5 px-8 border-spacing-8 rounded-2xl" href="https://todo-app-react-sandy.vercel.app/" target="_blank" rel="noreferrer noopener">Live</a>
                                        <a class="bg-transparent hover:bg-cyan-600 outline outline-1 outline-cyan-500 text-white py-5 px-8 border-spacing-8 rounded-2xl" href="https://github.com/jihadoulad/todo-app-react" target="_blank" rel="noreferrer noopener">Source</a>
                                        
                                            
                                        </div>
                                    </section>
                                </article>
                            </li>
                            <li class="dloBMj">
                                <article>
                                    
                                    <img src="./images/MovieApp.png" alt="" />
                                    <section class="project__details">
                                        <header>
                                            <h3>MOVIE LAND - All about movies, tv-series, people and community groups.</h3>
                                        </header>
                                        <p class="project__para">Movie Land is a media project that lists some series of movies, tv-series, and people.</p>
                                        <p class="project__para">Users can also search for a particular media.</p>
                                        <ul aria-label="technologies used" class="technologies">
                                            <li class="tech">Reactjs</li>
                                            <li class="tech">css</li>
                                            
                                            <li class="tech">API</li>
                                        </ul>
                                        <div class="project__links">
                                        <a class="bg-transparent hover:bg-cyan-600 outline outline-1 outline-cyan-500 text-white py-5 px-8 border-spacing-8 rounded-2xl" href="https://movies-app-react-liart.vercel.app/" target="_blank" rel="noreferrer noopener">Live</a>
                                        <a class="bg-transparent hover:bg-cyan-600 outline outline-1 outline-cyan-500 text-white py-5 px-8 border-spacing-8 rounded-2xl" href="https://github.com/jihadoulad/movies-app-react" target="_blank" rel="noreferrer noopener">Source</a>
                                        </div>
                                    </section>
                                </article>
                            </li>
                            <li class="dloBMj">
                                <article>
                                    
                                    <img src="./images/MemesApp.png" alt="" />
                                    <section class="project__details">
                                        <header>
                                            <h3>MEMES</h3>
                                        </header>
                                        <p class="project__para">Memes app provides a fun and entertaining way for users to discover and share the latest and greatest memes</p>
                                        <p class="project__para">Users can search for specific memes, browse through popular ones, or create their own using the built-in meme generator tool</p>
                                        <ul aria-label="technologies used" class="technologies">
                                            <li class="tech">Reactjs</li>
                                           
                                            <li class="tech">css</li>
                                            
                                            <li class="tech">API</li>
                                        </ul>
                                        <div class="project__links">
                                        <a class="bg-transparent hover:bg-cyan-600 outline outline-1 outline-cyan-500 text-white py-5 px-8 border-spacing-8 rounded-2xl" href="https://jihadoulad.github.io/memes-app-react/" target="_blank" rel="noreferrer noopener">Live</a>
                                        <a class="bg-transparent hover:bg-cyan-600 outline outline-1 outline-cyan-500 text-white py-5 px-8 border-spacing-8 rounded-2xl" href="https://github.com/jihadoulad/memes-app-react" target="_blank" rel="noreferrer noopener">Source</a>
                                            
                                        </div>
                                    </section>
                                </article>
                            </li>
                            <li class="dloBMj">
                                <article>
                                    <div className='w-36 h-16 bg-red-500 absolute m-10 px-4 py-3 rounded-2xl'>Ongoing</div>
                                    <img src="./images/EcommerceApp.png" alt="" />
                                    <section class="project__details">
                                        <header>
                                            <h3>E-COMMERCE PRODUCT PAGE</h3>
                                        </header>
                                        <p class="project__para">eCommerce app provides users with tools to manage their purchases, such as a shopping cart to keep track of items</p>
                                        <p class="project__para">Users can also track their order status, receive notifications on delivery updates, and manage their shipping and billing information.</p>
                                        <ul aria-label="technologies used" class="technologies">
                                            <li class="tech">reactjs</li>
                                            <li class="tech">styled-components</li>
                                            <li class="tech">API</li>
                                            <li class="tech">Testing</li>
                                        </ul>
                                        <div class="project__links">
                                        <a class="bg-transparent hover:bg-cyan-600 outline outline-1 outline-cyan-500 text-white py-5 px-8 border-spacing-8 rounded-2xl" href="/" target="_blank" rel="noreferrer noopener">Live</a>
                                        <a class="bg-transparent hover:bg-cyan-600 outline outline-1 outline-cyan-500 text-white py-5 px-8 border-spacing-8 rounded-2xl" href="/" target="_blank" rel="noreferrer noopener">Source</a>
                                        </div>
                                    </section>
                                </article>
                            </li>
                        </ul>
                    </section>
  )
}

export default Projects
