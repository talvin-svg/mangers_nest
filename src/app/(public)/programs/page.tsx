import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Baby, Heart, Sparkles, Clock, Star, Sun, Rainbow, Flower2 } from 'lucide-react';

const programs = [
  {
    icon: Baby,
    emoji: '👶',
    name: 'Infants',
    ages: '6 weeks - 18 months',
    color: 'from-pink-100 to-pink-50',
    iconColor: 'bg-pink-200 text-pink-600',
    highlights: ['Cozy & safe', 'Sensory play', 'Cuddles & care', 'Your schedule'],
  },
  {
    icon: Heart,
    emoji: '🧒',
    name: 'Toddlers',
    ages: '18 months - 3 years',
    color: 'from-blue-100 to-blue-50',
    iconColor: 'bg-blue-200 text-blue-600',
    highlights: ['Learning words', 'Making friends', 'Art & music', 'Outdoor play'],
  },
  {
    icon: Sparkles,
    emoji: '🎒',
    name: 'Primary',
    ages: '3 - 6 years',
    color: 'from-purple-100 to-purple-50',
    iconColor: 'bg-purple-200 text-purple-600',
    highlights: ['Reading & math', 'Science fun', 'Big kid skills', 'Kindergarten ready'],
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
      <section className="bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 py-16 relative overflow-hidden">
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
          <Rainbow className="h-10 w-10 text-purple-300" />
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl font-bold text-gray-800">
            Our Programs <span className="inline-block animate-wiggle">🌈</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Fun learning for every age!
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {programs.map((program, i) => (
              <Card key={program.name} className={`hover-grow overflow-hidden border-2`}>
                <div className={`bg-gradient-to-b ${program.color} p-6 text-center`}>
                  <div className={`mx-auto w-20 h-20 rounded-full ${program.iconColor} flex items-center justify-center mb-3 ${i % 2 === 0 ? 'animate-bounce-slow' : 'animate-float'}`}>
                    <span className="text-4xl">{program.emoji}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{program.name}</h2>
                  <p className="text-[#E9967A] font-medium">{program.ages}</p>
                </div>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    {program.highlights.map((h, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-600">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              A Day at School <span className="inline-block animate-bounce-slow">⏰</span>
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {schedule.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 pb-3 border-b last:border-b-0 last:pb-0">
                      <span className="text-2xl">{item.emoji}</span>
                      <div className="flex-1">
                        <span className="text-sm text-[#4F7942] font-medium">{item.time}</span>
                        <p className="text-gray-700">{item.activity}</p>
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
            Which program is right for you? <span className="inline-block animate-wiggle">🤔</span>
          </h2>
          <p className="mt-3 text-white/90 text-lg">
            Come visit and we&apos;ll help you decide!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg hover-grow" asChild>
              <Link href="/contact">Schedule a Tour 📅</Link>
            </Button>
            <Button size="lg" className="bg-white text-[#4F7942] hover:bg-gray-100 text-lg hover-grow" asChild>
              <Link href="/admissions">Admissions Info</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
