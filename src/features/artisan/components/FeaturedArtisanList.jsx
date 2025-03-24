import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { featuredArtisans } from '@/data/artisan';
import Autoplay from 'embla-carousel-autoplay';
import ArtisanCard from './ArtisanCard';

export default function FeaturedArtisanList() {
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
          {featuredArtisans.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <ArtisanCard item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
