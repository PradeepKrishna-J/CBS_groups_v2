import { Calendar, User, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding MSME Loans: A Complete Guide",
      excerpt: "Learn everything you need to know about MSME loans, eligibility criteria, benefits, and how to apply for funding for your small business.",
      author: "Pradeep Krishna",
      date: "December 15, 2024",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "MSME"
    },
    {
      id: 2,
      title: "Working Capital Management: Best Practices",
      excerpt: "Discover effective strategies for managing working capital to ensure smooth operations and sustainable business growth.",
      author: "Financial Team",
      date: "December 10, 2024",
      image: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Finance"
    },
    {
      id: 3,
      title: "Top 5 Benefits of Business Loans in 2024",
      excerpt: "Explore how business loans can accelerate your company's growth and provide the financial flexibility you need.",
      author: "CBS Groups",
      date: "December 5, 2024",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Business"
    },
    {
      id: 4,
      title: "CGTMSE Loan Scheme: Collateral-Free Financing",
      excerpt: "Understanding the CGTMSE loan scheme and how it helps small businesses secure funding without collateral.",
      author: "Loan Advisory",
      date: "November 28, 2024",
      image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Loans"
    },
    {
      id: 5,
      title: "Project Finance: Funding Your Next Big Venture",
      excerpt: "Learn how project finance works and how it can help you fund large-scale projects with structured financing.",
      author: "Project Team",
      date: "November 20, 2024",
      image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Projects"
    },
    {
      id: 6,
      title: "Financial Planning for Startups: Key Steps",
      excerpt: "Essential financial planning strategies every startup needs to know to build a sustainable business foundation.",
      author: "Startup Advisor",
      date: "November 15, 2024",
      image: "https://images.pexels.com/photos/7567526/pexels-photo-7567526.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Startups"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Hero Section with Grid Pattern */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0d_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0d_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_50%,transparent_100%)]"></div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-gray-200/50 shadow-sm animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Insights & Expertise</span>
          </div>
          
          {/* Heading with Playfair Display */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s', fontFamily: "'Playfair Display', serif" }}>
            <span className="block text-gray-900">Financial Insights</span>
            <span className="block mt-2 bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 bg-clip-text text-transparent">& Expert Advice</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Stay informed with the latest trends, tips, and strategies to help your business thrive financially.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group block bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 px-4 py-1.5 rounded-full font-semibold border border-green-100">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all duration-300">
                      Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 shadow-2xl relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Subscribe to Our Newsletter
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Get the latest financial insights and business tips delivered directly to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 border-2 border-white/20 bg-white/10 backdrop-blur-md text-white placeholder-white/60 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/30"
                />
                <button type="submit" className="px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
