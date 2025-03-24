import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FeaturedArtisanList from '@/features/artisan/components/FeaturedArtisanList';
import FeaturedProduct from '@/features/products/components/FeaturedProduct';
import SearchProduct from '@/features/products/components/SearchProduct';
import TestimonialList from '@/features/testimonial/components/TestimonialList';
import CraftingTipList from '@/features/tips/components/CraftingTipsList';

export default function HomePage() {
  return (
    <div>
      <section
        id="hero"
        className="flex min-h-[30rem] flex-col justify-center rounded-lg bg-gradient-to-r from-zinc-800 to-zinc-900 p-4 text-white"
      >
        <h1 className="block text-4xl font-bold md:text-5xl">
          Unleash Your Creativity
        </h1>
        <p className="my-5 max-w-xl text-lg">
          Discover handcrafted treasures, connect with skilled artisans, and
          bring your creative vision to life. Craftify is your gateway to
          unique, handmade artistry.
        </p>
        <SearchProduct />
      </section>

      <section id="featured-artisans" className="mt-[4rem]">
        <h2 className="text-xl font-semibold">Featured Artisans</h2>
        <p className="text-muted-foreground mt-1">
          Showcases skilled artisans with a carousel-style display, allowing
          users to browse and appreciate their craft.
        </p>
        <FeaturedArtisanList />
      </section>

      <section id="featured-products" className="mt-[4rem]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">Featured Products</h2>
            <p className="text-muted-foreground mt-1">
              Highlights the best handcrafted items, helping users discover
              trending products.
            </p>
          </div>
          <Link to="/products">
            <Button variant="outline" effect="ringHover">
              View More
            </Button>
          </Link>
        </div>
        <FeaturedProduct />
      </section>

      <section id="testimonials" className="mt-[4rem]">
        <h2 className="text-xl font-semibold">Testimonials</h2>
        <p className="text-muted-foreground mt-1">
          Real customer reviews that build trust and showcase the impact of
          Craftify's artisans.
        </p>
        <TestimonialList />
      </section>

      <section id="crafting-tips" className="mt-[4rem]">
        <h2 className="text-xl font-semibold">Crafting Tips & Inspirations</h2>
        <p className="text-muted-foreground mt-1">
          Provides valuable insights and techniques to inspire both beginner and
          expert crafters.
        </p>
        <CraftingTipList />
      </section>
    </div>
  );
}
