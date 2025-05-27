// src/hooks/usePortfolioFilter.js
'use client';

import { useState, useEffect } from 'react';

export const usePortfolioFilter = (projects) => {
    const [filter, setFilter] = useState('*');
    const [filteredProjects, setFilteredProjects] = useState(projects);

    useEffect(() => {
        if (filter === '*') {
            setFilteredProjects(projects);
        } else {
            const category = filter.replace('filter-', '');
            setFilteredProjects(projects.filter(project => project.category === category));
        }

        // If using Isotope in the future, this would be the place to call it
        // if (typeof window !== 'undefined' && window.Isotope) {
        //   // Call Isotope's arrange method
        // }
    }, [filter, projects]);

    return { filter, setFilter, filteredProjects };
};

// src/utils/scrollTo.js
'use client';

// Function to scroll to a specific element with smooth behavior
export const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
        const elementPos = element.offsetTop;
        window.scrollTo({
            top: elementPos,
            behavior: 'smooth',
        });
    }
};

// Function to handle mobile navigation
export const handleMobileNavToggle = (isOpen, setIsOpen) => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('mobile-nav-active');
};

// src/utils/formSubmit.js
'use client';

// Function to validate form data
export const validateForm = (formData) => {
    const errors = {};

    // Name validation
    if (!formData.name.trim()) {
        errors.name = 'Name is required';
    } else if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(formData.name)) {
        errors.name = 'Please enter a valid name';
    }

    // Email validation
    if (!formData.email.trim()) {
        errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
        errors.message = 'Message is required';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};

// Function to submit form data to the API
export const submitContactForm = async (formData) => {
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Something went wrong');
        }

        return { success: true };
    } catch (error) {
        console.error('Error submitting form:', error);
        return {
            success: false,
            error: error.message || 'An unexpected error occurred'
        };
    }
};