import Placeholder from '@/assets/img/placeholder/placeholder.png';

export default function CraftingTipCard({ item }) {
  return (
    <div className="flex h-40 min-h-[10rem] w-full gap-4 rounded-lg bg-gray-50 p-2">
      <img
        className="h-full w-24 rounded-md object-cover"
        src={item.img || Placeholder}
        alt={`Img of ${item.title}`}
      />
      <div className="flex-1">
        <h3 className="line-clamp-2 text-lg font-semibold">{item.title}</h3>
        <p className="text-muted-foreground line-clamp-4 text-sm">
          {item.description}
        </p>
      </div>
    </div>
  );
}
