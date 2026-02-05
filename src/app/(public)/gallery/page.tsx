import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Play, Sun, Star, Sparkles, Heart } from 'lucide-react';

const galleryImages = [
  { src: '/stock/nest_1.png.JPG', title: 'Learning Together', category: 'Classroom', tall: true },
  { src: '/stock/nest_2.png.JPG', title: 'Creative Activities', category: 'Art', tall: false },
  { src: '/stock/nest_3.png.JPG', title: 'Growing Minds', category: 'Activities', tall: false },
  { src: '/stock/nest_4.png.JPG', title: 'Happy Moments', category: 'Events', tall: true },
  { src: '/stock/nest_5.png.JPG', title: 'Our Community', category: 'School Life', tall: false },
  { src: '/stock/MNIS_Banner.png', title: 'Welcome to MNIS', category: 'Campus', tall: false },
];

export default function GalleryPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[400px] overflow-hidden">
        <Image
          src="/stock/nest_3.png.JPG"
          alt="Gallery"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B]/90 to-[#FF6B6B]/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <span className="text-[#FFE066] font-semibold text-lg">Photo Gallery</span>
              <h1 className="text-4xl sm:text-5xl font-bold mt-2">
                Take a Peek
              </h1>
              <p className="mt-4 text-xl text-white/90">
                See what makes our school special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Tour CTA */}
      <section className="py-8 bg-[#00ADEF]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-white">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                <Play className="h-7 w-7" />
              </div>
              <span className="font-semibold text-lg">Watch our virtual tour!</span>
            </div>
            <Button size="lg" className="bg-white text-[#00ADEF] hover:bg-gray-100 rounded-full px-8">
              Play Video
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-[#FFF8F0] relative overflow-hidden">
        <div className="absolute top-10 right-10 animate-float opacity-20 hidden md:block">
          <Sun className="h-16 w-16 text-amber-400" />
        </div>
        <div className="absolute bottom-20 left-10 animate-bounce-slow opacity-20 hidden md:block">
          <Star className="h-12 w-12 text-pink-400" />
        </div>
        <div className="absolute top-1/2 left-10 animate-wiggle opacity-10 hidden lg:block">
          <Heart className="h-14 w-14 text-pink-400" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <span className="text-[#00ADEF] font-semibold text-lg">Our Moments</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              Life at MNIS
            </h2>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid overflow-hidden cursor-pointer group rounded-3xl shadow-xl border-0 relative"
              >
                <div className={`relative ${img.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                    <span className="text-sm text-[#FFE066] font-medium">{img.category}</span>
                    <h3 className="font-bold text-lg">{img.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Photos Coming */}
      <section className="py-12 bg-[#FFE066]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-800 font-medium text-lg">
            <Camera className="inline h-6 w-6 mr-2" />
            More photos coming soon as we grow! Stay tuned.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="/stock/nest_5.png.JPG"
          alt="Visit us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#00ADEF]/85" />
        <div className="absolute top-10 left-10 animate-float opacity-30 hidden md:block">
          <Sparkles className="h-12 w-12 text-white" />
        </div>
        <div className="absolute bottom-10 right-10 animate-bounce-slow opacity-30 hidden md:block">
          <Star className="h-10 w-10 text-white" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-white">
              Want to See More?
            </h2>
            <p className="mt-4 text-white/90 text-xl">
              Nothing beats visiting in person!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#00ADEF] hover:bg-gray-100 rounded-full px-8 text-lg" asChild>
                <Link href="/contact">Book a Tour</Link>
              </Button>
              <Button size="lg" className="bg-[#FF6B6B] hover:bg-[#E55555] rounded-full px-8 text-lg" asChild>
                <Link href="/programs">See Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
