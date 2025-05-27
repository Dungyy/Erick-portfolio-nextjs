// src/components/ui/RetroButton.js
import Link from 'next/link';

const RetroButton = ({ children, href, secondary = false, className = '', onClick, ...props }) => {
    const buttonClass = `${secondary ? 'retro-button-secondary' : 'retro-button'} ${className}`;

    if (href) {
        return (
            <Link href={href} className={buttonClass} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={buttonClass} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default RetroButton;