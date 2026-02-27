import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowRight, Leaf, Droplets, Sun, Heart, ShieldCheck, Sprout, Wind, Award, Eye, Users } from 'lucide-react';
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
      <section className="relative min-h-[90vh] md:h-[95vh] w-full overflow-hidden flex items-end pt-38 md:pt-40 pb-12 md:pb-24 px-6">
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
        <div className="relative z-20 h-full container mx-auto flex flex-col justify-end pb-0 md:px-6">
         
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
              </h1>
            </FadeIn>
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-12 w-full border-t border-white/20 pt-8 md:pt-10 mt-4">
            <FadeIn delay={0.4} direction="up">
              <p className="text-base md:text-xl font-light tracking-wide text-white/80 max-w-xl leading-relaxed">
                At Haritha Farms, we practice honest, organic animal farming—raising sheep, country hens, and fish in their natural environments, free from hormones and shortcuts.
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
                      <span className="text-[#0A1610] text-xs font-bold tracking-[0.2em] uppercase">The Philosophy</span>
                   </div>
                   
                   <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif text-[#1C1C1C] leading-[0.9] mb-8 md:mb-10 -ml-1">
                      Nature, <br/>
                      <span className="italic text-[#0A1610]/80">Uninterrupted.</span>
                   </h2>

                   <p className="text-lg md:text-2xl text-[#1C1C1C]/70 font-light leading-relaxed mb-10 md:mb-12 max-w-2xl">
                     Haritha Farms is not just a farm; it is a <span className="text-[#0A1610] font-medium">living ecosystem</span>. We stripped away the industrial layers to reveal the honest, raw beauty of agriculture.
                   </p>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 border-t border-[#1C1C1C]/10 pt-8 md:pt-10">
                      <div className="group">
                         <h4 className="text-3xl font-serif text-[#1C1C1C] mb-2 group-hover:text-[#0A1610] transition-colors">0%</h4>
                         <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#1C1C1C]/50 mb-2 block">Chemicals</span>
                         <p className="text-sm text-[#1C1C1C]/60 leading-relaxed max-w-[200px]">Complete rejection of synthetic fertilizers and pesticides.</p>
                      </div>
                      <div className="group">
                         <h4 className="text-3xl font-serif text-[#1C1C1C] mb-2 group-hover:text-[#0A1610] transition-colors">100%</h4>
                         <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#1C1C1C]/50 mb-2 block">Transparency</span>
                         <p className="text-sm text-[#1C1C1C]/60 leading-relaxed max-w-[200px]">Open gates policy. Come see how your food is grown.</p>
                      </div>
                   </div>
                 </FadeIn>
              </div>
           </div>
        </div>
      </section>

      {/* --- WHY HARITHA (New Section) --- */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="container mx-auto">
          <FadeIn>
            <div className="mb-12 md:mb-20 max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6">Why Haritha Farms</h2>
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                Beyond organic, we are building a legacy of trust. Here is how we ensure excellence in every step of our process.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-16">
             {[
               {
                 title: "Premium Native Breeds",
                 desc: "We focus exclusively on indigenous breeds that are naturally adapted to our climate, ensuring disease resistance without antibiotics.",
                 icon: Award
               },
               {
                 title: "Regenerative Grazing",
                 desc: "Our rotational grazing methods restore soil health, sequester carbon, and ensure our animals always have access to fresh, nutritious pasture.",
                 icon: Sprout
               },
               {
                 title: "Ethical Rearing",
                 desc: "Zero confinement. Our animals live outdoors with the freedom to express natural behaviors, resulting in stress-free, healthy lives.",
                 icon: Heart
               },
               {
                 title: "Farm-to-Table Transparency",
                 desc: "Complete traceability from our pastures to your plate. We welcome visits so you can verify our practices firsthand.",
                 icon: Eye
               },
               {
                 title: "Community Ecosystem",
                 desc: "We support a network of local farmers, sharing knowledge and resources to build a resilient regional food system.",
                 icon: Users
               },
               {
                 title: "Pure, Chemical-Free",
                 desc: "Absolutely no synthetic fertilizers, pesticides, growth hormones, or GMOs. Just nature, uninterrupted.",
                 icon: ShieldCheck
               }
             ].map((item, index) => (
               <FadeIn key={index} delay={index * 0.1}>
                 <div className="group flex flex-col h-full">
                    <h3 className="text-2xl font-serif text-primary mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-8 flex-grow font-light">
                      {item.desc}
                    </p>
                    <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                      <item.icon strokeWidth={1.5} size={28} />
                    </div>
                 </div>
               </FadeIn>
             ))}
          </div>
        </div>
      </section>

      {/* --- STANDARDS (The Triptych - Elastic Accordion) --- */}
      <section className="bg-[#1C1C1C] text-[#F2F0E9] overflow-hidden flex flex-col min-h-screen md:h-screen md:max-h-[1080px]">
         {/* Minimal Header - Compact height */}
         <div className="container mx-auto px-[24px] py-8 md:py-12 shrink-0">
            <FadeIn>
               <div className="flex items-center gap-6 mb-4">
                  <div className="h-px w-16 bg-[#C5A059]" />
                  <span className="text-[#C5A059] text-xs font-bold tracking-[0.3em] uppercase">The Haritha Standard</span>
               </div>
               <h2 className="text-3xl md:text-5xl font-serif max-w-2xl leading-none text-[rgb(187,241,228)]">
                  Purity is not a feature.<br/>
                  <span className="text-[#F2F0E9]/40 text-[rgba(242,242,242,0.4)]">It is our foundation.</span>
               </h2>
            </FadeIn>
         </div>

         {/* Elastic Gallery - Fills remaining space */}
         <div className="flex flex-col md:flex-row flex-1 w-full border-t border-[#F2F0E9]/5 min-h-0">
            {[
               { 
                 title: "No Hormones", 
                 subtitle: "Zero Artificial Growth",
                 desc: "We respect the natural timeline of life. Our animals grow at their own rhythm, ensuring health and flavor density.",
                 img: "https://images.unsplash.com/photo-1680769237516-49845493c077?q=80&w=1200&auto=format&fit=crop",
                 icon: ShieldCheck
               },
               { 
                 title: "Open Pastures", 
                 subtitle: "True Free Range",
                 desc: "Acres of untamed land. Sun, rain, and soil. Our livestock isn't just raised; it lives.",
                 img: "https://images.unsplash.com/photo-1747556060621-d066e0b2fbba?q=80&w=1200&auto=format&fit=crop",
                 icon: Wind
               },
               { 
                 title: "Clean Diet", 
                 subtitle: "100% Organic Feed",
                 desc: "Traditional grains and foraging. Absolutely no industrial by-products or cheap fillers.",
                 img: "https://images.unsplash.com/photo-1756047890348-e3a5f8e9d9d0?q=80&w=1200&auto=format&fit=crop",
                 icon: Sprout
               },
               { 
                 title: "Pure Waters", 
                 subtitle: "Sustainable Aquaculture",
                 desc: "Chemical-free ponds mimicking natural river currents. Clean water ensures firm, clean-tasting fish.",
                 img: murrelFishImage,
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
                     title="The Sheep"
                     subtitle="Native Grazing"
                     desc="Native breeds raised on vast open pastures. Our sheep graze on natural vegetation, resulting in meat that is rich in nutrients and authentic in flavor."
                     img={sheepImage}
                     link="/farms/sheep"
                  />
                  <FarmCard 
                     number="02"
                     title="The Hen"
                     subtitle="True Free-Range"
                     desc="Active foragers living under the sun. Our country hens are raised without cages or antibiotics, delivering eggs and meat with superior taste and texture."
                     img={henImage}
                     link="/farms/hen"
                  />
                  <FarmCard 
                     number="03"
                     title="The Fish"
                     subtitle="Freshwater Ecosystems"
                     desc="Murrel fish cultivated in chemical-free ponds that mimic river currents. Clean water and natural feed ensure firm, clean-tasting fish."
                     img={murrelFishImage}
                     link="/farms/fish"
                  />
               </div>
            </div>
         </div>
      </section>

      {/* --- CTA --- */}
      <CTASection 
        title='"We do not just farm the land; we steward it for the future."'
        description="Experience the purity of nature, uninterrupted. Join us in our mission to bring ethical, organic produce to your table."
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