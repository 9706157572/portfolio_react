const Hero = () => {
  return (
    <section className="bg-yellow-50  px-4">
      <div className="flex flex-col lg:flex-row max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 py-20">
        <div className="mr-auto place-self-center flex-[3]">
          <h1 className="max-w-2xl mb-4 text-2xl text-black font-light tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"> Hello There!</h1>
          <p className="max-w-2xl mb-6 font-normal text-black lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I'm<span className="text-2xl font-bold text-green-800"><br />Neelanjana Choudhury</span><br />A React Developer<br />Based in India</p>
          <p className="max-w-2xl mb-6 font-normal text-black lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            "Transforming Ideas into Seamless User Experiences."
          </p>
          <a href="#"className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-green-800 hover:bg-green-900 rounded-lg focus:ring-4 focus:ring-green-300">Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-green-800 text-yellow-500 border border-yellow-500 rounded-lg hover:bg-yellow-100 hover:text-green-800 focus:ring-4 focus:ring-yellow-300"
          >
            About
          </a>
        </div>
        <div className="hidden lg:mt-0 flex-1 lg:flex">
          <img alt="Neelanjana Choudhury - React Developer" className="object-cover rounded-full shadow-lg" src="profile1.png"/>

        </div>
      </div>
    </section>
  );
}

export default Hero