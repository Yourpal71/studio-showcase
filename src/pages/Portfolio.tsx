import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { isAuthenticated, logout } from "@/lib/auth";
import { portfolioItems } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const INITIAL_COUNT = 2;

const Portfolio = () => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const visibleItems = portfolioItems.slice(0, visibleCount);
  const hasMore = visibleCount < portfolioItems.length;

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm"
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <span className="text-sm font-light tracking-[0.15em] uppercase text-foreground">
            Portfolio
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="text-muted-foreground hover:text-foreground text-xs tracking-wide uppercase"
          >
            <LogOut className="mr-1.5 h-3.5 w-3.5" />
            Logout
          </Button>
        </div>
      </motion.header>

      {/* Grid */}
      <main className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {visibleItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group cursor-pointer overflow-hidden rounded-sm"
              onClick={() => navigate(`/portfolio/${item.id}`)}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-sm font-light tracking-[0.15em] uppercase text-background">
                    {item.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-center"
          >
            <Button
              variant="outline"
              onClick={() => setVisibleCount(portfolioItems.length)}
              className="h-11 px-8 text-xs tracking-[0.15em] uppercase border-border text-muted-foreground hover:text-foreground"
            >
              Load More
            </Button>
          </motion.div>
        )}
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4 md:p-10"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] max-w-5xl w-full overflow-hidden rounded-sm bg-background"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="flex flex-col md:flex-row">
                <div className="aspect-[4/3] w-full md:w-2/3 bg-muted">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:w-1/3">
                  <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                    {selectedItem.category}
                  </span>
                  <h2 className="mt-2 text-lg font-light tracking-wide text-foreground">
                    {selectedItem.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {selectedItem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
