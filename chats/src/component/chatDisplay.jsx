import React from 'react';
import './chatDisplay.css'; 

const ChatDisplay = ({ modelData }) => {
    return (
        <div className="chat-display">
            <h2>Crop Management Plan</h2>
            
            <div className="section">
                <h3>Crop</h3>
                <p>{modelData.Crop}</p>
            </div>

            <div className="section">
                <h3>Fertilizer</h3>
                {modelData.Fertilizer.map((item, index) => (
                    <div key={index} className="item">
                        <p><strong>Name:</strong> {item.Name}</p>
                        <p><strong>Quantity:</strong> {item.Quantity}</p>
                        <p><strong>Application Method:</strong> {item.ApplicationMethod}</p>
                    </div>
                ))}
            </div>

            <div className="section">
                <h3>Pesticide</h3>
                {modelData.Pesticide.map((item, index) => (
                    <div key={index} className="item">
                        <p><strong>Name:</strong> {item.Name}</p>
                        <p><strong>Quantity:</strong> {item.Quantity}</p>
                        <p><strong>Application Method:</strong> {item.ApplicationMethod}</p>
                    </div>
                ))}
            </div>

            <div className="section">
                <h3>Seeds</h3>
                <p><strong>Name:</strong> {modelData.Seeds.Name}</p>
                <p><strong>Variety:</strong> {modelData.Seeds.Variety}</p>
                <p><strong>Quantity:</strong> {modelData.Seeds.Quantity}</p>
            </div>

            <div className="section">
                <h3>Profit Potential</h3>
                <p>{modelData.ProfitPotential}</p>
            </div>

            <div className="section">
                <h3>Farming Roadmap</h3>
                {modelData.FarmingRoadmap.map((item, index) => (
                    <div key={index} className="item">
                        <p><strong>Day {item.Day}:</strong> {item.Activity}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatDisplay;
