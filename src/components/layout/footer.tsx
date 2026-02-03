import { NAV_LINKS, SCHOOL_INFO, SCHOOL_NAME, SCHOOL_MOTTO, SOCIAL_LINKS } from '@/constants';
import { Clock, Facebook, Heart, Instagram, Mail, MapPin, Phone, Star, Sun, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E3A5F] text-white relative overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute top-10 right-10 animate-float opacity-10">
        <Star className="h-16 w-16 text-white" />
      </div>
      <div className="absolute bottom-20 left-10 animate-bounce-slow opacity-10 hidden md:block">
        <Heart className="h-12 w-12 text-white" />
      </div>
      <div className="absolute top-32 left-1/3 animate-wiggle opacity-10 hidden lg:block">
        <Sun className="h-10 w-10 text-white" />
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* School Info */}
          <div>
            <Image
              src="/logo/MNIS-short-transparent.png"
              alt={SCHOOL_NAME}
              width={80}
              height={80}
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              {SCHOOL_MOTTO} 💕
            </p>
            <div className="flex gap-4 mt-4">
              <a href={SOCIAL_LINKS.facebook} className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={SOCIAL_LINKS.instagram} className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={SOCIAL_LINKS.twitter} className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="h-4 w-4 mt-0.5 text-[#E9967A]" />
                <span>{SCHOOL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="h-4 w-4 text-[#E9967A]" />
                <span>{SCHOOL_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="h-4 w-4 text-[#E9967A]" />
                <span>{SCHOOL_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">School Hours</h4>
            <div className="flex items-start gap-3 text-sm text-gray-300">
              <Clock className="h-4 w-4 mt-0.5 text-[#E9967A]" />
              <div>
                <p>Monday - Friday</p>
                <p>7:30 AM - 5:30 PM</p>
                <p className="mt-2 text-gray-400">Closed on weekends and holidays</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} {SCHOOL_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
