import React from 'react'

const CoursesList = () => {
  return (
    <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">Shelley S.</span>
          {/* <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span> */}
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">M.S. in Speech-Language Pathology with 20 Years of Teaching Experience</h2>
          <p className="leading-relaxed"> With an M.S. in Speech-Language Pathology and many years of teaching English I have the right background to help you work on your English skills. I have also worked in the publishing.</p>
          <a className="text-green-500 inline-flex items-center mt-4">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">Patrick P.</span>
          {/* <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span> */}
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Patient and Experienced Math Tutor with Teaching Certification</h2>
          <p className="leading-relaxed">I have been tutoring math one-on-one since 2004 in subjects that include Pre-Algebra, Algebra I, Geometry, Algebra II, Pre-Calculus, Trigonometry, Calculus, as well as PSAT Math,SAT.</p>
          <a className="text-green-500 inline-flex items-center mt-4">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">Eric E.</span>
          {/* <span className="text-sm text-gray-500">12 Jun 2019</span> */}
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Math,SAT,ACT, and GRE Test Prep Tutoring</h2>
          <p className="leading-relaxed">I have helped dozens of students with their business studies.I have advanced degrees in engineering and finance.  I have been a teaching assistant at a top five finance school.</p>
          <a className="text-green-500 inline-flex items-center mt-4">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CoursesList