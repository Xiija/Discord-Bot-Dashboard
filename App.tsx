
import React, { useState } from 'react';
import { Page } from './types';
import Sidebar from './components/Sidebar';
import DashboardOverview from './components/DashboardOverview';
import ServerManagement from './components/ServerManagement';
import CommandEditor from './components/CommandEditor';
import Settings from './components/Settings';

const App: React.FC = () => {
    const [activePage, setActivePage] = useState<Page>('dashboard');

    const renderContent = () => {
        switch (activePage) {
            case 'dashboard':
                return <DashboardOverview />;
            case 'servers':
                return <ServerManagement />;
            case 'commands':
                return <CommandEditor />;
            case 'settings':
                return <Settings />;
            default:
                return <DashboardOverview />;
        }
    };

    return (
        <div className="flex h-screen bg-discord-darkest text-discord-text font-sans">
            <Sidebar activePage={activePage} setActivePage={setActivePage} />
            <main className="flex-1 flex flex-col overflow-hidden">
                {renderContent()}
            </main>
        </div>
    );
};

export default App;
