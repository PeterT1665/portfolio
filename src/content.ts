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
}

export const hero = {
  // The h1 is split across the screen: first half on the left, second on the right.
  titleStart: ['Peter', 'Trieu'],
  titleEnd: ['ships it', 'live.'],
  lead: 'Software engineer in Melbourne, graduating December 2026. Every project here is running right now. Pick one and use it.',
  action: { label: 'See the projects', href: '#work' },
}

export const nav = [
  { label: 'Projects', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Internship', href: '/#mbbank' },
  { label: 'Cheer', href: '/#cheer' },
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
    name: 'Voyager',
    what: "Rebuilds NASA's deep-space error correction, live",
    result: 'Best Product, CISSA Codebrew 2026',
    url: 'https://voyager-sepia-zeta.vercel.app',
    repo: 'https://github.com/5OFAKIND/Voyager',
    shot: shot('voyager', 'Voyager home screen: "Signals from beyond the void" over the Milky Way'),
    status: { kind: 'static' },
  },
  {
    name: 'Fold-A2',
    what: 'A poker bot you can sit down and play',
    result: '10th of 41 teams, MAC hackathon',
    url: 'https://fold-a2-pokerroom.onrender.com',
    repo: 'https://github.com/PeterT1665/Fold-A2',
    shot: shot('poker', 'Fold A2 Poker Room setup: pick players, opponents, chips and blind speed, then deal in'),
    status: { kind: 'server', ping: 'https://fold-a2-pokerroom.onrender.com/' },
  },
  {
    name: 'ndAI',
    what: 'Stops company secrets being pasted into ChatGPT',
    result: 'Built in 24 hours, Forward: AI in Business',
    url: 'https://ndai-try.vercel.app/preview/',
    repo: 'https://github.com/massive-attack-team/ndAI',
    shot: shot('ndai-block', 'ndAI blocking a prompt: "Paraphrases internal doc acquisition-memo", 77% internal match', 910),
    status: { kind: 'server', ping: 'https://ndai-detector-onnx.onrender.com/health' },
  },
]

export const workIntro =
  'Four hackathon builds, each deployed and running. The servers sleep when nobody visits, so this page wakes them as you scroll.'

export type LibraryRow = { name: string; what: string; stack: string; note: string; url?: string }

export const library: LibraryRow[] = [
  { name: 'BumpIn', what: 'Festival rider and vendor CRM', stack: 'Python, FastAPI, React', note: '3rd overall, Best Track', url: 'https://bumpin-demo.onrender.com' },
  { name: 'Voyager', what: 'Reed-Solomon image recovery', stack: 'JavaScript, Vite', note: 'Best Product, Codebrew', url: 'https://voyager-sepia-zeta.vercel.app' },
  { name: 'Fold-A2', what: 'Poker bot and poker room', stack: 'Python', note: '10th of 41 teams', url: 'https://fold-a2-pokerroom.onrender.com' },
  { name: 'ndAI', what: 'Leak detector for AI prompts', stack: 'Python, ONNX, Chrome extension', note: '24-hour build', url: 'https://ndai-try.vercel.app/preview/' },
  { name: 'Workout RAG Advisor', what: 'Training advice from my own logs', stack: 'LlamaIndex, Chroma, Ollama', note: 'Demo on the way', url: 'https://github.com/PeterT1665/Workout-Rag-Advisor' },
  { name: 'Joy', what: 'Fitness and meal-prep app', stack: 'Next.js, TypeScript, IndexedDB', note: 'Used daily' },
  { name: 'DsCube stock model', what: 'Which stocks to sell, ranked', stack: 'LightGBM, XGBoost, CatBoost', note: 'Kaggle competition', url: 'https://github.com/PeterT1665/DsCube---Kaggle---Stock-Prediction' },
  { name: 'Algothon 2026', what: 'Lead-lag trading strategy', stack: 'Python, own backtester', note: 'Team of four', url: 'https://github.com/four-of-a-kind-algothon-26/algothon-26' },
  { name: 'Alpha Decay Monitor', what: 'Live strategy drift alerts', stack: 'FastAPI, WebSocket', note: 'Catalyst hackathon' },
  { name: 'LinkedIn Maxxing', what: 'Job pipeline tracker', stack: 'Chrome extension, FastAPI, Gemini', note: 'Side project', url: 'https://github.com/PeterT1665/Linkedin-Maxxing' },
  { name: 'quanttrade', what: 'Quant research system', stack: 'Python', note: 'In progress', url: 'https://github.com/PeterT1665/Quant-Trading' },
  { name: 'Clock Off Properly', what: 'Campaign site with a live tally', stack: 'React, Vite', note: '1,948 minutes protected', url: 'https://clockoffproperly.netlify.app' },
]

export const about = {
  heading: "Hi, I'm Peter",
  chapters: [
    {
      title: 'Uni is just the beginning',
      body: "I'm in my third year of Computing and Software Systems at the University of Melbourne. Building projects inside my subjects taught me the basics. What I want now is to dive into open-ended problems that still need a solution.",
      photo: { label: 'Photo of Peter', note: 'photos/peter.jpg', src: '/img/unimelb', alt: 'Old Arts Building, University of Melbourne, Parkville' },
    },
    {
      title: 'So I went looking for uncertainty',
      body: 'Hackathons give you one or two days, a vague problem and, often, teammates you met that morning. It is the closest thing to a real team I could find as a student, and it taught me to cut scope early and ship something that works.',
      photo: { label: 'Hackathon team photo', note: 'photos/team.jpg', src: '/img/bumpin-dash', alt: 'BumpIn dashboard, built in 22 hours at the Affinda AI challenge' },
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
      photo: { label: 'Melbourne photo', note: 'photos/melbourne.jpg', src: '/img/melbourne', alt: 'Melbourne city and the Yarra from the air' },
    },
  ],
  strengths: ['High performer', 'Communication', 'Teamwork', 'Leading a team', 'Taking initiative', 'Hard work'],
  languages: 'I speak Vietnamese and English.',
}

export const cheer = {
  heading: 'Off the keyboard',
  // Peter, 27 Oct: 6 medals across state, national and one international competition (held in
  // Australia), and his team won a bid to Worlds. Confirm all six are gold before launch.
  body: "I'm a competitive cheerleader. Six gold medals across state, national and international championships, and a bid to Worlds, the biggest cheer competition there is. Same lesson as hackathons: you trust the people holding you up.",
  medals: [
    { figure: '6', label: 'gold medals' },
    { figure: '1', label: 'of them at an international championship' },
    { figure: 'Worlds', label: 'bid won with my team' },
  ],
  photos: [
    // Add src: '/img/cheer-1' (and an alt) once photos/cheer-1.jpg exists and `npm run images` has run.
    { label: 'Cheer photo: stunt', note: 'photos/cheer-1.jpg', src: undefined as string | undefined, alt: undefined as string | undefined },
    { label: 'Cheer photo: team', note: 'photos/cheer-2.jpg', src: undefined as string | undefined, alt: undefined as string | undefined },
    { label: 'Cheer photo: medals', note: 'photos/cheer-3.jpg', src: undefined as string | undefined, alt: undefined as string | undefined },
  ],
}

// Stand-in pictures from Wikimedia Commons until Peter's own photos arrive.
export const credits = [
  { title: 'Old Arts Building, University of Melbourne', by: 'Polly clip', licence: 'CC BY-SA 3.0', url: 'https://commons.wikimedia.org/w/index.php?curid=30708488' },
  { title: 'Melbourne skyline, 14 September 2013', by: 'David Wallace', licence: 'CC BY 2.0', url: 'https://commons.wikimedia.org/w/index.php?curid=30529192' },
  { title: 'Streets of central Hanoi', by: 'Vyacheslav Argenberg', licence: 'CC BY 4.0', url: 'https://commons.wikimedia.org/w/index.php?curid=85840495' },
]

export const contact = {
  invite: 'Hiring, or need one more on a hackathon team? Email me.',
}
