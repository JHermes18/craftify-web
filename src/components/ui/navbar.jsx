import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`bg-background sticky top-0 z-50 transition-shadow ${
        isScrolled ? 'shadow-sm' : ''
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link to="/">
          <h3 className="text-2xl font-semibold">Craftify</h3>
        </Link>
        <div className="space-x-2">
          <Link to="/login">
            <Button effect="ringHover">Log in</Button>
          </Link>
          <Link to="/register">
            <Button variant="outline" effect="ringHover">
              Register
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
