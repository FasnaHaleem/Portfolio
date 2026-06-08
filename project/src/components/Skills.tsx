import { useEffect, useRef, useState } from 'react';

const skillGroups = [
  {
    category: 'Programming',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'C', level: 65 },
      { name: 'JavaScript', level: 80 },
      { name: 'HTML / CSS', level: 90 },
      { name: 'Java', level: 75 },
      { name: 'SQL', level: 78 },
    ],
  },
  {
    category: 'AI / Machine Learning',
    skills: [
      { name: 'Neural Networks', level: 72 },
      { name: 'NLP', level: 78 },
      { name: 'Chatbot Development', level: 80 },
      { name: 'Emotion Detection', level: 68 },
    ],
  },
  {
    category: 'Networking',
    skills: [
      { name: 'VLAN Configuration', level: 75 },
      { name: 'DHCP', level: 78 },
      { name: 'Firewall Concepts', level: 65 },
      { name: 'Cisco Packet Tracer', level: 80 },
    ],
  },
  {
    category: 'Development',
    skills: [
      { name: 'Web Development', level: 85 },
      { name: 'Mobile App Development', level: 72 },
      { name: 'UI/UX Design', level: 78 },
      { name: 'Database Design', level: 75 },
    ],
  },
];

const toolTags = ['GitHub', 'Figma', 'VS Code', 'Cisco Packet Tracer', 'MySQL', 'Arduino', 'OpenCV'];

function SkillBar({ name, level, visible }: { name: string; level: number; visible: boolean }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm" style={{ color: 'var(--text-mid)' }}>{name}</span>
        <span className="text-xs" style={{ color: 'var(--text-light)' }}>{level}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            setVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'white' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="reveal mb-20">
          <p className="section-label mb-3">Expertise</p>
          <h2
            className="serif"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text-dark)' }}
          >
            Skills &amp; <em>Competencies</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className={`reveal delay-${i + 1} rounded-2xl p-7`}
              style={{ background: 'var(--cream)', border: '1px solid var(--sand)' }}
            >
              <p
                className="serif mb-5"
                style={{ fontSize: '1.2rem', fontWeight: 400, color: 'var(--text-dark)' }}
              >
                {group.category}
              </p>
              {group.skills.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} visible={visible} />
              ))}
            </div>
          ))}
        </div>

        {/* Tools section */}
        <div className="reveal delay-5">
          <div
            className="rounded-2xl p-7"
            style={{ background: 'var(--cream)', border: '1px solid var(--sand)' }}
          >
            <p
              className="serif mb-5"
              style={{ fontSize: '1.2rem', fontWeight: 400, color: 'var(--text-dark)' }}
            >
              Tools &amp; Technologies
            </p>
            <div className="flex flex-wrap gap-3">
              {toolTags.map((t) => (
                <span key={t} className="skill-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Embedded/IoT */}
        <div className="reveal delay-6 mt-8">
          <div
            className="rounded-2xl p-7"
            style={{ background: 'var(--cream)', border: '1px solid var(--sand)' }}
          >
            <p
              className="serif mb-5"
              style={{ fontSize: '1.2rem', fontWeight: 400, color: 'var(--text-dark)' }}
            >
              Embedded Systems / IoT
            </p>
            <div className="flex flex-wrap gap-3">
              {['Arduino', 'Sensors', 'Real-time Modules', 'Hardware Integration', 'IoT Prototyping'].map((t) => (
                <span key={t} className="skill-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
