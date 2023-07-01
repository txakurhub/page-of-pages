import Image from 'next/image';
import Navbar from './components/Navbar';

export default function Home() {
  const links = [
    { label: 'Inicio', url: '/' },
    { label: 'Acerca de', url: '/about' },
    { label: 'Servicios', url: '/services' },
    { label: 'Contacto', url: '/contact' },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar links={links} />
    </main>
  );
}
