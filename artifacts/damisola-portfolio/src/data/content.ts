import heroImage from '@assets/Damisola_Image_(1)_1790002590467.jpeg';
import teachingImage from '@assets/eip_6_1790002640602.jpg';
import teamImage from '@assets/eip_7_1790002640603.jpg';
import beachImage from '@assets/2026_02_14_18_44_IMG_0633_1790002770696.JPG';
import peopleImage from '@assets/2026_04_02_11_51_IMG_1273_1790002770697.JPG';

// EDITABLE CONTENT: replace copy, links, images and contact details here.
export const siteContent = {
  name: 'Oluwadamisola Adeyinka',
  title: 'Writer. Filmmaker. Producer. Creative.',
  location: 'Lagos, Nigeria',
  heroImage,
  images: { heroImage, teachingImage, teamImage, beachImage, peopleImage },
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
    { label: 'Entrepreneurship', title: 'Delta Arts Entertainment and Nollyfi', copy: 'Creating platforms and companies that help good ideas move.' },
  ],
  projects: [
    { id: 'taaam', title: 'TAAAM', year: '2022', medium: 'Stage Production', role: 'Writer / Producer', description: 'A landmark independent student theatre production staged at the University of Lagos Main Auditorium.', image: teamImage, details: 'TAAAM brought a large, energetic ensemble together around a story made for a live audience. It was a lesson in building something ambitious with limited resources and a lot of belief.' },
    { id: 'ese-oba', title: 'Ese Oba – The King’s Foot', year: '2025', medium: 'Stage Production', role: 'Writer', description: 'A stage production presented at Terra Kulture.', image: teachingImage, details: 'A story written for the theatre, shaped by language, place and the charge of a room gathered to listen.' },
    { id: 'pop-socks', title: 'Pop Socks', year: '—', medium: 'Stage / Theatre', role: 'Writer', description: 'A coming-of-age story about family expectations, identity, ambition and the courage to choose your own path.', image: peopleImage, details: 'Pop Socks lives in the space between what a family hopes for you and what you quietly know about yourself.' },
    { id: 'kola-60', title: 'Kola Through To 60', year: '—', medium: 'Film / Biographical Project', role: 'Writer / Creative Producer', description: 'A biographical project exploring the life and achievements of Dr. Kola Adesina MFR.', image: beachImage, details: 'A biographical project rooted in a life of work, leadership and achievement. Project link to be added.' },
    { id: 'greenlight', title: 'Greenlight', year: '—', medium: 'Film Project', role: 'Writer / Producer', description: 'A film project in development.', image: heroImage, details: 'Editable project notes, collaborators and link can be added here when ready.' },
  ],
  ventures: {
    delta: { title: 'Delta Arts Entertainment', tagline: 'Original. Creative. Excellent.', copy: 'A creative production company focused on theatre, film, storytelling, events and original experiences.', link: 'mailto:adeyinkadamisola@gmail.com', cards: ['Theatre & live production', 'Film & story development', 'Events & original experiences'] },
    nollyfi: { title: 'Nollyfi', tagline: 'Nollyfi-ing all limits to creativity.', copy: 'A creative platform designed to help creative ideas move from validation to production and promotion.', link: 'mailto:adeyinkadamisola@gmail.com' },
  },
  podcast: {
    title: 'Dam and People Talk Relationship',
    shortTitle: 'Dam & People',
    tagline: 'Conversations about people, connection and the stories between us.',
    copy: 'A podcast platform where curiosity becomes conversation. Dam and People Talk Relationship is a major part of my creative journey — a space for exploring how people meet, grow, disagree, love and make meaning together.',
    host: 'Hosted by Oluwadamisola Adeyinka',
    image: peopleImage,
    link: 'mailto:adeyinkadamisola@gmail.com', // Replace with the live podcast or listening-platform URL.
    episodes: [
      { number: '01', title: 'Episode title to be added', copy: 'Guest and conversation details to be added.' },
      { number: '02', title: 'Episode title to be added', copy: 'Guest and conversation details to be added.' },
      { number: '03', title: 'Episode title to be added', copy: 'Guest and conversation details to be added.' },
    ],
  },
  experience: [
    { category: 'Customer Success & Business Operations', org: 'Editable organisation', role: 'Editable role', dates: 'Editable dates', copy: 'Experience helping businesses adopt digital tools, organise operations and solve practical problems.', achievements: ['Adoption and onboarding', 'Process improvement', 'People-centred problem solving'] },
    { category: 'Executive / Administrative Support', org: 'Editable organisation', role: 'Editable role', dates: 'Editable dates', copy: 'Calendar coordination, research, meeting documentation, stakeholder communication, project follow-up and executive support.', achievements: ['Clear documentation', 'Thoughtful follow-through', 'Reliable coordination'] },
    { category: 'Creative Production', org: 'Delta Arts Entertainment', role: 'Writer / Producer', dates: 'Editable dates', copy: 'Writing, directing, production coordination, stakeholder management, sponsorship and partnerships.', achievements: ['Story development', 'Production planning', 'Creative partnerships'] },
    { category: 'Education', org: 'Editable organisation', role: 'STEM & language educator', dates: 'Editable dates', copy: 'STEM teaching, chemistry education and language teaching.', achievements: ['Chemistry education', 'Yoruba language teaching', 'Accessible learning'] },
  ],
  skills: {
    Creative: ['Screenwriting', 'Playwriting', 'Story Development', 'Acting', 'Directing', 'Film Production', 'Theatre Production', 'Creative Strategy'],
    Professional: ['Customer Success', 'Business Development', 'Project Coordination', 'Research', 'Executive Assistance', 'Stakeholder Management', 'Communication'],
    Digital: ['Google Workspace', 'Notion', 'Calendly', 'Zoho Analytics', 'AI tools', 'Digital content production'],
  },
  leisure: [
    { title: 'Music', copy: 'The right song can change the temperature of a room.', image: peopleImage },
    { title: 'Movies & theatre', copy: 'Still watching closely. Still taking notes.', image: teachingImage },
    { title: 'Conversations', copy: 'Especially the ones that go somewhere unexpected.', image: teamImage },
    { title: 'Exploring Lagos', copy: 'Looking for the next corner, plate, story or view.', image: beachImage },
    { title: 'People', copy: 'Time with good people is never time wasted.', image: peopleImage },
    { title: 'Learning', copy: 'Keeping the beginner’s mind switched on.', image: heroImage },
  ],
  facts: ['I like good stories.', 'I enjoy conversations that go somewhere.', 'I believe creative work should still solve real problems.', 'I like people.', 'I enjoy building things from scratch.', 'I ask a lot of questions.', 'I take ideas seriously, but I do not take myself too seriously.'],
  achievements: [
    { value: '10+', label: 'Years writing stories' },
    { value: '15+', label: 'Scripts developed' },
    { value: '5+', label: 'Stage productions / plays' },
    { value: '1,500+', label: 'Audience reached at TAAAM' },
    { value: '90%+', label: 'Audience satisfaction from selected productions' },
  ],
  testimonials: [{ quote: 'Add testimonial here.', name: 'Name to be added', role: 'Role to be added', organisation: 'Organisation to be added' }],
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