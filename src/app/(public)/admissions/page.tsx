import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SCHOOL_INFO } from '@/constants';
import { Phone, Calendar, CheckCircle, Sun, Star, Sparkles, Heart, MessageCircle, School, ClipboardList, PartyPopper } from 'lucide-react';

const steps = [
  { num: '01', title: 'Say Hi!', desc: 'Call or fill out our form', icon: MessageCircle, color: 'bg-pink-500', line: 'from-pink-500 to-cyan-500' },
  { num: '02', title: 'Visit Us', desc: 'Tour our classrooms', icon: School, color: 'bg-cyan-500', line: 'from-cyan-500 to-amber-500' },
  { num: '03', title: 'Apply', desc: 'Quick & easy form', icon: ClipboardList, color: 'bg-amber-500', line: 'from-amber-500 to-green-500' },
  { num: '04', title: 'Welcome!', desc: 'Join our family', icon: PartyPopper, color: 'bg-green-500', line: '' },
];

const tuition = [
  { program: 'Creche', price: 'Contact Us', color: 'from-pink-400 to-pink-500' },
  { program: 'Pre School', price: 'Contact Us', color: 'from-cyan-400 to-cyan-500' },
  { program: 'Primary', price: 'Contact Us', color: 'from-amber-400 to-amber-500' },
];

const dates = [
  { event: 'Open House', date: '1st Saturday each month' },
  { event: 'Fall Applications', date: 'Now Open' },
  { event: 'School Starts', date: 'Contact for dates' },
];

export default function AdmissionsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[400px] overflow-hidden">
        <Image
          src="/stock/nest_2.png.JPG"
          alt="Join MNIS"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00ADEF]/90 to-[#00ADEF]/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <span className="text-[#FFE066] font-semibold text-lg">Enroll Today</span>
              <h1 className="text-4xl sm:text-5xl font-bold mt-2">
                Join Our Family
              </h1>
              <p className="mt-4 text-xl text-white/90">
                Getting started is easy! We can&apos;t wait to meet you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-[#FFF8F0] relative overflow-hidden">
        <div className="absolute top-10 right-10 animate-float opacity-20 hidden md:block">
          <Sun className="h-16 w-16 text-amber-400" />
        </div>
        <div className="absolute bottom-10 left-10 animate-bounce-slow opacity-20 hidden md:block">
          <Star className="h-12 w-12 text-pink-400" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <span className="text-[#FF6B6B] font-semibold text-lg">Simple Process</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              How to Enroll
            </h2>
          </div>
          <div className="max-w-5xl mx-auto">
            {/* Desktop: horizontal timeline */}
            <div className="hidden lg:grid grid-cols-4 gap-0 relative">
              {steps.map((step, i) => {
                const StepIcon = step.icon;
                return (
                  <div key={step.num} className="relative flex flex-col items-center text-center px-4">
                    {/* Connector line */}
                    {i < steps.length - 1 && (
                      <div className={`absolute top-7 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-1 rounded-full bg-gradient-to-r ${step.line}`} />
                    )}
                    {/* Icon circle */}
                    <div className={`relative z-10 w-14 h-14 rounded-full ${step.color} text-white flex items-center justify-center shadow-lg`}>
                      <StepIcon className="h-7 w-7" />
                    </div>
                    <span className="text-xs font-bold text-gray-400 mt-3 uppercase tracking-widest">Step {step.num}</span>
                    <h3 className="font-bold text-gray-800 text-lg mt-1">{step.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{step.desc}</p>
                  </div>
                );
              })}
            </div>
            {/* Mobile: vertical timeline */}
            <div className="lg:hidden space-y-0">
              {steps.map((step, i) => {
                const StepIcon = step.icon;
                return (
                  <div key={step.num} className="flex gap-5">
                    {/* Line + circle */}
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full ${step.color} text-white flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <StepIcon className="h-6 w-6" />
                      </div>
                      {i < steps.length - 1 && (
                        <div className={`w-0.5 flex-1 my-2 bg-gradient-to-b ${step.line}`} />
                      )}
                    </div>
                    {/* Text */}
                    <div className={`pb-8 ${i === steps.length - 1 ? 'pb-0' : ''}`}>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Step {step.num}</span>
                      <h3 className="font-bold text-gray-800 text-lg">{step.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Tuition */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-10 animate-wiggle opacity-10 hidden lg:block">
          <Heart className="h-20 w-20 text-pink-400" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <span className="text-[#00ADEF] font-semibold text-lg">Investment</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              Tuition
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            {tuition.map((t) => (
              <Card key={t.program} className="text-center hover-grow rounded-3xl shadow-xl border-0 overflow-hidden">
                <div className={`h-24 bg-gradient-to-br ${t.color} flex items-center justify-center`}>
                </div>
                <CardContent className="pt-6 pb-6">
                  <h3 className="font-bold text-gray-800 text-xl">{t.program}</h3>
                  <p className="text-2xl font-bold text-[#00ADEF] mt-2">{t.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8">
            Sibling discounts available! Contact us for detailed pricing.
          </p>
        </div>
      </section>

      {/* Image + Dates */}
      <section className="py-20 bg-gradient-to-b from-[#E8F7FC] to-white relative overflow-hidden">
        <div className="absolute top-10 left-10 animate-float opacity-20 hidden md:block">
          <Sparkles className="h-14 w-14 text-cyan-400" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-5xl mx-auto">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/stock/nest_3.png.JPG"
                  alt="School calendar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-[#FF6B6B] rounded-full -z-10" />
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#FFE066] rounded-full -z-10" />
            </div>
            <div>
              <span className="text-[#FF6B6B] font-semibold text-lg">Mark Your Calendar</span>
              <h2 className="text-4xl font-bold text-gray-800 mt-2 flex items-center gap-3">
                <Calendar className="h-10 w-10 text-[#00ADEF]" />
                Key Dates
              </h2>
              <Card className="mt-8 rounded-3xl shadow-xl border-0">
                <CardContent className="pt-6 pb-6">
                  <div className="space-y-4">
                    {dates.map((d, i) => (
                      <div key={i} className="flex items-center gap-4 pb-4 border-b last:border-b-0 last:pb-0">
                        <div className="w-3 h-3 rounded-full bg-[#00ADEF]" />
                        <div className="flex-1">
                          <p className="font-bold text-gray-800">{d.event}</p>
                          <p className="text-sm text-[#00ADEF] font-medium">{d.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="/stock/nest_1.png.JPG"
          alt="Contact us"
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
              Ready? Let&apos;s Talk!
            </h2>
            <p className="mt-4 text-white/90 text-xl">
              We&apos;d love to meet your family.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#C4694D] hover:bg-gray-100 rounded-full px-8 text-lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" className="bg-[#00ADEF] hover:bg-[#0095CC] rounded-full px-8 text-lg" asChild>
                <a href={`tel:${SCHOOL_INFO.phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
