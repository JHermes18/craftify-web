import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { craftingTip } from '@/data/crafting-tip';
import Autoplay from 'embla-carousel-autoplay';
import CraftingTipCard from './CraftingTipCard';

export default function CraftingTipList() {
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
          {craftingTip.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <CraftingTipCard item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
