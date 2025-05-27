import React from 'react';

const FAQ = () => {
    return (
        <div>
            <section className="bg-base-200 py-16 px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    <div className="collapse collapse-arrow bg-base-100">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            Is SkillSync free to use?
                        </div>
                        <div className="collapse-content">
                            <p>Yes! Core features are free for all users.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            Can I invite friends to study groups?
                        </div>
                        <div className="collapse-content">
                            <p>Absolutely. You can share invite links easily.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;