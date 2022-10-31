import { useEffect } from 'react'
import { AiOutlineHome } from 'react-icons/ai';
const Header = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <div className="header" >
            <div className='left'>

                <button className='author' onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}><AiOutlineHome />Cadence Burwell</button>
            </div>
            <div className='right'>
                <div className="nav-item"><a href="#about">About</a></div>
                <div className="nav-item"><a href="#projects">Projects</a></div>
                <div className="nav-item"><a href="#skills">Skills</a></div>
                <div className="nav-item"><a href="#footer">Contact</a></div>
            </div>
        </div>
    )
}

export default Header;