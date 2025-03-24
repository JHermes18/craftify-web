import { Link } from 'react-router-dom';
import Placeholder from '@/assets/img/placeholder/placeholder.png';

export default function ArtisanCard({ item }) {
  return (
    <Link to={`/products?artisan=${encodeURIComponent(item.name)}`}>
      <div
        className="relative h-64 overflow-hidden rounded-2xl bg-cover bg-center p-6 text-white shadow-lg"
        style={{
          backgroundImage: `url(${item.img || Placeholder})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10">
          <h3 className="w-full truncate text-2xl font-semibold">
            {item.name}
          </h3>
        </div>
      </div>
    </Link>
  );
}
