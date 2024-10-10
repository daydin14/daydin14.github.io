import React, { useState } from 'react';

const Hero = () => {
    const currentYear = new Date().getFullYear();
    const firstYear = 2020;
    const [year, setYear] = useState(currentYear);
    const [borderColor, setBorderColor] = useState('gold');

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
                    className="p-2 border rounded cursor-pointer"
                >
                    {Array.from({ length: currentYear - firstYear + 1 }, (_, i) => firstYear + i).map((yr) => (
                        <option key={yr} value={yr}>{yr}</option>
                    ))}
                </select>
                {/* Color Picker */}
                <label htmlFor="color-picker" className="mr-2"></label>
                <input
                    type="color"
                    id="color-picker"
                    value={borderColor}
                    onChange={handleColorChange}
                    className="p-2 ml-2 h-10 w-10 border rounded cursor-pointer"
                />
            </div>
            {/* GitHub City */}
            <iframe
                src={`https://honzaap.github.io/GithubCity/?name=daydin14&year=${year}`}
                title="daydin14's Git City"
                className="rounded-lg shadow-lg"
                style={{ width: '1000px', height: '400px', border: `1px solid ${borderColor}`, boxShadow: `0 0 40px ${borderColor}` }}
            ></iframe>
        </div>
    );
}

export default Hero;
