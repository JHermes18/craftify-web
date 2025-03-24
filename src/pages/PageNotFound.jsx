import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

export default function PageNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="text-8xl font-extrabold">404</h1>
      <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Page Not Found</h2>
      <p className="text-muted-foreground my-4 max-w-xl">
        Oops! The page you're looking for doesn't exist or may have been moved.
        Check the URL or go back to the homepage.
      </p>
      <Link to="/">
        <Button effect="expandIcon" icon={ArrowRightIcon} iconPlacement="right">
          Back to home
        </Button>
      </Link>
    </div>
  );
}
