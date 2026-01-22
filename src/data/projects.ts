import findashLogo from "../assets/imgs/project/findash.png"
import distLogo from "../assets/imgs/project/ECE419.png";
import yelpcampLogo from "../assets/imgs/project/yelpcamp.png";
import otfMapLogo from "../assets/imgs/project/otfmap.png";
import threadsLogo from "../assets/imgs/project/threads.png";
import processorLogo from "../assets/imgs/project/processor.png";

const projects = [
    {
        title: "Findash",
        summary: "Findash is a full-stack personal finance dashboard that helps users track net worth, budgets, and financial goals in real time. It features secure authentication, Row-Level Security (RLS) for per-user data isolation, and interactive dashboards designed for usability and speed.",
        image: findashLogo,
        projectLink: "https://findash.dev/",
        technologies: "Next.js, Supabase, PostgreSQL",
        showcase: true
    },
    {
        title: "Distributed Key Value Store with Real Time Notifications",
        summary: "Built a distributed key–value storage system with replication and fault tolerance. Designed and implemented a client subscription mechanism that delivers real-time notifications when subscribed keys are updated or deleted. Implemented server coordination, metadata synchronization, and concurrency control, and evaluated system performance under varying client/server loads.",
        image: distLogo,
        projectLink: "https://www.youtube.com/watch?v=sBSv1Nour-Y",
        technologies: "Java, Git, Distributed Systems, Databases",
        showcase: true
    },
    {
        title: "Yelpcamp",
        summary: "YelpCamp is a web application that allows users to discover and review campgrounds. It's a platform where outdoor enthusiasts can share their favorite camping spots, read and write reviews, and plan their next adventure outdoors.",
        image: yelpcampLogo,
        projectLink: "https://yelpcamp-4549.onrender.com/",
        technologies: "Node.js, Express.js, MongoDB",
        showcase: false
    },
    {
        title: "OTFMap",
        summary: "Designed and built a desktop GIS application supporting interactive map rendering and route planning across multiple cities. Implemented efficient pathfinding using the A* algorithm, with support for different transportation modes (driving, biking, transit) and configurable map views (day/night). Focused on performance, usability, and clean UI design while working in a team-based software engineering environment.",
        image: otfMapLogo,
        projectLink: "https://www.youtube.com/watch?v=OgRmhjl-Iy8",
        technologies: "C++, Git, OpenStreetMap API",
        showcase: true
    },
    {
        title: "Threads & Process Manager",
        summary: "In our Operating Systems course, we integrated advanced synchronization mechanisms using C for hash table operations. This involved employing pthread mutexes to ensure thread-safe data access and modification in a multi-threaded environment.",
        image: threadsLogo,
        technologies: "C, Linux, Virtual Machines",
        showcase: true
    },
    {
        title: "16-bit Enhanced Processor",
        summary: "In our Computer Organization course, we developed a 16-bit processor featuring 8 registers, capable of executing instructions like mov, movt, add, sub, ldr, str, and b. For debugging, we used ModelSim's FSM timing diagram, enhancing the ALU for add, sub, and and operations.",
        image: processorLogo,
        technologies: "Verilog, Assembly, ModelSim",
        showcase: true
    }
];

export default projects;