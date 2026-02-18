import { useState, useEffect } from 'react';
import { Calculator, TrendingUp, PieChart, BarChart3, Download, RefreshCw } from 'lucide-react';

interface LoanDetails {
  principal: number;
  interestRate: number;
  tenure: number;
  loanType: string;
}

interface EMIBreakdown {
  month: number;
  emi: number;
  principal: number;
  interest: number;
  balance: number;
}

export function LoanCalculator() {
  const [loanDetails, setLoanDetails] = useState<LoanDetails>({
    principal: 1000000,
    interestRate: 10.5,
    tenure: 12,
    loanType: 'reducing',
  });

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [emiBreakdown, setEmiBreakdown] = useState<EMIBreakdown[]>([]);
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [selectedYear, setSelectedYear] = useState(1);

  useEffect(() => {
    calculateLoan();
  }, [loanDetails]);

  const calculateLoan = () => {
    const { principal, interestRate, tenure, loanType } = loanDetails;
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure;

    if (loanType === 'reducing') {
      // Reducing Balance EMI Calculation
      const emiValue =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
      
      setEmi(emiValue);
      const totalPayment = emiValue * months;
      const interestPayment = totalPayment - principal;
      
      setTotalAmount(totalPayment);
      setTotalInterest(interestPayment);

      // Generate EMI Breakdown
      const breakdown: EMIBreakdown[] = [];
      let balance = principal;

      for (let i = 1; i <= months; i++) {
        const interestPortion = balance * monthlyRate;
        const principalPortion = emiValue - interestPortion;
        balance -= principalPortion;

        breakdown.push({
          month: i,
          emi: emiValue,
          principal: principalPortion,
          interest: interestPortion,
          balance: Math.max(0, balance),
        });
      }

      setEmiBreakdown(breakdown);
    } else {
      // Flat Interest Calculation
      const totalInterestFlat = (principal * interestRate * tenure) / 12 / 100;
      const totalPaymentFlat = principal + totalInterestFlat;
      const emiFlat = totalPaymentFlat / months;

      setEmi(emiFlat);
      setTotalAmount(totalPaymentFlat);
      setTotalInterest(totalInterestFlat);

      // Generate EMI Breakdown for Flat
      const breakdown: EMIBreakdown[] = [];
      const principalPerMonth = principal / months;
      const interestPerMonth = totalInterestFlat / months;
      let balance = principal;

      for (let i = 1; i <= months; i++) {
        balance -= principalPerMonth;

        breakdown.push({
          month: i,
          emi: emiFlat,
          principal: principalPerMonth,
          interest: interestPerMonth,
          balance: Math.max(0, balance),
        });
      }

      setEmiBreakdown(breakdown);
    }
  };

  const handleReset = () => {
    setLoanDetails({
      principal: 1000000,
      interestRate: 10.5,
      tenure: 12,
      loanType: 'reducing',
    });
  };

  const downloadBreakdown = () => {
    const csvContent = [
      ['Month', 'EMI', 'Principal', 'Interest', 'Balance'],
      ...emiBreakdown.map(item => [
        item.month,
        item.emi.toFixed(2),
        item.principal.toFixed(2),
        item.interest.toFixed(2),
        item.balance.toFixed(2),
      ]),
    ]
      .map(row => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'loan_breakdown.csv';
    a.click();
  };

  const getYearBreakdown = (year: number) => {
    const startMonth = (year - 1) * 12;
    const endMonth = Math.min(year * 12, loanDetails.tenure);
    return emiBreakdown.slice(startMonth, endMonth);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const principalPercentage = (loanDetails.principal / totalAmount) * 100;
  const interestPercentage = (totalInterest / totalAmount) * 100;

  const totalYears = Math.ceil(loanDetails.tenure / 12);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto container-px">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-brand">Financial Planning</span>
          <h2
            className="section-title text-center mb-6 font-serif mt-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Advanced Loan Calculator
          </h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Plan your loan with precision. Calculate EMI, view detailed breakdowns, and make informed financial decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Panel - Calculator Input */}
          <div className="lg:col-span-1 bg-white rounded-3xl p-8 shadow-xl border border-gray-200 h-fit">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-brand/10 rounded-xl">
                <Calculator className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Loan Details</h3>
            </div>

            <div className="space-y-6">
              {/* Loan Amount */}
              <div>
                <label className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold text-gray-700">Loan Amount</span>
                  <span className="text-lg md:text-xl font-bold text-brand">{formatCurrency(loanDetails.principal)}</span>
                </label>
                <input
                  type="range"
                  min="100000"
                  max="10000000"
                  step="50000"
                  value={loanDetails.principal}
                  onChange={(e) =>
                    setLoanDetails({ ...loanDetails, principal: Number(e.target.value) })
                  }
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand"
                />
                <div className="flex justify-between items-center mt-3">
                  <input
                    type="number"
                    value={loanDetails.principal}
                    onChange={(e) =>
                      setLoanDetails({ ...loanDetails, principal: Number(e.target.value) })
                    }
                    className="w-32 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand text-sm md:text-base"
                  />
                  <span className="text-xs md:text-sm text-gray-500">₹1L - ₹1Cr</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <label className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold text-gray-700">Interest Rate (p.a.)</span>
                  <span className="text-lg md:text-xl font-bold text-brand">{loanDetails.interestRate}%</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="0.1"
                  value={loanDetails.interestRate}
                  onChange={(e) =>
                    setLoanDetails({ ...loanDetails, interestRate: Number(e.target.value) })
                  }
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand"
                />
                <div className="flex justify-between items-center mt-3">
                  <input
                    type="number"
                    value={loanDetails.interestRate}
                    onChange={(e) =>
                      setLoanDetails({ ...loanDetails, interestRate: Number(e.target.value) })
                    }
                    step="0.1"
                    className="w-32 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand text-sm md:text-base"
                  />
                  <span className="text-xs md:text-sm text-gray-500">5% - 30%</span>
                </div>
              </div>

              {/* Loan Tenure */}
              <div>
                <label className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold text-gray-700">Loan Tenure</span>
                  <span className="text-lg md:text-xl font-bold text-brand">{Math.floor(loanDetails.tenure / 12)}Y {loanDetails.tenure % 12}M</span>
                </label>
                <input
                  type="range"
                  min="6"
                  max="360"
                  step="6"
                  value={loanDetails.tenure}
                  onChange={(e) =>
                    setLoanDetails({ ...loanDetails, tenure: Number(e.target.value) })
                  }
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand"
                />
                <div className="flex justify-between items-center mt-3">
                  <div className="relative w-32">
                    <input
                      type="number"
                      value={loanDetails.tenure}
                      onChange={(e) =>
                        setLoanDetails({ ...loanDetails, tenure: Number(e.target.value) })
                      }
                      className="w-full px-4 py-2 pr-16 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand text-sm md:text-base"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs md:text-sm text-gray-500 pointer-events-none">
                      Months
                    </span>
                  </div>
                  <span className="text-xs md:text-sm text-gray-500">
                    {Math.floor(loanDetails.tenure / 12)}Y {loanDetails.tenure % 12}M
                  </span>
                </div>
              </div>

              {/* Loan Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Interest Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setLoanDetails({ ...loanDetails, loanType: 'reducing' })}
                    className={`px-4 py-3 rounded-xl font-medium transition-all ${
                      loanDetails.loanType === 'reducing'
                        ? 'bg-brand text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Reducing
                  </button>
                  <button
                    onClick={() => setLoanDetails({ ...loanDetails, loanType: 'flat' })}
                    className={`px-4 py-3 rounded-xl font-medium transition-all ${
                      loanDetails.loanType === 'flat'
                        ? 'bg-brand text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Flat
                  </button>
                </div>
              </div>

              {/* Reset Button */}
              <button
                onClick={handleReset}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                Reset Calculator
              </button>
            </div>
          </div>

          {/* Right Panel - Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* EMI Cards - Mobile Optimized */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {/* Monthly EMI */}
              <div className="bg-gradient-to-br from-brand to-blue-700 rounded-3xl p-6 text-white shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs font-medium opacity-90">Monthly EMI</span>
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-2">{formatCurrency(emi)}</div>
                <div className="text-xs opacity-80">
                  For {Math.floor(loanDetails.tenure / 12)} years {loanDetails.tenure % 12} months
                </div>
              </div>

              {/* Total Interest */}
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-6 text-white shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <PieChart className="w-4 h-4" />
                  <span className="text-xs font-medium opacity-90">Total Interest</span>
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-2">{formatCurrency(totalInterest)}</div>
                <div className="text-xs opacity-80">
                  {interestPercentage.toFixed(1)}% of total amount
                </div>
              </div>

              {/* Total Amount */}
              <div className="bg-gradient-to-br from-emerald-500 to-green-700 rounded-3xl p-6 text-white shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 className="w-4 h-4" />
                  <span className="text-xs font-medium opacity-90">Total Payment</span>
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-2">{formatCurrency(totalAmount)}</div>
                <div className="text-xs opacity-80">Principal + Interest</div>
              </div>
            </div>

            {/* Year-wise EMI Schedule */}
            <div className="hidden md:block bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-bold text-gray-900">
                    Year-wise EMI Schedule
                  </h4>
                  <button
                    onClick={downloadBreakdown}
                    className="flex items-center gap-2 px-4 py-2 bg-brand text-white rounded-xl font-semibold hover:bg-blue-700 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    Download CSV
                  </button>
                </div>

                {/* Year Selector */}
                {totalYears > 1 && (
                  <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                    {Array.from({ length: totalYears }, (_, i) => i + 1).map((year) => (
                      <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        className={`px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-all ${
                          selectedYear === year
                            ? 'bg-brand text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Year {year}
                      </button>
                    ))}
                  </div>
                )}

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                          Month
                        </th>
                        <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">
                          EMI
                        </th>
                        <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">
                          Principal
                        </th>
                        <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">
                          Interest
                        </th>
                        <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">
                          Balance
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {getYearBreakdown(selectedYear).map((item) => (
                        <tr key={item.month} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 text-sm text-gray-900 font-medium">
                            {item.month}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-900 text-right">
                            {formatCurrency(item.emi)}
                          </td>
                          <td className="py-3 px-4 text-sm text-brand text-right font-medium">
                            {formatCurrency(item.principal)}
                          </td>
                          <td className="py-3 px-4 text-sm text-orange-600 text-right font-medium">
                            {formatCurrency(item.interest)}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600 text-right">
                            {formatCurrency(item.balance)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand mb-2">
                {loanDetails.loanType === 'reducing' ? 'Reducing Balance' : 'Flat Rate'}
              </div>
              <div className="text-sm text-gray-600">Interest Calculation Method</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand mb-2">
                {(totalInterest / loanDetails.principal * 100).toFixed(2)}%
              </div>
              <div className="text-sm text-gray-600">Effective Interest Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand mb-2">
                {formatCurrency(emi * 12)}
              </div>
              <div className="text-sm text-gray-600">Annual Payment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
