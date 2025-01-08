import { Copyright, Linkedin, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          {/* Website Name and Social Media */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-primary mb-4">AIversity</h2>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/aiversity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-accent" />
                <span className="text-sm text-gray-600">GDPR</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-accent" />
                <span className="text-sm text-gray-600">SOC</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-accent" />
                <span className="text-sm text-gray-600">HIPAA</span>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Support Section */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/help" className="text-gray-600 hover:text-primary">Help Center</Link></li>
                <li><Link to="/faq" className="text-gray-600 hover:text-primary">FAQ</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-primary">Contact Us</Link></li>
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-600 hover:text-primary">About Us</Link></li>
                <li><Link to="/careers" className="text-gray-600 hover:text-primary">Careers</Link></li>
                <li><Link to="/blog" className="text-gray-600 hover:text-primary">Blog</Link></li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-600 hover:text-primary">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-600 hover:text-primary">Terms of Service</Link></li>
                <li><Link to="/cookies" className="text-gray-600 hover:text-primary">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-gray-600 border-t pt-8">
          <Copyright className="h-4 w-4" />
          <span>{currentYear} AIversity. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};