// src/components/ui/RetroCard.js
import { forwardRef } from 'react';

const RetroCard = forwardRef(({ children, className = '', hover = true, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={`retro-card ${hover ? 'hover:transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-retro-lg' : ''} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
});

RetroCard.displayName = 'RetroCard';

export default RetroCard;