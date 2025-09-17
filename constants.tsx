
import React from 'react';
import { NavItem, Server, Command } from './types';

export const BotIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm4 0h-2v-2h2v2zm-4-4H9V8h2v4zm4 0h-2V8h2v4z"/>
        <path d="M7.5 15.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S9.83 14 9 14s-1.5.67-1.5 1.5zm6 0c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S15.83 14 15 14s-1.5.67-1.5 1.5z"/>
        <path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" opacity=".3"/>
        <path d="M12 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-1 3.5h-1v-1h1v1zm3 0h-1v-1h1v1z"/>
    </svg>
);

const DashboardIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const ServersIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a3.004 3.004 0 015.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const CommandsIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
    </svg>
);

const SettingsIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const NAV_ITEMS: NavItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon className="w-5 h-5 mr-3"/> },
    { id: 'servers', label: 'Servers', icon: <ServersIcon className="w-5 h-5 mr-3"/> },
    { id: 'commands', label: 'Commands', icon: <CommandsIcon className="w-5 h-5 mr-3"/> },
    { id: 'settings', label: 'Settings', icon: <SettingsIcon className="w-5 h-5 mr-3"/> },
];

export const MOCK_SERVERS: Server[] = [
    { id: '1', name: 'ChillZone', memberCount: 1204, iconUrl: 'https://picsum.photos/seed/1/64/64' },
    { id: '2', name: 'Gamer\'s Paradise', memberCount: 8753, iconUrl: 'https://picsum.photos/seed/2/64/64' },
    { id: '3', name: 'Study Hall', memberCount: 450, iconUrl: 'https://picsum.photos/seed/3/64/64' },
    { id: '4', name: 'Art Club', memberCount: 2310, iconUrl: 'https://picsum.photos/seed/4/64/64' },
    { id: '5', name: 'Crypto Cave', memberCount: 5600, iconUrl: 'https://picsum.photos/seed/5/64/64' },
    { id: '6', name: 'Anime World', memberCount: 9820, iconUrl: 'https://picsum.photos/seed/6/64/64' },
];

export const MOCK_COMMANDS: Command[] = [
    { id: 'cmd1', name: '/ban', description: 'Bans a user from the server.', category: 'Moderation', enabled: true },
    { id: 'cmd2', name: '/kick', description: 'Kicks a user from the server.', category: 'Moderation', enabled: true },
    { id: 'cmd3', name: '/mute', description: 'Mutes a user for a specified duration.', category: 'Moderation', enabled: false },
    { id: 'cmd4', name: '/poll', description: 'Creates a poll with multiple choices.', category: 'Utility', enabled: true },
    { id: 'cmd5', name: '/userinfo', description: 'Displays information about a user.', category: 'Utility', enabled: true },
    { id: 'cmd6', name: '/meme', description: 'Shows a random meme.', category: 'Fun', enabled: true },
    { id: 'cmd7', name: '/cointoss', description: 'Flips a coin.', category: 'Fun', enabled: true },
];

export const MOCK_CHART_DATA = [
  { name: 'Monday', messages: 4000 },
  { name: 'Tuesday', messages: 3000 },
  { name: 'Wednesday', messages: 2000 },
  { name: 'Thursday', messages: 2780 },
  { name: 'Friday', messages: 1890 },
  { name: 'Saturday', messages: 2390 },
  { name: 'Sunday', messages: 3490 },
];
