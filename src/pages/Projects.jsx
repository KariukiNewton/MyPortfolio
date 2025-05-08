import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';
import project5 from '../assets/project5.jpg';
import '../styles/global.scss';

const projects = [
    { id: 1, title: 'Project One', image: project1, url: 'https://example.com/project1' },
    { id: 2, title: 'Project Two', image: project2, url: 'https://example.com/project2' },
    { id: 3, title: 'Project Three', image: project3, url: 'https://example.com/project3' },
    { id: 4, title: 'Project Four', image: project4, url: 'https://example.com/project4' },
    { id: 5, title: 'Project Five', image: project5, url: 'https://example.com/project5' },
];

const Projects = () => {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    };

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        checkScroll();
        container.addEventListener('scroll', checkScroll);

        return () => {
            if (container) {
                container.removeEventListener('scroll', checkScroll);
            }
        };
    }, []);

    const scroll = (direction) => {
        scrollRef.current.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
    };

    return (
        <section className="projects-section">
            <h2 className="projects-title">Projects</h2>
            <div className="scroll-container-wrapper">
                {canScrollLeft && (
                    <motion.button
                        className="scroll-btn left"
                        onClick={() => scroll('left')}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FaChevronLeft />
                    </motion.button>
                )}

                <div className="scroll-container" ref={scrollRef}>
                    {projects.map(project => (
                        <motion.div className="project-card" key={project.id} whileHover={{ scale: 1.03 }}>
                            <img src={project.image} alt={project.title} />
                            <h3>{project.title}</h3>
                            <a href={project.url} target="_blank" rel="noopener noreferrer">Preview</a>
                        </motion.div>
                    ))}
                </div>

                {canScrollRight && (
                    <motion.button
                        className="scroll-btn right"
                        onClick={() => scroll('right')}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FaChevronRight />
                    </motion.button>
                )}
            </div>
        </section>
    );
};

export default Projects;
