import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { isAuthenticated } from "@/lib/auth";

const Contact = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#ffffff" }}>

      {/* Nav */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="sticky top-0 z-40"
        style={{ background: "#2205a6" }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link
            to="/portfolio"
            style={{
              color: "#fdf662",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: 14,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Less is Moore
          </Link>
          <nav className="flex items-center gap-8">
            {[
              { label: "Work", to: "/portfolio" },
              { label: "About", to: "/about" },
              { label: "Contact", to: "/contact" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                style={{
                  color: "#ffffff",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </motion.header>

      <main className="mx-auto max-w-6xl px-6 py-16">

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-14"
        >
          <h1
            style={{
              color: "#2205a6",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(32px, 6vw, 60px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Let's work
          </h1>
          <h2
            style={{
              color: "#ff00be",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(32px, 6vw, 60px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            together.
          </h2>
        </motion.div>

        <div style={{ maxWidth: 540 }}>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-6"
          >
            <a
              href="mailto:donmoore_@mac.com"
              style={{
                display: "block",
                border: "1.5px solid #00aeef",
                borderRadius: 2,
                padding: "20px 24px",
                textDecoration: "none",
                background: "#f5f5f5",
              }}
            >
              <div
                style={{
                  color: "#2205a6",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(14px, 2.5vw, 18px)",
                  letterSpacing: "0.02em",
                }}
              >
                donmoore_@mac.com
              </div>
              <div
                style={{
                  color: "#999999",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginTop: 6,
                }}
              >
                Click to email
              </div>
            </a>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mb-6"
          >
            <a
              href="https://www.linkedin.com/in/donald-m-39463b68"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                border: "1.5px solid #e0e0e0",
                borderRadius: 2,
                padding: "20px 24px",
                textDecoration: "none",
                background: "#f5f5f5",
              }}
            >
              <div
                style={{
                  color: "#00aeef",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                LinkedIn Profile →
              </div>
            </a>
          </motion.div>

          {/* Availability note */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div
              style={{
                background: "#fdf662",
                border: "1.5px solid #2205a6",
                borderRadius: 2,
                padding: "14px 24px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  color: "#2205a6",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  fontSize: 10,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Currently available for retainer work
              </span>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: "#333333" }} className="mt-16 px-6 py-6">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <span
            style={{
              color: "#999999",
              fontFamily: "Montserrat, sans-serif",
              fontSize: 10,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            © Less is Moore
          </span>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/donald-m-39463b68"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#00aeef",
                fontFamily: "Montserrat, sans-serif",
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              LinkedIn
            </a>
            <a
              href="mailto:donmoore_@mac.com"
              style={{
                color: "#00aeef",
                fontFamily: "Montserrat, sans-serif",
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
