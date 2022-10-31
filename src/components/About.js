import coffee from '../assets/coffee.png'
const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about-heading">About Me</h1>
            <div className="about-info">
                <p className="about-desc">I am a mostly self-taught programmer who enjoys reading, running, gaming, chess, and learning new things. I took a C++ course in high school, a Java course at USC Columbia, and have utilized a myriad of free online resources. I love solving complex problems and building things. My favorite thing about programming is losing track of time and the feeling when something finally 'clicks'.</p>
                <div className="about-img">
                    <div className="about-img-wrapper">
                        <figure>
                            <img src={coffee} alt="Detective" />
                            <figcaption>Uninteresting fact: I love coffee!</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;