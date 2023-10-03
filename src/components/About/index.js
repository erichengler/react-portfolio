import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover');
        }, 3000)
    }, []);

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                            index={15}
                        />
                    </h1>
                    <p>
                        I'm an ambitious full-stack developer looking for a role in the
                        tech industry! I'm looking for a company with a transparent
                        culture and a challenging work environment where I can grow.
                    </p>
                    <p>
                        As a man of science, I am open-minded and I try to think logically.
                        <br />I take pride in my attention to detail and my ability to adapt
                        to any situation. My peers tell me that I'm easy to work with
                        and fun to be around.
                    </p>
                    <p>
                        In my free time, you'll mostly find me playing video games
                        (especially challenging ones) or spending time with friends and family.
                        In the world of gaming, its common to get stuck and have to change your strategy.
                        These are the situations that I look forward to and thrive in.
                    </p>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About;