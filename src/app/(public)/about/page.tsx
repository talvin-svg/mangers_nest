import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SCHOOL_NAME } from '@/constants';
import { Heart, Lightbulb, Eye, Smile, Star, Sparkles, Sun, BookOpen } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Kindness', color: 'bg-pink-100 text-pink-500' },
  { icon: Lightbulb, title: 'Curiosity', color: 'bg-yellow-100 text-yellow-500' },
  { icon: Eye, title: 'Discovery', color: 'bg-blue-100 text-blue-500' },
  { icon: Smile, title: 'Joy', color: 'bg-green-100 text-green-500' },
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

      {/* Story - Simplified */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-6xl mb-6 animate-bounce-slow">🏠</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Started</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {SCHOOL_NAME} began in 2005 with one classroom and a big dream:
              to create a warm, happy place where little ones could learn at their own pace.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Today, we&apos;re a community of over 100 families, but we still feel like home.
              <span className="text-[#4F7942] font-medium"> Small classes. Big hearts.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            What We Believe <span className="inline-block animate-wiggle">✨</span>
          </h2>
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-2xl bg-gradient-to-b from-gray-50 to-white border-2 border-dashed border-gray-200 hover-grow cursor-default"
              >
                <div className={`mx-auto w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mb-3 ${i % 2 === 0 ? 'animate-bounce-slow' : 'animate-float'}`}>
                  <value.icon className={`h-8 w-8 ${value.color.split(' ')[1]}`} />
                </div>
                <h3 className="font-bold text-gray-800">{value.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Montessori Quote */}
      <section className="py-16 bg-[#4F7942] relative overflow-hidden">
        <div className="absolute top-5 left-10 animate-float opacity-20">
          <Sparkles className="h-16 w-16 text-white" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <p className="text-2xl font-medium italic">
              &ldquo;Follow the child.&rdquo;
            </p>
            <p className="mt-3 text-white/70">— Maria Montessori</p>
            <p className="mt-6 text-white/90">
              We let children lead the way. They show us what they&apos;re ready to learn!
            </p>
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
            {team.map((member, i) => (
              <Card key={member.name} className="hover-grow text-center">
                <CardContent className="pt-6">
                  <div className={`text-5xl mb-3 ${i % 2 === 0 ? 'animate-bounce-slow' : 'animate-float'}`}>
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
