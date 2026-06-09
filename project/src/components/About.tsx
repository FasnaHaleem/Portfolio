import { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'white' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="reveal mb-20">
          <p className="section-label mb-3">Who I Am</p>
          <h2
            className="serif"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text-dark)' }}
          >
            About <em>me</em>
          </h2>
        </div>

        {/* Split layout */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          {/* Image */}
          <div className="reveal delay-1">
            <div
              className="relative"
              style={{ paddingTop: '120%' }}
            >
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ borderRadius: '24px', background: 'var(--beige)' }}
              >
                <img
                  src={'${import.meta.env.BASE_URL}Fasna about me.jpeg'}
                  alt="Fasna Haleem"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative element */}
              <div
                className="absolute -bottom-5 -right-5 w-32 h-32 rounded-2xl"
                style={{ background: 'var(--beige)', border: '1px solid var(--sand)', zIndex: -1 }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="reveal delay-2">
            <p
              className="serif mb-6"
              style={{ fontSize: '1.6rem', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.4, color: 'var(--text-dark)' }}
            >
              "Turning complexity into clarity through technology."
            </p>
            <div className="divider" />
            <p className="text-sm leading-loose mb-5" style={{ color: 'var(--text-mid)' }}>
              I am an IT undergraduate at Rajarata University of Sri Lanka, expected to graduate in 2026
              with a BSc in Information Technology. My journey in tech is driven by a deep fascination with
              how intelligent systems can solve real-world problems.
            </p>
            <p className="text-sm leading-loose mb-5" style={{ color: 'var(--text-mid)' }}>
              My core interests span AI, software development, networking, and embedded systems. I thrive
              at the intersection of theory and practice — whether building a chatbot that guides students,
              detecting emotions in text using neural networks, or designing network infrastructure from
              scratch.
            </p>
            <p className="text-sm leading-loose mb-5" style={{ color: 'var(--text-mid)' }}>
              I believe in continuous learning, clean design, and building solutions that are not just
              functional but genuinely meaningful to the people who use them.
            </p>
            <p className="text-sm leading-loose" style={{ color: 'var(--text-mid)' }}>
              Committed to continuous learning through professional certifications, workshops, and industry
              events in Artificial Intelligence, Software Development, Project Management, and Emerging
              Technologies.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: 'University', value: 'Rajarata University, SL' },
                { label: 'Degree', value: 'BSc Information Technology' },
                { label: 'Graduation', value: 'Expected 2026' },
                { label: 'Location', value: 'Sri Lanka' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="section-label text-[10px] mb-1">{item.label}</p>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-dark)' }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* My Story */}
        <div className="reveal delay-2">
          <div
            className="rounded-3xl p-10 md:p-14"
            style={{ background: 'var(--cream)', border: '1px solid var(--sand)' }}
          >
            <p className="section-label mb-4">My Story</p>
            <h3
              className="serif mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--text-dark)' }}
            >
              Motivation &amp; <em>Vision</em>
            </h3>
            <div className="grid md:grid-cols-2 gap-10">
              <p className="text-sm leading-loose" style={{ color: 'var(--text-mid)' }}>
                My passion for technology was ignited by witnessing how digital tools can bridge gaps in
                education and daily life. Growing up, I saw how access to the right information at the
                right time could transform outcomes. That inspired me to pursue IT and focus on intelligent
                systems that make knowledge accessible to everyone.
              </p>
              <p className="text-sm leading-loose" style={{ color: 'var(--text-mid)' }}>
                My career goal is to become a skilled IT professional who contributes to innovative
                technological systems — particularly in AI-driven applications, smart networking, and
                user-centered software. I aim to combine technical excellence with creative problem-solving
                to build solutions that are impactful, scalable, and human-first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
