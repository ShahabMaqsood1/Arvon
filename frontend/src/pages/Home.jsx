import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Star, Award, Shield } from 'lucide-react';
import { heroSlides, categories } from '../data/mock';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Slider - Premium */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.images[0]}
                alt={slide.name}
                className="w-full h-full object-cover scale-110 animate-slow-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-3xl animate-fadeIn">
            <div className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full mb-6">
              <span className="text-accent text-sm font-semibold tracking-wider">FEATURED COLLECTION</span>
            </div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              {heroSlides[currentSlide].name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
              {heroSlides[currentSlide].description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="group px-8 py-4 bg-gradient-to-r from-primary via-primary-light to-primary text-white font-semibold rounded-full hover:shadow-premium-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center"
              >
                Explore Collection
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
        >
          <ChevronRight size={28} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide 
                  ? 'w-12 h-2 bg-accent' 
                  : 'w-2 h-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gradient-to-r from-primary via-primary-light to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Award size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold">5+ Years</h3>
              <p className="text-sm text-white/80">Industry Excellence</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Shield size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold">100K+</h3>
              <p className="text-sm text-white/80">Products Delivered</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Star size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold">98%</h3>
              <p className="text-sm text-white/80">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Welcome to ARVON</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6">
              Where Quality Meets
              <span className="block bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                Craftsmanship
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Premium apparel manufacturing solutions for brands, teams, and organizations. 
              We bring your vision to life with precision, quality, and unmatched expertise.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white hover:shadow-premium transform hover:-translate-y-1 transition-all duration-300"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section - Premium */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Collections</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mt-4">
              Product Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="group relative h-[500px] rounded-3xl overflow-hidden shadow-xl hover:shadow-premium-lg transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                </div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform group-hover:translate-y-0 translate-y-4 transition-transform duration-500">
                    <span className="inline-block px-4 py-1 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full text-accent text-xs font-semibold mb-4">
                      EXPLORE
                    </span>
                    <h3 className="font-display text-3xl font-bold text-white mb-3">
                      {category.name}
                    </h3>
                    <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {category.description}
                    </p>
                    <div className="flex items-center text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <span className="font-semibold">View Collection</span>
                      <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                    </div>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-dark to-primary">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Partner with ARVON for premium apparel manufacturing. Let's bring your vision to life with exceptional quality and craftsmanship.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group px-10 py-5 bg-white text-primary font-bold rounded-full hover:bg-accent hover:text-white hover:shadow-gold transform hover:-translate-y-1 transition-all duration-300 flex items-center"
            >
              Start Your Project
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={22} />
            </Link>
            <Link
              to="/products"
              className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
