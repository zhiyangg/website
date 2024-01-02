import React from 'react';

import Home from '../components/home';
import Navbar from '../components/navbar'; 
import Header from '../components/header';
import Exp from '../components/exp';

import './globals.css';

const Page = () => {
  return (
    <main>
        <Home />

        <Navbar />

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
    </main>
  );
};

export default Page;