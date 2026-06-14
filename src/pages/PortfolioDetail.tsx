import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { isAuthenticated } from "@/lib/auth";
import { portfolioItems } from "@/lib/portfolio-data";

const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const item = portfolioItems.find((p) => p.id === id);
  const currentIndex = portfolioItems.findIndex((p) => p.id === id);

  if (!item) {
    return (
      <div className="flex min-h-screen items-center justify-center" style={{ background: "#ffffff" }}>
        <p style={{ color: "#999", fontFamily: "Montserrat, sans-serif" }}>Project not found.</p>
      </div>
    );
  }

  const prevItem = currentIndex > 0 ? portfolioItems[currentIndex - 1] : null;
  const nextItem = currentIndex < portfolioItems.length - 1 ? portfolioItems[currentIndex + 1] : null;

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
            ].map((navItem) => (
              <Link
                key={navItem.label}
                to={navItem.to}
                style={{
                  color: "#ffffff",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                {navItem.label}
              </Link>
            ))}
          </nav>
        </div>
      </motion.header>

      <main className="mx-auto max-w-6xl px-6 py-12">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-10"
        >
          <button
            onClick={() => navigate("/portfolio")}
            style={{
              color: "#00aeef",
              fontFamily: "Montserrat, sans-serif",
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            ← Work
          </button>
        </motion.div>

        {/* Project headline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h1
            style={{
              color: "#2205a6",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px, 5vw, 48px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            {item.client}
          </h1>
          <p
            style={{
              color: "#ff00be",
              fontFamily: "Montserrat, sans-serif",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginTop: 10,
              marginBottom: 0,
            }}
          >
            {item.discipline}
          </p>
        </motion.div>

        {/* Scope paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-12"
          style={{ maxWidth: 640 }}
        >
          <p
            style={{
              color: "#333333",
              fontFamily: "Montserrat, sans-serif",
              fontSize: 14,
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            {item.description}
          </p>
        </motion.div>

        {/* Full-width stacked images */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col gap-4"
        >
          {item.galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              className="w-full overflow-hidden"
              style={{ background: "#e0e0e0" }}
            >
              <img
                src={img}
                alt={`${item.client} — ${i + 1}`}
                loading="lazy"
                className="w-full object-cover"
                style={{ display: "block", maxHeight: 600 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Prev / Next navigation */}
        <div className="mt-16 flex items-center justify-between border-t pt-10" style={{ borderColor: "#e0e0e0" }}>
          <div>
            {prevItem && (
              <button
                onClick={() => navigate(`/portfolio/${prevItem.id}`)}
                style={{
                  color: "#2205a6",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                ← {prevItem.client}
              </button>
            )}
          </div>
          <div>
            {nextItem && (
              <button
                onClick={() => navigate(`/portfolio/${nextItem.id}`)}
                style={{
                  color: "#2205a6",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                {nextItem.client} →
              </button>
            )}
          </div>
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

export default PortfolioDetail;
