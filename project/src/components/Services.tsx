import { useEffect, useRef } from 'react';
import { Palette, Globe, Smartphone, Brain, Network, Cpu, BookOpen } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Clean, intuitive interfaces designed with user-centered principles, wireframing, and interactive prototypes in Figma.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Responsive, modern websites and web applications built with HTML, CSS, JavaScript, and backend integrations.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications with seamless user experiences, authentication, and database connectivity.',
  },
  {
    icon: Brain,
    title: 'AI/ML Solutions',
    description: 'Intelligent systems including chatbots, emotion detection, NLP pipelines, and neural network implementations.',
  },
  {
    icon: Network,
    title: 'Networking & System Design',
    description: 'Network architecture design, VLAN configuration, DHCP setup, and simulation using Cisco Packet Tracer.',
  },
  {
    icon: Cpu,
    title: 'Embedded Systems / IoT',
    description: 'Arduino-based projects with sensors, real-time data modules, and hardware-software integration.',
  },
  {
    icon: BookOpen,
    title: 'Academic Project Support',
    description: 'Guidance and development support for IT projects, final year research, and technical documentation.',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'white' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="reveal mb-20">
          <p className="section-label mb-3">What I Offer</p>
          <h2
            className="serif"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text-dark)' }}
          >
            Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={s.title} className={`reveal delay-${(i % 5) + 1} service-card`}>
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'var(--beige)' }}
              >
                <s.icon size={19} style={{ color: 'var(--gold)' }} />
              </div>
              <h3
                className="serif mb-3"
                style={{ fontSize: '1.15rem', fontWeight: 400, color: 'var(--text-dark)' }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-loose" style={{ color: 'var(--text-mid)', fontSize: '0.83rem' }}>
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
