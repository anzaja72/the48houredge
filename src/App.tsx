import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { InfiniteSlider } from './components/ui/infinite-slider';
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

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
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
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center shadow-md">
              <img src="https://i.imgur.com/nSJE6Ew.png" alt="Logo" className="w-9 h-9 object-contain" />
            </div>
            <span className={`font-serif font-bold text-xl tracking-wide ${isScrolled ? 'text-white' : 'text-white'}`}>
              El despertar de la Luna Grande
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
            <source src="https://i.imgur.com/3RO9lx2.mp4" type="video/mp4" />
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
                Lidere con Claridad Absoluta: <span className="text-gradient">48 Horas de Recalibración Estratégica con la Luna Wesak.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
                Silencie el ruido, reconecte con su visión y lidere con la claridad de quien ya ha conquistado el éxito. A través de un viaje de transformación y bienestar diseñado exclusivamente para empresarios y lideres de alto rendimiento que no pueden permitirse 15 dias de vacaciones, pero necesitan un “reinicio” biológico y mental inmendiato.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(201,63,53,0.4)] flex items-center justify-center gap-2">
                  Aplicar para el Protocolo de Luna Wesak
                  <ArrowRight size={20} />
                </a>
                <span className="text-white/60 text-sm font-medium">Solo 30 plazas disponibles, única fecha.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logos Carousel */}
      <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
            EMPRESAS QUE NOS RESPALDAN
          </p>
        </div>
        <InfiniteSlider gap={48} speed={25} className="w-full bg-white">
          <img
            src="https://i.imgur.com/tmmX8SH.png"
            alt="Logo 1"
            className="h-[60px] w-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
          />
          <img
            src="https://i.imgur.com/owbahYd.png"
            alt="Logo 2"
            className="h-[60px] w-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
          />
          <img
            src="https://i.imgur.com/3lwVYlv.png"
            alt="Logo 3"
            className="h-[60px] w-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
          />
          {/* Repeat logos to ensure the slider is wide enough */}
          <img
            src="https://i.imgur.com/tmmX8SH.png"
            alt="Logo 1"
            className="h-[60px] w-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
          />
          <img
            src="https://i.imgur.com/owbahYd.png"
            alt="Logo 2"
            className="h-[60px] w-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
          />
          <img
            src="https://i.imgur.com/3lwVYlv.png"
            alt="Logo 3"
            className="h-[60px] w-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
          />
        </InfiniteSlider>
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
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 uppercase">
                Presentamos el <span className="text-accent">DESPERTAR DE LA LUNA GRANDE</span>
              </h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                La experiencia que combina la sabiduría Wayuu y frecuencias del sonido para aprovechar la ventana energética más importante del año, llevándote a un estado de calma, coherencia y expansión.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 border border-accent/50 flex items-center justify-center text-accent font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-2">Día 1: Reset estratégico de desconexión y alta vibración.</h3>
                    <p className="text-white/70">Bajo la luz de la luna Wesak se realiza la ceremonia de Iluminación con una sesión de Gong de alta frecuencia para eliminar el cortisol (hormona del estrés) y resetear el sistema nervioso.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 border border-accent/50 flex items-center justify-center text-accent font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-2">Día 2: RECALIBRACIÓN DE LOS 4 ELEMENTOS</h3>
                    <p className="text-white/70">Una metodología de 4 fases para reconectar con su propósito, potenciar su resiliencia ante la incertidumbre y eliminar el ruido mental que le impide tomar decisiones estratégicas.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 border border-accent/50 flex items-center justify-center text-accent font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-2">Día 3: El Renacer y la integración de la práctica</h3>
                    <p className="text-white/70">Sentirás que invertiste 3 días para ganar 12 meses de claridad, enfoque y pensamientos con intención y propósito.</p>
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
                  { title: "Alojamiento Premium Todo Incluido (2 noches - 3 dias):", desc: "Dormirás en un santuario de sostenibilidad y confort.", val: "$1.940.000 COP" },
                  { title: "Protocolo de Alimentación 'YOOTOO' & 'KAI'", desc: "Nutrición diseñada para desinflamar el cerebro y aumentar la energía.", val: "$600.000 COP" },
                  { title: "Ceremonia 'Fuego de Intención' y Terapia de Sonido", desc: "Herramientas ancestrales para eliminar bloqueos mentales.", val: "$800.000 COP" }
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
                  <p className="text-white/60 text-xs mt-3 max-w-xs mx-auto sm:ml-auto sm:mr-0 italic">
                    "Al hacer clic, agendarás una breve llamada de validación para asegurar que este protocolo es el fit adecuado para tus objetivos actuales."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilitadores */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Guiados por Expertos
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
                <img src="https://i.imgur.com/X5HYxSp.jpg" alt="Xiomara Pedreros" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Xiomara Pedreros</h3>
              <p className="text-text-secondary leading-relaxed italic text-sm">
                “Con 30 años de trayectoria, mi enfoque no es la terapia convencional, sino la recalibración de sistemas personales por medio del sonido. Utilizo instrumentos sonoros de alta frecuencia y la biodescodificación transgeneracional para identificar y eliminar los bloqueos invisibles que frenan la toma de decisiones. Mi intervención limpia el ruido de su biología y su historia, permitiéndole liderar desde la claridad absoluta, no desde el agotamiento”
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
                <img src="https://i.imgur.com/vJ77zt3.jpg" alt="León Darío Montoya Piedrahita" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">León Darío Montoya</h3>
              <p className="text-text-secondary leading-relaxed italic text-sm">
                "No solo soy un Maestro del Gong formado por el Instituto Internacional de Terapia de Sonido; soy Abogado y Empresario. Esta dualidad me permite entender el peso real de la responsabilidad corporativa. Bajo la mentoría directa de Vickrampal (Fundación de Musicoterapia de Madrid), utilizo el sonido no como un ritual, sino como una herramienta técnica de precisión para resetear el sistema nervioso de quienes, como yo, sostenemos grandes responsabilidades sobre los hombros."
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
                <img src="https://i.imgur.com/F6IMlfM.jpg" alt="Gloria" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Gloria</h3>
              <p className="text-text-secondary leading-relaxed italic text-sm">
                "Especialista en integración de bienestar corporativo y reconexión energética. Mi propósito es acompañar a líderes en su proceso de recalibración, asegurando que la experiencia del retiro se traduzca en una transformación sostenible. A través de prácticas de mindfulness y alineación de propósitos, facilito el puente entre la claridad mental obtenida y su aplicación práctica en entornos de alta exigencia."
              </p>
            </FadeIn>
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
              <h3 className="text-2xl font-bold text-accent mb-2">Solo 30 plazas disponibles por fecha.</h3>
              <p className="text-white/70 max-w-xl mx-auto">
                No es por marketing, es por profundidad. No podemos guiar a 100 personas a través de la Ceremonia 'El despertar de la luna grande' con la atención que un líder de tu nivel requiere. Una vez que se llenen los 30 cupos, la puerta se cierra.
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
              El costo de la inacción es mayor que el costo de esta inversión. El mercado no espera a los que dudan.
            </p>
            
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-2">Asegura tu lugar hoy</h3>
              <p className="text-text-secondary mb-8">Reserva tu plaza con el 50% y comienza tu preparación.</p>
              
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-[1.02] shadow-[0_10px_30px_rgba(86,35,24,0.2)] flex items-center justify-center gap-3 mb-4">
                QUIERO APLICAR AL PROTOCOLO WESAK
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
            <img src="https://i.imgur.com/nSJE6Ew.png" alt="Logo" className="w-10 h-10 object-contain opacity-80" />
          </div>
          <p className="text-white/60 font-serif text-lg mb-2">El despertar de la Luna Grande</p>
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Hotel Waya Guajira. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
