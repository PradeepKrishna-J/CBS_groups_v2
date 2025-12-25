import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto container-px">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.5fr] gap-6 mb-12">
          <div>
            <div className="mb-4">
              <img src="https://ik.imagekit.io/pradeepkrishna07/footercbs.png" alt="CBS Groups Logo" className="h-16 w-auto object-contain" style={{objectPosition: 'center', imageRendering: 'crisp-edges'}} />
            </div>
            <p className="text-gray-400 text-sm mb-6">
              CBS Groups is a dynamic financial services agency dedicated to propelling businesses to success.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Loan Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/business-loans" className="hover:text-white transition-colors">Business Loans</Link></li>
              <li><Link to="/msme-loans" className="hover:text-white transition-colors">MSME Loans</Link></li>
              <li><Link to="/working-capital" className="hover:text-white transition-colors">Working Capital</Link></li>
              <li><Link to="/project-finance" className="hover:text-white transition-colors">Project Finance</Link></li>
              <li><Link to="/personal-loan" className="hover:text-white transition-colors">Personal Loan</Link></li>
              <li><Link to="/cgtmse-loan" className="hover:text-white transition-colors">CGTMSE Loan</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span>No.20, Ground floor, 1st Main Rd, Srinivasa Nagar, Kolathur, Chennai, Tamil Nadu 600099</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+919841078770" className="hover:text-white transition-colors">+91 9841078770</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:pradeep@cbsgroups.in" className="hover:text-white transition-colors">pradeep@cbsgroups.in</a>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden h-[200px] w-full">
            <iframe
              src="https://www.google.com/maps?q=13.118723548641249,80.2048747035514&hl=es;z=14&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CBS Groups Location"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; 2024 CBS Groups. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
