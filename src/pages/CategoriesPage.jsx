import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
    {
        name: "Tech",
        icon: "💻",
        description: "Latest in tech, gadgets, and innovation.",
    },
    {
        name: "Life",
        icon: "🌿",
        description: "Stories, experiences, and everyday topics.",
    },
    {
        name: "Education",
        icon: "📘",
        description: "Insights and tips from the learning world.",
    },
    {
        name: "Business",
        icon: "📊",
        description: "Trends, growth tips, and startup ideas.",
    },
    {
        name: "Health",
        icon: "📊",
        description: "Wellness tips, medical tech, and healthy living guides.",
    },
    {
        name: "AI",
        icon: "📊",
        description: "Advancements and insights in artificial intelligence and machine learning."
    },
    {
        name: "Enterpeise",
        icon: "📊",
        description: "Business solutions, corporate trends, and enterprise technology.",
    },
    
];

const CategoriesPage = () => {
    const navigate = useNavigate();

    const handleClick = (category) => {
        navigate(`/blogs?category=${category}`);
    };

    return (
        <div className="category-page-light">
            <div className="text-center mb-5">
                <h2 className="fw-bold text-dark">Explore Categories</h2>
                <p className="text-muted">Choose a category and dive into the blog zone!</p>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="col-md-6 col-lg-4 col-xl-3 mb-4"
                            onClick={() => handleClick(cat.name)}
                        >
                            <div className="category-card-light p-4 text-center h-100 shadow-sm rounded-4">
                                <div className="icon mb-3" style={{ fontSize: "2.5rem" }}>{cat.icon}</div>
                                <h5 className="fw-bold text-dark">{cat.name}</h5>
                                <p className="text-muted small">{cat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoriesPage;
