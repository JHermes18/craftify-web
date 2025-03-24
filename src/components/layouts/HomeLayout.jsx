import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../ui/navbar';
import Footer from '../ui/footer';
import { Toaster } from '../ui/sonner';

export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto flex-1 p-4">
        <Outlet />
        <Toaster />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
