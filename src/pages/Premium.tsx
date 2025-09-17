// chmqp
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Crown, Zap, Star, Music, Bot, Shield, Image } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

const features = [
  {
    icon: Music,
    title: 'Enhanced Music',
    description: 'High-quality audio, unlimited queue, and exclusive effects',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Shield,
    title: 'Advanced Security',
    description: 'Premium auto-moderation and anti-raid features',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Bot,
    title: 'Custom AI',
    description: 'Personalized AI responses and custom training',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Image,
    title: 'Premium Images',
    description: 'Advanced image generation and manipulation',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: Star,
    title: 'Economy Boost',
    description: 'Increased rewards and exclusive economy features',
    gradient: 'from-rose-500 to-orange-500'
  },
  {
    icon: Zap,
    title: 'Priority Support',
    description: 'Get faster responses and dedicated assistance',
    gradient: 'from-orange-500 to-yellow-500'
  }
];

export default function Premium() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <div className="min-h-screen bg-mesh text-white">
      <Header />
      
      <main className="w-full pt-32 pb-20">
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-[120px] animate-pulse-slow" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 p-0.5 mb-6 animate-float">
              <div className="w-full h-full rounded-full glass flex items-center justify-center">
                <Crown className="w-10 h-10 text-yellow-400" />
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent animate-gradient">
              Unlock Premium Features
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Take your Discord server to the next level with exclusive features and enhanced capabilities
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 mb-32">
          <div className="glass rounded-3xl overflow-hidden relative group hover:scale-[1.02] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Premium Plan</h2>
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    $9.99
                  </span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400">Advanced features for growing servers</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${feature.gradient} bg-opacity-10`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Premium Now
                </a>
              </div>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}