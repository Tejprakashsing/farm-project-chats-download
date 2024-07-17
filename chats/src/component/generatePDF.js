import { jsPDF } from 'jspdf';

export function generatePDF(modelData){
    const doc = new jsPDF();
        let y = 10;

        doc.setFontSize(18);
        doc.text('Crop Management Plan', 10, y);
        y += 10;

        doc.setFontSize(14);
        doc.text(`Crop: ${modelData.Crop}`, 10, y);
        y += 10;

        doc.setFontSize(12);
        doc.text('Fertilizer:', 10, y);
        y += 10;

        modelData.Fertilizer.forEach((item, index) => {
            doc.text(`${index + 1}. Name: ${item.Name}`, 10, y);
            y += 5;
            doc.text(`   Quantity: ${item.Quantity}`, 10, y);
            y += 5;
            doc.text(`   Application Method: ${item.ApplicationMethod}`, 10, y);
            y += 10;
        });

        doc.text('Pesticide:', 10, y);
        y += 10;

        modelData.Pesticide.forEach((item, index) => {
            doc.text(`${index + 1}. Name: ${item.Name}`, 10, y);
            y += 5;
            doc.text(`   Quantity: ${item.Quantity}`, 10, y);
            y += 5;
            doc.text(`   Application Method: ${item.ApplicationMethod}`, 10, y);
            y += 10;
        });

        doc.text('Seeds:', 10, y);
        y += 10;
        doc.text(`Name: ${modelData.Seeds.Name}`, 10, y);
        y += 5;
        doc.text(`Variety: ${modelData.Seeds.Variety}`, 10, y);
        y += 5;
        doc.text(`Quantity: ${modelData.Seeds.Quantity}`, 10, y);
        y += 10;

        doc.text('Profit Potential:', 10, y);
        y += 10;
        doc.text(modelData.ProfitPotential, 10, y);
        y += 10;

        doc.text('Farming Roadmap:', 10, y);
        y += 10;

        modelData.FarmingRoadmap.forEach((item) => {
            doc.text(`Day ${item.Day}: ${item.Activity}`, 10, y);
            y += 10;
        });

        doc.save('Crop_Management_Plan.pdf');
    };