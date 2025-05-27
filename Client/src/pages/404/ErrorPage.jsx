import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="relative w-screen h-screen ">
            <iframe
                className="w-full h-full"
                src="https://lottie.host/embed/ce913dcc-3b75-42ca-a636-e62d6c025cfd/septeA7jJc.lottie"
                title="404 Animation"
            ></iframe>
            <div className='absolute flex justify-center items-center w-full'>
                <button
                    className="btn absolute bottom-16"
                    onClick={() => navigate(-1)}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
