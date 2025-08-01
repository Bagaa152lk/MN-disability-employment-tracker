import React from 'react';

const ViewToggle = ({ view, setView }) => {
    return (
        <div className="flex rounded-md border bg-muted p-1">
            <button
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium rounded-md h-8 px-3 transition-all ${view === 'card'
                    ? 'bg-background shadow-sm text-foreground'
                    : 'text-muted-foreground hover:bg-background/50 hover:text-foreground'
                    } `}
                onClick={() => setView('card')}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2"
                >
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M3 9h18"></path>
                    <path d="M3 15h18"></path>
                    <path d="M9 3v18"></path>
                    <path d="M15 3v18"></path>
                </svg>
                Card
            </button>
            <button
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium rounded-md h-8 px-3 transition-all ${view === 'table'
                    ? 'bg-background shadow-sm text-foreground'
                    : 'text-muted-foreground hover:bg-background/50 hover:text-foreground'
                    } `}
                onClick={() => setView('table')}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2"
                >
                    <path d="M12 3v18"></path>
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M3 9h18"></path>
                    <path d="M3 15h18"></path>
                </svg>
                Table
            </button>
        </div>
    );
};

export default ViewToggle;