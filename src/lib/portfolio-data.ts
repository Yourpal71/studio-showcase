import editorialAbstract from "@/assets/editorial-abstract.jpg";

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Brand Identity — Lippincott",
    description: "Complete visual identity system including logo, stationery, and brand guidelines for a Scandinavian design studio.",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
  },
  {
    id: "2",
    title: "Editorial Layout — Mono Magazine",
    description: "Art direction and layout design for a quarterly print publication focused on contemporary architecture.",
    category: "Print",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&h=600&fit=crop",
  },
  {
    id: "3",
    title: "Packaging — Kōri Skincare",
    description: "Minimalist packaging design for a premium Japanese-inspired skincare line with embossed foil details.",
    category: "Packaging",
    image: "https://images.unsplash.com/photo-1586075010882-3a0b4f36db22?w=800&h=600&fit=crop",
  },
  {
    id: "4",
    title: "Exhibition Graphics — Form & Void",
    description: "Large-format environmental graphics and wayfinding system for a contemporary art exhibition.",
    category: "Environmental",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  },
  {
    id: "5",
    title: "Digital Campaign — Strøm Festival",
    description: "Multi-platform digital campaign assets including social media, web banners, and motion graphics.",
    category: "Digital",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop",
  },
  {
    id: "6",
    title: "Book Design — Silent Architecture",
    description: "Cover and interior layout for a coffee table book exploring brutalist architecture across Europe.",
    category: "Print",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop",
  },
];
