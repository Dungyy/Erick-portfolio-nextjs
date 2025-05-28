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

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.3
            }
        }
    };

    const filters = [
        { label: '*', name: 'all-projects' },
        { label: 'filter-web', name: 'web-dev' },
        { label: 'filter-app', name: 'apps' },
        { label: 'filter-client', name: 'client-work' }
    ];

    return (
        <section
            id="portfolio"
            ref={ref}
            className="bg-black text-green-400 font-mono py-16 px-4 min-h-screen"
        >
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
                    transition={{ duration: 0.4 }}
                    className="text-[26px] md:text-[32px] mb-8 border-b border-green-600 pb-2 uppercase tracking-wider"
                >
                    ~/projects
                </motion.h2>

                {/* Filter Section */}
                <div className="mb-10">
                    <p className="text-green-300 text-sm mb-2"># filters</p>
                    <div className="flex flex-wrap gap-4">
                        {filters.map(({ label, name }) => (
                            <span
                                key={label}
                                className={`cursor-pointer text-sm px-2 py-1 transition-all duration-200 ${filter === label
                                        ? 'text-green-200 underline'
                                        : 'hover:text-green-300'
                                    }`}
                                onClick={() => setFilter(label)}
                            >
                                $ ls {name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Project Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'show' : 'hidden'}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </motion.div>

                <div className="mt-12 text-green-400 text-xs">
                    <span className="animate-pulse">▌</span> press <code>Ctrl+Z</code> to suspend
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
