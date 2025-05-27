import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import CalltoAction from "./CalltoAction";
import RoadmapPreview from "./RoadmapPreview";
import Stats from "./Stats";
import FAQ from "./FAQ";
import VideoDemo from "./VideoDemo";
import Blog from "../blog/Blog";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
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