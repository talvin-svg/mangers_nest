import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Clock, Baby, Users, BookOpen, Briefcase, Sun, Moon, Coffee, Utensils, TreePine, Palette } from 'lucide-react';

const programs = [
  {
    name: 'Creche',
    ages: '6 weeks - 18 months',
    tagColor: 'bg-pink-100 text-pink-600',
    accentColor: 'bg-pink-500',
    icon: Baby,
    description:
      'A warm, nurturing space where your little one takes their first steps in learning through sensory play and gentle care.',
    highlights: [
      'Cozy & safe environment',
      'Sensory play activities',
      'Nurturing care',
      'Flexible schedules',
    ],
    image: '/stock/nest_1.png',
  },
  {
    name: 'Pre School',
    ages: '18 months - 3 years',
    tagColor: 'bg-cyan-100 text-cyan-600',
    accentColor: 'bg-[#00ADEF]',
    icon: Users,
    description:
      'Building confidence and curiosity through language, social skills, and creative exploration in a supportive setting.',
    highlights: [
      'Language development',
      'Social skills building',
      'Art & music',
      'Outdoor exploration',
    ],
    image: '/stock/nest_2.png',
  },
  {
    name: 'Primary',
    ages: '3 - 6 years',
    tagColor: 'bg-amber-100 text-amber-600',
    accentColor: 'bg-amber-500',
    icon: BookOpen,
    description:
      'Preparing young minds for the next chapter with reading, math, science, and essential life skills.',
    highlights: [
      'Reading & math',
      'Science exploration',
      'Life skills',
      'Kindergarten ready',
    ],
    image: '/stock/nest_3.png',
  },
];

const schedule = [
  { time: '7:30 AM', activity: 'Arrive & Free Play', icon: Sun },
  { time: '9:00 AM', activity: 'Learning Time', icon: BookOpen },
  { time: '11:30 AM', activity: 'Outside Play', icon: TreePine },
  { time: '12:00 PM', activity: 'Lunch', icon: Utensils },
  { time: '1:00 PM', activity: 'Rest Time', icon: Moon },
  { time: '3:00 PM', activity: 'Afternoon Fun', icon: Palette },
  { time: '5:30 PM', activity: 'Pickup', icon: Briefcase },
];

const stats = [
  { value: '3', label: 'Programs' },
  { value: '6wk–6yr', label: 'Age Range' },
  { value: '10hrs', label: 'Daily Care' },
  { value: '1:4', label: 'Staff Ratio' },
];

export default function ProgramsPage() {
  return (
    <div className="bg-white">
      {/* Hero – Image blended into background */}
      <section className="relative min-h-[420px] overflow-hidden">
        <Image
          src="/stock/nest_5.png"
          alt="Children learning together"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00ADEF]/95 to-[#00ADEF]/75" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <span className="text-[#FFE066] font-semibold text-lg tracking-wide uppercase">
                What We Offer
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-tight mt-3">
                Programs Built for{' '}
                <span className="text-[#FFE066]">Every Stage</span>
              </h1>
              <p className="mt-5 text-lg text-white/90 leading-relaxed max-w-xl">
                From infants to primary learners, our age-appropriate programs
                nurture curiosity, confidence, and a lifelong love of learning.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-white text-[#00ADEF] hover:bg-white/90 rounded-full px-8 text-base font-semibold"
                  asChild
                >
                  <Link href="/contact">
                    Schedule a Visit <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="rounded-full px-8 text-base font-semibold bg-[#FF6B6B] hover:bg-[#E55555] text-white"
                  asChild
                >
                  <Link href="/admissions">View Admissions</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative z-20 -mt-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center py-6 px-4 text-center"
              >
                <span className="text-2xl font-bold text-[#00ADEF]">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-500 mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs grid */}
      <section className="py-24 bg-[#FFF8F0]">
        <div className="container mx-auto px-4">
          {/* Section header */}
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-[#00ADEF] font-semibold text-lg">
              Our Programs
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Find the Perfect Fit for Your Child
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              Three thoughtfully designed programs that grow with your child,
              each offering a unique blend of care, play, and learning.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program.name}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Age tag */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${program.tagColor} backdrop-blur-sm bg-opacity-90`}
                    >
                      {program.ages}
                    </span>
                  </div>
                  {/* Icon badge */}
                  <div className={`absolute -bottom-5 right-5 w-12 h-12 ${program.accentColor} rounded-xl shadow-lg flex items-center justify-center border border-gray-100`}>
                    <program.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-8">
                  <h3 className="text-xl font-bold text-gray-800">
                    {program.name}
                  </h3>
                  <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                    {program.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-5 space-y-2.5">
                    {program.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2.5 text-sm text-gray-800"
                      >
                        <CheckCircle className="h-4 w-4 text-[#00ADEF] flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 mt-6 text-[#00ADEF] font-semibold text-sm group-hover:gap-2.5 transition-all"
                  >
                    Learn More{' '}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left – heading */}
            <div>
              <span className="text-amber-500 font-semibold text-lg">
                Daily Routine
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                A Structured Day Designed for Growth
              </h2>
              <p className="mt-4 text-gray-500 text-lg leading-relaxed">
                Our consistent daily rhythm helps children feel safe and
                supported while encouraging exploration, learning, and rest at
                the right times.
              </p>
              <Button
                size="lg"
                className="mt-8 bg-[#C4694D] hover:bg-[#A35540] rounded-full px-8"
                asChild
              >
                <Link href="/contact">
                  Book a Tour <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Right – timeline */}
            <div className="space-y-3">
              {schedule.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-[#00ADEF]/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:shadow-md transition-shadow">
                    <item.icon className="h-5 w-5 text-[#00ADEF]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800">
                      {item.activity}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-[#00ADEF] flex-shrink-0">
                    <Clock className="h-3.5 w-3.5" />
                    {item.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="relative h-[420px]">
          <Image
            src="/stock/nest_4.png"
            alt="Join us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#C4694D]/85" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-2xl">
              <span className="text-[#FFE066] font-semibold text-lg">
                Get Started
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Not Sure Which Program Is Right for Your Child?
              </h2>
              <p className="mt-4 text-white/80 text-lg">
                Come visit us — we&apos;d love to show you around and help you
                find the perfect fit.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-[#C4694D] hover:bg-white/90 rounded-full px-8 text-base font-semibold"
                  asChild
                >
                  <Link href="/contact">
                    Schedule a Tour <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-white/15 text-white hover:bg-white/25 border border-white/20 rounded-full px-8 text-base font-semibold"
                  asChild
                >
                  <Link href="/admissions">Admissions Info</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
