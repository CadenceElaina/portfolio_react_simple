import { FaJs, FaReact, FaHtml5, FaCss3, FaGithub, FaSass, FaBootstrap, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
const Skills = () => {
    const skillsArr = [
        {
            "name": 'JavaScript',
            "icon": FaJs
        },
        {
            "name": "HTML",
            "icon": FaHtml5
        },
        {
            "name": "CSS",
            "icon": FaCss3
        },
        {
            "name": "Git",
            "icon": FaGithub
        },
        {
            "name": "Reactjs",
            "icon": FaReact
        },
        {
            "name": "SASS/SCSS",
            "icon": FaSass
        },
        {
            "name": "Bootstrap",
            "icon": FaBootstrap
        },
        {
            "name": "Tailwind",
            "icon": SiTailwindcss
        },
        {
            "name": "Next.js",
            "icon": TbBrandNextjs
        },
        {
            "name": "Firebase",
            "icon": SiFirebase
        },
        {
            "name": "TypeScript",
            "icon": SiTypescript
        },
        {
            "name": "Python",
            "icon": FaPython
        }
    ];

    return (
        <div id='skills' className='skills'>
            <h2 className='title'>Skills</h2>
            <div className='skill-holder'>
                {
                    skillsArr.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <i key={index} className='skill-cards'>
                                <Icon className='skill-icon' />
                                <p
                                    className="skill"
                                >
                                    {skill.name}
                                </p>
                            </i>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills;