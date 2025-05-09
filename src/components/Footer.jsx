import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../styles/global.scss'; // Ensure styling goes in here or a dedicated _footer.scss partial

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <nav className="footer__nav">
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#projects">Projects</a>
                    <a href="#contacts">Contact Us</a>
                </nav>

                <div className="footer__socials">

                    <h2 className="follow_me">Follow Me</h2>

                    <div className="social-links">
                        <a href="https://github.com/KariukiNewton" target="_blank" rel="noreferrer" title="Visit my GitHub profile">
                            <FaGithub />
                        </a>
                        <a href="https://www.instagram.com/kariukiii_/?__pwa=1" target="_blank" rel="noreferrer" title="Visit my Instagram profile">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/in/newton-kariuki-504144274/" target="_blank" rel="noreferrer" title="Visit my Linkedin profile">
                            <FaLinkedin />
                        </a>
                        <a href="https://x.com/k9ris_" target="_blank" rel="noreferrer" title="Visit my Twitter profile">
                            <FaTwitter />
                        </a>
                    </div>

                </div>
            </div>

            <hr className="footer__divider" />

            <div className="footer__bottom">
                <p>© 2025 Newton Kariuki</p>
            </div>
        </footer>
    );
};

export default Footer;
