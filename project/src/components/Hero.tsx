import { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.querySelectorAll('.animate-fade-up').forEach((node) => {
      (node as HTMLElement).style.opacity = '0';
      setTimeout(() => {
        (node as HTMLElement).style.opacity = '';
      }, 10);
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col"
      style={{ background: 'linear-gradient(160deg, #faf8f4 0%, #f0ebe1 60%, #e8dfd0 100%)' }}
    >
      {/* Corner decorations */}
      <span className="absolute top-8 left-8 section-label opacity-50">Portfolio</span>
      <span className="absolute top-8 right-8 section-label opacity-50">2024 — 2026</span>

      {/* Main hero content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div className="order-2 md:order-1">
            <p className="section-label animate-fade-up opacity-0 delay-100 mb-6">
              
            </p>

            <h1
              className="serif animate-fade-up opacity-0 delay-200 leading-none mb-2"
              style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 300, letterSpacing: '-0.02em', color: 'var(--text-dark)' }}
            >
              Mohammed
            </h1>
            <h1
              className="serif animate-fade-up opacity-0 delay-300 leading-none mb-2"
              style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 300, fontStyle: 'italic', letterSpacing: '-0.02em', color: 'var(--text-dark)' }}
            >
              Haleem
            </h1>
            <h1
              className="serif animate-fade-up opacity-0 delay-400 leading-none mb-8"
              style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 300, letterSpacing: '-0.02em', color: 'var(--text-dark)' }}
            >
              Fathima Fasna
            </h1>

            <div className="divider animate-fade-up opacity-0 delay-500" />

            <p
              className="animate-fade-up opacity-0 delay-500 mb-10 leading-relaxed"
              style={{ color: 'var(--text-mid)', fontSize: '0.95rem', maxWidth: '400px' }}
            >
              Aspiring IT Professional · Software Development<br />
              AI &amp; Intelligent Systems Enthusiast
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 delay-600">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#contact" className="btn-outline">Contact Me</a>
            </div>

            {/* Social row */}
            <div className="flex items-center gap-5 mt-10 animate-fade-up opacity-0 delay-600">
              <a
                href="https://github.com/FasnaHaleem"
                target="_blank" rel="noreferrer"
                className="transition-colors duration-200"
                style={{ color: 'var(--text-light)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-dark)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-light)')}
              >
                <Github size={18} />
              </a>
              <a
                href="www.linkedin.com/in/fasna-haleem"
                target="_blank" rel="noreferrer"
                className="transition-colors duration-200"
                style={{ color: 'var(--text-light)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-dark)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-light)')}
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:mhf.fasna2000@gmail.com"
                className="transition-colors duration-200"
                style={{ color: 'var(--text-light)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-dark)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-light)')}
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:0762435115"
                className="transition-colors duration-200"
                style={{ color: 'var(--text-light)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-dark)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-light)')}
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Image side */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-up opacity-0 delay-200">
            <div className="relative">
              {/* Decorative border frame */}
              <div
                className="absolute -inset-3 rounded-3xl"
                style={{ border: '1px solid var(--sand)' }}
              />
              <div
                className="absolute -inset-6 rounded-3xl"
                style={{ border: '1px solid rgba(184,151,90,0.2)' }}
              />

              <div
                className="relative overflow-hidden"
                style={{
                  width: 'clamp(260px, 32vw, 380px)',
                  aspectRatio: '3/4',
                  borderRadius: '20px',
                  background: 'var(--beige)',
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}Fasna hero.jpeg`}
                  alt="Fasna Haleem"
                  className="w-full h-full object-cover object-top"
                />
                {/* Soft gradient overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24"
                  style={{ background: 'linear-gradient(to top, rgba(240,235,225,0.3), transparent)' }}
                />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -left-4 px-5 py-3 rounded-xl shadow-lg"
                style={{ background: 'white', border: '1px solid var(--sand)' }}
              >
                <p className="section-label mb-0.5">Currently</p>
                <p className="sans text-sm font-medium" style={{ color: 'var(--text-dark)' }}>
                  Undergraduate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="pb-10 flex justify-center">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 transition-opacity hover:opacity-60"
          style={{ color: 'var(--text-light)' }}
        >
          <span className="section-label text-[10px]">Scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
