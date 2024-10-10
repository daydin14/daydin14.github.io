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
                    {['Recent', 'All', 'GA', 'SJU'].map((category) => (
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
                                <h3 className="card-title">Project 1</h3>
                                <p>Project 1 description</p>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 2" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Project 2</h3>
                                <p>Project 2 description</p>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 3" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Project 3</h3>
                                <p>Project 3 description</p>
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
                                <h3 className="card-title">Project 4</h3>
                                <p>Project 4 description</p>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 5" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Project 5</h3>
                                <p>Project 5 description</p>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 6" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Project 6</h3>
                                <p>Project 6 description</p>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 7" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Project 7</h3>
                                <p>Project 7 description</p>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 8" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Project 8</h3>
                                <p>Project 8 description</p>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 9" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Project 9</h3>
                                <p>Project 9 description</p>
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
                                <h3 className="card-title">Project 10</h3>
                                <p>Project 10 description</p>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 11" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Project 11</h3>
                                <p>Project 11 description</p>
                            </div>
                        </div>
                        <div className="card bg-gray-200 dark:bg-gray-800 shadow-xl h-60">
                            <figure><img src="https://via.placeholder.com/150" alt="Project 12" /></figure>
                            <div className="card-body">
                                <h3 className="card-title">Project 12</h3>
                                <p>Project 12 description</p>
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
        </div>
    );
};

export default Projects