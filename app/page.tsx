import Image from 'next/image'
import {
  Phone,
  Leaf,
  Flower,
  Lightning,
  HandHeart,
  Heart,
  Sparkle,
  Clock,
  House,
  ShieldCheck,
  MapPin,
  FacebookLogo,
  WhatsappLogo,
  Check,
  UsersThree,
} from '@phosphor-icons/react/dist/ssr'
import ContactForm from '@/components/ContactForm'
import Reveal from '@/components/Reveal'

const PHONE = '07494 729 630'
const TEL = '+447494729630'
const WHATSAPP = 'https://wa.me/447494729630'

const treatments = [
  {
    icon: HandHeart,
    name: 'Full Body Massage',
    duration: '60 / 90 min',
    desc: 'A complete body treatment that works tension out from head to toe. The reset most bodies are quietly asking for.',
  },
  {
    icon: Lightning,
    name: 'Deep Tissue Massage',
    duration: '60 / 90 min',
    desc: 'Slow, focused pressure on stubborn knots and chronic tightness in the back, shoulders, neck and hips.',
  },
  {
    icon: Leaf,
    name: 'Relaxation Massage',
    duration: '60 / 90 min',
    desc: 'Long, flowing strokes designed to calm the nervous system — ideal after a stressful week or poor sleep.',
  },
  {
    icon: Flower,
    name: 'Sports & Sciatica Relief',
    duration: '45 / 60 min',
    desc: 'Targeted work for athletes, active bodies, and anyone fighting sciatic pain, tight hips or sore lower backs.',
  },
  {
    icon: UsersThree,
    name: 'Couples Sessions',
    duration: 'Side by side',
    desc: 'Two tables, one candle-lit room. An unhurried hour together — no small talk, no phones, just quiet.',
  },
  {
    icon: Heart,
    name: 'Family Bookings',
    duration: 'By arrangement',
    desc: 'Back-to-back appointments for families — birthday treats, post-op recovery, or everyone after a house move.',
  },
]

const principles = [
  {
    icon: House,
    title: 'I come to you',
    text: 'Fully equipped mobile setup — table, linens, oils, warm music. You stay home, I handle the rest.',
  },
  {
    icon: Clock,
    title: 'Evenings & weekends',
    text: 'Appointments that fit around work, childcare and a real life. Book whatever suits you.',
  },
  {
    icon: ShieldCheck,
    title: 'Qualified & insured',
    text: 'Fully trained, fully insured, and bound by professional conduct standards. Your comfort always comes first.',
  },
]

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* HERO — poster-faithful centered layout */}
      <section className="relative min-h-[100dvh] flex items-center pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="absolute inset-0 radial-spot pointer-events-none" />
        <div
          className="absolute top-0 right-0 w-[60%] h-[70%] opacity-[0.10] pointer-events-none drift"
          style={{
            background:
              'radial-gradient(ellipse at top right, #CDA24A 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[50%] h-[50%] opacity-[0.08] pointer-events-none drift-slow"
          style={{
            background:
              'radial-gradient(ellipse at bottom left, #B8913A 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: poster-style centered brand block */}
          <div className="lg:col-span-7 text-center lg:text-left hero-reveal">
            <div className="mb-8 flex justify-center lg:justify-start">
              <Image
                src="/logo-mark.png"
                alt=""
                width={390}
                height={135}
                priority
                className="h-20 md:h-24 w-auto"
              />
            </div>

            <h1 className="font-heading text-[44px] md:text-[72px] lg:text-[80px] leading-[0.95] tracking-tight text-ink-50 mb-4">
              Mobile Massage<br />
              <span className="italic text-gold-gradient">Therapist</span>
            </h1>

            {/* Decorative CHESHIRE divider — mirrors poster */}
            <div className="flex items-center gap-4 mb-7 justify-center lg:justify-start">
              <span className="h-px w-14 bg-gold-700" />
              <span className="font-body text-[13px] md:text-[15px] tracking-[0.5em] uppercase text-gold-400 font-medium">
                Cheshire
              </span>
              <span className="h-px w-14 bg-gold-700" />
            </div>

            {/* Tagline pill — RELAX · RECOVER · RECHARGE */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-gold-700/60 rounded-full bg-ink-900/60 mb-8">
              <span className="font-body text-[11px] md:text-[12px] tracking-[0.4em] uppercase text-gold-300 font-medium">
                Relax <span className="text-gold-600 mx-1">&middot;</span> Recover <span className="text-gold-600 mx-1">&middot;</span> Recharge
              </span>
            </div>

            <p className="font-heading italic text-xl md:text-2xl text-ink-100 leading-snug max-w-xl mx-auto lg:mx-0 mb-3">
              Professional massage therapy.
            </p>
            <p className="font-body text-base md:text-lg text-ink-300 max-w-xl mx-auto lg:mx-0 mb-8">
              Take care of your body and mind — in the comfort of your own home.
            </p>

            {/* Service checklist — mirrors poster */}
            <ul className="inline-flex flex-col gap-2.5 mb-10 mx-auto lg:mx-0 text-left">
              {['Relaxing Massage', 'Deep Tissue Massage', 'Sports & Sciatica Relief'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink-100">
                  <span className="w-5 h-5 rounded-full bg-gold-600/15 border border-gold-600/50 flex items-center justify-center flex-shrink-0">
                    <Check weight="bold" className="w-3 h-3 text-gold-400" />
                  </span>
                  <span className="font-body text-[15px]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gold-600 text-ink-950 font-semibold tracking-[0.12em] uppercase text-sm rounded-sm hover:bg-gold-500 active:scale-[0.98] transition-all"
              >
                Book a treatment
              </a>
              <a
                href={`tel:${TEL}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-gold-700/60 text-gold-300 font-semibold tracking-[0.12em] uppercase text-sm rounded-sm hover:border-gold-500 hover:text-gold-200 active:scale-[0.98] transition-all"
              >
                <Phone weight="fill" className="w-4 h-4" />
                {PHONE}
              </a>
            </div>
          </div>

          {/* Right: image panel */}
          <Reveal as="div" className="lg:col-span-5 relative" delay={300} y={20}>
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <div
                className="absolute inset-0 rounded-sm overflow-hidden border border-gold-700/40"
                style={{
                  backgroundImage:
                    'linear-gradient(180deg, rgba(11,10,8,0.35) 0%, rgba(11,10,8,0.85) 100%), url(https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=900&auto=format&fit=crop&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              {/* Double-line gold frame, poster-style */}
              <div className="absolute inset-0 rounded-sm ring-1 ring-inset ring-gold-600/30" />
              <div className="absolute inset-2 rounded-sm ring-1 ring-inset ring-gold-600/20 pointer-events-none" />

              {/* Floating callout card */}
              <div className="absolute -bottom-8 -left-6 md:-left-10 bg-ink-900 border border-gold-700/50 px-6 py-5 rounded-sm max-w-[240px] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkle weight="fill" className="w-4 h-4 text-gold-400" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-gold-500">Tonight</span>
                </div>
                <p className="font-heading italic text-xl text-ink-50 leading-tight">
                  &ldquo;Your body will thank you.&rdquo;
                </p>
              </div>

              {/* Top-right badge */}
              <div className="absolute -top-6 -right-4 md:-right-8 bg-ink-900 border border-gold-700/50 px-5 py-4 rounded-sm">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold-500 mb-1">Based in</div>
                <div className="font-heading text-2xl text-ink-50">Crewe</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gold divider strip */}
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="h-px gold-divider opacity-50" />
      </div>

      {/* TREATMENTS */}
      <section id="treatments" className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold-700" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold-500 font-medium">
                The Treatments
              </span>
              <span className="h-px w-8 bg-gold-700" />
            </div>
            <h2 className="font-heading text-4xl md:text-6xl leading-[1.05] tracking-tight text-ink-50 mb-6">
              Bodywork that <span className="italic text-gold-gradient">actually lands</span>.
            </h2>
            <p className="text-ink-300 text-lg leading-relaxed">
              Treatments built around what most people actually need —
              from deep knots and sciatic pain to pure switch-off time.
              Not sure which? Just tell me what&rsquo;s going on when you book.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold-900/30 border border-gold-900/40 rounded-sm overflow-hidden">
            {treatments.map((t, i) => {
              const Icon = t.icon
              return (
                <Reveal
                  key={t.name}
                  as="article"
                  delay={i * 90}
                  className="group relative bg-ink-950 p-8 md:p-10 hover:bg-ink-900 transition-colors lift"
                >
                  <div className="flex items-start justify-between gap-6 mb-5">
                    <div className="w-12 h-12 rounded-sm border border-gold-700/50 bg-ink-900 flex items-center justify-center group-hover:border-gold-500 transition-colors">
                      <Icon weight="duotone" className="w-6 h-6 text-gold-400" />
                    </div>
                    <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold-600 mt-3">
                      {t.duration}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl md:text-[28px] text-ink-50 mb-3 leading-tight">
                    {t.name}
                  </h3>
                  <p className="text-ink-300 leading-relaxed text-[15px] max-w-md">
                    {t.desc}
                  </p>
                </Reveal>
              )
            })}
          </div>

          <Reveal as="p" delay={200} className="text-center text-ink-400 text-sm mt-10 max-w-xl mx-auto">
            Perfect for relieving stress, muscle tension, and boosting overall well-being. Prices on enquiry.
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-24 md:py-32 border-t border-gold-900/30">
        <div className="absolute inset-0 radial-spot opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <Reveal as="div" className="lg:col-span-5 order-2 lg:order-1" y={20}>
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:mx-0">
              <div
                className="absolute inset-0 rounded-sm overflow-hidden border border-gold-700/40"
                style={{
                  backgroundImage:
                    'linear-gradient(180deg, rgba(11,10,8,0.25) 0%, rgba(11,10,8,0.7) 100%), url(https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&auto=format&fit=crop&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="absolute inset-0 rounded-sm ring-1 ring-inset ring-gold-600/25" />
              <div className="absolute inset-2 rounded-sm ring-1 ring-inset ring-gold-600/15" />

              <div className="hidden md:flex absolute -bottom-6 -right-6 w-32 h-32 rounded-sm border border-gold-700/50 bg-ink-900 items-center justify-center">
                <div className="text-center">
                  <div className="font-heading italic text-4xl text-gold-gradient leading-none">5★</div>
                  <div className="text-[9px] tracking-[0.3em] uppercase text-gold-500 mt-2">Rated Care</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal as="div" className="lg:col-span-7 order-1 lg:order-2" delay={120}>
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold-500 font-medium mb-5 block">
              About the Practice
            </span>
            <h2 className="font-heading text-4xl md:text-5xl leading-[1.08] tracking-tight text-ink-50 mb-6">
              Based in Crewe. <span className="italic text-gold-gradient">I come to you</span>.
            </h2>
            <p className="text-ink-200 text-lg leading-relaxed mb-5">
              I&rsquo;m a fully qualified mobile massage therapist working across Crewe, Nantwich
              and the wider Cheshire area — bringing the treatment room to you, wherever you&rsquo;re based.
            </p>
            <p className="text-ink-300 leading-relaxed mb-5">
              Every appointment starts with a short consultation so I understand what
              your body is asking for — not a generic rub-down, but a session built around
              you: the tight shoulder from hunching over a laptop, the hip that locks up after
              a long run, the sciatic pain that&rsquo;s been lingering for weeks.
            </p>
            <p className="text-ink-300 leading-relaxed mb-10">
              You don&rsquo;t need to tidy up, drive anywhere, or lose an afternoon. I bring
              the table, linens, warming oils and ambient music. You just lie down.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {principles.map((p, i) => {
                const Icon = p.icon
                return (
                  <Reveal
                    key={p.title}
                    delay={200 + i * 100}
                    className="border-t border-gold-800/50 pt-5"
                  >
                    <Icon weight="duotone" className="w-6 h-6 text-gold-400 mb-3" />
                    <h4 className="font-heading text-lg text-ink-50 mb-1.5">{p.title}</h4>
                    <p className="text-ink-300 text-sm leading-relaxed">{p.text}</p>
                  </Reveal>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-24 md:py-32 border-t border-gold-900/30">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, #CDA24A 0%, transparent 60%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <Reveal as="div">
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold-500 font-medium mb-5 block">
              Book an Appointment
            </span>
            <h2 className="font-heading text-4xl md:text-5xl leading-[1.08] tracking-tight text-ink-50 mb-6">
              Your body will <span className="italic text-gold-gradient">thank you</span>.
            </h2>
            <p className="text-ink-300 text-lg leading-relaxed mb-10 max-w-md">
              Send a quick message below, or get in touch directly on any channel below.
              I typically reply the same day.
            </p>

            <div className="space-y-5">
              <a
                href={`tel:${TEL}`}
                className="flex items-center gap-4 p-5 border border-gold-800/50 rounded-sm hover:border-gold-600 hover:bg-ink-900 transition-all group lift"
              >
                <div className="w-11 h-11 rounded-sm bg-gold-600/10 border border-gold-700/50 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-600 group-hover:border-gold-600 transition-colors">
                  <Phone weight="fill" className="w-5 h-5 text-gold-400 group-hover:text-ink-950 transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold-500 mb-0.5">Call</div>
                  <div className="font-heading text-xl text-ink-50">{PHONE}</div>
                </div>
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 border border-gold-800/50 rounded-sm hover:border-gold-600 hover:bg-ink-900 transition-all group lift"
              >
                <div className="w-11 h-11 rounded-sm bg-gold-600/10 border border-gold-700/50 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-600 group-hover:border-gold-600 transition-colors">
                  <WhatsappLogo weight="fill" className="w-5 h-5 text-gold-400 group-hover:text-ink-950 transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold-500 mb-0.5">WhatsApp</div>
                  <div className="font-heading text-xl text-ink-50">Message directly</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 border border-gold-800/30 rounded-sm">
                <div className="w-11 h-11 rounded-sm bg-gold-600/10 border border-gold-700/50 flex items-center justify-center flex-shrink-0">
                  <MapPin weight="fill" className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold-500 mb-0.5">Serving</div>
                  <div className="text-ink-100">Crewe, Nantwich & wider Cheshire</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal as="div" delay={120} className="bg-ink-900/50 border border-gold-900/30 rounded-sm p-6 md:p-10">
            <h3 className="font-heading text-2xl text-ink-50 mb-2">Send a message</h3>
            <p className="text-ink-400 text-sm mb-8">
              Tell me which treatment you&rsquo;re after and I&rsquo;ll be in touch with availability.
            </p>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-gold-900/30 py-12">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/logo-mark.png" alt="" width={390} height={135} className="h-8 w-auto opacity-80" />
            <span className="font-heading italic text-lg text-gold-400">
              Mobile Massage Cheshire
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-300 hover:text-gold-400 transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsappLogo weight="fill" className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-ink-300 hover:text-gold-400 transition-colors"
              aria-label="Facebook"
            >
              <FacebookLogo weight="fill" className="w-5 h-5" />
            </a>
            <a
              href={`tel:${TEL}`}
              className="text-ink-300 hover:text-gold-400 transition-colors"
              aria-label="Call"
            >
              <Phone weight="fill" className="w-5 h-5" />
            </a>
          </div>
          <div className="text-ink-500 text-xs tracking-[0.2em] uppercase">
            &copy; {new Date().getFullYear()} All rights reserved
          </div>
        </div>
      </footer>
    </main>
  )
}
