import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Placeholder from '@/assets/img/placeholder/placeholder.png';
import { Link } from 'react-router-dom';

export default function ProductCard({ item }) {
  return (
    <Link to={`/products/${item.id}`}>
      <Card className="min-h-[10rem] border-none shadow-none">
        <div className="relative">
          <img
            src={item.img[0] || Placeholder}
            alt={`Img of ${item.name}`}
            className="h-[200px] w-full rounded-lg object-cover"
          />
          {item.tags ? (
            <Badge className="text-md absolute top-4 right-4">
              {item.tags}
            </Badge>
          ) : null}
        </div>

        <CardContent>
          <h3 className="mb-2 line-clamp-2 text-lg font-semibold">
            {item?.title}
          </h3>
          <p className="text-muted-foreground line-clamp-3 text-sm">
            {item.description}
          </p>
          <h4 className="mt-2 text-lg font-bold">
            ₱{item.price.toLocaleString('en-PH')}
          </h4>
        </CardContent>
      </Card>
    </Link>
  );
}
