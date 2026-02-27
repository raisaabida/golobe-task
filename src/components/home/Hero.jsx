export default function Hero() {
  return (
    <section
      className="relative h-[520px] lg:h-[600px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/2176590755/photo/maldives-swimming-pool-at-tropical-island-resort-hotel-beach-with-palm-trees-and-sun-beds.jpg?s=2048x2048&w=is&k=20&c=erisxAplqIUJIi5ti4Dj_gbRfuccAFrdqmOpiwz5SKI=')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 text-white">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold max-w-2xl leading-tight">
          Make your travel wishlist, we’ll do the rest
        </h2>
        <p className="mt-4 text-base lg:text-lg text-gray-200">
          Special offers to suit your plan
        </p>
      </div>
    </section>
  );
}