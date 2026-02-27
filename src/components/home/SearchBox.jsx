export default function SearchBox() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-16 -mt-20 relative z-20">
      <div className="bg-white p-6 lg:p-10 rounded-2xl shadow-2xl">
        <h3 className="font-semibold text-lg mb-6">
          Where are you flying?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            className="border rounded-lg p-3"
            placeholder="Enter Destination"
          />
          <input type="date" className="border rounded-lg p-3" />
          <input type="date" className="border rounded-lg p-3" />
          <input
            className="border rounded-lg p-3"
            placeholder="Rooms & Guests"
          />
        </div>

        <div className="flex justify-end mt-6">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition">
            Show Places
          </button>
        </div>
      </div>
    </div>
  );
}