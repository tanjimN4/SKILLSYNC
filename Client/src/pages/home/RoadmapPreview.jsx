import React from 'react';
import DecryptedText from '../../blocks/TextAnimations/DecryptedText/DecryptedText';

const RoadmapPreview = () => {
    return (
        <div>
            <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white text-center">
                <div style={{ marginTop: '4rem' }} className="text-3xl font-bold mb-6">
                    <DecryptedText
                        speed={200}
                        text="Explore Popular Roadmaps"
                        animateOn="view"
                        revealDirection="center"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
                    <div className="card bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <h3 className="font-semibold text-lg mb-2">Frontend Web Developer</h3>
                        <p className="text-gray-300">HTML, CSS, JavaScript, React, Git...</p>
                    </div>
                    <div className="card bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <h3 className="font-semibold text-lg mb-2">Data Analyst</h3>
                        <p className="text-gray-300">Excel, SQL, Python, Tableau...</p>
                    </div>
                    <div className="card bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <h3 className="font-semibold text-lg mb-2">AI/ML Beginner</h3>
                        <p className="text-gray-300">Math, Python, Scikit-learn, ML models...</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RoadmapPreview;
