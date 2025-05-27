import React from 'react';
import DecryptedText from '../../blocks/TextAnimations/DecryptedText/DecryptedText';

const HowItWorks = () => {
    return (
        <div>
            <section id="how" className="py-16 bg-gradient-to-b text-slate-200 from-gray-900 via-emerald-800 via-teal-900 via-cyan-800 via-sky-900 to-gray-900 text-center">
                <div style={{ marginTop: '4rem' }} className="text-3xl font-bold mb-10">
                    <DecryptedText
                        speed={200}
                        text="How It Works"
                        animateOn="view"
                        revealDirection="center"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                    <div className="card bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-semibold mb-2">1. Create</h3>
                        <p className="text-gray-300">Sign up and create your custom learning roadmap or use templates.</p>
                    </div>
                    <div className="card bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-semibold mb-2">2. Track</h3>
                        <p className="text-gray-300">Complete tasks, update your progress, and view your learning streaks.</p>
                    </div>
                    <div className="card bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-semibold mb-2">3. Collaborate</h3>
                        <p className="text-gray-300">Join groups, share progress, and chat with fellow learners.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;
