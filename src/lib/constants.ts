// TODO: replace WHATSAPP_NUMBER with real number
export const WHATSAPP_NUMBER = "60XXXXXXXXX";

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
  { icon: "📊", nameCN: "会计", nameEN: "Accounts", level: "upper", description: "会计原理与财务报表 · Accounting principles & financial statements" },
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
}

// TODO: replace with real teacher data
export const TEACHERS: Teacher[] = [
  {
    nameCN: "陈老师",
    nameEN: "Mr. Chan",
    subjectsCN: ["数学", "物理"],
    subjectsEN: ["Mathematics", "Physics"],
    qualificationCN: "理科学士 (数学), 马来亚大学 (UM)",
    qualificationEN: "BSc Mathematics, University of Malaya (UM)",
    experienceCN: "10年教学经验，专注独中数理科目",
    experienceEN: "10 years of experience in independent school STEM",
    bioCN: "陈老师擅长以生活化例子讲解抽象概念，学生成绩进步显著。",
    bioEN: "Mr. Chan specialises in breaking down complex mathematical concepts into intuitive, real-world examples.",
    initial: "陈",
  },
  {
    nameCN: "李老师",
    nameEN: "Ms. Lee",
    subjectsCN: ["华文", "历史"],
    subjectsEN: ["Chinese", "History"],
    qualificationCN: "中文系文学士, 新纪元大学学院",
    qualificationEN: "BA Chinese Literature, New Era University College",
    experienceCN: "8年教学经验，曾任独中华文科主任",
    experienceEN: "8 years of experience, former Chinese department head",
    bioCN: "李老师热爱中华文化，教学风格生动有趣，深受学生喜爱。",
    bioEN: "Ms. Lee brings Chinese language and history to life through storytelling and cultural context.",
    initial: "李",
  },
  {
    nameCN: "张老师",
    nameEN: "Mr. Chong",
    subjectsCN: ["英文", "马来文"],
    subjectsEN: ["English", "Bahasa Melayu"],
    qualificationCN: "英语教育学士 (TESL), 博特拉大学 (UPM)",
    qualificationEN: "BA TESL, Universiti Putra Malaysia (UPM)",
    experienceCN: "7年教学经验，擅长语文写作与考试技巧",
    experienceEN: "7 years of experience in language writing & exam techniques",
    bioCN: "张老师注重实用语文技能，帮助学生掌握写作与口语表达。",
    bioEN: "Mr. Chong focuses on practical language skills — essay writing, grammar, and exam techniques.",
    initial: "张",
  },
  {
    nameCN: "王老师",
    nameEN: "Ms. Wong",
    subjectsCN: ["化学", "生物"],
    subjectsEN: ["Chemistry", "Biology"],
    qualificationCN: "理科学士 (生物化学), 理科大学 (USM)",
    qualificationEN: "BSc Biochemistry, Universiti Sains Malaysia (USM)",
    experienceCN: "9年教学经验，善于实验式教学法",
    experienceEN: "9 years of experience with lab-based teaching methods",
    bioCN: "王老师以实验思维教授理科，让学生真正理解而非死记硬背。",
    bioEN: "Ms. Wong takes a lab-thinking approach, ensuring students understand the why behind every concept.",
    initial: "王",
  },
  {
    nameCN: "林老师",
    nameEN: "Mr. Lim",
    subjectsCN: ["数学", "会计"],
    subjectsEN: ["Mathematics", "Accounts"],
    qualificationCN: "会计学士 (荣誉), 马来西亚理工大学 (UTM)",
    qualificationEN: "BAcc (Hons), Universiti Teknologi Malaysia (UTM)",
    experienceCN: "6年教学经验，持有 ACCA 部分豁免资格",
    experienceEN: "6 years of experience, partial ACCA exemption holder",
    bioCN: "林老师擅长以系统化方法教导数学与会计，条理清晰，深入浅出。",
    bioEN: "Mr. Lim brings a structured, systematic approach to both Mathematics and Accounts.",
    initial: "林",
  },
  {
    nameCN: "吴老师",
    nameEN: "Ms. Ng",
    subjectsCN: ["华文", "英文"],
    subjectsEN: ["Chinese", "English"],
    qualificationCN: "双语传播学士, 林肯大学学院",
    qualificationEN: "BA Bilingual Communications, Lincoln University College",
    experienceCN: "5年教学经验，曾任翻译及文字编辑",
    experienceEN: "5 years of experience, former translator & editor",
    bioCN: "吴老师中英文俱佳，能帮助学生在两种语言之间建立学习桥梁。",
    bioEN: "Ms. Ng's bilingual background allows her to bridge both languages effectively.",
    initial: "吴",
  },
  {
    nameCN: "刘老师",
    nameEN: "Mr. Liew",
    subjectsCN: ["物理", "化学"],
    subjectsEN: ["Physics", "Chemistry"],
    qualificationCN: "应用物理学士, 马来亚大学 (UM)",
    qualificationEN: "BSc Applied Physics, University of Malaya (UM)",
    experienceCN: "11年教学经验，擅长 SPM / 独中统考备考",
    experienceEN: "11 years of experience, SPM & UEC exam specialist",
    bioCN: "刘老师经验丰富，对考试题型了如指掌，备考指导精准有效。",
    bioEN: "Mr. Liew is an exam specialist whose targeted revision strategies have helped hundreds score distinctions.",
    initial: "刘",
  },
  {
    nameCN: "郑老师",
    nameEN: "Ms. Teh",
    subjectsCN: ["历史", "马来文"],
    subjectsEN: ["History", "Bahasa Melayu"],
    qualificationCN: "历史教育学士, 马来西亚师范大学 (UPSI)",
    qualificationEN: "BEd History, Universiti Pendidikan Sultan Idris (UPSI)",
    experienceCN: "7年教学经验，擅长记忆技巧与论述答题训练",
    experienceEN: "7 years of experience in memorisation techniques & structured essays",
    bioCN: "郑老师以故事化方式讲授历史，并教导学生有效的记忆与答题策略。",
    bioEN: "Ms. Teh turns history into a compelling narrative, making it easier to remember.",
    initial: "郑",
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
  { valueCN: "14", labelCN: "科目", labelEN: "Subjects" },
  { valueCN: "5年", labelCN: "教学经验", labelEN: "Years Experience" },
];

export const LEVELS = [
  { id: "j1", labelCN: "初一", labelEN: "Junior 1" },
  { id: "j2", labelCN: "初二", labelEN: "Junior 2" },
  { id: "j3", labelCN: "初三", labelEN: "Junior 3" },
  { id: "s1", labelCN: "高一", labelEN: "Senior 1" },
  { id: "s2", labelCN: "高二", labelEN: "Senior 2" },
  { id: "s3", labelCN: "高三", labelEN: "Senior 3" },
];
