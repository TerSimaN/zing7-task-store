import Benefits from "@/components/sections/Benefits";
import BestSellerProducts from "@/components/sections/BestSellerProducts";
import Blog from "@/components/sections/Blog";
import Brands from "@/components/sections/Brands";
import Category from "@/components/sections/Category";
import Hero from "@/components/sections/Hero";
import ProductList from "@/components/sections/ProductList";
import PromoBanner from "@/components/sections/PromoBanner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Benefits />
      <BestSellerProducts />
      <PromoBanner />
      <Category />
      <ProductList />
      <div className="container border border-store-gray-100 mt-5"></div>
      <Blog />
      <Brands />
    </main>
  );
}
