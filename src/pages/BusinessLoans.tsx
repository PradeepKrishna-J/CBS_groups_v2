import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle, TrendingUp, FileText, Clock, ArrowRight, Shield, Award, Upload, FileCheck, CheckSquare, Banknote } from 'lucide-react';

function BusinessLoans() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-green-50 border border-green-200 animate-fade-in">
                <Sparkles className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">Business Growth Finance</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 animate-slide-in-left delay-100">
                Business Loans
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-slide-in-left delay-200">
                Our Business Loans are designed to provide quick financing to businesses of all sizes with minimal documentation and fast approval. Whether you need funds for expansion, equipment purchase, or day-to-day operations, our business loans have got you covered.
              </p>

              <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up delay-300">
                <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-green-600 hover:text-green-600 transition-all duration-300">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow animate-bounce-in delay-200">
                <div className="text-3xl font-bold text-green-600 mb-2">₹2Cr+</div>
                <div className="text-sm text-gray-600 font-medium">Maximum Loan Amount</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow animate-bounce-in delay-300">
                <div className="text-3xl font-bold text-green-600 mb-2">12%</div>
                <div className="text-sm text-gray-600 font-medium">Interest Rate Starting</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow animate-bounce-in delay-400">
                <div className="text-3xl font-bold text-green-600 mb-2">48hrs</div>
                <div className="text-sm text-gray-600 font-medium">Quick Approval</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow animate-bounce-in delay-500">
                <div className="text-3xl font-bold text-green-600 mb-2">60mo</div>
                <div className="text-sm text-gray-600 font-medium">Flexible Tenure</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold mb-4 animate-fade-in">FEATURES</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 animate-fade-in-up">
              Why choose our Business Loans?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-100">
              Comprehensive financing solutions designed to accelerate your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, title: 'High Loan Amount', desc: 'Get funding up to ₹2 Crore for large-scale business needs', color: 'blue' },
              { icon: Clock, title: 'Quick Approval', desc: 'Fast processing within 48 hours with minimal documentation', color: 'green' },
              { icon: Shield, title: 'Flexible Terms', desc: 'Choose tenure from 12-60 months based on cash flow', color: 'purple' },
              { icon: Award, title: 'Competitive Rates', desc: 'Interest rates starting from 12% p.a. for qualified businesses', color: 'orange' }
            ].map((feature, index) => {
              const colorClasses: { [key: string]: string } = {
                blue: 'bg-blue-50 border-blue-200',
                green: 'bg-green-50 border-green-200',
                purple: 'bg-purple-50 border-purple-200',
                orange: 'bg-orange-50 border-orange-200'
              };
              const iconColors: { [key: string]: string } = {
                blue: 'text-blue-600',
                green: 'text-green-600',
                purple: 'text-purple-600',
                orange: 'text-orange-600'
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

      {/* Benefits with Image Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image placeholder */}
            <div className="relative animate-slide-in-left">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-green-100 to-emerald-100 aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20"></div>
                <div className="relative text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/80 flex items-center justify-center">
                    <TrendingUp className="w-16 h-16 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Growth</h3>
                  <p className="text-gray-600">Powered by CBS Solutions</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-500 rounded-full blur-3xl opacity-20"></div>
            </div>

            {/* Right - Feature list */}
            <div className="animate-slide-in-right">
              <div className="inline-block px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold mb-4">BENEFITS</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Comprehensive Business Financing
              </h2>
              <p className="text-gray-600 mb-8">
                Our business loans provide the financial support you need to expand operations, purchase equipment, or manage working capital efficiently.
              </p>
              <div className="space-y-4">
                {[
                  { dot: 'blue', title: 'No Collateral Required', desc: 'For loans up to ₹50 Lakhs*' },
                  { dot: 'green', title: 'Flexible Repayment', desc: 'Choose EMI schedules that suit your business' },
                  { dot: 'purple', title: 'Dedicated Support', desc: '24/7 assistance from our business loan experts' },
                  { dot: 'orange', title: 'Digital Process', desc: 'Complete application online with e-verification' }
                ].map((item, index) => {
                  const dotColors: { [key: string]: string } = {
                    blue: 'bg-blue-500',
                    green: 'bg-green-500',
                    purple: 'bg-purple-500',
                    orange: 'bg-orange-500'
                  };
                  return (
                    <div key={index} className="flex gap-4">
                      <div className={`flex-shrink-0 w-2 h-2 rounded-full ${dotColors[item.dot]} mt-2`}></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Documents Grid Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold mb-4 animate-fade-in">REQUIREMENTS</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 animate-fade-in-up">
              Eligibility & Documentation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-100">
              Simple requirements to get started with your business loan application
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Eligibility Criteria */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 animate-slide-in-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Eligibility Criteria</h3>
              </div>
              <div className="space-y-4">
                {[
                  'Business vintage of at least 2 years',
                  'Minimum annual turnover of ₹25 Lakhs',
                  'Good credit history and credit score',
                  'Profitability in at least 1 of the last 2 financial years'
                ].map((criterion, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{criterion}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Documents */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 animate-slide-in-right">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Required Documents</h3>
              </div>
              <div className="space-y-4">
                {[
                  'Business registration proof',
                  'GST registration (if applicable)',
                  'PAN & Aadhaar Card',
                  'Bank statements (6 months)',
                  'ITR for last 2 years',
                  'Financial statements (2 years)'
                ].map((document, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white">
                    <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{document}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 animate-fade-in-up">
              Every step is clear and structured
            </h2>
            <p className="text-lg text-gray-600 animate-fade-in-up delay-100">
              One process to provide a comprehensive overview of your application journey. With simple steps, you can see where your application is going.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Submit Application', desc: 'Fill out online form with basic details', icon: Upload },
              { step: '02', title: 'Documentation', desc: 'Upload required documents for verification', icon: FileText },
              { step: '03', title: 'Quick Approval', desc: 'Get approval within 48-72 hours', icon: CheckSquare },
              { step: '04', title: 'Digital Signing', desc: 'E-sign loan agreement securely', icon: FileCheck },
              { step: '05', title: 'Fund Disbursal', desc: 'Amount credited to your account', icon: Banknote }
            ].map((item, index) => (
              <div key={index} className="relative p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-green-600" />
                </div>
                
                {/* Step Number */}
                <div className="text-sm font-semibold text-gray-400 mb-2">{item.step}</div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-green-600 to-emerald-600 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"></div>
            
            <div className="relative text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Apply for Your Business Loan?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Get the financial support your business needs today. Our team is ready to help you through every step of the process.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
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

export default BusinessLoans;
