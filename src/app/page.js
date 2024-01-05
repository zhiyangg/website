import React from 'react';

import Home from '../components/home';
import Navbar from '../components/navbar'; 
import About from '../components/about';
import Header from '../components/header';
import Exp from '../components/exp';
import Project from '../components/project';
import Contact from '../components/contact';

import './globals.css';

const Page = () => {
    return (
        <main>
            {/* Home Page */}
            <div id='home'><Home /></div>
            
            {/* About */}
            <Navbar />
            <div id='about'><About /></div>

            {/* Experience  */}
            <div id='experience'><Header title="Experience"/></div>
            <Exp 
                position="Junior Tolling Field Technician"
                company="407 ETR Concession Company Limited"
                startDate="May 2023"
                endDate="Sep 2023"
                description={[
                    "Maintained tolling equipment through detailed inspections, diagnostics, and adjustments, securing a 98% peak performance rate and guaranteeing a 99.5% uninterrupted tolling operation",
                    "Conducted exhaustive testing of tolling equipment in a controlled laboratory environment, proactively resolving technical issues to maintain a 98% data transmission reliability rate",
                    "Assisted in the East Detolling project, decommissioning 22 legacy sites and establishing 6 new sites, resulting in a 10% improvement in tolling efficiency"
                ]}
                imgPath="/website/img/exp/407etr.jpeg"
                imgAlt="407 ETR image"
                linkURL="https://www.407etr.com/en/index.html"
            />
            <Exp 
                position="Electrical Team"
                company="Blue Sky Solar Racing"
                startDate="Sep 2022"
                endDate="Sep 2023"
                description={[
                    "Proficiently soldered and tested circuit boards, ensuring a high degree of performance and reliability for various electronic applications, improving the team’s electrical systems",
                    "Utilized Altium Designer to design PCB layouts, create component libraries, and develop schematics for various solarcar electrical systems, contributing to system functionality and advancements"
                ]}
                imgPath="/img/exp/bssr.png"
                imgAlt="Blue Sky Solar Racing image"
                linkURL="https://www.blueskysolar.org/team"
            />
            <Exp 
                position="Park Operations"
                company="City of Markham"
                startDate="May 2022"
                endDate="Sep 2022"
                description={[
                    "Managed a schedule of regular park maintenance, coordinating with regional managers and city residents to preserve city parks and ensure cleanliness",
                    "Operated and utilized a variety of equipment, including zero-turn lawn mowers, push mowers, trimmers, and blowers, to efficiently complete tasks",
                    "Actively contributed to the development and implementation of new park maintenance procedures and policies, improving the efficiency and effectiveness of city park operations"
                ]}
                imgPath="/img/exp/cityofmarkham.png"
                imgAlt="City of Markham image"
                linkURL="https://www.markham.ca/wps/portal/home"
            />
            <Exp 
                position="Program Coordinator"
                company="Community Engagement and Family Support Centre"
                startDate="Jul 2021"
                endDate="Aug 2021"
                description={[
                    "Orchestrated daily activities and special events for a summer camp of 30 campers, encompassing online engagements, arts, crafts, and sports",
                    "Devised a versatile activity schedule, catering to the diverse preferences and requirements of the campers",
                    "Partnered with camp directors to shape and uphold the camp's overarching vision and mission"
                ]}
                imgPath="/img/exp/cefs.jpeg"
                imgAlt="CEFS image"
                linkURL="https://cefscentre.org/en/"
            />
            <Exp 
                position="Flight Sergeant"
                company="Royal Canadian Air Cadets"
                startDate="Sep 2016"
                endDate="Jun 2021"
                description={[
                    "Spearheaded a diverse group of cadets through training programs, encompassing outdoor survival skills, rigorous fitness testing, enhancing team cohesion and resilience",
                    "Cultivated robust communication channels and collaborated with Canadian Armed Forces (CAF) officers, support staff, and community volunteers, fostering a supportive learning environment",
                    "Orchestrated the planning and execution of educational workshops and leadership seminars, leading to an increase in cadet engagement and proficiency in leadership competencies."
                ]}
                imgPath="/img/exp/rcac.png"
                imgAlt="Royal Canadian Air Cadets image"
                linkURL="https://www.351silverstar.com/"
            />

            {/* Projects */}
            <div id='projects'><Header title="Projects"/></div>
            <Project 
                position="Yelpcamp"
                software="Node.js, Express.js, MongoDB"
                description="YelpCamp is a web application that allows users to discover and 
                    review campgrounds. It's a platform where outdoor enthusiasts can share their 
                    favorite camping spots, read and write reviews, and plan their next adventure outdoors."
                imgPath="/img/project/yelpcamp.png"
                imgAlt="YelpCamp image"
                linkURL="https://yelpcamp-4549.onrender.com/"
                linkText="Demo"
            />
            <Project 
                position="OTFMap"
                software="GTK, EZGL, OpenStreetMap API"
                description="As a part of our Software Design & Communications course, we have developed 
                    a user friendly Geographic Information System (GIS) with a wide array of features to 
                    provide a comprehensive solution for all navigation needs."
                imgPath="/img/project/otfmap.png"
                imgAlt="OTFMap image"
                linkURL="https://www.youtube.com/watch?v=OgRmhjl-Iy8"
                linkText="Demo"
            />
            <Project 
                position="Threads & Process Manager"
                software="C, Linux, Virtual Machines"
                description="In our Operating Systems course, we integrated advanced synchronization mechanisms 
                    using C for hash table operations. This involved employing pthread mutexes to ensure thread-safe 
                    data access and modification in a multi-threaded environment."
                imgPath="/img/project/threads.png"
                imgAlt="Threads and Process Manager image"
            />
            <Project 
                position="16-bit Enhanced Processor"
                software="Verilog (HDL), Assembly, ModelSim"
                description="In our Computer Organization course, we developed a 16-bit processor featuring 
                    8 registers, capable of executing instructions like mov, movt, add, sub, ldr, str, and b. 
                    For debugging, we used ModelSim's FSM timing diagram, enhancing the ALU for add, sub, and and operations."
                imgPath="/img/project/processor.png"
                imgAlt="Enhanced Processor image"
            />

            {/* Contact */}
            <div id='contact'><Contact /></div>
        </main>
    );
};

export default Page;