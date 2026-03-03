import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Twitter, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import logo from "../../assets/logo.png";
import footerBg from "../../assets/Footer-background-logo.png";
import { FarmAnimation } from './footer/FarmAnimation';
import { Button } from './ui/button';
import { Input } from './ui/input';


export function Footer() {
  return (
    <footer className="relative bg-[rgb(26,60,52)] pt-20 overflow-hidden flex flex-col justify-between min-h-[600px]">
      
      {/* --- Top Section: Logos & Main Content --- */}
      <div className="relative z-20 container mx-auto px-6 mb-12">
        
        {/* Header Row: Logo & Certification */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <Link to="/" className="inline-block">
             <img src={logo} alt="Haritha Farms" className="h-24 w-auto brightness-0 invert opacity-90" />
             <span className="block text-xs uppercase tracking-[0.3em] text-accent mt-2 font-medium">Ethical Farming</span>
          </Link>
          
          <div className="flex items-center gap-4">
            {/* Placeholder for FSSAI/Certifications - Styled similarly to the reference */}
            <div className="text-right">
              <span className="block text-2xl font-serif italic text-white/90">Certified</span>
              <span className="block text-[10px] uppercase tracking-widest text-white/60">Organic & Ethical</span>
            </div>
            <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center text-white/80">
               <span className="text-xs font-bold">100%</span>
            </div>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 text-white/80">
          
          {/* Column 1: Company Info */}
          <div className="space-y-4">
             <h4 className="font-bold text-white mb-2">Haritha Technologies Pvt Ltd</h4>
             <p className="text-xs leading-relaxed opacity-70 max-w-[200px]">
               CIN: U74999KA2024PTC123456
             </p>
             <div className="text-xs leading-relaxed opacity-70 max-w-[240px]">
               <p className="font-medium mb-1">Registered Office:</p>
               <p>SY 199/C,207/E2/1
Julakal, Waddepalle Mandal,
Jogulamba Gadwal District,
                 
                 
                 Telangana,        

                 
        
    PIN Code: 509126.
</p>
             </div>
          </div>

          {/* Column 2: Main Menu */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/farms" className="hover:text-accent transition-colors">Our Farms</Link></li>
              <li><Link to="/feed" className="hover:text-accent transition-colors">Feed Supply</Link></li>
              <li><Link to="/practices" className="hover:text-accent transition-colors">Why Choose Haritha?</Link></li>
              <li><Link to="/transparency" className="hover:text-accent transition-colors">Lab Reports & Transparency</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/shipping" className="hover:text-accent transition-colors">Shipping Policy</Link></li>
              <li><Link to="/refund" className="hover:text-accent transition-colors">Refund Policy</Link></li>
              <li><a href="sitemap.xml" className="hover:text-accent transition-colors">Sitemap</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Contact Us :</h4>
            <div className="space-y-4 text-sm">
              <div className="flex flex-col gap-1">
                 <span className="text-xs uppercase tracking-widest opacity-50">Phone</span>
                 <a href="tel:+919876543210" className="hover:text-accent font-medium">+91 98765 43210</a>
              </div>
              <div className="flex flex-col gap-1">
                 <span className="text-xs uppercase tracking-widest opacity-50">Email</span>
                 <a href="mailto:hello@harithafarms.com" className="hover:text-accent font-medium decoration-1 underline underline-offset-4">hello@harithafarms.com</a>
              </div>
              
              <div className="flex gap-4 mt-4">
                <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
                <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-accent transition-colors"><Youtube size={20} /></a>
                <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* --- Middle Floating Section: Newsletter --- */}
      <div className="relative z-30 container mx-auto px-6 flex justify-center mb-[-20px] md:mb-[-30px] pointer-events-auto">
         <div className="bg-white rounded-full p-2 pl-6 shadow-2xl flex items-center w-full max-w-md transform hover:-translate-y-1 transition-transform duration-300">
           <Input 
             type="email" 
             placeholder="Enter your email" 
             className="border-none shadow-none focus-visible:ring-0 bg-transparent text-primary placeholder:text-muted-foreground/60 h-10 text-base"
           />
           <Button className="rounded-full w-10 h-10 p-0 shrink-0 bg-secondary hover:bg-secondary/90 text-primary-foreground">
             <ArrowRight size={18} />
           </Button>
         </div>
      </div>

      {/* --- Bottom Section: Animation & Copyright --- */}
      <div className="relative w-full mt-auto">
        {/* The Animated Landscape */}
        <div className="relative h-48 md:h-80 w-full overflow-hidden">
           <FarmAnimation />
        </div>

        {/* Copyright Bar (Overlaying the bottom of the animation) */}
        <div className="absolute bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-primary/0 to-primary/0 pt-12 pb-4">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-white/40 uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()}, Haritha Farms. Powered by Nature.</p>
            
            {/* Loyalty / Promo Link */}
            
          </div>
        </div>
      </div>

    </footer>
  );
}
