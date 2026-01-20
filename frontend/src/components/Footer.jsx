import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="bg-gradient-to-r from-red-600 to-red-700 px-4 py-2 rounded inline-block mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_0b441f29-3c3e-4e7b-a6ac-237b749ed96a/artifacts/wunhw4p2_Gemini_Generated_Image_tmvvastmvvastmvv.png" 
                alt="ARVON" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-gray-400">
              Premium apparel manufacturing for sportswear, casual wear, and custom solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-red-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm hover:text-red-500 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/manufacturing" className="text-sm hover:text-red-500 transition-colors">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-red-500 transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@arvon.pk" className="text-sm hover:text-red-500 transition-colors">
                  info@arvon.pk
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">+92 (xxx) xxx-xxxx</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} ARVON. All rights reserved. | arvon.pk
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
