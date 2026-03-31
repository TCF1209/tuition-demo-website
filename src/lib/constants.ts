export const WHATSAPP_NUMBER = "60174896983";

export const CENTRE = {
  nameEN: "MH Learning Centre",
  nameCN: "满汉全习",
  taglineEN: "Where Results Begin",
  taglineCN: "成绩提升，从这里开始",
};

export const NAV_LINKS = [
  { href: "/", labelCN: "首页", labelEN: "Home" },
  { href: "/courses", labelCN: "课程", labelEN: "Courses" },
  { href: "/timetable", labelCN: "时间表", labelEN: "Timetable" },
  { href: "/teachers", labelCN: "师资", labelEN: "Teachers" },
  { href: "/enrol", labelCN: "报名", labelEN: "Enrol" },
  { href: "/contact", labelCN: "联系我们", labelEN: "Contact" },
];

export interface Subject {
  icon: string;
  nameCN: string;
  nameEN: string;
  level: "lower" | "upper" | "both";
  description: string;
}

export const SUBJECTS: Subject[] = [
  { icon: "📐", nameCN: "数学", nameEN: "Mathematics", level: "both", description: "从基础运算到高阶微积分 · From fundamentals to advanced calculus" },
  { icon: "📖", nameCN: "华文", nameEN: "Chinese", level: "both", description: "阅读理解与写作技巧 · Reading comprehension & writing skills" },
  { icon: "🔤", nameCN: "英文", nameEN: "English", level: "both", description: "语法、写作与口语表达 · Grammar, writing & oral skills" },
  { icon: "🇲🇾", nameCN: "马来文", nameEN: "Bahasa Melayu", level: "both", description: "Tatabahasa, penulisan & pemahaman" },
  { icon: "📜", nameCN: "历史", nameEN: "History", level: "both", description: "系统化记忆与论述技巧 · Structured memorisation & essay techniques" },
  { icon: "⚡", nameCN: "物理", nameEN: "Physics", level: "upper", description: "概念理解与解题策略 · Conceptual understanding & problem-solving" },
  { icon: "🧪", nameCN: "化学", nameEN: "Chemistry", level: "upper", description: "有机与无机化学全面掌握 · Organic & inorganic chemistry mastery" },
  { icon: "🌿", nameCN: "生物", nameEN: "Biology", level: "upper", description: "生命科学与实验思维 · Life sciences & experimental thinking" },
  { icon: "📊", nameCN: "簿记与会计", nameEN: "Bookkeeping & Accounts", level: "upper", description: "簿记原理与财务报表 · Bookkeeping principles & financial statements" },
  { icon: "🌍", nameCN: "地理", nameEN: "Geography", level: "upper", description: "自然与人文地理全面掌握 · Physical & human geography mastery" },
  { icon: "🔬", nameCN: "科学", nameEN: "Science", level: "lower", description: "初中综合科学基础 · Integrated science fundamentals" },
];

export interface Teacher {
  nameCN: string;
  nameEN: string;
  subjectsCN: string[];
  subjectsEN: string[];
  qualificationCN: string;
  qualificationEN: string;
  experienceCN: string;
  experienceEN: string;
  bioCN: string;
  bioEN: string;
  initial: string;
  image?: string;
}

export const TEACHERS: Teacher[] = [
  {
    nameCN: "Alan老师",
    nameEN: "Teacher Alan",
    subjectsCN: ["高中化学", "初中科学"],
    subjectsEN: ["Chemistry", "Science"],
    qualificationCN: "国立台湾清华大学",
    qualificationEN: "National Tsing Hua University, Taiwan",
    experienceCN: "15年教学经验，荣获全国初中高中化学十大指导老师（2015及2017年）",
    experienceEN: "15 years of experience. Awarded Top 10 National Chemistry Teacher (2015 & 2017)",
    bioCN: "Alan老师以清晰的逻辑与生动的实验思维教授化学，让学生真正理解反应原理而非死记方程式。全国十大化学指导老师的荣誉证明了他的教学实力。",
    bioEN: "Teacher Alan brings crystal-clear logic and vivid experimental thinking to Chemistry. His national Top 10 Chemistry Teacher awards speak to his proven track record of student success.",
    initial: "A",
    image: "/images/alan.png",
  },
  {
    nameCN: "Hector老师",
    nameEN: "Teacher Hector",
    subjectsCN: ["高中理科高数"],
    subjectsEN: ["Advanced Mathematics (Science)"],
    qualificationCN: "马来亚大学 (UM)",
    qualificationEN: "University of Malaya (UM)",
    experienceCN: "12年教学经验，荣获全国初中高数十大指导老师（2018年）",
    experienceEN: "12 years of experience. Awarded Top 10 National Advanced Maths Teacher (2018)",
    bioCN: "Hector老师擅长将复杂的高数概念拆解为易懂的步骤，帮助理科生建立扎实的数学基础。全国十大高数指导老师，教学经验丰富。",
    bioEN: "Teacher Hector excels at breaking down complex advanced maths into manageable steps, building a rock-solid foundation for science stream students. A nationally recognised Top 10 teacher.",
    initial: "H",
    image: "/images/hector.png",
  },
  {
    nameCN: "Austen老师",
    nameEN: "Teacher Austen",
    subjectsCN: ["高中文商数学"],
    subjectsEN: ["Mathematics (Arts/Commerce)"],
    qualificationCN: "国立台湾清华大学硕士",
    qualificationEN: "Master's Degree, National Tsing Hua University, Taiwan",
    experienceCN: "7年教学经验",
    experienceEN: "7 years of experience",
    bioCN: "Austen老师以系统化的教学方法帮助文商科学生克服数学恐惧，清华硕士学历让他在教学上兼具深度与广度。",
    bioEN: "Teacher Austen uses a structured, step-by-step approach to help arts and commerce students overcome maths anxiety. His master's from Tsing Hua brings both depth and clarity to the classroom.",
    initial: "A",
    image: "/images/austen.png",
  },
  {
    nameCN: "杨庆欣老师",
    nameEN: "Teacher Yang",
    subjectsCN: ["高中物理"],
    subjectsEN: ["Physics"],
    qualificationCN: "Swinburne University of Technology",
    qualificationEN: "Swinburne University of Technology",
    experienceCN: "5年教学经验，曾任职于民都鲁开智中学",
    experienceEN: "5 years of experience, formerly at Kai Chee Middle School, Bintulu",
    bioCN: "杨老师善于以生活中的现象讲解物理原理，让抽象的力学与电学变得有趣易懂。曾在独中任教，深谙统考考点。",
    bioEN: "Teacher Yang brings physics to life through everyday phenomena, making abstract mechanics and electricity intuitive. With independent school teaching experience, she knows the UEC exam inside out.",
    initial: "杨",
    image: "/images/杨庆欣.png",
  },
  {
    nameCN: "李恩慧老师",
    nameEN: "Teacher Lee",
    subjectsCN: ["高中生物"],
    subjectsEN: ["Biology"],
    qualificationCN: "上海交通大学药学院医学硕士",
    qualificationEN: "Master of Medicine (Pharmacy), Shanghai Jiao Tong University",
    experienceCN: "5.5年教学经验，曾任职于 NEEC 国际教育机构，生物/化学组担教师",
    experienceEN: "5.5 years of experience, formerly at NEEC International, Biology & Chemistry teacher",
    bioCN: "李老师拥有上海交大医学硕士的专业背景，以学术深度和清晰讲解帮助学生扎实掌握生物知识，从细胞到生态系统全面覆盖。",
    bioEN: "Teacher Lee's medical master's from Shanghai Jiao Tong brings genuine scientific depth to Biology. Her clear explanations cover everything from cell biology to ecosystems with precision.",
    initial: "李",
    image: "/images/李恩慧.png",
  },
  {
    nameCN: "Isaac老师",
    nameEN: "Teacher Isaac",
    subjectsCN: ["初三数学", "高中簿记与会计"],
    subjectsEN: ["Mathematics", "Bookkeeping & Accounts"],
    qualificationCN: "Help University",
    qualificationEN: "Help University",
    experienceCN: "6年教学经验，曾任初中会计老师",
    experienceEN: "6 years of experience, former junior accounting teacher",
    bioCN: "Isaac老师擅长以条理清晰的方式教导数学与会计，帮助学生在数字科目中建立自信，从初中数学到高中簿记无缝衔接。",
    bioEN: "Teacher Isaac brings clarity and structure to both Mathematics and Accounting, helping students build confidence with numbers from junior maths all the way to senior bookkeeping.",
    initial: "I",
    image: "/images/issac.png",
  },
  {
    nameCN: "Ms. Chew",
    nameEN: "Ms. Chew",
    subjectsCN: ["初高中英文"],
    subjectsEN: ["English (All Levels)"],
    qualificationCN: "23年资深英文教学经验",
    qualificationEN: "23 years of English teaching experience",
    experienceCN: "23年教学经验，专注 CEFR 标准语法、词汇与写作教学",
    experienceEN: "23 years of experience, specialising in CEFR-standard grammar, vocabulary & writing",
    bioCN: "Ms. Chew 是团队中最资深的英文老师之一，23年教学经验让她深谙学生的学习难点，专注语法、词汇与写作训练，对标 CEFR 标准。",
    bioEN: "With 23 years of experience, Ms. Chew is one of our most seasoned English teachers. She focuses on grammar, vocabulary and structured writing aligned with CEFR standards.",
    initial: "C",
    image: "/images/ms_chew.png",
  },
  {
    nameCN: "潘保澹老师",
    nameEN: "Teacher Phua",
    subjectsCN: ["高中文商地理"],
    subjectsEN: ["Geography (Arts/Commerce)"],
    qualificationCN: "台湾师范大学地理系",
    qualificationEN: "National Taiwan Normal University, Geography",
    experienceCN: "29年教学经验，曾任初中地理教师",
    experienceEN: "29 years of experience, former junior geography teacher",
    bioCN: "潘老师是满汉全习资历最深的老师，29年教学生涯积累了丰富的教学智慧。台湾师大地理系出身，对地理学科有深厚的专业素养与独到的教学方法。",
    bioEN: "With 29 years of teaching — the most experienced on our team — Teacher Phua brings unmatched depth to Geography. A graduate of Taiwan Normal University's Geography department, his expertise is second to none.",
    initial: "潘",
    image: "/images/潘保惠.png",
  },
];

export interface Testimonial {
  nameCN: string;
  nameEN: string;
  role: string;
  quoteCN: string;
  quoteEN: string;
  initial: string;
}

// TODO: replace with real testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    nameCN: "张伟明",
    nameEN: "Wei Ming",
    role: "高一学生 · Senior 1 Student",
    quoteCN: "老师们的教学方式让我真正理解了物理和化学，不再是死记硬背。成绩从C进步到A！",
    quoteEN: "The teachers helped me truly understand Physics and Chemistry. My grades improved from C to A!",
    initial: "张",
  },
  {
    nameCN: "陈美玲",
    nameEN: "Mei Ling",
    role: "家长 · Parent",
    quoteCN: "孩子在满汉全习上课后，学习态度完全改变了。老师很用心，也会主动与家长沟通。",
    quoteEN: "My child's attitude towards studying completely changed. The teachers are dedicated and communicate proactively with parents.",
    initial: "陈",
  },
  {
    nameCN: "林志豪",
    nameEN: "Zhi Hao",
    role: "高三学生 · Senior 3 Student",
    quoteCN: "备考统考压力很大，但老师给了我很清晰的复习计划和策略，让我有信心面对考试。",
    quoteEN: "Exam prep was stressful, but the teachers gave me a clear revision plan and strategy. I felt confident going in.",
    initial: "林",
  },
  {
    nameCN: "黄丽莎",
    nameEN: "Lisa Wong",
    role: "家长 · Parent",
    quoteCN: "小班教学真的有差别，老师能照顾到每个学生。两个孩子都在这里补习，非常推荐。",
    quoteEN: "Small class sizes really make a difference. Both my children attend classes here — highly recommended.",
    initial: "黄",
  },
];

export interface TimetableSlot {
  day: string;
  time: string;
  subjectCN: string;
  subjectEN: string;
  level: "lower" | "upper";
}

// TODO: replace with real schedule
export const TIMETABLE: TimetableSlot[] = [
  { day: "Mon", time: "14:00–15:30", subjectCN: "数学", subjectEN: "Mathematics", level: "lower" },
  { day: "Mon", time: "16:00–17:30", subjectCN: "数学", subjectEN: "Mathematics", level: "upper" },
  { day: "Mon", time: "20:00–21:30", subjectCN: "物理", subjectEN: "Physics", level: "upper" },
  { day: "Tue", time: "14:00–15:30", subjectCN: "华文", subjectEN: "Chinese", level: "lower" },
  { day: "Tue", time: "16:00–17:30", subjectCN: "华文", subjectEN: "Chinese", level: "upper" },
  { day: "Tue", time: "20:00–21:30", subjectCN: "化学", subjectEN: "Chemistry", level: "upper" },
  { day: "Wed", time: "14:00–15:30", subjectCN: "英文", subjectEN: "English", level: "lower" },
  { day: "Wed", time: "16:00–17:30", subjectCN: "英文", subjectEN: "English", level: "upper" },
  { day: "Wed", time: "20:00–21:30", subjectCN: "生物", subjectEN: "Biology", level: "upper" },
  { day: "Thu", time: "14:00–15:30", subjectCN: "马来文", subjectEN: "Bahasa Melayu", level: "lower" },
  { day: "Thu", time: "16:00–17:30", subjectCN: "马来文", subjectEN: "Bahasa Melayu", level: "upper" },
  { day: "Thu", time: "20:00–21:30", subjectCN: "会计", subjectEN: "Accounts", level: "upper" },
  { day: "Fri", time: "14:00–15:30", subjectCN: "历史", subjectEN: "History", level: "lower" },
  { day: "Fri", time: "16:00–17:30", subjectCN: "历史", subjectEN: "History", level: "upper" },
  { day: "Sat", time: "09:00–10:30", subjectCN: "数学", subjectEN: "Mathematics", level: "lower" },
  { day: "Sat", time: "10:45–12:15", subjectCN: "数学", subjectEN: "Mathematics", level: "upper" },
  { day: "Sat", time: "14:00–15:30", subjectCN: "物理", subjectEN: "Physics", level: "upper" },
  { day: "Sat", time: "15:45–17:15", subjectCN: "化学", subjectEN: "Chemistry", level: "upper" },
  { day: "Sun", time: "09:00–10:30", subjectCN: "英文", subjectEN: "English", level: "lower" },
  { day: "Sun", time: "10:45–12:15", subjectCN: "华文", subjectEN: "Chinese", level: "lower" },
  { day: "Sun", time: "14:00–15:30", subjectCN: "生物", subjectEN: "Biology", level: "upper" },
];

export const STATS = [
  { valueCN: "500+", labelCN: "学生", labelEN: "Students" },
  { valueCN: "8", labelCN: "位老师", labelEN: "Teachers" },
  { valueCN: "5.0", labelCN: "Google 评分", labelEN: "Google Rating" },
  { valueCN: "71", labelCN: "条好评", labelEN: "Google Reviews" },
];

export const LEVELS = [
  { id: "j1", labelCN: "初一", labelEN: "Junior 1" },
  { id: "j2", labelCN: "初二", labelEN: "Junior 2" },
  { id: "j3", labelCN: "初三", labelEN: "Junior 3" },
  { id: "s1", labelCN: "高一", labelEN: "Senior 1" },
  { id: "s2", labelCN: "高二", labelEN: "Senior 2" },
  { id: "s3", labelCN: "高三", labelEN: "Senior 3" },
];
