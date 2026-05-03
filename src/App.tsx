/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';
import { Scale, Users, ShieldCheck, Award, MessageSquare, Phone, Mail, MapPin, CheckCircle, Menu, X, ArrowRight } from 'lucide-react';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

const Counter = ({ value, suffix = "", prefix = "" }: { value: number, suffix?: string, prefix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <span ref={ref} className="block text-4xl font-serif text-gold font-bold mb-1">
      {prefix}<motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
};

const SectionTitle = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-16 text-center">
    <FadeIn>
      <h2 className={`text-4xl md:text-5xl font-serif mb-4 ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {subtitle && <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-white/70' : 'text-navy/70'}`}>{subtitle}</p>}
      <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
    </FadeIn>
  </div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const waLink = "https://wa.me/5511900000000";

  return (
    <div className="relative font-sans text-navy">
      {/* WhatsApp Link Fixed Button */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 448 512" fill="currentColor" className="w-6 h-6">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.7 68.9 27.1 106.1 27.1h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.5-.3-8.4 2.4-11.2 2.5-2.5 5.5-6.4 8.3-9.6 2.8-3.2 3.7-5.5 5.6-9.2 1.9-3.7 1-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.5 32.8-13.4 37.4-26.3 4.6-13 4.6-24.1 3.2-26.3-1.4-2.2-5-3.6-10.5-6.4z"/>
        </svg>
        <div className="absolute right-full mr-4 bg-navy text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Fale conosco no WhatsApp
        </div>
      </a>

      {/* 1. Header Fixo */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-navy/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-serif font-bold text-white tracking-widest uppercase">
              Dra. Nathiellen
            </span>
            <span className="text-[10px] text-gold tracking-widest flex items-center gap-2">
              <Scale size={10} /> OAB/SP 00.000
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="nav-link text-white text-sm">Início</a>
            <a href="#sobre" className="nav-link text-white text-sm">Sobre</a>
            <a href="#atuacao" className="nav-link text-white text-sm">Áreas de Atuação</a>
            <a href="#depoimentos" className="nav-link text-white text-sm">Depoimentos</a>
            <a href="#contato" className="nav-link text-white text-sm">Contato</a>
            <a href={waLink} className="btn-gold text-xs px-6 py-2">AGENDAR CONSULTA</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-navy flex flex-col items-center justify-center space-y-8 text-white">
            <button
              className="absolute top-6 right-6"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif">Início</a>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif">Sobre</a>
            <a href="#atuacao" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif">Áreas de Atuação</a>
            <a href="#depoimentos" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif">Depoimentos</a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif">Contato</a>
            <a href={waLink} className="btn-gold">AGENDAR CONSULTA</a>
          </div>
        )}
      </header>

      {/* 2. Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden pt-32 pb-20">
        {/* Background Image with Professional Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://res.cloudinary.com/dxpwgum9x/image/upload/v1777826666/interior-design-neoclassical-style-with-furnishings-decor_cpercc.jpg')" }}
        ></div>
        {/* Navy Gradient Overlays for Depth and Readability */}
        <div className="absolute inset-0 bg-linear-to-b from-navy/95 via-navy/60 to-navy"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-navy/80"></div>
        
        <div className="relative z-10 max-w-5xl">
          <FadeIn>
            <div className="flex flex-col items-center mb-6">
              <div className="w-12 h-px bg-gold mb-6 animate-pulse"></div>
              <span className="text-gold tracking-[0.4em] text-xs md:text-sm uppercase font-bold drop-shadow-sm">Advocacia de Alto Padrão</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-10 leading-tight drop-shadow-2xl">
              Dra. Nathiellen<br />
              <span className="text-3xl md:text-5xl lg:text-6xl text-gold/90 block mt-6 font-light italic">Direito do Consumidor</span>
            </h1>
            <p className="text-xl md:text-3xl text-white/80 font-light mb-14 italic max-w-3xl mx-auto leading-relaxed">
              "Defendendo seus direitos com precisão técnica e resultados excepcionais."
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <a href={waLink} className="btn-gold text-lg px-12 py-5 flex items-center gap-4 shadow-2xl">
                Agendar Consulta <ArrowRight size={22} />
              </a>
              <a href="#atuacao" className="btn-outline text-lg px-12 py-5 backdrop-blur-sm bg-white/5">
                Áreas de Atuação
              </a>
            </div>
          </FadeIn>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40">
          <div className="w-px h-16 bg-linear-to-b from-gold/50 to-transparent animate-pulse"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] mt-4 font-bold">Discover</span>
        </div>
      </section>

      {/* 3. Sobre */}
      <section id="sobre" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative group">
              <div className="aspect-[4/5] bg-navy border-2 border-gold/30 rounded-sm overflow-hidden relative z-10">
                <img 
                  src="https://res.cloudinary.com/dxpwgum9x/image/upload/v1777826692/portrait-smiling-successful-businesswoman-looking-into-camera-sitting-restaurant-business-lady-with-stylish-hairstyle-wears-elegant-suit-business-meeting-attractive-appearance_ygyfbz.jpg"
                  alt="Dra. Nathiellen"
                  className="w-full h-full object-cover grayscale-25 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <h3 className="text-white font-serif text-3xl">Dra. Nathiellen</h3>
                  <p className="text-gold text-sm uppercase tracking-[0.2em] font-bold">Especialista em Direito do Consumidor</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full border border-gold translate-x-4 translate-y-4 -z-0 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            </div>
          </FadeIn>
          
          <div className="space-y-8">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-serif text-navy">Tradição e Modernidade na <span className="text-gold italic">Defesa dos seus Direitos.</span></h2>
              <div className="w-20 h-1 bg-gold my-6"></div>
              <div className="space-y-6 text-lg text-navy/70 leading-relaxed font-light">
                <p>
                  Com sólida formação em Direito do Consumidor e atuação estratégica perante os principais tribunais do país, a Dra. Nathiellen fundou este escritório com a missão de oferecer uma advocacia artesanal, onde cada caso é tratado com exclusividade e rigor técnico.
                </p>
                <p>
                   Nossos valores são pautados na transparência absoluta, ética inegociável e compromisso inabalável com o sucesso de nossos clientes, protegendo cada consumidor contra abusos e garantindo o cumprimento fiel da legislação.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
              {[
                { label: "Anos de Experiência", value: 10, prefix: "+" },
                { label: "Casos Atendidos", value: 300, prefix: "+" },
                { label: "Taxa de Êxito", value: 95, suffix: "%" },
              ].map((stat, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="text-center md:text-left">
                    <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    <span className="text-xs uppercase tracking-widest text-navy/60">{stat.label}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Áreas de Atuação */}
      <section id="atuacao" className="section-padding bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Especialidades Jurídicas" subtitle="Oferecemos soluções completas e específicas para cada desafio jurídico enfrentado por nossos clientes." light />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Direito Civil", desc: "Consultoria e contencioso em contratos, responsabilidade civil e obrigações.", icon: <ShieldCheck size={40} className="text-gold" /> },
              { title: "Direito de Família", desc: "Assessoria humanizada em inventários, divórcios, guardas e sucessões.", icon: <Users size={40} className="text-gold" /> },
              { title: "Direito Trabalhista", desc: "Defesa técnica de direitos laborais para pessoas físicas e empresas.", icon: <Award size={40} className="text-gold" /> },
              { title: "Direito Previdenciário", desc: "Planejamento e revisões de aposentadorias e benefícios do INSS.", icon: <Scale size={40} className="text-gold" /> },
              { title: "Direito do Consumidor", desc: "Atuação contra práticas abusivas e reparação de danos morais e materiais.", icon: <CheckCircle size={40} className="text-gold" /> },
              { title: "Consultoria Empresarial", desc: "Compliance e assessoria jurídica preventiva para o crescimento seguro do seu negócio.", icon: <MessageSquare size={40} className="text-gold" /> },
            ].map((area, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group p-10 bg-white/5 border border-white/10 hover:border-gold/50 transition-all duration-300 rounded-sm">
                  <div className="mb-6">{area.icon}</div>
                  <h3 className="text-2xl font-serif mb-4 group-hover:text-gold transition-colors">{area.title}</h3>
                  <p className="text-white/60 font-light leading-relaxed">{area.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Por que nos escolher */}
      <section className="section-padding bg-offwhite">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Diferenciais Estratégicos" subtitle="Nosso compromisso vai além do processo. Construímos relacionamentos baseados na confiança e na competência profissional." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { title: "Atendimento Humanizado", desc: "Cada cliente é único. Ouvimos sua história para construir a melhor estratégia jurídica possível.", icon: <Users size={48} className="text-gold mx-auto mb-6" /> },
              { title: "Sigilo Absoluto", desc: "Tratamos suas informações com o mais alto nível de confidencialidade e segurança profissional.", icon: <ShieldCheck size={48} className="text-gold mx-auto mb-6" /> },
              { title: "Resultados Comprovados", desc: "Nossa trajetória é marcada por decisões favoráveis e satisfação comprovada de nossos clientes.", icon: <Award size={48} className="text-gold mx-auto mb-6" /> },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <div className="p-8">
                  {item.icon}
                  <h3 className="text-2xl font-serif mb-4 text-navy">{item.title}</h3>
                  <p className="text-navy/60 font-light leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Depoimentos */}
      <section id="depoimentos" className="section-padding bg-navy relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="A Voz de Nossos Clientes" subtitle="A satisfação dos nossos clientes é o maior testemunho da nossa competência e dedicação profissional." light />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sílvia Medeiros", text: "Dr. [Nome] foi extremamente profissional e atencioso em meu processo de inventário. Tive total segurança durante todo o tempo.", role: "Empresária" },
              { name: "Ricardo Santos", text: "Excelente advogado trabalhista. Conseguiu reverter uma situação difícil com muita técnica e paciência. Recomendo fortemente.", role: "Engenheiro" },
              { name: "Helena Alencar", text: "Atendimento impecável. A clareza nas explicações e a ética demonstrada me deram muita tranquilidade em meu caso civil.", role: "Arquiteta" },
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-10 relative border-t-8 border-gold rounded-sm shadow-xl">
                  <div className="flex mb-4 text-gold">
                    {[...Array(5)].map((_, j) => <Scale key={j} size={14} className="fill-gold" />)}
                  </div>
                  <p className="text-navy/70 italic mb-8 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center text-navy/30">
                      <Users size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif text-navy font-bold leading-none">{t.name}</h4>
                      <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">{t.role}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Final */}
      <section className="section-padding bg-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-navy opacity-5"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-serif text-navy mb-8 leading-tight">
               Não deixe sua <span className="italic">segurança jurídica</span> para depois.
            </h2>
            <p className="text-xl text-navy/80 mb-12 font-light max-w-2xl mx-auto">
              Seja para uma consultoria preventiva ou uma defesa estratégica, estamos prontos para oferecer o suporte jurídico que você merece.
            </p>
            <div className="flex flex-col md:row items-center justify-center gap-6">
              <a href={waLink} className="bg-navy text-white px-12 py-5 text-xl font-bold rounded-sm shadow-2xl hover:scale-105 active:scale-95 transition-transform flex items-center gap-4">
                 Fale Conosco agora no WhatsApp <Phone size={24} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. Footer */}
      <footer id="contato" className="bg-navy text-white pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="space-y-6">
               <h3 className="text-2xl font-serif font-bold text-white tracking-widest uppercase">Dra. Nathiellen</h3>
               <p className="text-white/50 font-light leading-relaxed">
                 OAB/SP 00.000<br />
                 Advocacia com ética, precisão e resultado.
               </p>
            </div>
            
            <div className="space-y-6">
               <h4 className="text-gold text-xs font-bold uppercase tracking-widest">Acesso Rápido</h4>
               <ul className="space-y-4 text-sm font-light text-white/70">
                 <li><a href="#inicio" className="hover:text-gold transition-colors">Início</a></li>
                 <li><a href="#sobre" className="hover:text-gold transition-colors">Sobre</a></li>
                 <li><a href="#atuacao" className="hover:text-gold transition-colors">Áreas de Atuação</a></li>
                 <li><a href="#depoimentos" className="hover:text-gold transition-colors">Depoimentos</a></li>
               </ul>
            </div>

            <div className="space-y-6">
               <h4 className="text-gold text-xs font-bold uppercase tracking-widest">Informações</h4>
               <ul className="space-y-4 text-sm font-light text-white/70">
                 <li><a href="#" className="hover:text-gold transition-colors">Termos de Uso</a></li>
                 <li><a href="#" className="hover:text-gold transition-colors">Privacidade</a></li>
                 <li className="text-[10px] uppercase tracking-widest text-white/30 italic">O conteúdo deste site não constitui serviço jurídico.</li>
               </ul>
            </div>

            <div className="space-y-6">
               <h4 className="text-gold text-xs font-bold uppercase tracking-widest">Contatos</h4>
               <ul className="space-y-4 text-sm font-light text-white/70">
                 <li className="flex items-start gap-3">
                   <Phone size={16} className="text-gold shrink-0 mt-1" />
                   (11) 9 0000-0000
                 </li>
                 <li className="flex items-start gap-3">
                   <Mail size={16} className="text-gold shrink-0 mt-1" />
                   contato@escritorio.com.br
                 </li>
                 <li className="flex items-start gap-3">
                   <MapPin size={16} className="text-gold shrink-0 mt-1" />
                   [Cidade], [Estado]<br />
                   Rua Fictícia, 123 - Centro
                 </li>
               </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6 text-[11px] uppercase tracking-widest text-white/30">
             <p>© 2026 Escritório Dra. Nathiellen. Todos os direitos reservados.</p>
             <p>Desenvolvido com excelência estratégica</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
