import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Download, Play, BookOpen, MessageCircle, AlertTriangle, Heart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      {
        text: "One who sees inaction in action, and action in inaction, is intelligent among men.",
        reference: "Bhagavad Gita 4.18",
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
      "Today's youth face the same crisis. We identify ourselves completely with grades, job titles, relationship status, social media followers. When these temporary markers of success fail us—and they inevitably will—we have nothing to fall back on. Our entire identity crumbles.",
      "## The Spiritual Diagnosis",
      "The Gita offers a profound understanding: we are not our minds, not our bodies, not our circumstances. We are eternal souls (atma) temporarily inhabiting these forms. This isn't escapism—it's the most practical realization possible. When you know you're not your failures, you can face them. When you know you're not your achievements, you won't be crushed when they fade.",
      "Krishna tells Arjuna: 'For the soul there is neither birth nor death. He is not slain when the body is slain.' (BG 2.20). This eternal perspective doesn't make life's problems disappear, but it provides a foundation from which to face them.",
      "## Practical Application: The 21-Day Protocol",
      "Understanding philosophy is not enough—we need practice. The protocol outlined above isn't a cure for clinical depression (please seek professional help if needed), but it's a framework for building mental and spiritual resilience. The key elements are:",
      "**1. Routine and Discipline (Sadhana)**: The mind craves structure. Irregular sleep, erratic eating, and screen addiction destabilize the mind further. By establishing simple daily practices, we create a container of stability.",
      "**2. Mantra Meditation**: The mind needs something to hold onto. Left to itself, it will spiral into negativity. The maha-mantra—Hare Krishna Hare Krishna, Krishna Krishna Hare Hare, Hare Rama Hare Rama, Rama Rama Hare Hare—has been practiced for millennia as a way to cleanse the mind and connect with the Supreme.",
      "**3. Scriptural Study**: Reading the Gita with an open heart provides answers to life's deepest questions. It's not about blind faith but about receiving wisdom from those who have walked the path.",
      "**4. Community (Satsang)**: Isolation kills. We need people who understand our struggles and won't judge us. Spiritual communities provide this support.",
      "**5. Service (Seva)**: Paradoxically, the way out of our suffering often comes through focusing on others' needs. Service shifts our attention from our problems to our contribution.",
      "## A Message of Hope",
      "If you're reading this and struggling, please know: your life has meaning. Your struggles are not permanent. The darkness you feel is not the final reality. Reach out—to a counselor, a mentor, a friend, or a spiritual guide. ISKCON centers across India offer free counseling and community support.",
      "The Bhagavad Gita's ultimate message is hope: there is a way out, not through escaping life but through understanding it deeply. Krishna doesn't abandon Arjuna in his darkest hour, and you are not abandoned either.",
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
      "Krishna's instruction 'karmanye vadhikaraste ma phaleshu kadachana' (BG 2.47) is perhaps the most practical stress management advice ever given. Your right is to work, not to control results. This simple shift transforms our relationship with stress entirely.",
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
      "The solution isn't rejection of technology but mastery of the mind that uses it. Through practices like japa, we train the mind to find satisfaction within rather than in endless external stimulation.",
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
        text: "Whenever and wherever there is a decline in religious practice and a predominant rise of irreligion—at that time I descend Myself.",
        reference: "Bhagavad Gita 4.7",
      },
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
      "When we know why we're here, the 'how' becomes manageable. Purpose doesn't eliminate challenges—it gives us the strength to face them.",
    ],
  },
  "career-dharma": {
    title: "Finding Your Career Dharma",
    category: "Career",
    description: "How to choose a career path aligned with your nature, values, and higher purpose using Vedic wisdom.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    problem: "Career confusion plagues modern youth. With unlimited options comes unlimited anxiety. The pressure to choose the 'right' career, often imposed by family or society, leads many to paths that feel meaningless. The result: burnout, quiet desperation, or constant job-hopping.",
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
      {
        text: "By following his qualities of work, every man can become perfect.",
        reference: "Bhagavad Gita 18.45",
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
      "Most career guidance focuses on market trends, salary potential, and job security. These matter, but they're not enough. People with 'successful' careers often feel empty; those in humble roles sometimes radiate fulfillment.",
      "## The Vedic Perspective",
      "The Gita introduces the concept of svadharma—one's own duty based on nature. This isn't about caste but about recognizing your natural inclinations. Some are natural teachers, others builders, others nurturers, others warriors for justice.",
      "The key insight: work becomes worship when aligned with nature and offered in service. Your career isn't separate from your spiritual life—it IS your spiritual life, if approached correctly.",
    ],
  },
  "building-lasting-relationships": {
    title: "Building Lasting Relationships",
    category: "Relationships",
    description: "Vedic principles for creating meaningful connections in an age of superficiality and instant gratification.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    problem: "Despite being more 'connected' than ever, loneliness has reached epidemic proportions. Dating apps offer endless options but few lasting connections. Marriages struggle as expectations clash with reality. We've lost the art of deep, committed relationship.",
    statistics: [
      { label: "Feel lonely regularly", value: "52%" },
      { label: "Divorces rising annually", value: "13%" },
      { label: "Struggle with commitment", value: "45%" },
      { label: "Prefer online to offline", value: "38%" },
    ],
    rootCauses: [
      "Approaching relationships with consumer mentality—always looking for an 'upgrade'",
      "Unrealistic expectations from media and social comparison",
      "Focus on what we can get rather than what we can give",
      "Lack of commitment skills in instant-gratification culture",
      "Not understanding the deeper purpose of relationship",
    ],
    gitaQuotes: [
      {
        text: "The wise see with equal vision a learned priest, a cow, an elephant, a dog, and an outcast.",
        reference: "Bhagavad Gita 5.18",
      },
    ],
    protocol: [
      { title: "Week 1: Self-Examination", description: "List what you seek in relationships vs. what you offer. Identify patterns from past relationships. Practice seeing others as souls, not just roles." },
      { title: "Week 2: Giving Focus", description: "In one key relationship, focus entirely on giving for a week. Practice deep listening without planning your response. Express appreciation daily." },
      { title: "Week 3: Sacred Connection", description: "Introduce shared spiritual practice (reading together, praying together). Discuss deeper values and purpose. Make specific commitments for ongoing growth." },
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
      "We have more ways to meet people than ever—apps, events, social media—yet meaningful connection feels harder to find. The paradox of choice leaves us always wondering if there's someone 'better.'",
      "## The Vedic Foundation",
      "Vedic wisdom approaches relationship not as a transaction but as a sacred partnership for mutual spiritual growth. The purpose isn't just happiness (though that's a byproduct) but elevation—helping each other move closer to the Divine.",
      "When we see our partner as a soul on a journey, not just a person meeting our needs, everything shifts. Conflicts become opportunities for growth. Differences become complementary rather than problematic.",
    ],
  },
};

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const study = slug ? caseStudyData[slug] : null;

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
        {(slug === "silent-epidemic-suicide-india" || slug === "purpose-anxiety") && (
          <div className="mb-12 rounded-2xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">If you're in crisis</h3>
                <p className="text-muted-foreground mb-3">
                  If you or someone you know is struggling with suicidal thoughts, please reach out immediately:
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:9820466726" className="flex items-center gap-2 text-primary font-medium">
                    <Phone className="w-4 h-4" />
                    Vandrevala Foundation: 1860-2662-345
                  </a>
                  <a href="tel:9820466726" className="flex items-center gap-2 text-primary font-medium">
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

        {/* Download CTA */}
        <section className="mb-12 rounded-2xl bg-card p-8 text-center">
          <Download className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Download the Complete Guide</h3>
          <p className="text-muted-foreground mb-6">Get the PDF with full protocols, worksheets, and infographic.</p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
            Download PDF
          </Button>
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