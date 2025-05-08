import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaUserShield, FaChartBar, FaCloud, FaShoppingCart, FaServer } from 'react-icons/fa';
import '../styles/global.scss';

const services = [
    {
        icon: <FaCode />,
        title: 'Web Application Development',
        description: 'Crafting robust, scalable web applications tailored to your business needs using modern frameworks and best practices. From planning to deployment, I handle the full development lifecycle.'
    },
    {
        icon: <FaMobileAlt />,
        title: 'Responsive UI/UX Design',
        description: 'Designing visually appealing and user-centric interfaces that adapt seamlessly across all devices, ensuring intuitive navigation and consistent user experience.'
    },
    {
        icon: <FaUserShield />,
        title: 'Authentication & Authorization',
        description: 'Implementing secure user authentication and role-based access control systems, ensuring your application data is protected and accessible only to authorized users.'
    },
    {
        icon: <FaChartBar />,
        title: 'Data Visualization & Dashboards',
        description: 'Transforming complex data into insightful visualizations and interactive dashboards using tools like Chart.js and Recharts, enabling informed decision-making.'
    },
    {
        icon: <FaCloud />,
        title: 'Cloud Deployment & DevOps',
        description: 'Deploying applications to cloud platforms like AWS, Vercel, and Render with CI/CD pipelines, containerization, and monitoring for high availability and performance.'
    },
    {
        icon: <FaShoppingCart />,
        title: 'E-commerce Integrations',
        description: 'Integrating powerful e-commerce solutions including product listings, payment gateways, and order management systems to streamline your online business operations.'
    },
    {
        icon: <FaServer />,
        title: 'Backend API Development',
        description: 'Designing scalable, RESTful APIs with robust architecture and seamless third-party integrations to power dynamic frontend applications and mobile clients.'
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: 'easeOut'
        }
    })
};

const Services = () => {
    return (
        <section className="services-section">
            <h2 className="services-title">Services</h2>
            <p className="services-subtitle">
                As a Full-Stack Developer, I deliver end-to-end web solutions—from building robust,
                scalable backends to designing responsive, intuitive frontends. Let's create seamless,
                high-quality user experiences together.
            </p>
            <div className="services-grid">
                {services.map((service, index) => (
                    <motion.div
                        className="service-card"
                        key={index}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                    >
                        <div className="icon-wrapper">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
