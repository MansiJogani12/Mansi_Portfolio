import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import "./blog.css";

export default function Blog() {
  const defaultPosts = [
    {
      id: 1,
      title: "My Journey into Frontend Development",
      text: "Starting with HTML and CSS basics, I've grown to love the magic of creating interactive user interfaces. React has opened up a whole new world of component-based thinking that makes development both efficient and enjoyable.",
    },
    {
      id: 2,
      title: "Why Responsive Design Matters",
      text: "In today's mobile-first world, ensuring websites work seamlessly across all devices isn't just nice to have — it's essential. Every pixel should adapt gracefully from desktop to mobile.",
    },
    {
      id: 3,
      title: "Learning Programming: C++ to JavaScript",
      text: "My programming journey began with C and C++, teaching me strong fundamentals. Transitioning to JavaScript opened up web development possibilities, and now I'm exploring the React ecosystem with enthusiasm.",
    },
    {
      id: 4,
      title: "The Power of Version Control",
      text: "Git has been a game-changer in my development workflow. Understanding branches, commits, and collaboration through GitHub has made me a more organized and confident developer.",
    },
    {
      id: 5,
      title: "UI/UX: More Than Just Pretty Interfaces",
      text: "Good design isn't just about aesthetics — it's about user experience. Every button placement, color choice, and animation should serve a purpose in guiding users toward their goals.",
    },
    {
      id: 6,
      title: "Building My First Portfolio",
      text: "Creating this portfolio taught me so much about putting together a complete web application. From design planning to deployment, every step was a learning experience that strengthened my frontend skills.",
    },
    {
      id: 7,
      title: "The Importance of Clean Code",
      text: "Writing maintainable code is an art. Proper naming conventions, consistent formatting, and clear structure make the difference between code that works and code that lasts.",
    },
    {
      id: 8,
      title: "My Dev Tools Arsenal",
      text: "VS Code with the right extensions, browser dev tools, and Canva for design mockups — having the right tools makes development smoother and more productive.",
    },
  ];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem("mj_blog_votes") || "{}");
    const votedByUser = JSON.parse(localStorage.getItem("mj_blog_voted") || "{}");
    const withVotes = defaultPosts.map((p) => ({
      ...p,
      agree: savedVotes[p.id]?.agree || 0,
      disagree: savedVotes[p.id]?.disagree || 0,
      userVote: votedByUser[p.id] || null,
    }));
    setPosts(withVotes);
  }, []);

  function vote(id, type) {
    const votedByUser = JSON.parse(localStorage.getItem("mj_blog_voted") || "{}");
    if (votedByUser[id]) return;

    const next = posts.map((p) =>
      p.id === id ? { ...p, [type]: p[type] + 1, userVote: type } : p
    );
    setPosts(next);

    const votes = Object.fromEntries(
      next.map((p) => [p.id, { agree: p.agree, disagree: p.disagree }])
    );
    localStorage.setItem("mj_blog_votes", JSON.stringify(votes));
    localStorage.setItem(
      "mj_blog_voted",
      JSON.stringify({ ...votedByUser, [id]: type })
    );
  }

  return (
    <motion.section
      className="blog-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="blog-title"
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        📝 My Blog
      </motion.h2>
      <p className="blog-sub">
        Personal thoughts, experiences, and reflections — feel free to react!
      </p>

      <div className="blog-grid">
        {posts.map((p, idx) => (
          <motion.div
            key={p.id}
            className="blog-post"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 20px rgba(255,255,255,0.1)",
            }}
          >
            <h3 className="post-title">{p.title}</h3>
            <p className="post-text">{p.text}</p>

            <div className="vote-container">
              <motion.button
                onClick={() => vote(p.id, "agree")}
                disabled={!!p.userVote}
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.15 }}
                className={`vote-btn-circle agree ${
                  p.userVote === "agree" ? "active" : ""
                }`}
              >
                <ThumbsUp size={20} />
                <motion.span
                  key={p.agree}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="vote-count"
                >
                  {p.agree}
                </motion.span>
              </motion.button>

              <motion.button
                onClick={() => vote(p.id, "disagree")}
                disabled={!!p.userVote}
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.15 }}
                className={`vote-btn-circle disagree ${
                  p.userVote === "disagree" ? "active" : ""
                }`}
              >
                <ThumbsDown size={20} />
                <motion.span
                  key={p.disagree}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="vote-count"
                >
                  {p.disagree}
                </motion.span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
