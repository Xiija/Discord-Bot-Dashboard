
import React from 'react';
import Header from './Header';
import { MOCK_SERVERS } from '../constants';
import { Server } from '../types';

const ServerManagement: React.FC = () => {
    return (
        <>
            <Header title="Server Management" />
            <div className="flex-1 p-8 overflow-y-auto">
                <div className="bg-discord-darker rounded-lg shadow-lg">
                    <div className="p-4 border-b border-discord-light">
                        <input
                            type="text"
                            placeholder="Search servers..."
                            className="w-full bg-discord-darkest rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-discord-blurple"
                        />
                    </div>
                    <table className="w-full text-left">
                        <thead className="border-b border-discord-light">
                            <tr>
                                <th className="p-4 text-xs font-semibold text-discord-text-muted uppercase tracking-wider">Server</th>
                                <th className="p-4 text-xs font-semibold text-discord-text-muted uppercase tracking-wider">Members</th>
                                <th className="p-4 text-xs font-semibold text-discord-text-muted uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MOCK_SERVERS.map((server: Server, index: number) => (
                                <tr key={server.id} className={`${index % 2 === 0 ? 'bg-discord-darker' : 'bg-discord-dark'} hover:bg-discord-light transition-colors duration-200`}>
                                    <td className="p-4 flex items-center">
                                        <img src={server.iconUrl} alt={server.name} className="w-10 h-10 rounded-full mr-4" />
                                        <span className="font-medium text-white">{server.name}</span>
                                    </td>
                                    <td className="p-4 text-discord-text-muted">{server.memberCount.toLocaleString()}</td>
                                    <td className="p-4 text-right">
                                        <button className="bg-discord-blurple text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-opacity-80 transition-opacity">
                                            Settings
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ServerManagement;
