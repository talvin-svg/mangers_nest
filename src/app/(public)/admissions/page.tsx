import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SCHOOL_INFO } from '@/constants';
import { Phone, Star, Calendar, Heart, Sun, Sparkles } from 'lucide-react';

const steps = [
  { num: '1', title: 'Say Hi!', desc: 'Call or fill out our form', emoji: '👋' },
  { num: '2', title: 'Visit Us', desc: 'Tour our classrooms', emoji: '🏫' },
  { num: '3', title: 'Apply', desc: 'Quick & easy form', emoji: '📝' },
  { num: '4', title: 'Welcome!', desc: 'Join our family', emoji: '🎉' },
];

const tuition = [
  { program: 'Infants', price: '$2,200/mo', emoji: '👶' },
  { program: 'Toddlers', price: '$1,950/mo', emoji: '🧒' },
  { program: 'Primary', price: '$1,650/mo', emoji: '🎒' },
];

const dates = [
  { event: 'Open House', date: '1st Saturday each month', emoji: '🏠' },
  { event: 'Fall Applications', date: 'Due March 15', emoji: '🍂' },
  { event: 'School Starts', date: 'September 3, 2026', emoji: '🎒' },
];

export default function AdmissionsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 py-16 relative overflow-hidden">
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
          <Sparkles className="h-10 w-10 text-purple-300" />
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl font-bold text-gray-800">
            Join Our Family <span className="inline-block animate-wave">👋</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Getting started is easy!
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            How to Enroll <span className="inline-block animate-wiggle">✨</span>
          </h2>
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div key={step.num} className="text-center">
                <div className={`mx-auto w-20 h-20 rounded-full bg-[#4F7942] text-white flex items-center justify-center mb-4 text-3xl ${i % 2 === 0 ? 'animate-bounce-slow' : 'animate-float'}`}>
                  {step.emoji}
                </div>
                <div className="text-sm font-bold text-[#4F7942]">Step {step.num}</div>
                <h3 className="font-bold text-gray-800">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tuition */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Tuition <span className="inline-block animate-bounce-slow">💰</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-3xl mx-auto">
            {tuition.map((t) => (
              <Card key={t.program} className="text-center hover-grow">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">{t.emoji}</div>
                  <h3 className="font-bold text-gray-800">{t.program}</h3>
                  <p className="text-2xl font-bold text-[#4F7942] mt-2">{t.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-6 text-sm">
            Sibling discount available! Financial aid for qualifying families.
          </p>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              <Calendar className="inline h-8 w-8 mr-2 text-[#4F7942]" />
              Key Dates
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {dates.map((d, i) => (
                    <div key={i} className="flex items-center gap-4 pb-3 border-b last:border-b-0 last:pb-0">
                      <span className="text-2xl">{d.emoji}</span>
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">{d.event}</p>
                        <p className="text-sm text-[#4F7942]">{d.date}</p>
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
            Ready? Let&apos;s Talk! <span className="inline-block animate-wave">📞</span>
          </h2>
          <p className="mt-3 text-white/90 text-lg">
            We&apos;d love to meet your family.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg hover-grow" asChild>
              <Link href="/contact">Contact Us 💬</Link>
            </Button>
            <Button size="lg" className="bg-white text-[#4F7942] hover:bg-gray-100 text-lg hover-grow" asChild>
              <a href={`tel:${SCHOOL_INFO.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
