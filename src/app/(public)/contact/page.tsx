'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { SCHOOL_NAME, SCHOOL_INFO } from '@/constants';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Star, Heart, Sun, Sparkles } from 'lucide-react';

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
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16 relative overflow-hidden">
        <div className="absolute top-10 right-10 animate-float">
          <Sun className="h-16 w-16 text-yellow-400" />
        </div>
        <div className="absolute bottom-10 left-10 animate-bounce-slow hidden md:block">
          <Star className="h-10 w-10 text-pink-400" />
        </div>
        <div className="absolute top-20 left-20 animate-wiggle hidden lg:block">
          <Heart className="h-8 w-8 text-red-300" />
        </div>
        <div className="absolute bottom-16 right-32 animate-float hidden lg:block">
          <Mail className="h-10 w-10 text-blue-300" />
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl font-bold text-gray-800">
            Say Hello! <span className="inline-block animate-wave">👋</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
            {/* Form */}
            <Card>
              <CardContent className="pt-6">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4 animate-bounce-slow">🎉</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-4">We&apos;ll get back to you soon.</p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      Send Another
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="name">Your Name</Label>
                        <Input id="name" placeholder="Jane Smith" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="jane@email.com" required />
                    </div>
                    <div>
                      <Label htmlFor="interest">I&apos;m interested in...</Label>
                      <select id="interest" className="w-full h-10 px-3 rounded-md border bg-background text-sm">
                        <option value="">Pick one</option>
                        <option value="tour">Scheduling a tour 🏫</option>
                        <option value="infant">Infant Program 👶</option>
                        <option value="toddler">Toddler Program 🧒</option>
                        <option value="primary">Primary Program 🎒</option>
                        <option value="other">Something else</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Tell us about your family!" rows={3} required />
                    </div>
                    <Button type="submit" className="w-full bg-[#4F7942] hover:bg-[#3d5f34] hover-grow" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : (
                        <>Send Message <Send className="ml-2 h-4 w-4" /></>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Find Us</h3>
                    <p className="text-gray-600">{SCHOOL_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Call Us</h3>
                    <p className="text-gray-600">{SCHOOL_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Email Us</h3>
                    <p className="text-gray-600">{SCHOOL_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Hours</h3>
                    <p className="text-gray-600">{SCHOOL_INFO.hours}</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 mx-auto mb-2 text-[#4F7942]" />
                      <p className="text-gray-500 text-sm">Map goes here!</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick CTA */}
              <Card className="bg-[#4F7942] text-white relative overflow-hidden">
                <div className="absolute top-2 right-2 opacity-30">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <CardContent className="pt-6 text-center relative">
                  <p className="text-lg font-medium mb-3">Want to visit? 🏫</p>
                  <Button variant="secondary" className="hover-grow" asChild>
                    <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                      Book a Tour
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-[#4F7942] relative overflow-hidden">
        <div className="absolute top-5 left-10 animate-float opacity-20">
          <Star className="h-20 w-20 text-white" />
        </div>
        <div className="absolute bottom-5 right-10 animate-bounce-slow opacity-20">
          <Heart className="h-16 w-16 text-white" />
        </div>
        <div className="absolute top-10 right-40 animate-wiggle opacity-20 hidden lg:block">
          <Sun className="h-12 w-12 text-white" />
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-bold text-white">
            Can&apos;t Wait to Meet You! <span className="inline-block animate-wave">💕</span>
          </h2>
          <p className="mt-3 text-white/90 text-lg">
            Explore what makes our school special.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg hover-grow" asChild>
              <Link href="/programs">See Programs 🌈</Link>
            </Button>
            <Button size="lg" className="bg-white text-[#4F7942] hover:bg-gray-100 text-lg hover-grow" asChild>
              <Link href="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
