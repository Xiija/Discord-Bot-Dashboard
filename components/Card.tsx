import React from 'react';

interface CardProps {
    title: string;
    value: string;
    // Fix: Specify that the icon component can receive a className prop.
    icon: React.ReactElement<{ className?: string }>;
    color: string;
}

const Card: React.FC<CardProps> = ({ title, value, icon, color }) => {
    return (
        <div className="bg-discord-darker rounded-lg p-5 flex items-center shadow-lg transition-transform transform hover:-translate-y-1">
            <div className={`p-3 rounded-full mr-4 ${color}`}>
                {React.cloneElement(icon, { className: "w-7 h-7 text-white" })}
            </div>
            <div>
                <p className="text-sm text-discord-text-muted font-medium uppercase">{title}</p>
                <p className="text-2xl font-bold text-white">{value}</p>
            </div>
        </div>
    );
};

export default Card;