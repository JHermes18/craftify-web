import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { testimonials } from '@/data/testimonial';
import Autoplay from 'embla-carousel-autoplay';
import TestimonialCard from './TestimonialCard';

export default function TestimonialList() {
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
          {testimonials.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <TestimonialCard item={item} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
