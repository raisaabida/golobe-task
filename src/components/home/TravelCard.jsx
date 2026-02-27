export default function TravelCard({ image, city, subtitle, price }) {
  return (
    <div
      className="relative h-[420px] rounded-2xl overflow-hidden bg-cover bg-center group"
      style={{ backgroundImage: `url(${image}&w=1000&q=80)` }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-6 left-6 right-6 text-white">
        
        {/* City + Price Row */}
        <div className="flex justify-between items-end mb-1">
          <h4 className="text-2xl font-semibold">{city}</h4>
          <span className="text-xl font-semibold">{price}</span>
        </div>

        {/* Subtitle */}
        <p className="text-sm text-gray-200 mb-4">{subtitle}</p>

        {/* Button */}
        <button className="w-full bg-[#8bc4b0] hover:bg-[#76b6a0] text-black font-medium py-3 rounded-lg transition">
          Book a Hotel
        </button>
      </div>
    </div>
  );
}