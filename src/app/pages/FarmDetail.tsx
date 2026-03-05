import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { FadeIn } from '../components/ui/fade-in';
import { Button } from '../components/ui/button';
import { ArrowLeft, ArrowRight, Sprout, Wheat, Droplets, Stethoscope, Heart, Award, CheckCircle2 } from 'lucide-react';
import { CTASection } from '../components/ui/CTASection';
import Sheep from '../../imports/Sheep';
import murrelFishImage from "../../assets/fish.png";
import sheepGrazingImage from "../../assets/sheep.png";

// --- Data ---
const farmData: any = {
  sheep: {
    title: "Sheep Farming",
    heroImage: "https://images.unsplash.com/photo-1758357935338-936a266501d7?q=80&w=1920&auto=format&fit=crop",
    intro: "Pasture-Raised Sheep & Lamb — Pure Taste, Honest Farming. Every day begins on open pastures. Sheep and lambs grazing slowly, sunlight on clean greens, calm care in every routine. No hormones. No artificial growth promoters. Just natural grazing, organic fodder, and ethical rearing that respects the animal and the land.",
    anatomy: [
      { 
        label: "Nutrition", title: "Wild Forage Diet", 
        desc: "Grazing on diverse medicinal herbs creates a complex, robust flavor profile that grain-fed sheep lack."
      },
      { 
        label: "Constitution", title: "Active Muscle", 
        desc: "Constant movement oxygenates the blood, resulting in lean, textured meat with healthy iron levels."
      },
      { 
        label: "Environment", title: "Zero Stress", 
        desc: "Gentle handling prevents cortisol spikes, ensuring the meat remains tender and free from hormonal toughening."
      },
      { 
        label: "Composition", title: "Healthy Fats", 
        desc: "Natural growth develops rich Omega-3 fatty acids instead of the unhealthy saturated fats found in factory farming."
      }
    ],
    practices: {
        title: "Our Sheep Farming Practices",
        subtitle: "Naturally Raised. Nutritionally Superior. Ethically Farmed.",
        description: "At Haritha Farms, sheep farming is not just about production — it’s about raising healthier animals that produce cleaner, safer, and more nutritious meat. Our practices are deeply rooted in natural grazing, balanced nutrition, animal welfare, and chemical-free care.",
        items: [
            {
                title: "Natural & Free-Range Grazing",
                icon: Sprout,
                content: (
                    <div className="space-y-4">
                        <p>Our sheep are free-range raised, allowing them to graze naturally on open pastures instead of being confined.</p>
                        <div className="bg-[#FDFCF8] border border-[#C5A059]/20 p-4 rounded-sm">
                            <strong className="block text-[#0A1610] font-serif mb-2 text-sm">Benefits:</strong>
                            <ul className="space-y-2">
                                {[
                                    "Improves muscle development and meat texture",
                                    "Enhances natural fat balance",
                                    "Reduces stress, leading to better meat quality"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C5A059] flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-sm italic text-[#C5A059] border-l-2 border-[#C5A059] pl-3 py-1">Free movement and fresh air directly impact the taste, tenderness, and nutritional value of the meat.</p>
                    </div>
                )
            },
            {
                title: "Clean & Balanced Nutrition",
                icon: Wheat,
                content: (
                    <div className="space-y-4">
                        <p>We follow a natural feeding system, combining native grasses, green fodder, and farm-grown feed free from harmful chemicals.</p>
                        <div className="grid grid-cols-1 gap-3">
                           <div className="bg-[#0A1610]/5 p-3 rounded-sm">
                               <strong className="block text-[#0A1610] text-xs font-bold uppercase tracking-widest mb-2">We Use</strong>
                               <ul className="text-sm space-y-1 text-muted-foreground">
                                   <li>• Native grasses & green fodder</li>
                                   <li>• Farm-grown chemical-free feed</li>
                                   <li>• Seasonal nutritional planning</li>
                               </ul>
                           </div>
                           <div className="bg-red-50 p-3 rounded-sm border border-red-100">
                               <strong className="block text-red-800 text-xs font-bold uppercase tracking-widest mb-2">We Avoid</strong>
                               <ul className="text-sm space-y-1 text-red-900/70">
                                   <li>🚫 No artificial growth boosters</li>
                                   <li>🚫 No synthetic feed enhancers</li>
                               </ul>
                           </div>
                        </div>
                        <div className="pt-2">
                            <strong className="block text-[#0A1610] font-serif mb-2 text-sm">Result:</strong>
                            <div className="flex flex-wrap gap-2">
                                {["Higher Protein", "Lower Unhealthy Fat", "Rich in Minerals"].map((tag, i) => (
                                    <span key={i} className="bg-[#C5A059]/10 text-[#0A1610] text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            },
            {
                title: "Pure Water & Hygiene",
                icon: Droplets,
                content: (
                    <div className="space-y-4">
                        <p>Clean water and hygienic shelters are non-negotiable at Haritha Farms.</p>
                        <ul className="space-y-2">
                            {[
                                "Fresh water supplied daily",
                                "Regular cleaning of shelters",
                                "Proper ventilation and space per animal"
                            ].map((item, i) => (
                                 <li key={i} className="flex items-center gap-3">
                                     <CheckCircle2 size={14} className="text-[#C5A059]" />
                                     <span className="text-sm text-muted-foreground">{item}</span>
                                 </li>
                            ))}
                        </ul>
                        <p className="text-sm font-medium text-[#0A1610]">A clean environment means lower disease risk and healthier livestock.</p>
                    </div>
                )
            },
            {
                title: "Preventive Health Care",
                icon: Stethoscope,
                content: (
                    <div className="space-y-4">
                        <p>Instead of excessive medication, we focus on preventive and natural health management.</p>
                        <div className="bg-[#FDFCF8] border border-[#0A1610]/10 p-4">
                            <ul className="space-y-3">
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full mt-2" />
                                    <div className="text-sm">
                                        <strong className="block text-[#0A1610]">Regular Checkups</strong>
                                        <span className="text-muted-foreground">Routine veterinary visits.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full mt-2" />
                                    <div className="text-sm">
                                        <strong className="block text-[#0A1610]">Natural Immunity</strong>
                                        <span className="text-muted-foreground">Supplements to build resistance.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full mt-2" />
                                    <div className="text-sm">
                                        <strong className="block text-[#0A1610]">Responsible Care</strong>
                                        <span className="text-muted-foreground">Minimal medicine use.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <p className="text-sm italic text-[#C5A059]">Ensures meat free from unnecessary antibiotic residues.</p>
                    </div>
                )
            },
            {
                title: "Stress-Free Handling",
                icon: Heart,
                content: (
                    <div className="space-y-4">
                        <p>Stress affects meat quality. Our sheep are handled with care, patience, and respect at every stage.</p>
                        <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="bg-[#0A1610]/5 p-2 rounded-sm">
                                <span className="block text-xl mb-1">🌤️</span>
                                <span className="text-[10px] uppercase font-bold text-[#0A1610]">No Overcrowding</span>
                            </div>
                            <div className="bg-[#0A1610]/5 p-2 rounded-sm">
                                <span className="block text-xl mb-1">🤲</span>
                                <span className="text-[10px] uppercase font-bold text-[#0A1610]">Gentle Handling</span>
                            </div>
                            <div className="bg-[#0A1610]/5 p-2 rounded-sm">
                                <span className="block text-xl mb-1">🤫</span>
                                <span className="text-[10px] uppercase font-bold text-[#0A1610]">Low Noise</span>
                            </div>
                        </div>
                        <p className="text-sm font-medium text-[#0A1610]">Stress-free animals produce tender, better-tasting meat.</p>
                    </div>
                )
            },
            {
                title: "The Result",
                icon: Award,
                content: (
                    <div className="space-y-4">
                        <p className="font-serif text-lg text-[#0A1610]">Healthier, Cleaner & Tastier Meat.</p>
                        <p className="text-sm text-muted-foreground">Because of our practices, Haritha Farms sheep meat is:</p>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                "Naturally Tender",
                                "Rich in Protein",
                                "Chemical Free",
                                "Safe for Families"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-center p-3 bg-[#C5A059] text-[#0A1610] text-xs font-bold uppercase tracking-wider text-center">
                                    {item}
                                </div>
                            ))}
                        </div>
                        <p className="text-center font-serif italic text-[#0A1610] pt-2">From pasture to plate — every step is thoughtfully managed.</p>
                    </div>
                )
            }
        ]
    },
    culinary: {
      subtitle: "Culinary Excellence",
      titleStart: "Taste the",
      titleHighlight: "Difference.",
      description: "When you choose our lamb, you aren't just buying meat. You are supporting a regenerative ecosystem that values animal welfare, soil health, and pure, unadulterated flavor.",
      cta: "Order Farm Fresh"
    },
    ctaText: "Visit Our Farm"
  },
  hen: {
    title: "Country Hen Farming",
    heroImage: "https://images.unsplash.com/photo-1765460220129-233c27c4eafb?q=80&w=1920&auto=format&fit=crop",
    intro: "Free-Range Country Hens. Our hens roam freely under open skies, experiencing natural sunlight, fresh air, and natural movement.",
    anatomyImage: "https://images.unsplash.com/photo-1673446672613-01ff44735eb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VudHJ5JTIwaGVuJTIwY2hpY2tlbiUyMGNsb3NlJTIwdXAlMjBwcm9maWxlJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc2ODYyOTcxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    anatomy: [
      { 
        label: "Nutrition", title: "Natural Foraging", 
        desc: "Pecking at seeds, insects, and greens ensures a diet rich in natural proteins and essential vitamins."
      },
      { 
        label: "Constitution", title: "Natural Growth", 
        desc: "Slow, unhurried growth develops firm, textured meat distinct from soft, water-filled commercial broiler meat."
      },
      { 
        label: "Environment", title: "Sun & Soil", 
        desc: "Daily exposure to sunlight promotes natural Vitamin D synthesis and healthy bone development."
      },
      { 
        label: "Composition", title: "Rich Flavor", 
        desc: "The active lifestyle and varied diet result in meat with a deeper, more savory flavor profile and superior broth quality."
      }
    ],
    practices: {
        title: "Healthy & Ethical Chicken Farming",
        subtitle: "Naturally raised, antibiotic-free chicken for healthier meals.",
        description: "At Haritha Farms, our chicken farming practices are designed to deliver nutritious, clean, and naturally grown meat while ensuring the highest standards of animal welfare and sustainability.",
        items: [
            {
                title: "Natural Feed & Nutrition",
                icon: Wheat,
                content: (
                    <div className="space-y-4">
                        <p>Our chickens are fed a carefully formulated natural diet rich in grains, plant proteins, and essential minerals.</p>
                        <div className="bg-[#FDFCF8] border border-[#C5A059]/20 p-4 rounded-sm">
                            <strong className="block text-[#0A1610] font-serif mb-2 text-sm">Standards:</strong>
                            <ul className="space-y-2">
                                {[
                                    "No harmful growth boosters",
                                    "No artificial fat enhancers",
                                    "Feed supports lean muscle growth"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C5A059] flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-sm italic text-[#C5A059] border-l-2 border-[#C5A059] pl-3 py-1">This results in protein-rich, low-fat, and better-tasting meat.</p>
                    </div>
                )
            },
            {
                title: "Antibiotic & Hormone-Free",
                icon: Stethoscope,
                content: (
                    <div className="space-y-4">
                        <p>We follow strict antibiotic-free and hormone-free farming practices.</p>
                        <ul className="space-y-2">
                            {[
                                "Antibiotics avoided unless medically required",
                                "No growth hormones at any stage",
                                "Preventive health through nutrition"
                            ].map((item, i) => (
                                 <li key={i} className="flex items-center gap-3">
                                     <CheckCircle2 size={14} className="text-[#C5A059]" />
                                     <span className="text-sm text-muted-foreground">{item}</span>
                                 </li>
                            ))}
                        </ul>
                        <p className="text-sm font-medium text-[#0A1610]">This ensures safer meat with no chemical residues.</p>
                    </div>
                )
            },
            {
                title: "Stress-Free Environment",
                icon: Heart,
                content: (
                    <div className="space-y-4">
                        <p>Healthy chickens grow in a clean, well-ventilated, low-stress environment.</p>
                        <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="bg-[#0A1610]/5 p-2 rounded-sm">
                                <span className="block text-xl mb-1">🏠</span>
                                <span className="text-[10px] uppercase font-bold text-[#0A1610]">Spacious</span>
                            </div>
                            <div className="bg-[#0A1610]/5 p-2 rounded-sm">
                                <span className="block text-xl mb-1">🧼</span>
                                <span className="text-[10px] uppercase font-bold text-[#0A1610]">Sanitized</span>
                            </div>
                            <div className="bg-[#0A1610]/5 p-2 rounded-sm">
                                <span className="block text-xl mb-1">🌬️</span>
                                <span className="text-[10px] uppercase font-bold text-[#0A1610]">Airflow</span>
                            </div>
                        </div>
                        <p className="text-sm font-medium text-[#0A1610]">Reduced stress leads to better meat texture.</p>
                    </div>
                )
            },
            {
                title: "Clean Water & Immunity",
                icon: Droplets,
                content: (
                    <div className="space-y-4">
                        <p>We provide filtered, clean drinking water at all times.</p>
                        <div className="bg-[#FDFCF8] border border-[#0A1610]/10 p-4">
                             <ul className="space-y-3">
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full mt-2" />
                                    <div className="text-sm">
                                        <strong className="block text-[#0A1610]">Natural Supplements</strong>
                                        <span className="text-muted-foreground">Improve digestion.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full mt-2" />
                                    <div className="text-sm">
                                        <strong className="block text-[#0A1610]">Herbal Boosters</strong>
                                        <span className="text-muted-foreground">Reduce disease risk.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <p className="text-sm italic text-[#C5A059]">Strengthens natural resistance without chemicals.</p>
                    </div>
                )
            },
            {
                title: "Ethical & Sustainable",
                icon: Sprout,
                content: (
                    <div className="space-y-4">
                        <p>Our poultry practices align with ethical and eco-friendly farming principles.</p>
                        <ul className="space-y-2">
                            {[
                                "Responsible waste management",
                                "Minimal environmental impact",
                                "Respect for animal welfare"
                            ].map((item, i) => (
                                 <li key={i} className="flex items-center gap-3">
                                     <CheckCircle2 size={14} className="text-[#C5A059]" />
                                     <span className="text-sm text-muted-foreground">{item}</span>
                                 </li>
                            ))}
                        </ul>
                        <p className="text-sm font-medium text-[#0A1610]">Sustainability ensures consistent quality.</p>
                    </div>
                )
            },
            {
                title: "Why Haritha Chicken?",
                icon: Award,
                content: (
                    <div className="space-y-4">
                        <p className="font-serif text-lg text-[#0A1610]">Healthier, Safer & Tastier.</p>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                "High Protein",
                                "No Antibiotics",
                                "Naturally Tender",
                                "Farm Fresh"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-center p-3 bg-[#C5A059] text-[#0A1610] text-xs font-bold uppercase tracking-wider text-center">
                                    {item}
                                </div>
                            ))}
                        </div>
                        <p className="text-center font-serif italic text-[#0A1610] pt-2">Safe for families and children.</p>
                    </div>
                )
            }
        ]
    },
    culinary: {
      subtitle: "Authentic Taste",
      titleStart: "Real",
      titleHighlight: "Country Flavor.",
      description: "Experience the nostalgic taste of true country chicken. Firm texture, distinct aroma, and nutrition that only comes from free-range living.",
      cta: "Order Country Chicken"
    },
    ctaText: "Enquire Now"
  },
  fish: {
    title: "Fish Farming",
    heroImage: murrelFishImage,
    intro: "Natural Pond Ecosystem. Our fish thrive in clean, chemical-free ponds designed to maintain ecological balance.",
    anatomyImage: "https://images.unsplash.com/photo-1574310854034-3bcbfaa248b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXJyZWwlMjBmaXNoJTIwc3dpbW1pbmclMjBjbGVhciUyMHdhdGVyJTIwdW5kZXJ3YXRlcnxlbnwxfHx8fDE3Njg2Mjk3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    anatomy: [
      { 
        label: "Nutrition", title: "Clean Diet", 
        desc: "Fed on plant-based organic feed and natural pond organisms, free from synthetic additives or waste products."
      },
      { 
        label: "Constitution", title: "Active Swimmers", 
        desc: "Ample swimming space builds healthy muscle tone and firm texture, unlike crowded tank-raised fish."
      },
      { 
        label: "Environment", title: "Living Water", 
        desc: "Oxygen-rich, chemically untreated water mimics their natural river habitat, preventing disease naturally."
      },
      { 
        label: "Composition", title: "Purity", 
        desc: "Free from heavy metals and muddy tastes often found in stagnant water farming. Clean, sweet, and healthy."
      }
    ],
    practices: {
        title: "Murrel Fish Farming",
        subtitle: "Naturally Raised. Nutritionally Superior. Responsibly Farmed.",
        description: "At Haritha Farms, we practice traditional yet scientifically guided Murrel (Korameenu) fish farming that prioritizes fish health, natural growth, and superior meat quality. Murrel fish is known for its high medicinal value, lean protein, and easy digestibility—especially beneficial for children, elders, and recovering patients.",
        items: [
            {
                title: "Natural Pond Ecosystem",
                icon: Droplets,
                content: (
                    <div className="space-y-4">
                        <p>We raise Murrel fish in freshwater earthen ponds that closely mimic their natural habitat.</p>
                        <div className="bg-[#FDFCF8] border border-[#C5A059]/20 p-4 rounded-sm">
                            <strong className="block text-[#0A1610] font-serif mb-2 text-sm">Our Methods:</strong>
                            <ul className="space-y-2">
                                {[
                                    "Clean, mineral-rich water",
                                    "Controlled stocking density to avoid stress",
                                    "Regular water quality monitoring"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C5A059] flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-sm italic text-[#C5A059] border-l-2 border-[#C5A059] pl-3 py-1">Allows fish to grow naturally, improving muscle strength and meat quality.</p>
                    </div>
                )
            },
            {
                title: "Chemical & Antibiotic-Free",
                icon: Stethoscope,
                content: (
                    <div className="space-y-4">
                        <p>We follow zero-antibiotic and zero-hormone practices.</p>
                        <ul className="space-y-2">
                            {[
                                "No growth enhancers",
                                "No harmful chemicals",
                                "No artificial color or feed boosters"
                            ].map((item, i) => (
                                 <li key={i} className="flex items-center gap-3">
                                     <CheckCircle2 size={14} className="text-[#C5A059]" />
                                     <span className="text-sm text-muted-foreground">{item}</span>
                                 </li>
                            ))}
                        </ul>
                        <p className="text-sm font-medium text-[#0A1610]">Healthy fish grow at their own pace, producing safe, residue-free meat.</p>
                    </div>
                )
            },
            {
                title: "Natural & Protein-Rich Feed",
                icon: Wheat,
                content: (
                    <div className="space-y-4">
                        <p>Our Murrel fish are fed with a balanced natural diet, including high-quality protein sources and natural ingredients.</p>
                        <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="bg-[#0A1610]/5 p-2 rounded-sm">
                                <span className="block text-xl mb-1">🐟</span>
                                <span className="text-[10px] uppercase font-bold text-[#0A1610]">Omega-3</span>
                            </div>
                            <div className="bg-[#0A1610]/5 p-2 rounded-sm">
                                <span className="block text-xl mb-1">💪</span>
                                <span className="text-[10px] uppercase font-bold text-[#0A1610]">Lean Meat</span>
                            </div>
                            <div className="bg-[#0A1610]/5 p-2 rounded-sm">
                                <span className="block text-xl mb-1">😋</span>
                                <span className="text-[10px] uppercase font-bold text-[#0A1610]">Better Taste</span>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                title: "Stress-Free Environment",
                icon: Heart,
                content: (
                    <div className="space-y-4">
                        <p>Stress directly affects fish health and meat quality. At Haritha Farms, ponds are not overcrowded and handling is minimal.</p>
                        <div className="bg-[#FDFCF8] border border-[#0A1610]/10 p-4">
                            <ul className="space-y-3">
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full mt-2" />
                                    <div className="text-sm">
                                        <strong className="block text-[#0A1610]">Low Stress</strong>
                                        <span className="text-muted-foreground">Stronger immunity.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full mt-2" />
                                    <div className="text-sm">
                                        <strong className="block text-[#0A1610]">Careful Harvest</strong>
                                        <span className="text-muted-foreground">Better digestion.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <p className="text-sm italic text-[#C5A059]">Low stress means healthier meat.</p>
                    </div>
                )
            },
            {
                title: "Slow & Healthy Growth",
                icon: Sprout,
                content: (
                    <div className="space-y-4">
                        <p>Unlike fast commercial farming, we allow Murrel fish to grow slowly and naturally.</p>
                        <ul className="space-y-2">
                            {[
                                "Firmer flesh",
                                "Higher protein content",
                                "Better nutrient absorption"
                            ].map((item, i) => (
                                 <li key={i} className="flex items-center gap-3">
                                     <CheckCircle2 size={14} className="text-[#C5A059]" />
                                     <span className="text-sm text-muted-foreground">{item}</span>
                                 </li>
                            ))}
                        </ul>
                        <p className="text-sm font-medium text-[#0A1610]">Natural growth = better medicinal value.</p>
                    </div>
                )
            },
            {
                title: "Why Haritha Murrel Fish?",
                icon: Award,
                content: (
                    <div className="space-y-4">
                        <p className="font-serif text-lg text-[#0A1610]">Healthier, Safer & Tastier.</p>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                "Lean Protein",
                                "Essential Amino Acids",
                                "Easily Digestible",
                                "Recovery Diet"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-center p-3 bg-[#C5A059] text-[#0A1610] text-xs font-bold uppercase tracking-wider text-center">
                                    {item}
                                </div>
                            ))}
                        </div>
                        <p className="text-center font-serif italic text-[#0A1610] pt-2">Fully traceable to its pond of origin.</p>
                    </div>
                )
            }
        ]
    },
    culinary: {
      subtitle: "Fresh Catch",
      titleStart: "Pure",
      titleHighlight: "Water Harvest.",
      description: "From our pristine ponds to your kitchen. Enjoy fish that tastes of fresh water and nature, harvested responsibly for peak freshness.",
      cta: "Order Fresh Fish"
    },
    ctaText: "Visit Fish Farm"
  }
};

// --- Components ---

function HeaderTitle({ children, subtitle }: { children: React.ReactNode, subtitle: string }) {
  return (
    <div className="flex flex-col gap-6 items-center text-center max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <div className="h-px w-8 bg-[#C5A059]" />
        <span className="text-[#C5A059] text-xs font-bold tracking-[0.25em] uppercase">{subtitle}</span>
        <div className="h-px w-8 bg-[#C5A059]" />
      </div>
      <h2 className="text-4xl md:text-6xl font-serif text-[#0A1610] leading-tight">
        {children}
      </h2>
    </div>
  );
}

export default function FarmDetail() {
  const { type } = useParams();
  const data = farmData[type as keyof typeof farmData];
  const heroRef = useRef(null);
  
  // Parallax for Hero
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  if (!data) return <div className="pt-32 text-center">Farm not found</div>;

  return (
    <div className="relative bg-[#FDFCF8] min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative h-[85vh] w-full overflow-hidden flex items-end pb-4 md:pb-10 ">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
           <img 
             src={data.heroImage} 
             alt={data.title} 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0A1610] via-black/20 to-transparent opacity-90" />
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
             <Link to="/farms" className="inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase text-white/70 hover:text-[#C5A059] mb-12 transition-colors duration-300 backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full border border-white/10">
               <ArrowLeft size={12} className="mr-3" /> Back to Farms
             </Link>
             <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#F2F0E9] mb-8 leading-[0.9] drop-shadow-lg">
               {data.title.split(' ').map((word: string, i: number) => (
                 <span key={i} className="block md:inline mr-4">{word}</span>
               ))}
             </h1>
             <div className="h-1 w-24 bg-[#C5A059] mx-auto mb-8" />
             <p className="text-xl md:text-2xl text-[#F2F0E9]/90 font-light max-w-3xl mx-auto leading-relaxed">
               {data.intro}
             </p>
          </FadeIn>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-24 md:py-32 px-6 bg-[#FDFCF8] relative z-20">
         <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0A1610] to-transparent opacity-5 pointer-events-none" />
         
         <div className="container mx-auto max-w-6xl">
           
             <div className="space-y-40">
               {/* --- ANATOMY OF QUALITY --- */}
               <FadeIn>
                 <HeaderTitle subtitle="Anatomy of Quality">
                    Honoring the Life <br/>
                    <span className="italic text-[#C5A059]">behind the food.</span>
                 </HeaderTitle>
                 
                 <div className="relative w-full max-w-7xl mx-auto min-h-[700px] hidden md:flex items-center justify-center mt-20">
                     
                     {/* Connecting Lines SVG Layer */}
                     <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 1000 600">
                        <defs>
                          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.2" />
                            <stop offset="50%" stopColor="#C5A059" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#C5A059" stopOpacity="0.2" />
                          </linearGradient>
                        </defs>
                        {[
                          { d: "M 200 150 L 420 280", delay: 0, cx: 200, cy: 150 },
                          { d: "M 800 150 L 580 280", delay: 0.2, cx: 800, cy: 150 },
                          { d: "M 200 450 L 420 320", delay: 0.4, cx: 200, cy: 450 },
                          { d: "M 800 450 L 580 320", delay: 0.6, cx: 800, cy: 450 }
                        ].map((line, i) => (
                          <g key={i}>
                             <motion.path 
                                d={line.d} 
                                fill="none" 
                                stroke="url(#goldGradient)" 
                                strokeWidth="1.5" 
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: line.delay, ease: "easeInOut" }}
                              />
                             <circle cx={line.cx} cy={line.cy} r="3" fill="#C5A059" className="animate-pulse" />
                          </g>
                        ))}
                     </svg>

                     {/* Central Image */}
                     <motion.div 
                       initial={{ scale: 0.9, opacity: 0, y: 20 }}
                       whileInView={{ scale: 1, opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 1 }}
                       className="relative z-10 w-[500px] h-[500px] drop-shadow-2xl flex items-center justify-center"
                     >
                        {type === 'sheep' ? (
                            <Sheep />
                        ) : (
                            <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden border-2 border-[#293F11]/20 p-2 bg-white">
                                <div className="w-full h-full rounded-full overflow-hidden relative">
                                    <img 
                                        src={data.anatomyImage} 
                                        alt={data.title} 
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Overlay to blend it slightly with the editorial vibe */}
                                    <div className="absolute inset-0 bg-[#C5A059]/10 mix-blend-multiply" />
                                </div>
                            </div>
                        )}
                     </motion.div>

                     {/* Content Nodes */}
                     {[
                       { top: "8%", left: "0%", align: "right", delay: 0.5 },
                       { top: "8%", right: "0%", align: "left", delay: 0.7 },
                       { bottom: "12%", left: "0%", align: "right", delay: 0.9 },
                       { bottom: "12%", right: "0%", align: "left", delay: 1.1 }
                     ].map((pos: any, i) => {
                       const item = data.anatomy[i];
                       return (
                        <motion.div 
                          key={i}
                          className={`absolute w-72 text-${pos.align}`}
                          style={{ top: pos.top, bottom: pos.bottom, left: pos.left, right: pos.right }}
                          initial={{ opacity: 0, x: pos.align === 'left' ? 30 : -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: pos.delay }}
                        >
                           <span className="text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-2 block">{i + 1}. {item.label}</span>
                           <h3 className="text-3xl font-serif text-[#0A1610] mb-3">{item.title}</h3>
                           <p className={`text-sm text-muted-foreground leading-relaxed font-light ${pos.align === 'right' ? 'border-r-2 pr-4' : 'border-l-2 pl-4'} border-[#C5A059]/30`}>
                             {item.desc}
                           </p>
                        </motion.div>
                       );
                     })}
                 </div>
                 
                 {/* Mobile Stack */}
                 <div className="md:hidden grid gap-8 mt-12">
                    {data.anatomy.map((item: any, i: number) => (
                      <div key={i} className="bg-white p-8 border-l-2 border-[#C5A059] shadow-sm">
                         <span className="text-[#C5A059] text-xs font-bold mb-2 block">0{i + 1}</span>
                         <h3 className="text-2xl font-serif text-[#0A1610] mb-2">{item.title}</h3>
                         <p className="text-muted-foreground font-light">{item.desc}</p>
                      </div>
                    ))}
                 </div>
               </FadeIn>

               {/* --- DETAILED PRACTICES SECTION (Added) --- */}
               {data.practices && (
                   <FadeIn>
                     <div className="w-full relative">
                        {/* Section Header */}
                        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                            <motion.span 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-[#C5A059] text-[10px] font-bold tracking-[0.3em] uppercase block mb-6"
                            >
                                Our Standards
                            </motion.span>
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-6xl font-serif text-[#0A1610] mb-8 leading-tight"
                            >
                                {data.practices.title}
                            </motion.h2>
                            <motion.div 
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="w-px h-16 bg-[#C5A059]/30 mx-auto mb-8 origin-top" 
                            />
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="text-xl md:text-2xl font-serif italic text-[#0A1610]/80 mb-8 leading-relaxed"
                            >
                                {data.practices.subtitle}
                            </motion.p>
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="max-w-3xl mx-auto text-muted-foreground font-light leading-loose text-lg"
                            >
                                {data.practices.description}
                            </motion.p>
                        </div>
                        
                        {/* Stacking Sticky Cards Layout */}
                        <div className="relative">
                            {data.practices.items.map((item: any, i: number) => {
                                // Fallback images mapped to index
                                const images = [
                                    sheepGrazingImage, // Grass
                                    "https://images.unsplash.com/photo-1766300289845-3109016968f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Feed
                                    "https://images.unsplash.com/photo-1560673429-b9b9338a360a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Water
                                    "https://images.unsplash.com/photo-1682315912291-26f4de2d0ae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Sun
                                    "https://images.unsplash.com/photo-1587032039356-a62ad49deaa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Abstract
                                    "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"  // Nature
                                ];
                                
                                return (
                                    <div 
                                        key={i}
                                        className="sticky top-0 h-screen flex flex-col md:flex-row bg-[#FDFCF8] overflow-hidden border-t border-[#0A1610]/5"
                                    >
                                        {/* Text Side - Alternating Order */}
                                        <div className={`flex-1 flex flex-col justify-center p-8 md:p-24 relative z-10 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                                            <motion.div
                                               initial={{ opacity: 0, y: 40 }}
                                               whileInView={{ opacity: 1, y: 0 }}
                                               viewport={{ once: true }}
                                               transition={{ duration: 0.8, delay: 0.2 }}
                                            >
                                                <div className="flex items-center gap-6 mb-8">
                                                    
                                                    <div className="p-4 rounded-full bg-[#C5A059]/10 text-[#C5A059]">
                                                        <item.icon size={28} strokeWidth={1.5} />
                                                    </div>
                                                </div>
                                                
                                                <h3 className="text-4xl md:text-5xl font-serif text-[#0A1610] mb-8 leading-tight">{item.title}</h3>
                                                
                                                <div className="text-muted-foreground font-light leading-loose text-lg">
                                                    {item.content}
                                                </div>
                                            </motion.div>
                                        </div>
                                        
                                        {/* Image Side - Alternating Order */}
                                        <div className={`flex-1 h-[40vh] md:h-auto relative overflow-hidden ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                                            <motion.div 
                                                className="w-full h-full relative"
                                                initial={{ scale: 1.1 }}
                                                whileInView={{ scale: 1 }}
                                                transition={{ duration: 1.5 }}
                                            >
                                                <img 
                                                    src={images[i % images.length]} 
                                                    alt={item.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-[#0A1610]/10 mix-blend-multiply" />
                                            </motion.div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        
                        {/* Editorial CTA */}
                        <div className="relative bg-[#FDFCF8] py-32 px-6 text-center z-10">
                            <div className="max-w-4xl mx-auto">
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <div className="inline-block p-4 rounded-full border border-[#C5A059]/20 mb-8">
                                        <Award size={32} className="text-[#C5A059]" />
                                    </div>
                                    <h4 className="font-serif text-3xl md:text-5xl text-[#0A1610] mb-12 leading-tight">
                                        Experience truly healthy meat — <br/>
                                        <span className="italic text-[#C5A059]">raised naturally, the Haritha Farms way.</span>
                                    </h4>
                                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                                        <Link to="/transparency" className="group relative px-8 py-4 bg-white border border-[#0A1610]/20 overflow-hidden transition-all hover:border-[#C5A059]">
                                            <span className="relative flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-[#0A1610]">
                                                Our Standards <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </Link>
                                        <Link to="/contact" className="group relative px-8 py-4 bg-[#0A1610] overflow-hidden transition-all hover:bg-[#C5A059]">
                                            <span className="relative flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-white">
                                                Get in Touch <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                     </div>
                   </FadeIn>
               )}

               {/* --- CULINARY EXCELLENCE CTA --- */}
               <FadeIn>
                 <div className="relative overflow-hidden bg-[#0A1610] text-[#F2F0E9] p-12 md:p-24 text-center mx-auto max-w-5xl border border-[#F2F0E9]/10">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 z-0" />
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none z-0" />
                    
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="flex items-center gap-4 mb-8">
                         <div className="h-px w-12 bg-[#C5A059]" />
                         <span className="text-[#C5A059] text-xs font-bold tracking-[0.25em] uppercase">{data.culinary.subtitle}</span>
                         <div className="h-px w-12 bg-[#C5A059]" />
                      </div>
                      
                      <h3 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
                         {data.culinary.titleStart} <span className="italic text-[#C5A059]">{data.culinary.titleHighlight}</span>
                      </h3>
                      
                      <p className="text-[#F2F0E9]/70 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                        {data.culinary.description}
                      </p>
                      
                      <Button asChild size="lg" className="bg-[#C5A059] text-[#0A1610] hover:bg-white hover:text-[#0A1610] rounded-none px-12 py-8 text-sm font-bold tracking-widest uppercase transition-all duration-300">
                        <Link to="/contact">{data.culinary.cta}</Link>
                      </Button>
                    </div>
                 </div>
               </FadeIn>
             </div>
           
         </div>
      </section>

      {/* --- VISUAL DIARY (Gallery) --- */}
      <section className="py-24 bg-[#0A1610] text-[#F2F0E9] px-6 border-t border-white/10">
         <div className="container mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-16">
               <h3 className="text-3xl md:text-4xl font-serif">Visual Diary</h3>
               <Link to="/gallery" className="hidden md:flex items-center text-xs font-bold tracking-[0.2em] uppercase text-[#C5A059] hover:text-white transition-colors">
                  View Full Gallery <ArrowRight size={14} className="ml-2" />
               </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[600px]">
               {/* Large Item */}
               <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden">
                  <img src={data.heroImage} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" alt="Farm Detail" />
                  <div className="absolute bottom-0 left-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/80 to-transparent w-full">
                     <p className="text-[#C5A059] text-xs font-bold uppercase tracking-widest mb-1">Daily Life</p>
                     <p className="text-white font-serif text-xl">Morning Inspections</p>
                  </div>
               </div>
               
               {/* Small Items */}
               {[1, 2].map((_, i) => (
                  <div key={i} className="relative group overflow-hidden md:col-span-1 md:row-span-1">
                     <img src={`https://source.unsplash.com/random/600x600?${type === 'hen' ? 'chicken' : type},farm,${i}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" alt="Detail" />
                  </div>
               ))}
               
               {/* Wide Item */}
               <div className="md:col-span-2 relative group overflow-hidden">
                  <img src={`https://source.unsplash.com/random/800x400?${type === 'hen' ? 'poultry' : type},nature`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" alt="Detail" />
               </div>
            </div>
            
            <div className="mt-12 text-center md:hidden">
               <Link to="/gallery" className="inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase text-[#C5A059]">
                  View Full Gallery <ArrowRight size={14} className="ml-2" />
               </Link>
            </div>
         </div>
      </section>

      <CTASection 
         title={`Experience our ${data.title}`}
         description="From our farm to your table, we ensure the highest standards of quality and ethics."
         primaryAction={{ text: data.ctaText, link: "/contact" }}
         secondaryAction={{ text: "View All Farms", link: "/farms" }}
      />
    </div>
  );
}
