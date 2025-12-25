import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle, FileText, ArrowRight, Shield } from 'lucide-react';

function CGTMSELoan() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0d_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0d_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_50%,transparent_100%)]"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-gray-200/50 shadow-sm">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Financial Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="block text-gray-900">CGTMSE Loans</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Access collateral-free financing backed by the Credit Guarantee Fund Trust for Micro and Small Enterprises. Our CGTMSE loans offer government-backed security, enabling you to secure funding without pledging assets.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-green-600 text-green-600 rounded-full font-semibold hover:bg-green-50 transition-all duration-300">
              Get Free Consultation
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">₹2Cr+</div>
              <div className="text-sm text-gray-600">Maximum Loan Amount</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">9.5%</div>
              <div className="text-sm text-gray-600">Interest Rate Starting</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">36hrs</div>
              <div className="text-sm text-gray-600">Approval Time</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">84mo</div>
              <div className="text-sm text-gray-600">Maximum Tenure</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Key Features of Our CGTMSE Loans
            </h2>
            <p className="text-lg text-gray-600">
              Government-backed collateral-free financing for MSMEs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Collateral-free loans up to ₹2 Crore',
              'Government guarantee backing',
              'Flexible tenure from 12 to 84 months',
              'Competitive interest rates starting from 9.5% p.a.',
              '75-80% guarantee coverage',
              'Suitable for manufacturing & service sectors'
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Eligibility Criteria
            </h2>
            <p className="text-lg text-gray-600">
              Check if you qualify for our loan program
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Registered MSME unit',
              'New or existing enterprise',
              'Project cost within ₹2 Crore',
              'Viable business plan'
            ].map((criterion, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50">
                <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">{criterion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Required Documents
            </h2>
            <p className="text-lg text-gray-600">
              Documents needed to process your application
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'MSME/Udyam registration certificate',
              'Project report and cost estimates',
              'Business registration proof',
              'PAN and Aadhaar Card of promoters',
              'Bank statements for the last 6 months',
              'GST registration certificate'
            ].map((document, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                <FileText className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">{document}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Application Process
            </h2>
            <p className="text-lg text-gray-600">
              Simple steps to get your CGTMSE loan approved
            </p>
          </div>

          <div className="relative">
            {/* Animated Connection Line */}
            <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-1 bg-gradient-to-r from-green-200 via-green-300 to-green-200 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500 to-transparent animate-shimmer"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
              {[
                { step: '1', title: 'Submit Application', desc: 'Fill out online form with basic details', icon: '📝', delay: '0.1s' },
                { step: '2', title: 'Documentation', desc: 'Upload required documents for verification', icon: '📄', delay: '0.2s' },
                { step: '3', title: 'Quick Approval', desc: 'Get approval within 36-48 hours', icon: '✓', delay: '0.3s' },
                { step: '4', title: 'Digital Signing', desc: 'E-sign loan agreement securely', icon: '✍️', delay: '0.4s' },
                { step: '5', title: 'Fund Disbursal', desc: 'Amount credited to your account', icon: '💰', delay: '0.5s' }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="group relative animate-fade-in-up"
                  style={{ animationDelay: item.delay }}
                >
                  {/* Card */}
                  <div className="relative h-full p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                    
                    {/* Icon */}
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Decorative Element */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>

                  {/* Arrow for larger screens */}
                  {index < 4 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="text-2xl text-green-500 animate-pulse">→</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready to Apply for Your CGTMSE Loan?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Get government-backed collateral-free financing today. Our team is ready to help you through every step of the process.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CGTMSELoan;
