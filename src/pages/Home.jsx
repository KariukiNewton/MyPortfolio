import { motion } from 'framer-motion';
import profileImg from '../assets/myImage.jpg';
import '../styles/global.scss';

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home__left">
                <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="home__greeting"
                >
                    Habari Yako
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="home__title"
                >
                    I'm Newton Kariuki,<br />
                    <span>Software Developer</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="home__description"
                >
                    Fullstack Developer driven by a passion for building innovative digital experiences
                    and excelling in collaborative environments. Proficient in modern web technologies,
                    especially the MERN stack (MongoDB, Express.js, React.js, Node.js), to develop robust,
                    scalable, and user-focused applications. Experienced in crafting responsive and interactive
                    interfaces that deliver seamless user engagement and functionality across devices.
                </motion.p>

                <div className="home__buttons">
                    <button className="btn btn--outline">Download CV</button>
                </div>
            </div>

            <div className="home__right">
                <motion.img
                    src={profileImg}
                    alt="Newton Kariuki"
                    className="home__image"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                />
            </div>
        </section>
    );
};

export default Home;
