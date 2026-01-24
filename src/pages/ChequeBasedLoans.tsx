import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle, FileText, ArrowRight, Shield, Clock, Zap, Award, TrendingUp, Banknote, Upload, FileCheck } from 'lucide-react';

function ChequeBasedLoans() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0d_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0d_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_50%,transparent_100%)]"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-gray-50 border border-gray-200 shadow-sm">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Financial Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="block text-gray-900">Cheque Based Loans</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Get instant liquidity against your post-dated cheques. Our cheque-based loans offer quick cash flow solutions for businesses with minimal paperwork and same-day approvals for urgent funding needs.
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
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">₹50L+</div>
              <div className="text-sm text-gray-600">Maximum Loan Amount</div>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">15%</div>
              <div className="text-sm text-gray-600">Interest Rate Starting</div>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">12hrs</div>
              <div className="text-sm text-gray-600">Approval Time</div>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">12mo</div>
              <div className="text-sm text-gray-600">Maximum Tenure</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-semibold mb-4 animate-fade-in">FEATURES</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 animate-fade-in-up">
              Quick Cheque-Based Financing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-100">
              Fast liquidity solutions against your post-dated cheques for immediate cash flow needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'Same-Day Funds', desc: 'Get instant approval and disbursal on the same day', color: 'red' },
              { icon: Banknote, title: 'Up to ₹50 Lakhs', desc: 'Loan against your post-dated cheques', color: 'blue' },
              { icon: Clock, title: 'Flexible Terms', desc: 'Choose tenure from 1 to 12 months', color: 'purple' },
              { icon: TrendingUp, title: 'Easy Access', desc: 'Minimal documentation required', color: 'green' },
              { icon: Award, title: 'Competitive Rates', desc: 'Interest starting from 15% p.a.', color: 'orange' },
              { icon: Shield, title: 'Secure Process', desc: 'Safe and reliable cheque discounting', color: 'teal' }
            ].map((feature, index) => {
              const colorClasses: { [key: string]: string } = {
                red: 'bg-red-50 border-red-200',
                blue: 'bg-blue-50 border-blue-200',
                purple: 'bg-purple-50 border-purple-200',
                green: 'bg-green-50 border-green-200',
                orange: 'bg-orange-50 border-orange-200',
                teal: 'bg-teal-50 border-teal-200'
              };
              const iconColors: { [key: string]: string } = {
                red: 'text-red-600',
                blue: 'text-blue-600',
                purple: 'text-purple-600',
                green: 'text-green-600',
                orange: 'text-orange-600',
                teal: 'text-teal-600'
              };
              return (
                <div key={index} className={`p-6 rounded-2xl border ${colorClasses[feature.color]} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in delay-${(index + 1) * 100}`}>
                  <div className="mb-4">
                    <feature.icon className={`w-10 h-10 ${iconColors[feature.color]}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
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
            <p className="text-lg text-gray-600 animate-fade-in-up delay-100">
              Check if you qualify for our loan program
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Established business with minimum 1 year vintage',
              'Valid cheque book from recognized bank',
              'Minimum annual turnover of ₹15 Lakhs',
              'Satisfactory banking relationship'
            ].map((criterion, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-200">
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
            <p className="text-lg text-gray-600 animate-fade-in-up delay-100">
              Documents needed to process your application
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Post-dated cheques as security',
              'Business registration documents',
              'Bank statements for the last 6 months',
              'PAN Card and Aadhaar Card',
              'GST registration certificate',
              'Address proof of business'
            ].map((document, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <FileText className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">{document}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Application Process
            </h2>
            <p className="text-lg text-gray-600">
              Simple steps to get your cheque-based loan approved
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Progress Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gray-200">
              <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 w-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
              {[
                { step: '01', title: 'Submit Application', desc: 'Fill out online form', Icon: FileText, color: 'green' },
                { step: '02', title: 'Upload Documents', desc: 'Submit cheques & docs', Icon: Upload, color: 'blue' },
                { step: '03', title: 'Same-day Approval', desc: 'Within 12 hours', Icon: CheckCircle, color: 'purple' },
                { step: '04', title: 'E-Sign', desc: 'Digital signing', Icon: FileCheck, color: 'orange' },
                { step: '05', title: 'Get Funds', desc: 'Account credit', Icon: Banknote, color: 'teal' }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="relative flex flex-col items-center text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Step Circle */}
                  <div className={`relative z-10 w-32 h-32 rounded-full bg-${item.color}-50 border-4 border-${item.color}-500 flex items-center justify-center mb-6 shadow-lg hover:scale-110 transition-transform duration-300`}>
                    <item.Icon className={`w-12 h-12 text-${item.color}-600`} />
                  </div>
                  
                  {/* Step Number */}
                  <div className="text-sm font-bold text-gray-400 mb-2">STEP {item.step}</div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600">
                    {item.desc}
                  </p>
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
                Ready to Apply for Your Cheque Based Loan?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Get instant liquidity today with our same-day approval process. Our team is ready to help you through every step.
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

export default ChequeBasedLoans;
