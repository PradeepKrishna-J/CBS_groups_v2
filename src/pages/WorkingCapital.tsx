import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle, FileText, ArrowRight, Shield, Upload, FileCheck, CheckSquare, Banknote } from 'lucide-react';

function WorkingCapital() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-green-50 border border-green-200 animate-fade-in">
                <Sparkles className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">Working Capital Finance</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 animate-slide-in-left delay-100">
                Working Capital Loans
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-slide-in-left delay-200">
                Keep your business operations running smoothly with our working capital loans. Manage cash flow gaps, purchase inventory, pay suppliers, and meet day-to-day expenses with flexible short-term financing solutions.
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
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-green-600 mb-2">₹3Cr+</div>
                <div className="text-sm text-gray-600 font-medium">Maximum Loan Amount</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-green-600 mb-2">10.5%</div>
                <div className="text-sm text-gray-600 font-medium">Interest Rate Starting</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-green-600 mb-2">48hrs</div>
                <div className="text-sm text-gray-600 font-medium">Quick Approval</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-green-600 mb-2">36mo</div>
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
            <div className="inline-block px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-semibold mb-4 animate-fade-in">FEATURES</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 animate-fade-in-up">
              Working Capital Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-100">
              Flexible financing to meet your day-to-day business operational needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Banknote, title: 'High Funding', desc: 'Get working capital up to ₹3 Crore for operations', color: 'teal' },
              { icon: CheckCircle, title: 'Quick Access', desc: 'Fast approval within 48 hours for urgent needs', color: 'blue' },
              { icon: FileText, title: 'Flexible Terms', desc: 'Choose tenure from 12 to 36 months', color: 'purple' },
              { icon: Shield, title: 'Low Rates', desc: 'Competitive interest starting from 10.5% p.a.', color: 'green' },
              { icon: Upload, title: 'Easy Process', desc: 'Minimal collateral with simple documentation', color: 'orange' },
              { icon: CheckSquare, title: 'Overdraft Option', desc: 'Overdraft facility available for flexibility', color: 'pink' }
            ].map((feature, index) => {
              const colorClasses = {
                teal: 'bg-teal-50 border-teal-200',
                blue: 'bg-blue-50 border-blue-200',
                purple: 'bg-purple-50 border-purple-200',
                green: 'bg-green-50 border-green-200',
                orange: 'bg-orange-50 border-orange-200',
                pink: 'bg-pink-50 border-pink-200'
              };
              const iconColors = {
                teal: 'text-teal-600',
                blue: 'text-blue-600',
                purple: 'text-purple-600',
                green: 'text-green-600',
                orange: 'text-orange-600',
                pink: 'text-pink-600'
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 animate-fade-in-up">
              Eligibility Criteria
            </h2>
            <p className="text-lg text-gray-600 animate-fade-in-up delay-100">
              Check if you qualify for our loan program
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Business operational for 2+ years',
              'Minimum annual turnover of ₹30 Lakhs',
              'Positive cash flow',
              'Good credit rating'
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 animate-fade-in-up">
              Required Documents
            </h2>
            <p className="text-lg text-gray-600 animate-fade-in-up delay-100">
              Documents needed to process your application
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Business financial statements (2 years)',
              'Bank statements for the last 12 months',
              'Income Tax Returns (2 years)',
              'Stock and debtor statements',
              'Business registration proof',
              'PAN Card and Aadhaar Card'
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
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 animate-fade-in-up">
              Application Process
            </h2>
            <p className="text-lg text-gray-600 animate-fade-in-up delay-100">
              Simple steps to get your working capital loan approved
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: '1', title: 'Submit Application', desc: 'Fill out online form with basic details', Icon: FileText },
              { step: '2', title: 'Documentation', desc: 'Upload required documents for verification', Icon: Upload },
              { step: '3', title: 'Quick Approval', desc: 'Get approval within 48 hours', Icon: CheckSquare },
              { step: '4', title: 'Digital Signing', desc: 'E-sign loan agreement securely', Icon: FileCheck },
              { step: '5', title: 'Fund Disbursal', desc: 'Amount credited to your account', Icon: Banknote }
            ].map((item, index) => (
              <div key={index} className="relative p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm">
                  {item.step}
                </div>
                
                <item.Icon className="w-10 h-10 text-green-600 mb-4" />
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Apply for Your Working Capital Loan?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Keep your business operations running smoothly with flexible financing. Our team is ready to help you through every step of the process.
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

export default WorkingCapital;
