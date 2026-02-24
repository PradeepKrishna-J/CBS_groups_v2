import { useState } from 'react';
import { Calculator, DollarSign, Percent, Calendar, TrendingUp, Award, Building2 } from 'lucide-react';

interface LoanType {
  name: string;
  interestRate: string;
  maxAmount: string;
  maxTenure: string;
  icon: typeof Building2;
  color: string;
}

function LoanCalculatorPage() {
  const [selectedLoan, setSelectedLoan] = useState<string>('business');

  const loanTypes: Record<string, LoanType> = {
    business: {
      name: 'Business Loan',
      interestRate: '12% - 18%',
      maxAmount: '₹2 Cr',
      maxTenure: '7 Years',
      icon: Building2,
      color: 'blue'
    },
    msme: {
      name: 'MSME Loan',
      interestRate: '10% - 15%',
      maxAmount: '₹1 Cr',
      maxTenure: '5 Years',
      icon: Award,
      color: 'green'
    },
    personal: {
      name: 'Personal Loan',
      interestRate: '11% - 16%',
      maxAmount: '₹25 Lakh',
      maxTenure: '5 Years',
      icon: DollarSign,
      color: 'purple'
    },
    working: {
      name: 'Working Capital',
      interestRate: '11% - 17%',
      maxAmount: '₹1.5 Cr',
      maxTenure: '3 Years',
      icon: TrendingUp,
      color: 'teal'
    }
  };

  const currentLoan = loanTypes[selectedLoan];
  const Icon = currentLoan.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-50 border border-blue-200">
            <Calculator className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Financial Tools</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Loan Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Compare different loan types and find the best option for your financial needs. Get instant estimates for various loan products offered by CBS Groups.
          </p>
        </div>

        {/* Loan Type Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {Object.entries(loanTypes).map(([key, loan]) => {
            const LoanIcon = loan.icon;
            const isSelected = selectedLoan === key;
            const colorClasses = {
              blue: isSelected ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-200 hover:border-blue-600',
              green: isSelected ? 'bg-green-600 text-white border-green-600' : 'bg-white text-gray-700 border-gray-200 hover:border-green-600',
              purple: isSelected ? 'bg-purple-600 text-white border-purple-600' : 'bg-white text-gray-700 border-gray-200 hover:border-purple-600',
              teal: isSelected ? 'bg-teal-600 text-white border-teal-600' : 'bg-white text-gray-700 border-gray-200 hover:border-teal-600'
            };

            return (
              <button
                key={key}
                onClick={() => setSelectedLoan(key)}
                className={`p-6 rounded-2xl border-2 transition-all ${colorClasses[loan.color as keyof typeof colorClasses]}`}
              >
                <LoanIcon className="w-8 h-8 mb-3 mx-auto" />
                <div className="text-sm font-semibold">{loan.name}</div>
              </button>
            );
          })}
        </div>

        {/* Main Calculator Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">{currentLoan.name}</h2>
                <p className="text-blue-100 text-sm">Get instant loan estimates</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Loan Details Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100">
                <div className="flex items-center gap-3 mb-3">
                  <Percent className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-semibold text-gray-700">Interest Rate</span>
                </div>
                <div className="text-2xl font-bold text-orange-600">{currentLoan.interestRate}</div>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <div className="flex items-center gap-3 mb-3">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-semibold text-gray-700">Maximum Amount</span>
                </div>
                <div className="text-2xl font-bold text-green-600">{currentLoan.maxAmount}</div>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-semibold text-gray-700">Maximum Tenure</span>
                </div>
                <div className="text-2xl font-bold text-blue-600">{currentLoan.maxTenure}</div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Quick Approval</div>
                    <div className="text-sm text-gray-600">Get approved within 24-48 hours</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Flexible Repayment</div>
                    <div className="text-sm text-gray-600">Choose tenure that suits you</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Minimal Documentation</div>
                    <div className="text-sm text-gray-600">Easy paperwork process</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Competitive Rates</div>
                    <div className="text-sm text-gray-600">Best interest rates in market</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Ready to Apply?</h4>
                  <p className="text-gray-600">Get in touch with our loan experts today</p>
                </div>
                <a
                  href="/#contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105 whitespace-nowrap"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="p-8 bg-white rounded-2xl border border-gray-200">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Use EMI Calculator</h3>
            <p className="text-gray-600 mb-4">Calculate exact monthly payments with our advanced EMI calculator</p>
            <a href="/emi-calculator" className="text-blue-600 font-semibold hover:underline">
              Try EMI Calculator →
            </a>
          </div>

          <div className="p-8 bg-white rounded-2xl border border-gray-200">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Expert Guidance</h3>
            <p className="text-gray-600 mb-4">Our financial experts are here to help you choose the right loan</p>
            <a href="/#contact" className="text-blue-600 font-semibold hover:underline">
              Contact Us →
            </a>
          </div>

          <div className="p-8 bg-white rounded-2xl border border-gray-200">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Fast Processing</h3>
            <p className="text-gray-600 mb-4">Quick documentation and approval process with minimal hassle</p>
            <a href="/about" className="text-blue-600 font-semibold hover:underline">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanCalculatorPage;
