import React from 'react';

const Features = () => {
    return (
        <div>
            <section id="features" className="py-16 bg-base-100 text-center">
                <h2 className="text-3xl font-bold mb-8">Core Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
                    <div className="card bg-base-200 p-4">
                        <h3 className="text-xl font-semibold mb-2">📈 Progress Tracker</h3>
                        <p>Track your learning goals and streaks visually.</p>
                    </div>
                    <div className="card bg-base-200 p-4">
                        <h3 className="text-xl font-semibold mb-2">🛠️ Roadmap Builder</h3>
                        <p>Drag and drop tasks to build your path to mastery.</p>
                    </div>
                    <div className="card bg-base-200 p-4">
                        <h3 className="text-xl font-semibold mb-2">🤝 Study Groups</h3>
                        <p>Form or join groups to learn collaboratively.</p>
                    </div>
                    <div className="card bg-base-200 p-4">
                        <h3 className="text-xl font-semibold mb-2">💬 Real-time Chat</h3>
                        <p>Communicate instantly with group members.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;