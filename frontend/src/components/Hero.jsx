import React from 'react'
import cover from '../img/cover.jpg'

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-300">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-xl mb-4 font-medium text-gray-700">Experience Personally Tailored Lessons From Exceptional Tutors
            <br className="hidden lg:inline-block " />
            </h1>
            <h4 className="text-3xl text-blue-300">Find a tutor with the skills you need</h4>
            <p className="mb-8 leading-relaxed ">Alpha tutoring Online lessons fit effortlessly into family life. Book sessions one by one – or regularly for however long you like – and pay as you go. Even better, tuition online means you cut out travel costs. You also have the same tutor every week, whether you’re at school before footie, at Grandma’s house, or on holiday.</p>
            <div className="flex justify-center">
            <a href="register"><button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Sign Up</button></a>
            <a href="login"><button className="ml-4 inline-flex text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Login</button></a>
            </div>
        </div>
        <div>
            <img className="object-cover object-center rounded" alt="hero" src={cover} />
        </div>
        </div>
    </section>
  )
}

export default Hero