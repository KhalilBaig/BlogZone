import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const authors = [
    {
        name: "Ayesha Khan",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        bio: "Lifestyle & wellness blogger who writes about mindfulness, healthy living, and self-care routines.",
        followers: "12.4K",
        articles: 48,
        rating: 4.7,
        socials: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
            linkedin: "#"
        }
    },
    {
        name: "Ali Raza",
        avatar: "https://randomuser.me/api/portraits/men/36.jpg",
        bio: "Tech & startup enthusiast covering innovation, apps, and the business of the future.",
        followers: "9.8K",
        articles: 35,
        rating: 4.5,
        socials: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
            linkedin: "#"
        }
    },
    {
        name: "Sarah Ahmed",
        avatar: "https://randomuser.me/api/portraits/women/55.jpg",
        bio: "Food and recipe expert sharing delicious recipes, kitchen hacks, and culinary adventures.",
        followers: "15.1K",
        articles: 62,
        rating: 4.9,
        socials: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
            linkedin: "#"
        }
    },
    {
        name: "Omar Malik",
        avatar: "https://randomuser.me/api/portraits/men/47.jpg",
        bio: "Travel & adventure storyteller documenting journeys across the globe with powerful narratives.",
        followers: "11.3K",
        articles: 41,
        rating: 4.8,
        socials: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
            linkedin: "#"
        }
    }
];

function AuthorsPage() {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-5">Meet Our Authors</h2>
                <div className="row">
                    {authors.map((author, index) => (
                        <div
                            className="col-md-6 col-lg-4 mb-4 fade-in"
                            key={index}
                        >
                            <div className="card author-card h-100 shadow-sm border-0">
                                <div className="text-center p-4">
                                    <img
                                        src={author.avatar}
                                        alt={author.name}
                                        className="img-fluid rounded-circle author-avatar mb-3"
                                    />
                                    <h5 className="mb-0">{author.name}</h5>
                                    <p className="text-muted mb-2">{author.bio}</p>
                                    <div className="d-flex justify-content-center gap-3 mb-3 social-links">
                                        <a href={author.socials.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                                        <a href={author.socials.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                                        <a href={author.socials.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                                        <a href={author.socials.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                                    </div>
                                    <div className="d-flex justify-content-around text-muted small">
                                        <span><i className="bi bi-star-fill text-warning"></i> {author.rating}</span>
                                        <span><i className="bi bi-pencil"></i> {author.articles} Articles</span>
                                        <span><i className="bi bi-people"></i> {author.followers}</span>
                                    </div>
                                    <Link to={`/authors/${author.name.toLowerCase().replace(" ", "-")}`} className="stretched-link" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Buttons */}
                <div className="text-center mt-5">
                    <a href="/blogs" className="btn btn-outline-primary px-4 me-3">
                        See All Blogs
                    </a>
                    <a href="/contact" className="btn btn-outline-success px-4">
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}

export default AuthorsPage;
