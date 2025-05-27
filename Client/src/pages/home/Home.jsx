import Hero from "./Hero";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import CalltoAction from "./CalltoAction";
import RoadmapPreview from "./RoadmapPreview";
import Stats from "./Stats";
import FAQ from "./FAQ";
import Blog from "./Blog";
import VideoDemo from "./VideoDemo";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Features></Features>
            <RoadmapPreview></RoadmapPreview>
            <HowItWorks></HowItWorks>
            <Stats></Stats>
            <VideoDemo></VideoDemo>
            <Testimonials></Testimonials>
            <FAQ></FAQ>
            <Blog></Blog>
            <CalltoAction></CalltoAction>
        </div>
    );
};

export default Home;