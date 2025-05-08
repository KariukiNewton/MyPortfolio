import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
    FaGithub, FaWhatsapp, FaInstagram, FaTwitter, FaLinkedin, FaTimes, FaEnvelope,
} from 'react-icons/fa';
import '../styles/global.scss';

const Contacts = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm(
            'service_icq22yc',
            'template_mkwjole',
            formRef.current,
            'm4VSWNflsVCB1-mi6'
        ).then(() => {
            alert('Message sent!');
            formRef.current.reset();
            setIsModalOpen(false);
        }).catch(() => {
            alert('Failed to send. Try again later.');
        }).finally(() => {
            setIsSending(false);
        });
    };

    return (
        <section className="contacts-section">
            <h2 className="contacts-title">Get In Touch</h2>

            <div className="social-icons">
                <a href="https://github.com/KariukiNewton" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://wa.me/254757160748" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
                <a href="https://www.instagram.com/kariukiii_/?__pwa=1" target="_blank" rel="noreferrer"><FaInstagram /></a>
                <a href="https://x.com/k9ris_" target="_blank" rel="noreferrer"><FaTwitter /></a>
                <a href="https://www.linkedin.com/in/newton-kariuki-504144274/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>

            <button className="hire-btn" onClick={() => setIsModalOpen(true)}>
                <FaEnvelope style={{ marginRight: '0.5rem' }} />
                Email
            </button>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <motion.div className="modal-content"
                            initial={{ scale: 0.7, y: -50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.7, y: -50 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            <button className="close-btn" onClick={() => setIsModalOpen(false)}><FaTimes /></button>
                            <h3>Contact Me</h3>
                            <form ref={formRef} onSubmit={sendEmail}>
                                <input type="text" name="user_name" placeholder="Your Name" required />
                                <input type="email" name="user_email" placeholder="Your Email" required />
                                <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                                <button type="submit" disabled={isSending}>
                                    {isSending ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Contacts;
