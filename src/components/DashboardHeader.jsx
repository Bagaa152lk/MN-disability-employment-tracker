import React from 'react';

const DashboardHeader = () => {
    return (
        <div className="bg-gradient-to-r from-primary to-accent text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-4">
                <div>
                    <h1 className="text-2xl font-bold">
                        Хөгжлийн бэрхшээлтэй иргэдийн хөдөлмөр эрхлэлтийн судалгаа
                    </h1>
                    <p className="text-white/90 mt-1">
                        Улсын хэмжээний бүртгэлийн явцын хяналт
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center gap-3">
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
                            className="h-8 w-8 text-white/90"
                        >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <div>
                            <p className="text-white/90 text-sm">Нийт бүртгэгдсэн</p>
                            <p className="text-2xl font-bold">2,139</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center gap-3">
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
                            className="h-8 w-8 text-white/90"
                        >
                            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                            <path d="M18 17V9"></path>
                            <path d="M13 17V5"></path>
                            <path d="M8 17v-3"></path>
                        </svg>
                        <div>
                            <p className="text-white/90 text-sm">Зорилтот тоо</p>
                            <p className="text-2xl font-bold">4,080</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center gap-3">
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
                            className="h-8 w-8 text-white/90"
                        >
                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <div>
                            <p className="text-white/90 text-sm">Гүйцэтгэл</p>
                            <p className="text-2xl font-bold">52%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;