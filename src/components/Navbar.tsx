import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

function Navbar() {
  const [isLoansDropdownOpen, setIsLoansDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-white backdrop-blur-md border border-gray-200/50 rounded-full shadow-lg px-8 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4">
          <img src="https://ik.imagekit.io/pradeepkrishna07/2.png" alt="CBS Groups Logo" className="h-12 w-auto object-contain" style={{objectPosition: 'center', imageRendering: 'crisp-edges'}} />
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
      </div>
    </nav>
  );
}

export default Navbar;
