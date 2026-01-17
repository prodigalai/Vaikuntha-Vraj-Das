import jsPDF from 'jspdf';

interface CaseStudyData {
  title: string;
  category: string;
  description: string;
  problem: string;
  rootCauses: string[];
  gitaQuotes: { text: string; reference: string }[];
  protocol: { title: string; description: string }[];
  reflectionQuestions: string[];
}

export const generateCaseStudyPDF = (study: CaseStudyData) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);
  let yPosition = 20;

  // Helper function to add text with word wrap
  const addWrappedText = (text: string, fontSize: number, isBold: boolean = false, color: [number, number, number] = [0, 0, 0]) => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    doc.setTextColor(color[0], color[1], color[2]);
    
    const lines = doc.splitTextToSize(text, contentWidth);
    
    lines.forEach((line: string) => {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }
      doc.text(line, margin, yPosition);
      yPosition += fontSize * 0.5;
    });
    yPosition += 5;
  };

  // Helper to add a new section
  const addSection = (title: string) => {
    if (yPosition > 240) {
      doc.addPage();
      yPosition = 20;
    }
    yPosition += 10;
    addWrappedText(title, 14, true, [180, 100, 50]);
    yPosition += 3;
  };

  // Header
  doc.setFillColor(255, 248, 235);
  doc.rect(0, 0, pageWidth, 50, 'F');
  
  // Title
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(150, 80, 40);
  const titleLines = doc.splitTextToSize(study.title, contentWidth);
  titleLines.forEach((line: string) => {
    doc.text(line, margin, yPosition);
    yPosition += 10;
  });
  
  // Category badge
  yPosition += 5;
  doc.setFontSize(10);
  doc.setTextColor(180, 100, 50);
  doc.text(`Category: ${study.category}`, margin, yPosition);
  yPosition += 15;
  
  // Decorative line
  doc.setDrawColor(200, 150, 100);
  doc.setLineWidth(0.5);
  doc.line(margin, yPosition, pageWidth - margin, yPosition);
  yPosition += 15;

  // Description
  addWrappedText(study.description, 11, false, [80, 80, 80]);
  yPosition += 10;

  // The Challenge
  addSection('The Challenge');
  addWrappedText(study.problem, 10, false, [60, 60, 60]);

  // Root Causes
  addSection('Root Causes');
  study.rootCauses.forEach((cause, index) => {
    if (yPosition > 260) {
      doc.addPage();
      yPosition = 20;
    }
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    const causeText = `${index + 1}. ${cause}`;
    const lines = doc.splitTextToSize(causeText, contentWidth - 10);
    lines.forEach((line: string) => {
      doc.text(line, margin + 5, yPosition);
      yPosition += 5;
    });
    yPosition += 3;
  });

  // Wisdom from the Gita
  addSection('Wisdom from the Bhagavad Gita');
  study.gitaQuotes.forEach((quote) => {
    if (yPosition > 240) {
      doc.addPage();
      yPosition = 20;
    }
    // Quote box
    doc.setFillColor(255, 250, 240);
    const quoteLines = doc.splitTextToSize(`"${quote.text}"`, contentWidth - 20);
    const boxHeight = (quoteLines.length * 6) + 20;
    doc.roundedRect(margin, yPosition - 5, contentWidth, boxHeight, 3, 3, 'F');
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(80, 60, 40);
    quoteLines.forEach((line: string) => {
      doc.text(line, margin + 10, yPosition + 5);
      yPosition += 6;
    });
    yPosition += 5;
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(180, 100, 50);
    doc.text(`— ${quote.reference}`, margin + 10, yPosition);
    yPosition += 15;
  });

  // Transformation Protocol
  doc.addPage();
  yPosition = 20;
  
  // Protocol header
  doc.setFillColor(255, 248, 235);
  doc.rect(0, 0, pageWidth, 40, 'F');
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(150, 80, 40);
  doc.text('Transformation Protocol', margin, 25);
  yPosition = 50;

  study.protocol.forEach((step, index) => {
    if (yPosition > 240) {
      doc.addPage();
      yPosition = 20;
    }
    
    // Step box
    doc.setFillColor(index % 2 === 0 ? 255 : 250, 252, 245);
    const descLines = doc.splitTextToSize(step.description, contentWidth - 30);
    const stepBoxHeight = 20 + (descLines.length * 5);
    doc.roundedRect(margin, yPosition - 5, contentWidth, stepBoxHeight, 3, 3, 'F');
    
    // Step title
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(150, 80, 40);
    doc.text(step.title, margin + 10, yPosition + 5);
    yPosition += 12;
    
    // Step description
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    descLines.forEach((line: string) => {
      doc.text(line, margin + 10, yPosition);
      yPosition += 5;
    });
    yPosition += 10;
  });

  // Reflection Questions
  if (yPosition > 200) {
    doc.addPage();
    yPosition = 20;
  }
  
  yPosition += 10;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(150, 80, 40);
  doc.text('Reflection Questions', margin, yPosition);
  yPosition += 15;

  study.reflectionQuestions.forEach((question, index) => {
    if (yPosition > 260) {
      doc.addPage();
      yPosition = 20;
    }
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    const questionText = `${index + 1}. ${question}`;
    const lines = doc.splitTextToSize(questionText, contentWidth - 10);
    lines.forEach((line: string) => {
      doc.text(line, margin + 5, yPosition);
      yPosition += 5;
    });
    
    // Space for writing
    yPosition += 3;
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.2);
    for (let i = 0; i < 3; i++) {
      doc.line(margin + 10, yPosition, pageWidth - margin, yPosition);
      yPosition += 8;
    }
    yPosition += 5;
  });

  // Footer on last page
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(150, 150, 150);
  doc.text('Vaikuntha Vraj Das | vaikunthavrajdas.com | ISKCON Punjabi Bagh, Delhi', pageWidth / 2, 285, { align: 'center' });

  // Save the PDF
  const fileName = study.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-');
  doc.save(`${fileName}-protocol.pdf`);
};

export const generateWorksheetPDF = (study: CaseStudyData) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);
  let yPosition = 20;

  // Header
  doc.setFillColor(255, 248, 235);
  doc.rect(0, 0, pageWidth, 45, 'F');
  
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(150, 80, 40);
  doc.text('Personal Transformation Worksheet', margin, 20);
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 80, 60);
  const titleLines = doc.splitTextToSize(study.title, contentWidth);
  doc.text(titleLines[0], margin, 32);
  yPosition = 55;

  // Personal Information
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(80, 80, 80);
  doc.text('Name: ________________________________', margin, yPosition);
  doc.text('Date Started: ________________', margin + 100, yPosition);
  yPosition += 15;

  // My Current Situation
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(150, 80, 40);
  doc.text('My Current Situation', margin, yPosition);
  yPosition += 10;
  
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.3);
  for (let i = 0; i < 5; i++) {
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 10;
  }
  yPosition += 10;

  // My Goals for this Protocol
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(150, 80, 40);
  doc.text('My Goals for This Transformation', margin, yPosition);
  yPosition += 10;
  
  for (let i = 0; i < 4; i++) {
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 10;
  }
  yPosition += 10;

  // Daily Tracking Section
  doc.addPage();
  yPosition = 20;
  
  doc.setFillColor(255, 248, 235);
  doc.rect(0, 0, pageWidth, 35, 'F');
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(150, 80, 40);
  doc.text('Daily Practice Tracker', margin, 22);
  yPosition = 45;

  // Create tracking table
  const days = ['Day', 'Japa', 'Gratitude', 'Reading', 'Service', 'Notes'];
  const colWidth = contentWidth / 6;
  
  // Table header
  doc.setFillColor(250, 245, 235);
  doc.rect(margin, yPosition - 5, contentWidth, 12, 'F');
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(100, 80, 60);
  
  days.forEach((day, index) => {
    doc.text(day, margin + (colWidth * index) + 5, yPosition + 2);
  });
  yPosition += 12;
  
  // Table rows
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 80, 80);
  for (let i = 1; i <= 21; i++) {
    if (yPosition > 270) {
      doc.addPage();
      yPosition = 20;
      // Repeat header
      doc.setFillColor(250, 245, 235);
      doc.rect(margin, yPosition - 5, contentWidth, 12, 'F');
      doc.setFont('helvetica', 'bold');
      days.forEach((day, index) => {
        doc.text(day, margin + (colWidth * index) + 5, yPosition + 2);
      });
      yPosition += 12;
      doc.setFont('helvetica', 'normal');
    }
    
    doc.setDrawColor(220, 220, 220);
    doc.line(margin, yPosition + 5, pageWidth - margin, yPosition + 5);
    doc.text(`${i}`, margin + 10, yPosition + 3);
    yPosition += 10;
  }

  // Reflection Questions Page
  doc.addPage();
  yPosition = 20;
  
  doc.setFillColor(255, 248, 235);
  doc.rect(0, 0, pageWidth, 35, 'F');
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(150, 80, 40);
  doc.text('Reflection Journal', margin, 22);
  yPosition = 50;

  study.reflectionQuestions.forEach((question, index) => {
    if (yPosition > 200) {
      doc.addPage();
      yPosition = 20;
    }
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(100, 80, 60);
    const questionLines = doc.splitTextToSize(`${index + 1}. ${question}`, contentWidth);
    questionLines.forEach((line: string) => {
      doc.text(line, margin, yPosition);
      yPosition += 6;
    });
    yPosition += 5;
    
    // Answer lines
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.3);
    for (let i = 0; i < 6; i++) {
      doc.line(margin, yPosition, pageWidth - margin, yPosition);
      yPosition += 10;
    }
    yPosition += 10;
  });

  // Footer
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(150, 150, 150);
  doc.text('Vaikuntha Vraj Das | vaikunthavrajdas.com | ISKCON Punjabi Bagh, Delhi', pageWidth / 2, 285, { align: 'center' });

  // Save
  const fileName = study.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-');
  doc.save(`${fileName}-worksheet.pdf`);
};