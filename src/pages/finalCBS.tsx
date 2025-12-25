import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle, TrendingUp, FileText, Clock, ArrowRight, Shield, Award } from 'lucide-react';

function MSMELoans() {
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
            <span className="block text-gray-900">MSME Loans</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Empowering Micro, Small and Medium Enterprises with accessible funding solutions. Our MSME Loans offer competitive rates, flexible terms, and quick approvals to help your business thrive and scale operations efficiently.
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
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">₹1Cr+</div>
              <div className="text-sm text-gray-600">Maximum Loan Amount</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">10%</div>
              <div className="text-sm text-gray-600">Interest Rate Starting</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">24hrs</div>
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
              Key Features of Our MSME Loans
            </h2>
            <p className="text-lg text-gray-600">
              Specially designed features to support small and medium businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Loan amount up to ₹1 Crore',
              'Flexible tenure options from 12 to 84 months',
              'Competitive interest rates starting from 10% p.a.',
              'Minimal documentation and hassle-free processing',
              'No collateral required for loans up to ₹25 Lakhs*',
              'Government-backed schemes available'
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
              Check if you qualify for our MSME loan program
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Business vintage of at least 1 year',
              'Minimum annual turnover of ₹10 Lakhs',
              'Valid MSME/Udyam registration',
              'Satisfactory credit score and repayment history'
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
              Documents needed to process your MSME loan application
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'MSME/Udyam registration certificate',
              'Business registration documents',
              'PAN Card and Aadhaar Card of proprietor/partners',
              'Bank statements for the last 6 months',
              'Income Tax Returns for the last 2 years',
              'GST returns (if applicable)'
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
              Simple steps to get your MSME loan approved
            </p>
          </div>

          <div className="relative">
            {/* Animated Connection Line */}
            <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-1 bg-gradient-to-r from-green-200 via-green-300 to-green-200 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500 to-transparent animate-shimmer"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
              {[
                { step: '1', title: 'Online Application', desc: 'Submit application with basic business details', icon: '📝', delay: '0.1s' },
                { step: '2', title: 'Document Upload', desc: 'Upload required documents for verification', icon: '📄', delay: '0.2s' },
                { step: '3', title: 'Quick Approval', desc: 'Get approval within 24-48 hours', icon: '✓', delay: '0.3s' },
                { step: '4', title: 'E-Signing', desc: 'Digitally sign loan agreement', icon: '✍️', delay: '0.4s' },
                { step: '5', title: 'Fund Transfer', desc: 'Funds transferred to your account', icon: '💰', delay: '0.5s' }
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

      {/* Customer Trust Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg">
            {/* Customer Avatars */}
            <div className="flex items-center">
              <div className="flex -space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces" 
                  alt="Customer 1" 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces" 
                  alt="Customer 2" 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=faces" 
                  alt="Customer 3" 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>
              <div className="ml-4">
                <p className="text-lg md:text-xl font-semibold text-gray-900">
                  Customers
                </p>
                <p className="text-sm text-gray-600">Trusted by many</p>
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-8 h-8 md:w-10 md:h-10 fill-green-600"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Customer Count */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600">
                1000+
              </div>
              <p className="text-sm text-gray-600 mt-1">Happy Customers</p>
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
                Ready to Apply for Your MSME Loan?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Empower your small business with the funding it needs to grow. Our team is ready to guide you through the process.
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

export default MSMELoans;
