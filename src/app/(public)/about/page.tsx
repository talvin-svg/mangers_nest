import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SCHOOL_NAME, SCHOOL_VISION, SCHOOL_MISSION, CORE_VALUES, SCHOOL_OBJECTIVES } from '@/constants';
import { Heart, Star, Trophy, Shield, Lightbulb, Users, Target, Eye, Sparkles, BookOpen, ChevronRight, ArrowRight } from 'lucide-react';

const valueIcons = [Trophy, Shield, Heart, Lightbulb, Users];
const valueColors = [
  { ring: 'border-amber-400 bg-amber-400', text: 'text-amber-500', bg: 'bg-amber-50' },
  { ring: 'border-[#00ADEF] bg-[#00ADEF]', text: 'text-[#00ADEF]', bg: 'bg-cyan-50' },
  { ring: 'border-pink-400 bg-pink-400', text: 'text-pink-500', bg: 'bg-pink-50' },
  { ring: 'border-[#C4694D] bg-[#C4694D]', text: 'text-[#C4694D]', bg: 'bg-orange-50' },
  { ring: 'border-green-400 bg-green-400', text: 'text-green-500', bg: 'bg-green-50' },
];

const team = [
  { name: 'Dr. Maria Santos', role: 'Director', image: '/team/annika-pfp.jpeg' },
  { name: 'Emily Thompson', role: 'Primary Lead', image: '/stock/nest_1.png.JPG' },
  { name: 'James Chen', role: 'Toddler Lead', image: '/stock/nest_2.png.JPG' },
  { name: 'Sarah Williams', role: 'Infant Lead', image: '/stock/nest_3.png.JPG' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero — text-only gradient with animated blobs */}
      <section className="relative min-h-[450px] overflow-hidden bg-gradient-to-br from-[#00ADEF] via-[#009AD8] to-[#0080B8]">
        <div className="absolute top-[-50px] right-[-30px] w-72 h-72 bg-[#FFE066]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-[-70px] left-[-50px] w-96 h-96 bg-[#FF6B6B]/15 rounded-full blur-3xl animate-bounce-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-white/5 rounded-full blur-2xl" />
        <div className="absolute top-14 right-24 animate-float opacity-15 hidden md:block">
          <BookOpen className="h-16 w-16 text-white" />
        </div>
        <div className="absolute bottom-16 left-20 animate-bounce-slow opacity-15 hidden md:block">
          <Heart className="h-12 w-12 text-white" />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-wiggle opacity-10 hidden lg:block">
          <Star className="h-10 w-10 text-white" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white relative">
              <span className="text-[#FFE066] font-semibold text-lg tracking-wide uppercase">About {SCHOOL_NAME}</span>
              <h1 className="text-5xl sm:text-6xl font-bold mt-3 leading-tight">
                Our Story
              </h1>
              <p className="mt-5 text-xl text-white/85 max-w-xl">
                A place where every child is celebrated, every teacher is family,
                and excellence is the standard.
              </p>
              <Button size="lg" className="mt-8 bg-white text-[#00ADEF] hover:bg-white/90 rounded-full px-8 text-lg font-semibold" asChild>
                <a href="#values">
                  What We Stand For <ChevronRight className="ml-1 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission — Side by side cards */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-10 animate-wiggle opacity-10 hidden lg:block">
          <Sparkles className="h-20 w-20 text-cyan-400" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-14">
            <span className="text-[#00ADEF] font-semibold text-lg">Who We Are</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              Vision & Mission
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
            {/* Vision Card - Light Green */}
            <div className="group bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full" />
              <div className="absolute bottom-4 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Eye className="h-24 w-24" />
              </div>
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
                <p className="mt-4 text-white/90 leading-relaxed">
                  {SCHOOL_VISION}
                </p>
              </div>
            </div>

            {/* Mission Card - Yellow */}
            <div className="group bg-gradient-to-br from-amber-400 to-yellow-500 rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-white/20 rounded-full" />
              <div className="absolute top-4 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target className="h-24 w-24 text-amber-800" />
              </div>
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Target className="h-7 w-7 text-amber-800" />
                </div>
                <h3 className="text-2xl font-bold text-amber-900">Our Mission</h3>
                <p className="mt-4 text-amber-900/80 leading-relaxed">
                  {SCHOOL_MISSION}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values — stacked grid */}
      <section id="values" className="py-20 bg-[#FFF8F0] relative overflow-hidden scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#FF6B6B] font-semibold text-lg">What We Stand For</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 flex items-center justify-center gap-3">
              Our Core Values
              <Trophy className="h-9 w-9 text-[#FFE066]" />
            </h2>
          </div>

          {/* Stacked cards - centered */}
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {CORE_VALUES.map((value, i) => {
              const Icon = valueIcons[i];
              const c = valueColors[i];
              return (
                <div
                  key={value.title}
                  className="group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className={`bg-white border-2 ${c.ring.split(' ')[0]} rounded-3xl p-8 h-full relative overflow-hidden shadow-sm hover:shadow-xl transition-shadow`}>
                    {/* Large faded number */}
                    <span className={`absolute top-4 right-6 text-8xl font-black ${c.text} opacity-10 select-none leading-none`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl ${c.ring.split(' ')[1]} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{value.title}</h3>
                    <p className="mt-3 text-gray-500 leading-relaxed text-base">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us — Side by side with image */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/stock/nest_5.png.JPG"
                  alt="Our school"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FFE066] rounded-full -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#00ADEF] rounded-full -z-10" />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="text-[#00ADEF] font-semibold text-lg">Why Choose MNIS</span>
              <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-8">
                What Sets Us Apart
              </h2>

              <div className="space-y-5">
                {SCHOOL_OBJECTIVES.map((objective, i) => {
                  const colors = ['bg-[#00ADEF]', 'bg-[#FF6B6B]', 'bg-[#FFE066]'];
                  const icons = [BookOpen, Shield, Users];
                  const Icon = icons[i] || BookOpen;
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-6 bg-gray-50 rounded-3xl hover:bg-gray-100 transition-colors group"
                    >
                      <div className={`w-14 h-14 rounded-2xl ${colors[i]} flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <p className="text-gray-700 leading-relaxed font-medium pt-3">
                        {objective}
                      </p>
                    </div>
                  );
                })}
              </div>

              <Button size="lg" className="mt-8 bg-[#00ADEF] hover:bg-[#0095CC] rounded-full px-8" asChild>
                <Link href="/contact">
                  Schedule a Visit <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team — overlapping photo grid */}
      <section className="py-20 bg-[#FFF8F0] relative overflow-hidden">
        <div className="absolute top-10 left-10 animate-float opacity-20 hidden md:block">
          <Sparkles className="h-14 w-14 text-cyan-400" />
        </div>
        <div className="absolute bottom-10 right-10 animate-bounce-slow opacity-20 hidden md:block">
          <Star className="h-12 w-12 text-amber-400" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-14">
            <span className="text-[#FF6B6B] font-semibold text-lg">Our Team</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 flex items-center justify-center gap-3">
              Meet Our Teachers
              <Users className="h-9 w-9 text-[#00ADEF]" />
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {team.map((member, i) => {
              const colors = ['bg-[#FF6B6B]', 'bg-[#00ADEF]', 'bg-[#FFE066]', 'bg-[#C4694D]'];
              const textColors = ['text-white', 'text-white', 'text-amber-900', 'text-white'];
              return (
                <div key={member.name} className="group relative">
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-bold text-white text-lg">{member.name}</h3>
                      <div className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold ${colors[i]} ${textColors[i]}`}>
                        {member.role}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="h-px flex-1 max-w-[100px] bg-gray-200" />
            <p className="text-gray-400 text-sm font-medium">+ our amazing assistant teachers and staff</p>
            <div className="h-px flex-1 max-w-[100px] bg-gray-200" />
          </div>
        </div>
      </section>

      {/* CTA — gradient with glassmorphism */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#C4694D] via-[#C4694D] to-[#A85540]">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#FFE066]/10 rounded-full blur-2xl" />
        <div className="absolute top-10 left-10 animate-float opacity-20 hidden md:block">
          <Sparkles className="h-12 w-12 text-white" />
        </div>
        <div className="absolute bottom-10 right-10 animate-bounce-slow opacity-20 hidden md:block">
          <Star className="h-10 w-10 text-white" />
        </div>
        <div className="flex items-center justify-center px-4 py-20">
          <div className="max-w-2xl w-full relative">
            <h2 className="text-4xl font-bold text-white text-center flex items-center justify-center gap-3">
              Come Meet Us
              <Heart className="h-10 w-10 text-[#FFE066]" />
            </h2>
            <p className="mt-4 text-white/80 text-xl text-center">
              Schedule a tour and see our classrooms in person.
            </p>
            <div className="mt-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-[#C4694D] hover:bg-white/90 rounded-full px-8 text-lg font-semibold" asChild>
                  <Link href="/contact">
                    Book a Tour <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" className="bg-white/15 text-white hover:bg-white/25 border border-white/20 rounded-full px-8 text-lg" asChild>
                  <Link href="/programs">See Programs</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
