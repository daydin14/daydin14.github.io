import React, { useState } from 'react';
import {
    SiVisualstudio, SiVisualstudiocode, FaGitAlt, FaGithub, FaGithubAlt, SiGithubpages, FaSlack, FaTrello, FaFigma, SiPostman, SiCsharp, SiTypescript, IoLogoJavascript, FaPython, DiDotnet, AiOutlineDotNet, SiBlazor, FaReact, FaNode, SiExpress, SiD3Dotjs, SiDjango, SiMysql, SiMongodb, DiPostgresql, SiMicrosoftazure, BiLogoNetlify, FaCss3, RiTailwindCssFill, SiMui, SiDaisyui, SiEslint, FaNpm, SiNuget, SiWebpack, SiBabel, SiGooglemaps, SiGoogleanalytics, RiFirebaseLine, FaMarkdown, FaHtml5
} from '../skills/Icons';
import SkillsDetails from '../../constants/SkillsDetails';

const Skills = () => {
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const handleMouseEnter = (category) => {
        setHoveredCategory(category);
    };

    const handleMouseLeave = () => {
        setHoveredCategory(null);
    };

    const iconComponents = {
        SiVisualstudio, SiVisualstudiocode, FaGitAlt, FaGithub, FaGithubAlt, SiGithubpages, FaSlack, FaTrello, FaFigma, SiPostman, SiCsharp, SiTypescript, IoLogoJavascript, FaPython, DiDotnet, AiOutlineDotNet, SiBlazor, FaReact, FaNode, SiExpress, SiD3Dotjs, SiDjango, SiMysql, SiMongodb, DiPostgresql, SiMicrosoftazure, BiLogoNetlify, FaCss3, RiTailwindCssFill, SiMui, SiDaisyui, SiEslint, FaNpm, SiNuget, SiWebpack, SiBabel, SiGooglemaps, SiGoogleanalytics, RiFirebaseLine, FaMarkdown, FaHtml5
    };

    return (
        <div>
            <ul className='flex flex-wrap gap-2 mb-4'>
                {SkillsDetails.Categories.map((category) => (
                    <li
                        key={category.key}
                        className="category-item badge badge-outline"
                        onMouseEnter={() => handleMouseEnter(category.key)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {category.title}
                    </li>
                ))}
            </ul>
            <ul className="flex flex-wrap justify-center items-center p-4">
                {SkillsDetails.Skills.map((skill) => {
                    const IconComponent = iconComponents[skill.icon];
                    return (
                        <li
                            key={skill.name}
                            title={skill.name}
                            data-category={skill.category}
                            className={`
                                mt-2 mx-2 icon-item transition-transform duration-300
                                ${hoveredCategory && hoveredCategory !== skill.category ? 'opacity-30' : 'hover:scale-125'}
                            `}
                        >
                            {IconComponent && <IconComponent className="text-4xl" />} &emsp;
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Skills