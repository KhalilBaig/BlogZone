import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BlogsPage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('/blogs.json');
                const data = await response.json();
                setBlogs(data);
                setLoading(false);
            } catch (err) {
                console.error("Fetch Error:", err);
                setError("Failed to fetch blog data: " + err.message);
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) return <p>Loading blogs...</p>;
    if (error) return <p className="text-danger">Error: {error}</p>;

    return (
        <div className="container my-5">
            {/* === Page Heading === */}
            <div className="text-center mb-5">
                <h2 className="fw-bold">Explore Our Blog Zone</h2>
                <p className="text-muted fs-6">
                    Dive into insightful articles written by our talented authors. <br />
                    Discover trending topics, helpful guides, and inspiring stories updated regularly.
                </p>
                <Link to="/authors" className="btn btn-outline-secondary mt-3">
                    Meet Our Authors
                </Link>
            </div>

            {/* === Blog Cards Section === */}
            <section className="py-5">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div className="col-12 col-sm-6 col-lg-4" key={blog.id}>
                            <Link to={`/blogs/${blog.id}`} className="text-decoration-none text-dark">
                                <div className="card h-100 blog-card shadow-sm">
                                    <img src={blog.image} className="card-img-top" alt={blog.title} />
                                    <div className="card-body p-3">
                                        <h5 className="card-title blog-title">{blog.title}</h5>
                                        <p className="card-text">{blog.content.slice(0, 100)}...</p>
                                    </div>
                                    <div className="card-footer text-muted small d-flex justify-content-between align-items-center">
                                        <span>{blog.category} | {blog.published_date}</span>
                                        <span><i className="bi bi-person-fill"></i> {blog.author}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default BlogsPage;
