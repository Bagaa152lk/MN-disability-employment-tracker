import React from 'react';

const ProgressBar = ({ value }) => {
    return (
        <div className="space-y-2">
            <div className="relative">
                <div
                    className="relative w-full overflow-hidden rounded-full bg-secondary h-3"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    data-max={100}
                >
                    <div
                        className="h-full w-full flex-1 bg-primary transition-all"
                        style={{ transform: `translateX(-${100 - value}%)` }}
                    ></div>
                </div>
                <div
                    className="absolute top-0 left-0 h-3 rounded-full transition-all duration-300 bg-warning"
                    style={{ width: `${value}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;