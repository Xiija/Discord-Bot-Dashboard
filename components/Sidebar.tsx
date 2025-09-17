
import React from 'react';
import { Page, NavItem } from '../types';
import { NAV_ITEMS, BotIcon } from '../constants';

interface SidebarProps {
    activePage: Page;
    setActivePage: (page: Page) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage }) => {
    return (
        <aside className="w-64 bg-discord-dark flex-shrink-0 flex flex-col p-4">
            <div className="flex items-center mb-8">
                <BotIcon className="w-10 h-10 text-discord-blurple" />
                <h1 className="text-xl font-bold ml-3">BotManager</h1>
            </div>
            <nav className="flex-1">
                <ul>
                    {NAV_ITEMS.map((item: NavItem) => (
                        <li key={item.id}>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActivePage(item.id);
                                }}
                                className={`flex items-center px-4 py-2.5 my-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                                    activePage === item.id
                                        ? 'bg-discord-blurple text-white'
                                        : 'text-discord-text-muted hover:bg-discord-light hover:text-white'
                                }`}
                            >
                                {item.icon}
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="mt-auto">
                <div className="flex items-center p-2 bg-discord-darkest rounded-md">
                    <img className="w-10 h-10 rounded-full" src="https://picsum.photos/seed/user/100/100" alt="User Avatar" />
                    <div className="ml-3">
                        <p className="text-sm font-semibold text-white">AdminUser</p>
                        <p className="text-xs text-discord-text-muted">#1234</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
