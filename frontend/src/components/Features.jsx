import React from 'react'

const Features = () => {
  return (
    <section className="text-gray-600 body-font bg-pink-200">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-5xl font-medium title-font text-gray-900">Learn online with us</h1>
            </div>
            <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div>
                    {/* <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                    </div> */}
                    <h2 className="text-gray-900 text-3xl title-font font-medium">Online lessons</h2>
                </div>
                <div className="flex-grow">
                    <p className="leading-relaxed text-xl">All the lesson delivered by online tutors by using advanced virtual classroom</p>
                    <a className="mt-3 text-green-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </a>
                </div>
                </div>
            </div>
            <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                    {/* <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    </div> */}
                    <h2 className="text-gray-900 text-3xl title-font font-medium">1:1 learning</h2>
                </div>
                <div className="flex-grow">
                    <p className="leading-relaxed text-xl">See and speak with your tutor through the webcam, regardless of your location</p>
                    <a className="mt-3 text-green-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </a>
                </div>
                </div>
            </div>
            <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                    {/* <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                    </div> */}
                    <h2 className="text-gray-900 text-3xl title-font font-medium">Sharing documents</h2>
                </div>
                <div className="flex-grow">
                    <p className="leading-relaxed text-xl">Share documents and screen to each other in the real time</p>
                    <a className="mt-3 text-green-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Features