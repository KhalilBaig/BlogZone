import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Ensure bootstrap is available globally
import * as bootstrap from "bootstrap";

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const toastRef = useRef(null);
    const toastInstance = useRef(null);

    // Initialize Bootstrap Toast once after mount
    useEffect(() => {
        if (toastRef.current) {
            toastInstance.current = new bootstrap.Toast(toastRef.current, { delay: 3000 });
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Show the toast
        if (toastInstance.current) {
            toastInstance.current.show();
        }

        // Clear the form fields
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div
            style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                position: "relative",
                paddingTop: "60px",
                paddingBottom: "60px",
            }}
        >
            {/* Overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    background: "rgba(0, 0, 0, 0.7)",
                    zIndex: 1,
                }}
            />

            {/* Toast Message */}
            <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1055 }}>
                <div
                    ref={toastRef}
                    className="toast align-items-center text-white bg-success border-0"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                >
                    <div className="d-flex">
                        <div className="toast-body">✅ Message sent successfully!</div>
                        <button
                            type="button"
                            className="btn-close btn-close-white me-2 m-auto"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                        ></button>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="container position-relative" style={{ zIndex: 2 }}>
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card p-4 rounded-4 shadow-lg border-0 bg-white bg-opacity-90">
                            <h3 className="text-center mb-4 text-dark">Contact Us</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control rounded-pill"
                                        id="name"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control rounded-pill"
                                        id="email"
                                        placeholder="Your email"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea
                                        className="form-control rounded-4"
                                        id="message"
                                        rows="4"
                                        placeholder="Write your message here..."
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                        required
                                    ></textarea>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-dark rounded-pill">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                        <p className="text-white text-center mt-4 fs-5">
                            We'd love to hear from you. Reach out anytime!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
