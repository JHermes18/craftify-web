import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { featuredProjects } from '@/data/project';
import ProductCard from './ProductCard';
import { featuredArtisans } from '@/data/artisan';
import { Filter } from 'lucide-react';

export default function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('keyword') || '';
  const artisanKeyword = searchParams.get('artisan') || '';
  const [query, setQuery] = useState(initialQuery);
  const [selectedArtisan, setSelectedArtisan] = useState(artisanKeyword);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleSearch = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    setSearchParams({ query: newQuery });
  };

  const filteredProjects = featuredProjects.filter((item) => {
    const matchesQuery = query
      ? item.title.toLowerCase().includes(query.toLowerCase())
      : true;
    const matchesArtisan = selectedArtisan
      ? item.createdBy === selectedArtisan
      : true;
    const matchesPrice =
      (!minPrice || item.price >= Number(minPrice)) &&
      (!maxPrice || item.price <= Number(maxPrice));

    return matchesQuery && matchesArtisan && matchesPrice;
  });

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      <Card className="h-fit">
        <CardContent className="space-y-4">
          <div className="mb-3 flex items-center gap-2">
            <Filter />
            <h2 className="text-xl font-semibold">Search Filter</h2>
          </div>

          <Input
            placeholder="Search Product"
            value={query}
            onChange={handleSearch}
          />

          <div>
            <h3 className="mb-3 font-semibold">Artisans</h3>
            <Select value={selectedArtisan} onValueChange={setSelectedArtisan}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select an artisan" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Artisans</SelectLabel>
                  {featuredArtisans.map((item, index) => (
                    <SelectItem key={index} value={item.name}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">Price range</h3>
            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <Input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((item, index) => (
            <ProductCard key={item.id || index} item={item} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found
          </p>
        )}
      </div>
    </div>
  );
}
