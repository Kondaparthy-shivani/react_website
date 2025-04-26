import { useState, useEffect } from 'react';
import { Heart, Star, Menu, X, ShoppingCart, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function JewelryWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Product data
  const collections = [
    { 
      id: 1, 
      image: "https://img-cdn.publive.online/fit-in/640x430/filters:format(webp)/smstreet/media/media_files/OqLTwLe3DKOSdZJ7t4eE.jpg", 
      title: "Akshaya Tritiya Special", 
      description: "Exclusive collection for this auspicious occasion", 
      tag: "LIMITED EDITION" 
    },
    { 
      id: 2, 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv-ATYYKxW7_X9GiTptJY3wRr-CBordpZNmA&s", 
      title: "Diamond Elegance", 
      description: "Timeless diamond pieces for your special moments", 
      tag: "PREMIUM" 
    },
    { 
      id: 3, 
      image: "https://ommcomnews.com/wp-content/uploads/2023/02/sidharth-malhotra-and-kiara-advani-wedding.jpg", 
      title: "Wedding Collection", 
      description: "Make your special day more memorable", 
      tag: "TRENDING" 
    },
  ];
  
  const newArrivals = [
    { id: 1, image: "https://choodabazar.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-02-at-15.15.541.jpeg", name: "Diamond Necklace", price: "₹45,999", rating: 4.9 },
    { id: 2, image: "https://www.sasitrends.com/cdn/shop/files/2324D-guaranteed-victorian-temple-bangles-ruby-green-stones-sasitrends-online-shopping_32c67ab8-c297-4fa7-9139-c8cc827e0e83.jpg?v=1731480399&width=1080", name: "Diamond Bangles", price: "₹45,999", rating: 4.9 },
    { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-TTHm5jS8Dpcy4fR3LYGQdw9dRd_dm3Ytfw&s", name: "Pearl Earrings", price: "₹12,999", rating: 4.8 },
    { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmt4imj7J0Hl0kNK1itDPYNA-h5lUzsdvrKg&", name: "Ruby Ring", price: "₹24,500", rating: 4.6 },
  ];
  
  const reviews = [
    { id: 1, name: "Priya Sharma", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRB_-FbCTKUCvheA5LvkXnfKW2N5dyDR5Rnw&s", rating: 5, text: "The craftsmanship is exceptional! I received so many compliments on my wedding jewelry." },
    { id: 2, name: "Rajesh Kumar", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEfTVoY1ugw0YQk5qvsXW5Kbvz1S0M2hgvBA&s", rating: 4, text: "Great quality and designs. My wife loved the anniversary gift I purchased." },
    { id: 3, name: "Anita Desai", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMqgfVfhJV5MqECz_LgQyWAQWXs0aNVwud_Q&s", rating: 5, text: "The diamond necklace I bought is absolutely stunning! Will definitely shop again." },
  ];
  
  const designers = [
    { id: 1, name: "Meena Patel", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7d89v5pNpXsRyiksbvzjaa9XE4s2pFNgUA&s", experience: "15+ years", specialty: "Traditional designs" },
    { id: 2, name: "Vikram Singh", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUwVdmOcxSVNHET4DLeAUT7vfne7gwjYjrzQ&s", experience: "12+ years", specialty: "Contemporary fusion" },
    { id: 3, name: "Leela Reddy", image: "https://cdn.gulte.com/wp-content/uploads/2023/06/sree-leela.jpg", experience: "20+ years", specialty: "Diamond jewelry" },
  ];
  
  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === collections.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [collections.length]);
  
  // Rating stars component
  const RatingStars = ({ rating }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={`${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
          />
        ))}
      </div>
    );
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">SJ</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Shivani Jewellers
            </h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-medium text-amber-700 hover:text-amber-500">Home</a>
            <div className="relative group">
              <button className="font-medium text-gray-700 hover:text-amber-500 flex items-center">
                Categories
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-52 z-50">
                <a href="#" className="block px-4 py-2 hover:bg-amber-50 text-sm">Wedding Collection</a>
                <a href="#" className="block px-4 py-2 hover:bg-amber-50 text-sm">Daily Wear Collection</a>
                <a href="#" className="block px-4 py-2 hover:bg-amber-50 text-sm">Diamond Collection</a>
                <a href="#" className="block px-4 py-2 hover:bg-amber-50 text-sm">Gold Collection</a>
              </div>
            </div>
            <a href="#new-arrivals" className="font-medium text-gray-700 hover:text-amber-500">New Arrivals</a>
            <a href="#reviews" className="font-medium text-gray-700 hover:text-amber-500">Reviews</a>
            <a href="#designers" className="font-medium text-gray-700 hover:text-amber-500">Designers</a>
            <a href="#contact" className="font-medium text-gray-700 hover:text-amber-500">Contact</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-gray-700 hover:text-amber-500">
              <Heart size={24} />
            </button>
            <button className="hidden md:block text-gray-700 hover:text-amber-500">
              <ShoppingCart size={24} />
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-700" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg py-4 px-6">
            <div className="flex flex-col space-y-4">
              <a href="#" className="font-medium text-amber-700">Home</a>
              <details className="group">
                <summary className="font-medium text-gray-700 cursor-pointer">Categories</summary>
                <div className="ml-4 mt-2 flex flex-col space-y-2">
                  <a href="#" className="text-gray-600 hover:text-amber-500">Wedding Collection</a>
                  <a href="#" className="text-gray-600 hover:text-amber-500">Daily Wear Collection</a>
                  <a href="#" className="text-gray-600 hover:text-amber-500">Diamond Collection</a>
                  <a href="#" className="text-gray-600 hover:text-amber-500">Gold Collection</a>
                </div>
              </details>
              <a href="#new-arrivals" className="font-medium text-gray-700">New Arrivals</a>
              <a href="#reviews" className="font-medium text-gray-700">Reviews</a>
              <a href="#designers" className="font-medium text-gray-700">Designers</a>
              <a href="#contact" className="font-medium text-gray-700">Contact</a>
              <div className="flex space-x-4 pt-2">
                <button className="text-gray-700 hover:text-amber-500">
                  <Heart size={24} />
                </button>
                <button className="text-gray-700 hover:text-amber-500">
                  <ShoppingCart size={24} />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Carousel */}
      <div className="relative h-96 md:h-screen max-h-screen overflow-hidden">
        {collections.map((collection, index) => (
          <div 
            key={collection.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full h-full">
              <img 
                src={collection.image} 
                alt={collection.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                <div className="container mx-auto px-6 md:px-12">
                  <div className="max-w-lg">
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-white bg-amber-600 rounded-full">
                      {collection.tag}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                      {collection.title}
                    </h2>
                    <p className="text-lg text-gray-200 mb-6">
                      {collection.description}
                    </p>
                    <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md shadow-lg transform transition hover:-translate-y-1">
                      Explore Collection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Carousel navigation dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
          {collections.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-amber-500" : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
              <img src="https://i.pinimg.com/736x/96/25/34/962534931fa9f99494df038425b0c527.jpg" alt="Wedding Collection" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Wedding Collection</h3>
                  <p className="text-gray-300 mb-4">Exquisite pieces for your special day</p>
                  <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium rounded-md">
                    View Collection
                  </button>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
              <img src="https://www.swashaa.com/cdn/shop/collections/woMen_s_Bracelet_Banner__-min.jpg?v=1739770474&width=1600" alt="Daily Wear Collection" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Daily Wear Collection</h3>
                  <p className="text-gray-300 mb-4">Elegant pieces for everyday elegance</p>
                  <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium rounded-md">
                    View Collection
                  </button>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
              <img src="https://www.vummidi.com/blog/wp-content/uploads/2024/08/Majestic-Emerald-Diamond-Set.jpg" alt="Diamond Collection" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Diamond Collection</h3>
                  <p className="text-gray-300 mb-4">Timeless diamond jewelry for all occasions</p>
                  <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium rounded-md">
                    View Collection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* New Arrivals */}
      <section id="new-arrivals" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">New Arrivals</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discover our latest designs crafted with exquisite craftsmanship and attention to detail
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative">
                  <img src={item.image} alt={item.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart size={18} className="text-amber-500" />
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <RatingStars rating={item.rating} />
                    <span className="text-sm text-gray-600 ml-2">{item.rating}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">{item.price}</p>
                  <button className="w-full py-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <button className="px-6 py-3 border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white font-medium rounded-md transition-colors">
              View All New Arrivals
            </button>
          </div>
        </div>
      </section>
      
      {/* Special Promotion */}
      <section className="py-12 bg-amber-500">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Akshaya Tritiya Special Offer</h2>
            <p className="text-white text-opacity-90">Get up to 25% off on selected gold jewelry items</p>
          </div>
          <button className="px-6 py-3 bg-white text-amber-600 font-medium rounded-md shadow-lg hover:shadow-xl transition-shadow">
            Shop Now
          </button>
        </div>
      </section>
      
      {/* Customer Reviews */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map(review => (
              <div key={review.id} className="bg-gray-50 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <RatingStars rating={review.rating} />
                  </div>
                </div>
                <p className="text-gray-600 italic">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Meet Our Designers */}
      <section id="designers" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Meet Our Master Craftsmen</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            With decades of experience, our designers create unique pieces that blend tradition with contemporary aesthetics
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designers.map(designer => (
              <div key={designer.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src={designer.image} alt={designer.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{designer.name}</h3>
                  <p className="text-amber-600 font-medium mb-2">{designer.experience} of Experience</p>
                  <p className="text-gray-600">Specializes in {designer.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Stay Updated</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Subscribe to our newsletter to receive updates on new collections and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 rounded-l sm:flex-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 mb-2 sm:mb-0"
            />
            <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-r sm:rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-10 w-10 bg-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SJ</span>
                </div>
                <h3 className="text-xl font-bold text-white">Shivani Jewellers</h3>
              </div>
              <p className="mb-4">
                Crafting exquisite jewelry since 1985. Our pieces blend traditional craftsmanship with contemporary designs.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-amber-500">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-500">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-500">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Collections</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Collections</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Wedding Collection</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Daily Wear Collection</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Diamond Collection</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Gold Collection</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Special Occasions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin size={20} className="mr-2 mt-1 text-amber-500" />
                  <span>123 Jewelry Lane, Diamond District, Mumbai, 400001</span>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="mr-2 text-amber-500" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="mr-2 text-amber-500" />
                  <span>info@ratnajewellers.com</span>
                </li>
              </ul>
              <div className="mt-4">
                <p className="mb-2">Store Hours:</p>
                <p>Monday - Saturday: 10AM - 8PM</p>
                <p>Sunday: 11AM - 6PM</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center text-gray-500">
            <p>© 2025 Shivani Jewellers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}