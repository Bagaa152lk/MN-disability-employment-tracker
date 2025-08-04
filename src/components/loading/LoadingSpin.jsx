import React from "react";
import useLoading from "../../hooks/useLoading";
const LoadingSpin = () => {
    let element;
    const { loadingState } = useLoading();
    element = (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-secondary text-lg font-semibold">Loading</div>
            <div className="ml-4 w-6 h-6 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
        </div>
    );

    return loadingState.show ? element : null;
};

export default LoadingSpin;
