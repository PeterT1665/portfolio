// Every word on the site lives here. To add a project, add one entry to `featured`
// (live demo, shown large) or `library` (everything else). Facts must match
// PROJECTS.md: no placement, rank or award that isn't confirmed there.

export type Shot = { src: string; alt: string; width: number; height: number }

const shot = (name: string, alt: string, height = 1000): Shot => ({
  src: `/img/${name}`,
  alt,
  width: 1600,
  height,
})

export const person = {
  name: 'Peter Trieu',
  email: 'ducphu1665@gmail.com',
  city: 'Melbourne, Australia',
  linkedin: 'https://www.linkedin.com/in/peter-trieu-8948823b7',
  github: 'https://github.com/PeterT1665',
  resume: '/Peter_Trieu_Resume.pdf',
}

// A picture in a scroll stage (the self intro and the cheer record).
export type Pic = { src: string; alt: string; caption: string; width: number; height: number; whole?: boolean } // whole: show the full picture, uncropped

const pic = (name: string, alt: string, caption: string, width = 1600, height = 2000, whole = false): Pic => ({ src: `/img/${name}`, alt, caption, width, height, whole })

export const hero = {
  title: 'Student athlete',
  lead: 'Final-year Computing student at the University of Melbourne by day, competitive cheerleader at the highest level by night. I build things, and I throw people in the air. Every project here is live. Pick one.',
  action: { label: 'See the projects', href: '#work' },
  story: { label: 'My journey', href: '/journey', note: 'From Hanoi to Melbourne: hackathons, an internship at MBBank, and what I want next.' },
  // Team photos: Peter asked for them on 27 Oct.
  photos: [
    pic('peter', 'Peter holding a trophy and pom-poms, a medal in his teeth', 'Me and my first gold', 1600, 1500),
    pic('voyager-team-2', 'The Voyager team striking a pose', 'Voyager team, CISSA Codebrew', 1600, 1200),
    pic('cheer-3', 'Legacy team on the Road to the Worlds stage', 'First international gold', 1600, 2133),
    pic('team-bumpin-2', 'BumpIn team with the Affinda judges', 'Affinda AI challenge, 3rd overall', 1600, 1066, true),
    pic('jacket', 'Peter in Melbourne at night', 'Melbourne, home for now', 1600, 2400),
  ],
}

export const nav = [
  { label: 'Projects', href: '/#work' },
  { label: 'Cheer', href: '/#cheer' },
  { label: 'Journey', href: '/journey' },
  { label: 'Contact', href: '/#contact' },
]

// How the live-status line checks a demo. `ping` is fetched in the background on
// page load, which also wakes Render's free servers before anyone clicks.
export type Status = { kind: 'static' } | { kind: 'server'; ping: string }

export type Featured = {
  name: string
  what: string
  result: string
  url: string
  repo?: string
  shot: Shot
  phone?: Shot // a phone-size screenshot, shown beside the desktop one
  more?: Shot[] // further screens, shown in turn as the visitor keeps scrolling
  status: Status
}

export const featured: Featured[] = [
  {
    name: 'BumpIn',
    what: 'AI rider and vendor desk for a festival crew',
    result: '3rd overall and Best Track, Affinda AI challenge',
    url: 'https://bumpin-demo.onrender.com',
    repo: 'https://github.com/PeterT1665/Bumpin',
    shot: shot('bumpin', 'BumpIn rider board: artist tickets grouped by stage, coloured by how many conflicts are left'),
    phone: { src: '/img/bumpin-phone', alt: "BumpIn on a phone: the production manager's list of what needs them, most urgent first", width: 1000, height: 2000 },
    status: { kind: 'server', ping: 'https://bumpin-demo.onrender.com/api/health' },
  },
  {
    name: 'Sport Personal Coach',
    what: 'Plans my football week around game days and calls random reaction cues in drills',
    result: 'Solo build, live demo with sample data',
    url: 'https://sport-coach-demo.duckdns.org',
    phone: { src: '/img/coach-phone', alt: "Sport Personal Coach on a phone: today's recovery session over a night view of a stadium", width: 1000, height: 2000 },
    repo: 'https://github.com/PeterT1665/Workout-Rag-Advisor',
    shot: shot('coach', 'Sport Personal Coach home screen: the week planned around one game, with today\'s recovery session'),
    status: { kind: 'static' },
  },
  {
    name: 'Fold-A2',
    what: 'A poker bot you can sit down and play',
    result: '10th of 41 teams, MAC hackathon',
    url: 'https://fold-a2-pokerroom.onrender.com',
    repo: 'https://github.com/PeterT1665/Fold-A2',
    shot: shot('poker', 'Fold A2 Poker Room: a hand in progress against five copies of the bot, standings and hand log beside the table', 894),
    status: { kind: 'server', ping: 'https://fold-a2-pokerroom.onrender.com/' },
  },
  {
    name: 'Voyager',
    what: "Rebuilds NASA's deep-space error correction, live",
    result: 'Best Product, CISSA Codebrew 2026',
    url: 'https://voyager-sepia-zeta.vercel.app',
    repo: 'https://github.com/5OFAKIND/Voyager',
    shot: shot('voyager', 'Voyager home screen: "Signals from beyond the void" over the Milky Way'),
    status: { kind: 'static' },
  },
  {
    name: 'ndAI',
    what: 'Chrome extension that stops company secrets being pasted into AI chatbots',
    result: 'Built in 24 hours, Forward: AI in Business',
    url: 'https://ndai-try.vercel.app/preview/',
    repo: 'https://github.com/massive-attack-team/ndAI',
    shot: shot('ndai-ext', 'ndAI in the browser: a prompt about a strategic plan blocked before it reaches the chatbot, tier 3 paraphrase match', 921),
    more: [shot('ndai-review', 'ndAI reviewing a file upload: restricted passages struck out, with a sanitised version to approve or keep', 897)],
    status: { kind: 'server', ping: 'https://ndai-detector-onnx.onrender.com/health' },
  },
]

export const workIntro =
  'Click any project name to open it and use it, live. Five projects, each deployed and running. Some servers sleep when nobody visits, so this page wakes them as you scroll.'

export type LibraryRow = { name: string; what: string; stack: string; note: string; url?: string }

export const library: LibraryRow[] = [
  { name: 'BumpIn', what: 'Festival rider and vendor CRM', stack: 'Python, FastAPI, React', note: '3rd overall, Best Track', url: 'https://bumpin-demo.onrender.com' },
  { name: 'Sport Personal Coach', what: 'Football training plan built around game days', stack: 'React, TypeScript, FastAPI, PWA', note: 'Solo build, live demo', url: 'https://sport-coach-demo.duckdns.org' },
  { name: 'Fold-A2', what: 'Poker bot and poker room', stack: 'Python', note: '10th of 41 teams', url: 'https://fold-a2-pokerroom.onrender.com' },
  { name: 'Voyager', what: 'Reed-Solomon image recovery', stack: 'JavaScript, Vite', note: 'Best Product, Codebrew', url: 'https://voyager-sepia-zeta.vercel.app' },
  { name: 'ndAI', what: 'Leak detector for AI prompts', stack: 'Python, ONNX, Chrome extension', note: '24-hour build', url: 'https://ndai-try.vercel.app/preview/' },
  { name: 'DsCube stock model', what: 'Which stocks to sell, ranked', stack: 'LightGBM, XGBoost, CatBoost', note: 'Kaggle competition', url: 'https://github.com/PeterT1665/DsCube---Kaggle---Stock-Prediction' },
  { name: 'GovAssist', what: 'Voice assistant for a government service, five agents', stack: 'Python, FastAPI, Android', note: 'Client project, screenshots only' },
  { name: 'Algothon 2026', what: 'Lead-lag trading strategy', stack: 'Python, own backtester', note: 'Team of four', url: 'https://github.com/four-of-a-kind-algothon-26/algothon-26' },
  { name: 'Alpha Decay Monitor', what: 'Live strategy drift alerts', stack: 'FastAPI, WebSocket', note: 'Catalyst hackathon' },
  { name: 'quanttrade', what: 'Quant research system', stack: 'Python', note: 'In progress', url: 'https://github.com/PeterT1665/Quant-Trading' },
  { name: 'Clock Off Properly', what: 'Campaign site with a live tally', stack: 'React, Vite', note: '1,948 minutes protected', url: 'https://clockoffproperly.netlify.app' },
]

export const about = {
  heading: "Hi, I'm Peter",
  chapters: [
    {
      title: 'Uni is just the beginning',
      body: "I'm in my final year of Computing and Software Systems at the University of Melbourne. Building projects inside my subjects taught me the basics. What I want now is to dive into open-ended problems that still need a solution.",
      photo: { label: 'Photo of Peter', note: 'photos/peter.jpg', src: '/img/night', alt: 'Peter in Melbourne at night, the Arts Centre spire behind him' },
    },
    {
      title: 'So I went looking for uncertainty',
      body: 'Hackathons give you one or two days, a vague problem and, often, teammates you met that morning. It is the closest thing to a real team I could find as a student, and it taught me to cut scope early and ship something that works.',
      photo: { label: 'Hackathon team photo', note: 'photos/team.jpg', src: '/img/team-bumpin', alt: 'The BumpIn team after the Affinda AI challenge' },
    },
    {
      id: 'mbbank',
      title: 'The gap I saw at MBBank',
      body: 'For three months I interned as a software engineer at MBBank in Vietnam, building an API validation feature in Java and Spring Boot. The bigger lesson was outside the code. In a developing country like Vietnam, we struggle to follow the solutions that developed countries already have. In one meeting, people asked an international strategist for a very foundational process, and that was when the problem became real to me. I wanted experience from overseas, here in Melbourne and Australia more broadly.',
      photo: { label: 'MBBank photo', note: 'photos/mbbank.jpg', src: '/img/hanoi', alt: 'A street in central Hanoi' },
    },
    {
      title: 'What next?',
      lead: 'Learn as much as possible from every opportunity I get, and carry it forward.',
      body: "I'm looking for software engineering and AI engineering internships now, and graduate roles from 2027. Startups, fintech, banks: anywhere that ships.",
      photo: { label: 'Melbourne photo', note: 'photos/melbourne.jpg', src: '/img/smile', alt: 'Peter laughing outside a Melbourne shop at night' },
    },
  ],
  strengths: ['High performer', 'Communication', 'Teamwork', 'Leading a team', 'Taking initiative', 'Hard work'],
  languages: 'I speak Vietnamese and English.',
}

export const cheer = {
  heading: 'Off the keyboard',
  // Peter's list, confirmed 27 Oct: 8 golds (3 national, 3 state, Winterfest, Aussie Gold International).
  body: "I'm a competitive cheerleader on the Legacy team at Southern Cross Cheer Club in Melbourne, competing at Level 7, the highest level. Same lesson as hackathons: you trust the people holding you up.",
  medals: [
    { icon: 'medal' as const, figure: '8', label: 'gold medals in Melbourne' },
    { icon: 'flag' as const, figure: '3', label: 'national titles, 2023 to 2025' },
    { icon: 'globe' as const, figure: 'Worlds', label: 'partial paid bid (a sponsored place) to compete at Worlds, won as 2025 Grand Champion' },
  ],
  record: [
    {
      place: 'In Melbourne',
      rows: [
        { year: '2025', event: 'Grand Champion', result: 'Partial paid bid to Worlds' },
        { year: '2025, 2024, 2023', event: 'National Champions, International Open Large Co-ed Level 7', result: 'Gold' },
        { year: '2025, 2024, 2023', event: 'State Champions', result: 'Gold' },
        { year: '2025', event: 'Winterfest', result: 'Gold' },
        { year: '2025', event: 'Aussie Gold International', result: 'Gold' },
      ],
    },
    {
      place: 'In Hanoi',
      rows: [
        { year: '2022', event: 'Doan Thi Diem Cheerleading Championship', result: 'First place, as a coach' },
        { year: '2022, 2020', event: 'High school talent competition', result: 'First place, as an athlete' },
        { year: '2021', event: 'High school talent competition', result: 'Second place, as an athlete' },
      ],
    },
  ],
  photos: [
    pic('cheer-1', 'A flyer on top of a two-man base, Legacy team', 'Family showcase', 1170, 1560),
    pic('cheer-4', 'Peter basing a flyer outdoors in Melbourne', 'Stunt with the gold', 1600, 2133),
    pic('cheer-2', 'Legacy team with the 2025 Grand Champion banner', '2025 Grand Champion, Worlds bid', 1600, 1200),
  ],
}

// Stand-in picture from Wikimedia Commons until Peter's own MBBank photo arrives.
export const credits = [
  { title: 'Streets of central Hanoi', by: 'Vyacheslav Argenberg', licence: 'CC BY 4.0', url: 'https://commons.wikimedia.org/w/index.php?curid=85840495' },
]

export const contact = {
  invite: 'Hiring, or need one more on a hackathon team? Email me.',
}
