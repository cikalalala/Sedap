export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
       
        <div>
          <h2 className="text-4xl font-bold text-green-700 mb-6">Tentang Kami</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            <strong>Sedap</strong> adalah platform penyedia makanan sehat, bergizi, dan terjangkau. Kami menghubungkan konsumen langsung dengan petani lokal dan pelaku UMKM, memastikan setiap produk yang Anda nikmati tidak hanya segar tapi juga mendukung ekonomi lokal.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Kami percaya bahwa makanan sehat harus bisa diakses oleh siapa saja. Oleh karena itu, kami berkomitmen menyediakan produk tanpa bahan pengawet, menggunakan kemasan ramah lingkungan, dan menghadirkan pengalaman belanja yang nyaman secara daring.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Dengan dukungan tim profesional dan jaringan komunitas lokal, Sedap hadir untuk menciptakan gaya hidup sehat berkelanjutan bagi masyarakat Indonesia.
          </p>
        </div>

      
        <div>
          <img
            src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=800&q=80"
            alt="Petani lokal panen sayuran"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
