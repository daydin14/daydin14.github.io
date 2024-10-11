// Dependencies
import React, { useState } from 'react';

// Hooks
import useIsMobile from '../../hooks/useIsMobile';

const GitHubCity = () => {
    const [year, setYear] = useState(new Date().getFullYear());
    const [borderColor, setBorderColor] = useState('#FFD700');
    const { isMobile, isPortrait } = useIsMobile();

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    const handleColorChange = (event) => {
        setBorderColor(event.target.value);
    };

    return (
        <div className="flex flex-col justify-center items-center mt-8">
            <div className="mb-4 flex justify-center items-center">
                {/* Year Select */}
                <label htmlFor="year-select" className="mr-2">Select Year:</label>
                <select
                    id="year-select"
                    value={year}
                    onChange={handleYearChange}
                    className="p-2 border rounded cursor-pointer bg-white dark:bg-gray-800 text-black dark:text-white"
                >
                    {Array.from({ length: new Date().getFullYear() - 2008 + 1 }, (_, i) => 2008 + i).map((yr) => (
                        <option key={yr} value={yr}>{yr}</option>
                    ))}
                </select>
                {/* Color Picker */}
                <label htmlFor="color-picker" className="mr-2">Border Color:</label>
                <input
                    type="color"
                    id="color-picker"
                    value={borderColor}
                    onChange={handleColorChange}
                    className="p-2 ml-2 h-10 w-10 border rounded cursor-pointer bg-white dark:bg-gray-800 text-black dark:text-white"
                />
            </div>
            {/* GitHub City */}
            <iframe
                src={`https://honzaap.github.io/GithubCity/?name=daydin14&year=${year}`}
                title="daydin14's Git City"
                className="rounded-lg shadow-lg"
                style={{
                    width: isMobile ? (isPortrait ? '300px' : '500px') : '800px',
                    height: isMobile ? (isPortrait ? '300px' : '500px') : '400px',
                    border: `1px solid ${borderColor}`,
                    boxShadow: `0 0 40px ${borderColor}`
                }}
            ></iframe>
        </div>
    );
}

export default GitHubCity;