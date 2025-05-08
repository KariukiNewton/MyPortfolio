import React from 'react';
import { motion } from 'framer-motion';
import '../styles/global.scss';

const Footer = () => {
    const currentDate = new Date().getFullYear();

    return (
        <footer className="footer">
            {/* Main Footer Content */}
            <div className="footer-top">
                <motion.div
                    className="footer-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <p>© {currentDate} | All rights reserved</p>
                    <p className="adjournment-text">Thank you for visiting!</p>
                </motion.div>

                <motion.div
                    className="footer-column"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <p> Nairobi, Kenya</p>
                </motion.div>
            </div>

            {/* Footer Bottom */}
            <motion.div
                className="footer-bottom"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
            >
                <p>Made with ❤️ | Powered by React</p>
            </motion.div>
        </footer>
    );
};

export default Footer;
