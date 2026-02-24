import { ExternalLink } from 'lucide-react';

function OurGroups() {
  return (
    <div className="min-h-screen bg-white pt-40 pb-20">
      <div className="max-w-7xl mx-auto container-px">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-brand">Our Network</span>
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 mt-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Empowered by CBS Groups
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the brands and businesses that are part of our growing ecosystem, each driven by innovation and excellence.
          </p>
        </div>

        {/* Groups Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Saregapa Dhasa */}
          <a
            href="https://www.saregapadhasa.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand/10 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              {/* Thumbnail */}
              <div className="mb-6 rounded-2xl overflow-hidden bg-white shadow-lg">
                <img
                  src="https://www.saregapadhasa.com/assets/logo-osV3I9HH.jpeg"
                  alt="Saregapa Dhasa"
                  className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x300?text=Saregapa+Dhasa';
                  }}
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-brand transition-colors">
                  SaReGaPaDhaSa Music Academy & Live Band
                </h3>
                <p className="text-gray-600">
                  Experience premium music education with live 1-to-1 classes and professional live band performances for all your events.
                </p>
                
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                  Visit Website
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Hover Effect Border */}
            <div className="absolute inset-0 border-2 border-brand rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>

          {/* Placeholder for future groups */}
          <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 overflow-hidden border border-gray-200 border-dashed">
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-gray-400">+</span>
              </div>
              <h3 className="text-xl font-bold text-gray-400 mb-2">Coming Soon</h3>
              <p className="text-gray-400">More exciting ventures on the way</p>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 overflow-hidden border border-gray-200 border-dashed">
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-gray-400">+</span>
              </div>
              <h3 className="text-xl font-bold text-gray-400 mb-2">Coming Soon</h3>
              <p className="text-gray-400">More exciting ventures on the way</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-brand to-blue-700 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in Partnering With Us?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our ecosystem and grow your business with CBS Groups
          </p>
          <a
            href="/#contact"
            className="inline-block bg-white text-brand font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default OurGroups;
