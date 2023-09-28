import { Link } from "react-router-dom";
import './index.scss';
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['E', 'r', 'i', 'c', 'h'];
    const jobArray = ['F', 'u', 'l', 'l', ' ', 'S', 't', 'a', 'c', 'k', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>&nbsp;
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={nameArray}
                        index={15}
                    /> 
                    <br />
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={jobArray}
                        index={16}
                    />
                    <br />
                </h1>
                <h2>
                    Video Game Enthusiast
                    <br />
                    Science Fiction Lover
                </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home;