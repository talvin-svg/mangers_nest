import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SCHOOL_NAME, SCHOOL_TAGLINE, PROGRAMS } from '@/constants';
import { Heart, Sparkles, TreePine, Sun, Star, ArrowRight, Baby, Palette, Music } from 'lucide-react';

const features = [
  { icon: Heart, title: 'Loving Care', color: 'text-pink-500' },
  { icon: Sparkles, title: 'Learn Through Play', color: 'text-yellow-500' },
  { icon: TreePine, title: 'Nature Time', color: 'text-green-500' },
  { icon: Music, title: 'Art & Music', color: 'text-purple-500' },
];

const testimonials = [
  {
    quote: "My daughter LOVES going to school every day!",
    author: "Sarah M.",
    child: "Emma, age 4",
  },
  {
    quote: "The teachers are amazing. My son has grown so much.",
    author: "David L.",
    child: "Oliver, age 3",
  },
  {
    quote: "Best decision we ever made for our family.",
    author: "Jennifer K.",
    child: "Sophia, age 5",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 py-16 lg:py-24 overflow-hidden">
        {/* Floating decorations */}
        <div className="absolute top-10 right-10 animate-float">
          <Sun className="h-16 w-16 text-yellow-400" />
        </div>
        <div className="absolute bottom-20 left-10 animate-bounce-slow hidden md:block">
          <Star className="h-10 w-10 text-pink-400" />
        </div>
        <div className="absolute top-40 left-20 animate-wiggle hidden lg:block">
          <Heart className="h-8 w-8 text-red-300" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 mb-6">
              <span className="animate-wave inline-block">👋</span>
              <span className="text-sm font-medium text-gray-600">Welcome to {SCHOOL_NAME}!</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl lg:text-6xl leading-tight">
              {SCHOOL_TAGLINE}
              <span className="text-[#4F7942] block">at {SCHOOL_NAME} 🌟</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              A safe, structured, and excellence-driven early learning environment for children ages 0-6.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#4F7942] hover:bg-[#3d5f34] text-lg hover-grow" asChild>
                <Link href="/contact">Visit Us! 🏫</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg hover-grow" asChild>
                <Link href="/programs">See Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center p-6 rounded-2xl bg-gradient-to-b from-gray-50 to-white border-2 border-dashed border-gray-200 hover-grow cursor-default"
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mb-3">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="font-bold text-gray-800">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Our Programs <span className="inline-block animate-wiggle">🌱</span>
            </h2>
            <p className="mt-2 text-gray-600">Something special for every age!</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {PROGRAMS.map((program, i) => {
              const icons = [Baby, Palette, Sparkles];
              const Icon = icons[i];
              const colors = ['bg-pink-100 text-pink-600', 'bg-blue-100 text-blue-600', 'bg-purple-100 text-purple-600'];
              return (
                <Card key={program.name} className="hover-grow border-2 hover:border-[#4F7942] transition-all">
                  <CardContent className="pt-6 text-center">
                    <div className={`mx-auto w-14 h-14 rounded-full ${colors[i]} flex items-center justify-center mb-4`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{program.name}</h3>
                    <p className="text-[#E9967A] font-medium mt-1">{program.ages}</p>
                    <p className="mt-3 text-gray-600 text-sm">{program.description}</p>
                    <Link
                      href="/programs"
                      className="inline-flex items-center mt-4 text-[#4F7942] font-medium hover:underline"
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

      {/* Happy Families */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Happy Families <span className="inline-block animate-bounce-slow">💕</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Card key={i} className="bg-gradient-to-br from-amber-50 to-orange-50 border-0">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-4">
                    <p className="font-bold text-gray-800">{t.author}</p>
                    <p className="text-sm text-gray-500">Parent of {t.child}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
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
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-bold text-white">
            Come See Us! <span className="inline-block animate-wave">👋</span>
          </h2>
          <p className="mt-3 text-white/90 text-lg">
            Schedule a tour and meet our wonderful team.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg hover-grow" asChild>
              <Link href="/contact">Book a Tour 📅</Link>
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
