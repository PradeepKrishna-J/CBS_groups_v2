import { Link } from 'react-router-dom';
import { Sparkles, Building2, Globe, Shield, TrendingUp, Linkedin } from 'lucide-react';

const timelineData = [
  {
    year: '2010',
    title: 'Founded',
    description: 'Chetana Business Solutions was established with a vision to provide accessible financial solutions to SMEs.',
    delay: '0.2s'
  },
  {
    year: '2013',
    title: 'Expansion',
    description: 'Expanded operations to 5 major cities across India and introduced specialized MSME loan products.',
    delay: '0.4s'
  },
  {
    year: '2016',
    title: 'Digital Transformation',
    description: 'Launched our digital platform for loan applications, making the process faster and more accessible.',
    delay: '0.6s'
  },
  {
    year: '2020',
    title: 'Pandemic Response',
    description: 'Introduced special financial relief packages for businesses affected by the COVID-19 pandemic.',
    delay: '0.8s'
  },
  {
    year: '2023',
    title: 'Milestone Achievement',
    description: 'Reached the milestone of disbursing ₹500 Crore in loans and serving over 5000 businesses.',
    delay: '1s'
  }
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Hero Section with Grid Pattern */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0d_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0d_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_50%,transparent_100%)]"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-gray-200/50 shadow-sm animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-gray-700">About Chetana Business Solutions</span>
          </div>
          
          {/* Heading with Playfair Display */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s', fontFamily: "'Playfair Display', serif" }}>
            <span className="block text-gray-900">Empowering Businesses</span>
            <span className="block mt-2 bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 bg-clip-text text-transparent">Since 2010</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Building trust, delivering excellence, and transforming financial futures one business at a time.
          </p>
        </div>
      </section>

      {/* About Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            About Chetana Business Solutions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Founded in 2010, Chetana Business Solutions has been a trusted financial partner for businesses across India. With our expertise, we have helped thousands of entrepreneurs and businesses achieve their growth objectives.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our mission is to empower businesses with timely and accessible financial solutions that fuel their growth and success. We believe in building long-term relationships based on trust, transparency, and mutual growth.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">12+</div>
              <div className="text-sm text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">₹500Cr+</div>
              <div className="text-sm text-gray-600">Loans Disbursed</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">5000+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-50 via-emerald-50 to-white p-10 border border-green-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-200/20 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                  Our Vision
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Empowering Business Growth
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To be the most trusted financial partner for businesses, enabling their growth through innovative and accessible financial solutions.
                </p>
                <div className="h-1 w-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-green-50 to-white p-10 border border-emerald-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-200/20 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">
                  Our Mission
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Financial Accessibility for All
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To provide timely, transparent, and tailored financial solutions that meet the diverse needs of businesses at every stage of their journey.
                </p>
                <div className="h-1 w-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted financial partner for thousands of businesses
            </p>
          </div>

          {/* Timeline Items */}
          <div className="relative pb-0">
            {/* Vertical Line */}
            <div className="absolute left-[19px] md:left-1/2 top-0 h-[calc(100%-10rem)] w-[2px] bg-gradient-to-b from-green-200 via-green-400 to-green-600 md:-translate-x-1/2"></div>

            {timelineData.map((item, index) => (
              <div 
                key={item.year}
                className="relative mb-16 last:mb-0 animate-fade-in-up"
                style={{ animationDelay: item.delay }}
              >
                <div className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Year Badge */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                    <div className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-xl shadow-lg hover:scale-105 transition-transform duration-300`}>
                      {item.year}
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-[10px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-green-500 shadow-lg z-10 flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                    <div className="w-3 h-3 rounded-full bg-green-500 group-hover:animate-pulse"></div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 ml-16 md:ml-0">
                    {/* Mobile Year */}
                    <div className="md:hidden mb-3 inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg shadow-md">
                      {item.year}
                    </div>
                    
                    <div className="group">
                      <div className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:border-green-300/50 hover:-translate-y-1">
                        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                        
                        {/* Decorative Element */}
                        <div className="mt-4 h-1 w-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - Minimalistic */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              Principles that guide every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trust & Transparency</h3>
              <p className="text-gray-600 leading-relaxed">
                Building lasting relationships through honest communication and unwavering integrity.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth-Oriented</h3>
              <p className="text-gray-600 leading-relaxed">
                Dedicated to empowering businesses with strategic financial solutions that drive success.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Constantly evolving with technology to provide seamless, accessible financial services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Leadership
            </h2>
            <p className="text-lg text-gray-600">
              Meet the experienced professional who guides our business strategy
            </p>
          </div>

          {/* Leadership Cards */}
          <div className="flex justify-center">
            {/* Leader - Pradeep */}
            <div className="group max-w-md">
              <div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100">
                  {/* CEO image */}
                  <img 
                    src="https://ik.imagekit.io/pradeepkrishna07/cbsgroupsceo.png" 
                    alt="Pradeep Babu T" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Pradeep
                      </h3>
                      <p className="text-green-600 font-semibold">Business Head</p>
                    </div>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 text-green-600" />
                    </a>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    With nearly 16 years of extensive experience in financial services and business development, Pradeep leads our strategic initiatives and client relationships. His expertise in crafting tailored financial solutions has been instrumental in helping businesses achieve sustainable growth.
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 shadow-2xl relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses that have achieved their financial goals with Chetana Business Solutions.
              </p>
              <Link 
                to="/#contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Started Today
                <Sparkles className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
