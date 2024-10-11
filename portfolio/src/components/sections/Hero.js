// Dependencies
import React from 'react'

// Components
import HeroBG from '../../assets/images/hero/hero-bg.jpg'

const Hero = () => {
    return (
        <div>
            {/* from-purple-400 via-pink-500 to-red-500 */}
            <div className="flex h-screen w-full items-center justify-center">
                <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none transition-transform duration-300 hover:scale-125">
                    daydin14
                </span>
                <h1
                    className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto transition-transform duration-300 hover:scale-125">
                    daydin14
                </h1>
            </div>
            <img src={HeroBG} alt="Hero Background" className="w-full object-cover rounded-3xl" />
        </div>
    )
}

export default Hero