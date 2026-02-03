"use client"

import Link from 'next/link';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from '@/components/ui/carousel';
import { SCHOOL_NAME, PROGRAMS } from '@/constants';
import { Heart, Sparkles, Star, ArrowRight, Baby, Palette, Users, Shield, BookOpen, Sun } from 'lucide-react';

const features = [
  { icon: Heart, title: 'Loving Care', desc: 'Nurturing environment', color: 'bg-pink-500' },
  { icon: Sparkles, title: 'Learn Through Play', desc: 'Fun activities daily', color: 'bg-amber-500' },
  { icon: Shield, title: 'Safe & Secure', desc: 'Your child\'s safety first', color: 'bg-cyan-500' },
  { icon: Users, title: 'Community', desc: 'Family partnerships', color: 'bg-green-500' },
];

const testimonials = [
  {
    quote: "My daughter LOVES going to school every day!",
    author: "Akosua M.",
    child: "Ama, age 4",
  },
  {
    quote: "The teachers are amazing. My son has grown so much.",
    author: "Kwame A.",
    child: "Kofi, age 3",
  },
  {
    quote: "Best decision we ever made for our family.",
    author: "Abena K.",
    child: "Adwoa, age 5",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section - Full Width Banner */}
      <section className="relative">
        <div className="relative w-full">
          <Image
            src="/stock/MNIS_Banner.png"
            alt="MNIS Banner"
            width={1920}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>
        <div className="bg-[#FFF8F0] py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#00ADEF] hover:bg-[#0095CC] text-lg rounded-full px-8">
                <Link href="/contact">Schedule a Visit 📅</Link>
              </Button>
              <Button size="lg" className="bg-[#FF6B6B] hover:bg-[#E55555] text-lg rounded-full px-8">
                <Link href="/programs">Our Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Bright Icon Boxes */}
      <section className="py-16 bg-[#FFF8F0] relative overflow-hidden">
        {/* Floating decorations */}
        <div className="absolute top-10 right-10 animate-float opacity-20">
          <Sun className="h-16 w-16 text-amber-400" />
        </div>
        <div className="absolute bottom-10 left-10 animate-bounce-slow opacity-20 hidden md:block">
          <Star className="h-12 w-12 text-pink-400" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center p-6 rounded-3xl bg-white shadow-lg hover-grow"
              >
                <div className={`mx-auto w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mb-4 shadow-md`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 text-lg">{feature.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Image Left, Text Right */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-20 right-20 animate-wiggle opacity-10 hidden lg:block">
          <Heart className="h-20 w-20 text-pink-400" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/stock/nest_1.png.JPG"
                  alt="Children learning"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FFE066] rounded-full -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#00ADEF] rounded-full -z-10" />
            </div>
            <div>
              <span className="text-[#FF6B6B] font-semibold text-lg">Welcome to MNIS</span>
              <h2 className="text-4xl font-bold text-gray-800 mt-2">
                Where Every Child Shines ✨
              </h2>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                At Mangers Nest International School, we believe every child is unique and full of potential. Our nurturing environment combines academic excellence with creative exploration.
              </p>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                From our caring teachers to our safe facilities, everything is designed to help your child thrive and grow into confident, capable learners.
              </p>
              <Button size="lg" className="mt-8 bg-[#C4694D] hover:bg-[#A35540] rounded-full px-8" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs - Colorful Cards */}
      <section className="py-20 bg-gradient-to-b from-[#E8F7FC] to-white relative overflow-hidden">
        <div className="absolute top-10 left-10 animate-float opacity-20">
          <Sparkles className="h-14 w-14 text-cyan-400" />
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce-slow opacity-20 hidden md:block">
          <BookOpen className="h-12 w-12 text-amber-400" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <span className="text-[#00ADEF] font-semibold text-lg">Our Programs</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              Programs for Every Age 🌈
            </h2>
            <p className="mt-4 text-gray-600 text-lg">Something special for every stage of growth!</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {PROGRAMS.map((program, i) => {
              const colors = [
                { bg: 'bg-gradient-to-br from-pink-400 to-pink-500', icon: 'bg-pink-300' },
                { bg: 'bg-gradient-to-br from-cyan-400 to-cyan-500', icon: 'bg-cyan-300' },
                { bg: 'bg-gradient-to-br from-amber-400 to-amber-500', icon: 'bg-amber-300' },
              ];
              const icons = [Baby, Palette, BookOpen];
              const Icon = icons[i];
              const images = ['/stock/nest_2.png.JPG', '/stock/nest_3.png.JPG', '/stock/nest_4.png.JPG'];
              return (
                <Card key={program.name} className="overflow-hidden hover-grow shadow-xl border-0">
                  <div className="relative h-48">
                    <Image
                      src={images[i]}
                      alt={program.name}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 ${colors[i].bg} opacity-60`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-20 h-20 rounded-full ${colors[i].icon} flex items-center justify-center`}>
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="pt-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800">{program.name}</h3>
                    <p className="text-[#FF6B6B] font-semibold mt-1">{program.ages}</p>
                    <p className="mt-3 text-gray-600 text-sm">{program.description}</p>
                    <Link
                      href="/programs"
                      className="inline-flex items-center mt-4 text-[#00ADEF] font-semibold hover:underline"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#FFF8F0] relative overflow-hidden">
        <div className="absolute top-10 left-10 animate-wiggle opacity-20 hidden md:block">
          <Heart className="h-14 w-14 text-pink-400" />
        </div>
        <div className="absolute bottom-10 right-10 animate-float opacity-20">
          <Star className="h-12 w-12 text-amber-400" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <span className="text-[#FF6B6B] font-semibold text-lg">What Parents Say</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              Happy Families 💕
            </h2>
          </div>
          <div className="max-w-xl mx-auto">
            <Carousel
              opts={{ loop: true }}
              plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
            >
              <CarouselContent>
                {testimonials.map((t, i) => (
                  <CarouselItem key={i}>
                    <div className="text-center px-4">
                      <p className="text-gray-700 text-lg italic">&ldquo;{t.quote}&rdquo;</p>
                      <div className="mt-6">
                        <p className="font-bold text-gray-800">{t.author}</p>
                        <p className="text-sm text-[#00ADEF]">Parent of {t.child}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselDots />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Image Section - Full Width */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="/stock/nest_5.png.JPG"
          alt="School activities"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-[#00ADEF]/80" />
        <div className="absolute top-10 left-10 animate-float opacity-30 hidden md:block">
          <Sparkles className="h-12 w-12 text-white" />
        </div>
        <div className="absolute bottom-10 right-10 animate-bounce-slow opacity-30 hidden md:block">
          <Star className="h-10 w-10 text-white" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-white">
              Ready to Join Our Family? 🏫
            </h2>
            <p className="mt-4 text-white/90 text-xl">
              Schedule a tour and see why families love MNIS!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#00ADEF] hover:bg-gray-100 rounded-full px-8 text-lg">
                <Link href="/contact">Book a Tour</Link>
              </Button>
              <Button size="lg" className="bg-[#FF6B6B] hover:bg-[#E55555] rounded-full px-8 text-lg">
                <Link href="/admissions">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
