import React from 'react'
import sixth from '../img/sixth.jpg'

const AboutUs = () => {
  return (
    <section className="text-gray-600 body-font bg-yellow-100">
        <div className="px-5 py-24 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src={sixth} />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Dr. Vinod Bansal</h2>
                    <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
                    <p className="text-base">Founder & Managing Director</p>
                </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-xl mb-4 text-black">Alpha Tutoring is online schooling and the leading provider of private tutoring.We are rapidly growing organisation that offers huge possibilities for your career advancement.Alpha Tutoring has a mission to make world class online / offline  home-tuitions to fullfill dreams of education across India. Online tuitions accessible and dedicated to fulfill dreams of education across world.We help find learning options for students as well as adults in academic and non academic area.</p>
                <a className="text-green-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs