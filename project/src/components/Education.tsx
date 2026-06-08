import { useEffect, useRef } from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

const timeline = [
  {
    icon: GraduationCap,
    year: '2021 — 2026',
    degree: 'BSc in Information Technology',
    institution: 'Rajarata University of Sri Lanka',
    detail: 'Faculty of Applied Science · Expected Graduation 2026',
    highlights: ['Software Engineering', 'AI & Machine Learning', 'Networking & Systems', 'Database Management'],
  },
  {
    icon: BookOpen,
    year: '2020',
    degree: 'G.C.E. Advanced Level',
    institution: 'Kg/Mw Badhuriya Central College',
    detail: 'Completed Advanced Level examinations in technology stream',
    highlights: ['SFT', 'BST', 'ICT'],
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'var(--cream)' }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="reveal mb-20">
          <p className="section-label mb-3">Academic Journey</p>
          <h2
            className="serif"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text-dark)' }}
          >
            Education
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 top-3 bottom-3 w-px"
            style={{ background: 'linear-gradient(to bottom, var(--gold), var(--sand))' }}
          />

          <div className="space-y-12 pl-14">
            {timeline.map((item, i) => (
              <div key={i} className={`reveal delay-${i + 1} relative`}>
                {/* Dot */}
                <div
                  className="absolute -left-[2.95rem] w-3 h-3 rounded-full border-2"
                  style={{
                    background: 'var(--cream)',
                    borderColor: 'var(--gold)',
                    top: '6px',
                  }}
                />

                <div
                  className="rounded-2xl p-7 transition-all duration-300"
                  style={{ background: 'white', border: '1px solid var(--sand)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--warm-gray)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(0,0,0,0.06)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--sand)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <p className="section-label text-[10px] mb-2">{item.year}</p>
                      <h3
                        className="serif mb-1"
                        style={{ fontSize: '1.5rem', fontWeight: 400, color: 'var(--text-dark)' }}
                      >
                        {item.degree}
                      </h3>
                      <p className="text-sm font-medium" style={{ color: 'var(--gold)' }}>
                        {item.institution}
                      </p>
                    </div>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--beige)' }}
                    >
                      <item.icon size={18} style={{ color: 'var(--gold)' }} />
                    </div>
                  </div>

                  <p className="text-sm mb-4" style={{ color: 'var(--text-light)' }}>{item.detail}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((h) => (
                      <span key={h} className="skill-tag">{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
