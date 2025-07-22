import React from 'react';
import { Link } from "react-router-dom";

function HomePage() {
    const authors = [
        {
            name: "Ayesha Khan",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            bio: "Lifestyle & wellness blogger"
        },
        {
            name: "Ali Raza",
            avatar: "https://randomuser.me/api/portraits/men/36.jpg",
            bio: "Tech & startup enthusiast"
        },
        {
            name: "Sarah Ahmed",
            avatar: "https://randomuser.me/api/portraits/women/55.jpg",
            bio: "Food and recipe expert"
        },
        {
            name: "Omar Malik",
            avatar: "https://randomuser.me/api/portraits/men/47.jpg",
            bio: "Travel & adventure storyteller"
        }
    ];

    const blogs = [
        {
            id: 3,
            title: "Making wearable medical devices more patient-friendly with Professor Esther Rodriguez-Villegas from Acurable",
            image: "https://techcrunch.com/wp-content/uploads/2022/05/found-2022-featured.jpg?w=430&h=230&crop=1",
            category: "Health",
            author: "Darrell Etherington",
            published_date: "October 4, 2023",
            reading_time: "8 minutes",
            content: "Welcome back to Found, where we get the stories behind the startups. This week, our old friend Darrell Etherington joins Becca Szkutak to talk with Professor Esther Rodriguez-Villegas from Acurable..."
        },
        {
            id: 4,
            title: "Rainforest raises $8.5M to help software companies embed financial services, payments",
            image: "https://techcrunch.com/wp-content/uploads/2015/02/shutterstock_128451140.jpg?w=430&h=230&crop=1",
            category: "Fintech",
            author: "Mary Ann Azevedo",
            published_date: "2023-10-01",
            reading_time: "5 minutes",
            content: "In November 2019, Andreessen Horowitz General Partner Angela Strange famously declared that, “Every company will be a fintech company.”"
        },
        {
            id: 5,
            title: "Pow.bio says biomanufacturing is broken and its continuous fermentation tech will fix it",
            image: "https://techcrunch.com/wp-content/uploads/2023/10/Pow-Lab2.jpg?w=430&h=230&crop=1",
            category: "Startups",
            author: "Christine Hall",
            published_date: "2023-10-01",
            reading_time: "5 minutes",
            content: "Pow.bio intends to bring down the costs associated with biomanufacturing by reimagining of fermentation facility operations."
        },
        {
            "id": 17,
            "title": "Make these 5 changes to avoid becoming the next cybersecurity headline",
            "image": "https://techcrunch.com/wp-content/uploads/2023/10/GettyImages-1455969376.jpg?w=430&h=230&crop=1",
            "category": "Work",
            "author": "Jim Broome",
            "authorPic": "author1.jpg",
            "published_date": "2023-10-01",
            "reading_time": "6 minutes",
            "content": "Recent incidents, such as the breach at MGM Resorts, serve as stark reminders of the potential consequences of inadequate security measures.",
            "tags": ["Apps", "Writing"]
        },
        {
            "id": 24,
            "title": "How an AI deepfake ad of MrBeast ended up on TikTok",
            "image": "https://techcrunch.com/wp-content/uploads/2021/12/mrbeast-squid-game-remake-1.jpg?w=430&h=230&crop=1",
            "category": "AI",
            "author": "Sarah Perez",
            "authorPic": "author1.jpg",
            "published_date": "2023-10-01",
            "reading_time": "6 minutes",
            "content": "AI deepfake today unveiled what’s next for the future of its audiobooks service. At an event hosted in its New York offices on Tuesday afternoon, the company announced a new business model where",
            "tags": ["Startups", "Writing"]
        },
        {
            "id": 26,
            "title": "The Xencelabs Pen Display 24 is a terrific alternative to Wacom’s big-screen drawing tablets",
            "image": "https://techcrunch.com/wp-content/uploads/2023/10/Xencelabs-Pen-Display-24-6.jpg?w=430&h=230&crop=1",
            "category": "Gadgets",
            "author": "Sarah Perez",
            "authorPic": "author1.jpg",
            "published_date": "2023-10-01",
            "reading_time": "6 minutes",
            "content": "Xencelabs announced today that users can now add their Xencelabs and Venmo credit or debit cards to their Apple Wallet. With this new integration, you can now make payments in-store, online or on apps using Apple Pay. The company notes that users will continue earning their cashback and rewards.",
            "tags": ["Startups", "Writing"]
        },
        {
            "id": 31,
            "title": "Don’t sweat the valuation headlines, ByteDance is doing great",
            "image": "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1248389907.jpg?w=430&h=230&crop=1",
            "category": "Work",
            "author": "Sarah Perez",
            "authorPic": "author1.jpg",
            "published_date": "2023-10-01",
            "reading_time": "6 minutes",
            "content": "The Arc browser is “finally” launching its AI-powered features under the “Arc Max” moniker. The Browser Company is using a combination of OpenAI’s GPT-3.5 and Anthropi...",
            "tags": ["Startups", "Writing"]
        },
        {
            "id": 32,
            "title": "PlanetScale forks MySQL to add vector support",
            "image": "https://techcrunch.com/wp-content/uploads/2023/10/GettyImages-1244811487.jpg?w=430&h=230&crop=1",
            "category": "Tech",
            "author": "Sarah Perez",
            "authorPic": "author1.jpg",
            "published_date": "2023-10-01",
            "reading_time": "6 minutes",
            "content": "The Arc browser is “finally” launching its AI-powered features under the “Arc Max” moniker. The Browser Company is using a combination of OpenAI’s GPT-3.5 and Anthropi...",
            "tags": ["Startups", "Writing"]
        },
        {
            "id": 35,
            "title": "Qobra raises $10.5 million for its real-time sales compensation tool",
            "image": "https://techcrunch.com/wp-content/uploads/2023/10/Qobra-founders.jpeg?w=430&h=230&crop=1",
            "category": "Tech",
            "author": "Tim De Chant",
            "authorPic": "author1.jpg",
            "published_date": "2023-10-01",
            "reading_time": "6 minutes",
            "content": "The Arc browser is “finally” launching its AI-powered features under the “Arc Max” moniker. The Browser Company is using a combination of OpenAI’s GPT-3.5 and Anthropi...",
            "tags": ["Startups", "Writing"]
        },
        {
            "id": 38,
            "title": "LinkedIn goes big on new AI tools for learning, recruitment, marketing and sales, powered by OpenAI",
            "image": "https://techcrunch.com/wp-content/uploads/2022/11/GettyImages-1244671434-e1669291782949.jpg?w=430&h=230&crop=1",
            "category": "Tech",
            "author": "Carly Page",
            "authorPic": "author1.jpg",
            "published_date": "2023-10-01",
            "reading_time": "6 minutes",
            "content": "The Arc browser is “finally” launching its AI-powered features under the “Arc Max” moniker. The Browser Company is using a combination of OpenAI’s GPT-3.5 and Anthropi...",
            "tags": ["Startups", "Writing"]
        },
        {
            "id": 43,
            "title": "Science lab automation and robotics startup Automata raises $40M",
            "image": "https://techcrunch.com/wp-content/uploads/2023/10/05_LINQ-BENCH_LAB_QUAD_BLUE-2-1536x864-copy-e1696332783997.png?w=430&h=230&crop=1",
            "category": "Health",
            "author": "Mohit Agarwal",
            "authorPic": "author1.jpg",
            "published_date": "2023-10-01",
            "reading_time": "6 minutes",
            "content": "The Arc browser is “finally” launching its AI-powered features under the “Arc Max” moniker. The Browser Company is using a combination of OpenAI’s GPT-3.5 and Anthropi...",
            "tags": ["Startups", "Writing"]
        },
        {
            "id": 44,
            "title": "Meta planning ad-free subscription or tracking ads ‘choice’ in EU, per WSJ — in latest bid to keep snooping",
            "image": "https://techcrunch.com/wp-content/uploads/2021/11/facebook-meta-surveillance-1.jpg?w=430&h=230&crop=1",
            "category": "Security",
            "author": "Natasha Lomas",
            "authorPic": "author1.jpg",
            "published_date": "2023-10-01",
            "reading_time": "6 minutes",
            "content": "The Arc browser is “finally” launching its AI-powered features under the “Arc Max” moniker. The Browser Company is using a combination of OpenAI’s GPT-3.5 and Anthropi...",
            "tags": ["Startups", "Writing"]
        },
    ];

    return (
        <div className="container my-5">
            <section className="hero-section text-white d-flex align-items-center">
                <div className="container text-center">
                    <h1 className="display-4 fw-bold mb-3">Welcome to Blog Zone</h1>
                    <p className="lead">Start your blog today and join a community of writers and readers who are passionate about sharing their stories and ideas.</p>
                    <a href="#latest-posts" className="btn btn-primary mt-4 px-4 py-2">Explore Blogs</a>
                </div>
            </section>

            <section className="py-5">
                <h2 className="mb-4 text-center fw-bolder">Latest Blog Posts</h2>
                <div className="vstack gap-4">
                    {blogs.slice(0, 6).map((blog, index) => (
                        <div
                            className={`blog-horizontal-card d-flex shadow-sm rounded overflow-hidden bg-white ${index % 2 === 1 ? 'flex-row-reverse' : ''
                                }`}
                            key={blog.id}
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="blog-thumb"
                                style={{ width: '200px', height: 'auto', objectFit: 'cover' }}
                            />
                            <div className="p-3 d-flex flex-column justify-content-between flex-grow-1">
                                <div>
                                    <h5 className="mb-2 blog-title">{blog.title}</h5>
                                    <p className="text-muted small mb-2">
                                        {blog.category} | {blog.published_date}
                                    </p>
                                    <p className="mb-0">{blog.content.slice(0, 120)}...</p>
                                </div>
                                <div className="mt-3 d-flex align-items-center justify-content-between">
                                    <small className="text-muted">
                                        <i className="bi bi-clock"></i> {blog.reading_time}
                                    </small>
                                    <small className="text-muted">
                                        <i className="bi bi-person-circle"></i> {blog.author}
                                    </small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* Read More Blogs Button */}
                <div className="text-center mt-5">
                    <a href="/blogs" className="btn  btn-primary px-4">
                        View All Blogs →
                    </a>
                </div>
            </section>
            <section className="py-5 text-center">
                <div className="container">
                    <h2 className="mb-4">Featured Authors</h2>
                    <div className="d-flex justify-content-center flex-wrap gap-4">
                        {authors.map((author) => (
                            <Link
                                key={author.name}
                                to={`/authors/${author.name.replace(/\s+/g, "-")}`}
                                className="text-decoration-none text-dark"
                            >
                                <div className="author-card text-center shadow p-3 rounded hover-shadow">
                                    <img
                                        src={author.avatar}
                                        alt={author.name}
                                        className="rounded-circle mb-2 author-home-avatar"
                                        width={100}
                                        height={100}
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <h6 className="fw-bold">{author.name}</h6>
                                    <p className="text-muted small">{author.bio}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>


            <section className="py-5 bg-dark text-white">
                <div className="container">
                    <h2 className="text-center mb-5">What Our Readers Say</h2>

                    <div id="testimonialCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner text-center">

                            <div className="carousel-item active">
                                <blockquote className="blockquote">
                                    <p className="mb-4">"This blog platform changed how I share ideas."</p>
                                    <footer className="blockquote-footer text-white-50">Sarah, Author</footer>
                                </blockquote>
                            </div>

                            <div className="carousel-item">
                                <blockquote className="blockquote">
                                    <p className="mb-4">"I love how easy it is to find articles I enjoy!"</p>
                                    <footer className="blockquote-footer text-white-50">Ahmed, Reader</footer>
                                </blockquote>
                            </div>

                            <div className="carousel-item">
                                <blockquote className="blockquote">
                                    <p className="mb-4">"A perfect place to explore tech and lifestyle in one spot."</p>
                                    <footer className="blockquote-footer text-white-50">Zainab, Blogger</footer>
                                </blockquote>
                            </div>

                        </div>

                        {/* Carousel Controls */}
                        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );

};

export default HomePage;
