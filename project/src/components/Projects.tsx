import { useEffect, useRef } from 'react';
import { ExternalLink, Brain, Smartphone, Eye, Network, Leaf, ShoppingBag } from 'lucide-react';

const projects = [
  {
    icon: Brain,
    tag: 'Final Year Project',
    title: 'Chatbot for Academic Advising',
    description:
      'AI-powered chatbot providing university academic guidance — GPA calculations, subject combinations, scholarship information, and degree pathways for students.',
    tech: ['Python', 'NLP', 'Rule-based AI'],
    color: '#f0ebe1',
  },
  {
    icon: Smartphone,
    tag: 'Mobile Application',
    title: 'Lost and Found App',
    description:
      'Campus-based mobile application enabling students to post, search, and claim lost items with authentication, real-time messaging, and a clean UI.',
    tech: ['Mobile Dev', 'Database', 'UI Design'],
    color: '#eef2f0',
  },
  {
    icon: Eye,
    tag: 'AI / Machine Learning',
    title: 'Emotion Detection System',
    description:
      'Machine learning system that classifies student emotions from text input using neural network architecture with NLP preprocessing pipeline.',
    tech: ['Python', 'ML', 'Neural Networks', 'NLP'],
    color: '#f5f0ec',
  },
  {
    icon: Network,
    tag: 'Networking',
    title: 'Cisco Networking Project',
    description:
      'Enterprise network design using Cisco Packet Tracer with VLAN segmentation, DHCP configuration, and multi-subnet routing.',
    tech: ['Cisco Packet Tracer', 'VLAN', 'DHCP'],
    color: '#ecf0f5',
  },
  {
    icon: Leaf,
    tag: 'Computer Vision',
    title: 'Fungal Growth Detection',
    description:
      'Image processing system for analyzing fungal growth on bread surfaces using segmentation, edge detection, and morphological operations.',
    tech: ['Python', 'OpenCV', 'Canny Edge Detection'],
    color: '#f0f5ec',
  },
  {
    icon: ShoppingBag,
    tag: 'UI/UX Design',
    title: 'Campus Cycle — Buy & Sell',
    description:
      'Mobile marketplace UI/UX project for students to buy and sell items, featuring complete wireframes, user flows, and interactive prototypes.',
    tech: ['Figma', 'UI/UX', 'Prototyping'],
    color: '#f5f0f5',
  },
];

export default function Projects() {
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
      id="projects"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'var(--cream)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="reveal mb-20">
          <p className="section-label mb-3">Portfolio</p>
          <h2
            className="serif"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text-dark)' }}
          >
            Selected <em>Projects</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`reveal delay-${(i % 5) + 1} project-card group cursor-pointer`}
            >
              {/* Card top color block */}
              <div
                className="p-6 transition-all duration-300"
                style={{ background: p.color, borderBottom: '1px solid var(--sand)' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.7)' }}
                  >
                    <p.icon size={20} style={{ color: 'var(--text-dark)' }} />
                  </div>
                  <ExternalLink
                    size={15}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: 'var(--text-light)', marginTop: '2px' }}
                  />
                </div>
                <span className="section-label text-[10px]">{p.tag}</span>
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3
                  className="serif mb-3"
                  style={{ fontSize: '1.15rem', fontWeight: 400, color: 'var(--text-dark)', lineHeight: 1.3 }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-loose mb-5"
                  style={{ color: 'var(--text-mid)', fontSize: '0.82rem' }}
                >
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
