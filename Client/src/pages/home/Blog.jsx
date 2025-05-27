

const Blog = () => {
    return (
        <div>
            <section className="py-16 bg-base-100 text-center">
                <h2 className="text-3xl font-bold mb-6">From Our Blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
                    <div className="card bg-base-200 p-4">
                        <h3 className="font-semibold mb-2">How to Stay Consistent in Learning</h3>
                        <p>Top 5 tips to keep your streak alive and stay motivated.</p>
                    </div>
                    <div className="card bg-base-200 p-4">
                        <h3 className="font-semibold mb-2">Roadmaps for Beginners</h3>
                        <p>Where to start if you're new to tech or self-learning.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;