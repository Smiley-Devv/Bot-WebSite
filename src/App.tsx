// chmqp
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BotInfo } from './types/bot';
import { getBotInfo } from './services/botService';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { Stats } from './components/home/Stats';
import { Updates } from './components/home/Updates';
import { Footer } from './components/layout/Footer';

export default function App() {
  const [stats, setStats] = useState<BotInfo | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const location = useLocation();

  useEffect(() => {
    let mounted = true;

    const fetchStats = async () => {
      try {
        const botInfo = await getBotInfo();
        if (mounted) {
          setStats(botInfo);
          setError(null);
        }
      } catch (error) {
        console.error('Failed to fetch bot info:', error);
        if (mounted) {
          setError(error instanceof Error ? error : new Error('Failed to fetch bot info'));
          const defaultStats = await getBotInfo().catch(() => null);
          if (defaultStats && mounted) {
            setStats(defaultStats);
          }
        }
      }
    };

    fetchStats();

    const interval = setInterval(fetchStats, 30000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const state = location.state as { scrollTo?: string };
    const scrollToId = state?.scrollTo;
    
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  if (error && !stats) {
    return (
      <div className="min-h-screen bg-mesh text-white">
        <Header />
        <main className="w-full">
          <div className="container py-20">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Unable to load bot statistics</h1>
              <p className="text-gray-400 mb-8">
                We're having trouble connecting to our servers. Please try refreshing the page.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mesh text-white">
      <Header />
      <main className="w-full">
        <Hero />
        <Features />
        <Stats stats={stats} />
        <Updates />
      </main>
      <Footer />
    </div>
  );
}