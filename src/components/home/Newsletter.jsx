export default function Newsletter() {
  return (
    <section className="relative pt-24">

      {/* Top Light Area */}
      <div className="bg-[#F3F3F3] h-40 w-full absolute top-0 left-0"></div>

      {/* Green Background */}
      <div className="bg-[#7DB9A6] pt-40">
        <div className="max-w-7xl mx-auto px-6 relative">

          {/* Floating Card */}
          <div className="bg-[#CFE7DF] rounded-3xl p-10 md:p-16 flex flex-col lg:flex-row justify-between items-center shadow-lg -mt-40 relative z-10">
            
            <div className="max-w-xl">
              <h2 className="text-4xl font-semibold leading-tight mb-6">
                Subscribe <br /> Newsletter
              </h2>

              <h4 className="text-lg font-semibold mb-2">
                The Travel
              </h4>

              <p className="text-gray-700 mb-6">
                Get inspired! Receive travel discounts, tips and behind the scenes stories.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-5 py-3 rounded-lg bg-white outline-none"
                />
                <button className="bg-[#0F2D1E] text-white px-6 py-3 rounded-lg font-medium">
                  Subscribe
                </button>
              </div>
            </div>

            
            <div className="hidden lg:block relative w-80 h-48 mt-10 lg:mt-0">
              <div className="absolute right-0 top-0 w-56 h-48 bg-[#0F2D1E] rounded-r-[80px]" />
              <div className="absolute right-24 top-4 w-40 h-40 bg-[#5F7570] rounded-[60px]" />
              <div className="absolute right-0 top-16 w-24 h-16 bg-[#F17F7F]" />
              <div className="absolute right-20 bottom-0 w-12 h-20 bg-[#B98B6B]" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}