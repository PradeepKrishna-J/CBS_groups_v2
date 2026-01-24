import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle, FileText, ArrowRight, Shield, Upload, FileCheck, CheckSquare, Banknote } from 'lucide-react';

function MSMELoans() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white">
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
                <span className="text-sm font-medium text-green-700">MSME Finance</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 animate-slide-in-left delay-100">
                MSME Loans
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-slide-in-left delay-200">
                Empowering Micro, Small and Medium Enterprises with accessible funding solutions. Our MSME Loans offer competitive rates, flexible terms, and quick approvals to help your business thrive and scale operations efficiently.
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
                <div className="text-3xl font-bold text-green-600 mb-2">₹1Cr+</div>
                <div className="text-sm text-gray-600 font-medium">Maximum Loan Amount</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow animate-bounce-in delay-300">
                <div className="text-3xl font-bold text-green-600 mb-2">10%</div>
                <div className="text-sm text-gray-600 font-medium">Interest Rate Starting</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow animate-bounce-in delay-400">
                <div className="text-3xl font-bold text-green-600 mb-2">24hrs</div>
                <div className="text-sm text-gray-600 font-medium">Quick Approval</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow animate-bounce-in delay-500">
                <div className="text-3xl font-bold text-green-600 mb-2">84mo</div>
                <div className="text-sm text-gray-600 font-medium">Flexible Tenure</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 animate-fade-in-up">
              Key Features of Our MSME Loans
            </h2>
            <p className="text-lg text-gray-600 animate-fade-in-up delay-100">
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
              <div key={index} className={`flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in delay-${(index + 1) * 100}`}>
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents Grid Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-4 animate-fade-in">REQUIREMENTS</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 animate-fade-in-up">
              Eligibility & Documentation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-100">
              Simple requirements to get started with your MSME loan application
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
                  'Business vintage of at least 1 year',
                  'Minimum annual turnover of ₹10 Lakhs',
                  'Valid MSME/Udyam registration',
                  'Satisfactory credit score and repayment history'
                ].map((criterion, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white">
                    <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
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
                  'MSME/Udyam registration certificate',
                  'Business registration documents',
                  'PAN Card and Aadhaar Card of proprietor/partners',
                  'Bank statements for the last 6 months',
                  'Income Tax Returns for the last 2 years',
                  'GST returns (if applicable)'
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
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 animate-fade-in-up">
              Application Process
            </h2>
            <p className="text-lg text-gray-600 animate-fade-in-up delay-100">
              Simple steps to get your MSME loan approved
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: '1', title: 'Online Application', desc: 'Submit application with basic business details', Icon: FileText },
              { step: '2', title: 'Document Upload', desc: 'Upload required documents for verification', Icon: Upload },
              { step: '3', title: 'Quick Approval', desc: 'Get approval within 24-48 hours', Icon: CheckSquare },
              { step: '4', title: 'E-Signing', desc: 'Digitally sign loan agreement', Icon: FileCheck },
              { step: '5', title: 'Fund Transfer', desc: 'Funds transferred to your account', Icon: Banknote }
            ].map((item, index) => (
              <div key={index} className={`relative p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up delay-${(index + 1) * 100}`}>
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
          <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 shadow-2xl relative overflow-hidden animate-scale-in">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
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
