import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import OurGroups from './pages/OurGroups';
import BusinessLoans from './pages/BusinessLoans';
import MSMELoans from './pages/MSMELoans';
import WorkingCapital from './pages/WorkingCapital';
import ProjectFinance from './pages/ProjectFinance';
import PersonalLoan from './pages/PersonalLoan';
import CGTMSELoan from './pages/CGTMSELoan';
import ChequeBasedLoans from './pages/ChequeBasedLoans';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/our-groups" element={<OurGroups />} />
        <Route path="/business-loans" element={<BusinessLoans />} />
        <Route path="/msme-loans" element={<MSMELoans />} />
        <Route path="/working-capital" element={<WorkingCapital />} />
        <Route path="/project-finance" element={<ProjectFinance />} />
        <Route path="/personal-loan" element={<PersonalLoan />} />
        <Route path="/cgtmse-loan" element={<CGTMSELoan />} />
        <Route path="/cheque-based-loans" element={<ChequeBasedLoans />} />
      </Routes>
      <Footer />
      <a
        href="https://wa.me/919841078770"
        className="hidden md:block fixed bottom-8 right-8 z-50 rounded-full hover:scale-105 transition-transform"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
	          src="https://ik.imagekit.io/pradeepkrishna07/wa.png"
          alt="WhatsApp"
          className="w-16 h-16"
        />
      </a>
    </>
  );
}

export default App;
