import React, { useState } from 'react';
import ChatDisplay from './chatDisplay';
import Button from './button';
import { generatePDF } from './generatePDF';
import './chat.css';

const modelData = {
    Crop: 'Tomato',
    Fertilizer: [
        { Name: 'Urea', Quantity: '50 kg', ApplicationMethod: 'Broadcast' },
        { Name: 'DAP', Quantity: '25 kg', ApplicationMethod: 'Broadcast' }
    ],
    Pesticide: [
        { Name: 'Imidacloprid', Quantity: '100 ml', ApplicationMethod: 'Spray' },
        { Name: 'Mancozeb', Quantity: '200 g', ApplicationMethod: 'Spray' }
    ],
    Seeds: { Name: 'Tomato', Variety: 'Pusa Ruby', Quantity: '500 g' },
    ProfitPotential: 'High demand and good market prices in Delhi during summer.',
    FarmingRoadmap: [
        { Day: 1, Activity: 'Land preparation and seed sowing' },
        { Day: 7, Activity: 'First irrigation' },
        { Day: 14, Activity: 'First weeding and fertilizer application' },
        { Day: 21, Activity: 'Second irrigation and pesticide application' },
        { Day: 28, Activity: 'Third irrigation and fertilizer application' },
        { Day: 35, Activity: 'Fourth irrigation and pesticide application' },
        { Day: 42, Activity: 'Harvesting begins' },
        { Day: 49, Activity: 'Harvesting continues' },
        { Day: 56, Activity: 'Harvesting ends' }
    ]
};

export default function Chats() {
    const [modelRes, setModelRes] = useState({});

    function saveData() {
        //code for fetching data
        setModelRes(modelData);
        generatePDF(modelRes);
    }

    function improveData() {
        // code to redirect to generate data page
    }

    return (
        <div className="container">
            <div className="chat-display-container">
                <ChatDisplay modelData={modelData}/>
            </div>
            <div className="button-container">
                <Button onClick={saveData} text={"Save Data"} className="button" />
                <Button onClick={improveData} text={"Improve Data"} className="button" />
            </div>
        </div>
    );
}
