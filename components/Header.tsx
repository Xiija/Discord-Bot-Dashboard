
import React from 'react';

interface HeaderProps {
    title: string;
    children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, children }) => {
    return (
        <header className="flex-shrink-0 bg-discord-darker shadow-md p-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">{title}</h2>
                <div>{children}</div>
            </div>
        </header>
    );
};

export default Header;
