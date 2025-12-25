import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Building2, PiggyBank, Calculator, Phone, Mail, CheckCircle2, Star, ArrowRight, MapPin, Twitter, Linkedin, Facebook, Users } from 'lucide-react';
import { SplitText } from '../components/SplitText';

function HomePage() {
  const [counters, setCounters] = useState({ years: 0, clients: 0, projects: 0, revenue: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { years: 10, clients: 3000, projects: 2500, revenue: 10 };
    const duration = 2000;
    const startTime = Date.now();

    const easeOutQuart = (x: number): number => {
      return 1 - Math.pow(1 - x, 4);
    };

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);

      setCounters({
        years: Math.floor(targets.years * easedProgress),
        clients: Math.floor(targets.clients * easedProgress),
        projects: Math.floor(targets.projects * easedProgress),
        revenue: Math.floor(targets.revenue * easedProgress),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  const testimonials = [
    {
      initials: 'JS',
      name: 'John Smith',
      role: 'CEO, Manufacturing Firm',
      quote:
        'CBS Groups has been instrumental in helping us achieve our financial goals. Their expertise and dedication are unmatched. The entire process felt transparent, simple, and designed around our growth.',
    },
    {
      initials: 'EJ',
      name: 'Emily Johnson',
      role: 'Marketing Manager, Retail Brand',
      quote:
        'Working with Chetana Business Solutions has been a game-changer. Their team understood our capital needs quickly and structured a solution that helped us scale without disrupting cash flow.',
    },
    {
      initials: 'RK',
      name: 'Rajesh Kumar',
      role: 'Founder, Logistics Startup',
      quote:
        'They helped us design a funding structure that matched our cash cycles. We could focus on expansion while they handled the complexity of finance.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center px-6 py-20 bg-white overflow-hidden">
        {/* Grid Background Pattern */}
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f0d_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0d_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_50%,transparent_100%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-12">
              <h1 className="text-4xl md:text-6xl font-bold text-[rgb(6,27,68)] leading-tight mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                <SplitText text="Leading Private Finance Solutions for " />
                <span className="text-green-600">
                  <SplitText text="Business Growth" />
                </span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                We act as your primary partner, providing the funding and support you need to expand without the stress. Our goal is to make finance simple, so you can focus on leading your company to its next big milestone.
              </p>
              
              {/* Customer Testimonial Badge */}
              <div className="flex items-center gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                {/* Profile Images */}
                <div className="flex -space-x-2">
                  <div className="w-12 h-12 rounded-full border-3 border-white overflow-hidden flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Customer" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full border-3 border-white overflow-hidden flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Customer" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full border-3 border-white overflow-hidden flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1500648067791-00dcc994a43e?w=100&h=100&fit=crop" alt="Customer" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full border-3 border-white overflow-hidden flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" alt="Customer" className="w-full h-full object-cover" />
                  </div>
                </div>
                
                {/* Stars and Text */}
                <div>
                  <div className="flex gap-1 mb-1">
                    <Star className="w-5 h-5 fill-teal-600 text-teal-600" />
                    <Star className="w-5 h-5 fill-teal-600 text-teal-600" />
                    <Star className="w-5 h-5 fill-teal-600 text-teal-600" />
                    <Star className="w-5 h-5 fill-teal-600 text-teal-600" />
                    <Star className="w-5 h-5 fill-teal-600 text-teal-600" />
                  </div>
                  <p className="text-[rgb(6,27,68)] font-semibold text-lg">1000+ Happy Customer</p>
                </div>
              </div>
              
              <div className="pt-6 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                <a href="#contact" className="btn-primary inline-block">Book a Call</a>
              </div>
            </div>

            {/* Right Side - Image with Floating Widget */}
            <div className="relative flex justify-center items-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              {/* Main Image - Person with Phone */}
              <div className="relative w-full h-full">
                <img 
                  src="https://ik.imagekit.io/pradeepkrishna07/herocbs.png" 
                  alt="Business Professional" 
                  className="w-full h-full object-contain"
                />

                {/* Floating Widget - Loan Approved */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7 text-green-600" />
                    </div>
                    <div>
                      <div className="text-[rgb(6,27,68)] text-lg font-bold">Loan Approved!</div>
                      <div className="text-gray-500 text-sm">Business Loan</div>
                    </div>
                  </div>
                  <div className="text-[rgb(6,27,68)] text-3xl font-bold mb-1">₹25,00,000</div>
                  <div className="text-gray-400 text-sm">Disbursed in 48 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto container-px">
          <p className="text-center text-sm font-medium text-gray-500 mb-10">We're trusted by:</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
            <div className="text-2xl font-bold">MSME</div>
            <div className="text-2xl font-bold">STARTUPS</div>
            <div className="text-2xl font-bold">SME</div>
            <div className="text-2xl font-bold">ENTERPRISES</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto container-px">
          <div className="text-center mb-4">
            <span className="text-sm font-medium text-brand">About us</span>
          </div>
          <h2
            className="section-title text-center mb-6 font-serif"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Welcome to CBS Groups
          </h2>
          <p className="section-subtitle text-center mb-12">
            What sets us apart is our holistic approach to financial services. We don't just focus on one aspect of your needs – we take a comprehensive view of your business, your goals, and your target audience to develop tailored strategies that drive real, measurable results.
          </p>
          <div className="text-center mb-16">
            <a href="#services" className="inline-flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all">
              More about us <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">{counters.years}</div>
              <div className="text-gray-600">Years of experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">{counters.clients.toLocaleString()}</div>
              <div className="text-gray-600">Satisfied clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">{counters.projects.toLocaleString()}</div>
              <div className="text-gray-600">Projects completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">{counters.revenue}M+</div>
              <div className="text-gray-600">Revenue generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto container-px">
          <div className="text-center mb-4">
            <span className="text-sm font-medium text-brand">Our services</span>
          </div>
          <h2
            className="section-title text-center mb-6 font-serif"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What We Offer
          </h2>
          <p className="section-subtitle text-center mb-16">
            We offer a comprehensive suite of financial services designed to help businesses thrive in today's competitive landscape.
          </p>

          {/* Featured Large Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Business Loans - Large Featured */}
            <Link to="/business-loans" className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-10 overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-brand/10 to-transparent rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Business Loans</h3>
                  <p className="text-gray-600 text-lg mb-6">
                    Our financial experts are dedicated to helping your business secure the capital it needs to grow and expand with flexible terms and competitive rates.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Loan Amount</div>
                      <div className="text-2xl font-bold text-brand">₹50L+</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-green-600 font-semibold">↑ 12.5%</div>
                      <div className="text-xs text-gray-500">Approval Rate</div>
                    </div>
                  </div>
                  {/* Mini Graph */}
                  <div className="h-16 flex items-end gap-1 mb-4">
                    <div className="w-full bg-brand/20 rounded-t" style={{height: '35%'}}></div>
                    <div className="w-full bg-brand/30 rounded-t" style={{height: '50%'}}></div>
                    <div className="w-full bg-brand/40 rounded-t" style={{height: '60%'}}></div>
                    <div className="w-full bg-brand/60 rounded-t" style={{height: '75%'}}></div>
                    <div className="w-full bg-brand rounded-t" style={{height: '90%'}}></div>
                    <div className="w-full bg-brand rounded-t" style={{height: '100%'}}></div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-900 font-semibold group-hover:gap-3 transition-all">
                    Explore Options <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Working Capital - Large Featured */}
            <Link to="/working-capital" className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-10 overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Working Capital</h3>
                  <p className="text-gray-600 text-lg mb-6">
                    Maintain healthy cash flow, build relationships, and drive operational efficiency across your business with our tailored solutions.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Processing Time</span>
                      <span className="text-sm font-bold text-emerald-600">24-48hrs</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                      <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-3 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-emerald-50 rounded-lg p-2">
                        <div className="text-xs text-gray-600">Min</div>
                        <div className="text-sm font-bold text-gray-900">₹5L</div>
                      </div>
                      <div className="bg-emerald-50 rounded-lg p-2">
                        <div className="text-xs text-gray-600">Rate</div>
                        <div className="text-sm font-bold text-gray-900">9.5%</div>
                      </div>
                      <div className="bg-emerald-50 rounded-lg p-2">
                        <div className="text-xs text-gray-600">Tenure</div>
                        <div className="text-sm font-bold text-gray-900">5 Yrs</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-900 font-semibold group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* MSME Loans - Full Width Featured */}
          <Link to="/msme-loans" className="group relative bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 rounded-3xl p-8 md:p-10 overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200 block mb-8">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">MSME Loans</h3>
                  <p className="text-gray-600 text-lg mb-6">
                    Nurture your business growth and drive conversions with our specialized MSME loan services and programs designed for small businesses.
                  </p>
                  <div className="flex items-center gap-2 text-gray-900 font-semibold group-hover:gap-3 transition-all">
                    Discover Benefits <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://ik.imagekit.io/pradeepkrishna07/msme.jpg" 
                    alt="MSME Loan Benefits"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* Other Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project Finance */}
            <Link to="/project-finance" className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-10 overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Project Finance</h3>
                  <p className="text-gray-600 text-base mb-6">
                    Gain valuable insights into your project's financial performance with our comprehensive project finance solutions.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-5 shadow-lg">
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="text-xs text-gray-600">Starting from</div>
                        <div className="text-xl font-bold text-gray-900">₹1 Cr+</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-600">ROI</div>
                        <div className="text-sm font-bold text-orange-600">15-20%</div>
                      </div>
                    </div>
                    {/* Line Chart */}
                    <div className="relative h-12 flex items-end">
                      <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                        <polyline
                          fill="none"
                          stroke="#f97316"
                          strokeWidth="2"
                          points="0,30 20,25 40,28 60,15 80,18 100,10"
                        />
                        <polyline
                          fill="url(#gradient)"
                          points="0,30 20,25 40,28 60,15 80,18 100,10 100,40 0,40"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-900 font-semibold group-hover:gap-3 transition-all text-sm">
                    More details <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Personal Loan */}
            <Link to="/personal-loan" className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-10 overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-rose-500/10 to-transparent rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Personal Loan</h3>
                  <p className="text-gray-600 text-base mb-6">
                    Maximize your financial goals with our personal loan services tailored to your unique needs and aspirations.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-5 shadow-lg">
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-xs text-gray-600">Up to</div>
                        <div className="text-xl font-bold text-gray-900">₹25 Lakhs</div>
                      </div>
                      <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-rose-600">5Y</span>
                      </div>
                    </div>
                    {/* Feature Pills */}
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-rose-50 text-rose-700 rounded-full text-xs font-medium">10.5% p.a.</span>
                      <span className="px-3 py-1 bg-rose-50 text-rose-700 rounded-full text-xs font-medium">Instant Approval</span>
                      <span className="px-3 py-1 bg-rose-50 text-rose-700 rounded-full text-xs font-medium">Zero Prepayment</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-900 font-semibold group-hover:gap-3 transition-all text-sm">
                    More details <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* CGTMSE Loan */}
            <Link to="/cgtmse-loan" className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-10 overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">CGTMSE Loan</h3>
                  <p className="text-gray-600 text-base mb-6">
                    Secure collateral-free financing for your MSME with our CGTMSE loan programs designed for growth.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-5 shadow-lg">
                  <div className="flex items-center gap-4">
                    {/* Shield Badge */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-600 mb-1">No Collateral Required</div>
                      <div className="text-xl font-bold text-gray-900 mb-2">₹2 Cr Max</div>
                      <div className="flex items-center gap-2 text-cyan-600 text-xs font-semibold">
                        <span className="w-2 h-2 bg-cyan-600 rounded-full"></span>
                        Govt. Guaranteed
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-900 font-semibold group-hover:gap-3 transition-all text-sm mt-3">
                    More details <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <a href="#contact" className="btn-secondary">View all services</a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto container-px">
          <div className="text-center mb-4">
            <span className="text-sm font-medium text-brand">Why choose us</span>
          </div>
          <h2
            className="section-title text-center mb-6 font-serif"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why go with CBS Groups?
          </h2>
          <p className="section-subtitle text-center mb-16">
            At CBS Groups, we understand that choosing the right financial partner is a crucial decision for your business.
          </p>

          <div className="space-y-8">
            {/* First Widget - Text Left, Image Right */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  {/* Point 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold text-gray-900">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
                      <p className="text-gray-600">
                        With years of experience in the industry, we have a proven track record of delivering exceptional results for our clients.
                      </p>
                    </div>
                  </div>

                  {/* Point 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold text-gray-900">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Tailored Solutions</h3>
                      <p className="text-gray-600">
                        Whether you're a small startup or a large enterprise, we'll work closely with you to develop customized strategies that align with your objectives.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image Right */}
                <div className="rounded-xl overflow-hidden h-[300px]">
                  <img src="https://ik.imagekit.io/pradeepkrishna07/data%20driven.png?updatedAt=1766435457399" alt="Data Driven Approach" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Second Widget - Image Left, Text Right */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image Left */}
                <div className="rounded-xl overflow-hidden h-[300px]">
                  <img src="https://ik.imagekit.io/pradeepkrishna07/customer%20sup.png?updatedAt=1766435243193" alt="Customer Support" className="w-full h-full object-cover" style={{objectPosition: '50% 25%'}} />
                </div>

                {/* Text Right */}
                <div className="space-y-6">
                  {/* Point 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold text-gray-900">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Results-Driven Approach</h3>
                      <p className="text-gray-600">
                        Whether your goal is to boost sales, increase brand awareness, or drive growth, we'll work tirelessly to help you achieve success.
                      </p>
                    </div>
                  </div>

                  {/* Point 4 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold text-gray-900">4</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Exceptional Customer Service</h3>
                      <p className="text-gray-600">
                        Your satisfaction is our top priority. Our dedicated team is here to ensure that your experience with us is nothing short of exceptional.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50/60">
        <div className="max-w-7xl mx-auto container-px">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column: section heading */}
            <div>
              <span className="text-sm font-semibold tracking-[0.25em] uppercase text-brand">
                Testimonial
              </span>
              <h2
                className="mt-6 text-4xl md:text-5xl font-serif text-gray-900 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                We build trust with
                <br />
                reviews from real clients.
              </h2>
              <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
                Boost your credibility by showcasing genuine experiences from businesses that have grown with
                Chetana Business Solutions.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <button
                  type="button"
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white transition-colors"
                  aria-label="Previous testimonial"
                  onClick={() =>
                    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                  }
                >
                  <span className="text-xl">&#8592;</span>
                </button>
                <button
                  type="button"
                  className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                  aria-label="Next testimonial"
                  onClick={() =>
                    setTestimonialIndex((prev) => (prev + 1) % testimonials.length)
                  }
                >
                  <span className="text-xl">&#8594;</span>
                </button>
              </div>
            </div>

            {/* Right column: testimonial carousel (single card within right half) */}
            <div className="relative">
              <div
                key={testimonialIndex}
                className="rounded-3xl bg-white/90 backdrop-blur border border-gray-200 shadow-xl p-8 transition-all duration-500 ease-out"
              >
                <div className="flex items-center gap-1 mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                  "{testimonials[testimonialIndex].quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
                    {testimonials[testimonialIndex].initials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonials[testimonialIndex].name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonials[testimonialIndex].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto container-px">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium text-gray-700 bg-blue-100 px-4 py-2 rounded-full">
                Contact us
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-serif"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ready to elevate your<br />digital presence?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Whether you have questions about our services, want to discuss your project in detail, or simply want to say hello, we're here to help.
            </p>

            {/* Large Contact Icons */}
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {/* WhatsApp */}
              <a 
                href="https://wa.me/919841078770" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 p-8 bg-white rounded-3xl border-2 border-gray-200 hover:border-green-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-24 h-24 bg-[#25D366] rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-600 mb-1">WhatsApp</div>
                  <div className="text-lg font-bold text-gray-900">+91 9841078770</div>
                </div>
              </a>

              {/* Phone */}
              <a 
                href="tel:+919841078770"
                className="group flex flex-col items-center gap-4 p-8 bg-white rounded-3xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src="https://images.icon-icons.com/317/PNG/512/phone-icon_34382.png" 
                    alt="Phone"
                    className="w-16 h-16"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-600 mb-1">Call Us</div>
                  <div className="text-lg font-bold text-gray-900">+91 9841078770</div>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:pradeep@cbsgroups.in"
                className="group flex flex-col items-center gap-4 p-8 bg-white rounded-3xl border-2 border-gray-200 hover:border-red-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src="https://images.icon-icons.com/2631/PNG/512/gmail_new_logo_icon_159149.png" 
                    alt="Gmail"
                    className="w-16 h-16"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-600 mb-1">Email Us</div>
                  <div className="text-lg font-bold text-gray-900">pradeep@cbsgroups.in</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
}

export default HomePage;
