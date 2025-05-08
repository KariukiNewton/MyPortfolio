import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/global.scss'; // Or import it globally

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '#home' },
        { name: 'Services', path: '#services' },
        { name: 'Projects', path: '#projects' },
        { name: 'Contact', path: '#contacts' },
    ];

    return (
        <header className="header">
            <div className="header__container">
                {/* User Initials */}
                <div className="header__logo">
                    <h1 className='name_initial'> NK </h1>
                    <h2 className='name_full'>Newton Kariuki</h2>
                </div>

                {/* Desktop Nav */}
                <nav className="header__nav">
                    {navLinks.map(link => (
                        <a
                            key={link.path}
                            href={link.path}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="header__menu-toggle"
                    onClick={() => setIsMobileMenuOpen(prev => !prev)}
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        className="header__mobile-menu"
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -200, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navLinks.map(link => (
                            <a
                                key={link.path}
                                href={link.path}
                                className="nav-link"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;


{/*import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/global.scss'; // Or import it globally

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="header">
            <div className="header__container">

                <div className="header__logo">
                    <h1 className='name_initial'> NK </h1>
                    <h2 className='name_full'>Newton Kariuki</h2>
                </div>

                <nav className="header__nav">
                    {navLinks.map(link => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>


                <button
                    className="header__menu-toggle"
                    onClick={() => setIsMobileMenuOpen(prev => !prev)}
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>


            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        className="header__mobile-menu"
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -200, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navLinks.map(link => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
*/}