import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowRight, Leaf,Wheat, Phone, MessageCircle, MapPin, Droplets, Sun, Heart, ShieldCheck, Sprout,ChefHat, Wind, Award, Eye, Users } from 'lucide-react';
import { Button } from '../components/ui/button';

import { FadeIn } from '../components/ui/fade-in';
import { cn } from '../../lib/utils';
import murrelFishImage from "../../assets/fish.png";
import heroImage from "../../assets/haritha-home_main.png";
import handsImage from "../../assets/hands-new.jpg";
import sheepImage from "../../assets/sheap-new.png";
import henImage from "../../assets/hen-new.jpg";
import harithaFarmImage from "../../assets/haritha-farm-image-1.png";


// --- Components ---

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-secondary origin-left z-50"
      style={{ scaleX }}
    />
  );
}

function SectionHeading({ children, color = "text-primary" }: { children: React.ReactNode, color?: string }) {
  return (
    <h2 className={cn("text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1]", color)}>
      {children}
    </h2>
  );
}

import { CTASection } from '../components/ui/CTASection';

export default function Home() {
  return (
    <div className="bg-background relative">
      <ScrollProgress />

      {/* --- HERO SECTION --- */}
      {/* add top padding so content isn't hidden under fixed header */}
      <section className="relative min-h-[115vh] md:h-[95vh] w-full  overflow-hidden flex items-end pt-30 md:pt-34 pb-12 md:pb-24 px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1610] via-[#0F1C15]/60 to-transparent z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={heroImage} 
            alt="Haritha Farms Aerial" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto relative z-20">
        <div className="relative z-20 h-full container mx-auto flex flex-col justify-end pb-0 md:px-8">
         
         <FadeIn delay={0.2} direction="up">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="h-[1px] w-8 md:w-12 bg-white/60" />
                <span className="text-white/80 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                  • Organic Farming
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[0.9] text-white mb-8 md:mb-10 max-w-5xl">
                <span className="block text-white font-bold text-[64px] sm:text-[72px] md:text-[80px]">
                  Naturally Raised.
                </span>
                <span className="block not-italic text-white/90 font-light text-2xl sm:text-3xl md:text-[48px] lg:text-[56px]">
                  Ethically Grown.
                </span>
                <span className="block not-italic text-[#C7A74C] font-light text-2xl sm:text-3xl md:text-[48px] lg:text-[50px] font-['Playwrite_AT']">
                  Truly Clean Farming
                </span>
              </h1>
            </FadeIn>
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-12 w-full border-t border-white/20 pt-8 md:pt-10 mt-4">
            <FadeIn delay={0.4} direction="up">
              <p className="text-base md:text-xl font-light tracking-wide text-white/80 max-w-xl leading-relaxed">
              We raise sheep & lamb, country chicken (Natu Kodi), and murrel fish the right way—organic, pesticide‑free fodder, hormone‑free rearing, and natural, stress‑free environments for healthier livestock and honest flavour.
              </p>

               <p className="text-13  pt-4 tracking-[0.2em] text-[#C7A74C] ">
                Clean fields → Clean feed → Healthier livestock for Indian families.
              </p>
              
            </FadeIn>

            <FadeIn delay={0.6} direction="up">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button asChild size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-secondary hover:text-white border-0 rounded-none px-8 md:px-10 py-6 md:py-7 text-xs tracking-[0.15em] transition-all duration-300 font-bold justify-center">
                  <Link to="/farms">EXPLORE FARMS</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary rounded-none px-8 md:px-10 py-6 md:py-7 text-xs tracking-[0.15em] bg-transparent backdrop-blur-sm font-bold justify-center">
                  <Link to="/practices">OUR PRACTICES</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
        </div>
      </section>
      {/* --- HERO FEATURE BOXES --- */}
<div className="relative -mt-20 z-30 pt-5">
  <div className="grid grid-cols-1 md:grid-cols-4 border-t border-white/10">

    <div className="flex flex-col items-center justify-center py-10 bg-[#021A14] border-r border-white/10">
      <ShieldCheck className="text-[#C7A74C] mb-4" size={28} strokeWidth={1.5} />
      <p className="text-xs tracking-[0.2em] text-white/70 uppercase text-center">
        Hormone-Free Rearing
      </p>
    </div>

    <div className="flex flex-col items-center justify-center py-10 bg-[#021A14] border-r border-white/10">
      <Sprout className="text-[#C7A74C] mb-4" size={28} strokeWidth={1.5} />
      <p className="text-xs tracking-[0.2em] text-white/70 uppercase text-center">
        Organic, Pesticide-Free Fodder
      </p>
    </div>

    <div className="flex flex-col items-center justify-center py-10 bg-[#021A14] border-r border-white/10">
      <Heart className="text-[#C7A74C] mb-4" size={28} strokeWidth={1.5} />
      <p className="text-xs tracking-[0.2em] text-white/70 uppercase text-center">
        Ethical, Humane Care
      </p>
    </div>

    <div className="flex flex-col items-center justify-center py-10 bg-[#021A14]">
      <Leaf className="text-[#C7A74C] mb-4" size={28} strokeWidth={1.5} />
      <p className="text-xs tracking-[0.2em] text-white/70 uppercase text-center">
        Natural, Stress-Free Growth
      </p>
    </div>

  </div>
</div>

      {/* --- STANDARDS (The Triptych - Elastic Accordion) --- */}
      <section className="bg-[#1C1C1C] text-[#F2F0E9] overflow-hidden flex flex-col min-h-screen md:h-screen md:max-h-[1080px]">
         {/* Minimal Header - Compact height */}
         <div className="container mx-auto px-[24px] py-8 md:py-12 shrink-0">
            <FadeIn>
               <div className="flex items-center gap-6 mb-4">
                  <div className="h-px w-16 bg-[#C5A059]" />
                  <span className="text-[#C5A059] text-xs font-bold tracking-[0.3em] uppercase">
                         What We Raise</span>
               </div>
               <h2 className="text-3xl md:text-5xl font-serif max-w-2xl leading-none text-[rgb(187,241,228)]">
                 Honest livestock, raised right.<br/>
                  <span className="text-[#F2F0E9]/40 text-[rgba(242,242,242,0.4)]">No hormones. No shortcuts.</span>
               </h2>
            </FadeIn>
         </div>

         {/* Elastic Gallery - Fills remaining space */}
         <div className="flex flex-col md:flex-row flex-1 w-full border-t border-[#F2F0E9]/5 min-h-0">
            {[
               { 
                 title: "Murrel Fish", 
                 subtitle: "Snakehead / Jungle Fish",
                 desc: "Raised in nature‑balanced ponds with clean water and careful stewardship—no hormones, no antibiotics—for firm, clean fish that thrive naturally.",
                 img: "https://images.unsplash.com/photo-1680769237516-49845493c077?q=80&w=1200&auto=format&fit=crop",
                 icon: ShieldCheck
               },
               { 
                 title: "Country Chicken", 
                 subtitle: "Natu Kodi",
                 desc: "Free‑range desi chicken that forages, moves, and grows at its own pace. Hormone‑free, nourished on organic greens & grains for authentic flavour and strong natural immunity.",
                 img: "https://images.unsplash.com/photo-1747556060621-d066e0b2fbba?q=80&w=1200&auto=format&fit=crop",
                 icon: Wind
               },
               { 
                 title: "Sheep & Lamb", 
                 subtitle: "Pasture‑Raised",
                 desc: "Pasture‑raised on our organic fodder with open movement and gentle handling. Natural growth, better resilience, and clean, layered characteristics families love.",
                 img: "https://images.unsplash.com/photo-1756047890348-e3a5f8e9d9d0?q=80&w=1200&auto=format&fit=crop",
                 icon: Sprout
               },
               
            ].map((item, i) => (
               <div 
                  key={i} 
                  className="group relative flex-1 min-h-[300px] md:min-h-full border-b md:border-b-0 md:border-r border-[#F2F0E9]/10 hover:flex-[1.5] lg:hover:flex-[2] transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden bg-[#242424]"
               >
                  {/* Background Layer */}
                  <div className="absolute inset-0 z-0">
                     <img 
                       src={item.img} 
                       alt={item.title} 
                       className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/70 to-transparent" />
                  </div>
                  
                  {/* Content Container */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10 lg:p-12">
                     {/* Static Header (Always Visible) */}
                     <div className="mb-auto flex justify-between items-start w-full transform md:-translate-y-4 md:group-hover:translate-y-0 transition-transform duration-700">
                        
                        <item.icon className="text-[#C5A059] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0" size={28} />
                     </div>
                     
                     {/* Animated Content */}
                     <div className="max-w-xl">
                        <span className="text-[#C5A059] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-2 block opacity-100 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-700 delay-100">
                           {item.subtitle}
                        </span>
                        <h3 className="text-2xl md:text-4xl font-serif text-[#F2F0E9] mb-4 group-hover:text-white transition-colors duration-300">
                           {item.title}
                        </h3>
                        <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                           <div className="overflow-hidden">
                              <p className="text-[#F2F0E9]/70 font-light leading-relaxed text-sm md:text-base border-l border-[#C5A059] pl-4 mb-2 line-clamp-none md:line-clamp-none">
                                 {item.desc}
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>

      
      {/* --- WHY HARITHA (New Section) --- */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="container mx-auto">
         <FadeIn>
  <div className="mb-12 md:mb-20 max-w-3xl">

    {/* Top Label */}
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-[1px] bg-primary/40"></div>
      <span className="text-xs tracking-[0.25em] uppercase text-primary/70">
        The Difference
      </span>
    </div>

    <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6">
      Why Haritha Farms
    </h2>

    <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
      Beyond organic labels, we build trust through practice. Here is what sets us apart.
    </p>

  </div>
</FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-16">
             {[
               {
                 title: "Premium Native Breeds",
                 desc: "We focus exclusively on indigenous breeds that are naturally adapted to our climate, ensuring disease resistance without antibiotics.",
                 icon: Wheat
               },
               {
                 title: "Hormone‑Free. No Shortcuts.",
                 desc: "We never use hormones or artificial growth promoters. Rearing follows nature's rhythm for healthier animals and honest characteristics.",
                 icon: ShieldCheck
               },
               {
                 title: "Taste India Prefers",
                 desc: "Livestock raised on clean feed develop true desi flavour and consistency Indian homes and chefs expect—from everyday curries to festive menus.",
                 icon: ChefHat
               },
              
             ].map((item, index) => (
               <FadeIn key={index} delay={index * 0.1}>
                 <div className="group flex flex-col h-full">
                   <div className="w-16 h-16 mb-6 rounded-2xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                      <item.icon strokeWidth={1.5} size={28} />
                    </div>
                    <h3 className="text-2xl font-serif text-primary mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-8 flex-grow font-light">
                      {item.desc}
                    </p>
                   
                 </div>
               </FadeIn>
             ))}
          </div>
        </div>
      </section>


      {/* --- PHILOSOPHY (Editorial Text) --- */}
      <section className="py-20 md:py-48 px-6 bg-[#F5F5F0] overflow-hidden">
        <div className="container mx-auto">
           <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
              
              {/* Editorial Image */}
              <div className="w-full lg:w-5/12 relative group">
                 <FadeIn delay={0.2}>
                   <div className="relative aspect-[3/4] overflow-hidden bg-[#E6E2D6]">
                      <motion.img 
                        initial={{ scale: 1.2 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        src={handsImage}
                        alt="Hands holding soil" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-[#0A1610]/10 mix-blend-multiply" />
                   </div>
                   {/* Decorative Border Offset */}
                   <div className="absolute -top-6 -right-6 w-full h-full border border-[#1C1C1C]/10 z-[-1] transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2" />
                 </FadeIn>
              </div>

              {/* Editorial Content */}
              <div className="w-full lg:w-7/12">
                 <FadeIn>
                   <div className="flex items-center gap-4 mb-6 md:mb-8">
                      <div className="h-px w-12 bg-[#0A1610]/30" />
                      <span className="text-[#0A1610] text-xs font-bold tracking-[0.2em] uppercase">Our Practices</span>
                   </div>
                   
                   <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif text-[#1C1C1C] leading-[0.9] mb-8 md:mb-10 -ml-1">
                      Clean Fields., <br/>
                      <span className="italic text-[#0A1610]/80">Clean Feed.</span>
                   </h2>

                   <p className="text-lg md:text-2xl text-[#1C1C1C]/70 font-light leading-relaxed mb-10 md:mb-12 max-w-2xl">
                   Our fields stay synthetic‑free, our ponds stay balanced, and our livestock are reared with patience and respect. It's a system designed for steady health, better immunity, and traceable purity—without processing, without shortcuts.
                   </p>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 border-t border-[#1C1C1C]/10 pt-8 md:pt-10">
                      <div className="group">
                         <h4 className="text-3xl font-serif text-[#1C1C1C] mb-2 group-hover:text-[#0A1610] transition-colors">0%</h4>
                         <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#1C1C1C]/50 mb-2 block">Chemicals & Pesticides</span>
                         <p className="text-sm text-[#1C1C1C]/60 leading-relaxed max-w-[200px]">Complete rejection of synthetic fertilizers, GM seed, and treated inputs.</p>
                      </div>
                      <div className="group">
                         <h4 className="text-3xl font-serif text-[#1C1C1C] mb-2 group-hover:text-[#0A1610] transition-colors">100%</h4>
                         <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#1C1C1C]/50 mb-2 block">Traceable Purity</span>
                         <p className="text-sm text-[#1C1C1C]/60 leading-relaxed max-w-[200px]">Open gates policy. See how your food is raised—soil to table.</p>
                      </div>
                   </div>
                   <div className="mt-10 md:mt-14">
  <button className="bg-[#1F4035] text-white uppercase tracking-[0.2em] text-xs font-bold px-8 py-5 flex items-center gap-4 hover:bg-[#17342b] transition-colors">
    See Our Practices & Organic Feed
    <span className="text-lg">→</span>
  </button>
</div>
                 </FadeIn>
              </div>
           </div>
        </div>
        
      </section>



      {/* --- THE FARMS (Sticky Scroll Layout) --- */}
      <section className="bg-[#E6E2D6] px-6 py-20 md:py-32">
         <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
               {/* Sticky Left Content */}
               <div className="lg:w-1/3">
                  <div className="relative lg:sticky lg:top-32">
                     <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">The Collection</span>
                     <SectionHeading>Our Farms</SectionHeading>
                     <p className="mt-6 md:mt-8 text-primary/70 text-lg font-light leading-relaxed mb-8 md:mb-12">
                        Three distinct environments, one unified approach to ethical farming. Explore our specialized divisions.
                     </p>
                     <Button asChild className="rounded-full h-14 md:h-16 px-8 md:px-10 bg-primary text-white hover:bg-secondary text-xs uppercase tracking-widest transition-all w-full md:w-auto">
                        <Link to="/farms">View Full Catalog</Link>
                     </Button>
                  </div>
               </div>

               {/* Scrolling Right Content */}
               <div className="lg:w-2/3 flex flex-col gap-16 md:gap-24 lg:gap-40 pt-0 md:pt-12 lg:pt-0">
                  <FarmCard 
                     number="01"
                     title="Sheep & Lamb"
                     subtitle="Pasture‑Raised on Organic Fodder"
                     desc="Pasture‑raised on our organic fodder with open movement and gentle handling. Natural growth, better resilience, and clean, layered characteristics families love."
                     img={sheepImage}
                     link="/farms/sheep"
                  />
                  <FarmCard 
                     number="02"
                     title="Country Chicken"
                     subtitle="Free‑Range Natu Kodi"
                     desc="Free‑range desi chicken that forages, moves, and grows at its own pace. Hormone‑free, nourished on organic greens & grains for authentic flavour and strong natural immunity."
                     img={henImage}
                     link="/farms/hen"
                  />
                  <FarmCard 
                     number="03"
                     title="Murrel Fish"
                     subtitle="Nature‑Balanced Aquaculture"
                     desc="Raised in nature‑balanced ponds with clean water and careful stewardship—no hormones, no antibiotics—for firm, clean fish that thrive naturally."
                     img={murrelFishImage}
                     link="/farms/fish"
                  />
               </div>
            </div>
         </div>
      </section>

       <section className="relative bg-[#081c17] text-white py-24 px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#C7A74C]" />
            <span className="text-[#C7A74C] text-xs tracking-[0.3em] uppercase">
              Get In Touch
            </span>
          </div>

          <h2 className="font-serif text-5xl text-white md:text-6xl leading-tight mb-6">
            Bulk Enquiries <br />
            <span className="italic text-white/70">& Farm Visits</span>
          </h2>

          <p className="text-white/70 text-lg leading-relaxed max-w-xl mb-10">
            We welcome bulk enquiries for livestock (sheep, lamb, country
            chicken, murrel) and farm-level partnerships, as well as scheduled
            farm visits to understand our feed and rearing programs.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-[#C7A74C] text-black px-8 py-6 rounded-none tracking-widest text-xs uppercase hover:bg-[#b8963f]">
              Schedule a Farm Visit
            </Button>

            <Button
              variant="outline"
              className="bg-[#081c17] border-white/40 text-white px-8 py-6 rounded-none tracking-widest text-xs uppercase hover:bg-white hover:text-black"
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE CONTACT CARDS */}
        <div className="flex flex-col gap-6">

          {/* PHONE */}
          <div className="flex items-center gap-6 bg-[#0f2a24] p-8 border border-white/5">
            <div className="w-14 h-14 rounded-full border border-[#C7A74C]/40 flex items-center justify-center text-[#C7A74C]">
              <Phone size={22} />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C7A74C] mb-1">
                Phone
              </p>
              <p className="text-lg text-white/90 font-medium">
                +91 9632791544
              </p>
            </div>
          </div>

          {/* WHATSAPP */}
          <div className="flex items-center gap-6 bg-[#0f2a24] p-8 border border-white/5">
            <div className="w-14 h-14 rounded-full border border-[#C7A74C]/40 flex items-center justify-center text-[#C7A74C]">
              <MessageCircle size={22} />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C7A74C] mb-1">
                WhatsApp
              </p>
              <p className="text-lg text-white/90 font-medium">
                +91 9632791544
              </p>
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex items-start gap-6 bg-[#0f2a24] p-8 border border-white/5">
            <div className="w-14 h-14 rounded-full border border-[#C7A74C]/40 flex items-center justify-center text-[#C7A74C]">
              <MapPin size={22} />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C7A74C] mb-1">
                Farm Location
              </p>
              <p className="text-white/80 leading-relaxed">
                SY 199/C, 207/E2/1, Julakal, Waddepalle Mandal, Jogulamba
                Gadwal District, Telangana — 509 126
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

      {/* --- CTA --- */}
      <CTASection 
        title='"Clean Farming. Honest Rearing. Ethical Growth."'
        description="A better way to raise livestock. A better way to nourish the future."
        primaryAction={{ text: "Read Our Story", link: "/about" }}
        secondaryAction={{ text: "Explore Farms", link: "/farms" }}
        backgroundImage={harithaFarmImage}
      />
    </div>
  );
}


function FarmCard({ number, title, subtitle, desc, img, link }: any) {
   return (
      <div className="group">
         <div className="relative aspect-[16/10] overflow-hidden mb-8 rounded-sm">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
            <img 
               src={img} 
               alt={title} 
               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
         </div>
         <div className="flex items-baseline gap-4 mb-4">
            
            <h3 className="text-4xl font-serif text-primary">{title}</h3>
         </div>
         <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 border-t border-primary/10 pt-6">
            <div className="max-w-md">
               <span className="text-xs font-bold uppercase tracking-wider text-primary/50 block mb-2">{subtitle}</span>
               <p className="text-muted-foreground font-light leading-relaxed">{desc}</p>
            </div>
            <Link to={link} className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-all">
               <ArrowRight size={18} />
            </Link>
         </div>
      </div>
   )
}