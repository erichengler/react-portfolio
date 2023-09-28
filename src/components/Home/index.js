import { Link } from "react-router-dom";
import './index.scss';

const Home = () => {
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Greetings traveler,<br /> I'm Erich! <br /></h1>
                <h2>Full Stack Developer
                    <br />
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