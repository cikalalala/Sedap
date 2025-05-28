export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-700 pb-10">
        
        {/* Brand - Sedap */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-green-400">Sedap</span>
          </h2>
          <p className="text-sm text-gray-400">
            Sedap adalah platform restoran modern dari Pekanbaru
            yang menyajikan berbagai menu makanan lezat dengan
            pelayanan terbaik. Kami percaya bahwa makanan yang enak
            membawa kebahagiaan.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-4">Kontak</h4>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>📞 0761 888 000</li>
            <li>✉️ info@sedap.co.id</li>
            <li>📍 Jl. Soekarno Hatta No.88, Pekanbaru</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-white mb-4">Tautan</h4>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-green-400">Menu Favorit</a></li>
            <li><a href="#" className="hover:text-green-400">Belanja</a></li>
            <li><a href="#" className="hover:text-green-400">Tentang Kami</a></li>
            <li><a href="#" className="hover:text-green-400">Hubungi</a></li>
            <li><a href="#" className="hover:text-green-400">Bantuan</a></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-semibold text-white mb-4">Jelajahi</h4>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-green-400">Produk Baru</a></li>
            <li><a href="#" className="hover:text-green-400">Akun Saya</a></li>
            <li><a href="#" className="hover:text-green-400">Dukungan</a></li>
            <li><a href="#" className="hover:text-green-400">FAQs</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-white mb-4">Berlangganan</h4>
          <input
            type="email"
            placeholder="Alamat Email"
            className="w-full px-4 py-2 rounded text-black mb-3"
          />
          <button className="w-full bg-green-400 text-white font-semibold py-2 rounded hover:bg-green-500 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="hover:text-white">🐦</a>
          <a href="#" className="hover:text-white">📘</a>
          <a href="#" className="hover:text-white">📸</a>
        </div>
        <p>© 2025 Sedap Restaurant, Pekanbaru. All rights reserved.</p>
      </div>
    </footer>
  );
}
