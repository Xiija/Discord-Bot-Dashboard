
import React from 'react';

export type Page = 'dashboard' | 'servers' | 'commands' | 'settings';

export interface NavItem {
    id: Page;
    label: string;
    icon: React.ReactElement;
}

export interface Server {
    id: string;
    name: string;
    memberCount: number;
    iconUrl: string;
}

export interface Command {
    id: string;
    name: string;
    description: string;
    category: 'Moderation' | 'Utility' | 'Fun';
    enabled: boolean;
}
