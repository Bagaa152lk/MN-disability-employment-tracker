import React from 'react';

const ProgressBar = ({ value, viewPercent = false }) => (
    <div className="space-y-2">
        <div className="relative">
            <div
                className="w-full h-3 overflow-hidden rounded-full bg-secondary"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <div
                    className="h-full bg-primary transition-all"
                    style={{ transform: `translateX(-${100 - value}%)` }}
                />
            </div>
            <div
                className="absolute top-0 left-0 h-3 rounded-full bg-warning transition-all duration-300"
                style={{ width: `${value}%` }}
            />
        </div>

        {viewPercent && (
            <span className="text-2xl font-bold text-primary w-16">
                {value}%
            </span>
        )}
    </div>
);

export default ProgressBar;
