import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12" aria-label="Site footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <Link href="/" aria-label="Chang Groups IT Solutions — Home">
              <h3 className="text-2xl font-bold mb-4 hover:opacity-80 transition-opacity">Chang Groups</h3>
            </Link>
            <p className="text-background/80 mb-4 leading-relaxed">
              Custom software development company specializing in CRM systems, ERP platforms, and innovative web applications that accelerate business growth.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer services navigation">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <Link href="/Services" className="hover:text-background transition-colors">
                  Custom CRM Development
                </Link>
              </li>
              <li>
                <Link href="/Services" className="hover:text-background transition-colors">
                  ERP System Solutions
                </Link>
              </li>
              <li>
                <Link href="/Services" className="hover:text-background transition-colors">
                  Web Application Development
                </Link>
              </li>
              <li>
                <Link href="/Services" className="hover:text-background transition-colors">
                  AI & API Integration
                </Link>
              </li>
              <li>
                <Link href="/About" className="hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="hover:text-background transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic">
              <ul className="space-y-3 text-background/80">
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <a
                    href="mailto:info@changtechs.com"
                    className="hover:text-background transition-colors"
                    aria-label="Email us at info@changtechs.com"
                  >
                    info@changtechs.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <a
                    href="tel:+917010747878"
                    className="hover:text-background transition-colors"
                    aria-label="Call us at +91 7010747878"
                  >
                    +91 7010747878
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-background/70 text-sm">
          <p>
            &copy; {currentYear} Chang Groups IT Solutions. All rights reserved.
          </p>
          <nav aria-label="Footer legal links" className="flex gap-6">
            <Link href="/Contact" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="/Contact" className="hover:text-background transition-colors">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

