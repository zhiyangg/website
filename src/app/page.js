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
            <Home />
            
            {/* About */}
            <Navbar />
            <About />

            {/* Experience  */}
            
            
            <Header title="Experience"/>
            <Exp 
                position="Junior Tolling Field Technician"
                company="407 ETR Concession Company Limited"
                startDate="May 2023"
                endDate="Sep 2023"
                description="As a Junior Tolling Field Technician at 407 ETR, 
                    I maintained and improved tolling equipment through regular inspections, 
                    diagnostics, and adjustments, ensuring high operational efficiency. My 
                    involvement in the East Detolling project contributed to the successful 
                    decommissioning of legacy sites and the establishment of new ones, 
                    significantly enhancing tolling efficiency"
                imgPath="/img/exp/407etr.jpeg"
                imgAlt="407 ETR image"
                linkURL="https://www.407etr.com/en/index.html"
            />
            <Exp 
                position="Electrical Team"
                company="Blue Sky Solar Racing"
                startDate="Sep 2022"
                endDate="Sep 2023"
                description="Proficient in soldering and testing circuit boards for electrical 
                    systems, collaborating within other teams to ensure optimal functionality."
                imgPath="/img/exp/bssr.png"
                imgAlt="Blue Sky Solar Racing image"
                linkURL="https://www.blueskysolar.org/team"
            />
            <Exp 
                position="Park Operations"
                company="City of Markham"
                startDate="May 2022"
                endDate="Sep 2022"
                description="As Park Operations employee ar the City of Markham, I managed a 
                    comprehensive maintenance schedule, liaising with regional managers and community 
                    members to uphold the beauty and cleanliness of city parks. I am skilled in 
                    operating a diverse array of equipment such as zero-turn lawn mowers, 
                    push mowers, trimmers, and blowers"
                imgPath="/img/exp/cityofmarkham.png"
                imgAlt="City of Markham image"
                linkURL="https://www.markham.ca/wps/portal/home"
            />
            <Exp 
                position="Program Coordinator"
                company="Community Engagement and Family Support Centre"
                startDate="Jul 2021"
                endDate="Aug 2021"
                description="In my role as a Program Coordinator for the Community Engagement 
                    and Family Support Centre, I organized daily activities and special events for 
                    a summer camp, catering to a diverse group of 30 campers. My responsibilities 
                    included crafting a dynamic activity schedule that addressed varied interests 
                    and needs, spanning online engagements, arts and crafts, and sports. Collaborating 
                    closely with camp directors, I helped to uphold and further the camp's vision and mission,
                    creating an enriching environment for all participants."
                imgPath="/img/exp/cefs.jpeg"
                imgAlt="CEFS image"
                linkURL="https://cefscentre.org/en/"
            />
            <Exp 
                position="Flight Sergeant"
                company="Royal Canadian Air Cadets"
                startDate="Sep 2016"
                endDate="Jun 2021"
                description="I led teams in diverse traning activites, including camping and fitness 
                    testing; Communicating and working alongside CAF officers, staff, and cadets."
                imgPath="/img/exp/rcac.png"
                imgAlt="Royal Canadian Air Cadets image"
                linkURL="https://www.351silverstar.com/"
            />

            {/* Projects */}
            <Header title="Projects"/>
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
                imgPath="/img/project/otfmap.png"
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
            <Contact />
        </main>
    );
};

export default Page;