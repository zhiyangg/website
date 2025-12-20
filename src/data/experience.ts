import scotiabankLogo from "../assets/imgs/experience/scotiabank.png";
import amdLogo from "../assets/imgs/experience/amd.png";
import etrLogo from "../assets/imgs/experience/407etr.png";
import bssrLogo from "../assets/imgs/experience/bssr.jpeg";
import markhamLogo from "../assets/imgs/experience/cityofmarkham.png";
import cefsLogo from "../assets/imgs/experience/cefs.jpeg";
import cadetsLogo from "../assets/imgs/experience/cadets.png";

const experiences = [
    {
        title: "Capstone Research Student",
        company: "Scotiabank",
        date: "Sep 2025 - Present",
        summary: "University capstone project conducted in collaboration with Scotiabank, focusing on cash break reconciliation in a real-world financial environment.",
        image: scotiabankLogo,
        responsibilities: [
            "Designing a Recon Agentic Tool to assist with cash break identification and reconciliation analysis.",
            "Implementing rule-based and agentic workflows to investigate transaction discrepancies and generate actionable insights.",
            "Collaborating with Scotiabank stakeholders to define requirements, evaluate approaches, and document system trade-offs."
        ],
        companyLink: "https://www.scotiabank.com/ca/en/",
        technologies: "Python, LLM Agents, Data Analysis, Systems Design",
        showcase: true
    },
    {
        title: "GPU Graphics Driver Validation & Debug Engineer",
        company: "AMD",
        date: "May 2024 - Aug 2025",
        summary: "Responsible for system testing, automation, and telemetry in GPU driver validation. Work on regression testing, issue resolution, and automation to enhance efficiency in new OS releases.",
        image: amdLogo,
        responsibilities: [
            "Performed telemetry and smoke testing for new OS releases.",
            "Worked on regressions, ticket resolution, and system testing.",
            "Developed automation scripts to streamline testing workflows."
        ],
        companyLink: "https://www.amd.com",
        technologies: "Python, PowerShell, Automation, Windows OS Testing",
        showcase: true
    },
    {
        title: "Junior Tolling Field Technician",
        company: "407 ETR Concession Company Limited",
        date: "May 2023 - Sep 2023",
        summary: "Maintained and tested tolling equipment, ensuring high reliability and efficiency. Assisted in major infrastructure upgrades and troubleshooting to enhance tolling operations.",
        image: etrLogo,
        responsibilities: [
            "Maintained tolling equipment through detailed inspections, diagnostics, and adjustments, securing a 98% peak performance rate and guaranteeing a 99.5% uninterrupted tolling operation",
            "Conducted exhaustive testing of tolling equipment in a controlled laboratory environment, proactively resolving technical issues to maintain a 98% data transmission reliability rate",
            "Assisted in the East Detolling project, decommissioning 22 legacy sites and establishing 6 new sites, resulting in a 10% improvement in tolling efficiency"
        ],
        companyLink: "https://407etr.com",
        technologies: "Hardware Diagnostics, Equipment Testing, Preventative Maintenance",
        showcase: true
    },
    {
        title: "Electrical Team",
        company: "Blue Sky Solar Racing",
        date: "Sep 2022 - Sep 2023",
        summary: "Contributed to the design and testing of electrical systems for a solar-powered racing car. Worked with PCB layouts, soldering, and system optimization to enhance vehicle performance.",
        image: bssrLogo,
        responsibilities: [
            "Proficiently soldered and tested circuit boards, ensuring a high degree of performance and reliability for various electronic applications, improving the team’s electrical systems",
            "Utilized Altium Designer to design PCB layouts, create component libraries, and develop schematics for various solar car electrical systems, contributing to system functionality and advancements"
        ],
        companyLink: "https://www.blueskysolar.org/team",
        technologies: "PCB Design, Altium Designer, Circuit Testing, Soldering",
        showcase: true
    },
    {
        title: "Park Operations",
        company: "City of Markham",
        date: "May 2022 - Sep 2022",
        summary: "Maintained and managed public parks, ensuring cleanliness and proper upkeep. Operated landscaping equipment and collaborated with city officials to improve maintenance efficiency.",
        image: markhamLogo,
        responsibilities: [
            "Managed a schedule of regular park maintenance, coordinating with regional managers and city residents to preserve city parks and ensure cleanliness",
            "Operated and utilized a variety of equipment, including zero-turn lawn mowers, push mowers, trimmers, and blowers, to efficiently complete tasks",
            "Actively contributed to the development and implementation of new park maintenance procedures and policies, improving the efficiency and effectiveness of city park operations"
        ],
        companyLink: "https://www.markham.ca/",
        technologies: "Equipment Operation, Landscaping, Maintenance Planning",
        showcase: true
    }, 
    {
        title: "Program Coordinator",
        company: "Community Engagement & Family Support Centre",
        date: "Jul 2021 - Aug 2021",
        summary: "Organized and led summer camp activities for children, developing schedules and coordinating with camp directors to provide an engaging and unforgettable experience.",
        image: cefsLogo,
        responsibilities: [
            "Orchestrated daily activities and special events for a summer camp of 30 campers, encompassing online engagements, arts, crafts, and sports",
            "Devised a versatile activity schedule, catering to the diverse preferences and requirements of the campers",
            "Partnered with camp directors to shape and uphold the camp's overarching vision and mission"
        ],
        companyLink: "https://cefscentre.org/",
        technologies: "Event Planning, Activity Coordination, Leadership",
        showcase: true
    }, 
    {
        title: "Flight Sergeant",
        company: "Royal Canadian Air Cadets",
        date: "Sep 2016 - Jun 2021",
        summary: "Led cadet training programs focused on leadership, discipline, and outdoor survival skills. Worked closely with Canadian Armed Forces personnel to deliver structured learning experiences.",
        image: cadetsLogo,
        responsibilities: [
            "Spearheaded a diverse group of cadets through training programs, encompassing outdoor survival skills, rigorous fitness testing, enhancing team cohesion and resilience",
            "Cultivated robust communication channels and collaborated with Canadian Armed Forces (CAF) officers, support staff, and community volunteers, fostering a supportive learning environment",
            "Orchestrated the planning and execution of educational workshops and leadership seminars, leading to an increase in cadet engagement and proficiency in leadership competencies."
        ],
        companyLink: "https://www.351silverstar.com/",
        technologies: "Leadership, Team Coordination, Public Speaking",
        showcase: true
    }
];

export default experiences;