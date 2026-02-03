import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Baby, Heart, Sparkles, Star, Clock, BookOpen, Sun } from 'lucide-react';

const programs = [
  {
    icon: Baby,
    emoji: '👶',
    name: 'Creche',
    ages: '6 weeks - 18 months',
    color: 'from-pink-400 to-pink-500',
    bgLight: 'bg-pink-50',
    highlights: ['Cozy & safe environment', 'Sensory play activities', 'Nurturing care', 'Flexible schedules'],
    image: '/stock/nest_1.png.JPG',
  },
  {
    icon: Heart,
    emoji: '🧒',
    name: 'Pre School',
    ages: '18 months - 3 years',
    color: 'from-cyan-400 to-cyan-500',
    bgLight: 'bg-cyan-50',
    highlights: ['Language development', 'Social skills building', 'Art & music', 'Outdoor exploration'],
    image: '/stock/nest_2.png.JPG',
  },
  {
    icon: Sparkles,
    emoji: '🎒',
    name: 'Primary',
    ages: '3 - 6 years',
    color: 'from-amber-400 to-amber-500',
    bgLight: 'bg-amber-50',
    highlights: ['Reading & math', 'Science exploration', 'Life skills', 'Kindergarten ready'],
    image: '/stock/nest_3.png.JPG',
  },
];

const schedule = [
  { time: '7:30 AM', activity: 'Arrive & Free Play', emoji: '🌅' },
  { time: '9:00 AM', activity: 'Learning Time', emoji: '📚' },
  { time: '11:30 AM', activity: 'Outside Play', emoji: '🌳' },
  { time: '12:00 PM', activity: 'Lunch', emoji: '🍎' },
  { time: '1:00 PM', activity: 'Rest Time', emoji: '😴' },
  { time: '3:00 PM', activity: 'Afternoon Fun', emoji: '🎨' },
  { time: '5:30 PM', activity: 'Pickup', emoji: '👋' },
];

export default function ProgramsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[400px] overflow-hidden">
        <Image
          src="/stock/nest_5.png.JPG"
          alt="Our Programs"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B]/90 to-[#FF6B6B]/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <span className="text-[#FFE066] font-semibold text-lg">What We Offer</span>
              <h1 className="text-4xl sm:text-5xl font-bold mt-2">
                Our Programs 🌈
              </h1>
              <p className="mt-4 text-xl text-white/90">
                Fun learning for every age and stage!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-[#FFF8F0] relative overflow-hidden">
        <div className="absolute top-10 right-10 animate-float opacity-20 hidden md:block">
          <Sun className="h-16 w-16 text-amber-400" />
        </div>
        <div className="absolute bottom-20 left-10 animate-bounce-slow opacity-20 hidden md:block">
          <Star className="h-12 w-12 text-pink-400" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="space-y-16">
            {programs.map((program, i) => (
              <div
                key={program.name}
                className={`grid gap-8 lg:grid-cols-2 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`relative ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={program.image}
                      alt={program.name}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-40`} />
                  </div>
                  {/* Decorative circles */}
                  <div className={`absolute -bottom-4 ${i % 2 === 0 ? '-right-4' : '-left-4'} w-24 h-24 bg-[#FFE066] rounded-full -z-10`} />
                </div>
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center shadow-lg`}>
                      <span className="text-3xl">{program.emoji}</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800">{program.name}</h2>
                      <p className="text-[#FF6B6B] font-semibold">{program.ages}</p>
                    </div>
                  </div>
                  <div className={`${program.bgLight} rounded-2xl p-6 mt-6`}>
                    <h3 className="font-semibold text-gray-800 mb-4">Program Highlights:</h3>
                    <ul className="space-y-3">
                      {program.highlights.map((h, j) => (
                        <li key={j} className="flex items-center gap-3 text-gray-700">
                          <Star className="h-5 w-5 text-amber-400 fill-amber-400 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button size="lg" className="mt-6 bg-[#00ADEF] hover:bg-[#0095CC] rounded-full px-8" asChild>
                    <Link href="/contact">Inquire About {program.name}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-10 animate-wiggle opacity-10 hidden lg:block">
          <Heart className="h-20 w-20 text-pink-400" />
        </div>
        <div className="absolute bottom-10 right-10 animate-float opacity-10 hidden lg:block">
          <Sparkles className="h-14 w-14 text-cyan-400" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-5xl mx-auto">
            <div>
              <span className="text-[#00ADEF] font-semibold text-lg">Daily Routine</span>
              <h2 className="text-4xl font-bold text-gray-800 mt-2">
                A Day at School ⏰
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Our structured daily routine helps children feel secure while learning and growing.
              </p>
            </div>
            <Card className="rounded-3xl shadow-xl border-0">
              <CardContent className="pt-6 pb-6">
                <div className="space-y-4">
                  {schedule.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 pb-3 border-b last:border-b-0 last:pb-0">
                      <span className="text-3xl">{item.emoji}</span>
                      <div className="flex-1">
                        <span className="text-sm text-[#00ADEF] font-semibold">{item.time}</span>
                        <p className="text-gray-700 font-medium">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="/stock/nest_4.png.JPG"
          alt="Join us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#00ADEF]/85" />
        <div className="absolute top-10 left-10 animate-float opacity-30 hidden md:block">
          <Sparkles className="h-12 w-12 text-white" />
        </div>
        <div className="absolute bottom-10 right-10 animate-bounce-slow opacity-30 hidden md:block">
          <Star className="h-10 w-10 text-white" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-white">
              Which Program is Right for You? 🤔
            </h2>
            <p className="mt-4 text-white/90 text-xl">
              Come visit and we&apos;ll help you decide!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#00ADEF] hover:bg-gray-100 rounded-full px-8 text-lg" asChild>
                <Link href="/contact">Schedule a Tour 📅</Link>
              </Button>
              <Button size="lg" className="bg-[#FF6B6B] hover:bg-[#E55555] rounded-full px-8 text-lg" asChild>
                <Link href="/admissions">Admissions Info</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
