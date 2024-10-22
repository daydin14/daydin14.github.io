// Dependencies
import React from 'react'

// Components
import HeroBG from '../../assets/images/hero/hero-bg.jpg'

const Hero = () => {
    return (
        <div>
            <div className="flex h-screen w-full items-center justify-center">
                <span className="absolute mx-auto py-4 flex border w-fit blur-xl bg-gradient-to-r from-pink-300 via-red-500 to-yellow-500 dark:from-purple-600 dark:via-blue-500 dark:to-green-500 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none transition-transform duration-300 hover:scale-125">
                    daydin14
                </span>
                <h1
                    className="relative top-0 w-fit h-auto py-4 justify-center flex items-center bg-gradient-to-r from-pink-300 via-red-500 to-yellow-500 dark:from-purple-600 dark:via-blue-500 dark:to-green-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto transition-transform duration-300 hover:scale-125">
                    daydin14
                </h1>
            </div>
            <img src={HeroBG} alt="Hero Background" className="w-full object-cover rounded-3xl" />
        </div>
    )
}

export default Hero