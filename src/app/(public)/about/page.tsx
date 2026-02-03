import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SCHOOL_NAME, SCHOOL_VISION, SCHOOL_MISSION, CORE_VALUES, SCHOOL_OBJECTIVES } from '@/constants';
import { Heart, Star, Trophy, Shield, Lightbulb, Users, Target, Eye, CheckCircle, Sun, Sparkles } from 'lucide-react';

const valueIcons = [
  { icon: Trophy, color: 'bg-amber-500' },
  { icon: Shield, color: 'bg-blue-500' },
  { icon: Heart, color: 'bg-pink-500' },
  { icon: Lightbulb, color: 'bg-purple-500' },
  { icon: Users, color: 'bg-green-500' },
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
      {/* Hero with Image */}
      <section className="relative min-h-[400px] overflow-hidden">
        <Image
          src="/stock/nest_4.png.JPG"
          alt="About MNIS"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00ADEF]/90 to-[#00ADEF]/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <span className="text-[#FFE066] font-semibold text-lg">About Us</span>
              <h1 className="text-4xl sm:text-5xl font-bold mt-2">
                Our Story 📖
              </h1>
              <p className="mt-4 text-xl text-white/90">
                A place where every child is celebrated and excellence begins!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#FFF8F0] relative overflow-hidden">
        <div className="absolute top-10 right-10 animate-float opacity-20 hidden md:block">
          <Sun className="h-16 w-16 text-amber-400" />
        </div>
        <div className="absolute bottom-10 left-10 animate-bounce-slow opacity-20 hidden md:block">
          <Star className="h-12 w-12 text-pink-400" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {/* Vision */}
            <Card className="rounded-3xl shadow-xl border-0 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500" />
              <CardContent className="pt-8 pb-8">
                <div className="mx-auto w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                  <Eye className="h-10 w-10 text-purple-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Our Vision 🌟</h2>
                <p className="text-gray-600 text-center leading-relaxed">{SCHOOL_VISION}</p>
              </CardContent>
            </Card>
            {/* Mission */}
            <Card className="rounded-3xl shadow-xl border-0 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500" />
              <CardContent className="pt-8 pb-8">
                <div className="mx-auto w-20 h-20 rounded-full bg-cyan-100 flex items-center justify-center mb-6">
                  <Target className="h-10 w-10 text-cyan-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Our Mission 🎯</h2>
                <p className="text-gray-600 text-center leading-relaxed">{SCHOOL_MISSION}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-10 animate-wiggle opacity-10 hidden lg:block">
          <Heart className="h-20 w-20 text-pink-400" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <span className="text-[#FF6B6B] font-semibold text-lg">What We Stand For</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              Our Core Values ✨
            </h2>
          </div>
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-5 max-w-5xl mx-auto">
            {CORE_VALUES.map((value, i) => {
              const IconComponent = valueIcons[i].icon;
              return (
                <div
                  key={value.title}
                  className="text-center p-6 rounded-3xl bg-white shadow-lg hover-grow border-2 border-gray-100"
                >
                  <div className={`mx-auto w-16 h-16 rounded-full ${valueIcons[i].color} flex items-center justify-center mb-4 shadow-md`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800">{value.title}</h3>
                  <p className="text-xs text-gray-500 mt-2">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="py-20 bg-gradient-to-b from-[#E8F7FC] to-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-[#00ADEF] font-semibold text-lg">Why Choose Us</span>
              <h2 className="text-4xl font-bold text-gray-800 mt-2">
                Excellence in Every Detail 🏆
              </h2>
              <div className="mt-8 space-y-4">
                {SCHOOL_OBJECTIVES.map((objective, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-4 shadow-md">
                    <div className="w-10 h-10 rounded-full bg-[#00ADEF] flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-gray-700">{objective}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/stock/nest_5.png.JPG"
                  alt="Our school"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#FF6B6B] rounded-full -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FFE066] rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#FFF8F0] relative overflow-hidden">
        <div className="absolute top-10 left-10 animate-float opacity-20 hidden md:block">
          <Sparkles className="h-14 w-14 text-cyan-400" />
        </div>
        <div className="absolute bottom-10 right-10 animate-bounce-slow opacity-20 hidden md:block">
          <Star className="h-12 w-12 text-amber-400" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <span className="text-[#FF6B6B] font-semibold text-lg">Our Team</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              Meet Our Teachers 👋
            </h2>
          </div>
          <div className="grid gap-8 grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {team.map((member) => (
              <Card key={member.name} className="hover-grow text-center rounded-3xl shadow-lg border-0 overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-4 pb-6">
                  <h3 className="font-bold text-gray-800">{member.name}</h3>
                  <p className="text-sm text-[#00ADEF]">{member.role}</p>
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
      <section className="relative h-[350px] overflow-hidden">
        <Image
          src="/stock/nest_1.png.JPG"
          alt="Visit us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#C4694D]/90" />
        <div className="absolute top-10 left-10 animate-float opacity-30 hidden md:block">
          <Sparkles className="h-12 w-12 text-white" />
        </div>
        <div className="absolute bottom-10 right-10 animate-bounce-slow opacity-30 hidden md:block">
          <Star className="h-10 w-10 text-white" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-white">
              Come Meet Us! 👋
            </h2>
            <p className="mt-4 text-white/90 text-xl">
              Schedule a tour and see our classrooms.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#C4694D] hover:bg-gray-100 rounded-full px-8 text-lg" asChild>
                <Link href="/contact">Book a Tour 📅</Link>
              </Button>
              <Button size="lg" className="bg-[#00ADEF] hover:bg-[#0095CC] rounded-full px-8 text-lg" asChild>
                <Link href="/programs">See Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
