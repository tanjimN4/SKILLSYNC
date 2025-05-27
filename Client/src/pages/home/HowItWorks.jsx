import React from 'react';

const HowItWorks = () => {
    return (
        <div>
            <section id="how" className="py-16 bg-base-200 text-center">
                <h2 className="text-3xl font-bold mb-10">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                    <div className="card bg-base-100 p-6 shadow">
                        <h3 className="text-xl font-semibold mb-2">1. Create</h3>
                        <p>Sign up and create your custom learning roadmap or use templates.</p>
                    </div>
                    <div className="card bg-base-100 p-6 shadow">
                        <h3 className="text-xl font-semibold mb-2">2. Track</h3>
                        <p>Complete tasks, update your progress, and view your learning streaks.</p>
                    </div>
                    <div className="card bg-base-100 p-6 shadow">
                        <h3 className="text-xl font-semibold mb-2">3. Collaborate</h3>
                        <p>Join groups, share progress, and chat with fellow learners.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;