import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SCHOOL_NAME, SCHOOL_VISION, SCHOOL_MISSION, CORE_VALUES, SCHOOL_OBJECTIVES } from '@/constants';
import { Heart, Star, Sparkles, Sun, BookOpen, Trophy, Shield, Lightbulb, Users, Target, Eye, CheckCircle } from 'lucide-react';

const valueIcons = [
  { icon: Trophy, color: 'text-yellow-500' },
  { icon: Shield, color: 'text-blue-500' },
  { icon: Heart, color: 'text-pink-500' },
  { icon: Lightbulb, color: 'text-purple-500' },
  { icon: Users, color: 'text-green-500' },
];

const team = [
  { name: 'Dr. Maria Santos', role: 'Director', emoji: '👩‍🏫' },
  { name: 'Emily Thompson', role: 'Primary Lead', emoji: '🌟' },
  { name: 'James Chen', role: 'Toddler Lead', emoji: '🎨' },
  { name: 'Sarah Williams', role: 'Infant Lead', emoji: '🍼' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-16 relative overflow-hidden">
        <div className="absolute top-10 right-10 animate-float">
          <Sun className="h-16 w-16 text-yellow-400" />
        </div>
        <div className="absolute bottom-10 left-10 animate-bounce-slow hidden md:block">
          <Star className="h-10 w-10 text-pink-400" />
        </div>
        <div className="absolute top-20 left-20 animate-wiggle hidden lg:block">
          <Heart className="h-8 w-8 text-red-300" />
        </div>
        <div className="absolute bottom-20 right-40 animate-float hidden lg:block">
          <BookOpen className="h-10 w-10 text-purple-300" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-gray-800">
              Our Story <span className="inline-block animate-wiggle">📖</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              A place where every child is celebrated!
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Vision */}
            <Card className="hover-grow border-2 border-dashed border-gray-200">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-purple-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Vision 🌟</h2>
                <p className="text-gray-600 leading-relaxed">{SCHOOL_VISION}</p>
              </CardContent>
            </Card>
            {/* Mission */}
            <Card className="hover-grow border-2 border-dashed border-gray-200">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Mission 🎯</h2>
                <p className="text-gray-600 leading-relaxed">{SCHOOL_MISSION}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Our Core Values ✨
          </h2>
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-5 max-w-5xl mx-auto">
            {CORE_VALUES.map((value, i) => {
              const IconComponent = valueIcons[i].icon;
              return (
                <div
                  key={value.title}
                  className="text-center p-5 rounded-2xl bg-gradient-to-b from-gray-50 to-white border-2 border-dashed border-gray-200 hover-grow cursor-default"
                >
                  <div className="mx-auto w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center mb-3">
                    <IconComponent className={`h-7 w-7 ${valueIcons[i].color}`} />
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm">{value.title}</h3>
                  <p className="text-xs text-gray-500 mt-2">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-[#4F7942] relative overflow-hidden">
        <div className="absolute top-5 left-10 opacity-20">
          <Sparkles className="h-16 w-16 text-white" />
        </div>
        <div className="absolute bottom-5 right-10 opacity-20">
          <Star className="h-12 w-12 text-white" />
        </div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            What We Aim to Achieve 🎯
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {SCHOOL_OBJECTIVES.map((objective, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/10 rounded-xl p-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <p className="text-white/90">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Meet Our Teachers <span className="inline-block animate-wave">👋</span>
          </h2>
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {team.map((member) => (
              <Card key={member.name} className="hover-grow text-center">
                <CardContent className="pt-6">
                  <div className="text-5xl mb-3">
                    {member.emoji}
                  </div>
                  <h3 className="font-bold text-gray-800">{member.name}</h3>
                  <p className="text-sm text-[#E9967A]">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8">
            + our amazing assistant teachers and staff! 💕
          </p>
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
            Come Meet Us! <span className="inline-block animate-wave">👋</span>
          </h2>
          <p className="mt-3 text-white/90 text-lg">
            Schedule a tour and see our classrooms.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg hover-grow" asChild>
              <Link href="/contact">Book a Tour 📅</Link>
            </Button>
            <Button size="lg" className="bg-white text-[#4F7942] hover:bg-gray-100 text-lg hover-grow" asChild>
              <Link href="/programs">See Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
