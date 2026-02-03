'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { SCHOOL_INFO } from '@/constants';
import { MapPin, Phone, Mail, Clock, Send, Sun, Star, Sparkles, Heart, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    detail: SCHOOL_INFO.address,
    color: 'bg-pink-500',
    bgLight: 'bg-pink-50',
    iconColor: 'text-pink-500',
  },
  {
    icon: Phone,
    title: 'Call Us',
    detail: SCHOOL_INFO.phone,
    color: 'bg-green-500',
    bgLight: 'bg-green-50',
    iconColor: 'text-green-500',
  },
  {
    icon: Mail,
    title: 'Email Us',
    detail: SCHOOL_INFO.email,
    color: 'bg-cyan-500',
    bgLight: 'bg-cyan-50',
    iconColor: 'text-cyan-500',
  },
  {
    icon: Clock,
    title: 'School Hours',
    detail: SCHOOL_INFO.hours,
    color: 'bg-amber-500',
    bgLight: 'bg-amber-50',
    iconColor: 'text-amber-500',
  },
];

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
      {/* Hero — gradient only, no image */}
      <section className="relative min-h-[380px] overflow-hidden bg-gradient-to-br from-[#00ADEF] via-[#00ADEF] to-[#0095CC]">
        <div className="absolute top-10 right-16 animate-float opacity-20 hidden md:block">
          <MessageCircle className="h-20 w-20 text-white" />
        </div>
        <div className="absolute bottom-12 left-16 animate-bounce-slow opacity-20 hidden md:block">
          <Mail className="h-14 w-14 text-white" />
        </div>
        <div className="absolute top-1/2 right-1/3 animate-wiggle opacity-10 hidden lg:block">
          <Heart className="h-16 w-16 text-white" />
        </div>
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/5 rounded-full" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <span className="text-[#FFE066] font-semibold text-lg">Get in Touch</span>
              <h1 className="text-4xl sm:text-5xl font-bold mt-2 flex items-center gap-3">
                Contact Us
                <Phone className="h-10 w-10 text-[#FFE066]" />
              </h1>
              <p className="mt-4 text-xl text-white/90">
                We&apos;d love to hear from you. Reach out and let&apos;s start the conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto -mt-24 relative z-10">
            {contactInfo.map((item) => {
              const IconComponent = item.icon;
              return (
                <Card key={item.title} className="rounded-2xl shadow-xl border-0 hover-grow">
                  <CardContent className="p-6 text-center">
                    <div className={`mx-auto w-14 h-14 rounded-full ${item.color} flex items-center justify-center mb-4 shadow-md`}>
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg">{item.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{item.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Map Section */}
      <section className="py-20 bg-[#FFF8F0] relative overflow-hidden">
        <div className="absolute top-10 right-10 animate-float opacity-20 hidden md:block">
          <Sun className="h-16 w-16 text-amber-400" />
        </div>
        <div className="absolute bottom-20 left-10 animate-bounce-slow opacity-20 hidden md:block">
          <Star className="h-12 w-12 text-pink-400" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
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

            {/* Right column — map + quick links */}
            <div className="space-y-8">
              {/* Map embed */}
              <div>
                <span className="text-[#00ADEF] font-semibold text-lg">Location</span>
                <h2 className="text-4xl font-bold text-gray-800 mt-2 flex items-center gap-3">
                  Find Us
                  <MapPin className="h-8 w-8 text-[#FF6B6B]" />
                </h2>
                <p className="mt-3 text-gray-500">
                  G3 Manet Gardens, Nungua, Ghana
                </p>
              </div>
              <Card className="overflow-hidden rounded-3xl shadow-xl border-0">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-[#E8F7FC] to-[#d4f0fc] flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mx-auto w-16 h-16 rounded-full bg-[#00ADEF] flex items-center justify-center mb-3 shadow-lg">
                          <MapPin className="h-8 w-8 text-white" />
                        </div>
                        <p className="text-gray-700 font-semibold">G3 Manet Gardens, Nungua</p>
                        <p className="text-gray-500 text-sm mt-1">Accra, Ghana</p>
                      </div>
                    </div>
                    {/* Decorative dots */}
                    <div className="absolute top-4 left-4 w-3 h-3 bg-[#FF6B6B]/30 rounded-full" />
                    <div className="absolute top-8 right-8 w-4 h-4 bg-[#FFE066]/40 rounded-full" />
                    <div className="absolute bottom-6 left-8 w-5 h-5 bg-[#00ADEF]/20 rounded-full" />
                    <div className="absolute bottom-4 right-4 w-3 h-3 bg-pink-300/30 rounded-full" />
                  </div>
                </CardContent>
              </Card>

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

      {/* CTA — gradient only, no image */}
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
