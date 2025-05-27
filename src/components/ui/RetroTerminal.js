// src/components/ui/RetroTerminal.js
const RetroTerminal = ({ children, title = "terminal.exe" }) => {
    return (
        <div className="retro-terminal">
            <div className="flex items-center mb-4 border-b border-crt/30 pb-2">
                <div className="w-3 h-3 rounded-full bg-accent mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-secondary mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-primary mr-auto"></div>
                <span className="text-sm opacity-70">{title}</span>
            </div>

            <div className="space-y-4">
                {Array.isArray(children) ? (
                    children.map((line, index) => (
                        <p key={index}>
                            <span className="text-accent">$</span> {line}
                        </p>
                    ))
                ) : (
                    <p><span className="text-accent">$</span> {children}</p>
                )}
            </div>
        </div>
    );
};

export default RetroTerminal;