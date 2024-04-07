import React,{useEffect} from 'react'
import p1 from '../assets/projects/p1.PNG'
import p2 from '../assets/projects/p2.PNG'
import p3 from '../assets/projects/p3.PNG'
import p4 from '../assets/projects/p4.PNG'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})

  const Projects = () => [
    {
      id: 1,
      src: p1,
      desc: "SS GAS lab",
      desc: "Manage Costome Code of website, SEO and Newsletter",
      demo: "https://www.ssgaslab.com/",
      // code: "https://github.com/dipayansarkar47/Sandesh"
    },
    {
      id: 2,
      src: p2,
      desc: "Manage Wordpress Woo Commerce,SEO and Newsletter",
      demo: "https://www.geppe.cacoamerica.com/",
      // code: "https://github.com/dipayansarkar47/shopeasy"
    },
    {
      id: 3,
      src: p3,
      desc: "Manage Wordpress Woo Commerce,SEO and Newsletter",
      demo: "https://thehotelsupplyco.com/",
      // code: "https://github.com/dipayansarkar47/ai-chatbot"
    },
    {
      id: 4,
      src: p4,
      desc: "Manage Wordpress Woo Commerce,SEO and Newsletter",
      demo: "https://gurgaonbakers.com/",
      // code: "https://github.com/dipayansarkar47/online-code-editor"
    }
  ]


  return (
    <div name="projects" className='h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0'>
          {
            Projects().map(({ id, src, desc, demo, code }) => (

              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' />
                <p className='p-2 text-justify font-extralight'>{desc}</p>
                <div className='flex items-center justify-center'>
                  
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
                    <a href={demo}>Demo</a>
                  </button>
                  {/* <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                    <a href={code}>Code</a>
                  </button> */}
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects