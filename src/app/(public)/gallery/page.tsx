import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Play, Star, Heart, Sun, Sparkles } from 'lucide-react';

const categories = [
  { title: 'Classrooms', emoji: '🏫', count: 4 },
  { title: 'Playground', emoji: '🌳', count: 4 },
  { title: 'Art Time', emoji: '🎨', count: 4 },
  { title: 'Events', emoji: '🎉', count: 4 },
];

export default function GalleryPage() {
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
        <div className="absolute bottom-16 right-32 animate-float hidden lg:block">
          <Camera className="h-10 w-10 text-purple-300" />
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl font-bold text-gray-800">
            Take a Peek! <span className="inline-block animate-wiggle">📸</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            See what makes our school special.
          </p>
        </div>
      </section>

      {/* Video Tour CTA */}
      <section className="py-6 bg-[#4F7942]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-white">
              <Play className="h-8 w-8 animate-bounce-slow" />
              <span className="font-medium">Watch our virtual tour!</span>
            </div>
            <Button variant="secondary" className="hover-grow">
              Play Video 🎬
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {categories.map((cat, catIndex) => (
              <div key={cat.title}>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {cat.title} <span className="inline-block">{cat.emoji}</span>
                </h2>
                <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
                  {[...Array(cat.count)].map((_, i) => (
                    <Card
                      key={i}
                      className="overflow-hidden hover-grow cursor-pointer group"
                    >
                      <CardContent className="p-0">
                        <div className="aspect-square bg-gradient-to-br from-amber-100 via-orange-50 to-pink-100 flex items-center justify-center relative">
                          <Camera className="h-12 w-12 text-gray-300 group-hover:scale-110 transition-transform" />
                          <div className="absolute inset-0 bg-[#4F7942]/0 group-hover:bg-[#4F7942]/10 transition-colors" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-6 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            <Camera className="inline h-4 w-4 mr-1" />
            Add your photos here to bring the gallery to life!
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
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to See More? <span className="inline-block animate-bounce-slow">👀</span>
          </h2>
          <p className="text-white/90 mb-8">
            Nothing beats visiting in person!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
