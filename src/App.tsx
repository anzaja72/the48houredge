import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Brain, 
  Battery, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Gift, 
  MapPin,
  Menu,
  X
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/573108410730?text=Hola,%20quiero%20reservar%20mi%20plaza%20en%20The%2048-Hour%20Edge.";

  return (
    <div className="min-h-screen bg-background font-sans text-text-primary overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
              <span className="text-primary font-serif font-bold text-xl">W</span>
            </div>
            <span className={`font-serif font-bold text-xl tracking-wide ${isScrolled ? 'text-white' : 'text-white'}`}>
              THE 48-HOUR EDGE
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => document.getElementById('metodo')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide">EL MÉTODO</button>
            <button onClick={() => document.getElementById('valor')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide">EL VALOR</button>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-accent/90 text-white px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(201,63,53,0.3)]">
              Agendar Asesoría
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-primary border-t border-white/10 p-4 flex flex-col gap-4 shadow-xl">
            <button onClick={() => { document.getElementById('metodo')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="text-white text-left py-2 font-medium">El Método</button>
            <button onClick={() => { document.getElementById('valor')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="text-white text-left py-2 font-medium">El Valor</button>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-accent text-white px-6 py-3 rounded-full font-semibold w-full text-center mt-2 block">
              Agendar Asesoría
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center pt-20 pb-16 overflow-hidden bg-primary">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-80"
          >
            <source src="https://i.imgur.com/FBnUsHp.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-background/30 bg-background/10 backdrop-blur-sm mb-8">
                <MapPin size={16} className="text-background" />
                <span className="text-background text-sm font-medium tracking-widest uppercase">Hotel Waya Guajira</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
                Recupera tu Claridad Mental y tu <span className="text-gradient">Ventaja Competitiva</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
                Un retiro de inmersión total diseñado exclusivamente para empresarios y líderes de alto rendimiento que no pueden permitirse 15 días de vacaciones, pero necesitan un "reinicio" biológico y mental inmediato.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(201,63,53,0.4)] flex items-center justify-center gap-2">
                  QUIERO RECUPERAR MI VENTAJA
                  <ArrowRight size={20} />
                </a>
                <span className="text-white/60 text-sm font-medium">Solo 12 plazas disponibles</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Agitation */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              ¿Sientes que estás operando al 30% de tu capacidad?
            </h2>
            <p className="text-xl text-text-secondary">
              El problema no es que te falte trabajo, es que te falta espacio mental.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} className="glass-card p-8 rounded-2xl">
              <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                <Brain className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Decisiones Lentas</h3>
              <p className="text-text-secondary leading-relaxed">
                Tomas decisiones más lento que hace un año. La niebla mental te impide ver con claridad el panorama completo de tu negocio.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="glass-card p-8 rounded-2xl">
              <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                <Battery className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Ruido Digital</h3>
              <p className="text-text-secondary leading-relaxed">
                El constante bombardeo de información y notificaciones no te deja ver el siguiente gran paso estratégico.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="glass-card p-8 rounded-2xl border-accent/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full -z-10"></div>
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Clock className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Burnout sin Tiempo</h3>
              <p className="text-text-secondary leading-relaxed">
                Estás "quemado", pero tu agenda no te permite desaparecer en un retiro espiritual de un mes en la India.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Solution (Método Siruma) */}
      <section id="metodo" className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Presentamos el <span className="text-accent">Método Siruma</span>
              </h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                Una estructura de 48 horas en el Hotel Waya Guajira que utiliza la sabiduría Wayuu y la ciencia del descanso para devolverte tu capacidad de enfoque.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 border border-accent/50 flex items-center justify-center text-accent font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-2">Día 1: Desconexión y Silencio</h3>
                    <p className="text-white/70">Eliminamos el cortisol de tu sistema. Un aterrizaje suave para desconectar la mente reactiva y preparar el cuerpo.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 border border-accent/50 flex items-center justify-center text-accent font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-2">Día 2: Tejiendo los Elementos</h3>
                    <p className="text-white/70">Claridad estratégica mediante terapia de sonido, inmersión en la naturaleza y conexión profunda con tu propósito.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 border border-accent/50 flex items-center justify-center text-accent font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-2">Día 3: El Renacer</h3>
                    <p className="text-white/70">Integración y plan de acción cristalino para tu regreso al mundo real, operando al 100% de tu capacidad.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                <img 
                  src="https://i.imgur.com/AcCjHta.jpg" 
                  alt="Meditación y claridad" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-8 left-8 right-8 dark-glass-card p-6 rounded-xl">
                  <p className="text-white/90 italic font-serif text-lg mb-4">
                    "Entré con la mente nublada y salí con el plan estratégico más claro de los últimos 3 años de mi empresa."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20">
                       <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt="CEO" className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <p className="font-bold text-white">Carlos Mendoza</p>
                      <p className="text-sm text-accent">CEO, TechLogistics Latam</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Value Stack */}
      <section id="valor" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              El Valor de tu Claridad
            </h2>
            <p className="text-xl text-text-secondary">
              Todo lo que necesitas para un reinicio total, sin fricciones.
            </p>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-8 md:p-10 space-y-6">
                {[
                  { title: "Alojamiento Premium Todo Incluido (2 Noches)", desc: "Dormirás en un santuario de sostenibilidad y confort.", val: "$1.940.000 COP" },
                  { title: "Protocolo de Alimentación 'YOOTOO' & 'KAI'", desc: "Nutrición diseñada para desinflamar el cerebro y aumentar la energía.", val: "$600.000 COP" },
                  { title: "Ceremonia 'Fuego de Intención' y Terapia de Sonido", desc: "Herramientas ancestrales para eliminar bloqueos mentales.", val: "$800.000 COP" },
                  { title: "Transporte Privado VIP (Aeropuerto - Hotel - Aeropuerto)", desc: "Cero fricción. Nosotros nos encargamos de todo desde que aterrizas.", val: "$350.000 COP" }
                ].map((item, i) => (
                  <FadeIn key={i} delay={i * 0.1} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-accent/30 transition-colors">
                    <div className="flex items-start gap-4 mb-4 sm:mb-0">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h4 className="font-bold text-lg text-primary">{item.title}</h4>
                        <p className="text-text-secondary text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                    <div className="sm:text-right pl-12 sm:pl-0">
                      <span className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Valor</span>
                      <p className="font-mono font-bold text-primary">{item.val}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
              
              <div className="bg-primary p-8 md:p-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between">
                <div>
                  <p className="text-white/80 text-lg">Valor Total Real:</p>
                  <p className="text-3xl md:text-4xl font-serif font-bold text-white line-through opacity-70">$3.690.000 COP</p>
                </div>
                <div className="mt-6 sm:mt-0 text-center sm:text-right">
                  <p className="text-accent font-bold text-xl mb-2">Tu Inversión Hoy</p>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(201,63,53,0.3)]">
                    Ver Oferta Especial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Bonos Exclusivos
            </h2>
            <p className="text-xl text-text-secondary">
              Solo para los 12 líderes de esta cohorte.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Guía 'Bio-Hack de Desintoxicación Digital'", desc: "Prepara tu cerebro 7 días antes del retiro para maximizar resultados.", val: "$250.000" },
              { title: "Sesión de Integración Post-Retiro (Zoom)", desc: "15 días después, nos reunimos para asegurar que la claridad se traduzca en ingresos.", val: "$750.000" },
              { title: "Audio-Librería de Sonidos Ancestrales", desc: "Llévate la terapia de sonido a casa para inducir estados de enfoque profundo.", val: "$300.000" }
            ].map((bono, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 rounded-2xl shadow-lg border border-accent/10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-0 right-0 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-bl-lg">
                  GRATIS
                </div>
                <Gift className="text-accent mb-6" size={32} />
                <h3 className="text-xl font-bold text-primary mb-3">BONO {i + 1}: {bono.title}</h3>
                <p className="text-text-secondary mb-6">{bono.desc}</p>
                <p className="text-sm font-semibold text-gray-400">Valor real: <span className="line-through">{bono.val}</span></p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee & Scarcity */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <ShieldCheck className="text-accent mx-auto mb-8" size={64} />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Garantía de "Paz Mental"
            </h2>
            <p className="text-xl text-white/80 leading-relaxed italic mb-12">
              "Estamos tan seguros de que este protocolo te devolverá tu claridad mental, que si al terminar el segundo día sientes que no ha habido un cambio real en tu estado, te devolvemos el 100% de lo pagado por el programa de transformación. Sin preguntas incómodas."
            </p>
            
            <div className="inline-block border border-accent/30 bg-accent/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-accent mb-2">Solo 12 plazas disponibles por fecha.</h3>
              <p className="text-white/70 max-w-xl mx-auto">
                No es por marketing, es por profundidad. No podemos guiar a 100 personas a través de la ceremonia 'Siruma' con la atención que un líder de tu nivel requiere. Una vez que se llenen los 12 cupos, la puerta se cierra.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta-section" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/8MKnpg1.jpg" 
            alt="Guajira Experience" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/90"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">
              ¿Cuál es la excusa que te detiene?
            </h2>
            <p className="text-2xl text-white/80 mb-12">
              El mercado no espera a los que dudan.
            </p>
            
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-2">Asegura tu lugar hoy</h3>
              <p className="text-text-secondary mb-8">Reserva tu plaza con el 50% y comienza tu preparación.</p>
              
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-[1.02] shadow-[0_10px_30px_rgba(86,35,24,0.2)] flex items-center justify-center gap-3 mb-4">
                QUIERO RECUPERAR MI VENTAJA
                <ArrowRight size={24} className="text-accent" />
              </a>
              
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 font-medium">
                <ShieldCheck size={16} className="text-green-600" />
                <span>Pago 100% seguro y garantizado</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary border-t border-white/10 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
            <span className="text-accent font-serif font-bold text-2xl">W</span>
          </div>
          <p className="text-white/60 font-serif text-lg mb-2">THE 48-HOUR EDGE</p>
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Hotel Waya Guajira. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
