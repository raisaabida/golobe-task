export default function BackpackSection() {
  return (
    <section className="w-full bg-[#f3f3f3] py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <h2 className="text-3xl font-semibold mb-3">
              Fall into travel
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Going somewhere to celebrate this season? Whether you’re going home
              or somewhere to roam, we’ve got the travel tools to get you to your
              destination.
            </p>
          </div>

          <button className="border border-teal-500 text-teal-600 px-5 py-2 rounded-md hover:bg-teal-50 transition">
            See All
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Card */}
          <div className="bg-teal-300 rounded-2xl p-10 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-4xl font-semibold leading-tight">
                  Backpacking <br /> Sri Lanka
                </h3>

                <div className="bg-white px-4 py-2 rounded-lg shadow text-sm font-medium">
                  <span className="block text-gray-500 text-xs">From</span>
                  <span className="text-lg font-bold">$700</span>
                </div>
              </div>

              <p className="mt-6 text-gray-700 leading-relaxed text-sm">
                Traveling is a unique experience as it's the best way to unplug
                from the pushes and pulls of daily life. It helps us to forget
                about our problems, frustrations, and fears at home. During our
                journey, we experience life in <em>different ways</em>. We
                explore new places, cultures, cuisines, traditions, and ways of
                living.
              </p>
            </div>

            <button className="mt-10 bg-white text-gray-800 py-3 rounded-md font-medium hover:bg-gray-100 transition">
              Book Flight
            </button>
          </div>

          
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <img
              src="/images/sri1.jpg.png"
              alt=""
              className="rounded-2xl h-60 w-full object-cover"
            />
            <img
              src="/images/sri2.jpg.png"
              alt=""
              className="rounded-2xl h-60 w-full object-cover"
            />
            <img
              src="/images/sri3.jpg.png"
              alt=""
              className="rounded-2xl h-60 w-full object-cover"
            />
            <img
              src="/images/sri4.jpg.png"
              alt=""
              className="rounded-2xl h-60 w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}