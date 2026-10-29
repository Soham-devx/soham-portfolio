export const site = {
  name: 'Soham Vade',
  role: 'Computer Science Student | Software Developer | Data Science Enthusiast',
  github: 'https://github.com/Soham-devx',
  githubHandle: 'Soham-devx',
  // Set these to real values to turn the contact rows into live links.
  email:'sohamdev4@gmail.com' as string | null,
  linkedin:'https://www.linkedin.com/in/soham-vade-196339327/' as string | null,
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export type ProjectFilter = 'Systems Programming' | 'Java' | 'Networking' | 'Software Engineering'

export const projectFilters: Array<'All' | ProjectFilter> = [
  'All',
  'Systems Programming',
  'Java',
  'Networking',
  'Software Engineering',
]

export type PreviewKind =
  | 'parking'
  | 'filesystem'
  | 'ftp'
  | 'packer'
  | 'chat'
  | 'memory'
  | 'study'

export type Project = {
  id: string
  index: string
  name: string
  category: string
  description: string
  tech: string[]
  filters: ProjectFilter[]
  /** Only set when the repository URL has been verified. Falls back to the GitHub profile. */
  repo?: string
  preview: PreviewKind
  overview: string
  implementation: string[]
  concepts: string[]
  considerations?: string[]
  note?: string
}

export const projects: Project[] = [
  {
    id: 'parkengine',
    index: '01',
    name: 'ParkEngine',
    category: 'Software Engineering / System Design',
    description:
      'A Java-based parking management system designed around object-oriented principles, modular architecture, vehicle classification, parking allocation, and automated entry and exit workflows.',
    tech: ['Java', 'OOP', 'Design Patterns'],
    filters: ['Java', 'Software Engineering'],
    repo: 'https://github.com/Soham-devx/ParkEngine',
    preview: 'parking',
    overview:
      'ParkEngine models a multi-floor parking facility in Java. It handles vehicle entry and exit, parking spot allocation, ticket generation, and payment processing, with the domain split into small, single-purpose classes.',
    implementation: [
      'Factory — a VehicleFactory creates Bike, Car, and Truck objects from a vehicle type.',
      'Strategy — spot allocation, pricing (normal and weekend), and payment (cash, card, UPI) are swappable strategies.',
      'Observer — a parking display board observes spot availability and updates as vehicles enter and leave.',
      'Singleton — a single shared instance coordinates the parking system across floors and gates.',
      'Typed spots (bike, car, truck) across multiple parking floors, with entry and exit gates and ticket status tracking.',
    ],
    concepts: ['Encapsulation', 'Inheritance', 'Polymorphism', 'Interfaces', 'Enums', 'Design Patterns'],
    considerations: [
      'Keeping allocation, pricing, and payment rules independent so each can change without touching the others.',
      'Matching vehicle types to compatible spot types across floors.',
      'Keeping the display board consistent with the actual state of every spot.',
    ],
    note: 'Console-based application. The repository does not include a JavaFX or other GUI layer.',
  },
  {
    id: 'cvfs',
    index: '02',
    name: 'Customized Virtual File System',
    category: 'Systems Programming',
    description:
      'A virtual file system implemented in C that simulates file operations, inode management, permissions, metadata handling, and memory-based file storage.',
    tech: ['C', 'Data Structures', 'Operating Systems', 'Dynamic Memory Allocation'],
    filters: ['Systems Programming'],
    repo: 'https://github.com/Soham-devx/CVFS',
    preview: 'filesystem',
    overview:
      'CVFS recreates the core ideas behind a UNIX-style file system entirely in memory. Files are represented through inode-like structures, so file operations, metadata, and permissions can be explored without touching the real disk.',
    implementation: [
      'Inode-style structures that hold file metadata such as name, size, and permissions.',
      'Simulated file operations backed by dynamically allocated memory.',
      'Permission checks applied before reading from or writing to a file.',
      'Linked data structures to organise and look up file entries.',
    ],
    concepts: ['Inodes', 'File Descriptors', 'Pointers', 'Structures', 'malloc / free', 'Linked Lists'],
    considerations: [
      'Managing memory manually and releasing it correctly when files are removed.',
      'Keeping metadata consistent with the stored file contents.',
    ],
  },
  {
    id: 'ftp-server',
    index: '03',
    name: 'Concurrent FTP Server',
    category: 'Networking / Multithreading',
    description:
      'A Java socket-based FTP server designed to handle multiple client connections concurrently and process client requests over TCP/IP.',
    tech: ['Java', 'Socket Programming', 'Multithreading', 'TCP/IP'],
    filters: ['Java', 'Networking'],
    preview: 'ftp',
    overview:
      'A client-server application where a central Java server accepts TCP connections and serves multiple clients at the same time, handling each connection on its own thread.',
    implementation: [
      'ServerSocket listening for incoming TCP connections.',
      'A separate thread per connected client so one client does not block another.',
      'Request handling and data transfer over socket input and output streams.',
    ],
    concepts: ['Client-Server Architecture', 'TCP/IP', 'Threads', 'Socket Streams'],
    considerations: [
      'Serving several clients concurrently without blocking the accept loop.',
      'Closing sockets and streams cleanly when a client disconnects.',
    ],
  },
  {
    id: 'packer-unpacker',
    index: '04',
    name: 'Packer & Unpacker',
    category: 'File Processing',
    description:
      'A Java utility for packing multiple files into a consolidated archive and extracting files through a structured file-processing workflow.',
    tech: ['Java', 'File I/O', 'Streams', 'Exception Handling'],
    filters: ['Java'],
    preview: 'packer',
    overview:
      'A file-processing utility that combines multiple files into a single packed file and later restores them as individual files.',
    implementation: [
      'Reads files from a source directory and writes them into one consolidated archive.',
      'Stores per-file information so files can be separated again during unpacking.',
      'Uses Java byte streams for reading and writing file data.',
      'Exception handling around file-system operations.',
    ],
    concepts: ['File I/O', 'Byte Streams', 'Exception Handling', 'Directory Traversal'],
  },
  {
    id: 'chat-messenger',
    index: '05',
    name: 'Chat Messenger with Logging',
    category: 'Networking / Communication',
    description:
      'A real-time messaging application with timestamp-based logging to record communication events and support message history analysis.',
    tech: ['Java', 'Networking', 'Socket Programming', 'Logging'],
    filters: ['Java', 'Networking'],
    preview: 'chat',
    overview:
      'A socket-based messenger where connected users exchange messages in real time, while communication events are written to a timestamped log.',
    implementation: [
      'Socket connection between the communicating parties.',
      'Message exchange over input and output streams.',
      'Timestamped log entries recording communication events for later review.',
    ],
    concepts: ['Sockets', 'Streams', 'Timestamps', 'File Logging'],
  },
  {
    id: 'memory-inspector',
    index: '06',
    name: 'Process Memory Inspector',
    category: 'Operating Systems / Systems Programming',
    description:
      'A Linux-based C utility for examining process virtual memory layouts and understanding regions such as the stack, heap, data segment, and executable code.',
    tech: ['C', 'Linux', 'Process Memory', 'Operating Systems'],
    filters: ['Systems Programming'],
    preview: 'memory',
    overview:
      'A learning-focused utility for exploring how a Linux process is laid out in virtual memory — from executable code at low addresses to the stack at high addresses.',
    implementation: [
      'Inspects the virtual memory regions of a running process on Linux.',
      'Relates variables and allocations to the text, data, heap, and stack segments.',
    ],
    concepts: ['Virtual Memory', 'Stack vs Heap', 'Data Segment', 'Text Segment', 'Linux /proc'],
  },
  {
    id: 'study-tracker',
    index: '07',
    name: 'Study Tracker',
    category: 'Productivity / Java Development',
    description:
      'A Java-based study tracking application that organizes learning activities using object-oriented programming and Java Collections.',
    tech: ['Java', 'OOP', 'Java Collections'],
    filters: ['Java'],
    preview: 'study',
    overview:
      'A small application that organises subjects and study sessions, modelled with classes and stored with the Java Collections Framework.',
    implementation: [
      'Classes representing subjects and study activities.',
      'Java Collections used to store, group, and retrieve learning records.',
    ],
    concepts: ['Classes & Objects', 'Collections Framework', 'Encapsulation'],
  },
]

export type SkillGroup = {
  code: string
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  { code: 'LANG', title: 'Programming Languages', items: ['Java', 'C', 'C++'] },
  {
    code: 'CORE',
    title: 'Computer Science',
    items: [
      'Data Structures and Algorithms',
      'Object-Oriented Programming',
      'Operating Systems',
      'Memory Management',
      'System Design Fundamentals',
    ],
  },
  {
    code: 'NET',
    title: 'Networking',
    items: ['Socket Programming', 'TCP/IP', 'Multithreading', 'Client-Server Architecture'],
  },
  { code: 'TOOLS', title: 'Development Tools', items: ['Git', 'GitHub', 'Linux', 'Visual Studio Code'] },
  {
    code: 'DATA',
    title: 'Data & AI',
    items: [
      'Data Science Fundamentals',
      'Machine Learning Fundamentals',
      'TensorFlow',
      'Neural Networks',
      'Computer Vision',
    ],
  },
]

export type ExperienceEntry = {
  title: string
  kind: 'Academic' | 'Learning Program' | 'Internship · Learning' | 'Independent Projects'
  /** Leave undefined when the exact dates are not confirmed. */
  period?: string
  summary: string
  focus: string[]
}

export const experience: ExperienceEntry[] = [
  {
    title: 'Computer Science — Data Science Specialization',
    kind: 'Academic',
    summary:
      'Undergraduate coursework covering programming, data structures, operating systems, networking, and the foundations of data science.',
    focus: ['Programming Fundamentals', 'Data Structures', 'Operating Systems', 'Data Science'],
  },
  {
    title: 'Google Developer AI/ML Learning Experience',
    kind: 'Learning Program',
    summary:
      'A guided learning experience focused on applied machine learning and computer vision with TensorFlow.',
    focus: ['Neural Networks with TensorFlow', 'Object Detection', 'Image Search', 'Image Classification'],
  },
  {
    title: 'AWS Data Engineering',
    kind: 'Internship · Learning',
    summary:
      'A learning-focused internship experience introducing how data is stored, processed, and organised in the cloud.',
    focus: ['Data Storage & Processing', 'Data Engineering Concepts', 'Data Architecture', 'Cloud Architecture'],
  },
  {
    title: 'Systems & Networking Projects',
    kind: 'Independent Projects',
    summary:
      'Self-driven projects used to turn coursework into working software — file systems, socket servers, memory inspection, and design-pattern-driven Java applications.',
    focus: ['C', 'Java', 'Socket Programming', 'Design Patterns'],
  },
]
