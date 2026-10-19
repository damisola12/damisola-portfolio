import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  ExternalLink,
  Menu,
  X,
} from 'lucide-react';
import { SiApplepodcasts, SiSpotify } from 'react-icons/si';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { siteContent, navigation } from '@/data/content';

const queryClient = new QueryClient();

function useReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  return (
    <header className="absolute inset-x-0 top-0 z-20 text-[#f5f0e6]">
      <div className="section-wrap flex h-20 items-center justify-between">
        <a href="#top" onClick={closeMenu} className="group flex items-center" data-testid="link-logo">
          <img src={siteContent.logoImage} alt={`${siteContent.name} logo`} className="h-7 w-[22px] object-cover" />
          <span className="ml-3 hidden font-mono-custom text-[10px] uppercase tracking-[0.2em] text-[#d6d0c4]/70 sm:inline">personal studio</span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} className="font-mono-custom text-[10px] uppercase tracking-[0.12em] text-[#d6d0c4]/80 transition-colors hover:text-[#d9b979]" data-testid={`link-nav-${label.toLowerCase()}`}>
              {label}
            </a>
          ))}
        </nav>
        <a href={`mailto:${siteContent.contact.email}`} className="hidden items-center gap-2 border-b border-[#c9a76a] pb-1 font-mono-custom text-[10px] uppercase tracking-[0.14em] text-[#f5f0e6] transition-colors hover:text-[#d9b979] sm:flex" data-testid="link-header-email">
          Start a conversation <ArrowUpRight size={13} strokeWidth={1.5} />
        </a>
        <button type="button" onClick={() => setOpen(!open)} className="flex min-h-11 min-w-11 items-center justify-center rounded-sm p-2 lg:hidden" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} data-testid="button-menu">
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-[#d6d0c4]/20 bg-[#102e29] px-5 py-5 sm:px-8 sm:py-6 lg:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-2 sm:gap-5">
            {navigation.map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu} className="inline-flex min-h-11 items-center font-display text-xl text-[#f5f0e6] transition-colors hover:text-[#d9b979] sm:text-2xl" data-testid={`link-mobile-${label.toLowerCase()}`}>{label}</a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[min(700px,100svh)] overflow-hidden bg-[#102e29] text-[#f5f0e6] lg:min-h-[780px]">
      <div className="absolute inset-0 lg:left-[37%]">
        <img src={siteContent.heroImage} alt="Oluwadamisola Adeyinka smiling in a bright floral shirt" className="hero-photo h-full w-full object-cover object-[center_18%] opacity-80 lg:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102e29] via-[#102e29]/65 to-transparent lg:from-[#102e29] lg:via-[#102e29]/35 lg:to-transparent" />
        <div className="absolute inset-0 bg-[#102e29]/20" />
      </div>
      <div className="relative mx-auto flex min-h-[min(700px,100svh)] w-full max-w-[90rem] flex-col items-start justify-end px-5 pb-10 pt-28 sm:px-10 sm:pb-12 lg:min-h-[780px] lg:flex-row lg:items-center lg:justify-start lg:px-20 lg:pb-0">
        <div className="w-full min-w-0 max-w-[690px]">
          <div className="reveal mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[#d9b979] sm:mb-7">
            <span className="h-px w-8 shrink-0 bg-[#d9b979] sm:w-10" />
            <span className="min-w-0 font-mono-custom text-[10px] uppercase leading-[1.8] tracking-[0.1em] sm:text-xs sm:tracking-[0.14em]">Lagos, Nigeria · Personal studio</span>
          </div>
          <h1 className="reveal reveal-delay-1 font-display text-[clamp(2.2rem,11vw,8.75rem)] leading-[.9] tracking-[-0.06em] text-[#f5f0e6]">
            Oluwadamisola <em className="text-[#d9b979]">Adeyinka</em>
          </h1>
          <p className="reveal reveal-delay-2 mt-7 max-w-md font-mono-custom text-[10px] uppercase leading-[1.8] tracking-[0.1em] text-[#f5f0e6]/75 sm:mt-8 sm:text-xs sm:tracking-[0.16em]">
            {siteContent.title}
          </p>
          <p className="reveal reveal-delay-2 mt-5 max-w-lg font-display text-[clamp(1.25rem,5.5vw,1.875rem)] leading-tight text-[#f5f0e6]">
            {siteContent.intro}
          </p>
          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a href="#work" className="group inline-flex min-h-11 items-center gap-3 border border-[#d9b979] bg-[#d9b979] px-4 py-3 font-mono-custom text-[10px] uppercase tracking-[0.14em] text-[#102e29] transition-colors hover:bg-transparent hover:text-[#f5f0e6] sm:px-5" data-testid="link-explore-work">
              Explore my work <ArrowUpRight size={15} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href={`mailto:${siteContent.contact.email}`} className="inline-flex min-h-11 items-center gap-3 border-b border-[#f5f0e6]/50 py-2 font-mono-custom text-[10px] uppercase tracking-[0.14em] text-[#f5f0e6] transition-colors hover:border-[#d9b979] hover:text-[#d9b979]" data-testid="link-hero-email">
              Get in touch <ArrowUpRight size={15} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-[#d6d0c4]/65 lg:flex">
        <span className="eyebrow">Scroll to explore</span><span className="h-px w-14 bg-[#d6d0c4]/45" />
      </div>
    </section>
  );
}

function SectionIntro({ number, label, title, children, dark = false }: { number: string; label: string; title: string; children?: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`mb-10 grid gap-7 sm:mb-14 lg:grid-cols-[180px_1fr] lg:gap-16 ${dark ? 'text-[#f5f0e6]' : ''}`}>
      <div className="flex items-start gap-3">
        <span className="font-mono-custom text-xs text-[#b89457]">{number}</span>
        <span className={`eyebrow ${dark ? 'text-[#d6d0c4]/65' : 'text-[#385c53]/70'}`}>{label}</span>
      </div>
      <div>
        <h2 className="font-display text-[clamp(2.25rem,6vw,5.5rem)] leading-[.94] tracking-[-0.05em]">{title}</h2>
        {children && <div className="mt-6 max-w-xl text-base leading-7 text-current/70">{children}</div>}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="bg-[#f5f0e6] py-16 sm:py-24 lg:py-32">
      <div className="section-wrap">
        <SectionIntro number="01" label="A little context" title="Who I am">
          <p>I work across storytelling, film, theatre, creative production, business and people-focused work. The common thread is always the same: making meaning, then making it matter.</p>
        </SectionIntro>
        <div className="grid items-start gap-12 lg:grid-cols-[.8fr_1.15fr] lg:gap-24">
          <div className="reveal relative max-w-sm">
            <div className="absolute -left-4 -top-4 h-24 w-24 border-l border-t border-[#c9a76a]" />
            <img src={siteContent.images.aboutImage} alt="Oluwadamisola seated in a thoughtful portrait" loading="lazy" className="relative aspect-[4/5] w-full object-cover" data-testid="img-about" />
            <p className="mt-4 max-w-[230px] font-mono-custom text-[10px] uppercase leading-5 tracking-[0.12em] text-[#385c53]/75">People, place and the stories we carry.</p>
          </div>
          <div className="reveal reveal-delay-1">
            <div className="space-y-5 font-display text-[1.5rem] leading-[1.35] text-[#183c34] sm:text-[2rem]">
              {siteContent.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-14 border-t border-[#183c34]/20 pt-5">
              <p className="eyebrow mb-5 text-[#385c53]/70">Personality snapshot</p>
              <div className="flex flex-wrap gap-x-7 gap-y-4">
                {siteContent.personality.map((item) => <span key={item} className="font-mono-custom text-xs text-[#183c34]"><span className="mr-2 text-[#b89457]">—</span>{item}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="bg-[#e7dfcf] py-16 sm:py-24 lg:py-32">
      <div className="section-wrap">
        <SectionIntro number="02" label="The thread so far" title="A story in progress">
          <p>Not a straight line. More like a collection of rooms, each teaching me something useful about ideas, people and the work of bringing both together.</p>
        </SectionIntro>
        <div className="relative">
          <div className="absolute bottom-0 left-[8px] top-0 w-px bg-[#183c34]/20 sm:left-[118px]" />
          <div className="space-y-0">
            {siteContent.journey.map((item, index) => (
              <div key={item.label} className="reveal group relative grid gap-5 border-b border-[#183c34]/15 py-7 first:pt-0 sm:grid-cols-[100px_1fr] sm:gap-10 sm:py-9">
                <div className="relative pl-8 font-mono-custom text-[10px] uppercase tracking-[0.12em] text-[#385c53]/75 sm:pl-0 sm:pt-1">
                  <span className="absolute left-[3px] top-1.5 h-[11px] w-[11px] rounded-full border-2 border-[#b89457] bg-[#e7dfcf] transition-colors group-hover:bg-[#b89457] sm:left-[113px]" />
                  {item.label}
                </div>
                <div className="pl-8 sm:pl-0">
                  <p className="font-display text-2xl text-[#183c34] sm:text-3xl">{item.title}</p>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-[#385c53]/80">{item.copy}</p>
                </div>
                <span className="absolute right-0 top-8 hidden font-mono-custom text-[10px] text-[#385c53]/50 sm:block">0{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: typeof siteContent.projects[number]; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.style.overflow = ''; };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#102e29]/80 p-3 backdrop-blur-sm sm:p-4" role="dialog" aria-modal="true" aria-labelledby="project-title" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="relative grid max-h-[90dvh] w-full max-w-4xl grid-cols-1 overflow-auto overscroll-contain bg-[#f5f0e6] md:grid-cols-[.8fr_1fr]">
        <button type="button" onClick={onClose} className="absolute right-3 top-3 z-10 flex min-h-11 min-w-11 items-center justify-center border border-[#f5f0e6]/30 bg-[#102e29] p-2 text-[#f5f0e6] transition-colors hover:bg-[#c9a76a] hover:text-[#102e29] sm:right-4 sm:top-4" aria-label="Close project details" data-testid="button-close-project"><X size={18} strokeWidth={1.5} /></button>
        <img src={project.image} alt={`${project.title} project`} className="h-52 w-full bg-[#31574d] object-contain p-2 sm:h-64 md:h-full" />
        <div className="min-w-0 p-5 sm:p-12">
          <p className="eyebrow text-[#b89457]">{project.year} · {project.medium}</p>
          <h2 id="project-title" className="mt-3 break-words font-display text-[clamp(2.1rem,9vw,3rem)] leading-none tracking-tight text-[#183c34] sm:mt-4">{project.title}</h2>
          <p className="mt-5 font-mono-custom text-xs uppercase tracking-[0.1em] text-[#385c53]">{project.role}</p>
          <p className="mt-8 text-base leading-7 text-[#385c53]">{project.details}</p>
          <p className="mt-5 text-sm leading-6 text-[#385c53]/75">{project.description}</p>
          <div className="mt-10 flex items-center gap-4 border-t border-[#183c34]/15 pt-5">
            <button type="button" onClick={onClose} className="ml-auto inline-flex items-center gap-2 font-mono-custom text-[10px] uppercase tracking-[0.12em] text-[#183c34] hover:text-[#b89457]" data-testid="button-return-projects">Close <X size={13} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CreativeWork() {
  const [selected, setSelected] = useState<typeof siteContent.projects[number] | null>(null);
  return (
    <section id="work" className="bg-[#183c34] py-16 text-[#f5f0e6] sm:py-24 lg:py-32">
      <div className="section-wrap">
        <SectionIntro number="03" label="Creative work" title="Stories I tell" dark>
          <p>Stage. Screen. People. Culture. The projects change shape, but I keep returning to stories with a pulse — stories that leave a little room for the audience to find themselves.</p>
        </SectionIntro>
        <div id="projects" className="grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-12">
          {siteContent.projects.map((project, index) => (
            <button type="button" key={project.id} onClick={() => setSelected(project)} className={`project-image group text-left ${index === 0 ? 'lg:col-span-7' : index === 1 ? 'lg:col-span-5 lg:mt-20' : index === 2 ? 'lg:col-span-5' : index === 3 ? 'lg:col-span-4 lg:mt-16' : 'lg:col-span-3'}`} data-testid={`button-project-${project.id}`}>
              <div className={`relative overflow-hidden bg-[#31574d] ${index === 0 ? 'aspect-[1.2/1]' : index === 1 ? 'aspect-[.92/1]' : 'aspect-[4/5]'}`}>
                <img src={project.image} alt={`${project.title}, ${project.medium}`} loading="lazy" className="h-full w-full object-contain opacity-90" />
                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-[#d9b979] text-[#183c34] opacity-100 transition-opacity sm:right-4 sm:top-4 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100"><ArrowUpRight size={17} strokeWidth={1.5} /></span>
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl text-[#f5f0e6]">{project.title}</h3>
                  <p className="mt-1 font-mono-custom text-[10px] uppercase tracking-[0.11em] text-[#d6d0c4]/60">{project.role} · {project.medium}</p>
                </div>
                <span className="font-mono-custom text-[10px] text-[#d9b979]">{project.year}</span>
              </div>
              <p className="mt-3 max-w-sm text-sm leading-6 text-[#d6d0c4]/70">{project.description}</p>
            </button>
          ))}
        </div>
        <div className="mt-20 flex items-center justify-between border-t border-[#f5f0e6]/15 pt-5">
          <span className="eyebrow text-[#d6d0c4]/60">More stories are taking shape</span>
           <a href={`mailto:${siteContent.contact.email}`} className="group inline-flex items-center gap-2 font-mono-custom text-[10px] uppercase tracking-[0.12em] text-[#d9b979] hover:text-[#f5f0e6]" data-testid="link-creative-email">Talk about a project <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
        </div>
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

function Ventures() {
  return (
    <section id="creative" className="bg-[#f5f0e6] py-16 sm:py-24 lg:py-32">
      <div className="section-wrap">
        <SectionIntro number="04" label="The company" title="Making room for ideas" />
        <div className="max-w-4xl border-y border-[#183c34]/20">
          <article className="grid gap-10 py-10 lg:grid-cols-[.86fr_1.14fr] lg:items-center lg:gap-14 lg:py-14">
            <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_38%,#31574d,#183c34_68%,#102e29)] p-5 sm:min-h-[380px]" data-testid="delta-arts-logo-panel">
              <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full border border-[#c9a76a]/30" />
              <div className="absolute -right-12 -top-14 h-40 w-40 rounded-full border border-[#d6d0c4]/15" />
              <img src={siteContent.ventures.delta.logo} alt="Delta Arts Entertainment — Film, Theatre, Media" className="relative h-full w-full max-w-[25rem] object-contain opacity-95 mix-blend-screen" data-testid="img-delta-arts-logo" />
            </div>
            <div>
              <p className="eyebrow text-[#b89457]">Creative production company</p>
              <h3 className="mt-4 font-display text-3xl leading-none text-[#183c34] sm:text-4xl">{siteContent.ventures.delta.title}</h3>
              <p className="mt-5 font-mono-custom text-xs uppercase tracking-[0.14em] text-[#385c53]">{siteContent.ventures.delta.tagline}</p>
              <p className="mt-7 max-w-md text-sm leading-7 text-[#385c53]/80">{siteContent.ventures.delta.copy}</p>
              <div className="mt-9 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {siteContent.ventures.delta.cards.map((card) => <div key={card} className="border-l-2 border-[#c9a76a] pl-3 text-sm text-[#183c34]">{card}</div>)}
              </div>
              <a href={siteContent.ventures.delta.link} target="_blank" rel="noreferrer" className="mt-10 inline-flex min-h-11 items-center gap-2 border-b border-[#183c34] pb-2 font-mono-custom text-[10px] uppercase tracking-[0.12em] text-[#183c34] hover:border-[#b89457] hover:text-[#b89457]" data-testid="link-delta-arts">Visit Delta Arts <ExternalLink size={13} /></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Podcast() {
  return (
    <section id="podcast" className="bg-[#102e29] py-16 text-[#f5f0e6] sm:py-24 lg:py-32">
      <div className="section-wrap">
        <SectionIntro number="05" label="The conversations" title={siteContent.podcast.title} dark>
          <p>{siteContent.podcast.copy}</p>
        </SectionIntro>
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
          <div className="reveal">
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-24 w-24 border-r border-t border-[#c9a76a]" />
              <img src={siteContent.podcast.image} alt="Dam and People Talk Relationship podcast artwork" loading="lazy" className="relative aspect-square w-full bg-[#102e29] object-contain p-2" data-testid="img-podcast" />
            </div>
            <p className="mt-5 max-w-xs font-mono-custom text-[10px] uppercase leading-5 tracking-[0.12em] text-[#d6d0c4]/65">A listening space for the people, questions and relationships that stay with us.</p>
          </div>
          <div className="reveal reveal-delay-1">
            <p className="eyebrow text-[#d9b979]">The show</p>
            <h3 className="mt-4 max-w-2xl font-display text-[clamp(1.85rem,9vw,3rem)] leading-[.98] text-[#f5f0e6] sm:text-6xl">{siteContent.podcast.tagline}</h3>
            <p className="mt-6 font-mono-custom text-xs uppercase tracking-[0.14em] text-[#d6d0c4]/65">{siteContent.podcast.host}</p>
            <a href={siteContent.podcast.link} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 border-b border-[#d9b979] pb-2 font-mono-custom text-[10px] uppercase tracking-[0.12em] text-[#d9b979] transition-colors hover:text-[#f5f0e6]" data-testid="link-podcast">Listen to the podcast <ExternalLink size={13} /></a>
            <div className="mt-16 border-t border-[#f5f0e6]/20">
              <div className="flex items-center justify-between border-b border-[#f5f0e6]/20 py-5">
                <p className="eyebrow text-[#d6d0c4]/60">Listen to latest episodes</p>
                <span className="font-mono-custom text-[10px] text-[#d9b979]">13—15</span>
              </div>
              {siteContent.podcast.episodes.map((episode) => (
                <div key={episode.number} className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-3 border-b border-[#f5f0e6]/15 py-5 sm:grid-cols-[72px_minmax(0,1fr)_auto] sm:items-center sm:gap-6">
                  <img src={episode.image} alt={`${episode.title} episode cover`} loading="lazy" className="h-14 w-14 object-cover sm:h-[4.5rem] sm:w-[4.5rem]" />
                  <div className="min-w-0">
                    <span className="font-mono-custom text-[10px] text-[#d9b979]">EPISODE {episode.number}</span>
                    <h4 className="mt-1 break-words font-display text-xl leading-tight text-[#f5f0e6] sm:text-2xl">{episode.title}</h4>
                  </div>
                  <div className="col-start-2 flex items-center gap-3 sm:col-start-auto">
                    <a href={episode.spotify} target="_blank" rel="noreferrer" aria-label={`Listen to ${episode.title} on Spotify`} title="Listen on Spotify" className="flex min-h-11 min-w-11 items-center justify-center text-[#1ed760] transition-transform hover:scale-110" data-testid={`link-episode-${episode.number}-spotify`}>
                      <SiSpotify size={23} />
                    </a>
                    {episode.apple && (
                      <a href={episode.apple} target="_blank" rel="noreferrer" aria-label={`Listen to ${episode.title} on Apple Podcasts`} title="Listen on Apple Podcasts" className="flex min-h-11 min-w-11 items-center justify-center text-[#b874ff] transition-transform hover:scale-110" data-testid={`link-episode-${episode.number}-apple`}>
                        <SiApplepodcasts size={23} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="bg-[#e7dfcf] py-16 sm:py-24 lg:py-32">
      <div className="section-wrap">
        <SectionIntro number="06" label="Professional life" title="The work behind the work">
          <p>Different titles, same instinct: notice what people need, bring order to the moving parts, and help good work reach the people it is for.</p>
        </SectionIntro>
        <div className="border-t border-[#183c34]/20">
          {siteContent.experience.map((item, index) => {
            const metadata = [item.org, item.role, item.dates].filter(Boolean);
            return (
              <details key={item.category} className="group border-b border-[#183c34]/20" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 marker:hidden">
                  <div className="flex min-w-0 items-start gap-4 sm:items-center sm:gap-12"><span className="font-mono-custom text-[10px] text-[#b89457]">0{index + 1}</span><h3 className="min-w-0 break-words font-display text-xl leading-tight text-[#183c34] sm:text-3xl">{item.category}</h3></div>
                  <ChevronDown size={19} strokeWidth={1.4} className="shrink-0 text-[#385c53] transition-transform group-open:rotate-180" />
                </summary>
                <div className={`grid gap-7 pb-8 pl-10 sm:pl-[4.4rem] ${metadata.length ? 'sm:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr_1fr]' : 'sm:grid-cols-2'}`}>
                  {metadata.length > 0 && <div className="font-mono-custom text-[10px] uppercase leading-6 tracking-[0.1em] text-[#385c53]/70">{metadata.map((detail) => <p key={detail}>{detail}</p>)}</div>}
                  <p className="max-w-md text-sm leading-7 text-[#385c53]">{item.copy}</p>
                  <ul className="space-y-2 text-sm text-[#183c34]">{item.achievements.map((achievement) => <li key={achievement} className="flex items-center gap-2"><Check size={14} className="text-[#b89457]" strokeWidth={1.5} />{achievement}</li>)}</ul>
                </div>
              </details>
            );
          })}
        </div>
        <div className="mt-16 grid gap-8 border-t border-[#183c34]/20 pt-10 lg:grid-cols-[180px_1fr]">
          <span className="eyebrow text-[#385c53]/70">Skills</span>
          <div className="grid gap-9 sm:grid-cols-3">
            {Object.entries(siteContent.skills).map(([category, skills]) => <div key={category}><h3 className="font-display text-2xl text-[#183c34]">{category}</h3><ul className="mt-4 space-y-2">{skills.map((skill) => <li key={skill} className="text-sm text-[#385c53]">{skill}</li>)}</ul></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Leisure() {
  return (
    <section id="leisure" className="bg-[#f5f0e6] py-16 sm:py-24 lg:py-32">
      <div className="section-wrap">
        <SectionIntro number="07" label="Beyond the brief" title="When I’m not working">
          <p>There is a life around the work: giving back, long conversations, new places, familiar faces and the small details that become stories later.</p>
        </SectionIntro>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.leisure.map((item, index) => (
            <article key={item.image} className={`reveal leisure-image group ${item.featured ? 'sm:col-span-2 lg:col-span-2 lg:grid lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-8' : index === 1 ? 'lg:mt-14' : ''}`}>
              <div className={`${item.featured ? 'aspect-[1.35/1]' : 'aspect-[1.18/1]'} overflow-hidden bg-[#e7dfcf]`}><img src={item.image} alt={item.featured ? `${item.title} — personal life and interests` : 'Personal gallery photograph'} loading="lazy" className="h-full w-full object-cover" /></div>
              {item.featured && (
                <div className="pb-1">
                  <p className="mt-5 eyebrow text-[#b89457] lg:mt-0">Community work</p>
                  <h3 className="mt-4 font-display text-2xl text-[#183c34]">{item.title}</h3>
                  {item.partner && <p className="mt-2 font-mono-custom text-[10px] uppercase tracking-[0.12em] text-[#b89457]">{item.partner}</p>}
                  <p className="mt-2 max-w-md text-sm leading-6 text-[#385c53]/80">{item.copy}</p>
                  {item.link && <a href={item.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 border-b border-[#183c34] pb-2 font-mono-custom text-[10px] uppercase tracking-[0.12em] text-[#183c34] transition-colors hover:border-[#b89457] hover:text-[#b89457]" data-testid="link-pathex">Visit PathEx Education Foundation <ExternalLink size={13} /></a>}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppContent() {
  useReveal();
  useEffect(() => {
    document.title = 'Oluwadamisola Adeyinka | Writer, Filmmaker & Producer';
    const description = 'The personal portfolio of Oluwadamisola Adeyinka — writer, filmmaker, producer, podcast host, creative professional and storyteller based in Lagos, Nigeria.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', description);
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title'); ogTitle.setAttribute('content', document.title); document.head.appendChild(ogTitle);
    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description'); ogDescription.setAttribute('content', description); document.head.appendChild(ogDescription);
    const twitterCard = document.querySelector('meta[name="twitter:card"]') || document.createElement('meta');
    twitterCard.setAttribute('name', 'twitter:card'); twitterCard.setAttribute('content', 'summary_large_image'); document.head.appendChild(twitterCard);
    const twitterDescription = document.querySelector('meta[name="twitter:description"]') || document.createElement('meta');
    twitterDescription.setAttribute('name', 'twitter:description'); twitterDescription.setAttribute('content', description); document.head.appendChild(twitterDescription);
    const icon = document.querySelector('link[rel="icon"]') || document.createElement('link');
    icon.setAttribute('rel', 'icon'); icon.setAttribute('type', 'image/png'); icon.setAttribute('href', `${import.meta.env.BASE_URL}damisola-favicon.png`); document.head.appendChild(icon);
  }, []);
  return (
    <div className="grain min-h-[100dvh]">
      <Header />
      <main>
        <Hero />
        <About />
        <Journey />
        <CreativeWork />
        <Ventures />
          <Podcast />
        <Experience />
        <Leisure />
        <section className="bg-[#e7dfcf] py-16 sm:py-24 lg:py-32">
          <div className="section-wrap grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
            <SectionIntro number="08" label="The human bit" title="A few things about me" />
            <div className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
              {siteContent.facts.map((fact, index) => <p key={fact} className="reveal border-t border-[#183c34]/20 py-5 font-display text-2xl leading-tight text-[#183c34] sm:text-3xl"><span className="mr-3 font-mono-custom text-[10px] text-[#b89457]">0{index + 1}</span>{fact}</p>)}
            </div>
          </div>
        </section>
        <section className="bg-[#f5f0e6] py-16 sm:py-24 lg:py-32">
          <div className="section-wrap">
            <SectionIntro number="09" label="Selected highlights" title="Things worth noting" />
            <div className="grid border-y border-[#183c34]/20 md:grid-cols-2 lg:grid-cols-5">
              {siteContent.achievements.map((item) => <div key={item.label} className="border-b border-[#183c34]/20 py-6 md:px-5 md:[&:nth-child(5)]:border-b-0 lg:border-b-0 lg:border-r lg:py-7 lg:first:pl-0 lg:last:border-r-0"><p className="font-display text-4xl text-[#183c34]">{item.value}</p><p className="mt-2 max-w-[120px] text-xs leading-5 text-[#385c53]/75">{item.label}</p></div>)}
            </div>
            <div className="mt-24 grid gap-10 border-t border-[#183c34]/20 pt-7 lg:grid-cols-[180px_1fr]">
              <span className="eyebrow text-[#385c53]/70">Kind words</span>
              <div className="grid gap-8 lg:grid-cols-3">
                {siteContent.testimonials.map((testimonial) => (
                  <blockquote key={testimonial.quote} className="border-t border-[#183c34]/20 pt-5">
                    <p className="font-display text-2xl leading-tight text-[#183c34]">“{testimonial.quote}”</p>
                    <cite className="mt-5 block font-mono-custom text-[10px] uppercase not-italic tracking-[0.12em] text-[#385c53]/70">{[testimonial.name, testimonial.role, testimonial.organisation].filter(Boolean).join(' · ')}</cite>
                  </blockquote>
                ))}
              </div>
            </div>
            <div className="mt-20 grid gap-8 border-t border-[#183c34]/20 pt-7 lg:grid-cols-[180px_1fr]">
              <span className="eyebrow text-[#385c53]/70">Soundtrack</span>
              <a href={siteContent.playlist.link} target="_blank" rel="noreferrer" className="group flex max-w-3xl items-center justify-between gap-3 bg-[#183c34] p-4 text-[#f5f0e6] transition-colors hover:bg-[#102e29] sm:gap-6 sm:p-8" data-testid="link-spotify-playlist">
                <div className="flex min-w-0 items-start gap-3 sm:gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#1ed760] text-[#102e29] sm:h-11 sm:w-11"><SiSpotify size={24} /></span>
                  <div className="min-w-0">
                    <p className="eyebrow text-[#d9b979]">Personal playlist</p>
                    <h3 className="mt-2 break-words font-display text-[clamp(1.5rem,7vw,1.875rem)] leading-tight">{siteContent.playlist.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-[#d6d0c4]/70">{siteContent.playlist.copy}</p>
                    <span className="mt-5 inline-flex items-center gap-2 font-mono-custom text-[10px] uppercase tracking-[0.12em] text-[#d9b979]">Open playlist <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
                  </div>
                </div>
                <SiSpotify size={30} className="hidden shrink-0 text-[#1ed760] sm:block" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#102e29] px-5 pb-8 text-[#f5f0e6] sm:px-10">
        <div className="mx-auto flex max-w-[78rem] flex-col gap-7 border-t border-[#f5f0e6]/20 pt-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-2xl">Oluwadamisola Adeyinka<span className="text-[#d9b979]">.</span></p>
            <p className="mt-2 font-mono-custom text-[10px] uppercase tracking-[0.12em] text-[#d6d0c4]/60">Writer. Filmmaker. Producer. Creative.</p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 font-mono-custom text-[10px] uppercase tracking-[0.1em] text-[#d6d0c4]/65">
              <a href={`mailto:${siteContent.contact.email}`} className="inline-flex min-h-11 items-center transition-colors hover:text-[#d9b979]" data-testid="footer-email">{siteContent.contact.email}</a>
              <a href={`tel:${siteContent.contact.phone}`} className="inline-flex min-h-11 items-center transition-colors hover:text-[#d9b979]" data-testid="footer-phone">{siteContent.contact.phone}</a>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:items-end">
            <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono-custom text-[10px] uppercase tracking-[0.1em] text-[#d6d0c4]/65">
              <a href={siteContent.contact.linkedin} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center transition-colors hover:text-[#d9b979]" data-testid="footer-linkedin">LinkedIn</a>
              <a href={siteContent.contact.instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center transition-colors hover:text-[#d9b979]" data-testid="footer-instagram">Instagram</a>
              <a href={siteContent.contact.youtube} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center transition-colors hover:text-[#d9b979]" data-testid="footer-youtube">YouTube</a>
            </div>
            <p className="font-mono-custom text-[10px] uppercase tracking-[0.1em] text-[#d6d0c4]/60">Made with stories, curiosity and a little stubbornness.</p>
            <p className="font-mono-custom text-[10px] text-[#d6d0c4]/40">© {new Date().getFullYear()} Oluwadamisola Adeyinka</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ErrorBoundary resetKey={window.location.pathname}>
          <AppContent />
        </ErrorBoundary>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;