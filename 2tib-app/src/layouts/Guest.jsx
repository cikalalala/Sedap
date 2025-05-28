import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function GuestLayout() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800 bg-white">
      <Navbar />
      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
