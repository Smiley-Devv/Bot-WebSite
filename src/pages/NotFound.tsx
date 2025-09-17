// chmqp
import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Ghost, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-mesh text-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="relative mb-12">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-[100px] animate-pulse-slow" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-0.5 mb-8 animate-float">
                <div className="w-full h-full rounded-full glass flex items-center justify-center group">
                  <Ghost className="w-12 h-12 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                404
              </h1>
              <p className="text-3xl font-semibold mb-4 text-white">
                Page Not Found
              </p>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                Oops! It seems like you've ventured into uncharted territory. The page you're looking for doesn't exist or has been moved.
              </p>

              <div className="flex flex-wrap gap-6 justify-center">
                <button 
                  onClick={() => window.history.back()} 
                  className="btn-secondary group"
                >
                  <span className="flex items-center gap-2">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Go Back
                  </span>
                </button>
                <Link to="/" className="btn-primary group">
                  <span className="flex items-center gap-2">
                    <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Return Home
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="glass rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
            <div className="relative z-10">
              <h2 className="text-xl font-semibold mb-6">You might want to check out:</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link 
                  to="/commands" 
                  className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <h3 className="font-medium mb-2 group-hover:text-blue-400 transition-colors">
                    Commands
                  </h3>
                  <p className="text-sm text-gray-400">
                    Browse our comprehensive list of bot commands
                  </p>
                </Link>
                <Link 
                  to="/premium" 
                  className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <h3 className="font-medium mb-2 group-hover:text-blue-400 transition-colors">
                    Premium Features
                  </h3>
                  <p className="text-sm text-gray-400">
                    Discover our premium features and upgrades
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}