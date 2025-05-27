import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="relative h-48">
                {project.image && (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                )}
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies?.map((tech, index) => (
                        <span 
                            key={index} 
                            className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between">
                    {project.demoUrl && (
                        <Link 
                            href={project.demoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
                        >
                            Live Demo
                        </Link>
                    )}
                    {project.githubUrl && (
                        <Link 
                            href={project.githubUrl}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
                        >
                            GitHub
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;