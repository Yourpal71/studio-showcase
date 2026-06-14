import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { isAuthenticated } from "@/lib/auth";

const skills = [
  "Print",
  "Digital",
  "Color Management",
  "Retouching",
  "Vector",
  "Brand Systems",
  "Pre-press",
  "Omnichannel Production",
  "Adobe Creative Cloud",
  "Figma",
  "DAM / CMS",
  "Vendor Management",
];

const About = () => {
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
          className="mb-12"
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
            20+ years.
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
            No filler.
          </h2>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-12"
          style={{ maxWidth: 680 }}
        >
          <p
            style={{
              color: "#333333",
              fontFamily: "Montserrat, sans-serif",
              fontSize: 15,
              lineHeight: 1.85,
              margin: 0,
            }}
          >
            I'm Donald Moore — a production specialist with over two decades of experience on both the client and vendor sides of the industry. My work lives at the intersection of design and execution: taking finished creative and making sure it arrives in the world exactly as intended, across every format and medium.
          </p>
          <p
            style={{
              color: "#333333",
              fontFamily: "Montserrat, sans-serif",
              fontSize: 15,
              lineHeight: 1.85,
              margin: "1.5rem 0 0",
            }}
          >
            I'm an Adobe Creative Cloud expert with deep experience in print production, digital advertising, brand systems, packaging, signage, and omnichannel campaigns. I build workflows that eliminate waste, reduce revision cycles, and deliver precision at scale — because great creative deserves equally great production.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-14"
        >
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                style={{
                  background: "#f5f5f5",
                  border: "1px solid #e0e0e0",
                  color: "#333333",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "6px 14px",
                  borderRadius: 20,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link
            to="/contact"
            style={{
              display: "inline-block",
              background: "#2205a6",
              color: "#fdf662",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "14px 32px",
              borderRadius: 2,
            }}
          >
            Get in touch →
          </Link>
        </motion.div>
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

export default About;
