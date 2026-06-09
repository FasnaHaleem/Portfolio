import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    emailjs.init('mRQihnK9nnUcHgGRv');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await emailjs.send(
        'service_1vj0uo8',
        'template_z7c71tt',
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        }
      );
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mhf.fasna2000@gmail.com',
      href: 'mailto:mhf.fasna2000@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 76 243 5115',
      href: 'tel:0762435115',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'fasna-haleem-7030b0391',
      href: 'https://www.linkedin.com/in/fasna-haleem-7030b0391',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'FasnaHaleem',
      href: 'https://github.com/FasnaHaleem',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kadugannawa, Kandy, Sri Lanka',
      href: 'https://maps.google.com/?q=Kadugannawa+Kandy+Sri+Lanka',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'var(--cream)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="reveal mb-20">
          <p className="section-label mb-3">Get in Touch</p>
          <h2
            className="serif"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text-dark)' }}
          >
            Let's <em>Connect</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Left — contact info */}
          <div className="reveal delay-1">
            <p className="text-sm leading-loose mb-10" style={{ color: 'var(--text-mid)', maxWidth: '360px' }}>
              I'm open to project collaborations, internships, and opportunities in AI, software development,
              and networking. Feel free to reach out — I'd love to connect.
            </p>

            <div className="space-y-5">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                    style={{ background: 'white', border: '1px solid var(--sand)' }}
                  >
                    <item.icon size={16} style={{ color: 'var(--gold)' }} />
                  </div>
                  <div>
                    <p className="section-label text-[10px] mb-0.5">{item.label}</p>
                    <p
                      className="text-sm font-medium transition-colors duration-200"
                      style={{ color: 'var(--text-dark)' }}
                    >
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal delay-2">
            {sent ? (
              <div
                className="rounded-2xl p-10 text-center"
                style={{ background: 'white', border: '1px solid var(--sand)' }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: 'var(--beige)' }}
                >
                  <Send size={22} style={{ color: 'var(--gold)' }} />
                </div>
                <h3
                  className="serif mb-3"
                  style={{ fontSize: '1.6rem', fontWeight: 300, color: 'var(--text-dark)' }}
                >
                  Message Sent
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-mid)' }}>
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                <button
                  className="mt-6 btn-outline text-xs"
                  onClick={() => setSent(false)}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 space-y-4"
                style={{ background: 'white', border: '1px solid var(--sand)' }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="section-label text-[10px] block mb-1.5">Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="input-field rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="section-label text-[10px] block mb-1.5">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="input-field rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="section-label text-[10px] block mb-1.5">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry, collaboration..."
                    required
                    className="input-field rounded-lg"
                  />
                </div>
                <div>
                  <label className="section-label text-[10px] block mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    className="input-field rounded-lg resize-none"
                  />
                </div>
                {error && (
                  <p className="text-xs text-red-600">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={14} />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
