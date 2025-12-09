export const about = {
    name: "Imad Maailil",
    role: "Full-stack Engineer",
    about: "Full-stack engineer with expertise in Python, Java, and modern frameworks. Experienced in developing scalable web applications, AI-powered solutions, and cloud-deployed backend systems. Skilled in microservices, payment integrations, and driving end-to-end product development.",
    email: "imadmaailil20@gmail.com",
    location: "Marrakech, Morocco",
    phone: "+212 783174492",
    linkedin: "https://www.linkedin.com/in/imad-maailil/",
    github: "https://github.com/Rager511"
};

export const seo = {
    title: `${about.name}`,
    description: "Full-stack engineer portfolio showcasing projects, skills, and professional experience, built with Next.js and modern frameworks.",
    keywords: "portfolio, web developer, full-stack engineer, Next.js, React, Python, Java, AI, cloud"
};

export const forms = {
    formspreeUrl: "https://formspree.io/f/xeobwypz"
};

export const skills = [
  // Frontend
  { name: "React.js", alt: "React logo", icon: "/react.svg" },
  { name: "Next.js", alt: "Next.js logo", icon: "/nextjs.svg" },
  { name: "Angular", alt: "Angular logo", icon: "/angular.svg" },
  { name: "JavaScript", alt: "JS logo", icon: "/js.svg" },
  { name: "TypeScript", alt: "TS logo", icon: "/typescript.svg" },

  // Backend
  { name: "Python", alt: "Python logo", icon: "/python.svg" },
  { name: "Java", alt: "Java logo", icon: "/java.svg" },
  { name: "Node.js", alt: "Node.js logo", icon: "/nodejs.svg" },
  { name: "Django", alt: "Django logo", icon: "/django.svg" },
  { name: "Flask", alt: "Flask logo", icon: "/flask.svg" },
  { name: "Spring Boot", alt: "Spring Boot logo", icon: "/springboot.svg" },
  { name: "FastAPI", alt: "FastAPI logo", icon: "/fastapi.svg" },

  // Databases
  { name: "MySQL", alt: "MySQL logo", icon: "/mysql.svg" },
  { name: "PostgreSQL", alt: "PostgreSQL logo", icon: "/postgresql.svg" },
  { name: "MongoDB", alt: "MongoDB logo", icon: "/mongodb.svg" },

  // Cloud & DevOps
  { name: "Alibaba Cloud", alt: "Alibaba Cloud logo", icon: "/abc.svg" },
  { name: "Docker", alt: "Docker logo", icon: "/docker.svg" },

];


export const socials = {
    github: "https://github.com/Rager511",
    linkedin: "https://www.linkedin.com/in/imad-maailil/"
};

export const projects = {
    pinProjects: [
        {
            title: "Predictive Revenue & Churn Intelligence Platform",
            description:
                "SaaS platform forecasting customer churn and revenue trends using ML microservices (FastAPI). Deployed in a cloud-native setup using Docker and Kubernetes for scalable model serving.Achieved 89% churn-risk classification accuracy and generated monthly revenue forecasts within ±7% error margin.",
            tags: ["Java", "Spring Boot", "React", "PostgreSQL", "FastAPI", "AI/ML","Docker", "Python"],
            link: ""
        },
        {
            title: "E-commerce Application",
            description:
                "Developed a complete e-commerce system with dynamic product search, automated email workflows, competitor price scraping, and a custom admin dashboard.Improved product search relevance by ~35%, automated 80% of manual catalog updates.",
            tags: ["Python", "Django", "SQLite", "MyBeautifulSoup"],
            link: ""
        },
        {
            title: "Machine Learning Model for Smoking Status Prediction",
            description:
                "Designed a machine learning pipeline to predict smoking status from biosignal features with cross-validated 97.3% accuracy and 95% F1-score. Reduced model inference time to <10 ms through feature optimization.",
            tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Machine Learning"],
            link: ""
        }
    ],
    otherProjects: [
        {
            title: "Web and Mobile School Transportation Application",
            description:
                "Built a web and mobile application enabling real-time bus tracking, optimized routes, and push notifications for parents and drivers. Reduced average route time by 12% and decreased parent “location uncertainty” complaints by ~40%.",
            tags: ["React.js", "React Native", "Spring Boot", "MySQL"],
            link: ""
        },
        {
            title: "Vehicle Rental Management System",
            description:
                "Built a full-featured vehicle rental system with web and desktop interfaces, managing clients, employees, vehicles, rentals, payments, and reporting. Implemented secure authentication, role-based access, PDF/QR code generation, and real-time availability tracking. Reduced booking errors by ~30% and improved administrative efficiency by ~35%.",
            tags: ["C#", "ASP.NET MVC", "WPF", "SQL Server"],
            link: ""
        },
        {
            title: "Creation of a Digital Management and Interaction Platform for MSC",
            description:
                "Built a web platform to manage members, pricing, activities, and internal roles for Morocco Sports Consulting. Reduced administrative workload by ~30% and improved data accuracy by ~25%.",
            tags: ["PHP", "JavaScript", "XAMPP", "MySQL"],
            link: ""
        }
    ]
};

export const experience = [
    {
        title: "Full Stack Engineer - Three Sheep Information Technology",
        location:"Ningbo, China (Hybrid)",
        description:
            "Designed and developed a scalable iGaming platform supporting casino, sports betting, and horse racing, with seamless wallet integration for users. Implemented third-party payment gateway integration (DirePay) to enable secure deposits and withdrawals in both crypto and fiat currencies. Deployed and managed infrastructure on Alibaba Cloud (ECS) to ensure high availability and performance for production website.",
        date: "Jun 2025 - Nov 2025",
        tags: [
            "Angular",
            "Node.js",
            "Express.js",
            "HTML",
            "CSS",
            "JavaScript",
            "Git",
            "GitHub",
            "MongoDB"
        ]
    },
    {
        title: "Intern Full Stack Engineer - AliDanTek",
        location:"Marrakech, Morocco (On site)",
        description:
            "Developed an AI-powered diagnostics platform analyzing business workflows in real time, providing automated recommendations that reduced manual reporting by ~25% and shortened decision cycles.",
        date: "Feb 2024 - Aug 2024",
        tags: [
            "Next.js",
            "React.js",
            "Flask",
            "Python",
            "Node.js",
            "NestJS",
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "MySQL",
            "Jest",
            "Pytest",
            "GitHub",
            "Git",
            "UML",
            "Beautiful Soup"
        ]
    },
    {
        title: "Intern Full Stack Developer - OneDustry Technologies",
        location:"Casablanca, Morocco (On site)",
        description:
            "Designed and implemented a car service management web application with RESTful APIs handling high-volume data transactions, improving service scheduling and customer tracking.",
        date: "Jul 2023 - Sep 2023",
        tags: [
            "JavaScript",
            "GitHub",
            "Express.js",
            "MongoDB",
            "Git",
            "TypeScript",
            "React.js",
            "Node.js",
            "RESTful WebServices",
            "UML"
        ]
    },
    {
        title: "Intern Full Stack Developer - Intelicap SARL",
        location:"Marrakech, Morocco (Remote)",
        description:
            "Built a media streaming platform for animated series, integrating algorithmic optimization to enhance streaming performance, reduce latency, and provide a smooth, personalized user experience.",
        date: "Jul 2022 - Sep 2022",
        tags: [
            "JavaScript",
            "Laravel",
            "MySQL",
            "HTML",
            "CSS",
            "Bootstrap",
            "UML"
        ]
    }
];

export const education = [
    {
        institution: "Zhejiang Wanli University",
        location: "Ningbo, China",
        degree: "Chinese Language Program",
        date: "Sep 2024 - Jun 2025",
    },
    {
        institution: "Moroccan School of Engineering Sciences",
        location: "Marrakech, Morocco",
        degree: "Computer & Network Engineering specializing in Methods of IT Applied to Business Management",
        date: "Oct 2021 - Jul 2024",
    },
    {
        institution: "Moroccan School of Engineering Sciences",
        location: "Marrakech, Morocco",
        degree: "Program - Common Core",
        date: "Oct 2019 - Jul 2021",
    },
    {
        institution: "Youssef Ibn Tachfine",
        location: "Mirleft, Morocco",
        degree: "High school Diploma, Physics & Chemistry, with honors (well-mentioned)",
        date: "Sep 2018 - Jul 2019",
    }
];



export const certifications = [
    {
        title: "Building AI Applications with Watson APIs",
        issuer: "IBM",
        date: "Mar 2024",
        credentialId: "2Q39SAFAA3F5"
    },
    {
        title: "Building AI Powered Chatbots Without Programming",
        issuer: "IBM",
        date: "Mar 2024",
        credentialId: "6PAK56WVW3YK"
    },
    {
        title: "Developing AI Applications with Python and Flask",
        issuer: "IBM",
        date: "Mar 2024",
        credentialId: "FWMK6UAMCAGD"
    },
    {
        title: "Generative AI: Introduction and Applications",
        issuer: "IBM",
        date: "Mar 2024",
        credentialId: "NUR9W3ZW3Q33"
    },
    {
        title: "Generative AI: Prompt Engineering Basics",
        issuer: "IBM",
        date: "Mar 2024",
        credentialId: "WXE9QWZKBYXS"
    },
    {
        title: "Introduction to Artificial Intelligence (AI)",
        issuer: "IBM",
        date: "Mar 2024",
        credentialId: "SKP7XLMVUV95"
    },
    {
        title: "Préparer votre carrière dans l'IA générative",
        issuer: "Microsoft & LinkedIn",
        date: "Mar 2024"
    },
    {
        title: "Python for Data Science, AI & Development",
        issuer: "IBM",
        date: "Mar 2024",
        credentialId: "WTFGCPC9MQN6"
    },
    {
        title: "Machine Learning with Python",
        issuer: "IBM",
        date: "Dec 2023",
        credentialId: "VX7UBE47QM3H"
    },
    {
        title: "Building Scalable Java Microservices with Spring Boot and Spring Cloud",
        issuer: "Google Cloud Education",
        date: "Nov 2023",
        credentialId: "BCQ6CDTX5TBL"
    },
    {
        title: "Machine Learning for All",
        issuer: "University of London",
        date: "Oct 2023",
        credentialId: "PBCFCX963CB6"
    },
    {
        title: "Advanced React",
        issuer: "Meta",
        date: "Apr 2023",
        credentialId: "56ZA4665VV55"
    },
    {
        title: "21th Century Skills Essentials",
        issuer: "Honoris Educational Network",
        date: "Mar 2023"
    },
    {
        title: "Spécialisation DevOps, Cloud, and Agile Foundations",
        issuer: "IBM",
        date: "Mar 2023",
        credentialId: "QTD6X75ZSQMY"
    },
    {
        title: "Developing Back-End Apps with Node.js and Express",
        issuer: "IBM",
        date: "Feb 2023",
        credentialId: "TADWUHV9SZ2M"
    },
    {
        title: "Data Collection and Processing with Python",
        issuer: "University of Michigan",
        date: "May 2022",
        credentialId: "RGTEJED7S2TE"
    },
    {
        title: "Python Functions, Files, and Dictionaries",
        issuer: "University of Michigan",
        date: "May 2022",
        credentialId: "K6BL9B5V58LL"
    }
];
