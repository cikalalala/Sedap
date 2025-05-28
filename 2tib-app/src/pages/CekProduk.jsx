import React, { useState } from 'react';

export default function CekProduk() {
  const [nama, setNama] = useState('');
  const [produkDitemukan, setProdukDitemukan] = useState(null);
  const [error, setError] = useState('');

  const handleCek = async (e) => {
    e.preventDefault();

    if (!nama.trim()) {
      setError('Nama produk tidak boleh kosong');
      setProdukDitemukan(null);
      return;
    }

    try {
      const res = await fetch('/produk.json');
      const data = await res.json();

      const hasil = data.find((item) =>
        item.nama.toLowerCase() === nama.toLowerCase()
      );

      if (hasil) {
        setProdukDitemukan(hasil);
        setError('');
      } else {
        setProdukDitemukan({ notfound: true });
        setError('');
      }
    } catch (err) {
      setError('Gagal mengambil data produk');
      setProdukDitemukan(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">🔍 Cari Produk</h1>

        <form onSubmit={handleCek} className="relative mb-4">
          <input
            type="text"
            placeholder="Masukkan nama produk (misal: Mangga)"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full border border-gray-300 rounded-full px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-600 text-white px-4 py-1 rounded-full hover:bg-green-700"
          >
            Cari
          </button>
        </form>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        {produkDitemukan && (
          <div className="mt-4 p-4 rounded-lg bg-gray-50 border">
            {!produkDitemukan.notfound ? (
              <>
                <h2 className="text-lg font-semibold text-green-700">
                  ✅ {produkDitemukan.nama}
                </h2>
                <img
                  src={produkDitemukan.gambar}
                  alt={produkDitemukan.nama}
                  className="w-32 h-32 object-cover mx-auto my-2 rounded"
                />
                <p className="text-gray-800 mb-1">{produkDitemukan.deskripsi}</p>
                <p className="text-gray-700">Harga: <strong>Rp{produkDitemukan.harga}</strong></p>
                <p className="text-gray-700">Stok: {produkDitemukan.stok > 0 ? produkDitemukan.stok : 'Habis'}</p>
              </>
            ) : (
              <p className="text-red-700 font-semibold">❌ Produk tidak ditemukan.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
