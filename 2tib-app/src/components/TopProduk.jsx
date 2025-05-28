import { useState } from 'react';
import produk from '../data/Produk.json';

export default function TopProduk() {
  const [search, setSearch] = useState('');

  const produkUnggulan = produk
    .filter(item => item.is_unggulan === true)
    .filter(item => item.nama.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 5);

  return (
    <section id="produk" className="py-16 px-4 bg-green-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-8">Produk Unggulan</h2>

        <input
          type="text"
          placeholder="Cari produk unggulan..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-8 px-4 py-2 border rounded w-full max-w-md mx-auto block focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {produkUnggulan.length > 0 ? (
            produkUnggulan.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition p-4"
              >
                <img
                  src={item.gambar}
                  alt={item.nama}
                  className="h-40 w-full object-cover rounded mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.nama}</h3>
                <p className="text-green-600 font-bold">Rp{item.harga.toLocaleString()}</p>
              </div>
            ))
          ) : (
            <p className="col-span-full text-gray-500">Tidak ada produk ditemukan.</p>
          )}
        </div>
      </div>
    </section>
  );
}
