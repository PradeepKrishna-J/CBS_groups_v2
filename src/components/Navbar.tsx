import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

function Navbar() {
  const [isLoansDropdownOpen, setIsLoansDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-white backdrop-blur-md border border-gray-200/50 rounded-full shadow-lg px-8 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4">
          <img src="https://lh3.googleusercontent.com/p/AF1QipNzpQtjnPBu9klz6AL2U7Nk4rZJIZbEXbKZvpxC=s1360-w1360-h1020-rw" alt="CBS Groups Logo" className="h-12 w-auto object-contain" style={{objectPosition: 'center', imageRendering: 'crisp-edges'}} />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900 leading-tight">Chetana Business Solutions</span>
            <span className="text-[10px] text-gray-600 font-medium leading-tight">EMPOWERING ENTREPRENEURS</span>
          </div>
        </Link>
        
        <div className="hidden md:flex gap-8 text-gray-700 font-medium items-center">
          <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-gray-900 transition-colors">About Us</Link>
          <div 
            className="relative"
            onMouseEnter={() => setIsLoansDropdownOpen(true)}
            onMouseLeave={() => setIsLoansDropdownOpen(false)}
          >
            <button 
              className="flex items-center gap-1 hover:text-gray-900 transition-colors"
              onClick={() => setIsLoansDropdownOpen(!isLoansDropdownOpen)}
            >
              Loans <ChevronDown className={`w-4 h-4 transition-transform ${isLoansDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isLoansDropdownOpen && (
              <div 
                className="absolute top-full left-0 pt-3 bg-transparent"
                onMouseEnter={() => setIsLoansDropdownOpen(true)}
                onMouseLeave={() => setIsLoansDropdownOpen(false)}
              >
                <div className="bg-white backdrop-blur-md rounded-2xl shadow-xl py-4 px-6 min-w-[240px] border border-gray-200/50">
                  <Link to="/business-loans" className="block py-2 hover:text-blue-600 transition-colors">Business Loans</Link>
                  <Link to="/msme-loans" className="block py-2 hover:text-blue-600 transition-colors">MSME Loans</Link>
                  <Link to="/working-capital" className="block py-2 hover:text-blue-600 transition-colors">Working Capital</Link>
                  <Link to="/project-finance" className="block py-2 hover:text-blue-600 transition-colors">Project Finance</Link>
                  <Link to="/personal-loan" className="block py-2 hover:text-blue-600 transition-colors">Personal Loan</Link>
                  <Link to="/cgtmse-loan" className="block py-2 hover:text-blue-600 transition-colors">CGTMSE Loan</Link>
                  <Link to="/cheque-based-loans" className="block py-2 hover:text-blue-600 transition-colors">Cheque Based Loans</Link>
                </div>
              </div>
            )}
          </div>
          <Link to="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
          <Link to="/our-groups" className="hover:text-gray-900 transition-colors">Our Groups</Link>
        </div>
        
        <a href="/#contact" className="hidden md:block border-2 border-gray-900 text-gray-900 font-medium px-6 py-2.5 rounded-full hover:bg-gray-900 hover:text-white transition-all">Get Started</a>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white backdrop-blur-md border border-gray-200/50 rounded-3xl shadow-2xl p-6 animate-fade-in-up">
          <div className="flex flex-col gap-3 text-gray-700 font-medium">
            <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-all" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Home
            </Link>
            <Link to="/about" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-all" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              About Us
            </Link>
            
            <div className="border-t border-gray-200 mt-2 pt-4 pb-2">
              <div className="flex items-center gap-2 px-4 mb-3">
                <span className="text-sm font-bold text-gray-900">Loans</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">7</span>
              </div>
              <div className="flex flex-col gap-1">
                <Link to="/business-loans" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all group" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-8 h-8 rounded-lg bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600 transition-all">BL</span>
                  Business Loans
                </Link>
                <Link to="/msme-loans" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-50 hover:text-green-600 transition-all group" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-8 h-8 rounded-lg bg-green-50 group-hover:bg-green-100 flex items-center justify-center text-xs font-bold text-green-600 transition-all">MS</span>
                  MSME Loans
                </Link>
                <Link to="/working-capital" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-teal-50 hover:text-teal-600 transition-all group" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-8 h-8 rounded-lg bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center text-xs font-bold text-teal-600 transition-all">WC</span>
                  Working Capital
                </Link>
                <Link to="/project-finance" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-all group" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-8 h-8 rounded-lg bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-600 transition-all">PF</span>
                  Project Finance
                </Link>
                <Link to="/personal-loan" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-purple-50 hover:text-purple-600 transition-all group" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-8 h-8 rounded-lg bg-purple-50 group-hover:bg-purple-100 flex items-center justify-center text-xs font-bold text-purple-600 transition-all">PL</span>
                  Personal Loan
                </Link>
                <Link to="/cgtmse-loan" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-all group" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-8 h-8 rounded-lg bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center text-xs font-bold text-orange-600 transition-all">CG</span>
                  CGTMSE Loan
                </Link>
                <Link to="/cheque-based-loans" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 hover:text-red-600 transition-all group" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-8 h-8 rounded-lg bg-red-50 group-hover:bg-red-100 flex items-center justify-center text-xs font-bold text-red-600 transition-all">CB</span>
                  Cheque Based Loans
                </Link>
              </div>
            </div>
            
            <Link to="/blog" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-all" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              Blog
            </Link>
            <Link to="/our-groups" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-all" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              Our Groups
            </Link>
            
            <a href="/#contact" className="mt-4 border-2 border-gray-900 text-gray-900 font-medium px-6 py-3 rounded-xl hover:bg-gray-900 hover:text-white transition-all text-center" onClick={() => setIsMobileMenuOpen(false)}>Get Started</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
