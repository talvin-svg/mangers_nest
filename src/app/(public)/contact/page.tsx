'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { SCHOOL_INFO } from '@/constants';
import { MapPin, Phone, Mail, Clock, Send, Star, Sparkles, Heart, CheckCircle, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div>
      {/* Hero — compact with inline contact details */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#00ADEF] via-[#009AD8] to-[#0080B8]">
        {/* Blobs */}
        <div className="absolute top-[-40px] right-[-30px] w-64 h-64 bg-[#FFE066]/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-[-60px] left-[-40px] w-80 h-80 bg-[#FF6B6B]/10 rounded-full blur-3xl animate-bounce-slow" />
        <div className="absolute top-12 right-20 animate-float opacity-15 hidden md:block">
          <Mail className="h-14 w-14 text-white" />
        </div>
        <div className="absolute bottom-12 left-16 animate-bounce-slow opacity-15 hidden md:block">
          <Phone className="h-10 w-10 text-white" />
        </div>

        <div className="container mx-auto px-4 py-16 sm:py-20 relative">
          <div className="max-w-2xl">
            <span className="text-[#FFE066] font-semibold text-lg tracking-wide uppercase">Get in Touch</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mt-3 leading-tight">
              Contact Us
            </h1>
            <p className="mt-4 text-xl text-white/85 max-w-lg">
              We&apos;d love to hear from you. Reach out and let&apos;s start the conversation.
            </p>
          </div>

          {/* Inline contact strip */}
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: MapPin, label: 'Visit Us', value: SCHOOL_INFO.address },
              { icon: Phone, label: 'Call Us', value: SCHOOL_INFO.phone },
              { icon: Mail, label: 'Email Us', value: SCHOOL_INFO.email },
              { icon: Clock, label: 'Hours', value: SCHOOL_INFO.hours },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-4 group hover:bg-white/20 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white/60 text-xs font-semibold uppercase tracking-wider">{item.label}</p>
                      <p className="text-white text-sm font-medium truncate">{item.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main content — Form + Map side by side */}
      <section className="py-20 bg-[#FFF8F0] relative overflow-hidden">
        <div className="absolute top-10 right-10 animate-float opacity-20 hidden md:block">
          <Sparkles className="h-14 w-14 text-cyan-400" />
        </div>
        <div className="absolute bottom-20 left-10 animate-bounce-slow opacity-20 hidden md:block">
          <Star className="h-12 w-12 text-pink-400" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Form */}
            <div>
              <span className="text-[#FF6B6B] font-semibold text-lg">Send a Message</span>
              <h2 className="text-4xl font-bold text-gray-800 mt-2 flex items-center gap-3">
                Get in Touch
                <Send className="h-8 w-8 text-[#00ADEF]" />
              </h2>
              <p className="mt-3 text-gray-500">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

              <Card className="rounded-3xl shadow-xl border-0 overflow-hidden mt-8">
                <div className="h-2 bg-gradient-to-r from-[#00ADEF] to-[#FF6B6B]" />
                <CardContent className="pt-8 pb-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="mx-auto w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                        <CheckCircle className="h-10 w-10 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">Message Sent!</h3>
                      <p className="text-gray-600 mb-6">We&apos;ll get back to you soon.</p>
                      <Button
                        className="bg-[#00ADEF] hover:bg-[#0095CC] rounded-full px-8"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="name" className="text-gray-700 font-medium">Your Name</Label>
                          <Input id="name" placeholder="Jane Smith" required className="mt-1 rounded-xl" />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-gray-700 font-medium">Phone</Label>
                          <Input id="phone" type="tel" placeholder="0XX XXX XXXX" className="mt-1 rounded-xl" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                        <Input id="email" type="email" placeholder="jane@email.com" required className="mt-1 rounded-xl" />
                      </div>
                      <div>
                        <Label htmlFor="interest" className="text-gray-700 font-medium">I&apos;m interested in...</Label>
                        <select id="interest" className="w-full h-11 px-4 rounded-xl border bg-background text-sm mt-1">
                          <option value="">Pick one</option>
                          <option value="tour">Scheduling a tour</option>
                          <option value="creche">Creche Program</option>
                          <option value="preschool">Pre School Program</option>
                          <option value="primary">Primary Program</option>
                          <option value="other">Something else</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                        <Textarea id="message" placeholder="Tell us about your family and how we can help..." rows={4} required className="mt-1 rounded-xl" />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-[#00ADEF] hover:bg-[#0095CC] rounded-full h-12 text-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : (
                          <>Send Message <Send className="ml-2 h-5 w-5" /></>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Right column — Google Map + Quick Links */}
            <div className="space-y-8">
              <div>
                <span className="text-[#00ADEF] font-semibold text-lg">Location</span>
                <h2 className="text-4xl font-bold text-gray-800 mt-2 flex items-center gap-3">
                  Find Us
                  <MapPin className="h-8 w-8 text-[#FF6B6B]" />
                </h2>
                <p className="mt-3 text-gray-500">
                  G3 Manet Gardens, Nungua, Accra, Ghana
                </p>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.6!2d-0.066!3d5.606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzYnMjEuNiJOIDDCsDAzJzU3LjYiVw!5e0!3m2!1sen!2sgh!4v1700000000000"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mangers Nest International School Location"
                  className="w-full"
                />
              </div>

              {/* Directions button */}
              <a
                href="https://www.google.com/maps/search/Manet+Gardens+Nungua+Ghana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#00ADEF] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Get Directions</p>
                    <p className="text-sm text-gray-500">Open in Google Maps</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-[#00ADEF] group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Quick Links */}
              <Card className="rounded-3xl shadow-xl border-0 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-[#FFE066] to-amber-400" />
                <CardContent className="pt-6 pb-6">
                  <h3 className="font-bold text-gray-800 text-lg mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'View our programs', href: '/programs', color: 'text-[#00ADEF]' },
                      { label: 'Admissions info', href: '/admissions', color: 'text-[#FF6B6B]' },
                      { label: 'See our gallery', href: '/gallery', color: 'text-purple-500' },
                      { label: 'Career opportunities', href: '/careers', color: 'text-amber-500' },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                      >
                        <span className="text-gray-700 font-medium group-hover:text-gray-900">{link.label}</span>
                        <ArrowRight className={`h-5 w-5 ${link.color} group-hover:translate-x-1 transition-transform`} />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — gradient, no image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FF6B6B] via-[#FF6B6B] to-[#E55555]">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/5 rounded-full" />
        <div className="absolute top-10 left-10 animate-float opacity-30 hidden md:block">
          <Sparkles className="h-12 w-12 text-white" />
        </div>
        <div className="absolute bottom-10 right-10 animate-bounce-slow opacity-30 hidden md:block">
          <Star className="h-10 w-10 text-white" />
        </div>
        <div className="flex items-center justify-center text-center px-4 py-20">
          <div className="max-w-2xl relative">
            <h2 className="text-4xl font-bold text-white flex items-center justify-center gap-3">
              We Can&apos;t Wait to Meet You
              <Heart className="h-9 w-9 text-[#FFE066]" />
            </h2>
            <p className="mt-4 text-white/90 text-xl">
              Explore what makes our school special.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#FF6B6B] hover:bg-gray-100 rounded-full px-8 text-lg" asChild>
                <Link href="/programs">
                  <Sparkles className="mr-2 h-5 w-5" /> See Programs
                </Link>
              </Button>
              <Button size="lg" className="bg-[#00ADEF] hover:bg-[#0095CC] rounded-full px-8 text-lg" asChild>
                <Link href="/gallery">View Gallery</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
