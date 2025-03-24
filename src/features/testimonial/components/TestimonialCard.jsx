import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { StarRating } from 'react-flexible-star-rating';
import Placeholder from '@/assets/img/placeholder/profile-placeholder.png';

export default function TestimonialCard({ item }) {
  return (
    <Card className="min-h-[10rem] border-none bg-gray-50 shadow-none">
      <CardContent>
        <div className="mb-4 flex items-center gap-2">
          <Avatar>
            <AvatarImage
              src={item.img || Placeholder}
              alt={`Img of ${item.name}`}
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="w-48 truncate text-lg font-semibold">
              {item?.name}
            </h3>
            <StarRating
              starsLength={5}
              dimension={5}
              initialRating={item.rate || 0}
              isReadOnly={true}
            />
          </div>
        </div>
        <p className="text-muted-foreground line-clamp-4">{item.review}</p>
      </CardContent>
    </Card>
  );
}
