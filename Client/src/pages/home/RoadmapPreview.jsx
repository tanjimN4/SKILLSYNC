import React from 'react';

const RoadmapPreview = () => {
    return (
        <div>
            <section className="py-16 bg-base-200 text-center">
                <h2 className="text-3xl font-bold mb-6">Explore Popular Roadmaps</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
                    <div className="card bg-base-100 p-4 shadow">
                        <h3 className="font-semibold mb-2">Frontend Web Developer</h3>
                        <p>HTML, CSS, JavaScript, React, Git...</p>
                    </div>
                    <div className="card bg-base-100 p-4 shadow">
                        <h3 className="font-semibold mb-2">Data Analyst</h3>
                        <p>Excel, SQL, Python, Tableau...</p>
                    </div>
                    <div className="card bg-base-100 p-4 shadow">
                        <h3 className="font-semibold mb-2">AI/ML Beginner</h3>
                        <p>Math, Python, Scikit-learn, ML models...</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default RoadmapPreview;