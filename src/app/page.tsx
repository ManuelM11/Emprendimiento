import ProductListSec from "@/components/common/ProductListSec";
import Brands from "@/components/homepage/Brands";
import DressStyle from "@/components/homepage/DressStyle";
import Header from "@/components/homepage/Header";
import Reviews from "@/components/homepage/Reviews";
import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";

export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: "OVERSIZE STYLE",
    srcUrl: "/images/style1.jfif",
    gallery: ["/images/style1.jfif"],
    price: 120,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 2,
    title: "Polera Compression Manga Corta",
    srcUrl: "/images/compression1.jfif",
    gallery: ["/images/compression1.jfif", "/images/unnamed.jpg"],
    price: 260,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 3.5,
  },
  {
    id: 3,
    title: "Polera Compression Manga Larga",
    srcUrl: "/images/compression2.jfif",
    gallery: ["/images/compression2.jfif", "/images/unnamed.jpg"],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    srcUrl: "/images/pic4.png",
    gallery: ["/images/pic4.png", "/images/pic10.png", "/images/pic11.png"],
    price: 160,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 4.5,
  },
];

export const topSellingData: Product[] = [
  {
    id: 5,
    title: "OVERSIZE STYLE",
    srcUrl: "/images/style1.jfif",
    gallery: ["/images/style1.jfif"],
    price: 232,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 5.0,
  },
  {
    id: 6,
    title: "Polera Compression Manga Corta",
    srcUrl: "/images/compression1.jfif",
    gallery: ["/images/compression1.jfif", "/images/unnamed.jpg"],
    price: 145,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.0,
  },
  {
    id: 7,
    title: "Polera Compression Manga Larga",
    srcUrl: "/images/compression2.jfif",
    gallery: ["/images/compression2.jfif", "/images/unnamed.jpg"],
    price: 80,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.0,
  },
  {
    id: 8,
    title: "OVERSIZE STYLE",
    srcUrl: "/images/style1.jfif",
    gallery: ["/images/style1.jfif"],
    price: 210,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
];

export const relatedProductData: Product[] = [
  {
    id: 12,
    title: "Polo with Contrast Trims",
    srcUrl: "/images/pic12.png",
    gallery: ["/images/pic12.png", "/images/pic10.png", "/images/pic11.png"],
    price: 242,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 4.0,
  },
  {
    id: 13,
    title: "Gradient Graphic T-shirt",
    srcUrl: "/images/pic13.png",
    gallery: ["/images/pic13.png", "/images/pic10.png", "/images/pic11.png"],
    price: 145,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.5,
  },
  {
    id: 14,
    title: "Polo with Tipping Details",
    srcUrl: "/images/pic14.png",
    gallery: ["/images/pic14.png"],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 15,
    title: "Black Striped T-shirt",
    srcUrl: "/images/pic15.png",
    gallery: ["/images/pic15.png"],
    price: 150,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 5.0,
  },
];

export const reviewsData: Review[] = [
  {
    id: 1,
    user: "Alex K.",
    content:
      "La polera de compression es increible. Se ajusta perfecto al cuerpo y me da soporte total en mis entrenamientos de pesas. La calidad del material es de otro nivel.",
    rating: 5,
    date: "August 14, 2023",
  },
  {
    id: 2,
    user: "Sarah M.",
    content:
      "Llevo un mes entrenando con la ropa de House Owners y la diferencia se nota. La tela transpira super bien y no pierde forma despues de lavarla. 100% recomendada.",
    rating: 5,
    date: "August 15, 2023",
  },
  {
    id: 3,
    user: "Ethan R.",
    content:
      "La polera oversize es perfecta para mis sesiones de gym. Comoda, fresca y con un estilo que se ve brutal. Ya me compre tres colores diferentes.",
    rating: 5,
    date: "August 16, 2023",
  },
  {
    id: 4,
    user: "Olivia P.",
    content:
      "Buscaba ropa de gym que fuera funcional y que se viera bien. House Owners tiene exactamente eso. La compression manga larga es mi favorita para cardio.",
    rating: 5,
    date: "August 17, 2023",
  },
  {
    id: 5,
    user: "Liam K.",
    content:
      "Your House Your Rules no es solo un slogan, se siente en la calidad de cada prenda. Entreno crossfit y la ropa aguanta todo. Mejor marca de ropa gym que he probado.",
    rating: 5,
    date: "August 18, 2023",
  },
  {
    id: 6,
    user: "Samantha D.",
    content:
      "Los shorts son super comodos para entrenar pierna. El material es ligero, no se sube y tiene buen rango de movimiento. Ya soy clienta fija de House Owners.",
    rating: 5,
    date: "August 19, 2023",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <Brands />
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec
          title="NOVEDADES"
          data={newArrivalsData}
          viewAllLink="/shop#new-arrivals"
        />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec
            title="MAS VENDIDOS"
            data={topSellingData}
            viewAllLink="/shop#top-selling"
          />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <DressStyle />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}
