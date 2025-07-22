import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import BlogsPage from "./pages/BlogsPage"
import SingleBlogPage from "./pages/SingleBlogPage"
import AuthorPage from "./pages/AuthorPage"
import CategoriesPage from "./pages/CategoriesPage"
import ContactPage from "./pages/ContactPage.jsx"
import NotFoundPage from "./pages/NotFoundPage"

import Header from './components/Header'
import Footer from './components/Footer'
function App() {
    return (
        <>
            <Header />
            <main style={{ padding: '20px' }}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/blogs" element={<BlogsPage />} />
                    <Route path="/blogs/:id" element={<SingleBlogPage />} />
                    <Route path="/authors" element={<AuthorPage />} />
                    <Route path="/categories" element={<CategoriesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}


export default App