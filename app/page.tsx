import { Phone, Leaf, Flower, Lightning, HandHeart, Heart, Sparkle, Clock, House, ShieldCheck, MapPin, FacebookLogo, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import ContactForm from '@/components/ContactForm'

const PHONE = '07494 729 630'
const TEL = '+447494729630'
const WHATSAPP = 'https://wa.me/447494729630'

const treatments = [
  {
    icon: Leaf,
    name: 'Relaxing Swedish Massage',
    duration: '60 / 90 min',
    desc: 'Long, flowing strokes designed to calm the nervous system, ease tension, and help you genuinely switch off.',
  },
  {
    icon: Lightning,
    name: 'Deep Tissue Massage',
    duration: '60 / 90 min',
    desc: 'Focused pressure on stubborn knots and chronic tightness in the back, shoulders, neck and hips.',
  },
  {
    icon: HandHeart,
    name: 'Sports & Remedial',
    duration: '45 / 60 min',
    desc: 'Targeted work for athletes and active bodies — pre-event, recovery, and injury maintenance.',
  },
  {
    icon: Flower,
    name: 'Aromatherapy',
    duration: '60 min',
    desc: 'Blended essential oils chosen for the result you want — calm, clarity, restoration, or better sleep.',
  },
  {
    icon: Heart,
    name: 'Pregnancy Massage',
    duration: '60 min',
    desc: 'Gentle, safe bodywork from the second trimester onwards. Bolsters and side-lying positioning included.',
  },
  {
    icon: Sparkle,
    name: 'Indian Head Massage',
    duration: '30 / 45 min',
    desc: 'Scalp, neck and shoulder release — ideal for tension headaches, screen fatigue, and restless sleep.',
  },
]

const principles = [
  {
    icon: House,
    title: 'I come to you',
    text: 'Fully equipped mobile setup — table, linens, oils, music. You stay home, I handle the rest.',
  },
  {
    icon: Clock,
    title: 'Evenings & weekends',
    text: 'Appointments that fit around work, childcare, and a busy life. Book what suits you.',
  },
  {
    icon: ShieldCheck,
    title: 'Qualified & insured',
    text: 'Fully trained, fully insured, and bound by professional conduct standards. Your comfort comes first.',
  },
]

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[100dvh] flex items-center pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="absolute inset-0 radial-spot pointer-events-none" />
        <div
          className="absolute top-0 right-0 w-[60%] h-[70%] opacity-[0.08] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at top right, #CDA24A 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[50%] h-[50%] opacity-[0.06] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at bottom left, #B8913A 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-gold-600" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold-400 font-medium">
                Crewe &middot; Nantwich &middot; Cheshire
              </span>
            </div>

            <h1 className="font-heading text-5xl md:text-7xl lg:text-[84px] leading-[0.95] tracking-tight text-ink-50 mb-6">
              Relax. <span className="italic text-gold-gradient">Recover.</span><br />
              Recharge.
            </h1>

            <p className="font-body text-lg md:text-xl text-ink-200 leading-relaxed max-w-xl mb-10">
              Professional mobile massage therapy delivered in the quiet of your own home.
              Qualified, insured, and genuinely invested in how you leave the table.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
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

            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-2 text-ink-300 text-sm">
                <ShieldCheck weight="fill" className="w-4 h-4 text-gold-500" />
                Fully insured
              </div>
              <div className="w-px h-4 bg-gold-900" />
              <div className="flex items-center gap-2 text-ink-300 text-sm">
                <House weight="fill" className="w-4 h-4 text-gold-500" />
                At your home
              </div>
              <div className="hidden sm:block w-px h-4 bg-gold-900" />
              <div className="hidden sm:flex items-center gap-2 text-ink-300 text-sm">
                <Clock weight="fill" className="w-4 h-4 text-gold-500" />
                Evenings & weekends
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <div
                className="absolute inset-0 rounded-sm overflow-hidden border border-gold-800/40"
                style={{
                  backgroundImage:
                    'linear-gradient(180deg, rgba(11,10,8,0.35) 0%, rgba(11,10,8,0.85) 100%), url(https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=900&auto=format&fit=crop&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="absolute inset-0 rounded-sm ring-1 ring-inset ring-gold-600/20" />

              <div className="absolute -bottom-8 -left-6 md:-left-10 bg-ink-900 border border-gold-800/50 px-6 py-5 rounded-sm max-w-[240px] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkle weight="fill" className="w-4 h-4 text-gold-400" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-gold-500">Tonight</span>
                </div>
                <p className="font-heading italic text-xl text-ink-50 leading-tight">
                  &ldquo;Take care of your body and mind.&rdquo;
                </p>
              </div>

              <div className="absolute -top-6 -right-4 md:-right-8 bg-ink-900 border border-gold-800/50 px-5 py-4 rounded-sm">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold-500 mb-1">From</div>
                <div className="font-heading text-2xl text-ink-50">60 min</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="h-px gold-divider opacity-40" />
      </div>

      {/* TREATMENTS */}
      <section id="treatments" className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl mb-16 md:mb-20">
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold-500 font-medium mb-5 block">
              The Treatment Menu
            </span>
            <h2 className="font-heading text-4xl md:text-6xl leading-[1.05] tracking-tight text-ink-50 mb-6">
              Bodywork that actually <span className="italic text-gold-gradient">lands</span>.
            </h2>
            <p className="text-ink-300 text-lg leading-relaxed">
              Six treatments built around what most people actually need —
              from deep knots and sports recovery to pure switch-off time.
              Not sure which? Just ask when you book.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold-900/30 border border-gold-900/30 rounded-sm overflow-hidden">
            {treatments.map((t) => {
              const Icon = t.icon
              return (
                <article
                  key={t.name}
                  className="group relative bg-ink-950 p-8 md:p-10 hover:bg-ink-900 transition-colors"
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
                </article>
              )
            })}
          </div>

          <p className="text-center text-ink-400 text-sm mt-10">
            Prices on enquiry. Couples, block bookings, and corporate chair massage available.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-24 md:py-32 border-t border-gold-900/30">
        <div className="absolute inset-0 radial-spot opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 lg:col-start-1 order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:mx-0">
              <div
                className="absolute inset-0 rounded-sm overflow-hidden border border-gold-800/40"
                style={{
                  backgroundImage:
                    'linear-gradient(180deg, rgba(11,10,8,0.25) 0%, rgba(11,10,8,0.7) 100%), url(https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&auto=format&fit=crop&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-sm border border-gold-700/50 bg-ink-900 flex items-center justify-center hidden md:flex"
              >
                <div className="text-center">
                  <div className="font-heading italic text-4xl text-gold-gradient leading-none">5★</div>
                  <div className="text-[9px] tracking-[0.3em] uppercase text-gold-500 mt-2">Rated Care</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold-500 font-medium mb-5 block">
              About the Practice
            </span>
            <h2 className="font-heading text-4xl md:text-5xl leading-[1.08] tracking-tight text-ink-50 mb-6">
              A quiet hour that&rsquo;s genuinely <span className="italic text-gold-gradient">yours</span>.
            </h2>
            <p className="text-ink-200 text-lg leading-relaxed mb-5">
              I&rsquo;m a fully qualified massage therapist working across Crewe, Nantwich
              and the wider Cheshire area — bringing the treatment room to you, wherever you&rsquo;re based.
            </p>
            <p className="text-ink-300 leading-relaxed mb-5">
              Every appointment starts with a short consultation so I understand what
              your body is asking for — not a generic rub-down, but a session built around
              you: the tight shoulder from hunching over a laptop, the hip that locks up after
              a long run, the week of poor sleep that needs unwinding.
            </p>
            <p className="text-ink-300 leading-relaxed mb-10">
              You don&rsquo;t need to tidy up, drive anywhere, or lose an afternoon.
              I bring the table, linens, warming oils and ambient music. You just lie down.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {principles.map((p) => {
                const Icon = p.icon
                return (
                  <div key={p.title} className="border-t border-gold-800/50 pt-5">
                    <Icon weight="duotone" className="w-6 h-6 text-gold-400 mb-3" />
                    <h4 className="font-heading text-lg text-ink-50 mb-1.5">{p.title}</h4>
                    <p className="text-ink-300 text-sm leading-relaxed">{p.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
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
          <div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold-500 font-medium mb-5 block">
              Book an Appointment
            </span>
            <h2 className="font-heading text-4xl md:text-5xl leading-[1.08] tracking-tight text-ink-50 mb-6">
              Ready when you <span className="italic text-gold-gradient">are</span>.
            </h2>
            <p className="text-ink-300 text-lg leading-relaxed mb-10 max-w-md">
              Send a quick message below, or get in touch directly —
              whichever&rsquo;s easiest. I typically reply the same day.
            </p>

            <div className="space-y-5">
              <a
                href={`tel:${TEL}`}
                className="flex items-center gap-4 p-5 border border-gold-800/50 rounded-sm hover:border-gold-600 hover:bg-ink-900 transition-all group"
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
                className="flex items-center gap-4 p-5 border border-gold-800/50 rounded-sm hover:border-gold-600 hover:bg-ink-900 transition-all group"
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
          </div>

          <div className="bg-ink-900/50 border border-gold-900/30 rounded-sm p-6 md:p-10">
            <h3 className="font-heading text-2xl text-ink-50 mb-2">Send a message</h3>
            <p className="text-ink-400 text-sm mb-8">
              Tell me which treatment you&rsquo;re after and I&rsquo;ll be in touch with availability.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-gold-900/30 py-12">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-heading italic text-lg text-gold-400">
            Mobile Massage Cheshire
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
