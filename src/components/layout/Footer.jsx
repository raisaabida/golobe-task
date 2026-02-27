export default function Footer() {
  return (
    <footer className="bg-[#7DB9A6] pt-16 pb-20 text-[#0F2D1E]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 text-sm">
          
          {/* Logo */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              go<span className="text-white">lobe</span>
            </h3>

            <div className="flex gap-4 text-lg">
              <span>📘</span>
              <span>🐦</span>
              <span>▶️</span>
              <span>📸</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Destinations</h4>
            <ul className="space-y-3">
              <li>Canada</li>
              <li>Alaska</li>
              <li>France</li>
              <li>Iceland</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Activities</h4>
            <ul className="space-y-3">
              <li>Northern Lights</li>
              <li>Cruising & sailing</li>
              <li>Multi-activities</li>
              <li>Kayaking</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Travel Blogs</h4>
            <ul className="space-y-3">
              <li>Bali Travel Guide</li>
              <li>Sri Lanks Travel Guide</li>
              <li>Peru Travel Guide</li>
              <li>Bali Travel Guide</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">About Us</h4>
            <ul className="space-y-3">
              <li>Our Story</li>
              <li>Work with us</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>Our Story</li>
              <li>Work with us</li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  );
}