import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why Learning Roadmaps Matter",
      summary: "Explore how structured learning paths can boost your productivity and help you reach your career goals faster.",
      author: "Alex Johnson",
      date: "2025-05-25",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692", // books + learning
    },
    {
      id: 2,
      title: "Top 5 Skills to Learn in 2025",
      summary: "From AI to soft skills—here are the top in-demand skills you should master this year.",
      author: "Sarah Lee",
      date: "2025-05-20",
      image: "https://images.unsplash.com/photo-1581092334033-1c7a1c918b1e", // skills + tech
    },
    {
      id: 3,
      title: "Mastering Group Study with Online Tools",
      summary: "Discover how to stay focused and organized when studying with groups using modern digital platforms.",
      author: "Michael Chen",
      date: "2025-05-15",
      image: "https://images.unsplash.com/photo-1600195077909-bfbd4c8c5a3a", // group + study
    },
  ];

  return (
    <div className="max-w-7xl  mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">📚 Blog & Insights</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <div key={post.id} className="card bg-base-100 shadow-md hover:shadow-xl transition">
            <figure>
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{post.title}</h3>
              <p>{post.summary}</p>
              <div className="text-sm text-gray-500 mt-2">
                <span>By {post.author}</span> | <span>{post.date}</span>
              </div>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-sm btn-primary">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
