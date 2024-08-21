import React from 'react';
import "./HomeSection.css";
import Typewriter from 'typewriter-effect';

function HomeSection() {
    const downloadHandle = () => {
        const viewUrl = "https://drive.google.com/file/d/1LeY8HFItwV2EDy6tHN1CDJYNThNfMo3K/view?usp=sharing";
        const downloadUrl = "https://drive.google.com/uc?export=download&id=1LeY8HFItwV2EDy6tHN1CDJYNThNfMo3K";
        
        window.open(viewUrl); // Opens the file in a new tab
        window.location.href = downloadUrl; // Triggers the download
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
                    <p>
                        A motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things. You can reach me at <a href="#contact" className='contactMe'>Contact Me</a>
                    </p>
                    <div className='home_button'>
                        <button id="resume-button-2" onClick={downloadHandle}>
                            Resume
                        </button>
                        <button onClick={githubHandle}>
                            GitHub
                        </button>
                    </div>
                </div>
            </div>
            <div id='right_home'>
                <img src="/Images/hero.jpeg" alt="Home" className="home-img" />
            </div>
        </div>
    );
}

export default HomeSection;