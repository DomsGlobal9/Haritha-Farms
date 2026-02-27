import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Leaf, ShieldCheck, Users, Package, CheckCircle, ArrowRight, Wheat, Sprout } from 'lucide-react';
import { FadeIn } from '../components/ui/fade-in';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CTASection } from '../components/ui/CTASection';
import murrelFishImage from "../../assets/fish.png";

export default function Feed() {
  const feedCategories = [
    {
      icon: "🐑",
      title: "Livestock Feed (Sheep & Goat)",
      description: "Our livestock feed supports steady, natural growth, healthy digestion, and strong immunity—without forced fattening.",
      benefits: [
        "Supports muscle development naturally",
        "Improves digestion & nutrient absorption",
        "Enhances overall herd health"
      ],
      suitableFor: ["Sheep", "Goats", "Mixed grazing livestock"],
      image: "https://images.unsplash.com/photo-1758357935338-936a266501d7?q=80&w=1080&auto=format&fit=crop",
      link: "/feed/livestock"
    },
    {
      icon: "🐔",
      title: "Poultry Feed (Country Hen & Poultry)",
      description: "Formulated for free-range and country hens, our poultry feed encourages natural activity, better egg quality, and authentic taste.",
      benefits: [
        "Improves egg quality & shell strength",
        "Supports natural immunity",
        "No antibiotic residue"
      ],
      suitableFor: ["Country hens", "Free-range poultry", "Backyard poultry farms"],
      image: "https://images.unsplash.com/photo-1765460220129-233c27c4eafb?q=80&w=1080&auto=format&fit=crop",
      link: "/feed/poultry"
    },
    {
      icon: "🐟",
      title: "Fish Feed (Aquaculture)",
      description: "Our fish feed is designed for clean pond ecosystems, ensuring healthy growth while maintaining water quality.",
      benefits: [
        "Promotes balanced growth",
        "Reduces water pollution",
        "Improves feed conversion ratio (FCR)"
      ],
      suitableFor: ["Freshwater fish", "Pond-based aquaculture", "Sustainable fish farms"],
      image: murrelFishImage,
      link: "/feed/fish"
    }
  ];

  const principles = [
    {
      icon: ShieldCheck,
      title: "No growth hormones"
    },
    {
      icon: Leaf,
      title: "No harmful chemicals"
    },
    {
      icon: Sprout,
      title: "Balanced, species-specific nutrition"
    },
    {
      icon: CheckCircle,
      title: "Farm-tested before market supply"
    }
  ];

  const manufacturingSteps = [
    {
      step: "01",
      title: "Ingredient Selection",
      description: "Carefully sourced grains and raw materials"
    },
    {
      step: "02",
      title: "Scientific Formulation",
      description: "Balanced nutrition based on animal type"
    },
    {
      step: "03",
      title: "Controlled Manufacturing",
      description: "Clean processing standards"
    },
    {
      step: "04",
      title: "Quality Testing",
      description: "Farm-tested before distribution"
    },
    {
      step: "05",
      title: "Responsible Packaging",
      description: "Preserves freshness and quality"
    }
  ];

  const reasons = [
    "Used daily on our own farms",
    "Transparent ingredient sourcing",
    "Consistent quality & performance",
    "Ethical brand with farming expertise",
    "Long-term animal health focus"
  ];

  const supplyClients = [
    "Individual farmers",
    "Commercial livestock farms",
    "Poultry farms",
    "Aquaculture operators",
    "Organic & natural farming initiatives"
  ];

  const supplyOptions = [
    "Small farm quantities",
    "Bulk orders for large farms",
    "Long-term supply partnerships",
    "Custom feed guidance (based on farm needs)"
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-full w-full overflow-hidden flex items-center justify-center pb-6 sm:pb-3 pt-36 sm:pt-40 lg:pt-24">
        <motion.div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1920&auto=format&fit=crop"
            alt="Natural Animal Feed"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto text-white">
          <FadeIn delay={0.2} direction="up">
            <h1 className="font-serif text-5xl pt-15 md:text-5xl lg:text-8xl leading-tight mb-15 text-[rgb(241,249,247)]">
              Naturally Formulated Feed.<br />
              Responsibly Produced.
            </h1>
          </FadeIn>

          <FadeIn delay={0.4} direction="up">
            <p className="text-lg md:text-xl font-light tracking-wide mb-10 text-white/90 max-w-3xl mx-auto">
              At Haritha Farms, we don't just raise animals—we also produce and supply high-quality, natural animal feed designed to support healthy growth, strong immunity, and ethical farming outcomes.
            </p>
          </FadeIn>

          <FadeIn delay={0.6} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-none px-8 py-6 text-sm tracking-widest">
                <Link to="#feed-range">Explore Our Feed Range</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary rounded-none px-8 py-6 text-sm tracking-widest bg-transparent">
                <Link to="/contact">Talk to Our Feed Team</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Haritha Farms Feed */}
      <section className="py-24 md:py-32 px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our Approach</span>
              <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight">
                Why Haritha Farms Feed
              </h2>
              <p className="text-xl text-primary font-light leading-relaxed max-w-3xl mx-auto mb-6">
                At Haritha Farms, feed is not a commodity—it is the foundation of animal health.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Our feeds are formulated based on traditional knowledge, modern nutrition science, and on-farm experience, ensuring animals grow naturally without artificial enhancers.
              </p>
            </FadeIn>
          </div>

          {/* Key Principles */}
          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {principles.map((principle, index) => (
                <div key={index} className="bg-white border border-border p-6 text-center">
                  <principle.icon size={40} className="text-secondary mx-auto mb-4" />
                  <h3 className="text-sm font-medium text-primary uppercase tracking-widest leading-relaxed">
                    {principle.title}
                  </h3>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Philosophy */}
          <FadeIn delay={0.3}>
            <div className="bg-primary/5 p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-serif text-primary mb-6 leading-tight">
                Our Feed Philosophy
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                We believe what animals eat defines the quality of food humans consume. That's why every batch of Haritha Farms feed follows the same standards we use for our own farms—clean, transparent, and ethical.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Feed Categories */}
      <section id="feed-range" className="py-24 md:py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Product Range</span>
              <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">
                Feed Categories
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Species-specific formulations designed for optimal health and natural growth
              </p>
            </div>
          </FadeIn>

          <div className="space-y-16">
            {feedCategories.map((category, index) => (
              <FadeIn key={index} delay={0.1 * index}>
                <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                    <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
                      <ImageWithFallback
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                    <div className="text-6xl mb-6">{category.icon}</div>
                    <h3 className="text-2xl md:text-3xl font-serif text-primary mb-4">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {category.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xs uppercase tracking-widest font-medium text-primary mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {category.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <CheckCircle size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xs uppercase tracking-widest font-medium text-primary mb-3">Suitable For</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.suitableFor.map((item, i) => (
                          <span key={i} className="px-4 py-2 bg-primary/5 text-xs text-primary uppercase tracking-widest">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button asChild variant="link" className="p-0 h-auto text-secondary hover:text-primary transition-colors text-sm font-bold tracking-widest uppercase group-hover:underline">
                      <Link to={category.link} className="flex items-center">
                        View Product Details <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How Our Feed Is Made */}
      <section className="py-24 md:py-32 px-6 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <FadeIn>
            <div className="text-center mb-20">
              <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Process</span>
              <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">
                How Our Feed Is Made
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
                From sourcing to packaging, every step ensures quality and integrity
              </p>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-[2rem] left-[10%] right-[10%] h-px bg-primary/10" />

            <div className="grid md:grid-cols-5 gap-10 md:gap-4">
              {manufacturingSteps.map((step, index) => (
                <FadeIn key={index} delay={0.1 * index}>
                  <div className="flex flex-col items-center text-center group">
                    <div className="relative z-10 mb-8 transition-transform duration-500 group-hover:-translate-y-1">
                      <div className="w-16 h-16 rounded-full bg-white border border-primary/10 flex items-center justify-center text-xl font-serif text-secondary shadow-sm">
                        {step.step}
                      </div>
                    </div>
                    
                    <div className="px-1">
                      <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-3 h-8 flex items-center justify-center">
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed opacity-80">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Farmers Choose Us */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                Why Farmers Choose Haritha Farms Feed
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-4 bg-primary/5 p-6">
                  <CheckCircle size={24} className="text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-primary">{reason}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="text-center py-12 border-y border-border">
              <p className="text-2xl md:text-3xl font-serif text-primary italic">
                "Feed we trust for our animals is the only feed we sell."
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Who We Supply */}
      <section className="py-24 md:py-32 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <FadeIn>
              <div>
                <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Partners</span>
                <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8">
                  Who We Supply
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Our Feed Is Trusted By:
                </p>
                <ul className="space-y-4">
                  {supplyClients.map((client, index) => (
                    <li key={index} className="flex items-center gap-3 text-primary">
                      <div className="w-2 h-2 bg-secondary" />
                      <span>{client}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Options</span>
                <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8">
                  Bulk & Retail Supply Options
                </h2>
                <ul className="space-y-4">
                  {supplyOptions.map((option, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our Promise</span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8">
                Quality & Responsibility Commitment
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                Every bag of Haritha Farms feed reflects our commitment to:
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: ShieldCheck, text: "Animal welfare" },
                { icon: Users, text: "Farmer success" },
                { icon: Leaf, text: "Environmental balance" },
                { icon: Package, text: "Food safety & transparency" }
              ].map((item, index) => (
                <div key={index} className="text-center p-6 border border-border hover:border-primary/30 transition-colors">
                  <item.icon size={40} className="text-secondary mx-auto mb-4" />
                  <p className="text-sm text-primary uppercase tracking-widest">{item.text}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection 
        title="Let's Feed Animals the Right Way"
        description="Whether you manage a small farm or a large operation, Haritha Farms feed supports ethical growth, healthier animals, and better outcomes."
        primaryAction={{ text: "Enquire About Feed Supply", link: "/contact" }}
        secondaryAction={{ text: "Speak to a Feed Specialist", link: "/contact" }}
      />
    </div>
  );
}
