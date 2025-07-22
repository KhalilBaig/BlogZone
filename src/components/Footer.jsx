// src/components/Footer.jsx
import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        setSubscribed(true);
        setTimeout(() => setSubscribed(false), 4000);
    };

    return (
        <footer style={{ backgroundColor: '#000', color: '#fff', padding: '40px 20px' }}>
            <div className="container">
                <div className="row text-center text-md-start align-items-start">
                    {/* Links Section */}
                    <div className="col-md-6 mb-4 mb-md-0">
                        <p className="mb-2">© 2025 <strong>MyBlogZone</strong>. All rights reserved.</p>
                        <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-3 mb-2">
                            <Link to="/" style={{ color: '#0af' }}>Home</Link>
                            <Link to="/blog" style={{ color: '#0af' }}>Blog</Link>
                            <Link to="/contact" style={{ color: '#0af' }}>Contact</Link>
                            <Link to="/author" style={{ color: '#0af' }}>Author</Link>
                        </div>
                        <div className="d-flex justify-content-center justify-content-md-start gap-3">
                            <a href="https://facebook.com" style={{ color: '#0af' }}><FaFacebookF /></a>
                            <a href="https://twitter.com" style={{ color: '#0af' }}><FaTwitter /></a>
                            <a href="https://instagram.com" style={{ color: '#0af' }}><FaInstagram /></a>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="col-md-6">
                        <h5 className="text-uppercase mb-3">Subscribe to our Newsletter</h5>
                        <form onSubmit={handleSubscribe} className="d-flex flex-column flex-sm-row gap-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                required
                                style={{ backgroundColor: '#111', color: '#fff', border: '1px solid #555' }}
                            />
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                        {subscribed && (
                            <div className="mt-2 text-success" style={{ fontSize: '0.9rem' }}>
                                🎉 Thank you for subscribing!
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
