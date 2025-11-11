import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Chang Groups</h3>
            <p className="text-background/80 mb-4 leading-relaxed">
              IT Solutions specializing in custom CRM, ERP systems, and innovative web applications that drive business growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#services" className="hover:text-background transition-colors">CRM Development</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">ERP Solutions</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Web Applications</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">E-commerce Platforms</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-background/80">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <a href="mailto:changvijay54@gmail.com" className="hover:text-background transition-colors">
                  changvijay54@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <a href="tel:+917010747878" className="hover:text-background transition-colors">
                  +91 70107478787
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p>&copy; {new Date().getFullYear()} Chang Groups IT Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
