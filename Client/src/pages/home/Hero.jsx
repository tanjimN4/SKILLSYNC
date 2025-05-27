
import { Link } from 'react-router-dom';
import GradientText from '../../blocks/TextAnimations/GradientText/GradientText';
import DecryptedText from '../../blocks/TextAnimations/DecryptedText/DecryptedText';

const Hero = () => {
    return (
        <div className="bg-gradient-to-b text-slate-200 from-gray-900 via-emerald-800 via-teal-900 via-cyan-800 via-sky-900 to-gray-900">
            <section className="py-16 text-center">
                <div style={{ marginTop: '4rem' }} className="text-4xl  font-bold mb-4">
                    <DecryptedText
                        speed={200}
                        text="Track. Learn. Grow. Together."
                        animateOn="view"
                        revealDirection="center"
                    />
                </div>
                <p className="text-lg max-w-xl mx-auto mb-6">
                    Build personalized learning roadmaps, join study groups, and stay motivated in your learning journey.
                </p>
                <div className="flex justify-center gap-4">
                    <div className="">
                        <Link to="/signup" >
                            <GradientText
                                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                animationSpeed={3}
                                showBorder={true}
                                className="px-6 py-2  rounded-md font-semibold transition duration-300 ease-in-out hover:scale-105 hover:shadow-md"
                            >
                                Get Started
                            </GradientText>
                        </Link>
                    </div>
                    <a href="#features">
                        <GradientText
                            colors={["#cfe8ff", "#5ac8fa", "#ffffff", "#5ac8fa", "#cfe8ff"]}
                            animationSpeed={3}
                            showBorder={true}
                            className="px-6 py-2 rounded-md font-semibold transition duration-300 ease-in-out hover:scale-105 hover:shadow-md"
                        >
                            View Demo
                        </GradientText>
                    </a>
                </div>
            </section>

        </div>
    );
};

export default Hero;