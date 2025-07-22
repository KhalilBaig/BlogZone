// src/pages/SingleBlogPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const SingleBlogPage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [allBlogs, setAllBlogs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch("/blogs.json");
                const data = await response.json();
                setAllBlogs(data);

                const selected = data.find((item) => item.id === parseInt(id));
                if (selected) {
                    setBlog(selected);
                } else {
                    setError("Blog not found.");
                }
            } catch (err) {
                console.error(err);
                setError("Failed to load blog.");
            }
        };

        fetchBlog();
    }, [id]);

    if (error) {
        return <div className="container py-5 text-danger">{error}</div>;
    }

    if (!blog) {
        return <div className="container py-5">Loading...</div>;
    }

    const latestBlogs = allBlogs.filter((item) => item.id !== parseInt(id)).slice(0, 5);

    return (
        <div className="container py-5">
            <Link to="/blogs" className="btn btn-outline-dark mb-4">
                ← Back to Blogs
            </Link>

            <div className="row">
                {/* Main Blog Content */}
                <div className="col-lg-8">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="img-fluid rounded mb-4"
                        style={{ maxHeight: "350px", objectFit: "cover", width: "100%" }}
                    />

                    <h2 className="mb-3" style={{ fontSize: "1.8rem", color:"#00d8ff" }}>{blog.title}</h2>
                    <div className="text-muted mb-4" style={{ fontSize: "0.9rem" }}>
                        <span className="me-3">{blog.category}</span>
                        <span>{blog.published_date}</span>
                    </div>

                    <p style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consequuntur tempora fugit quibusdam accusamus, voluptate sunt, blanditiis numquam culpa ullam corrupti omnis voluptates vel labore sapiente ea delectus minima placeat ...
                    </p>
                    <p style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consequuntur tempora fugit quibusdam accusamus, voluptate sunt, blanditiis numquam culpa ullam corrupti omnis voluptates vel labore sapiente ea delectus minima placeat ...
                    </p>
                    <p style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consequuntur tempora fugit quibusdam accusamus, voluptate sunt, blanditiis numquam culpa ullam corrupti omnis voluptates vel labore sapiente ea delectus minima placeat ...
                    </p>
                </div>

                {/* Latest Blogs */}
                <div className="col-lg-4 ps-lg-4 mt-5 mt-lg-0">
                    <h5 className="mb-3 border-bottom pb-2">Latest Blogs</h5>
                    {latestBlogs.map((item) => (
                        <div key={item.id} className="mb-3 border-bottom pb-2">
                            <p className="mb-1 fw-semibold">{item.title.slice(0, 50)}...</p>
                            <Link
                                to={`/blogs/${item.id}`}
                                className=" btn-sm "
                                style={{ fontSize: "0.85rem", color:"gray", textDecoration:"none" }}
                            >
                                Read More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SingleBlogPage;
