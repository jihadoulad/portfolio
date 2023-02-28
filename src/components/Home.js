import React from 'react'

function Home() {
  return (
    <div className=' bg-slate-900'> 
            <nav className="">
                <div className="container px-32 mx-auto flex">
                    <div>
                        <img src="./images/logo.svg" alt="" className='w-28
                        ' />
                    </div>
                    
                    <ul className="flex items-center ml-auto gap-9">
                        <li>
                            <a className='hover:text-cyan-400' href="/">HOME</a>
                        </li>
                        <li>
                            <a className='hover:text-cyan-400' href="/#aboutme">ABOUT ME</a>
                        </li>
                        <li>
                            <a className='hover:text-cyan-400' href="/#projects">PROJECTS</a>
                        </li>
                        <li>
                            <a className='hover:text-cyan-400' href="/#contact">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <header class="iOTQMV">
                <div class="container px-32 mx-auto flex">
                    <div class="header__content">
                        <h1>
                            <span class="header__greeting">Hello I'm </span>
                            <span class="header__name">Jihad Oulad,</span>
                        </h1>
                        <p class="header__intro">a passionate frontend developer focused on creating interactive, accessible, and responsive websites.</p>
                        <div class="mt-20">
                            <a class="bg-cyan-500 hover:bg-cyan-600  text-white py-5 px-8 border-spacing-8 rounded-2xl" href="/#projects">See My Work</a>
                            <a class="ml-8 bg-transparent hover:bg-cyan-600 outline outline-1 outline-cyan-500 text-white py-5 px-8 border-spacing-8 rounded-2xl" href="/Resume.pdf" target="_blank" rel="noreferrer noopener">View Resume</a>
                        </div>
                    </div>
                    <div class="header__svg" aria-hidden="true">
                        <span>
                            <span></span>
                            <img alt="" className='' src="https://www.webbehinds.com/assets/img/integration.svg"/>
                            <noscript>
                                <img alt="" sizes="100vw" srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.e6e82a4c.svg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.e6e82a4c.svg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.e6e82a4c.svg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.e6e82a4c.svg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.e6e82a4c.svg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.e6e82a4c.svg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.e6e82a4c.svg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.e6e82a4c.svg&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.e6e82a4c.svg&amp;w=3840&amp;q=75" decoding="async" data-nimg="responsive" loading="lazy"/>
                            </noscript>
                        </span>
                    </div>
                </div>
            </header>
        </div>
  )
}

export default Home