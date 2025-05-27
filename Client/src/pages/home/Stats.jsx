
import CountUp from '../../blocks/TextAnimations/CountUp/CountUp'
const Stats = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">📊 Our Impact</h2>
        <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-transparent">
          <div className="stat bg-gray-800 rounded-xl">
            <div className="stat-title text-gray-300">Active Users</div>
            <CountUp
              from={0}
              to={3200}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text stat-value text-primary"
            />
            <div className="stat-desc text-gray-400">Learning every day</div>
          </div>

          <div className="stat bg-gray-800 rounded-xl">
            <div className="stat-title text-gray-300">Roadmaps Created</div>
            <CountUp
              from={0}
              to={1500}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text stat-value text-secondary"
            />
            <div className="stat-desc text-gray-400">Custom paths to success</div>
          </div>

          <div className="stat bg-gray-800 rounded-xl">
            <div className="stat-title text-gray-300">Study Groups</div>
            <CountUp
              from={0}
              to={800}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text stat-value text-accent"
            />
            <div className="stat-desc text-gray-400">Built for collaboration</div>
          </div>

          <div className="stat bg-gray-800 rounded-xl">
            <div className="stat-title text-gray-300">Tasks Completed</div>
            <CountUp
              from={0}
              to={52000}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text stat-value text-success"
            />
            <div className="stat-desc text-gray-400">Progress made across the globe</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
