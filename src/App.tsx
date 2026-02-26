import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Wrench, 
  Wind, 
  ThermometerSnowflake, 
  Settings, 
  Star, 
  MessageCircle, 
  Instagram, 
  Mail, 
  MapPin, 
  Clock,
  Menu,
  X,
  Check,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Target,
  Eye,
  Handshake
} from 'lucide-react';

const WHATSAPP_NUMBER = "5581997855829";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const servicesData = [
  {
    icon: Wrench,
    title: "Manutenção",
    desc: "Limpeza profunda e prevenção para máxima eficiência e ar puro.",
    images: [
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527629856347-97ce23cf5712?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    icon: Wind,
    title: "Instalação",
    desc: "Instalação nos padrões do fabricante, sem dor de cabeça.",
    images: [
      "https://images.unsplash.com/photo-1527629856347-97ce23cf5712?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    icon: ThermometerSnowflake,
    title: "Carga de Gás",
    desc: "Diagnóstico de vazamentos e recarga completa com segurança.",
    images: [
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527629856347-97ce23cf5712?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    icon: Settings,
    title: "Reparos",
    desc: "Consertos rápidos para seu equipamento voltar a gelar.",
    images: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527629856347-97ce23cf5712?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop"
    ]
  }
];

function ServiceCard({ service, index }: { service: typeof servicesData[0], index: number, key?: React.Key }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const width = scrollContainerRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / width);
      setActiveIndex(newIndex);
    }
  };

  const scrollToImage = (idx: number) => {
    if (scrollContainerRef.current) {
      const width = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: width * idx,
        behavior: 'smooth'
      });
    }
  };

  const scrollPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex > 0) scrollToImage(activeIndex - 1);
  };

  const scrollNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex < service.images.length - 1) scrollToImage(activeIndex + 1);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-brand-card hover:bg-brand-card-hover border border-white/5 hover:border-brand-cyan/50 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] flex flex-col"
    >
      {/* Carousel */}
      <div className="relative aspect-[4/3] w-full overflow-hidden group/carousel">
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex w-full h-full overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {service.images.map((img, i) => (
            <div key={i} className="w-full h-full flex-shrink-0 snap-center relative">
              <img src={img} alt={`${service.title} ${i + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              {/* Gradient for dots */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-dark/90 to-transparent pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Desktop Arrows */}
        <button 
          onClick={scrollPrev}
          className={`absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm border border-white/20 opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden md:flex hover:bg-brand-cyan hover:text-brand-dark hover:border-brand-cyan ${activeIndex === 0 ? 'invisible' : ''}`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={scrollNext}
          className={`absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm border border-white/20 opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden md:flex hover:bg-brand-cyan hover:text-brand-dark hover:border-brand-cyan ${activeIndex === service.images.length - 1 ? 'invisible' : ''}`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {service.images.map((_, i) => (
            <button 
              key={i}
              onClick={(e) => { e.stopPropagation(); scrollToImage(i); }}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-brand-cyan w-5' : 'bg-white/40 hover:bg-white/80 w-1.5'}`}
              aria-label={`Ir para imagem ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="w-12 h-12 bg-brand-cyan/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-cyan/20 transition-colors">
          <service.icon className="w-6 h-6 text-brand-cyan" />
        </div>
        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
        <p className="text-brand-muted text-sm leading-relaxed">{service.desc}</p>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-brand-dark text-brand-text selection:bg-brand-cyan selection:text-brand-dark overflow-x-hidden">
      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-brand-dark/90 backdrop-blur-md shadow-lg shadow-black/20 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {/* SVG Customizado Futuro */}
            <div className="w-10 h-10 flex items-center justify-center">
              <span className="text-brand-cyan font-bold text-xl tracking-widest">EC</span>
            </div>
            <span className="font-heading font-bold text-xl tracking-tight">
              Eduardo <span className="text-brand-cyan">Climatização</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('servicos')} className="text-sm font-medium hover:text-brand-cyan transition-colors">Serviços</button>
            <button onClick={() => scrollTo('sobre')} className="text-sm font-medium hover:text-brand-cyan transition-colors">Sobre</button>
            <button onClick={() => scrollTo('avaliacoes')} className="text-sm font-medium hover:text-brand-cyan transition-colors">Avaliações</button>
            <button onClick={() => scrollTo('contato')} className="text-sm font-medium hover:text-brand-cyan transition-colors">Contato</button>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-cyan hover:text-brand-dark transition-all duration-300 shadow-[0_0_15px_rgba(0,229,255,0.15)] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
            >
              <MessageCircle className="w-4 h-4" />
              Agende no WhatsApp
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-brand-text hover:text-brand-cyan transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-brand-card border-b border-white/5 py-4 px-6 flex flex-col gap-4 shadow-2xl md:hidden"
          >
            <button onClick={() => scrollTo('servicos')} className="text-left py-2 text-lg font-medium hover:text-brand-cyan">Serviços</button>
            <button onClick={() => scrollTo('sobre')} className="text-left py-2 text-lg font-medium hover:text-brand-cyan">Sobre</button>
            <button onClick={() => scrollTo('avaliacoes')} className="text-left py-2 text-lg font-medium hover:text-brand-cyan">Avaliações</button>
            <button onClick={() => scrollTo('contato')} className="text-left py-2 text-lg font-medium hover:text-brand-cyan">Contato</button>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-cyan text-brand-dark px-5 py-3 rounded-xl text-base font-bold mt-2"
            >
              <MessageCircle className="w-5 h-5" />
              Agende no WhatsApp
            </a>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-start pt-28 lg:pt-36 pb-12 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1527629856347-97ce23cf5712?q=80&w=2070&auto=format&fit=crop" 
            alt="Ar condicionado moderno" 
            className="w-full h-full object-cover opacity-20 blur-[2px] scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/95 to-brand-dark"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-1/4 -right-64 w-96 h-96 bg-brand-cyan/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-brand-cyan-dark/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="max-w-xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-transparent border border-white/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm"
              >
                <Check className="w-4 h-4 text-brand-cyan" />
                <span className="text-xs font-semibold tracking-wide uppercase text-white/90">ESPECIALISTA EM REFRIGERAÇÃO</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-extrabold leading-[1.2] tracking-tight mb-8"
              >
                <span className="text-brand-cyan">O Clima Perfeito</span><br />
                para o Seu Conforto.
              </motion.h1>

              {/* Mobile Image (Visible only on small screens, immediately below H1) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-full max-w-sm mx-auto mb-8 lg:hidden"
              >
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
                    alt="Eduardo Lopes - Técnico Responsável" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="text-xl font-bold text-white mb-1">Eduardo Lopes</h3>
                    <p className="text-brand-cyan font-medium text-sm">Técnico Responsável</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col gap-3 mb-10 lg:mb-0 w-full sm:max-w-md"
              >
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 bg-brand-cyan text-brand-dark px-6 py-3.5 rounded-xl font-bold text-base overflow-hidden transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] w-full"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                  <span className="relative z-10">Solicitar Orçamento</span>
                  <ArrowRight className="w-5 h-5 relative z-10" />
                </a>
                
                <button 
                  onClick={() => scrollTo('servicos')}
                  className="inline-flex items-center justify-center bg-brand-card text-white border border-white/10 px-6 py-3.5 rounded-xl font-semibold text-base transition-all hover:bg-brand-card-hover hover:border-brand-cyan/30 w-full"
                >
                  Ver Serviços
                </button>
              </motion.div>
            </div>

            {/* Desktop Image (Visible only on lg screens) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block relative w-full max-w-md mx-auto lg:ml-auto"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
                  alt="Eduardo Lopes - Técnico Responsável" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <h3 className="text-2xl font-bold text-white mb-1">Eduardo Lopes</h3>
                  <p className="text-brand-cyan font-medium">Técnico Responsável</p>
                </div>
              </div>
              
              {/* Decorative element behind image */}
              <div className="absolute -inset-4 bg-brand-cyan/20 rounded-[2.5rem] -z-10 blur-xl opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nossa Essência Section */}
      <section className="py-24 bg-brand-dark relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-brand-cyan text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Nossa Essência</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              O que move a <span className="text-brand-cyan">Eduardo Climatização</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Missão */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group bg-[#161B22] border border-white/5 rounded-3xl p-8 flex flex-col transition-all duration-300 hover:border-brand-cyan hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] active:border-brand-cyan active:shadow-[0_0_20px_rgba(0,229,255,0.15)] cursor-pointer"
            >
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-brand-cyan group-active:bg-brand-cyan">
                <Target className="w-7 h-7 text-brand-cyan transition-colors duration-300 group-hover:text-brand-dark group-active:text-brand-dark" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-brand-cyan group-active:text-brand-cyan">Nossa Missão</h3>
              <p className="text-brand-muted leading-relaxed">
                Levar conforto térmico e qualidade de vida para lares e empresas, garantindo um ar puro e climatização eficiente com atendimento humanizado.
              </p>
            </motion.div>

            {/* Card 2: Visão */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group bg-[#161B22] border border-white/5 rounded-3xl p-8 flex flex-col transition-all duration-300 hover:border-brand-cyan hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] active:border-brand-cyan active:shadow-[0_0_20px_rgba(0,229,255,0.15)] cursor-pointer"
            >
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-brand-cyan group-active:bg-brand-cyan">
                <Eye className="w-7 h-7 text-brand-cyan transition-colors duration-300 group-hover:text-brand-dark group-active:text-brand-dark" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-brand-cyan group-active:text-brand-cyan">Nossa Visão</h3>
              <p className="text-brand-muted leading-relaxed">
                Consolidar-se como a maior autoridade em climatização de Pernambuco, sendo sinônimo permanente de excelência técnica e confiança.
              </p>
            </motion.div>

            {/* Card 3: Valores */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group bg-[#161B22] border border-white/5 rounded-3xl p-8 flex flex-col transition-all duration-300 hover:border-brand-cyan hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] active:border-brand-cyan active:shadow-[0_0_20px_rgba(0,229,255,0.15)] cursor-pointer"
            >
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-brand-cyan group-active:bg-brand-cyan">
                <Handshake className="w-7 h-7 text-brand-cyan transition-colors duration-300 group-hover:text-brand-dark group-active:text-brand-dark" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-brand-cyan group-active:text-brand-cyan">Nossos Valores</h3>
              <p className="text-brand-muted leading-relaxed">
                Transparência no orçamento, pontualidade técnica, limpeza impecável no serviço e honestidade acima de tudo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Nossos <span className="text-brand-cyan">Serviços</span></h2>
            <p className="text-brand-muted max-w-2xl mx-auto">Soluções completas para garantir o melhor desempenho e durabilidade do seu equipamento.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Image & Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/hvac/1280/720" 
                  alt="Instalação de Ar Condicionado Premium" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-8 bg-[#1A1A1A]/60 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(0,229,255,0.2)] rounded-2xl p-4 md:p-5 flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-full bg-brand-cyan/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-brand-cyan" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm md:text-base leading-tight">Credenciado<br/>Midea</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Text & Authority */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-3">
                <span className="text-brand-cyan text-sm font-bold tracking-widest uppercase">
                  Excelência Técnica
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                O <span className="text-brand-cyan">padrão de qualidade</span> que seu equipamento exige.
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Na Eduardo Climatização, não entregamos apenas ar frio, entregamos durabilidade e segurança. Trabalhamos com ferramentas de ponta e seguimos rigorosamente os manuais dos fabricantes.
              </p>
              
              {/* Callout Box */}
              <div className="bg-[#1A1A1A] border-l-4 border-brand-cyan rounded-r-xl p-6 shadow-lg">
                <p className="text-white font-medium leading-relaxed">
                  Somos especialistas técnicos e Credenciados Oficiais MIDEA. Garantimos que a sua instalação ou manutenção mantenha a garantia de fábrica intacta, com serviço de altíssimo nível.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="avaliacoes" className="py-24 bg-brand-card relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-cyan/5 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">O que nossos <span className="text-brand-cyan">clientes dizem</span></h2>
            <p className="text-brand-muted max-w-2xl mx-auto">A satisfação de quem já experimentou o clima perfeito.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: "Ta parecendo o polo norte aqui no quarto. Brabo de mais.",
                author: "Fylip Nyo"
              },
              {
                text: "Um super profissional. Trabalha muito bem. Agora só faço minha manutenção com ele. Super indico.",
                author: "Wivian Paula"
              },
              {
                text: "Um bom profissional, faz o serviço certo e com preço justo.",
                author: "Rennato Lopes"
              }
            ].map((review, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brand-dark border border-white/5 rounded-2xl p-8 flex flex-col h-full"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg font-medium leading-relaxed mb-8 flex-grow">"{review.text}"</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan font-bold">
                    {review.author.charAt(0)}
                  </div>
                  <span className="font-semibold">{review.author}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Review CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-lg md:text-xl mb-6">Já é nosso cliente?</p>
            <a 
              href="#" 
              className="inline-flex items-center gap-3 bg-[#1A1A1A] border border-brand-cyan/30 px-6 py-4 rounded-xl shadow-[0_0_15px_rgba(0,229,255,0.15)] hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:border-brand-cyan transition-all duration-300 group"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-white font-bold group-hover:text-brand-cyan transition-colors">Avalie-nos no Google</span>
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Atendimento Especializado na Grande Recife</h2>
          <div className="flex items-center justify-center gap-2 text-brand-cyan mb-10">
            <MapPin className="w-5 h-5" />
            <span className="font-medium text-lg">Qualidade técnica onde você estiver</span>
          </div>
          
          <div className="max-w-4xl w-full mx-auto rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(0,229,255,0.1)] border border-white/5">
            <iframe 
              src="https://maps.google.com/maps?q=R.%20Alto%2013%20de%20Maio,%202911%20%E2%80%93%20Nova%20Descoberta,%20Recife%20%E2%80%93%20PE&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              className="w-full h-[300px] md:h-[400px] border-0" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Eduardo Climatização"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer & Contact Section */}
      <section id="contato" className="pt-24 pb-12 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Final CTA */}
          <div className="bg-gradient-to-br from-brand-card to-brand-card-hover border border-white/10 rounded-3xl p-10 md:p-16 text-center mb-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-cyan-dark/10 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
                <span className="block whitespace-nowrap">Não passe calor</span>
                <span className="block mt-2">Fale com Eduardo agora mesmo!</span>
              </h2>
              <p className="text-brand-muted text-lg mb-10">Agende seu serviço hoje e garanta o clima ideal para sua casa ou empresa.</p>
              
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 bg-brand-cyan text-brand-dark px-10 py-5 rounded-xl font-bold text-xl overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_50px_rgba(0,229,255,0.5)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <span className="relative z-10">Falar no WhatsApp</span>
                <ArrowRight className="w-7 h-7 relative z-10" />
              </a>
            </div>
          </div>

          {/* Footer Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 border-t border-white/10 pt-16">
            
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                {/* SVG Customizado Futuro */}
                <div className="w-10 h-10 flex items-center justify-center">
                  <span className="text-brand-cyan font-bold text-xl tracking-widest">EC</span>
                </div>
                <span className="font-heading font-bold text-xl tracking-tight">
                  Eduardo <span className="text-brand-cyan">Climatização</span>
                </span>
              </div>
              <p className="text-brand-muted text-sm leading-relaxed">
                Excelência em refrigeração e climatização em Recife. Seu conforto é a nossa prioridade.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Contato</h4>
              <ul className="space-y-4">
                <li>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-brand-muted hover:text-brand-cyan transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>(81) 99785-5829</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:lopeseduda30@gmail.com" className="flex items-center gap-3 text-brand-muted hover:text-brand-cyan transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>lopeseduda30@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/edu.climar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-brand-muted hover:text-brand-cyan transition-colors">
                    <Instagram className="w-5 h-5" />
                    <span>@edu.climar</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Endereço</h4>
              <div className="flex items-start gap-3 text-brand-muted">
                <MapPin className="w-5 h-5 shrink-0 mt-1" />
                <span className="leading-relaxed">
                  R. Alto 13 de Maio, 2911<br />
                  Nova Descoberta<br />
                  Recife – PE, 52081-040
                </span>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Horário</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-brand-muted">
                  <Clock className="w-5 h-5 shrink-0" />
                  <span>Seg a Sáb: 09:00 – 18:00</span>
                </li>
                <li className="flex items-center gap-3 text-brand-muted">
                  <div className="w-5 h-5 shrink-0" />
                  <span>Domingo: Fechado</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="text-center pt-8 border-t border-white/5 text-brand-muted text-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© 2026 Eduardo Climatização. Todos os direitos reservados.</p>
            <p>
              Desenvolvido por{' '}
              <a 
                href="https://atlassolucoes.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-cyan hover:text-white transition-colors font-medium"
              >
                Atlas Soluções Digitais
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform duration-300 flex items-center justify-center animate-bounce"
        style={{ animationDuration: '3s' }}
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.a>
    </div>
  );
}
