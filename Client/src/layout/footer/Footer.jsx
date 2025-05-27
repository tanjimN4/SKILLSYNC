
const Footer = () => {
    return (
        <div>
            <footer className="footer items-center p-10 bg-neutral text-neutral-content">
                <div className="items-center grid-flow-col">
                    <span className="font-bold text-lg">SkillSync</span>
                    <p>Track. Learn. Grow. Together.</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://github.com"><i className="fab fa-github"></i></a>
                        <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;