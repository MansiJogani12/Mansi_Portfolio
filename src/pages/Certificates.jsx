import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Certificates data - Mansi's Complete Certificate Collection
const CERTS = {
  tech: [
    {
      title: "Problem Solving Through Programming In C (Elite - 62%)",
      org: "NPTEL - IIT Kharagpur",
      date: "Jan-Apr 2025",
      img: "/certs/nptel-c-programming.jpg",
      link: "/certs/nptel-c-programming.jpg",
    },
    {
      title: "Data Structure and Algorithms using Java (Elite - 68%)",
      org: "NPTEL - IIT Kharagpur", 
      date: "Jul-Oct 2025",
      img: "/certs/nptel-dsa-java.jpg",
      link: "/certs/nptel-dsa-java.jpg",
    },
    {
      title: "Foundations of Data Structures and Algorithm Analysis",
      org: "Coursera (Packt)",
      date: "Aug 2025",
      img: "/certs/coursera-dsa-packt.jpg",
      link: "/certs/coursera-dsa-packt.jpg",
    },
    {
      title: "JavaScript Programming Essentials",
      org: "Coursera (IBM)",
      date: "Aug 2025",
      img: "/certs/coursera-js-ibm.jpg",
      link: "/certs/coursera-js-ibm.jpg",
    },
    {
      title: "Introduction to Web Development with HTML, CSS, JavaScript",
      org: "Coursera (IBM)",
      date: "Jul 2025",
      img: "/certs/coursera-web-ibm.jpg",
      link: "/certs/coursera-web-ibm.jpg",
    },
    {
      title: "Web Development with HTML, CSS, JavaScript Essentials",
      org: "Coursera (IBM)",
      date: "Jul 2025", 
      img: "/certs/coursera-web-essentials.jpg",
      link: "/certs/coursera-web-essentials.jpg",
    },
    {
      title: "Introduction to Object-Oriented Programming with Java",
      org: "Coursera (LearnQuest)",
      date: "Aug 2025",
      img: "/certs/coursera-oop-java.jpg",
      link: "/certs/coursera-oop-java.jpg",
    },
    {
      title: "Introduction to Java",
      org: "Coursera (LearnQuest)",
      date: "Jul 2025",
      img: "/certs/coursera-java-intro.jpg",
      link: "/certs/coursera-java-intro.jpg",
    },
    {
      title: "Object-Oriented Hierarchies in Java",
      org: "Coursera (LearnQuest)",
      date: "Sep 2025",
      img: "/certs/coursera-oop-hierarchies.jpg",
      link: "/certs/coursera-oop-hierarchies.jpg",
    },
    {
      title: "Java Class Library",
      org: "Coursera (LearnQuest)",
      date: "Sep 2025",
      img: "/certs/coursera-java-class-library.jpg",
      link: " /certs/coursera-java-class-library.jpg",
    },
    {
      title: "Core Java Specialization (4 Courses)",
      org: "Coursera (LearnQuest)",
      date: "Sep 2025",
      img: "/certs/coursera-core-java-specialization.jpg",
      link: "/certs/coursera-core-java-specialization.jpg",
    },
    {
      title: "Complete Google Workspace (G Suite) - Beginner to Advanced",
      org: "Udemy",
      date: "Aug 2024",
      img: "/certs/udemy-google-workspace.jpg",
      link: "/certs/udemy-google-workspace.jpg",
    },
    {
      title: "C for Beginners",
      org: "Great Learning Academy",
      date: "Aug 2024",
      img: "/certs/great-learning-c.jpg",
      link: "/certs/great-learning-c.jpg",
    },
  ],
  other: [
    {
      title: "Bharatiya Antariksh Hackathon 2025",
      org: "ISRO - Government of India",
      date: "2025",
      img: "/certs/bharatiya-antariksh-hackathon.jpg",
      link: "/certs/bharatiya-antariksh-hackathon.jpg",
    },
    {
      title: "National Space Hackathon 2025 (Team ThinkTankX)",
      org: "IIT Delhi - Unstop",
      date: "2025",
      img: "/certs/national-space-hackathon.jpg",
      link: "/certs/national-space-hackathon.jpg",
    },
    {
      title: "DataQuest Hackathon 2025 (Team ThinkTankX)",
      org: "MSBC Group & CHARUSAT University",
      date: "September 20, 2025",
      img: "/certs/dataquest-hackathon.jpg",
      link: "/certs/dataquest-hackathon.jpg",
    },
    {
      title: "AWS Roots - Fundamentals of AWS Cloud",
      org: "AWS Cloud Clubs CHARUSAT",
      date: "July 21, 2025",
      img: "/certs/aws-roots-charusat.jpg",
      link: "/certs/aws-roots-charusat.jpg",
    },
    {
      title: "AWS Students Community Day",
      org: "AWS Cloud Clubs CHARUSAT",
      date: "September 27, 2024",
      img: "/certs/aws-community-day.jpg",
      link: "/certs/aws-community-day.jpg",
    },
    {
      title: "CODER'S ARCADE 2.0 University Level Coding Contest",
      org: "CHARUSAT - Multiple Departments",
      date: "April 22-23, 2025",
      img: "/certs/coders-arcade-contest.jpg",
      link: "/certs/coders-arcade-contest.jpg",
    },
    {
      title: "C-Quest (Technical Treasure Hunt)",
      org: "CHARUSAT - CSE Department, CSPIT",
      date: "April 1, 2025",
      img: "/certs/c-quest-treasure-hunt.jpg",
      link: "/certs/c-quest-treasure-hunt.jpg",
    },
    {
      title: "C-Quest (C Programming Quiz/Hackathon)",
      org: "CHARUSAT - CSE Department, CSPIT",
      date: "March 24, 2025",
      img: "/certs/c-quest-quiz.jpg",
      link: "/certs/c-quest-quiz.jpg",
    },
    {
      title: "ChatGPT & AI Tools Workshop",
      org: "be10X",
      date: "September 15, 2024",
      img: "/certs/chatgpt-ai-workshop.jpg",
      link: "/certs/chatgpt-ai-workshop.jpg",
    },
    {
      title: "The Creator's Hub - Graphic Design & Cinematography Workshop",
      org: "AIESEC in VVN & Kalapurnam Institute",
      date: "April 8-9, 2024",
      img: "/certs/aiesec-creators-hub.jpg",
      link: "/certs/aiesec-creators-hub.jpg",
    },
    {
      title: "International Day of Yoga - Online Quiz",
      org: "NSS-P. D. Patel Institute, CHARUSAT",
      date: "June 16, 2025",
      img: "/certs/yoga-day-quiz.jpg",
      link: "/certs/yoga-day-quiz.jpg",
    },
    {
      title: "25th Kargil Vijay Diwas Celebration",
      org: "CHARUSAT - NSS & NCC",
      date: "July 26, 2024",
      img: "/certs/kargil-vijay-diwas.jpg",
      link: "/certs/kargil-vijay-diwas.jpg",
    },
    {
      title: "Smile Fiesta 2.0 - Volunteer",
      org: "NSS Unit CSPIT CE, CHARUSAT",
      date: "January 2, 2025",
      img: "/certs/smile-fiesta-volunteer.jpg",
      link: "/certs/smile-fiesta-volunteer.jpg",
    },
    {
      title: "Teacher's Day Celebration - Volunteer Service",
      org: "CHARUSAT - CSPIT",
      date: "September 4-5, 2024", 
      img: "/certs/teachers-day-volunteer.jpg",
      link: "/certs/teachers-day-volunteer.jpg",
    },
    {
      title: "Garba Workshop",
      org: "CHARUSAT Creative Crew (CCC)",
      date: "August 22, 2025",
      img: "/certs/garba-workshop.jpg",
      link: "/certs/garba-workshop.jpg",
    },
  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div className="card" style={{ background: "#111", borderRadius: 12, padding: 24 }}>
        <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: 4 }}>Certificates 🏅</h2>
        <p className="lead" style={{ color: "#aaa" }}>
          Explore my certifications — technical & others.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          {["tech", "other"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={tab === t ? "tab active" : "tab"}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: tab === t ? "#007bff" : "#333",
                color: "#fff",
                fontWeight: 500,
                transition: "0.3s",
              }}
            >
              {t === "tech" ? "Tech" : "Others"}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div
          className="certs-grid"
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence mode="wait">
            {CERTS[tab].map((c, idx) => (
              <motion.div
                key={c.title}
                className="cert card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)",
                }}
                style={{
                  background: "#1a1a1a",
                  borderRadius: 12,
                  padding: 16,
                  color: "#fff",
                }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: 160,
                    borderRadius: 10,
                    objectFit: "cover",
                    marginBottom: 12,
                  }}
                />
                <strong style={{ fontSize: 16 }}>{c.title}</strong>
                <div className="muted" style={{ fontSize: 13, color: "#bbb" }}>
                  {c.org} • {c.date}
                </div>

                <div style={{ marginTop: 12 }}>
                  <button
                    className="btn"
                    onClick={() => setSelectedCert(c)}
                    style={{
                      background: "#007bff",
                      border: "none",
                      color: "white",
                      borderRadius: 6,
                      padding: "6px 14px",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              src={selectedCert.img}
              alt={selectedCert.title}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                maxWidth: "90%",
                maxHeight: "85%",
                borderRadius: 10,
                boxShadow: "0 0 25px rgba(255,255,255,0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
