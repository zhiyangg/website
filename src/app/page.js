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
            imgPath="/img/exp/407etr.jpg"
            imgAlt="407 ETR image"
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
        />
        <Exp 
            position="Program Coordinator"
            company="Community Engagement and Family Support Centre"
            startDate="Jul 2021"
            endDate="Aug 2021"
            description="As Park Operations employee ar the City of Markham, I managed a 
            comprehensive maintenance schedule, liaising with regional managers and community 
            members to uphold the beauty and cleanliness of city parks. I am skilled in 
            operating a diverse array of equipment such as zero-turn lawn mowers, 
            push mowers, trimmers, and blowers"
            imgPath="/img/exp/cefs.jpeg"
            imgAlt="CEFS image"
        />
    </main>
  );
};

export default Page;