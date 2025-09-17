// chmqp
import { Bot, Github, Heart, ExternalLink } from 'lucide-react';
import { CiTwitter } from "react-icons/ci";
import { AiOutlineDiscord } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';

export function Footer() {


  return (
    <footer className="w-full py-8 px-4">
      <div className="max-w-[1800px] mx-auto">
        <div className="glass rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <Link to="/" className="flex items-center gap-3 group">
                <Bot className="w-7 h-7 text-blue-500 group-hover:rotate-12 transition-transform" />
                <span className="font-bold text-lg">{siteConfig.siteName}</span>
              </Link>
              <p className="text-gray-400 text-sm">
                {siteConfig.siteDescription}
              </p>
              <div className="flex gap-3">
                {siteConfig.socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 glass rounded-lg hover:scale-110 transition-transform duration-300"
                  >
                    {social.platform === 'Discord' ? (
                      <AiOutlineDiscord className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
                    ) : social.platform === 'GitHub' ? (
                      <Github className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
                    ) : social.platform === 'Twitter' ? (
                      <CiTwitter className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
                    ) : null}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-3">Resources</h3>
              <ul className="space-y-2">
                {siteConfig.footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.url}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-3">Legal</h3>
              <ul className="space-y-2">
                {siteConfig.footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.url}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-3">Contact</h3>
              <ul className="space-y-2">
                {siteConfig.footerLinks.contact.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.url}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10">
            <p className="text-gray-400 text-xs mb-3 md:mb-0">
              © {new Date().getFullYear()} {siteConfig.siteName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}