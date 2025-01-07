import React from 'react'

const About = () => {
  return (
    <div>
        <section className="text-gray-600 body-font mt-10">
  <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="data:image/jpeg;base64,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"/>

    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">"The Power of Blogging: Sharing Ideas and Building Community"</h1>
      <p className="mb-8 leading-relaxed text-white">Blogs provide a platform to share ideas, experiences, and expertise. They allow for creativity, engaging readers, and building a community. Regular, quality content helps establish credibility and grow a loyal audience.</p>
      <div className="flex w-full justify-center items-end">
        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
          <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">Placeholder</label>
          <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      </div>
      <p className="text-sm mt-2 text-white mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p>
      <div className="flex">
        <button className="bg-white inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
            <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
          </svg>
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="text-xs text-white mb-1">GET IT ON</span>
            <span className="title-font font-medium">Google Play</span>
          </span>
        </button>
        <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
            <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
            <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
          </svg>
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="text-xs text-white mb-1">Download on the</span>
            <span className="title-font font-medium">App Store</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default About