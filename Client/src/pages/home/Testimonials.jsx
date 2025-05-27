import React from 'react';

const Testimonials = () => {
    return (
        <div>
            <section className="py-16 text-center bg-base-100">
                <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
                <div className="carousel w-full max-w-3xl mx-auto">
                    <div className="carousel-item w-full">
                        <div className="card bg-base-200 p-6 mx-auto">
                            <p>“SkillSync helped me stay consistent and meet others learning React!”</p>
                            <p className="mt-2 font-semibold">— Alex, Developer</p>
                        </div>
                    </div>
                    {/* Add more carousel-items if needed */}
                </div>
            </section>

        </div>
    );
};

export default Testimonials;