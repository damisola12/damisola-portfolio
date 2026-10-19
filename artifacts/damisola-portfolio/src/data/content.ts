import heroImage from '@/assets/optimized/hero.webp';
import logoImage from '@/assets/optimized/site-logo.webp';
import teachingImage from '@assets/eip_6_1790002640602.jpg';
import aboutImage from '@/assets/optimized/about.webp';
import exploringImage from '@/assets/optimized/exploring.webp';
import festivalGroupImage from '@/assets/optimized/festival-group.webp';
import cultureImage from '@/assets/optimized/culture.webp';
import danceImage from '@/assets/optimized/dance.webp';
import gatheringImage from '@/assets/optimized/gathering.webp';
import tennisImage from '@/assets/optimized/tennis.webp';
import gardenImage from '@/assets/optimized/garden.webp';
import eventImage from '@/assets/optimized/event.webp';
import venueImage from '@/assets/optimized/venue.webp';
import outdoorImage from '@/assets/optimized/outdoor.webp';
import eseObaPoster from '@assets/Ese_Oba_Poster_1790070578683.jpg';
import greenlightPoster from '@assets/Greenlight_Poster_1790070578686.jpg';
import ktt60Poster from '@assets/KTT60_Poster_1790070578687.jpg';
import taaamPoster from '@assets/TAAAM_Poster_1790070578687.jpg';
import defendantPoster from '@assets/The_Defendant_Poster_1790070578688.png';
import popSocksPoster from '@assets/Pop_Socks_1_1790070606124.png';
import iftdPoster from '@assets/IFTD_IMAGE_1790070780257.jpg';
import deltaArtsLogo from '@assets/DELTA_ARTS_LOGO_NO-BG_1790070841394.png';
import podcastCover from '@/assets/optimized/podcast-cover.webp';
import episode15Cover from '@/assets/optimized/episode-15.webp';
import episode14Cover from '@/assets/optimized/episode-14.webp';
import episode13Cover from '@/assets/optimized/episode-13.webp';

type LeisureItem = {
  image: string;
  title?: string;
  copy?: string;
  partner?: string;
  link?: string;
  featured?: boolean;
};

// EDITABLE CONTENT: replace copy, links, images and contact details here.
export const siteContent = {
  name: 'Oluwadamisola Adeyinka',
  title: 'Writer. Filmmaker. Producer. Creative.',
  location: 'Lagos, Nigeria',
  heroImage,
  logoImage,
  images: { heroImage, aboutImage },
  intro: 'I turn ideas, stories and people into experiences worth remembering.',
  about: [
    'I am a writer, actor, director and producer with a strong interest in stories that reflect people, culture, relationships, ambition and everyday life.',
    'I have written for stage and screen, worked in theatre and film production, and developed projects that bring together storytelling, entertainment, education and business.',
    'I also have professional experience in customer success, business development, research, administration and working with people and organisations to turn ideas into practical outcomes.',
  ],
  personality: ['A storyteller', 'A people person', 'A problem solver', 'A creative thinker', 'A producer', 'A lifelong learner'],
  journey: [
    { label: 'Education', title: 'BSc Applied Chemistry', copy: 'A scientific foundation that keeps curiosity, structure and questions at the centre of my work.' },
    { label: 'Teaching', title: 'Chemistry / STEM education and Yoruba language teaching', copy: 'Making complex ideas feel human, clear and worth engaging with.' },
    { label: 'Customer Success', title: 'Digital tools, better operations', copy: 'Helping businesses and individuals adopt digital tools and improve how their work gets done.' },
    { label: 'Theatre', title: 'Writing, acting, directing and producing', copy: 'The room, the rehearsal, the live exchange — theatre taught me to listen closely.' },
      { label: 'Film', title: 'Screenwriting, directing and production', copy: 'Building stories for the screen with care for both the idea and the people carrying it.' },
      { label: 'Podcast', title: 'Dam and People Talk Relationship', copy: 'Making room for honest conversations about people, connection and the relationships that shape our lives.' },
    { label: 'Entrepreneurship', title: 'Delta Arts Entertainment', copy: 'Creating a creative company that helps good ideas move.' },
  ],
  projects: [
    { id: 'taaam', title: 'Two and a Half Men/t (TAAAM)', year: '2022', medium: 'Stage Production', role: 'Writer / Producer', description: 'A landmark theatre production staged at the University of Lagos Main Auditorium.', image: taaamPoster, details: 'Two and a Half Men/t brought a large, energetic ensemble together around a story made for a live audience. Written and produced by Oluwadamisola Adeyinka.' },
    { id: 'ese-oba', title: 'Ese Oba – The King’s Foot', year: '2025', medium: 'Stage Production', role: 'Writer / Producer', description: 'A stage production presented at Terra Kulture Arena.', image: eseObaPoster, details: 'A story shaped by language, place and the charge of a room gathered to listen. Written and produced by Oluwadamisola Adeyinka.' },
    { id: 'pop-socks', title: 'Pop Socks', year: '—', medium: 'Stage / Theatre', role: 'Writer / Producer', description: 'A coming-of-age story about family expectations, identity, ambition and the courage to choose your own path.', image: popSocksPoster, details: 'Pop Socks lives in the space between what a family hopes for you and what you quietly know about yourself. Written and produced by Oluwadamisola Adeyinka.' },
    { id: 'kola-60', title: 'Kola Through To 60', year: '—', medium: 'Stage Performance', role: 'Writer / Producer', description: 'A biographical stage performance exploring the life and achievements of Dr. Kola Adesina MFR.', image: ktt60Poster, details: 'A biographical story rooted in a life of work, leadership and achievement. Written and produced by Oluwadamisola Adeyinka.' },
    { id: 'greenlight', title: 'Greenlight', year: '2022', medium: 'Stage / Film Project', role: 'Writer / Director', description: 'A story about consent, communication and the choices we make before moving forward.', image: greenlightPoster, details: 'Greenlight is a story written and directed by Oluwadamisola Adeyinka.' },
    { id: 'the-defendant', title: 'The Defendant', year: '—', medium: 'Stage Play', role: 'Writer', description: 'A play presented by The New House.', image: defendantPoster, details: 'A Daniel Omogunloye play written by Oluwadamisola Adeyinka.' },
    { id: 'i-find-the-defendant', title: 'I Find the Defendant', year: '2026', medium: 'Short Film', role: 'Writer', description: 'A short film built around memory, perspective and the Rashomon effect.', image: iftdPoster, details: 'A short film written by Oluwadamisola Adeyinka.' },
  ],
  ventures: {
    delta: { title: 'Delta Arts Entertainment', tagline: 'Film | Theatre | Media.', copy: 'A creative production company focused on theatre, film, storytelling, events and original experiences.', logo: deltaArtsLogo, link: 'mailto:adeyinkadamisola@gmail.com', cards: ['Theatre & live production', 'Film & story development', 'Events & original experiences'] },
  },
  podcast: {
    title: 'Dam and People Talk Relationship',
    shortTitle: 'Dam & People',
    tagline: 'Conversations about people, connection and the stories between us.',
    copy: 'A podcast platform where curiosity becomes conversation. Dam and People Talk Relationship is a major part of my creative journey — a space for exploring how people meet, grow, disagree, love and make meaning together.',
    host: 'Hosted by Oluwadamisola Adeyinka',
    image: podcastCover,
    link: 'https://rss.com/podcasts/dptr-dam-and-precious-talk-relationships',
    episodes: [
      { number: '15', title: 'Talking About PPD', image: episode15Cover, spotify: 'https://open.spotify.com/episode/50BDxXHW1iI7Gb6d9tdz20?si=-3CW1k76SKSuvaqLxIaQAQ', apple: 'https://podcasts.apple.com/us/podcast/dptr-dam-and-people-talk-relationships/id1896800781?i=1000788331199' },
      { number: '14', title: 'Geographical Thinking', image: episode14Cover, spotify: 'https://open.spotify.com/episode/4vEi1DDMvb7f9ElVvR8fbG?si=486c268d3a5a418a', apple: 'https://podcasts.apple.com/us/podcast/dptr-dam-and-people-talk-relationships/id1896800781?i=1000784996736' },
      { number: '13', title: 'Roles in Relationships', image: episode13Cover, spotify: 'https://open.spotify.com/episode/2jpi3b7YqGm9XQaWvrw0kL?si=0Llk7fGyTi2p31NFrtmSwA' },
    ],
  },
  experience: [
    { category: 'Customer Success & Business Operations', org: '', role: '', dates: '', copy: 'Experience helping businesses adopt digital tools, organise operations and solve practical problems.', achievements: ['Adoption and onboarding', 'Process improvement', 'People-centred problem solving'] },
    { category: 'Executive / Administrative Support', org: '', role: '', dates: '', copy: 'Calendar coordination, research, meeting documentation, stakeholder communication, project follow-up and executive support.', achievements: ['Clear documentation', 'Thoughtful follow-through', 'Reliable coordination'] },
    { category: 'Creative Production', org: 'Delta Arts Entertainment', role: 'Writer / Producer', dates: '', copy: 'Writing, directing, production coordination, stakeholder management, sponsorship and partnerships.', achievements: ['Story development', 'Production planning', 'Creative partnerships'] },
    { category: 'Education', org: '', role: 'STEM & language educator', dates: '', copy: 'STEM teaching, chemistry education and language teaching.', achievements: ['Chemistry education', 'Yoruba language teaching', 'Accessible learning'] },
  ],
  skills: {
    Creative: ['Screenwriting', 'Playwriting', 'Story Development', 'Acting', 'Directing', 'Film Production', 'Theatre Production', 'Creative Strategy'],
    Professional: ['Customer Success', 'Business Development', 'Project Coordination', 'Research', 'Executive Assistance', 'Stakeholder Management', 'Communication'],
    Digital: ['Google Workspace', 'Notion', 'Calendly', 'Zoho Workspace', 'AI tools', 'Digital content production'],
  },
  leisure: [
    { title: 'Give back', copy: 'PathEx Education Foundation is an education foundation focused on Ultimate and Penultimate students in Nigeria, tackling career decision problems and carrying the message: School Is Not A Scam.', image: teachingImage, partner: 'With Precious Usuwa', link: 'https://pathex.vercel.app', featured: true },
    { image: festivalGroupImage },
    { image: danceImage },
    { image: exploringImage },
    { image: gatheringImage },
    { image: cultureImage },
    { image: tennisImage },
    { image: gardenImage },
    { image: eventImage },
    { image: venueImage },
    { image: outdoorImage },
  ] as LeisureItem[],
  facts: ['I LOVE ANIMALS.', 'I like good stories.', 'I enjoy conversations that go somewhere.', 'I believe creative work should still solve real problems.', 'I like people.', 'I enjoy building things from scratch.', 'I ask a lot of questions.', 'I take ideas seriously, but I do not take myself too seriously.'],
  achievements: [
    { value: '10+', label: 'Years writing stories' },
    { value: '15+', label: 'Scripts developed' },
    { value: '5+', label: 'Stage productions / plays' },
    { value: '1,500+', label: 'Audience reached at TAAAM' },
    { value: '90%+', label: 'Audience satisfaction from selected productions' },
  ],
  testimonials: [
    { quote: 'You’re such a kind man, you care deeply about your students and about just anyone, and not in a way that seems glaring, in subtle ways that often go unnoticed.', name: 'Blossom Omoruyi', role: '', organisation: '' },
    { quote: 'Damisola is such a life of the party, no dull moments around him and he argues A LOT! Cool guy.', name: 'Anonymous', role: '', organisation: '' },
    { quote: 'His love language is definitely showing up with those little things that you didn’t think you needed.', name: 'Anonymous', role: '', organisation: '' },
  ],
  playlist: {
    title: 'The soundtrack',
    copy: 'A little playlist for the rooms, road trips and in-between moments.',
    link: 'https://open.spotify.com/playlist/5VzzOeqVXHptjPTdPdiX1Y?si=b7d2e5cfe13e4124',
  },
  contact: {
    email: 'adeyinkadamisola@gmail.com',
    phone: '+2348101344189',
    linkedin: 'https://www.linkedin.com/in/oluwadamisola-adeyinka/',
    instagram: 'https://www.instagram.com/delta.writer/',
    youtube: 'https://www.youtube.com/@delta.writer',
  },
};

export const navigation = [
  ['About', '#about'], ['Work', '#work'], ['Creative', '#creative'], ['Podcast', '#podcast'], ['Experience', '#experience'], ['Projects', '#projects'], ['Leisure', '#leisure'],
] as const;