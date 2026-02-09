<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Navigation -->
    <nav class="dark-header">
      <div class="flex items-center">
        <img 
          src="https://customer-assets.emergentagent.com/job_smartholdem-poker/artifacts/kqhvt3nj_sth256x256.png" 
          alt="SmartHoldem" 
          class="h-12 w-12 object-contain"
        />
        <span class="ml-3 text-xl font-semibold">SmartHoldem Poker</span>
      </div>
      
      <div class="dark-nav hidden md:flex">
        <a href="#features" class="dark-nav-link">Features</a>
        <a href="#advantages" class="dark-nav-link">Advantages</a>
        <a href="#register" class="dark-nav-link">Early Access</a>
      </div>

      <a 
        href="https://google.com" 
        target="_blank" 
        rel="noopener noreferrer"
        class="btn-primary"
      >
        Register Now
        <ChevronRight :size="20" />
      </a>
    </nav>

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 px-[7.6923%] overflow-hidden">
      <!-- Animated background pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" :style="backgroundPattern"></div>
      </div>

      <!-- Floating poker chips animation -->
      <div class="absolute top-20 left-[10%] w-16 h-16 rounded-full bg-brand-primary opacity-20 blur-xl animate-float"></div>
      <div class="absolute top-40 right-[15%] w-24 h-24 rounded-full bg-brand-primary opacity-15 blur-xl animate-float-delayed"></div>
      <div class="absolute bottom-20 left-[20%] w-20 h-20 rounded-full bg-brand-primary opacity-10 blur-xl animate-float-slow"></div>

      <div class="max-w-6xl mx-auto relative z-10">
        <div :class="['text-center transition-all duration-1000', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-primary/30 bg-brand-primary/5 mb-8 animate-pulse-subtle">
            <Crown :size="20" class="text-brand-primary" />
            <span class="text-brand-primary text-sm font-medium">VIP Early Access • Limited Spots</span>
          </div>

          <h1 class="display-huge mb-6">
            The Future of
            <span class="block mt-2 text-brand-primary">Decentralized Poker</span>
          </h1>

          <p class="body-large text-text-secondary max-w-3xl mx-auto mb-12">
            Experience the world's first blockchain-powered poker room built on SmartHoldem. 
            Play in tournaments, create your own poker brand, and enjoy provably fair gameplay with instant STH payouts.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="btn-primary group"
            >
              Get Priority Access
              <ChevronRight :size="20" class="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#features" 
              class="btn-secondary"
            >
              Learn More
            </a>
          </div>

          <div class="mt-16 flex flex-wrap justify-center gap-12 text-center">
            <div class="stat-item">
              <div class="display-medium text-brand-primary">100%</div>
              <div class="body-small text-text-muted">Transparent</div>
            </div>
            <div class="stat-item">
              <div class="display-medium text-brand-primary">24/7</div>
              <div class="body-small text-text-muted">Available</div>
            </div>
            <div class="stat-item">
              <div class="display-medium text-brand-primary">Instant</div>
              <div class="body-small text-text-muted">Payouts</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 px-[7.6923%] relative">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="display-large mb-4">Why SmartHoldem Poker?</h2>
          <p class="body-medium text-text-secondary max-w-2xl mx-auto">
            Built for professional players who demand transparency, security, and complete control over their game.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div 
            v-for="(feature, index) in features" 
            :key="index"
            class="feature-card group"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <div class="feature-icon-wrapper">
              <component :is="feature.icon" :size="32" />
            </div>
            <h3 class="heading-2 mb-3">{{ feature.title }}</h3>
            <p class="body-medium text-text-secondary">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Advantages Section -->
    <section id="advantages" class="py-20 px-[7.6923%] bg-bg-secondary relative">
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="display-large mb-6">Built for Winners</h2>
            <p class="body-large text-text-secondary mb-8">
              SmartHoldem Poker eliminates traditional poker room disadvantages. Play with confidence knowing the game is fair, transparent, and in your control.
            </p>

            <div class="space-y-4">
              <div 
                v-for="(advantage, index) in advantages" 
                :key="index"
                class="flex items-start gap-3 advantage-item"
                :style="{ animationDelay: `${index * 80}ms` }"
              >
                <div class="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div class="w-2 h-2 rounded-full bg-brand-primary"></div>
                </div>
                <span class="body-medium">{{ advantage }}</span>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="poker-chip-stack">
              <div class="poker-chip chip-1"></div>
              <div class="poker-chip chip-2"></div>
              <div class="poker-chip chip-3"></div>
              <div class="poker-chip chip-4"></div>
              <div class="poker-chip chip-5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Early Access CTA Section -->
    <section id="register" class="py-20 px-[7.6923%] relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent"></div>
      
      <div class="max-w-4xl mx-auto text-center relative z-10">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-primary/30 bg-brand-primary/5 mb-6">
          <Clock :size="20" class="text-brand-primary" />
          <span class="text-brand-primary text-sm font-medium">Limited Time Offer</span>
        </div>

        <h2 class="display-large mb-6">Get Priority Access</h2>
        <p class="body-large text-text-secondary mb-8 max-w-2xl mx-auto">
          Be among the first to experience decentralized poker. Early registrants receive exclusive benefits, 
          bonus STH tokens, and VIP tournament access.
        </p>

        <div class="bg-bg-secondary border border-border-subtle rounded-none p-8 mb-8 cta-box">
          <h3 class="heading-2 mb-4">Early Access Benefits</h3>
          <ul class="space-y-3 text-left max-w-md mx-auto mb-6">
            <li v-for="(benefit, index) in benefits" :key="index" class="flex items-center gap-3">
              <ChevronRight :size="20" class="text-brand-primary flex-shrink-0" />
              <span>{{ benefit }}</span>
            </li>
          </ul>

          <a 
            href="https://google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn-primary mx-auto group"
          >
            Register for Early Access
            <ChevronRight :size="20" class="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <p class="text-sm text-text-muted">
          * Registration opens access to priority beta testing. Limited spots available.
        </p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 px-[7.6923%] border-t border-border-subtle">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="flex items-center gap-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_smartholdem-poker/artifacts/kqhvt3nj_sth256x256.png" 
              alt="SmartHoldem" 
              class="h-10 w-10 object-contain"
            />
            <div>
              <div class="font-semibold">SmartHoldem Poker</div>
              <div class="text-sm text-text-muted">Powered by STH Blockchain</div>
            </div>
          </div>

          <div class="flex flex-wrap justify-center gap-6">
            <a href="https://smartholdem.io" target="_blank" rel="noopener noreferrer" class="text-text-muted hover:text-brand-primary transition-colors text-sm">
              Official Website
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" class="text-text-muted hover:text-brand-primary transition-colors text-sm">
              Documentation
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" class="text-text-muted hover:text-brand-primary transition-colors text-sm">
              Support
            </a>
          </div>
        </div>

        <div class="mt-8 pt-8 border-t border-border-subtle text-center text-sm text-text-muted">
          <p>© 2025 SmartHoldem. All rights reserved. Play responsibly.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { Shield, Trophy, Users, Zap, Crown, Clock, ChevronRight } from 'lucide-vue-next'

export default {
  name: 'Home',
  components: {
    Shield,
    Trophy,
    Users,
    Zap,
    Crown,
    Clock,
    ChevronRight
  },
  data() {
    return {
      isVisible: false,
      backgroundPattern: {
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 60px),
                         repeating-linear-gradient(-90deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 60px)`
      },
      features: [
        {
          icon: 'Shield',
          title: "Decentralized & Secure",
          description: "Play on SmartHoldem blockchain with complete transparency and security. Every hand is verifiable on-chain."
        },
        {
          icon: 'Trophy',
          title: "Tournament System",
          description: "Compete in high-stakes tournaments with guaranteed prize pools. Professional tournament structure designed for serious players."
        },
        {
          icon: 'Users',
          title: "Influencer Tournaments",
          description: "Create your own branded poker tournaments. Build your community and host custom events with your rules."
        },
        {
          icon: 'Zap',
          title: "Instant Payouts",
          description: "Win and withdraw instantly with STH cryptocurrency. No waiting, no intermediaries, just pure speed."
        }
      ],
      advantages: [
        "Zero house edge on peer-to-peer games",
        "Provably fair gameplay verified on blockchain",
        "Lower rake compared to traditional poker rooms",
        "Anonymous play - no KYC required",
        "Global player pool with no restrictions",
        "Smart contract escrow for all funds"
      ],
      benefits: [
        "Bonus STH tokens on first deposit",
        "Exclusive VIP tournament invitations",
        "Lower rake for lifetime",
        "Priority support access"
      ]
    }
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = true
    }, 100)
  }
}
</script>
