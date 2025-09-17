
import React, { useState, useMemo } from 'react';
import Header from './Header';
import ToggleSwitch from './ToggleSwitch';
import { MOCK_COMMANDS } from '../constants';
import { Command } from '../types';

const CommandEditor: React.FC = () => {
    const [commands, setCommands] = useState<Command[]>(MOCK_COMMANDS);

    const handleToggle = (id: string) => {
        setCommands(prevCommands =>
            prevCommands.map(cmd =>
                cmd.id === id ? { ...cmd, enabled: !cmd.enabled } : cmd
            )
        );
    };

    const groupedCommands = useMemo(() => {
        return commands.reduce((acc, command) => {
            (acc[command.category] = acc[command.category] || []).push(command);
            return acc;
        }, {} as Record<Command['category'], Command[]>);
    }, [commands]);

    return (
        <>
            <Header title="Command Editor">
                <button className="bg-discord-blurple text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-80 transition-opacity">
                    Save Changes
                </button>
            </Header>
            <div className="flex-1 p-8 overflow-y-auto">
                {Object.entries(groupedCommands).map(([category, cmds]) => (
                    <div key={category} className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-4 border-b-2 border-discord-light pb-2">{category}</h3>
                        <div className="space-y-4">
                            {cmds.map((command) => (
                                <div key={command.id} className="bg-discord-darker p-4 rounded-lg flex justify-between items-center shadow-md">
                                    <div>
                                        <p className="font-semibold text-discord-blurple">{command.name}</p>
                                        <p className="text-sm text-discord-text-muted">{command.description}</p>
                                    </div>
                                    <ToggleSwitch
                                        checked={command.enabled}
                                        onChange={() => handleToggle(command.id)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CommandEditor;
