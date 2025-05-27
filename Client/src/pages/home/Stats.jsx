import React from 'react';

const Stats = () => {
  return (
    <div className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">📊 Our Impact</h2>
        <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
          <div className="stat">
            <div className="stat-title">Active Users</div>
            <div className="stat-value text-primary">3.2K+</div>
            <div className="stat-desc">Learning every day</div>
          </div>

          <div className="stat">
            <div className="stat-title">Roadmaps Created</div>
            <div className="stat-value text-secondary">1.5K+</div>
            <div className="stat-desc">Custom paths to success</div>
          </div>

          <div className="stat">
            <div className="stat-title">Study Groups</div>
            <div className="stat-value text-accent">800+</div>
            <div className="stat-desc">Built for collaboration</div>
          </div>

          <div className="stat">
            <div className="stat-title">Tasks Completed</div>
            <div className="stat-value text-success">52K+</div>
            <div className="stat-desc">Progress made across the globe</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
