import React, { useEffect, useState } from 'react';
import { ChevronRight, Shield, Trophy, Users, Zap, Crown, Clock } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Decentralized & Secure",
      description: "Play on SmartHoldem blockchain with complete transparency and security. Every hand is verifiable on-chain."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Tournament System",
      description: "Compete in high-stakes tournaments with guaranteed prize pools. Professional tournament structure designed for serious players."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Influencer Tournaments",
      description: "Create your own branded poker tournaments. Build your community and host custom events with your rules."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Payouts",
      description: "Win and withdraw instantly with STH cryptocurrency. No waiting, no intermediaries, just pure speed."
    }
  ];

  const advantages = [
    "Zero house edge on peer-to-peer games",
    "Provably fair gameplay verified on blockchain",
    "Lower rake compared to traditional poker rooms",
    "Anonymous play - no KYC required",
    "Global player pool with no restrictions",
    "Smart contract escrow for all funds"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="dark-header">
        <div className="flex items-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_smartholdem-poker/artifacts/kqhvt3nj_sth256x256.png" 
            alt="SmartHoldem" 
            className="h-12 w-12 object-contain"
          />
          <span className="ml-3 text-xl font-semibold">SmartHoldem Poker</span>
        </div>
        
        <div className="dark-nav hidden md:flex">
          <a href="#features" className="dark-nav-link">Features</a>
          <a href="#advantages" className="dark-nav-link">Advantages</a>
          <a href="#register" className="dark-nav-link">Early Access</a>
        </div>

        <a 
          href="https://google.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Register Now
          <ChevronRight className="w-5 h-5" />
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-[7.6923%] overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 60px),
                             repeating-linear-gradient(-90deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 60px)`
          }}></div>
        </div>

        {/* Floating poker chips animation */}
        <div className="absolute top-20 left-[10%] w-16 h-16 rounded-full bg-brand-primary opacity-20 blur-xl animate-float"></div>
        <div className="absolute top-40 right-[15%] w-24 h-24 rounded-full bg-brand-primary opacity-15 blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-[20%] w-20 h-20 rounded-full bg-brand-primary opacity-10 blur-xl animate-float-slow"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-primary/30 bg-brand-primary/5 mb-8 animate-pulse-subtle">
              <Crown className="w-5 h-5 text-brand-primary" />
              <span className="text-brand-primary text-sm font-medium">VIP Early Access • Limited Spots</span>
            </div>

            <h1 className="display-huge mb-6">
              The Future of
              <span className="block mt-2 text-brand-primary">Decentralized Poker</span>
            </h1>

            <p className="body-large text-text-secondary max-w-3xl mx-auto mb-12">
              Experience the world's first blockchain-powered poker room built on SmartHoldem. 
              Play in tournaments, create your own poker brand, and enjoy provably fair gameplay with instant STH payouts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                Get Priority Access
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#features" 
                className="btn-secondary"
              >
                Learn More
              </a>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-12 text-center">
              <div className="stat-item">
                <div className="display-medium text-brand-primary">100%</div>
                <div className="body-small text-text-muted">Transparent</div>
              </div>
              <div className="stat-item">
                <div className="display-medium text-brand-primary">24/7</div>
                <div className="body-small text-text-muted">Available</div>
              </div>
              <div className="stat-item">
                <div className="display-medium text-brand-primary">Instant</div>
                <div className="body-small text-text-muted">Payouts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-[7.6923%] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="display-large mb-4">Why SmartHoldem Poker?</h2>
            <p className="body-medium text-text-secondary max-w-2xl mx-auto">
              Built for professional players who demand transparency, security, and complete control over their game.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="feature-card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h3 className="heading-2 mb-3">{feature.title}</h3>
                <p className="body-medium text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 px-[7.6923%] bg-bg-secondary relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="display-large mb-6">Built for Winners</h2>
              <p className="body-large text-text-secondary mb-8">
                SmartHoldem Poker eliminates traditional poker room disadvantages. Play with confidence knowing the game is fair, transparent, and in your control.
              </p>

              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 advantage-item"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                    </div>
                    <span className="body-medium">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="poker-chip-stack">
                <div className="poker-chip chip-1"></div>
                <div className="poker-chip chip-2"></div>
                <div className="poker-chip chip-3"></div>
                <div className="poker-chip chip-4"></div>
                <div className="poker-chip chip-5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access CTA Section */}
      <section id="register" className="py-20 px-[7.6923%] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-primary/30 bg-brand-primary/5 mb-6">
            <Clock className="w-5 h-5 text-brand-primary" />
            <span className="text-brand-primary text-sm font-medium">Limited Time Offer</span>
          </div>

          <h2 className="display-large mb-6">Get Priority Access</h2>
          <p className="body-large text-text-secondary mb-8 max-w-2xl mx-auto">
            Be among the first to experience decentralized poker. Early registrants receive exclusive benefits, 
            bonus STH tokens, and VIP tournament access.
          </p>

          <div className="bg-bg-secondary border border-border-subtle rounded-none p-8 mb-8 cta-box">
            <h3 className="heading-2 mb-4">Early Access Benefits</h3>
            <ul className="space-y-3 text-left max-w-md mx-auto mb-6">
              <li className="flex items-center gap-3">
                <ChevronRight className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <span>Bonus STH tokens on first deposit</span>
              </li>
              <li className="flex items-center gap-3">
                <ChevronRight className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <span>Exclusive VIP tournament invitations</span>
              </li>
              <li className="flex items-center gap-3">
                <ChevronRight className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <span>Lower rake for lifetime</span>
              </li>
              <li className="flex items-center gap-3">
                <ChevronRight className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <span>Priority support access</span>
              </li>
            </ul>

            <a 
              href="https://google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary mx-auto group"
            >
              Register for Early Access
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <p className="text-sm text-text-muted">
            * Registration opens access to priority beta testing. Limited spots available.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-[7.6923%] border-t border-border-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_smartholdem-poker/artifacts/kqhvt3nj_sth256x256.png" 
                alt="SmartHoldem" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <div className="font-semibold">SmartHoldem Poker</div>
                <div className="text-sm text-text-muted">Powered by STH Blockchain</div>
              </div>
            </div>

            <div className="flex gap-6">
              <a href="https://smartholdem.io" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-brand-primary transition-colors text-sm">
                Official Website
              </a>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-brand-primary transition-colors text-sm">
                Documentation
              </a>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-brand-primary transition-colors text-sm">
                Support
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border-subtle text-center text-sm text-text-muted">
            <p>© 2025 SmartHoldem. All rights reserved. Play responsibly.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
