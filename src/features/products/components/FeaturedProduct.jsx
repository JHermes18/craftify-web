import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { featuredProjects } from '@/data/project';
import Autoplay from 'embla-carousel-autoplay';
import ProductCard from './ProductCard';

export default function FeaturedProduct() {
  return (
    <div className="py-4">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnMouseEnter: true,
            stopOnFocusIn: true,
            stopOnInteraction: false,
          }),
        ]}
        opts={{ align: 'start', loop: true }}
        className="w-full"
      >
        <CarouselContent>
          {featuredProjects.map((item, index) => (
            <CarouselItem
              key={item.id || index}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <ProductCard item={item} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
