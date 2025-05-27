import React from 'react';

const Hero = () => {
    return (
        <div>
            <section className="py-16 text-center bg-base-200">
                <h1 className="text-4xl font-bold mb-4">Track. Learn. Grow. Together.</h1>
                <p className="text-lg max-w-xl mx-auto mb-6">
                    Build personalized learning roadmaps, join study groups, and stay motivated in your learning journey.
                </p>
                <div className="flex justify-center gap-4">
                    <a href="/register" className="btn btn-primary">Get Started</a>
                    <a href="#features" className="btn btn-outline btn-primary">View Demo</a>
                </div>
            </section>

        </div>
    );
};

export default Hero;