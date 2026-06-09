import { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink, X } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'Agile Mastery: Empowering Teams for Project Success',
    organizer: 'Department of Computing, Faculty of Applied Sciences, University of Sri Lanka',
    description: 'Successfully participated in the workshop "Agile Mastery: Empowering Teams for Project Success." The workshop provided valuable insights into Agile methodologies, teamwork, collaboration, project planning, and effective project management practices. Gained knowledge of Agile principles and how they can be applied in software development and team-based projects.',
    skills: ['Agile Methodologies', 'Team Collaboration', 'Project Management', 'Communication Skills', 'Software Development Processes'],
    type: 'certification',
    image: '${import.meta.env.BASE_URL}Agile.jpeg',
  },
  {
    id: 2,
    title: 'Python Essentials 1',
    organizer: 'Cisco Networking Academy & Python Institute',
    description: 'Successfully completed the Python Essentials 1 course. Developed a strong foundation in Python programming, problem-solving techniques, data structures, functions, variables, loops, and core programming concepts. This course strengthened programming and software development skills.',
    skills: ['Python Programming', 'Problem Solving', 'Functions', 'Data Structures', 'Software Development Fundamentals'],
    type: 'certification',
    image: '${import.meta.env.BASE_URL}Python essentials.jpeg',
  },
  {
    id: 3,
    title: 'Google AI Essentials',
    organizer: 'Google',
    description: 'Successfully completed the Google AI Essentials course, gaining foundational knowledge of Artificial Intelligence, generative AI tools, responsible AI usage, prompt engineering, and practical AI applications in modern workplaces.',
    skills: ['Artificial Intelligence', 'Generative AI', 'Prompt Engineering', 'Responsible AI', 'AI Productivity Tools'],
    type: 'certification',
    image: '${import.meta.env.BASE_URL}Google AI Essentials.PNG',
  },
  {
    id: 4,
    title: 'BITCODE Competition Participant',
    description: 'Participated in the BITCODE competition, demonstrating problem-solving abilities, technical knowledge, teamwork, and innovation in a competitive technology-focused environment.',
    skills: ['Technical Problem Solving', 'Team Collaboration', 'Innovation & Creativity', 'Competitive Programming Exposure'],
    type: 'achievement',
    image: '${import.meta.env.BASE_URL}BITCODE.jpeg',
  },
];

export default function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const openModal = (image: string, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedTitle('');
  };

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'white' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="reveal mb-20">
          <p className="section-label mb-3">Professional Development</p>
          <h2
            className="serif"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text-dark)' }}
          >
            Certifications & <em>Achievements</em>
          </h2>
          <p
            className="text-sm leading-loose mt-6"
            style={{ color: 'var(--text-mid)', maxWidth: '600px' }}
          >
            Continuous learning, professional development, and participation in industry-related events
            that strengthen my knowledge in Information Technology, Software Development, Artificial
            Intelligence, and Project Management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <div key={cert.id} className={`reveal delay-${(i % 4) + 1} group`}>
              <div
                className="rounded-2xl overflow-hidden transition-all duration-300 h-full"
                style={{ background: 'white', border: '1px solid var(--sand)' }}
              >
                <div
                  className="p-6 transition-all duration-300"
                  style={{ background: cert.type === 'certification' ? 'var(--beige)' : 'var(--cream)' }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: 'rgba(255,255,255,0.8)' }}
                    >
                      <Award size={20} style={{ color: 'var(--gold)' }} />
                    </div>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full font-medium uppercase tracking-wide"
                      style={{
                        background: cert.type === 'certification' ? 'white' : 'var(--beige)',
                        color: 'var(--text-mid)',
                      }}
                    >
                      {cert.type === 'certification' ? 'Certificate' : 'Achievement'}
                    </span>
                  </div>
                  <h3
                    className="serif"
                    style={{ fontSize: '1.15rem', fontWeight: 400, color: 'var(--text-dark)', lineHeight: 1.3 }}
                  >
                    {cert.title}
                  </h3>
                </div>

                <div className="p-6">
                  {'organizer' in cert && cert.organizer && (
                    <p
                      className="text-xs font-medium mb-3 uppercase tracking-wide"
                      style={{ color: 'var(--gold)' }}
                    >
                      {cert.organizer}
                    </p>
                  )}
                  <p
                    className="text-sm leading-loose mb-5"
                    style={{ color: 'var(--text-mid)', fontSize: '0.82rem' }}
                  >
                    {cert.description}
                  </p>

                  <div className="mb-6">
                    <p
                      className="text-xs font-medium mb-3 uppercase tracking-wide"
                      style={{ color: 'var(--text-light)' }}
                    >
                      Skills Gained
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span key={skill} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => openModal(cert.image, cert.title)}
                    className="btn-outline w-full justify-center text-xs"
                  >
                    <ExternalLink size={14} />
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          onClick={closeModal}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.8)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'white',
              borderRadius: '16px',
              padding: '24px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-dark)', maxWidth: '90%' }}>
                {selectedTitle}
              </h3>
              <button
                onClick={closeModal}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-mid)' }}
              >
                <X size={20} />
              </button>
            </div>
            <img
              src={selectedImage}
              alt={selectedTitle}
              style={{ width: '100%', borderRadius: '8px', objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
    </section>
  );
}