import jsPDF from 'jspdf';

export const generate7DayCalmProtocolPDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 15;
  const contentWidth = pageWidth - (margin * 2);
  let yPosition = 15;

  // Helper function to check page break
  const checkPageBreak = (neededSpace: number = 30) => {
    if (yPosition > 280 - neededSpace) {
      doc.addPage();
      yPosition = 20;
      return true;
    }
    return false;
  };

  // ===== COVER PAGE =====
  // Background gradient effect
  doc.setFillColor(255, 248, 235);
  doc.rect(0, 0, pageWidth, 297, 'F');
  
  // Decorative top border
  doc.setFillColor(200, 130, 70);
  doc.rect(0, 0, pageWidth, 8, 'F');
  
  // Main title
  yPosition = 60;
  doc.setFontSize(32);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(150, 80, 40);
  doc.text('7-Day Calm Protocol', pageWidth / 2, yPosition, { align: 'center' });
  
  yPosition += 15;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(120, 90, 60);
  doc.text('A Spiritual Journey to Inner Peace', pageWidth / 2, yPosition, { align: 'center' });
  
  // Decorative element
  yPosition += 20;
  doc.setDrawColor(200, 150, 100);
  doc.setLineWidth(1);
  doc.line(margin + 40, yPosition, pageWidth - margin - 40, yPosition);
  
  // Gita Quote
  yPosition += 25;
  doc.setFillColor(255, 252, 245);
  doc.roundedRect(margin + 10, yPosition - 5, contentWidth - 20, 45, 5, 5, 'F');
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(100, 70, 50);
  const quoteText = '"When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place."';
  const quoteLines = doc.splitTextToSize(quoteText, contentWidth - 40);
  quoteLines.forEach((line: string) => {
    doc.text(line, pageWidth / 2, yPosition + 10, { align: 'center' });
    yPosition += 8;
  });
  yPosition += 5;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(180, 100, 50);
  doc.text('— Bhagavad Gita 6.19', pageWidth / 2, yPosition + 5, { align: 'center' });
  
  // What you'll achieve
  yPosition += 40;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(150, 80, 40);
  doc.text('What You Will Achieve', pageWidth / 2, yPosition, { align: 'center' });
  
  yPosition += 15;
  const benefits = [
    '✓ Reduced stress and anxiety levels',
    '✓ Improved mental clarity and focus',
    '✓ Better sleep quality',
    '✓ Enhanced emotional regulation',
    '✓ Deeper spiritual connection',
    '✓ Practical tools for daily peace'
  ];
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 60, 50);
  benefits.forEach((benefit) => {
    doc.text(benefit, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 10;
  });
  
  // Author info
  yPosition = 240;
  doc.setFillColor(250, 245, 235);
  doc.roundedRect(margin + 20, yPosition - 10, contentWidth - 40, 35, 5, 5, 'F');
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(150, 80, 40);
  doc.text('Vaikuntha Vraj Das', pageWidth / 2, yPosition, { align: 'center' });
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(120, 100, 80);
  doc.text('Spiritual Coach • Bhagavad Gita Teacher', pageWidth / 2, yPosition + 8, { align: 'center' });
  doc.text('ISKCON Punjabi Bagh, Delhi', pageWidth / 2, yPosition + 16, { align: 'center' });
  
  // ===== INTRODUCTION PAGE =====
  doc.addPage();
  yPosition = 20;
  
  doc.setFillColor(255, 248, 235);
  doc.rect(0, 0, pageWidth, 297, 'F');
  
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(150, 80, 40);
  doc.text('Before You Begin', margin, yPosition);
  yPosition += 15;
  
  doc.setDrawColor(200, 150, 100);
  doc.setLineWidth(0.5);
  doc.line(margin, yPosition, margin + 60, yPosition);
  yPosition += 15;
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 50, 45);
  
  const introText = [
    'This 7-day protocol is designed to help you cultivate inner peace through time-tested spiritual practices from the Vedic tradition. Each day builds upon the previous, gradually deepening your practice.',
    '',
    'Key Principles:',
    '• Consistency over intensity — even 10 minutes of sincere practice is valuable',
    '• Start where you are — no prior experience needed',
    '• Be patient with yourself — transformation takes time',
    '• Combine with healthy lifestyle — sleep, nutrition, exercise matter',
    '',
    'What You Need:',
    '• A quiet space for meditation (even 5 min is enough)',
    '• A journal or notebook',
    '• Japa beads (optional but recommended)',
    '• An open mind and sincere heart',
  ];
  
  introText.forEach((line) => {
    if (line === '') {
      yPosition += 5;
    } else {
      const lines = doc.splitTextToSize(line, contentWidth);
      lines.forEach((l: string) => {
        doc.text(l, margin, yPosition);
        yPosition += 6;
      });
    }
  });
  
  // ===== DAILY PROTOCOLS =====
  const dailyProtocols = [
    {
      day: 1,
      theme: 'Awareness',
      focus: 'Recognizing the Restless Mind',
      morning: [
        'Wake 15 min earlier than usual',
        'Sit quietly for 5 min, observing your thoughts without judgment',
        'Write 3 things you are grateful for',
      ],
      afternoon: [
        'Take 3 conscious deep breaths before meals',
        'Notice 5 moments of stress during the day',
        'Write them in your journal',
      ],
      evening: [
        'Review your stress triggers from today',
        'Read BG 6.5-6 about the mind as friend/enemy',
        'Gentle stretching for 5 minutes',
      ],
      mantra: 'Today, I observe without reaction.',
    },
    {
      day: 2,
      theme: 'Breath',
      focus: 'Pranayama — The Bridge to Calm',
      morning: [
        'Practice 5 rounds of deep breathing (4-4-4 pattern)',
        '5 min silent sitting after breathing',
        'Set one intention for the day',
      ],
      afternoon: [
        'When stressed, pause for 3 breaths',
        'Practice box breathing (4-4-4-4) once',
        'Short walk in nature if possible',
      ],
      evening: [
        '10 rounds of alternate nostril breathing',
        'Journal: How did breath practice affect your day?',
        'Read BG 4.29 on breath control',
      ],
      mantra: 'My breath is my anchor to the present.',
    },
    {
      day: 3,
      theme: 'Sound',
      focus: 'The Healing Power of Sacred Sound',
      morning: [
        'Chant "Om" 11 times slowly',
        'Listen to peaceful kirtan for 10 min',
        'Practice gratitude for 3 people',
      ],
      afternoon: [
        'Replace background noise with spiritual music',
        'Speak less, listen more today',
        'Notice how sound affects your mood',
      ],
      evening: [
        'Chant Hare Krishna mahamantra 1 round on beads (108 times) or listen',
        'Journal about your experience with sound',
        'Read about the power of the Holy Name',
      ],
      mantra: 'Sacred sound purifies my mind.',
    },
    {
      day: 4,
      theme: 'Routine',
      focus: 'Building a Spiritual Foundation',
      morning: [
        'Wake at a fixed time (ideally before 6 AM)',
        'Full morning practice: breath + chant + gratitude (15 min)',
        'Light breakfast mindfully',
      ],
      afternoon: [
        'Take a midday pause for 5 min meditation',
        'Practice one act of service for someone',
        'Avoid digital distractions for 1 hour',
      ],
      evening: [
        'Review: Did routine help reduce anxiety?',
        'Read BG 6.16-17 on balanced living',
        'Sleep by 10 PM',
      ],
      mantra: 'Discipline is the foundation of freedom.',
    },
    {
      day: 5,
      theme: 'Detachment',
      focus: 'Letting Go of What You Cannot Control',
      morning: [
        'Meditation: Focus on what you CAN control',
        'List 3 things causing worry',
        'Practice mentally releasing them',
      ],
      afternoon: [
        'When anxious, ask: "Is this in my control?"',
        'Practice "neti neti" — "not this, not this"',
        'Accept one imperfect situation peacefully',
      ],
      evening: [
        'Reflect on the teaching of BG 2.47 — focus on action, not results',
        'Journal: What could you release today?',
        'Forgiveness meditation for self and others',
      ],
      mantra: 'I release what I cannot control.',
    },
    {
      day: 6,
      theme: 'Connection',
      focus: 'Finding the Divine Within',
      morning: [
        'Extended meditation: 15-20 min',
        'Focus on the Supersoul within the heart',
        'Offer your day to the Lord',
      ],
      afternoon: [
        'See the divine in everyone you meet',
        'Practice patience in one challenging situation',
        'Perform one selfless act of service',
      ],
      evening: [
        'Read BG 10.20 — Krishna as the Supersoul',
        'Evening arati or kirtan (online or local temple)',
        'Pray for peace of mind and devotion',
      ],
      mantra: 'The Divine resides within me always.',
    },
    {
      day: 7,
      theme: 'Integration',
      focus: 'Creating Your Daily Practice',
      morning: [
        'Complete morning sadhana: 20+ min',
        'Write your personal 7-day commitment',
        'Choose which practices to continue',
      ],
      afternoon: [
        'Share your experience with a friend or mentor',
        'Plan your ongoing daily practice schedule',
        'Identify one area for continued growth',
      ],
      evening: [
        'Celebration: Acknowledge your dedication!',
        'Read BG 6.46-47 — the greatness of spiritual practice',
        'Set goals for the next 21 days',
      ],
      mantra: 'Peace is now my natural state.',
    },
  ];
  
  dailyProtocols.forEach((day) => {
    doc.addPage();
    yPosition = 15;
    
    // Day header
    doc.setFillColor(200, 130, 70);
    doc.rect(0, 0, pageWidth, 35, 'F');
    
    doc.setFontSize(28);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 255, 255);
    doc.text(`Day ${day.day}`, margin, 22);
    
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text(day.theme.toUpperCase(), pageWidth - margin, 17, { align: 'right' });
    doc.setFontSize(11);
    doc.text(day.focus, pageWidth - margin, 27, { align: 'right' });
    
    yPosition = 45;
    
    // Morning section
    doc.setFillColor(255, 250, 240);
    doc.roundedRect(margin, yPosition, contentWidth, 50, 3, 3, 'F');
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(180, 100, 50);
    doc.text('☀ MORNING', margin + 5, yPosition + 10);
    
    yPosition += 18;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 50, 45);
    day.morning.forEach((item) => {
      doc.text(`• ${item}`, margin + 8, yPosition);
      yPosition += 8;
    });
    
    yPosition += 10;
    
    // Afternoon section
    doc.setFillColor(250, 248, 240);
    doc.roundedRect(margin, yPosition, contentWidth, 50, 3, 3, 'F');
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(180, 100, 50);
    doc.text('🌤 AFTERNOON', margin + 5, yPosition + 10);
    
    yPosition += 18;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 50, 45);
    day.afternoon.forEach((item) => {
      doc.text(`• ${item}`, margin + 8, yPosition);
      yPosition += 8;
    });
    
    yPosition += 10;
    
    // Evening section
    doc.setFillColor(245, 242, 235);
    doc.roundedRect(margin, yPosition, contentWidth, 50, 3, 3, 'F');
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(180, 100, 50);
    doc.text('🌙 EVENING', margin + 5, yPosition + 10);
    
    yPosition += 18;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 50, 45);
    day.evening.forEach((item) => {
      doc.text(`• ${item}`, margin + 8, yPosition);
      yPosition += 8;
    });
    
    yPosition += 15;
    
    // Daily Mantra
    doc.setFillColor(200, 130, 70);
    doc.roundedRect(margin + 20, yPosition, contentWidth - 40, 25, 3, 3, 'F');
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(255, 255, 255);
    doc.text(`"${day.mantra}"`, pageWidth / 2, yPosition + 15, { align: 'center' });
    
    // Checkbox section
    yPosition += 40;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(150, 80, 40);
    doc.text('Daily Checklist:', margin, yPosition);
    yPosition += 8;
    
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(80, 70, 60);
    const checkItems = ['Morning practice completed', 'Afternoon pause taken', 'Evening reflection done', 'Journal entry written'];
    checkItems.forEach((item) => {
      doc.rect(margin + 5, yPosition - 4, 5, 5);
      doc.text(item, margin + 15, yPosition);
      yPosition += 8;
    });
  });
  
  // ===== FINAL PAGE - TRACKING & NOTES =====
  doc.addPage();
  yPosition = 20;
  
  doc.setFillColor(255, 248, 235);
  doc.rect(0, 0, pageWidth, 297, 'F');
  
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(150, 80, 40);
  doc.text('Your 7-Day Progress', margin, yPosition);
  yPosition += 15;
  
  // Progress tracking table
  doc.setFillColor(250, 245, 235);
  doc.rect(margin, yPosition, contentWidth, 12, 'F');
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(100, 80, 60);
  const headers = ['Day', 'Date', 'Morning ✓', 'Afternoon ✓', 'Evening ✓', 'Mood (1-10)'];
  const colWidths = [20, 30, 30, 35, 30, 35];
  let xPos = margin;
  
  headers.forEach((header, i) => {
    doc.text(header, xPos + 3, yPosition + 8);
    xPos += colWidths[i];
  });
  
  yPosition += 12;
  
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 80, 80);
  for (let i = 1; i <= 7; i++) {
    doc.setDrawColor(220, 210, 200);
    doc.line(margin, yPosition + 10, pageWidth - margin, yPosition + 10);
    doc.text(`${i}`, margin + 8, yPosition + 7);
    yPosition += 12;
  }
  
  yPosition += 20;
  
  // Notes section
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(150, 80, 40);
  doc.text('Personal Notes & Reflections', margin, yPosition);
  yPosition += 12;
  
  doc.setDrawColor(200, 190, 180);
  doc.setLineWidth(0.3);
  for (let i = 0; i < 10; i++) {
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 10;
  }
  
  // Footer
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(150, 150, 150);
  doc.text('7-Day Calm Protocol | Vaikuntha Vraj Das | vaikunthavrajdas.com', pageWidth / 2, 285, { align: 'center' });
  
  // Save the PDF
  doc.save('7-day-calm-protocol.pdf');
};
