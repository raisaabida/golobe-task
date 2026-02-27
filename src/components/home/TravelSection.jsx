import TravelCard from "./TravelCard";

export default function TravelSection() {
  const places = [
    {
      city: "Melbourne",
      subtitle: "An amazing journey",
      price: "$ 700",
      image:
        "https://images.unsplash.com/photo-1609036394821-b63e8168dc64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVsYm91cm5lJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      city: "Paris",
      subtitle: "A Paris Adventure",
      price: "$ 600",
      image:
        "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      city: "London",
      subtitle: "London eye adventure",
      price: "$ 350",
      image:
        "https://plus.unsplash.com/premium_photo-1682056762907-23d08f913805?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9uZG9ufGVufDB8fDB8fHww"
    },
    {
      city: "Columbia",
      subtitle: "Amazing streets",
      price: "$ 700",
      image:
        "https://plus.unsplash.com/premium_photo-1722024114177-d0b1fd3cb66d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sdW1iaWF8ZW58MHx8MHx8fDA%3D"
    }
  ];

  return (
    <section className="bg-[#f3f3f3] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-4xl font-semibold">
              Fall into travel
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl">
              Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.
            </p>
          </div>

          <button className="border border-emerald-300 text-gray-700 px-5 py-2 rounded-lg hover:bg-emerald-50 transition">
            See All
          </button>
        </div>

        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {places.map((place, i) => (
            <TravelCard key={i} {...place} />
          ))}
        </div>
      </div>
    </section>
  );
}