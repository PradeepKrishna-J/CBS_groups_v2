const fs = require('fs');
const path = require('path');

const navFooterTemplate = {
  nav: `      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-[#1A1D21]">
            CBS<span className="text-[#8ED83F]">GROUPS</span>
          </Link>
          <div className="hidden md:flex gap-8 text-[#1A1D21] font-medium items-center">
            <Link to="/" className="hover:text-[#8ED83F] transition-colors">Home</Link>
            <a href="#about" className="hover:text-[#8ED83F] transition-colors">About Us</a>
            <div 
              className="relative z-50"
              onMouseEnter={() => setIsLoansDropdownOpen(true)}
              onMouseLeave={() => setIsLoansDropdownOpen(false)}
            >
              <button 
                className="flex items-center gap-1 hover:text-[#8ED83F] transition-colors"
                onClick={() => setIsLoansDropdownOpen(!isLoansDropdownOpen)}
              >
                Loans <ChevronDown className={\`w-4 h-4 transition-transform \${isLoansDropdownOpen ? 'rotate-180' : ''}\`} />
              </button>
              {isLoansDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl py-4 px-6 min-w-[240px] border border-gray-100 z-50"
                  onClick={() => setIsLoansDropdownOpen(false)}
                >
                  <Link to="/business-loans" className="block py-2 hover:text-[#8ED83F] transition-colors text-[#1A1D21]">Business Loans</Link>
                  <Link to="/msme-loans" className="block py-2 hover:text-[#8ED83F] transition-colors text-[#1A1D21]">MSME Loans</Link>
                  <Link to="/working-capital" className="block py-2 hover:text-[#8ED83F] transition-colors text-[#1A1D21]">Working Capital Loans</Link>
                  <Link to="/project-finance" className="block py-2 hover:text-[#8ED83F] transition-colors text-[#1A1D21]">Project Finance</Link>
                  <Link to="/personal-loan" className="block py-2 hover:text-[#8ED83F] transition-colors text-[#1A1D21]">Personal Loan</Link>
                  <Link to="/cgtmse-loan" className="block py-2 hover:text-[#8ED83F] transition-colors text-[#1A1D21]">CGTMSE Loan</Link>
                  <Link to="/cheque-based-loans" className="block py-2 hover:text-[#8ED83F] transition-colors text-[#1A1D21]">Cheque Based Loans</Link>
                </div>
              )}
            </div>
            <a href="#blog" className="hover:text-[#8ED83F] transition-colors">Blog</a>
            <a href="#contact" className="hover:text-[#8ED83F] transition-colors">Contact</a>
          </div>
          <button className="hidden md:block border-2 border-[#1A1D21] text-[#1A1D21] px-6 py-2 rounded-lg font-semibold hover:bg-[#1A1D21] hover:text-white transition-all">
            Get Free Consultation
          </button>
        </div>
      </nav>

`,
  footer: `
      <footer className="footer_dark_multi bg-[#1A1D21] text-white pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 mb-12 items-start">
            <div className="grid grid-cols-3 gap-x-8">
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-white">CBS<span className="text-[#8ED83F]">GROUPS</span></h3>
                <p className="text-gray-400 text-sm leading-relaxed pr-4">Providing comprehensive financial solutions to businesses since 2010.</p>
              </div>

              <div className="flex flex-col">
                <h4 className="text-lg font-bold mb-6 text-[#8ED83F] leading-tight">Our Loan Products</h4>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li><Link to="/business-loans" className="hover:text-[#8ED83F] transition-colors">Business Loans</Link></li>
                  <li><Link to="/msme-loans" className="hover:text-[#8ED83F] transition-colors">MSME Loans</Link></li>
                  <li><Link to="/working-capital" className="hover:text-[#8ED83F] transition-colors">Working Capital</Link></li>
                  <li><Link to="/project-finance" className="hover:text-[#8ED83F] transition-colors">Project Finance</Link></li>
                  <li><Link to="/personal-loan" className="hover:text-[#8ED83F] transition-colors">Personal Loan</Link></li>
                  <li><Link to="/cgtmse-loan" className="hover:text-[#8ED83F] transition-colors">CGTMSE Loan</Link></li>
                  <li><Link to="/cheque-based-loans" className="hover:text-[#8ED83F] transition-colors">Cheque Based</Link></li>
                </ul>
              </div>

              <div className="flex flex-col">
                <h4 className="text-lg font-bold mb-6 text-[#8ED83F] leading-tight">Contact Us</h4>
                <div className="space-y-4 text-gray-300 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#8ED83F] mt-0.5 flex-shrink-0" />
                    <span>No.20, Ground floor, 1st Main Rd, Srinivasa Nagar, Kolathur, Chennai, Tamil Nadu 600099</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#8ED83F] flex-shrink-0" />
                    <a href="tel:+919841078770" className="hover:text-[#8ED83F] transition-colors">+91 9841078770</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#8ED83F] flex-shrink-0" />
                    <a href="mailto:pradeep@cbsgroups.in" className="hover:text-[#8ED83F] transition-colors break-all">pradeep@cbsgroups.in</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <h4 className="text-lg font-bold mb-6 text-[#8ED83F] leading-tight">Find Us</h4>
              <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.219!2d80.20486815868249!3d13.118719322725612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA3JzA3LjQiTiA4MMKwMTInMTcuNSJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CBS Groups Location"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">&copy; 2024 CBSGROUPS. All rights reserved.</p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#8ED83F] hover:text-[#1A1D21] transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#8ED83F] hover:text-[#1A1D21] transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#8ED83F] hover:text-[#1A1D21] transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>`
};

console.log('Update script created. Run manually on each file.');
