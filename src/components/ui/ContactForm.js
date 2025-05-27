// src/components/ui/ContactForm.js
'use client';

import { useState } from 'react';
import RetroButton from './RetroButton';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        isSubmitting: false,
        isSubmitted: false,
        message: '',
        success: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Form validation
        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus({
                isSubmitting: false,
                isSubmitted: true,
                message: 'Please fill in all fields',
                success: false
            });
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setFormStatus({
                isSubmitting: false,
                isSubmitted: true,
                message: 'Please enter a valid email address',
                success: false
            });
            return;
        }

        setFormStatus({
            isSubmitting: true,
            isSubmitted: false,
            message: '',
            success: false
        });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setFormStatus({
                    isSubmitting: false,
                    isSubmitted: true,
                    message: data.message || 'Message sent successfully!',
                    success: true
                });

                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });

                // Clear success message after 5 seconds
                setTimeout(() => {
                    setFormStatus(prev => ({
                        ...prev,
                        isSubmitted: false
                    }));
                }, 5000);
            } else {
                throw new Error(data.message || 'Something went wrong');
            }
        } catch (error) {
            setFormStatus({
                isSubmitting: false,
                isSubmitted: true,
                message: error.message || 'Something went wrong. Please try again.',
                success: false
            });
        }
    };

    return (
        <div className="retro-card p-6">
            {/* Form header with retro styling */}
            <div className="mb-6 flex items-center">
                <div className="w-8 h-8 bg-accent text-white font-mono flex items-center justify-center mr-3 shadow-retro-sm">
                    <i className="fas fa-paper-plane"></i>
                </div>
                <h3 className="font-display text-2xl">SEND_MESSAGE.exe</h3>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                    <div>
                        <label className="font-mono text-dark mb-2 block">NAME:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="retro-input"
                        />
                    </div>

                    <div>
                        <label className="font-mono text-dark mb-2 block">EMAIL:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="retro-input"
                        />
                    </div>

                    <div>
                        <label className="font-mono text-dark mb-2 block">MESSAGE:</label>
                        <textarea
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            className="retro-input resize-none"
                        ></textarea>
                    </div>

                                        <div className="text-center">
                                            <RetroButton
                                                type="submit"
                                                disabled={formStatus.isSubmitting}
                                                className="w-full md:w-auto"
                                            >
                                                {formStatus.isSubmitting ? (
                                                    <span className="flex items-center justify-center">
                                                        <i className="fas fa-spinner fa-spin mr-2"></i> SENDING...
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center justify-center">
                                                        <i className="fas fa-paper-plane mr-2"></i> SEND MESSAGE
                                                    </span>
                                                )}
                                            </RetroButton>
                                        </div>
                    
                                        {formStatus.isSubmitted && (
                                            <div className={`mt-4 p-3 text-center rounded ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                {formStatus.message}
                                            </div>
                                        )}
                                    </div>
                                </form>
                            </div>
                        );
                    };
                    
                    export default ContactForm;