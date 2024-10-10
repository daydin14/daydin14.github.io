// Dependencies
import React, { useState } from 'react';

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="mb-8">
                <ul className="flex justify-evenly space-x-4 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg w-full max-w-4xl mx-auto">
                    {['Recent', 'All', 'Udemy', 'GA', 'SJU'].map((category) => (
                        <li
                            key={category}
                            className={`cursor-pointer p-2 rounded ${selectedCategory === category
                                ? 'bg-blue-500 text-white'
                                : 'text-black dark:text-white'
                                }`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-4 w-full max-w-6xl mx-auto">
                {/* Recent */}
                {selectedCategory === 'All' || selectedCategory === 'Recent' ? (
                    <>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 1" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Password Generator</h3>
                                <p>A responsive React app for generating secure passwords with customizable options. Features include configurable settings for password length and character types, live preview, and copy-to-clipboard functionality. Utilizes Tailwind CSS, DaisyUI, and ESLint. Deployed on GitHub Pages.</p>
                                <a href='https://github.com/daydin14/password-generator' target='_blank'>GitHub Repo</a>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 1" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Chalkboard Games</h3>
                                <p>Chalkboard Games is a web application that hosts a collection of classic games, including Tic-Tac-Toe, Connect 4, and Snake. Built using React, Tailwind CSS and DaisyUI. Deployed on GH-Pages.</p>
                                <a href='https://github.com/daydin14/chalkboard-games' target='_blank'>GitHub Repo</a>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 1" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Allenhurst Cleaners</h3>
                                <p>This web application integrates with the Google Maps API Platform and Google Analytics. Built with React and Material UI. Environment variable management and duel deployment, GH-Pages & Netlify.</p>
                                <a href='https://github.com/daydin14/allenhurstcleaners_v2' target='_blank'>GitHub Repo</a>
                            </div>
                        </div>


                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 2" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">JokerBlazor</h3>
                                <p>JokerBlazor is a Blazor Web Application that delivers interactive web experiences with real-time updates and humor through JokeAPI integration and MudBlazor components.</p>
                                <a href='https://github.com/daydin14/JokerBlazor' target='_blank'>GitHub Repo</a>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 3" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Joker Service</h3>
                                <p>A .NET Worker Windows Service using BackgroundService. Logs Computer Programming Jokes and can send emails.</p>
                                <a href='https://github.com/daydin14/JokerService' target='_blank'>GitHub Repo</a>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 4" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">WhatsApp -Clone</h3>
                                <p>Clone of WhatsApp</p>
                                <a href='https://github.com/daydin14/whatsapp-clone' target='_blank'>GitHub Repo</a>
                            </div>
                        </div>
                    </>
                ) : null}
                {/* Udemy */}
                {selectedCategory === 'All' || selectedCategory === 'Udemy' ? (
                    <>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 1" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Form Validator</h3>
                                <p>Project 1 description</p>
                                <a href='https://daydin14.github.io/udemy/1.Form_Validator' target='_blank'>Deployed Link</a>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 2" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Movie Seat Booking</h3>
                                <p>Project 2 description</p>
                                <a href='https://daydin14.github.io/udemy/2.Movie_Seat_Booking' target='_blank'>Deployed Link</a>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 3" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Custom Video Player</h3>
                                <p>Project 3 description</p>
                                <a href='https://daydin14.github.io/udemy/3.Custom_Video_Player' target='_blank'>Deployed Link</a>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 3" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Exchange Rate Calculator</h3>
                                <p>Project 3 description</p>
                                <a href='https://daydin14.github.io/udemy/4.Exchange_Rate_Calculator' target='_blank'>Deployed Link</a>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 3" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">DOM Array Methods</h3>
                                <p>Project 3 description</p>
                                <a href='https://daydin14.github.io/udemy/5.DOM_Array_Methodsr' target='_blank'>Deployed Link</a>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 3" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Landing Page</h3>
                                <p>Project 3 description</p>
                                <a href='https://daydin14.github.io/udemy/6.Landing_Page' target='_blank'>Deployed Link</a>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 3" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Hangman</h3>
                                <p>Project 3 description</p>
                                <a href='https://daydin14.github.io/udemy/7.Hangman' target='_blank'>Deployed Link</a>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 3" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Meal Finder</h3>
                                <p>Project 3 description</p>
                                <a href='https://daydin14.github.io/udemy/8.Meal_Finder' target='_blank'>Deployed Link</a>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 3" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Expense Tracker</h3>
                                <p>Project 3 description</p>
                                <a href='https://daydin14.github.io/udemy/9.Expense_Tracker' target='_blank'>Deployed Link</a>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 3" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Music Player</h3>
                                <p>Project 3 description</p>
                                <a href='https://daydin14.github.io/udemy/10.Music_Player' target='_blank'>Deployed Link</a>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 3" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Blog</h3>
                                <p>Project 3 description</p>
                                <a href='https://daydin14.github.io/udemy/11.Blog' target='_blank'>Deployed Link</a>
                            </div>
                        </div>
                    </>
                ) : null}
                {/* GA */}
                {selectedCategory === 'All' || selectedCategory === 'GA' ? (
                    <>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 4" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Cocktail Recipe</h3>
                                <p>Project 4 description</p>
                                <a href='https://github.com/daydin14/cocktail-recipe' target='_blank'>GitHub Repo</a>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 5" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Optio Blue</h3>
                                <p>Project 5 description</p>
                                <a href='https://github.com/daydin14/optioBlue' target='_blank'>GitHub Repo</a>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 7" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">BuckT</h3>
                                <p>Full-stack buck list catelogue</p>
                                <a href='https://github.com/daydin14/buckT-frontend' target='_blank'>GitHub Repo</a>
                                <a href='https://github.com/daydin14/buckT-backend' target='_blank'>GitHub Repo</a>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 8" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Capstone</h3>
                                <p>Recap of React Dev Skills Lab using React Native and Expo CLI</p>
                                <a href='https://github.com/daydin14/capstone-frontend' target='_blank'>GitHub Repo</a>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 9" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Litter Game</h3>
                                <p>GA Hackathon</p>
                                <a href='https://github.com/daydin14/litter-game-frontend' target='_blank'>GitHub Repo</a>
                            </div>
                        </div>
                    </>
                ) : null}
                {/* SJU */}
                {selectedCategory === 'All' || selectedCategory === 'SJU' ? (
                    <>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 10" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">SneakersDB</h3>
                                <p>Database Management Systems Final Project, created a sneaker db using MySQL</p>
                                <a href='https://github.com/daydin14/SneakersDB' target='_blank'>GitHub Repo</a>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 11" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">MongoBongo</h3>
                                <p>Final Project for Internet Application Development, creating a database using Mongo, a nosql database, for a pharmaceutical company</p>
                                <a href='https://github.com/daydin14/MongoBongo' target='_blank'>GitHub Repo</a>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 12" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">SShooter_sju</h3>
                                <p>Computer Science Senior Year Final Project, worked alongside my classmate Joe Toczylowskij. Together we created a puzzle shooter game using Epic Game's Unreal Engine 4.20 visual blueprints code as well as Microsoft's Visual Studio 2017 c++ code.</p>
                                <a href='https://github.com/daydin14/SShooter_sju' target='_blank'>GitHub Repo</a>
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
        </div>
    );
};

export default Projects