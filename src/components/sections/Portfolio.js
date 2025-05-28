// src/components/sections/Portfolio.js (Enhanced with 3D and animations)
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projectData } from '@/constants/projectData';
import ProjectCard from '@/components/common/ProjectCard';

const Portfolio = () => {
    const [filter, setFilter] = useState('*');
    const [filteredProjects, setFilteredProjects] = useState(projectData);
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    useEffect(() => {
        if (filter === '*') {
            setFilteredProjects(projectData);
        } else {
            setFilteredProjects(projectData.filter(project =>
                project.category === filter.replace('filter-', '')
            ));
        }
    }, [filter]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    return (
        <section id="portfolio" ref={ref} className="py-16 bg-gradient-to-r from-dark/90 to-dark/80 text-white overflow-hidden">
            <div className="container mx-auto px-4 ">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl font-bold mb-5 pb-5 relative text-crt/75">Professional Projects</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-10"
                >
                    <div className="flex justify-center flex-wrap gap-2">
                        <ul className="flex flex-wrap justify-center gap-2">
                            <motion.li
                                data-filter="*"
                                className={`cursor-pointer py-2 px-4 text-sm font-semibold uppercase rounded-full transition-all duration-300 ${filter === '*' ? 'bg-primary text-crt/75 shadow-md' : 'text-crt/75 hover:bg-primary/10'}`}
                                onClick={() => setFilter('*')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                ALL PROJECTS
                            </motion.li>
                            <motion.li
                                data-filter=".filter-web"
                                className={`cursor-pointer py-2 px-4 text-sm font-semibold uppercase rounded-full transition-all duration-300 ${filter === 'filter-web' ? 'bg-primary text-crt/75 shadow-md' : 'text-crt/75 hover:bg-primary/10'}`}
                                onClick={() => setFilter('filter-web')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                WEB DEVELOPMENT
                            </motion.li>
                            <motion.li
                                data-filter=".filter-app"
                                className={`cursor-pointer py-2 px-4 text-sm font-semibold uppercase rounded-full transition-all duration-300 ${filter === 'filter-app' ? 'bg-primary text-crt/75 shadow-md' : 'text-crt/75 hover:bg-primary/10'}`}
                                onClick={() => setFilter('filter-app')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                APPLICATIONS
                            </motion.li>
                            <motion.li
                                data-filter=".filter-client"
                                className={`cursor-pointer py-2 px-4 text-sm font-semibold uppercase rounded-full transition-all duration-300 ${filter === 'filter-client' ? 'bg-primary text-crt/75 shadow-md' : 'text-crt/75 hover:bg-primary/10'}`}
                                onClick={() => setFilter('filter-client')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                CLIENT PROJECTS
                            </motion.li>
                        </ul>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;