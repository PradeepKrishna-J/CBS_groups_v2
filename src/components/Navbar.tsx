import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone, Mail } from 'lucide-react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-sm">
            {/* Contact Number */}
            <a href="tel:+919841078770" className="flex items-center gap-2 hover:text-green-200 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+91 9841078770</span>
            </a>
            
            {/* Email */}
            <a href="mailto:pradeep@cbsgroups.in" className="flex items-center gap-2 hover:text-green-200 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="font-medium">pradeep@cbsgroups.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="fixed top-10 left-0 right-0 z-40 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://lh3.googleusercontent.com/p/AF1QipNzpQtjnPBu9klz6AL2U7Nk4rZJIZbEXbKZvpxC=s1360-w1360-h1020-rw" 
              alt="CBS Groups Logo" 
              className="h-12 w-auto object-contain" 
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900 leading-tight">Chetana Business Solutions</span>
              <span className="text-[10px] text-gray-600 font-medium leading-tight">EMPOWERING ENTREPRENEURS</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
              Home
            </Link>
            
            <Link to="/about" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
              About Us
            </Link>
            
            {/* Loans Dropdown */}
            <div 
              className="relative group"
            >
              <button className="flex items-center gap-1 text-gray-700 font-medium hover:text-blue-600 transition-colors">
                Loans <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-2xl border border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/business-loans" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  Business Loans
                </Link>
                <Link to="/msme-loans" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  MSME Loans
                </Link>
                <Link to="/working-capital" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  Working Capital
                </Link>
                <Link to="/project-finance" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  Project Finance
                </Link>
                <Link to="/personal-loan" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  Personal Loan
                </Link>
                <Link to="/cgtmse-loan" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  CGTMSE Loan
                </Link>
                <Link to="/cheque-based-loans" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  Cheque Based Loans
                </Link>
              </div>
            </div>
            
            <Link to="/emi-calculator" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
              EMI Calculator
            </Link>
            
            <Link to="/blog" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
              Blog
            </Link>
            
            <Link to="/our-groups" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
              Our Groups
            </Link>
            
            <a 
              href="/#contact" 
              className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg"
            >
              Get Started
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-2">
            <Link 
              to="/" 
              className="block px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className="block px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            
            {/* Loans Section */}
            <div className="pt-2">
              <div className="px-4 py-2 text-sm font-bold text-gray-900">Loans</div>
              <div className="space-y-1">
                <Link to="/business-loans" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Business Loans
                </Link>
                <Link to="/msme-loans" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  MSME Loans
                </Link>
                <Link to="/working-capital" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Working Capital
                </Link>
                <Link to="/project-finance" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Project Finance
                </Link>
                <Link to="/personal-loan" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Personal Loan
                </Link>
                <Link to="/cgtmse-loan" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  CGTMSE Loan
                </Link>
                <Link to="/cheque-based-loans" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Cheque Based Loans
                </Link>
              </div>
            </div>

            <Link 
              to="/emi-calculator" 
              className="block px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              EMI Calculator
            </Link>
            
            <Link 
              to="/blog" 
              className="block px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            
            <Link 
              to="/our-groups" 
              className="block px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Groups
            </Link>
            
            <a 
              href="/#contact" 
              className="block mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all text-center" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}

export default Navbar;
