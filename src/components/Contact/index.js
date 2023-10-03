import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover');
        }, 3000)
    }, []);
    
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            index={15}
                        />
                    </h1>
                    <p>
                        I am currently located in the Minneapolis-St. Paul
                        area and am searching for opportunities around there.
                        I'm also open to remote work or relocating, depending on the
                        circumstances. Feel free to connect with me on &nbsp;
                        <a href="https://www.linkedin.com/in/erichengler">LinkedIn</a>
                        &nbsp; or send an email using the form below.
                    </p>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact;