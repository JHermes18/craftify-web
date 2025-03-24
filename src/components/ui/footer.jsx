import { socialFooterLinks, socialIcons } from '@/data/social';
import { Button } from './button';

export default function Footer() {
  return (
    <footer className="container mx-auto">
      <main className="m-4 flex flex-wrap justify-between gap-4 border-y-2 px-4 py-[4rem]">
        <div>
          <h3 className="text-2xl font-semibold">Craftify</h3>
          <p className="text-muted-foreground my-5 max-w-md">
            Empowers artisans by showcasing unique handmade creations. Discover
            one-of-a-kind projects crafted with passion and precision.
          </p>
          <div className="space-x-1">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="icon">
                  <item.icon />
                </Button>
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-2 text-xl font-semibold">Projects</h3>
          <ul className="text-muted-foreground space-y-3 text-sm">
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
            <li>Project 4</li>
            <li>Project 5</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-xl font-semibold">Company</h3>
          <ul className="text-muted-foreground space-y-3 text-sm">
            <li>About</li>
            <li>Artisans</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-xl font-semibold">Social</h3>
          <ul className="text-muted-foreground space-y-3 text-sm">
            {socialFooterLinks.map((item, index) => (
              <li key={index}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </footer>
  );
}
