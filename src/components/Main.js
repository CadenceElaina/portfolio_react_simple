import { AiFillGithub, AiFillLinkedin, AiFillCodepenCircle } from 'react-icons/ai'

import { FaFreeCodeCamp } from 'react-icons/fa'
import { SiReplit, SiSololearn, SiKhanacademy } from 'react-icons/si'
import coder from '../assets/coder.png'
const Main = () => {
    return (
        <div id="body" className="body">
            <div className="body-container">
                <div className="body-profile">
                    <img className="body-img" alt='avatar' src={coder} />

                    <div className="body-content">
                        <div className="body-headline">Cadence Burwell</div>
                        <div className="body-text">Software Engineer</div>
                    </div>

                    <div className="link-icons">
                        <a target='_blank' href='https://github.com/CadenceElaina' title='Github' rel="noreferrer">
                            <AiFillGithub className='react-icon' title='Github' />
                        </a>

                        <a target='_blank' href='https://www.linkedin.com/in/cooper-burwell-674147195/' title='LinkedIn' rel="noreferrer">
                            <AiFillLinkedin className='react-icon' title='LinkedIn' />
                        </a>

                        <a target='_blank' href='https://www.freecodecamp.org/CadenceElaina' title='freeCodeCamp' rel="noreferrer">
                            <FaFreeCodeCamp className='react-icon' title='freeCodeCamp' />
                        </a>

                        <a target='_blank' href='https://replit.com/@cadenceelaina' title='Replit' rel="noreferrer">
                            <SiReplit className='react-icon' title='Replit' />
                        </a>
                        <a target='_blank' href='https://www.sololearn.com/profile/20095887' title='Sololearn' rel="noreferrer">
                            <SiSololearn className='react-icon' title='Sololearn' />
                        </a>
                        <a target='_blank' href='https://www.khanacademy.org/profile/sircoopa/projects' title='KhanAcademy' rel="noreferrer">
                            <SiKhanacademy className='react-icon' title='KhanAcademy' />
                        </a>
                        <a target='_blank' href='https://codepen.io/cadenceElaina' title='Codepen' rel="noreferrer">
                            <AiFillCodepenCircle className='react-icon' title='Codepen' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;