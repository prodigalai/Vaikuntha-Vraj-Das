import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Download, Play, BookOpen, MessageCircle, AlertTriangle, Heart, Phone, FileText, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateCaseStudyPDF, generateWorksheetPDF } from "@/lib/generatePDF";
import { toast } from "sonner";

const caseStudyData: Record<string, {
  title: string;
  category: string;
  description: string;
  image: string;
  problem: string;
  statistics: { label: string; value: string }[];
  rootCauses: string[];
  gitaQuotes: { text: string; reference: string }[];
  protocol: { title: string; description: string }[];
  reflectionQuestions: string[];
  relatedVideos: { title: string; videoId: string; duration: string }[];
  relatedStudies: string[];
  fullArticle: string[];
}> = {
  "silent-epidemic-suicide-india": {
    title: "The Silent Epidemic: Understanding Suicide in India",
    category: "Mind",
    description: "A deep dive into the rising crisis of mental health and suicide, with practical spiritual solutions rooted in Vedic wisdom.",
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=800&q=80",
    problem: "India is facing an unprecedented mental health crisis. According to the National Crime Records Bureau (NCRB), over 1.64 lakh people died by suicide in 2021 alone—one life lost every 3 minutes. Shockingly, the highest rates are among youth aged 18-30, with students and young professionals forming a significant portion. The pressure of academic expectations, career uncertainty, relationship challenges, social media comparison, and a pervasive sense of purposelessness have created what experts call 'the silent epidemic.'",
    statistics: [
      { label: "Daily suicides in India", value: "450+" },
      { label: "Youth (18-30) affected", value: "35%" },
      { label: "Student suicides annually", value: "12,000+" },
      { label: "Seek professional help", value: "<10%" },
    ],
    rootCauses: [
      "Disconnection from deeper purpose and meaning in life—living only for temporary goals",
      "Over-identification with temporary roles (student, employee, success/failure) rather than understanding eternal identity",
      "Lack of genuine community and meaningful relationships in an increasingly isolated digital world",
      "Unchecked negative thought patterns—the mind becoming one's worst enemy",
      "Absence of spiritual foundation and daily practices that ground the soul",
      "Unrealistic expectations from society, family, and self",
      "Comparison culture amplified by social media",
    ],
    gitaQuotes: [
      {
        text: "For one who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, the mind will remain the greatest enemy.",
        reference: "Bhagavad Gita 6.6",
      },
      {
        text: "A person who is not disturbed by the incessant flow of desires—that enter like rivers into the ocean, which is ever being filled but is always still—can alone achieve peace, and not the man who strives to satisfy such desires.",
        reference: "Bhagavad Gita 2.70",
      },
    ],
    protocol: [
      { title: "Days 1-3: Foundation of Stability", description: "Establish a consistent sleep schedule (wake before sunrise if possible). Practice 10 minutes of gratitude journaling each morning—write 3 things you're grateful for. Reduce screen time to under 2 hours, especially before bed. Connect with nature for at least 15 minutes daily." },
      { title: "Days 4-7: Introduction to Mantra Meditation", description: "Begin simple mantra meditation (japa) for 15 minutes using the Hare Krishna maha-mantra. This anchors the mind and provides a positive focal point. Connect with one supportive person daily—even a brief meaningful conversation helps." },
      { title: "Days 8-14: Deepening Understanding", description: "Read Bhagavad Gita Chapter 2 slowly, one verse per day, with contemplation. Increase japa to 20-30 minutes. Start a reflection journal—write about what resonates and challenges you." },
      { title: "Days 15-21: Community & Service", description: "Attend at least one satsang (spiritual gathering) or connect with a spiritual community online. Practice seva (selfless service)—even small acts of kindness shift focus from self to others. Review your 21-day journey and celebrate progress, however small." },
    ],
    reflectionQuestions: [
      "What gives my life meaning beyond achievements, possessions, and relationships?",
      "How do I respond when my plans and expectations don't materialize?",
      "Who in my life provides genuine support without judgment?",
      "What regular practices help me maintain mental peace and perspective?",
      "How can I use my own struggles to help others facing similar challenges?",
      "Am I living for temporary pleasures or building something eternal?",
    ],
    relatedVideos: [
      { title: "Overcoming Mental Challenges - Bhagavad Gita Perspective", videoId: "1Ay-sSBYZj8", duration: "45 min" },
      { title: "Finding Purpose When Life Feels Meaningless", videoId: "hSaw27_Gxnw", duration: "32 min" },
    ],
    relatedStudies: ["stress-management-gita", "digital-addiction", "purpose-anxiety"],
    fullArticle: [
      "## The Crisis We Cannot Ignore",
      "Every three minutes, someone in India takes their own life. This isn't just a statistic—it's a son, a daughter, a friend, a colleague. Behind each number is a story of unbearable pain, a mind that could see no other way out. As a society, we've made tremendous material progress, yet we're failing our youth in the most fundamental way: helping them find reasons to live.",
      "The National Crime Records Bureau data reveals a disturbing trend. Suicide rates among students have increased by 32% in the last decade. IITs, IIMs, medical colleges—institutions we celebrate as pinnacles of success—are witnessing unprecedented mental health crises. The pressure cooker environment, combined with social isolation and a meaning vacuum, is creating a generation in silent agony.",
      "## Why Are Our Youth Suffering?",
      "The Bhagavad Gita, spoken 5,000 years ago, addresses this very issue through Arjuna's breakdown on the battlefield of Kurukshetra. Arjuna wasn't facing academic pressure or career uncertainty—he was a legendary warrior. Yet he collapsed, unable to act, overwhelmed by confusion and despair. His symptoms mirror modern depression: loss of purpose, physical weakness, inability to see a way forward.",
      "Krishna's response to Arjuna wasn't platitudes or positive thinking. He addressed the root cause: misidentification. Arjuna saw himself only as his temporary roles—warrior, brother, friend. When these roles conflicted, his sense of self shattered.",
      "## The Spiritual Diagnosis",
      "The Gita offers a profound understanding: we are not our minds, not our bodies, not our circumstances. We are eternal souls (atma) temporarily inhabiting these forms. This isn't escapism—it's the most practical realization possible. When you know you're not your failures, you can face them. When you know you're not your achievements, you won't be crushed when they fade.",
      "## A Message of Hope",
      "If you're reading this and struggling, please know: your life has meaning. Your struggles are not permanent. The darkness you feel is not the final reality. Reach out—to a counselor, a mentor, a friend, or a spiritual guide. ISKCON centers across India offer free counseling and community support.",
    ],
  },
  "stress-management-gita": {
    title: "Managing Stress Through Gita's Wisdom",
    category: "Mind",
    description: "How the teachings of Bhagavad Gita offer practical tools for managing modern-day stress and finding lasting peace.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    problem: "Chronic stress has become the default state for millions. The World Health Organization calls it 'the health epidemic of the 21st century.' From students preparing for exams to professionals juggling deadlines, stress seems inescapable. But what if the ancient wisdom of the Bhagavad Gita held practical solutions?",
    statistics: [
      { label: "Indians stressed about work", value: "89%" },
      { label: "Millennials report burnout", value: "70%" },
      { label: "Stress-related health issues", value: "60%" },
      { label: "Lost productivity annually", value: "₹1.5L Cr" },
    ],
    rootCauses: [
      "Attachment to outcomes rather than focusing on action",
      "Trying to control what is beyond our control",
      "Lack of present-moment awareness—living in anxiety about future or regret about past",
      "Disconnection from higher purpose in daily work",
      "Neglecting the body-mind-soul connection",
    ],
    gitaQuotes: [
      {
        text: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action.",
        reference: "Bhagavad Gita 2.47",
      },
      {
        text: "Perform your duty equipoised, O Arjuna, abandoning all attachment to success or failure. Such equanimity is called yoga.",
        reference: "Bhagavad Gita 2.48",
      },
    ],
    protocol: [
      { title: "Week 1: Awareness", description: "Track your stress triggers for 7 days. Notice when stress arises and what thoughts accompany it. Practice 5 minutes of deep breathing when stressed." },
      { title: "Week 2: Detachment Practice", description: "Each morning, identify what you can and cannot control. Focus energy only on what's in your hands. Practice 'offering' your work to a higher purpose." },
      { title: "Week 3: Integration", description: "Begin your day with 15 minutes of meditation or japa. End each day reviewing where you got attached to outcomes. Practice gratitude for the opportunity to work." },
    ],
    reflectionQuestions: [
      "Am I stressed because of the work itself or my expectations about results?",
      "What am I trying to control that is beyond my control?",
      "How would I work differently if I focused only on the action, not the outcome?",
    ],
    relatedVideos: [
      { title: "The Secret to Stress-Free Living", videoId: "1lfBJ6eHUw0", duration: "38 min" },
    ],
    relatedStudies: ["silent-epidemic-suicide-india", "purpose-anxiety", "career-dharma"],
    fullArticle: [
      "## The Stress Epidemic",
      "We live in unprecedented times of material comfort, yet we're more stressed than ever. Our ancient ancestors faced tigers and famines; we face emails and deadlines. Somehow, our nervous systems can't tell the difference.",
      "## The Gita's Revolutionary Insight",
      "The Bhagavad Gita offers a revolutionary approach to stress: work without attachment to results. This doesn't mean not caring or not trying. It means putting your best effort into the action while accepting that outcomes are never fully in your control.",
      "Krishna's instruction 'karmanye vadhikaraste ma phaleshu kadachana' (BG 2.47) is perhaps the most practical stress management advice ever given. Your right is to work, not to control results.",
    ],
  },
  "digital-addiction": {
    title: "Breaking Free from Digital Addiction",
    category: "Youth",
    description: "A 21-day protocol to reclaim your attention, time, and mental peace from the grip of technology.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    problem: "The average Indian spends 4.5 hours daily on their smartphone—that's 68 days per year, or 7 years of a lifetime. Social media platforms are designed by the world's best engineers to be addictive. Our attention has become the product being sold.",
    statistics: [
      { label: "Daily phone pickups", value: "80+" },
      { label: "Youth report FOMO", value: "73%" },
      { label: "Sleep affected by screens", value: "65%" },
      { label: "Report phone addiction", value: "47%" },
    ],
    rootCauses: [
      "Dopamine hijacking—constant novelty seeking",
      "Fear of missing out (FOMO) and social comparison",
      "Using devices to escape uncomfortable emotions",
      "Lack of meaningful offline alternatives",
      "Absence of awareness about the manipulation tactics used",
    ],
    gitaQuotes: [
      {
        text: "For him who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, his mind will remain the greatest enemy.",
        reference: "Bhagavad Gita 6.6",
      },
    ],
    protocol: [
      { title: "Week 1: Awareness & Boundaries", description: "Install screen time tracking. Create phone-free zones (bedroom, dining). No phone for first hour after waking." },
      { title: "Week 2: Replacement", description: "Replace mindless scrolling with japa or reading. Schedule specific times for social media. Find offline hobbies." },
      { title: "Week 3: Freedom", description: "Delete most addictive apps for 7 days. Practice being bored—sit without stimulation. Reflect on changes in mental clarity." },
    ],
    reflectionQuestions: [
      "What am I really seeking when I reach for my phone?",
      "How much of my digital consumption adds genuine value to my life?",
      "What would I do with an extra 4 hours every day?",
    ],
    relatedVideos: [
      { title: "Mastering the Mind in Digital Age", videoId: "hSaw27_Gxnw", duration: "42 min" },
    ],
    relatedStudies: ["silent-epidemic-suicide-india", "purpose-anxiety"],
    fullArticle: [
      "## The Attention Economy",
      "Your attention is the new oil. Trillion-dollar companies employ thousands of engineers with one goal: keep you scrolling. This isn't paranoia—it's documented business strategy.",
      "## The Gita's Answer",
      "The Gita speaks extensively about controlling the senses and mind. In the digital age, our eyes, ears, and fingers are constantly stimulated. The mind, craving novelty, becomes a slave to notifications.",
    ],
  },
  "purpose-anxiety": {
    title: "From Anxiety to Purpose",
    category: "Mind",
    description: "Understanding the root causes of anxiety and finding lasting peace through spiritual practice and purpose.",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80",
    problem: "Anxiety disorders affect over 45 million Indians. Beyond clinical anxiety, countless more live with chronic worry, restlessness, and a persistent sense that something is wrong. Modern solutions offer coping mechanisms, but rarely address the root cause.",
    statistics: [
      { label: "Indians with anxiety", value: "45M+" },
      { label: "Youth affected", value: "38%" },
      { label: "Untreated cases", value: "80%" },
      { label: "Linked to purpose crisis", value: "62%" },
    ],
    rootCauses: [
      "Living without a clear sense of purpose or direction",
      "Existential questions left unaddressed",
      "Future-focused thinking disconnected from present action",
      "Lack of trust in a higher order or meaning",
      "Isolation and lack of supportive community",
    ],
    gitaQuotes: [
      {
        text: "Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.",
        reference: "Bhagavad Gita 18.66",
      },
    ],
    protocol: [
      { title: "Week 1: Grounding", description: "Practice daily gratitude. Establish consistent morning routine. Limit news and negative media intake." },
      { title: "Week 2: Purpose Exploration", description: "Reflect on what activities make you lose track of time. Identify your natural inclinations and talents. Begin studying Bhagavad Gita Chapter 3 on action." },
      { title: "Week 3: Surrender & Trust", description: "Practice 'offering' your anxieties in prayer or meditation. Connect with spiritual community. Begin small acts of service to shift focus outward." },
    ],
    reflectionQuestions: [
      "What would I do if I knew I couldn't fail?",
      "What am I anxious about that is beyond my control anyway?",
      "How would my life change if I truly trusted in a higher purpose?",
    ],
    relatedVideos: [
      { title: "Finding Purpose Through Gita", videoId: "1lfBJ6eHUw0", duration: "50 min" },
    ],
    relatedStudies: ["silent-epidemic-suicide-india", "stress-management-gita", "career-dharma"],
    fullArticle: [
      "## The Age of Anxiety",
      "We have more comfort, more entertainment, more options than any generation in history—and we're more anxious than ever. Anxiety is the mind's response to uncertainty, and modern life is filled with it.",
      "## The Purpose Solution",
      "The Gita teaches that anxiety dissolves when we're aligned with our dharma—our purpose. Arjuna's anxiety on the battlefield wasn't solved by relaxation techniques but by understanding his role in the cosmic order.",
    ],
  },
  "career-dharma": {
    title: "Finding Your Career Dharma",
    category: "Career",
    description: "How to choose a career path aligned with your nature, values, and higher purpose using Vedic wisdom.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    problem: "Career confusion plagues modern youth. With unlimited options comes unlimited anxiety. The pressure to choose the 'right' career, often imposed by family or society, leads many to paths that feel meaningless.",
    statistics: [
      { label: "Unhappy with careers", value: "70%" },
      { label: "Would change careers", value: "58%" },
      { label: "Feel unfulfilled at work", value: "65%" },
      { label: "Work-life imbalance", value: "72%" },
    ],
    rootCauses: [
      "Choosing careers based on external validation rather than inner calling",
      "Confusion between passion, skill, and duty",
      "Ignoring one's natural temperament (svabhava)",
      "Separating work from spiritual life",
      "Chasing money without considering meaning",
    ],
    gitaQuotes: [
      {
        text: "It is better to engage in one's own occupation, even though one may perform it imperfectly, than to accept another's occupation and perform it perfectly.",
        reference: "Bhagavad Gita 18.47",
      },
    ],
    protocol: [
      { title: "Week 1: Self-Discovery", description: "Take personality assessments. Reflect on childhood interests. Identify activities where you experience 'flow'." },
      { title: "Week 2: Values Clarification", description: "List your non-negotiable values. Study the concept of varna (natural inclinations) in Vedic tradition. Talk to people in fields that interest you." },
      { title: "Week 3: Integration", description: "Design a career path that aligns skill, passion, and service. Create a plan to transition or transform your current work. Begin with small experiments." },
    ],
    reflectionQuestions: [
      "If money weren't a concern, what would I spend my time doing?",
      "What problems in the world genuinely disturb me that I could help solve?",
      "How can my work become an offering rather than just a means to earn?",
    ],
    relatedVideos: [
      { title: "Career Guidance from Bhagavad Gita", videoId: "1lfBJ6eHUw0", duration: "45 min" },
    ],
    relatedStudies: ["purpose-anxiety", "stress-management-gita"],
    fullArticle: [
      "## The Career Crisis",
      "Most career guidance focuses on market trends, salary potential, and job security. These matter, but they're not enough.",
      "## The Vedic Perspective",
      "The Gita introduces the concept of svadharma—one's own duty based on nature. This isn't about caste but about recognizing your natural inclinations.",
    ],
  },
  "building-lasting-relationships": {
    title: "Building Lasting Relationships",
    category: "Relationships",
    description: "Vedic principles for creating meaningful connections in an age of superficiality and instant gratification.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    problem: "Despite being more 'connected' than ever, loneliness has reached epidemic proportions. Dating apps offer endless options but few lasting connections. We've lost the art of deep, committed relationship.",
    statistics: [
      { label: "Feel lonely regularly", value: "52%" },
      { label: "Divorces rising annually", value: "13%" },
      { label: "Struggle with commitment", value: "45%" },
      { label: "Prefer online to offline", value: "38%" },
    ],
    rootCauses: [
      "Approaching relationships with consumer mentality",
      "Unrealistic expectations from media and social comparison",
      "Focus on what we can get rather than what we can give",
      "Lack of commitment skills in instant-gratification culture",
    ],
    gitaQuotes: [
      {
        text: "The wise see with equal vision a learned priest, a cow, an elephant, a dog, and an outcast.",
        reference: "Bhagavad Gita 5.18",
      },
    ],
    protocol: [
      { title: "Week 1: Self-Examination", description: "List what you seek in relationships vs. what you offer. Identify patterns from past relationships." },
      { title: "Week 2: Giving Focus", description: "In one key relationship, focus entirely on giving for a week. Practice deep listening without planning your response." },
      { title: "Week 3: Sacred Connection", description: "Introduce shared spiritual practice. Discuss deeper values and purpose. Make specific commitments for ongoing growth." },
    ],
    reflectionQuestions: [
      "Do I approach relationships to get or to give?",
      "Am I committed to the person or to my idea of who they should be?",
      "How can we grow spiritually together?",
    ],
    relatedVideos: [
      { title: "Spiritual Foundation for Relationships", videoId: "hSaw27_Gxnw", duration: "48 min" },
    ],
    relatedStudies: ["purpose-anxiety", "digital-addiction"],
    fullArticle: [
      "## The Relationship Paradox",
      "We have more ways to meet people than ever—apps, events, social media—yet meaningful connection feels harder to find.",
      "## The Vedic Foundation",
      "Vedic wisdom approaches relationship not as a transaction but as a sacred partnership for mutual spiritual growth.",
    ],
  },
  // NEW CASE STUDIES
  "spiritual-parenting": {
    title: "Spiritual Parenting: Raising Conscious Children",
    category: "Parenting",
    description: "A comprehensive guide to nurturing spiritually aware, emotionally balanced, and purpose-driven children in the modern age.",
    image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&q=80",
    problem: "Modern parents face unprecedented challenges: screen addiction, academic pressure, peer influence, and a culture that often contradicts spiritual values. Many feel ill-equipped to raise children who are both successful in the world and grounded in spiritual principles. The gap between traditional wisdom and contemporary parenting has left many families struggling.",
    statistics: [
      { label: "Parents feel overwhelmed", value: "78%" },
      { label: "Children with anxiety", value: "31%" },
      { label: "Screen time daily (kids)", value: "5+ hrs" },
      { label: "Want spiritual values", value: "85%" },
    ],
    rootCauses: [
      "Disconnect between parents' spiritual aspirations and daily parenting practices",
      "Over-emphasis on academic achievement at the cost of character development",
      "Lack of shared family spiritual practices and rituals",
      "Parenting driven by fear (of child's future) rather than faith and love",
      "Insufficient understanding of child's unique nature (svabhava) and needs",
      "Modern lifestyle leaving no time for meaningful parent-child connection",
    ],
    gitaQuotes: [
      {
        text: "Whatever action a great man performs, common men follow. And whatever standards he sets by exemplary acts, all the world pursues.",
        reference: "Bhagavad Gita 3.21",
      },
      {
        text: "I am the father of this universe, the mother, the support and the grandsire.",
        reference: "Bhagavad Gita 9.17",
      },
      {
        text: "The soul is never born nor dies. It has no past nor future. It is unborn, ever-existing, permanent, and ancient.",
        reference: "Bhagavad Gita 2.20",
      },
    ],
    protocol: [
      { title: "Week 1: Foundation - Self-Transformation", description: "Begin with yourself. Children learn more from who you are than what you say. Establish your own morning spiritual practice. Identify three areas where your actions don't match your teachings. Start family dinner conversations about values and gratitude." },
      { title: "Week 2: Connection & Communication", description: "Implement daily one-on-one time with each child (even 15 minutes of undivided attention). Learn to listen without immediately correcting or advising. Begin age-appropriate storytelling from scriptures (Ramayana, Mahabharata, Bhagavatam). Create a weekly family activity that doesn't involve screens." },
      { title: "Week 3: Spiritual Practices Together", description: "Introduce simple mantra meditation suitable for children. Create a family altar or sacred space. Establish weekly temple visits or home program. Begin teaching the concept of offering (prasadam) and gratitude before meals." },
      { title: "Week 4: Integration & Consistency", description: "Develop a family mission statement together. Create rituals around waking, eating, and sleeping. Discuss how to handle peer pressure and conflicting values. Plan regular seva (service) activities as a family." },
    ],
    reflectionQuestions: [
      "What spiritual values am I actually modeling through my daily behavior?",
      "Am I trying to live my unfulfilled dreams through my children?",
      "How can I create more meaningful connection time with each child?",
      "What fears about my child's future are driving my parenting decisions?",
      "How can our family practice spirituality together in an engaging way?",
      "Am I respecting my child's unique nature or imposing my expectations?",
    ],
    relatedVideos: [
      { title: "Raising Spiritual Children in Modern Times", videoId: "1Ay-sSBYZj8", duration: "52 min" },
      { title: "The Bhagavad Gita on Parenting", videoId: "hSaw27_Gxnw", duration: "45 min" },
    ],
    relatedStudies: ["digital-addiction", "building-lasting-relationships", "purpose-anxiety"],
    fullArticle: [
      "## The Parenting Crisis",
      "Walk into any gathering of parents and you'll find a common thread of anxiety: Am I doing this right? Will my children be successful? Will they be happy? Will they carry forward our values? These questions haunt modern parents more than ever before.",
      "The challenge is real. We're raising children in an environment vastly different from our own childhoods. Technology, social media, changing social norms, and global exposure have created a world our traditional parenting models weren't designed for.",
      "## The Vedic Vision of Parenting",
      "The Vedic tradition offers a profound perspective: children are not our possessions but divine souls entrusted to our care. They come with their own prarabdha (karma), their own svabhava (nature), and their own journey. Our role is not to mold them into our image but to help them discover and fulfill their unique purpose.",
      "This doesn't mean passive parenting. The tradition also emphasizes the parents' responsibility to provide samskaras (spiritual impressions), guidance, and a values-based environment. The key is balance—guiding without controlling, teaching without forcing.",
      "## The Power of Example",
      "The Gita's teaching in 3.21 is perhaps the most important parenting advice: 'Whatever a great man does, common men follow.' Children are exquisitely sensitive observers. They learn less from our lectures and more from our lives. If we want spiritual children, we must become spiritual ourselves.",
      "This is both humbling and empowering. We don't need to be perfect, but we do need to be sincere. Children can sense authenticity. A parent who is genuinely striving, who admits mistakes, who is seen practicing what they preach—this inspires far more than polished sermons.",
      "## Practical Application",
      "**Morning Routine**: Begin each day with a brief family gathering. Even 5 minutes of mantra, a prayer, or reading a verse together sets a spiritual tone for the day. Make it joyful, not burdensome.",
      "**Mealtime Sacredness**: Teach children to see food as prasadam (mercy). A simple prayer before eating transforms a mundane act into a spiritual one. Discuss the day, share gratitude, make meals screen-free zones.",
      "**Storytelling**: The Vedic tradition is rich with stories that transmit values without moralizing. Children naturally absorb lessons from stories they love. Ramayana, Mahabharata, and Bhagavatam are inexhaustible sources.",
      "**Nature Connection**: Take children out of artificial environments regularly. Nature is the most natural teacher of spiritual principles—interdependence, beauty, wonder, and the presence of something greater.",
      "## Handling Challenges",
      "When children resist spiritual practices, don't force. Make it attractive, not obligatory. Focus on the joy of spirituality, not the rules. If a child rebels against temple visits, perhaps they need a different approach—music, philosophy, service.",
      "When facing conflicts with modern influences (friends, media, school), don't attack or isolate. Instead, discuss openly. Help children develop discrimination (viveka) rather than blind obedience. A child who understands why will carry values forward; one who only follows rules may abandon them later.",
      "## The Long View",
      "Spiritual parenting is a marathon, not a sprint. Some seeds planted in childhood bloom only decades later. Your consistency, your love, your example are creating impressions (samskaras) that will guide your children throughout their lives.",
      "Trust the process. Trust your children's souls. And trust the Lord who has brought these particular souls to you for mutual growth and learning.",
    ],
  },
  "addiction-recovery-spiritual": {
    title: "Addiction Recovery: A Spiritual Approach",
    category: "Habits",
    description: "Breaking free from addiction through spiritual practice, community support, and understanding the deeper needs that addiction tries to fulfill.",
    image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?w=800&q=80",
    problem: "Addiction—whether to substances, screens, pornography, gambling, or behaviors—has reached epidemic proportions. Traditional recovery approaches have limited success rates because they often address symptoms without touching the spiritual void at addiction's root. Many who overcome one addiction simply transfer to another, searching for the same thing: connection, meaning, escape from suffering.",
    statistics: [
      { label: "Suffer from addiction", value: "31M+" },
      { label: "Youth with phone addiction", value: "47%" },
      { label: "Relapse rate (traditional)", value: "40-60%" },
      { label: "Seek treatment", value: "<15%" },
    ],
    rootCauses: [
      "Spiritual emptiness—seeking transcendence through substances or behaviors",
      "Unprocessed trauma and emotional pain",
      "Disconnection from meaningful relationships and community",
      "Lack of healthy coping mechanisms for stress and suffering",
      "Over-identification with the body and senses as sources of pleasure",
      "Absence of higher purpose or meaning in life",
      "Environment and association that reinforce addictive behavior",
    ],
    gitaQuotes: [
      {
        text: "The senses are so strong and impetuous, O Arjuna, that they forcibly carry away the mind even of a man of discrimination who is endeavoring to control them.",
        reference: "Bhagavad Gita 2.60",
      },
      {
        text: "What is night for all beings is the time of awakening for the self-controlled; and the time of awakening for all beings is night for the introspective sage.",
        reference: "Bhagavad Gita 2.69",
      },
      {
        text: "The embodied soul may be restricted from sense enjoyment, though the taste for sense objects remains. But, ceasing such engagements by experiencing a higher taste, he is fixed in consciousness.",
        reference: "Bhagavad Gita 2.59",
      },
    ],
    protocol: [
      { title: "Week 1: Acknowledgment & Surrender", description: "Honestly assess your addiction without shame—it's a symptom, not your identity. Begin with simple mantra meditation (start with 5 minutes, building to 15). Remove or reduce access to triggers. Reach out to at least one supportive person. Consider professional support alongside spiritual practice." },
      { title: "Week 2: Building the Higher Taste", description: "Increase japa to 20+ minutes daily. Begin reading Bhagavad Gita Chapter 2 on the nature of the self. Engage in at least one act of service daily—this redirects energy outward. Start journaling about triggers, cravings, and insights. Join or connect with a spiritual community." },
      { title: "Week 3: Deepening Practice", description: "Attend satsang (spiritual gathering) at least twice. Learn about the saints who overcame attachments. Practice immediate 'pause and pray' when cravings arise. Identify the deeper need your addiction was trying to meet. Develop alternative ways to meet that need." },
      { title: "Week 4 & Beyond: Long-term Recovery", description: "Establish daily spiritual schedule that becomes non-negotiable. Build strong satsang (community) relationships. Begin helping others who struggle with similar issues. Regular check-ins with a mentor or counselor. Continue deepening scriptural understanding and practice." },
    ],
    reflectionQuestions: [
      "What am I really seeking through this addiction? What need am I trying to meet?",
      "When did this pattern begin, and what was I going through at that time?",
      "Who am I without this addiction? What is my true identity?",
      "What would I do with the time, energy, and money currently consumed by this addiction?",
      "Who can I reach out to for honest support without fear of judgment?",
      "What spiritual experiences have given me genuine, lasting happiness?",
    ],
    relatedVideos: [
      { title: "Breaking the Chains: Spiritual Freedom from Addiction", videoId: "1Ay-sSBYZj8", duration: "58 min" },
      { title: "The Higher Taste: Bhagavad Gita on Sense Control", videoId: "1lfBJ6eHUw0", duration: "42 min" },
    ],
    relatedStudies: ["digital-addiction", "silent-epidemic-suicide-india", "purpose-anxiety"],
    fullArticle: [
      "## Understanding Addiction Spiritually",
      "Every addiction is a misguided search for the infinite. The alcoholic seeks the boundless joy that comes only from spiritual connection. The drug user seeks the transcendence that comes through genuine meditation. The pornography addict seeks the intimate connection that comes through loving relationships grounded in the soul.",
      "This is not to minimize addiction or suggest it's simply a spiritual problem—there are biological, psychological, and social dimensions that often require professional treatment. But beneath all these layers lies a spiritual truth: the soul is seeking its home, and addiction is a tragic detour.",
      "## The Gita's Diagnosis",
      "The Bhagavad Gita offers extraordinary insight into addiction through its analysis of the senses and mind. Krishna explains that the senses are powerful—powerful enough to drag even wise persons away from their purpose (2.60). This acknowledges the reality every addict knows: willpower alone often isn't enough.",
      "But the Gita doesn't stop there. It offers a solution in 2.59: 'param dristva nivartate'—by experiencing a higher taste, one naturally turns away from lower pleasures. This is revolutionary. The goal isn't just to resist the addiction through gritted teeth but to discover something so much better that the addiction loses its appeal.",
      "## The Higher Taste",
      "What is this higher taste? It's the natural joy of the soul reconnecting with its source. When we experience genuine spiritual happiness—through deep meditation, through kirtan (devotional singing), through service, through loving relationships grounded in the Divine—the cheap substitutes of addiction pale in comparison.",
      "This doesn't happen overnight. Building the higher taste takes practice, patience, and often community support. But countless people have found that spiritual practice provides what their addiction never could: lasting fulfillment without the devastating consequences.",
      "## The Role of Community",
      "Recovery in isolation is nearly impossible. The Vedic tradition emphasizes satsang—association with those on the spiritual path. When you're surrounded by people living for higher principles, their strength becomes your strength. When you fall, they help you up without judgment. When you succeed, they celebrate without envy.",
      "Find a spiritual community. Attend temple programs. Join recovery groups that incorporate spirituality. Be honest about your struggles. You'll find you're not alone—many who now inspire others once struggled as you do.",
      "## Practical Steps",
      "**Morning Anchor**: Begin each day with spiritual practice before anything else. This sets your consciousness for the day and builds the mental strength you'll need when cravings arise.",
      "**Pause Practice**: When cravings hit, pause. Chant a mantra. Pray. Call someone. The craving will pass—they always do. You just need to survive the wave.",
      "**Replacement, Not Just Removal**: Don't just remove the addiction—replace it. What will you do with that time and energy? Fill the void with positive practices before the addiction tries to fill it again.",
      "**Celebrate Progress**: Recovery isn't linear. If you relapse, don't use it as an excuse to give up. Analyze what happened, learn, and continue. Every day clean is a victory.",
      "## A Message of Hope",
      "If you're struggling with addiction, know this: recovery is possible. Not just white-knuckling it through life but genuine freedom, where the addiction no longer holds power over you. The path isn't easy, but it's infinitely worthwhile.",
      "You are not your addiction. You are an eternal soul, temporarily caught in a pattern that no longer serves you. With spiritual practice, community support, and grace, you can and will break free.",
    ],
  },
  "developing-faith": {
    title: "Developing Unshakeable Faith",
    category: "Faith",
    description: "A practical guide to cultivating and deepening faith in God, even when facing doubts, difficulties, and the challenges of modern skepticism.",
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80",
    problem: "In an age of scientific materialism and religious skepticism, many struggle to develop genuine faith. Some have had negative experiences with religion that make them wary. Others intellectually believe but don't feel the connection. Many who were raised religious find their faith shaken by life's difficulties or exposure to alternative worldviews.",
    statistics: [
      { label: "Question childhood beliefs", value: "67%" },
      { label: "Seek spiritual experiences", value: "89%" },
      { label: "Feel spiritually disconnected", value: "54%" },
      { label: "Want practical spirituality", value: "76%" },
    ],
    rootCauses: [
      "Intellectual doubts unaddressed by superficial religious teaching",
      "Negative experiences with religious institutions or practitioners",
      "Materialistic education that dismisses spiritual realities",
      "Lack of personal spiritual experience (faith based only on hearsay)",
      "Witnessing suffering that seems to contradict a loving God",
      "Association that doesn't support or actively undermines faith",
    ],
    gitaQuotes: [
      {
        text: "A man is made by his belief. As he believes, so he becomes.",
        reference: "Bhagavad Gita 17.3",
      },
      {
        text: "To those who are constantly devoted and who worship Me with love, I give the understanding by which they can come to Me.",
        reference: "Bhagavad Gita 10.10",
      },
      {
        text: "One who has no faith in this knowledge and does not practice it remains in the cycle of birth and death.",
        reference: "Bhagavad Gita 4.40",
      },
      {
        text: "The faith of each is in accordance with one's own nature. This world is made of faith. As a person's faith is, so are they.",
        reference: "Bhagavad Gita 17.3",
      },
    ],
    protocol: [
      { title: "Week 1: Honest Assessment", description: "Write down all your doubts and questions about spirituality honestly. Identify where your current faith comes from (upbringing, experience, intellectual conviction). Begin simple mantra meditation (15 minutes daily) as an experiment, not obligation. Read Bhagavad Gita Chapter 2 with an open mind." },
      { title: "Week 2: Intellectual Engagement", description: "Study philosophical responses to your specific doubts. Read biographies of those who found faith after skepticism. Discuss with someone who has both intellectual depth and genuine faith. Continue meditation and begin observing any changes in your consciousness." },
      { title: "Week 3: Experiential Exploration", description: "Attend a kirtan (devotional music) and allow yourself to participate without judgment. Practice gratitude daily—notice the blessings you normally take for granted. Try prayer—honestly speak to God even if you're unsure He's listening. Increase meditation to 20+ minutes." },
      { title: "Week 4: Deepening & Community", description: "Connect with a spiritual community regularly. Find a mentor whose faith you respect and can learn from. Begin small acts of service and devotion (offering food, temple visit). Reflect on any experiences or changes you've noticed over the month." },
    ],
    reflectionQuestions: [
      "What specifically do I doubt, and what would I need to believe?",
      "Have I genuinely practiced spiritual disciplines, or judged without trying?",
      "What experiences in my life have hinted at something beyond the material?",
      "If God does exist, what kind of relationship would I want with Him/Her?",
      "What is my life's purpose if there is no spiritual dimension? If there is?",
      "Who do I know whose faith I respect, and what can I learn from them?",
    ],
    relatedVideos: [
      { title: "Reason and Faith: Are They Compatible?", videoId: "hSaw27_Gxnw", duration: "55 min" },
      { title: "How to Develop Faith in Difficult Times", videoId: "1Ay-sSBYZj8", duration: "48 min" },
    ],
    relatedStudies: ["purpose-anxiety", "silent-epidemic-suicide-india", "stress-management-gita"],
    fullArticle: [
      "## The Faith Crisis",
      "We live in paradoxical times. Never before has humanity had such material prosperity, yet never before has existential emptiness been so widespread. The scientific worldview, for all its benefits, has left many feeling like accidents in an indifferent universe—conscious beings aware of their own mortality, with no larger story to give meaning to their brief existence.",
      "Many hunger for faith but don't know how to find it. Some carry childhood beliefs that never matured into adult understanding. Others rejected religion after negative experiences. Still others intellectually accept spiritual ideas but don't feel them in their hearts.",
      "## What is Faith, Really?",
      "The Bhagavad Gita offers a nuanced understanding of faith (shraddha). It's not blind belief or rejection of reason. In 17.3, Krishna says that faith corresponds to one's nature—everyone has faith in something. The atheist has faith that material science will eventually explain everything. The hedonist has faith that pleasure will bring satisfaction. Everyone lives by faith; the question is: faith in what?",
      "Spiritual faith is not about believing impossible things. It's about recognizing that consciousness, meaning, love, and beauty point to something beyond atoms and void. It's about trusting that our deepest intuitions about life's significance are not delusions but glimpses of truth.",
      "## Faith and Reason",
      "True faith and reason are not enemies but partners. The Vedic tradition is robustly philosophical—it invites questions, debate, and inquiry. Many of history's greatest philosophers and scientists have been people of deep faith.",
      "If you have intellectual doubts, don't suppress them—explore them. Read, study, discuss with intelligent believers. Many doubts arise from misunderstandings or incomplete knowledge. Others point to genuine mysteries that require humility on all sides.",
      "## Faith and Experience",
      "Knowledge alone doesn't create faith—experience does. The Gita promises in 10.10 that to those who sincerely practice, the Lord gives the understanding by which they can come to Him. Faith grows through practice.",
      "This is why the protocol emphasizes action, not just study. Chant the mantra and observe what happens in your consciousness. Attend kirtan and allow yourself to feel. Pray honestly and notice if anyone seems to be listening. Practice gratitude and watch how it changes your perception.",
      "## Dealing with Doubt",
      "Doubt is not the enemy of faith—it's often the path to deeper faith. Superficial, untested faith crumbles under pressure. Faith that has faced questions, struggled with suffering, and emerged is unshakeable.",
      "When doubts arise, don't panic. Examine them honestly. Some doubts will dissolve when you get more information. Others will remain as mysteries—and that's okay. Even the greatest saints acknowledge that God is ultimately beyond full comprehension. Faith isn't about having all the answers; it's about trusting the One who does.",
      "## The Role of Community",
      "Faith is difficult to develop alone. Surround yourself with people whose faith inspires you. Their conviction, their experiences, their joy become contagious. Conversely, constant association with cynics and materialists will erode whatever faith you're trying to build.",
      "## Taking the First Step",
      "If faith feels impossible, start small. You don't need to believe everything at once. Begin with what you can accept: perhaps that consciousness is miraculous, that love is real, that life has meaning. Build from there.",
      "And if you can't believe, try to want to believe. Even that desire is a form of prayer. The journey of faith often begins not with certainty but with honest yearning—and that yearning itself is heard.",
    ],
  },
  "grief-and-loss": {
    title: "Navigating Grief and Loss",
    category: "Mind",
    description: "Finding peace and meaning when facing the death of loved ones, broken relationships, or life's devastating losses through the lens of Vedic wisdom.",
    image: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?w=800&q=80",
    problem: "Grief is universal—everyone will experience profound loss. Yet modern society offers little support for grieving and even less wisdom about death and its meaning. Many carry unprocessed grief for years, affecting their relationships, work, and mental health. The fear of death shadows many lives, often unconsciously.",
    statistics: [
      { label: "Experience major loss", value: "100%" },
      { label: "Suffer complicated grief", value: "15%" },
      { label: "Fear of death impacts life", value: "68%" },
      { label: "Seek grief counseling", value: "<10%" },
    ],
    rootCauses: [
      "Materialistic worldview that sees death as complete annihilation",
      "Lack of preparation for the inevitability of loss",
      "Attachment without understanding the temporary nature of relationships",
      "Cultural avoidance of death and dying",
      "Unresolved issues with the deceased",
      "Absence of supportive community during grief",
    ],
    gitaQuotes: [
      {
        text: "For the soul there is neither birth nor death at any time. He is not slain when the body is slain.",
        reference: "Bhagavad Gita 2.20",
      },
      {
        text: "As a person puts on new garments, giving up old ones, the soul similarly accepts new material bodies, giving up the old and useless ones.",
        reference: "Bhagavad Gita 2.22",
      },
      {
        text: "One who has been born is sure to die, and after death one is sure to be born again. Therefore, in the unavoidable discharge of your duty, you should not lament.",
        reference: "Bhagavad Gita 2.27",
      },
    ],
    protocol: [
      { title: "Week 1: Acknowledging Grief", description: "Allow yourself to grieve fully—don't suppress or rush. Write about your loss and what/who you miss. Begin gentle mantra meditation (even 5-10 minutes helps). Reach out to at least one supportive person who can simply listen." },
      { title: "Week 2: Understanding Death", description: "Study Bhagavad Gita Chapter 2 on the nature of the soul. Reflect on what you believe happens after death. Write a letter to the deceased expressing everything unsaid. Practice gratitude for what the relationship gave you." },
      { title: "Week 3: Finding Meaning", description: "Identify lessons or gifts from this loss. Consider how you can honor the deceased through your life. Engage in service or charity in their memory. Deepen spiritual practice as a way of connection beyond death." },
      { title: "Week 4: Moving Forward with Love", description: "Create rituals for ongoing remembrance. Share stories and memories with others. Focus on how this loss has shaped who you're becoming. Reconnect with life while keeping love for the deceased alive." },
    ],
    reflectionQuestions: [
      "What do I believe happens after death, and how does this belief help or hinder my grief?",
      "What is left unsaid that I wish I had expressed?",
      "How has this loss changed me, and who am I becoming because of it?",
      "What would the person I've lost want for my life going forward?",
      "How can I honor their memory through how I live?",
      "What has this loss taught me about love, life, and what truly matters?",
    ],
    relatedVideos: [
      { title: "Death and Beyond: The Bhagavad Gita's Teaching", videoId: "1lfBJ6eHUw0", duration: "50 min" },
      { title: "Finding Peace in Loss", videoId: "1Ay-sSBYZj8", duration: "42 min" },
    ],
    relatedStudies: ["silent-epidemic-suicide-india", "purpose-anxiety", "developing-faith"],
    fullArticle: [
      "## The Inevitable Truth",
      "Everyone you love will die. You will die. This isn't pessimism—it's reality. And how we understand this reality shapes how we live and how we grieve.",
      "The modern world tries to hide death, sanitize it, deny it. Hospitals sequester the dying. Funeral homes process the dead. We live as if death happens to others, until suddenly it arrives in our own life.",
      "## The Gita's Revolutionary Teaching",
      "The Bhagavad Gita begins, essentially, with a grief crisis. Arjuna is overwhelmed by the impending death he'll cause and witness. He collapses, unable to function. Krishna's response is extraordinary: He begins not with psychology but with metaphysics—with the nature of the soul.",
      "'For the soul there is neither birth nor death.' (2.20) This is not a comforting platitude but a statement about reality. If we are eternal souls, then death is not annihilation but transition. The body falls away like old clothes, and the soul continues its journey.",
      "## Does This Mean We Shouldn't Grieve?",
      "Absolutely not. The Gita acknowledges the reality of loss. Krishna doesn't tell Arjuna not to feel—He helps him understand the context of his feelings. Grief is natural and necessary. Suppressing it causes harm. But grief informed by spiritual understanding is different from grief in a meaningless void.",
      "## Practical Wisdom for Grief",
      "**Allow the Feelings**: Grief comes in waves—sometimes crushing, sometimes gentle. Don't fight the waves. Let yourself cry, rage, collapse when needed. This is not weakness; it's honesty.",
      "**Talk and Write**: Express what you're feeling. Journal. Talk to friends. Speak to the deceased—they may not hear in the ordinary sense, but the expression itself heals.",
      "**Find Community**: Grief in isolation is unbearable. Seek out those who can simply be present with you. Grief support groups, spiritual communities, and compassionate friends are invaluable.",
      "**Rituals and Remembrance**: Create meaningful rituals to honor the deceased. Light a candle, visit their photo, observe their birthday or death anniversary with intention. These rituals give form to love that continues.",
      "## The Gift of Mortality",
      "The awareness of death, when properly understood, is a gift. It clarifies what matters. It softens petty grievances. It motivates us to love now, to express now, to live now.",
      "Those we've lost teach us this gift. The pain of their absence reminds us: time is precious, love is eternal, and the connection we share transcends the body.",
      "## Continuing Bonds",
      "Love doesn't end with death. The relationship changes form but doesn't end. Many find that over time, they can feel connected to the deceased in new ways—through memory, through values they share, through a spiritual connection that death cannot sever.",
      "The goal of grief is not to 'get over' the loss but to integrate it—to carry the love forward while making room for life to continue.",
    ],
  },
};

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const study = slug ? caseStudyData[slug] : null;

  const handleDownloadPDF = () => {
    if (study) {
      generateCaseStudyPDF(study);
      toast.success("PDF downloaded successfully!");
    }
  };

  const handleDownloadWorksheet = () => {
    if (study) {
      generateWorksheetPDF(study);
      toast.success("Worksheet downloaded successfully!");
    }
  };

  if (!study) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-muted-foreground mb-8">This case study is coming soon or doesn't exist.</p>
          <Link to="/case-studies">
            <Button>Back to Case Studies</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <Link 
          to="/case-studies"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>

        {/* Header */}
        <div className="mb-12 space-y-6">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            {study.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {study.title}
          </h1>
          <p className="text-lg text-muted-foreground">{study.description}</p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video rounded-3xl overflow-hidden mb-12">
          <img 
            src={study.image} 
            alt={study.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Crisis Helpline Banner - for mental health related studies */}
        {(slug === "silent-epidemic-suicide-india" || slug === "purpose-anxiety" || slug === "addiction-recovery-spiritual") && (
          <div className="mb-12 rounded-2xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">If you're in crisis</h3>
                <p className="text-muted-foreground mb-3">
                  If you or someone you know is struggling, please reach out immediately:
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:18602662345" className="flex items-center gap-2 text-primary font-medium">
                    <Phone className="w-4 h-4" />
                    Vandrevala Foundation: 1860-2662-345
                  </a>
                  <a href="tel:9152987821" className="flex items-center gap-2 text-primary font-medium">
                    <Heart className="w-4 h-4" />
                    iCall: 9152987821
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Statistics */}
        {study.statistics && (
          <section className="mb-12 rounded-2xl bg-gradient-to-br from-saffron-light/20 to-gold-light/30 p-8">
            <h2 className="text-xl font-bold mb-6">The Reality in Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {study.statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Problem Statement */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{study.problem}</p>
        </section>

        {/* Root Causes */}
        <section className="mb-12 rounded-2xl bg-card p-8">
          <h2 className="text-2xl font-bold mb-6">Root Causes</h2>
          <ul className="space-y-4">
            {study.rootCauses.map((cause, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-sm font-medium text-primary">
                  {index + 1}
                </span>
                <span className="text-muted-foreground">{cause}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Gita Wisdom */}
        <section className="mb-12 space-y-6">
          <div className="flex items-start gap-4 mb-4">
            <BookOpen className="w-8 h-8 text-primary flex-shrink-0" />
            <h2 className="text-2xl font-bold">Wisdom from the Gita</h2>
          </div>
          {study.gitaQuotes.map((quote, index) => (
            <div key={index} className="rounded-2xl bg-gradient-to-br from-saffron-light/20 to-gold-light/30 p-8 md:p-10">
              <blockquote className="text-xl md:text-2xl font-serif italic text-foreground leading-relaxed mb-4">
                "{quote.text}"
              </blockquote>
              <p className="text-primary font-medium">— {quote.reference}</p>
            </div>
          ))}
        </section>

        {/* Full Article */}
        {study.fullArticle && (
          <section className="mb-12 prose prose-lg dark:prose-invert max-w-none">
            {study.fullArticle.map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace("## ", "")}</h2>;
              }
              if (paragraph.startsWith("**")) {
                return <p key={index} className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
              }
              return <p key={index} className="text-muted-foreground leading-relaxed">{paragraph}</p>;
            })}
          </section>
        )}

        {/* Practical Protocol */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Transformation Protocol</h2>
          <div className="space-y-4">
            {study.protocol.map((step, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reflection Questions */}
        <section className="mb-12 rounded-2xl bg-muted/50 p-8">
          <div className="flex items-start gap-4 mb-6">
            <MessageCircle className="w-6 h-6 text-primary flex-shrink-0" />
            <h2 className="text-2xl font-bold">Reflection Questions</h2>
          </div>
          <ol className="space-y-4 list-decimal list-inside">
            {study.reflectionQuestions.map((question, index) => (
              <li key={index} className="text-muted-foreground">{question}</li>
            ))}
          </ol>
        </section>

        {/* Download CTAs */}
        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-card p-8 text-center border border-border">
            <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Download Protocol PDF</h3>
            <p className="text-muted-foreground mb-6 text-sm">Complete guide with all protocols and Gita wisdom.</p>
            <Button 
              onClick={handleDownloadPDF}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
          <div className="rounded-2xl bg-card p-8 text-center border border-border">
            <ClipboardList className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Download Worksheet</h3>
            <p className="text-muted-foreground mb-6 text-sm">21-day tracker with reflection journal pages.</p>
            <Button 
              onClick={handleDownloadWorksheet}
              variant="outline"
              className="rounded-full px-8"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Worksheet
            </Button>
          </div>
        </section>

        {/* Related Videos - Real YouTube Embeds */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Talks</h2>
          <div className="grid gap-6">
            {study.relatedVideos.map((video, index) => (
              <div key={index} className="rounded-2xl overflow-hidden bg-card">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">{video.title}</h4>
                  <p className="text-sm text-muted-foreground">{video.duration} • YouTube</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related Case Studies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Case Studies</h2>
          <div className="flex flex-wrap gap-3">
            {study.relatedStudies.map((relatedSlug) => (
              <Link 
                key={relatedSlug}
                to={`/case-studies/${relatedSlug}`}
                className="px-4 py-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
              >
                {relatedSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;