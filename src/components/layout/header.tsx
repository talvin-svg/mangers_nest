'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { SCHOOL_NAME, SCHOOL_TAGLINE, NAV_LINKS, SCHOOL_INFO } from '@/constants';
import { Menu, Home, Info, GraduationCap, ClipboardList, Images, Phone, X, MapPin } from 'lucide-react';

const navIcons: Record<string, React.ElementType> = {
  '/': Home,
  '/about': Info,
  '/programs': GraduationCap,
  '/admissions': ClipboardList,
  '/gallery': Images,
  '/contact': Phone,
};

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#4F7942]">{SCHOOL_NAME}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-[#4F7942]"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="bg-[#4F7942] hover:bg-[#3d5f34]">
            <Link href="/contact">Schedule a Visit</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] max-w-[320px] p-0">
            {/* Header */}
            <SheetHeader className="bg-[#4F7942] p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <SheetTitle className="text-xl font-bold text-white">{SCHOOL_NAME}</SheetTitle>
                  <p className="text-sm text-white/80 mt-1">{SCHOOL_TAGLINE}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                  className="text-white hover:bg-white/20 h-10 w-10"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </SheetHeader>

            {/* Navigation Links */}
            <nav className="flex flex-col p-4">
              {NAV_LINKS.map((link) => {
                const Icon = navIcons[link.href] || Home;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-4 px-4 py-4 rounded-xl text-gray-700 hover:bg-[#4F7942]/10 hover:text-[#4F7942] transition-colors active:bg-[#4F7942]/20"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-[#4F7942]" />
                    </div>
                    <span className="text-lg font-medium">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-gray-50">
              <Button asChild className="w-full bg-[#4F7942] hover:bg-[#3d5f34] h-12 text-base">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Schedule a Visit 📅
                </Link>
              </Button>
              <div className="flex items-center gap-2 mt-4 text-sm text-gray-500 justify-center">
                <MapPin className="h-4 w-4" />
                <span className="truncate">{SCHOOL_INFO.phone}</span>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
