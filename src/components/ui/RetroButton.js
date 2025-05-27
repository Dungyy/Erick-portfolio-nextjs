// src/components/ui/RetroButton.js
import Link from 'next/link';

const RetroButton = ({ 
    children, 
    href, 
    secondary = false, 
    className = '', 
    borderRadius = '4px',  // Default border radius
    onClick, 
    ...props 
}) => {
    const buttonClass = `${secondary ? 'retro-button-secondary' : 'retro-button'} ${className}`;
    const style = { borderRadius, ...props.style };

    if (href) {
        return (
            <Link href={href} className={buttonClass} style={style} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={buttonClass} style={style} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default RetroButton;