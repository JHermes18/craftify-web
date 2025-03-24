import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { featuredProjects } from '@/data/project';
import { Heart } from 'lucide-react'
import { confettiEffects } from '@/utils/confetti';
import { toast } from 'sonner';
import Placeholder from '@/assets/img/placeholder/placeholder.png';

export default function ViewProductPage() {
  const { id } = useParams();
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const product = featuredProjects.find((item) => String(item.id) === id);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (!product) {
    return <div className="text-center">Product not found</div>;
  }

  const handleBuy = () => {
    if (!confirm(`Are you want to buy ${product.title}?`)) return;
    toast(`You have bought this ${product.title} successfully!`);
    confettiEffects();
  };

  const addToCart = () => {
    if (!confirm(`Are you want to add ${product.title} to your cart?`)) return;
    toast(`You have added the ${product.title} to your card!`);
  };

  return (
    <div className="mb-[4rem] grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="mb-4">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {product.img.map((image, index) => (
              <CarouselItem key={index}>
                <img
                  src={image || Placeholder}
                  alt={`Product image ${index + 1}`}
                  className="h-auto w-full rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-[-3rem] left-32 z-50 sm:left-50">
            <CarouselPrevious />
            <div className="text-muted-foreground py-2 text-center text-sm">
              Slide {current} of {count}
            </div>
            <CarouselNext />
          </div>
        </Carousel>
      </div>
      <div className="p-6">
        {product.tags ? <Badge>{product.tags}</Badge> : null}
        <h2 className="mt-2 text-3xl font-semibold">{product.title}</h2>
        <p className="text-muted-foreground mt-2">{product.description}</p>
        <p className="mt-4 text-lg font-bold">
          ₱{product.price.toLocaleString('en-PH')}
        </p>
        <p className="mt-2 text-sm">By {product.createdBy}</p>
        <p className="text-muted-foreground mt-2 text-sm">{product.location}</p>
        <div className="mt-4 flex h-6 items-center gap-2">
          <Button effect="ringHover" onClick={handleBuy}>
            Buy Now
          </Button>
          <Button variant="outline" effect="ringHover" onClick={addToCart}>
            Add to Cart
          </Button>
          <Separator orientation="vertical" />
          <Button size="icon" variant="outline" effect="ringHover">
            <Heart />
          </Button>
        </div>
      </div>
    </div>
  );
}
