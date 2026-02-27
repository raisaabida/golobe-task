import React from "react";

const searches = [
  {
    id: 1,
    city: "Istanbul",
    country: "Turkey",
    places: 325,
    image:
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    city: "Sydney",
    country: "Australia",
    places: 325,
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3lkbmV5fGVufDB8fDB8fHww",
  },
  {
    id: 3,
    city: "Baku",
    country: "Azerbaijan",
    places: 325,
    image:
      "https://images.unsplash.com/photo-1593351415075-3bac9f45c877?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    city: "Malé",
    country: "Maldives",
    places: 325,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
  },
];

export default function RecentSearches() {
  return (
    <section className="w-full bg-[#f3f3f3] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10">
          Your recent searches
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {searches.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 cursor-pointer group"
            >
              <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                <img
                  src={item.image}
                  alt={item.city}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  {item.city}, {item.country}
                </h3>
                <p className="text-sm text-gray-500">
                  {item.places} places
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}