import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { isAuthenticated } from "@/lib/auth";
import { portfolioItems } from "@/lib/portfolio-data";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const item = portfolioItems.find((p) => p.id === id);
  const currentIndex = portfolioItems.findIndex((p) => p.id === id);

  if (!item) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground">Project not found.</p>
      </div>
    );
  }

  const prevItem = currentIndex > 0 ? portfolioItems[currentIndex - 1] : null;
  const nextItem =
    currentIndex < portfolioItems.length - 1
      ? portfolioItems[currentIndex + 1]
      : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Back link */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm"
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center px-6">
          <button
            onClick={() => navigate("/portfolio")}
            className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back
          </button>
        </div>
      </motion.header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <h1 className="text-2xl font-semibold tracking-wide text-foreground">
            {item.title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        </motion.div>

        {/* 3-column 2-row grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {item.galleryImages.slice(0, 6).map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="aspect-square overflow-hidden rounded-sm bg-muted"
            >
              <img
                src={img}
                alt={`${item.title} — ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Prev / Next navigation */}
        <div className="mt-16 flex items-center justify-center gap-6">
          <button
            disabled={!prevItem}
            onClick={() => prevItem && navigate(`/portfolio/${prevItem.id}`)}
            className="p-2 text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            disabled={!nextItem}
            onClick={() => nextItem && navigate(`/portfolio/${nextItem.id}`)}
            className="p-2 text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default PortfolioDetail;
