import React from 'react';

const VideoDemo = () => {
    return (
        <section id='features' className="py-16 bg-base-200 bg-gradient-to-b text-slate-200 from-gray-900 via-emerald-800 via-teal-900 via-cyan-800 via-sky-900 to-gray-900">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    🎥 See SkillSync in Action
                </h2>
                <p className="mb-8 text-lg text-base-content/80">
                    Watch a quick demo to explore how you can build roadmaps, join study groups, and track your learning journey—all in one place.
                </p>

                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl mx-auto max-w-4xl">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                        title="SkillSync Demo"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default VideoDemo;
