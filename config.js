import { FaDiscord, FaGithub, FaMapPin, FaLinkedin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase, HiPhone } from "react-icons/hi";

export const config = {
    developer: {
        name: "Dinesh Kumar",
        tagline: "Computer Science Engineer | AI & Systems Enthusiast | Building Scalable Intelligent Solutions",
        location: "Krishnagiri, Tamil Nadu",
        email: "smdk0715@gmail.com",
        phone: "+91 6379853092",
        about: "Pre-final year Computer Science and Design student at Sona College of Technology (CGPA: 8.86). Strong interest in Python, C, AI/ML, wireless networking, and scalable backend systems. Passionate about building intelligent, efficient, and reliable software solutions."
    },
    social: {
        github: "DineshKumar0715",
        linkedin: "dineshkumar-s-m",
        email: "smdk0715@gmail.com"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true,
    projects: [
        {
            id: 1,
            title: "AI Player Prediction Model",
            description: "Built an advanced ML model using feature engineering and regression techniques to predict player performance. Implemented data preprocessing, model training, and evaluation pipelines with improved prediction accuracy over baseline models.",
            image: "/projects/project-1.webp",
            technologies: ["Python", "Pandas", "Scikit-learn", "NumPy", "Data Analysis"],
            github: "#",
            demo: "#"
        },
        {
            id: 2,
            title: "Enterprise Attendance Management System",
            description: "Developed a real-time distributed attendance tracking system with device-side data capture and robust backend APIs. Optimized network latency and implemented seamless data synchronization across multiple devices for enterprise-scale operations.",
            image: "/projects/project-2.webp",
            technologies: ["Python", "Flutter", "Firebase", "Real-time Sync", "Backend API"],
            github: "#",
            demo: "#"
        },
        {
            id: 3,
            title: "IoT Network Optimization",
            description: "Designed and implemented optimized IoT protocols for wireless networking. Focused on reducing latency, improving throughput, and ensuring reliable device communication in distributed systems.",
            image: "/projects/project-3.webp",
            technologies: ["C", "IoT Protocols", "TCP/IP", "Networking", "Edge Computing"],
            github: "#",
            demo: "#"
        },
        {
            id: 4,
            title: "Machine Learning Pipeline",
            description: "Built a comprehensive ML pipeline for data processing, model training, and evaluation. Implemented automated feature engineering, hyperparameter tuning, and model comparison frameworks.",
            image: "/projects/project-4.webp",
            technologies: ["Python", "Scikit-learn", "NumPy", "Pandas", "ML Pipeline"],
            github: "#",
            demo: "#"
        },
        {
            id: 5,
            title: "Network Security Analysis Tool",
            description: "Developed a security analysis tool for monitoring and analyzing network traffic patterns. Implemented intrusion detection and threat assessment capabilities.",
            image: "/projects/project-5.webp",
            technologies: ["Python", "Linux", "Network Security", "Threat Analysis", "TCP/IP"],
            github: "#",
            demo: "#"
        }
    ],
    skills: [
        {
            title: "Languages",
            icon: <HiCode />,
            description: "Core Programming Languages",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "Python", level: "Advanced", hot: true },
                { name: "C", level: "Advanced", hot: true },
                { name: "Java", level: "Intermediate" }
            ]
        },
        {
            title: "AI/ML",
            icon: <HiDatabase />,
            description: "Machine Learning & Data Science",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "NumPy", level: "Advanced", hot: true },
                { name: "Pandas", level: "Advanced", hot: true },
                { name: "Scikit-learn", level: "Advanced", hot: true }
            ]
        },
        {
            title: "Tools & Platforms",
            icon: <HiCube />,
            description: "Development & Productivity Tools",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "GitHub", level: "Advanced", hot: true },
                { name: "Linux", level: "Advanced" },
                { name: "VS Code", level: "Expert" },
                { name: "MATLAB", level: "Advanced" },
                { name: "Firebase", level: "Intermediate" },
                { name: "Flutter", level: "Intermediate" }
            ]
        },
        {
            title: "Networking & IoT",
            icon: <HiCube />,
            description: "Network & IoT Technologies",
            bgClass: "bg-purple-500/10",
            iconClass: "text-purple-500",
            skills: [
                { name: "TCP/IP", level: "Advanced", hot: true },
                { name: "IoT Protocols", level: "Advanced" },
                { name: "Network Security", level: "Intermediate" }
            ]
        }
    ],
    experiences: [
        {
            position: "Student - Computer Science & Design",
            company: "Sona College of Technology",
            period: "2023 - 2027",
            location: "Salem, Tamil Nadu",
            description: "Pre-final year Computer Science and Design student with strong academic performance. Actively involved in technical projects, hackathons, and competitive programming.",
            responsibilities: [
                "Developing ML and AI projects with real-world applications",
                "Building distributed systems and networking solutions",
                "Participating in technical events and competitions",
                "Contributing to open-source projects and collaborations"
            ],
            technologies: ["Python", "C", "Java", "ML/AI", "Networking", "IoT"]
        },
        {
            position: "Technical Enthusiast & Researcher",
            company: "Self-Directed Learning",
            period: "2020 - Present",
            location: "Remote",
            description: "Self-motivated learner focusing on AI/ML, wireless networking, and scalable backend systems. Building practical solutions and contributing to the tech community.",
            responsibilities: [
                "Researching and implementing cutting-edge AI/ML techniques",
                "Designing efficient networking protocols and IoT systems",
                "Building production-ready backend systems",
                "Sharing knowledge through projects and documentation"
            ],
            technologies: ["Python", "ML/AI", "Backend Systems", "Networking", "IoT", "Network Security"]
        }
    ],
    contactInfo: [
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "smdk0715@gmail.com",
            link: "mailto:smdk0715@gmail.com"
        },
        {
            icon: <HiPhone className="w-5 h-5" />,
            label: "Phone",
            value: "+91 6379853092",
            link: "tel:+916379853092"
        },
        {
            icon: <FaLinkedin className="w-5 h-5" />,
            label: "LinkedIn",
            value: "@dineshkumar-s-m",
            link: `https://linkedin.com/in/dineshkumar-s-m`
        },
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@dineshkumar-s-m",
            link: `https://github.com/dineshkumar-s-m`
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Krishnagiri, Tamil Nadu",
            link: null
        }
    ]
}