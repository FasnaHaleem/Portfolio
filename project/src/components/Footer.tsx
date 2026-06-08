import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="py-12 px-6"
      style={{ background: 'var(--text-dark)', color: 'var(--cream)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="serif mb-1"
              style={{ fontSize: '1.5rem', fontWeight: 300, color: 'var(--cream)' }}
            >
              Fasna <em>Haleem</em>
            </p>
            <p className="text-xs tracking-wider" style={{ color: 'var(--warm-gray)' }}>
              BSc IT Undergraduate · Rajarata University of Sri Lanka
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/FasnaHaleem"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200"
              style={{ color: 'var(--warm-gray)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--warm-gray)')}
            >
              <Github size={17} />
            </a>
            <a
              href="www.linkedin.com/in/fasna-haleem"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200"
              style={{ color: 'var(--warm-gray)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--warm-gray)')}
            >
              <Linkedin size={17} />
            </a>
            <a
              href="mailto:mhf.fasna2000@gmail.com"
              className="transition-colors duration-200"
              style={{ color: 'var(--warm-gray)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--warm-gray)')}
            >
              <Mail size={17} />
            </a>
          </div>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-xs" style={{ color: 'var(--warm-gray)' }}>
            &copy; {new Date().getFullYear()} Mohammed Haleem Fathima Fasna. All rights reserved.
          </p>
          <p className="text-xs flex items-center gap-1.5" style={{ color: 'var(--warm-gray)' }}>
            Crafted with <Heart size={11} style={{ color: 'var(--gold)' }} /> and passion
          </p>
        </div>
      </div>
    </footer>
  );
}
