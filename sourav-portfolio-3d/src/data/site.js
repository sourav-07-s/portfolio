export const site = {
  name: 'Sourav Sahoo',
  role: 'Full Stack Developer',
  stack: 'React.js · Node.js · Express.js · MongoDB',
  location: 'Puri, Odisha',
  availability: 'Open to on-site work in Bhubaneswar',
  email: 'souravsahoo407@gmail.com',
  phone: '7377872261',
  github: 'https://github.com/sourav-07-s',
  linkedin: 'https://linkedin.com/in/sourav-sahoo-74088432b',
  resume: '/Sourav_Sahoo_Full_Stack_Developer_Resume(1).pdf',
}
export const skillGroups = [
  { category: 'Languages', number: '01', items: ['JavaScript (ES6+)', 'TypeScript', 'HTML', 'CSS'] },
  { category: 'Frontend', number: '02', items: ['React.js', 'Next.js', 'Redux Toolkit', 'React Router', 'React Hook Form', 'Tailwind CSS', 'Responsive Web Design'] },
  { category: 'Backend', number: '03', items: ['Node.js', 'Express.js', 'REST API Development', 'JWT Authentication', 'bcrypt', 'Multer', 'Middleware'] },
  { category: 'Database & Services', number: '04', items: ['MongoDB', 'Mongoose', 'ImageKit', 'Appwrite'] },
  { category: 'Tools', number: '05', items: ['Git', 'GitHub', 'Vite', 'Axios', 'VS Code'] },
]
export const projects = [
  {
    id: '01', title: 'Role-Based Music Library API', category: 'Backend / API', status: 'Completed',
    summary: 'A structured REST API for authentication and music-library management, with role-based controls for administrative actions.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT'],
    features: ['JWT cookie authentication with bcrypt password hashing', 'Role-based middleware restricts uploads and album creation to admins', 'Referenced user, music, and album schemas with unique constraints and populate queries', 'Audio uploads handled with Multer and ImageKit'],
    github: 'https://github.com/sourav-07-s/CompleteFullStack',
    visual: 'music',
  },
  {
    id: '02', title: 'ShopAssist', category: 'Frontend / E-commerce', status: 'Completed',
    summary: 'A responsive storefront with search, category filtering, and persistent cart and wishlist state.',
    stack: ['React.js', 'Redux Toolkit', 'React Router', 'Tailwind CSS'],
    features: ['Consumes the DummyJSON REST API', 'Loading, error, and empty states', 'Search and category filters', 'Cart and wishlist state managed with Redux Toolkit and persisted in localStorage'],
    github: 'https://github.com/sourav-07-s/shopassist',
    visual: 'shop',
  },
  {
    id: '03', title: 'Job Application Tracker', category: 'Full Stack / Productivity', status: 'In Progress',
    summary: 'A job-search workspace with email/password authentication, protected routes, and per-user application boards.',
    stack: ['Next.js', 'TypeScript', 'MongoDB', 'Better Auth'],
    features: ['Better Auth with MongoDB adapter', 'Protected routes redirect signed-out users to sign-in', 'Mongoose schemas for boards, columns, and applications with indexed fields', 'Signup hook creates a default board with five columns per user'],
    // The resume/PRD lists this repository, but its NestJs name does not match the Next.js project stack. Confirm before publishing.
    github: null,
    visual: 'tracker',
  },
]
export const experience = [{
  role: 'Frontend Developer Intern', company: 'CanienTech', mode: 'Hybrid', period: 'Oct 2025 — Apr 2026',
  bullets: [
    'Built and customized responsive web pages using HTML, CSS, and JavaScript to meet project requirements.',
    'Implemented interactive UI elements and responsive layouts for phones, tablets, and desktops.',
    'Used Git and GitHub for version control across projects.',
  ],
}]
export const education = [{ degree: 'B.Tech, Computer Science & Engineering', school: 'Aryan Institute of Engineering and Technology', affiliation: 'BPUT', period: '2023 — 2027 (Expected)' }]
export const services = [
  { n: '01', title: 'Responsive Frontend Development', desc: 'Mobile-first interfaces built with React, Tailwind CSS, and careful responsive layouts.' },
  { n: '02', title: 'Full Stack Web Applications', desc: 'MERN applications connecting user-facing experiences to authentication and database workflows.' },
  { n: '03', title: 'REST API Development', desc: 'Express APIs with JWT authentication, middleware, and role-based access control.' },
  { n: '04', title: 'Database Design & Integration', desc: 'MongoDB and Mongoose schemas with references, indexes, and populated relationships.' },
]
