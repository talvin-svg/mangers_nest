'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SCHOOL_NAME, SCHOOL_INFO } from '@/constants';
import { Heart, Star, Sparkles, Sun, Users, TrendingUp, HandHeart, CheckCircle, Briefcase, Mail, ClipboardList, Award, Flame, BookOpen, Shield, Smile, ChevronRight } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Supportive Environment',
    description: 'Small class sizes and a caring, close-knit team culture where every teacher is valued and heard.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-500',
    num: '01',
  },
  {
    icon: TrendingUp,
    title: 'Training & Growth',
    description: 'Ongoing professional development, mentorship, and real opportunities to advance your teaching career.',
    color: 'text-amber-500',
    bg: 'bg-amber-500',
    num: '02',
  },
  {
    icon: HandHeart,
    title: 'Meaningful Impact',
    description: 'Shape young lives during their most formative years and make a lasting difference every single day.',
    color: 'text-pink-500',
    bg: 'bg-pink-500',
    num: '03',
  },
  {
    icon: Heart,
    title: 'Community & Family',
    description: 'Be part of a warm, faith-grounded school family that celebrates together and supports one another.',
    color: 'text-purple-500',
    bg: 'bg-purple-500',
    num: '04',
  },
];

const openings = [
  {
    id: 'educator',
    title: 'Early Childhood Educator',
    type: 'Full-Time',
    description: 'Lead a classroom of young learners, delivering engaging lessons rooted in our curriculum. Ideal for qualified teachers passionate about early childhood development.',
    requirements: ['Diploma/Degree in Early Childhood Education', 'Passion for nurturing young minds', 'Aligned with MNIS values of excellence and care'],
  },
  {
    id: 'assistant',
    title: 'Teaching Assistant',
    type: 'Full-Time',
    description: 'Support our lead teachers in creating a safe, stimulating classroom environment. A great entry point for aspiring educators who love working with children.',
    requirements: ['Minimum SHS certificate', 'Experience with young children preferred', 'Warm, patient, and dependable'],
  },
];

export default function CareersPage() {
  return (
    <div>
      {/* Hero — with background image */}
      <section className="relative min-h-[420px] overflow-hidden">
        <Image
          src="/stock/nest_13.png"
          alt="Careers at MNIS"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#C4694D]/95 to-[#C4694D]/75" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <span className="text-[#FFE066] font-semibold text-lg tracking-wide uppercase">Careers at MNIS</span>
              <h1 className="text-5xl sm:text-6xl font-bold mt-3 leading-tight">
                Join Our
                <br />
                Family
              </h1>
              <p className="mt-5 text-xl text-white/85 max-w-lg">
                Build your career at a school that values excellence, faith, and community.
              </p>
              <Button size="lg" className="mt-8 bg-white text-[#00ADEF] hover:bg-white/90 rounded-full px-8 text-lg font-semibold" asChild>
                <a href="#openings">
                  View Open Roles <ChevronRight className="ml-1 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us — Numbered full-width rows */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-10 animate-wiggle opacity-10 hidden lg:block">
          <Sparkles className="h-20 w-20 text-cyan-400" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <span className="text-[#00ADEF] font-semibold text-lg">Benefits</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 flex items-center justify-center gap-3">
              Why Join Us
              <Award className="h-9 w-9 text-[#FFE066]" />
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-0 divide-y divide-gray-100">
            {benefits.map((benefit, i) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className={`flex items-start gap-6 sm:gap-10 py-10 group ${i === 0 ? 'pt-0' : ''} ${i === benefits.length - 1 ? 'pb-0' : ''}`}
                >
                  {/* Large number */}
                  <span className={`text-6xl sm:text-7xl font-black ${benefit.color} opacity-30 group-hover:opacity-60 transition-opacity leading-none select-none flex-shrink-0`}>
                    {benefit.num}
                  </span>
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${benefit.bg} flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform mt-1`}>
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  {/* Text */}
                  <div className="min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{benefit.title}</h3>
                    <p className="mt-2 text-gray-500 leading-relaxed text-lg">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* You Belong Here If... — Bento Grid */}
      <section className="py-20 bg-gradient-to-b from-[#E8F7FC] to-white relative overflow-hidden">
        <div className="absolute bottom-10 right-10 animate-float opacity-10 hidden lg:block">
          <Star className="h-16 w-16 text-amber-400" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-14">
            <span className="text-[#FF6B6B] font-semibold text-lg">Is This You?</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              You Belong Here If...
            </h2>
            <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
              We don&apos;t just hire for qualifications — we look for people whose values match ours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto auto-rows-auto">
            {/* WIDE — passion (spans 2 cols) */}
            <div className="md:col-span-2 bg-gradient-to-br from-[#FF6B6B] to-pink-500 rounded-3xl p-8 text-white shadow-xl hover-grow group relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
              <div className="absolute bottom-4 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Flame className="h-24 w-24" />
              </div>
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Flame className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">You teach with passion</h3>
                <p className="mt-3 text-white/85 text-lg leading-relaxed max-w-md">
                  The classroom lights you up. You don&apos;t just deliver lessons — you create moments that spark curiosity and wonder.
                </p>
              </div>
            </div>

            {/* TALL — integrity (spans 2 rows) */}
            <div className="md:row-span-2 bg-[#00ADEF] rounded-3xl p-8 text-white shadow-xl hover-grow group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Integrity is non-negotiable</h3>
                <p className="mt-3 text-white/85 leading-relaxed">
                  You do the right thing even when no one is watching. Honesty and accountability are part of who you are, not just what you practice.
                </p>
              </div>
              <div className="mt-8 opacity-10 group-hover:opacity-20 transition-opacity self-end">
                <Shield className="h-20 w-20" />
              </div>
            </div>

            {/* SMALL — children first */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-purple-100 hover-grow group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Children come first</h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    Every decision starts with &quot;what&apos;s best for the child.&quot; Safety, dignity, and well-being are your priorities.
                  </p>
                </div>
              </div>
            </div>

            {/* SMALL — never stop learning */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-amber-100 hover-grow group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">You never stop learning</h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    You seek feedback, embrace new methods, and treat every day as a chance to grow.
                  </p>
                </div>
              </div>
            </div>

            {/* SMALL — team over ego */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-green-100 hover-grow group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Team over ego</h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    You collaborate openly and believe strong team culture is what makes a school great.
                  </p>
                </div>
              </div>
            </div>

            {/* WIDE — joy (spans 2 cols) */}
            <div className="md:col-span-2 bg-gradient-to-br from-[#FFE066] to-amber-400 rounded-3xl p-8 shadow-xl hover-grow group relative overflow-hidden">
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-white/15 rounded-full" />
              <div className="absolute top-4 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Smile className="h-20 w-20 text-amber-800" />
              </div>
              <div className="relative flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Smile className="h-7 w-7 text-amber-800" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-amber-900">Joy is your superpower</h3>
                  <p className="mt-2 text-amber-800/80 text-lg leading-relaxed max-w-md">
                    You bring warmth and energy into the room. Children and parents alike feel welcomed and at ease in your presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings — Accordion rows */}
      <section id="openings" className="py-20 bg-[#FFF8F0] relative overflow-hidden scroll-mt-24">
        <div className="absolute top-10 left-10 animate-float opacity-20 hidden md:block">
          <Sparkles className="h-14 w-14 text-cyan-400" />
        </div>
        <div className="absolute bottom-10 right-10 animate-bounce-slow opacity-20 hidden md:block">
          <Star className="h-12 w-12 text-amber-400" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-14">
            <span className="text-[#00ADEF] font-semibold text-lg">Opportunities</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 flex items-center justify-center gap-3">
              Current Openings
              <ClipboardList className="h-9 w-9 text-[#00ADEF]" />
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="multiple" className="space-y-4">
              {openings.map((job) => (
                <AccordionItem
                  key={job.id}
                  value={job.id}
                  className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden px-0 data-[state=open]:shadow-xl transition-shadow"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline group [&>svg]:hidden">
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-12 h-12 rounded-2xl bg-[#00ADEF] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <Briefcase className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-left flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800">{job.title}</h3>
                        <span className="text-sm text-[#FF6B6B] font-semibold">{job.type}</span>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-data-[state=open]:bg-[#00ADEF] transition-colors">
                        <ChevronRight className="h-5 w-5 text-gray-400 group-data-[state=open]:text-white group-data-[state=open]:rotate-90 transition-all" />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <div className="border-t border-gray-100 pt-5 ml-16">
                      <p className="text-gray-600 leading-relaxed">{job.description}</p>
                      <div className="mt-5 space-y-2.5">
                        <p className="text-sm font-semibold text-gray-700">Requirements</p>
                        {job.requirements.map((req, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-sm text-gray-500">
                            <CheckCircle className="h-4 w-4 text-[#00ADEF] flex-shrink-0" />
                            {req}
                          </div>
                        ))}
                      </div>
                      <Button className="mt-6 bg-[#00ADEF] hover:bg-[#0095CC] rounded-full px-6" asChild>
                        <Link href={`mailto:${SCHOOL_INFO.email}?subject=Application: ${job.title}`}>
                          Apply Now <Mail className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA — Gradient with glassmorphism card */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#C4694D] via-[#C4694D] to-[#A85540]">
        {/* Decorative blobs */}
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
              Ready to Make a Difference?
              <Award className="h-10 w-10 text-[#FFE066]" />
            </h2>
            <p className="mt-4 text-white/80 text-xl text-center">
              Send your CV and a brief cover letter to join our team.
            </p>

            {/* Glassmorphism card */}
            <div className="mt-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-5">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <p className="text-white/70 text-sm uppercase tracking-wider font-semibold">Send applications to</p>
              <p className="text-white text-2xl font-bold mt-2">{SCHOOL_INFO.email}</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="bg-white text-[#C4694D] hover:bg-white/90 rounded-full px-8 text-lg font-semibold" asChild>
                  <Link href={`mailto:${SCHOOL_INFO.email}?subject=Job Application`}>
                    <Mail className="mr-2 h-5 w-5" /> Send Application
                  </Link>
                </Button>
                <Button size="lg" className="bg-white/15 text-white hover:bg-white/25 border border-white/20 rounded-full px-8 text-lg" asChild>
                  <Link href="/about">Learn About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
