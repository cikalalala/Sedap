import testimoni from '../data/Testimoni.json';

export default function Testimoni() {
  return (
    <section id="testimoni" className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-8">Apa Kata Mereka</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimoni.map((item, idx) => (
            <div key={idx} className="bg-green-50 p-6 rounded-lg shadow">
              <img
                src={item.avatar}
                alt={item.nama}
                className="w-16 h-16 mx-auto rounded-full mb-4"
              />
              <h4 className="font-semibold text-green-800">{item.nama}</h4>
              <p className="text-gray-700 text-sm mt-2">"{item.ulasan}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
