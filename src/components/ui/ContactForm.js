'use client';

import { useState } from 'react';

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

        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus({
                isSubmitting: false,
                isSubmitted: true,
                message: '! ERROR: Please fill in all fields',
                success: false
            });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setFormStatus({
                isSubmitting: false,
                isSubmitted: true,
                message: '! ERROR: Invalid email address',
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
                    message: '# SUCCESS: Message sent!',
                    success: true
                });
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => {
                    setFormStatus(prev => ({ ...prev, isSubmitted: false }));
                }, 5000);
            } else {
                throw new Error(data.message || '! ERROR: Something went wrong');
            }
        } catch (error) {
            setFormStatus({
                isSubmitting: false,
                isSubmitted: true,
                message: `! ERROR: ${error.message}`,
                success: false
            });
        }
    };

    return (
        <div className="bg-black text-green-400 font-mono p-4 border border-green-700">
            <div className="mb-6">
                <h3 className="text-xl md:text-2xl tracking-wider border-b border-green-600 pb-1 mb-2">
                    &gt; SEND_MESSAGE.sh
                </h3>
                <p className="text-sm text-green-300"># Enter your details below and hit [Enter]</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm mb-1">NAME:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-black border border-green-700 px-3 py-2 text-green-200 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="John Connor"
                    />
                </div>

                <div>
                    <label className="block text-sm mb-1">EMAIL:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-black border border-green-700 px-3 py-2 text-green-200 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="resistance@skynet.net"
                    />
                </div>

                <div>
                    <label className="block text-sm mb-1">MESSAGE:</label>
                    <textarea
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-black border border-green-700 px-3 py-2 text-green-200 placeholder-green-500 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="We need your help..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={formStatus.isSubmitting}
                    className="w-full mt-2 bg-green-800 hover:bg-green-600 text-black font-bold py-2 px-4 transition-all duration-200"
                >
                    {formStatus.isSubmitting ? '...sending' : '>> SEND'}
                </button>

                {formStatus.isSubmitted && (
                    <div className={`mt-4 text-sm p-3 border-l-4 ${formStatus.success ? 'border-green-400' : 'border-red-500'}`}>
                        {formStatus.message}
                    </div>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
