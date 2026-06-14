import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { isAuthenticated, logout } from "@/lib/auth";
import { portfolioItems } from "@/lib/portfolio-data";

const Portfolio = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen" style={{ background: "#ffffff" }}>

      {/* Nav */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="sticky top-0 z-40"
        style={{ background: "#2205a6", borderBottom: "none" }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <span
            style={{
              color: "#fdf662",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: 14,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Less is Moore
          </span>
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
            <button
              onClick={handleLogout}
              style={{
                color: "#ffffff",
                fontFamily: "Montserrat, sans-serif",
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                cursor: "pointer",
                opacity: 0.5,
                padding: 0,
              }}
            >
              Log out
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Hero strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl px-6 py-14"
      >
        <p
          style={{
            color: "#2205a6",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(22px, 4vw, 40px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          No excess. Just what works.
        </p>
      </motion.div>

      {/* Work grid */}
      <main className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group cursor-pointer"
              onClick={() => navigate(`/portfolio/${item.id}`)}
            >
              {/* Thumbnail */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4/3", background: "#e0e0e0" }}
              >
                <img
                  src={item.image}
                  alt={item.client}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "rgba(34, 5, 166, 0.55)" }}
                >
                  <span
                    style={{
                      color: "#fdf662",
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 700,
                      fontSize: 11,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                    }}
                  >
                    View Project
                  </span>
                </div>
              </div>
              {/* Client name below thumbnail */}
              <div className="pt-3">
                <span
                  style={{
                    color: "#333333",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.client}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{ background: "#333333" }}
        className="px-6 py-6"
      >
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

export default Portfolio;
