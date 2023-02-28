import React from 'react'

function Contact() {
  return (
        <div>
                    <header class="mb-20 text-center leading-3">
                            <h2>CONTACT</h2>
                            <hr class="mt-8 mb-4 w-28 h-0.5 mx-auto border-0 bg-cyan-500"/>
                            
                    </header>
                <footer class="grid grid-cols-2 gap-24 px-72 py-20 bg-gradient-to-b from-slate-800 to-slate-900 dark:bg-gray-900">
                    
                    <section class="">
                        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                            <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-center text-white dark:text-white">Get in touch</h2>
                            
                            <form action="mailto:jihadoulad20@gmail.com" class="space-y-2">
                                <div>
                                    <label for="email" class="block mb-2 font-medium text-gray-900 dark:text-gray-300">Name</label>
                                    <input type="email" id="email" class="p-6 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Name" required/>
                                </div>
                                <div>
                                    <label for="subject" class="block mb-2 font-medium text-gray-900 dark:text-gray-300">Email</label>
                                    <input type="text" id="subject" class="p-6 block w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Email" required/>
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="message" class="block mb-2 font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                    <textarea id="message" rows="6" class="block p-6 w-full text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                                </div>
                                <div className=''>
                                <button type="submit" class="mt-8 py-6 px-8 font-medium text-center text-white rounded-xl bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                                </div>
                            </form>
                        </div>
                    </section>
                    <section id="contact">
            
         <h3 className='mt-40'>Here is a good spot for a message to your readers to let them know how best to reach out to you.</h3>
                    <div class="mt-10 flex flex-col wrapper">
         <div class="button">
            <div class="icon">
                
               <i class="fab fa-linkedin"></i>
            </div>
            <span><a href='https://www.linkedin.com/in/jihad-oulad-9791b4185/' target="_blank" rel='noreferrer' className='font-bold italic'>Linkedin</a></span>
         </div>
         
         <div class="button">
            <div class="icon">
                
               <i class="fab fa-github"></i>
            </div>
            <span><a href='https://github.com/jihadoulad' target="_blank" rel='noreferrer' className='font-bold italic'>Github</a></span>
         </div>
         </div>
         
                            
                        </section>
                        
                </footer>
                
            </div>

    
    
  )
}

export default Contact