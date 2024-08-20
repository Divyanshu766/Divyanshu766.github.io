import React from 'react'
import "./HomeSection.css"
import Typewriter from 'typewriter-effect';
import MyResume from "../Navbar/MyResume.pdf"

function HomeSection() {
    const downloadHandle = () => {
        window.open(
            "https://drive.google.com/file/d/1r0hc8FCP-0QK7kAkYqcZpr5oe4iKeHfO/view?usp=sharing",
            "_blank"
        );
    };

    const githubHandle = () => {
        window.open(
            "https://github.com/divyanshurawatdev",
            "_blank"
        );
    };
    return (
        <div id='home'>
            <div id='left_home'>
                <div>
                    <h1>Hi, I am</h1>
                    <h1 id="user-detail-name">Divyanshu Rawat</h1>
                    {/* <h3>I am a Full Stack Web Developer</h3> */}
                    <h3>
                        I am a
                        <span>
                            <Typewriter
                                options={{
                                    strings: ["Full Stack Web Developer", "MERN Stack Developer", "Backend Developer", "Frontend Developer"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </h3>
                    <p> A motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things. You can reach me at <a href="#contact" className='contactMe'>Contact Me</a></p>
                    <div className='home_button'>
                        <button id="resume-button-2"
                            onClick={downloadHandle}>
                            Resume
                        </button>
                        <button onClick={githubHandle} >
                            GitHub
                        </button>
                    </div>
                </div>
            </div>
            <div id='right_home' >
                <img src="/Images/hero.jpeg" alt="" className="home-img" />
            </div>
        </div>
    )
}

export default HomeSection
