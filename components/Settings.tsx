
import React, { useState } from 'react';
import Header from './Header';
import ToggleSwitch from './ToggleSwitch';

const Settings: React.FC = () => {
    const [prefix, setPrefix] = useState('!');
    const [welcomeMessages, setWelcomeMessages] = useState(true);
    const [logChannel, setLogChannel] = useState('#mod-logs');

    return (
        <>
            <Header title="Bot Settings">
                 <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-80 transition-opacity">
                    Save All Settings
                </button>
            </Header>
            <div className="flex-1 p-8 overflow-y-auto">
                <div className="max-w-2xl mx-auto space-y-8">
                    {/* General Settings */}
                    <div className="bg-discord-darker p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold text-white mb-4">General</h3>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="prefix" className="block text-sm font-medium text-discord-text-muted mb-1">
                                    Command Prefix
                                </label>
                                <input
                                    type="text"
                                    id="prefix"
                                    value={prefix}
                                    onChange={(e) => setPrefix(e.target.value)}
                                    className="w-full bg-discord-darkest rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-discord-blurple"
                                />
                            </div>
                            <div>
                                <label htmlFor="logChannel" className="block text-sm font-medium text-discord-text-muted mb-1">
                                    Log Channel
                                </label>
                                <select 
                                    id="logChannel"
                                    value={logChannel}
                                    onChange={(e) => setLogChannel(e.target.value)}
                                    className="w-full bg-discord-darkest rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-discord-blurple"
                                >
                                    <option>#mod-logs</option>
                                    <option>#general-logs</option>
                                    <option>#action-logs</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    {/* Modules Settings */}
                    <div className="bg-discord-darker p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold text-white mb-4">Modules</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-white">Welcome Messages</p>
                                    <p className="text-sm text-discord-text-muted">Send a message when a new user joins.</p>
                                </div>
                                <ToggleSwitch checked={welcomeMessages} onChange={setWelcomeMessages} />
                            </div>
                             <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-white">Auto-Roles</p>
                                    <p className="text-sm text-discord-text-muted">Automatically assign a role to new users.</p>
                                </div>
                                <ToggleSwitch checked={false} onChange={() => {}} />
                            </div>
                             <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-white">Moderation Logs</p>
                                    <p className="text-sm text-discord-text-muted">Log kicks, bans, and mutes to the log channel.</p>
                                </div>
                                <ToggleSwitch checked={true} onChange={() => {}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Settings;
