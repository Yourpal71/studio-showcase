import bgImage004 from "@/assets/background-image-004.webp";
import bgImage005 from "@/assets/background-image-005.webp";

export interface PortfolioItem {
  id: string;
  client: string;
  discipline: string;
  description: string;
  image: string;
  galleryImages: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    client: "Amrize",
    discipline: "Branding",
    description: "Form follows function. Great brand systems are built on disciplined execution. I translated finished designs into production-ready assets—prepping files for print and digital delivery, managing color across physical and screen-based applications, coordinating with vendors and developers to ensure every touchpoint reflected the same essential clarity.",
    image: bgImage004,
    galleryImages: [
      bgImage004,
      bgImage005,
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop",
    ],
  },
  {
    id: "2",
    client: "Mono Magazine",
    discipline: "Editorial · Print",
    description: "Art direction and layout design for a quarterly print publication focused on contemporary architecture. Managing all pre-press production, color proofing, and vendor coordination from first proof to final delivery.",
    image: bgImage005,
    galleryImages: [
      bgImage005,
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&h=800&fit=crop",
    ],
  },
  {
    id: "3",
    client: "Kōri Skincare",
    discipline: "Packaging",
    description: "Minimalist packaging design for a premium Japanese-inspired skincare line. Managed embossed foil production specs, substrate selection, and color matching across multiple SKUs for a cohesive shelf presence.",
    image: "https://images.unsplash.com/photo-1586075010882-3a0b4f36db22?w=800&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1586075010882-3a0b4f36db22?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=800&fit=crop",
    ],
  },
  {
    id: "4",
    client: "Form & Void",
    discipline: "Signage · Environmental",
    description: "Large-format environmental graphics and wayfinding system for a contemporary art exhibition spanning three floors. Coordinated print production, installation specs, and substrate approvals with the venue team.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=800&fit=crop",
    ],
  },
  {
    id: "5",
    client: "Strøm Festival",
    discipline: "Digital · Advertising",
    description: "Multi-platform digital campaign assets including social media, web banners, and motion graphics. Built a scalable production system to adapt a single creative concept across 40+ format variations.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&h=800&fit=crop",
    ],
  },
  {
    id: "6",
    client: "Voss Foundation",
    discipline: "Print · Editorial",
    description: "Data-driven annual report combining infographics with documentary photography. Managed all production from design handoff through print delivery, including custom chart builds and photo retouching.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop",
    ],
  },
];
