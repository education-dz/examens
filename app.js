/**
 * ==========================================================================
 * APP.JS - MANAR EDUCATION PORTAL (PRODUCTION GRADE & ROBUST)
 * Consolidated JavaScript with Null Safeguards for Vercel/Netlify Deployment
 * ==========================================================================
 */

// ==========================================================================
// 1. DATA DATABASE (ALGERIAN SCHOOL SYSTEM STRUCTURE)
// ==========================================================================

const EDUCATION_DB = {
    primary: {
        title: "الطور الابتدائي",
        years: {
            "1": {
                title: "السنة الأولى ابتدائي",
                subjects: [
                    { id: "arabic", name: "اللغة العربية" },
                    { id: "math", name: "الرياضيات" },
                    { id: "islamic", name: "التربية الإسلامية" },
                    { id: "civic", name: "التربية المدنية" },
                    { id: "artistic", name: "التربية الفنية" }
                ]
            },
            "2": {
                title: "السنة الثانية ابتدائي",
                subjects: [
                    { id: "arabic", name: "اللغة العربية" },
                    { id: "math", name: "الرياضيات" },
                    { id: "islamic", name: "التربية الإسلامية" },
                    { id: "civic", name: "التربية المدنية" },
                    { id: "scientific", name: "التربية العلمية والتكنولوجية" }
                ]
            },
            "3": {
                title: "السنة الثالثة ابتدائي",
                subjects: [
                    { id: "arabic", name: "اللغة العربية" },
                    { id: "math", name: "الرياضيات" },
                    { id: "french", name: "اللغة الفرنسية" },
                    { id: "islamic", name: "التربية الإسلامية" },
                    { id: "civic", name: "التربية المدنية" },
                    { id: "scientific", name: "التربية العلمية والتكنولوجية" },
                    { id: "history_geo", name: "التاريخ والجغرافيا" }
                ]
            },
            "4": {
                title: "السنة الرابعة ابتدائي",
                subjects: [
                    { id: "arabic", name: "اللغة العربية" },
                    { id: "math", name: "الرياضيات" },
                    { id: "french", name: "اللغة الفرنسية" },
                    { id: "english", name: "اللغة الإنجليزية" },
                    { id: "islamic", name: "التربية الإسلامية" },
                    { id: "civic", name: "التربية المدنية" },
                    { id: "scientific", name: "التربية العلمية والتكنولوجية" },
                    { id: "history_geo", name: "التاريخ والجغرافيا" }
                ]
            },
            "5": {
                title: "السنة الخامسة ابتدائي",
                subjects: [
                    { id: "arabic", name: "اللغة العربية" },
                    { id: "math", name: "الرياضيات" },
                    { id: "french", name: "اللغة الفرنسية" },
                    { id: "english", name: "اللغة الإنجليزية" },
                    { id: "islamic", name: "التربية الإسلامية" },
                    { id: "civic", name: "التربية المدنية" },
                    { id: "scientific", name: "التربية العلمية والتكنولوجية" },
                    { id: "history_geo", name: "التاريخ والجغرافيا" }
                ]
            }
        }
    },
    middle: {
        title: "الطور المتوسط",
        years: {
            "1": {
                title: "السنة الأولى متوسط",
                subjects: [
                    { id: "arabic", name: "اللغة العربية" },
                    { id: "math", name: "الرياضيات" },
                    { id: "physics", name: "العلوم الفيزيائية والتكنولوجيا" },
                    { id: "sciences", name: "علوم الطبيعة والحياة" },
                    { id: "french", name: "اللغة الفرنسية" },
                    { id: "english", name: "اللغة الإنجليزية" },
                    { id: "islamic", name: "التربية الإسلامية" },
                    { id: "history_geo", name: "التاريخ والجغرافيا" },
                    { id: "civic", name: "التربية المدنية" }
                ]
            },
            "2": {
                title: "السنة الثانية متوسط",
                subjects: [
                    { id: "arabic", name: "اللغة العربية" },
                    { id: "math", name: "الرياضيات" },
                    { id: "physics", name: "العلوم الفيزيائية والتكنولوجيا" },
                    { id: "sciences", name: "علوم الطبيعة والحياة" },
                    { id: "french", name: "اللغة الفرنسية" },
                    { id: "english", name: "اللغة الإنجليزية" },
                    { id: "islamic", name: "التربية الإسلامية" },
                    { id: "history_geo", name: "التاريخ والجغرافيا" },
                    { id: "civic", name: "التربية المدنية" }
                ]
            },
            "3": {
                title: "السنة الثالثة متوسط",
                subjects: [
                    { id: "arabic", name: "اللغة العربية" },
                    { id: "math", name: "الرياضيات" },
                    { id: "physics", name: "العلوم الفيزيائية والتكنولوجيا" },
                    { id: "sciences", name: "علوم الطبيعة والحياة" },
                    { id: "french", name: "اللغة الفرنسية" },
                    { id: "english", name: "اللغة الإنجليزية" },
                    { id: "islamic", name: "التربية الإسلامية" },
                    { id: "history_geo", name: "التاريخ والجغرافيا" },
                    { id: "civic", name: "التربية المدنية" }
                ]
            },
            "4": {
                title: "السنة الرابعة متوسط (BEM)",
                subjects: [
                    { id: "arabic", name: "اللغة العربية" },
                    { id: "math", name: "الرياضيات" },
                    { id: "physics", name: "العلوم الفيزيائية والتكنولوجيا" },
                    { id: "sciences", name: "علوم الطبيعة والحياة" },
                    { id: "french", name: "اللغة الفرنسية" },
                    { id: "english", name: "اللغة الإنجليزية" },
                    { id: "islamic", name: "التربية الإسلامية" },
                    { id: "history_geo", name: "التاريخ والجغرافيا" },
                    { id: "civic", name: "التربية المدنية" }
                ]
            }
        }
    },
    secondary: {
        title: "الطور الثانوي",
        years: {
            "1": {
                title: "السنة الأولى ثانوي",
                streams: {
                    "common_sci": {
                        title: "جذع مشترك علوم وتكنولوجيا",
                        subjects: [
                            { id: "math", name: "الرياضيات" },
                            { id: "physics", name: "العلوم الفيزيائية" },
                            { id: "sciences", name: "علوم الطبيعة والحياة" },
                            { id: "arabic", name: "اللغة العربية وآدابها" },
                            { id: "french", name: "اللغة الفرنسية" },
                            { id: "english", name: "اللغة الإنجليزية" },
                            { id: "islamic", name: "العلوم الإسلامية" },
                            { id: "history_geo", name: "التاريخ والجغرافيا" },
                            { id: "informatics", name: "المعلوماتية" },
                            { id: "technology", name: "التكنولوجيا" }
                        ]
                    },
                    "common_lit": {
                        title: "جذع مشترك آداب",
                        subjects: [
                            { id: "arabic", name: "اللغة العربية وآدابها" },
                            { id: "french", name: "اللغة الفرنسية" },
                            { id: "english", name: "اللغة الإنجليزية" },
                            { id: "history_geo", name: "التاريخ والجغرافيا" },
                            { id: "islamic", name: "العلوم الإسلامية" },
                            { id: "math", name: "الرياضيات" }
                        ]
                    }
                }
            },
            "2": {
                title: "السنة الثانية ثانوي",
                streams: {
                    "sci": {
                        title: "شعبة علوم تجريبية",
                        subjects: [
                            { id: "sciences", name: "علوم الطبيعة والحياة" },
                            { id: "physics", name: "العلوم الفيزيائية" },
                            { id: "math", name: "الرياضيات" },
                            { id: "arabic", name: "اللغة العربية وآدابها" },
                            { id: "french", name: "اللغة الفرنسية" },
                            { id: "english", name: "اللغة الإنجليزية" },
                            { id: "history_geo", name: "التاريخ والجغرافيا" },
                            { id: "islamic", name: "العلوم الإسلامية" },
                            { id: "philosophy", name: "الفلسفة" }
                        ]
                    },
                    "math": {
                        title: "شعبة رياضيات",
                        subjects: [
                            { id: "math", name: "الرياضيات" },
                            { id: "physics", name: "العلوم الفيزيائية" },
                            { id: "sciences", name: "علوم الطبيعة والحياة" },
                            { id: "arabic", name: "اللغة العربية وآدابها" },
                            { id: "french", name: "اللغة الفرنسية" },
                            { id: "english", name: "اللغة الإنجليزية" },
                            { id: "history_geo", name: "التاريخ والجغرافيا" },
                            { id: "islamic", name: "العلوم الإسلامية" },
                            { id: "philosophy", name: "الفلسفة" }
                        ]
                    },
                    "tech": {
                        title: "شعبة تقني رياضي",
                        subjects: [
                            { id: "technology", name: "التكنولوجيا (الهندسة)" },
                            { id: "math", name: "الرياضيات" },
                            { id: "physics", name: "العلوم الفيزيائية" },
                            { id: "arabic", name: "اللغة العربية وآدابها" },
                            { id: "french", name: "اللغة الفرنسية" },
                            { id: "english", name: "اللغة الإنجليزية" },
                            { id: "history_geo", name: "التاريخ والجغرافيا" },
                            { id: "islamic", name: "العلوم الإسلامية" },
                            { id: "philosophy", name: "الفلسفة" }
                        ]
                    },
                    "eco": {
                        title: "شعبة تسيير واقتصاد",
                        subjects: [
                            { id: "accounting", name: "التسيير المالي والمحاسبي" },
                            { id: "economics", name: "الاقتصاد والمناجمنت" },
                            { id: "law", name: "القانون" },
                            { id: "math", name: "الرياضيات" },
                            { id: "arabic", name: "اللغة العربية وآدابها" },
                            { id: "french", name: "اللغة الفرنسية" },
                            { id: "english", name: "اللغة الإنجليزية" },
                            { id: "history_geo", name: "التاريخ والجغرافيا" },
                            { id: "islamic", name: "العلوم الإسلامية" },
                            { id: "philosophy", name: "الفلسفة" }
                        ]
                    },
                    "lit": {
                        title: "شعبة آداب وفلسفة",
                        subjects: [
                            { id: "philosophy", name: "الفلسفة" },
                            { id: "arabic", name: "اللغة العربية وآدابها" },
                            { id: "history_geo", name: "التاريخ والجغرافيا" },
                            { id: "french", name: "اللغة الفرنسية" },
                            { id: "english", name: "اللغة الإنجليزية" },
                            { id: "islamic", name: "العلوم الإسلامية" },
                            { id: "math", name: "الرياضيات" }
                        ]
                    },
                    "lang": {
                        title: "شعبة لغات أجنبية",
                        subjects: [
                            { id: "arabic", name: "اللغة العربية وآدابها" },
                            { id: "french", name: "اللغة الفرنسية" },
                            { id: "english", name: "اللغة الإنجليزية" },
                            { id: "spanish", name: "اللغة الإسبانية" },
                            { id: "german", name: "اللغة الألمانية" },
                            { id: "italian", name: "اللغة الإيطالية" },
                            { id: "history_geo", name: "التاريخ والجغرافيا" },
                            { id: "islamic", name: "العلوم الإسلامية" },
                            { id: "philosophy", name: "الفلسفة" },
                            { id: "math", name: "الرياضيات" }
                        ]
                    }
                }
            },
            "3": {
                title: "السنة الثالثة ثانوي (BAC)",
                streams: {
                    "sci": {
                        title: "شعبة علوم تجريبية",
                        subjects: [
                            { id: "sciences", name: "علوم الطبيعة والحياة" },
                            { id: "physics", name: "العلوم الفيزيائية" },
                            { id: "math", name: "الرياضيات" },
                            { id: "arabic", name: "اللغة العربية وآدابها" },
                            { id: "french", name: "اللغة الفرنسية" },
                            { id: "english", name: "اللغة الإنجليزية" },
                            { id: "history_geo", name: "التاريخ والجغرافيا" },
                            { id: "islamic", name: "العلوم الإسلامية" },
                            { id: "philosophy", name: "الفلسفة" }
                        ]
                    },
                    "math": {
                        title: "شعبة رياضيات",
                        subjects: [
                            { id: "math", name: "الرياضيات" },
                            { id: "physics", name: "العلوم الفيزيائية" },
                            { id: "sciences", name: "علوم الطبيعة والحياة" },
                            { id: "arabic", name: "اللغة العربية وآدابها" },
                            { id: "french", name: "اللغة الفرنسية" },
                            { id: "english", name: "اللغة الإنجليزية" },
                            { id: "history_geo", name: "التاريخ والجغرافيا" },
                            { id: "islamic", name: "العلوم الإسلامية" },
                            { id: "philosophy", name: "الفلسفة" }
                        ]
                    },
                    "tech": {
                        title: "شعبة تقني رياضي",
                        subjects: [
                            { id: "technology", name: "التكنولوجيا (الهندسة)" },
                            { id: "math", name: "الرياضيات" },
                            { id: "physics", name: "العلوم الفيزيائية" },
                            { id: "arabic", name: "اللغة العربية وآدابها" },
                            { id: "french", name: "اللغة الفرنسية" },
                            { id: "english", name: "اللغة الإنجليزية" },
                            { id: "history_geo", name: "التاريخ والجغرافيا" },
                            { id: "islamic", name: "العلوم الإسلامية" },
                            { id: "philosophy", name: "الفلسفة" }
                        ]
                    },
                    "eco": {
                        title: "شعبة تسيير واقتصاد",
                        subjects: [
                            { id: "accounting", name: "التسيير المالي والمحاسبي" },
                            { id: "economics", name: "الاقتصاد والمناجمنت" },
                            { id: "law", name: "القانون" },
                            { id: "math", name: "الرياضيات" },
                            { id: "arabic", name: "اللغة العربية وآدابها" },
                            { id: "french", name: "اللغة الفرنسية" },
                            { id: "english", name: "اللغة الإنجليزية" },
                            { id: "history_geo", name: "التاريخ والجغرافيا" },
                            { id: "islamic", name: "العلوم الإسلامية" },
                            { id: "philosophy", name: "الفلسفة" }
                        ]
                    },
                    "lit": {
                        title: "شعبة آداب وفلسفة",
                        subjects: [
                            { id: "philosophy", name: "الفلسفة" },
                            { id: "arabic", name: "اللغة العربية وآدابها" },
                            { id: "history_geo", name: "التاريخ والجغرافيا" },
                            { id: "french", name: "اللغة الفرنسية" },
                            { id: "english", name: "اللغة الإنجليزية" },
                            { id: "islamic", name: "العلوم الإسلامية" },
                            { id: "math", name: "الرياضيات" }
                        ]
                    },
                    "lang": {
                        title: "شعبة لغات أجنبية",
                        subjects: [
                            { id: "arabic", name: "اللغة العربية وآدابها" },
                            { id: "french", name: "اللغة الفرنسية" },
                            { id: "english", name: "اللغة الإنجليزية" },
                            { id: "spanish", name: "اللغة الإسبانية" },
                            { id: "german", name: "اللغة الألمانية" },
                            { id: "italian", name: "اللغة الإيطالية" },
                            { id: "history_geo", name: "التاريخ والجغرافيا" },
                            { id: "islamic", name: "العلوم الإسلامية" },
                            { id: "philosophy", name: "الفلسفة" },
                            { id: "math", name: "الرياضيات" }
                        ]
                    }
                }
            }
        }
    }
};

// ==========================================================================
// 2. EXAM FILES DATABASE (THE CORE RESOURCES GRID)
// ==========================================================================

const EXAMS_DATA = [
    {
        id: "bem_math_t1_f1",
        level: "middle",
        year: "4",
        stream: null,
        subject: "math",
        term: 1,
        title: "الفرض الأول في مادة الرياضيات للموسم الأول - نموذج 01",
        examUrl: "https://example.com/downloads/bem-math-t1-f1-exam.pdf",
        solutionUrl: "https://example.com/downloads/bem-math-t1-f1-sol.pdf"
    },
    {
        id: "bem_math_t1_ex1",
        level: "middle",
        year: "4",
        stream: null,
        subject: "math",
        term: 1,
        title: "الاختبار الأول الموحد في الرياضيات للسنة الرابعة متوسط - نموذج 02",
        examUrl: "https://example.com/downloads/bem-math-t1-ex1-exam.pdf",
        solutionUrl: "https://example.com/downloads/bem-math-t1-ex1-sol.pdf"
    },
    {
        id: "bem_math_t2_ex1",
        level: "middle",
        year: "4",
        stream: null,
        subject: "math",
        term: 2,
        title: "الاختبار الثاني التجريبي في مادة الرياضيات - نموذج 01",
        examUrl: "https://example.com/downloads/bem-math-t2-ex1-exam.pdf",
        solutionUrl: "https://example.com/downloads/bem-math-t2-ex1-sol.pdf"
    },
    {
        id: "bem_physics_t1_f1",
        level: "middle",
        year: "4",
        stream: null,
        subject: "physics",
        term: 1,
        title: "فرض الفصل الأول في العلوم الفيزيائية (الظواهر الميكانيكية)",
        examUrl: "https://example.com/downloads/bem-phys-t1-f1-exam.pdf",
        solutionUrl: "https://example.com/downloads/bem-phys-t1-f1-sol.pdf"
    },
    {
        id: "bem_arabic_t1_ex1",
        level: "middle",
        year: "4",
        stream: null,
        subject: "arabic",
        term: 1,
        title: "اختبار الفصل الأول في اللغة العربية (تحليل النصوص وقواعد اللغة)",
        examUrl: "https://example.com/downloads/bem-arabic-t1-ex1-exam.pdf",
        solutionUrl: "https://example.com/downloads/bem-arabic-t1-ex1-sol.pdf"
    },
    {
        id: "prim_5_math_t1_ex1",
        level: "primary",
        year: "5",
        stream: null,
        subject: "math",
        term: 1,
        title: "اختبار الفصل الأول الموحد في مادة الرياضيات - الخامسة ابتدائي",
        examUrl: "https://example.com/downloads/prim5-math-t1-ex1-exam.pdf",
        solutionUrl: "https://example.com/downloads/prim5-math-t1-ex1-sol.pdf"
    },
    {
        id: "prim_5_arabic_t1_ex1",
        level: "primary",
        year: "5",
        stream: null,
        subject: "arabic",
        term: 1,
        title: "اختبار الفصل الأول في اللغة العربية للسنة الخامسة - نموذج مع الحل",
        examUrl: "https://example.com/downloads/prim5-arabic-t1-ex1-exam.pdf",
        solutionUrl: "https://example.com/downloads/prim5-arabic-t1-ex1-sol.pdf"
    },
    {
        id: "bac_sci_nature_t1_ex1",
        level: "secondary",
        year: "3",
        stream: "sci",
        subject: "sciences",
        term: 1,
        title: "اختبار الفصل الأول في العلوم الطبيعية (تركيب البروتين والنشاط الإنزيمي)",
        examUrl: "https://example.com/downloads/bac-sci-nature-t1-ex1-exam.pdf",
        solutionUrl: "https://example.com/downloads/bac-sci-nature-t1-ex1-sol.pdf"
    },
    {
        id: "bac_sci_physics_t1_ex1",
        level: "secondary",
        year: "3",
        stream: "sci",
        subject: "physics",
        term: 1,
        title: "الاختبار الأول في العلوم الفيزيائية (المتابعة الزمنية والتحولات النووية)",
        examUrl: "https://example.com/downloads/bac-sci-phys-t1-ex1-exam.pdf",
        solutionUrl: "https://example.com/downloads/bac-sci-phys-t1-ex1-sol.pdf"
    },
    {
        id: "bac_sci_math_t2_ex1",
        level: "secondary",
        year: "3",
        stream: "sci",
        subject: "math",
        term: 2,
        title: "اختبار الفصل الثاني في الرياضيات (الدوال الأسية واللوغاريتمية والتراجع الموحد)",
        examUrl: "https://example.com/downloads/bac-sci-math-t2-ex1-exam.pdf",
        solutionUrl: "https://example.com/downloads/bac-sci-math-t2-ex1-sol.pdf"
    },
    {
        id: "sec2_eco_accounting_t1_ex1",
        level: "secondary",
        year: "2",
        stream: "eco",
        subject: "accounting",
        term: 1,
        title: "اختبار الفصل الأول في التسيير المحاسبي والمالي - نموذج 01",
        examUrl: "https://example.com/downloads/sec2-eco-accounting-t1-ex1-exam.pdf",
        solutionUrl: "https://example.com/downloads/sec2-eco-accounting-t1-ex1-sol.pdf"
    },
    {
        id: "sec1_sci_math_t1_f1",
        level: "secondary",
        year: "1",
        stream: "common_sci",
        subject: "math",
        term: 1,
        title: "الفرض الأول في الرياضيات للفصل الأول - جذع مشترك علوم وتكنولوجيا",
        examUrl: "https://example.com/downloads/sec1-sci-math-t1-f1-exam.pdf",
        solutionUrl: "https://example.com/downloads/sec1-sci-math-t1-f1-sol.pdf"
    }
];

// ==========================================================================
// 3. SPA STATE NAVIGATION & ROUTING
// ==========================================================================

const AppState = {
    currentView: 'home',
    currentLevel: null,
    currentYear: null,
    currentStream: null,
    currentSubject: null,
    currentTerm: 1,
    searchQuery: ""
};

// DOM Cache - mapping all layout, modals, chat, and countdown elements
const DOM = {
    dynamicContent: document.getElementById('dynamic-app-content'),
    breadcrumbs: document.getElementById('site-breadcrumbs'),
    navLinks: document.querySelectorAll('.nav-link'),
    footerNavLinks: document.querySelectorAll('.footer-nav-link'),
    logoBtn: document.getElementById('logo-btn'),
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    menuToggleBtn: document.getElementById('menu-toggle-btn'),
    navMenu: document.getElementById('nav-menu'),
    
    views: {
        home: document.getElementById('view-home'),
        levelDetail: document.getElementById('view-level-detail'),
        secondaryStreams: document.getElementById('view-secondary-streams'),
        subjects: document.getElementById('view-subjects'),
        examsList: document.getElementById('view-exams-list'),
        searchResults: document.getElementById('view-search-results')
    },
    
    searchInput: document.getElementById('main-search-input'),
    searchActionBtn: document.getElementById('search-action-btn'),
    tagButtons: document.querySelectorAll('.tag-btn'),
    searchKeyword: document.getElementById('search-keyword'),
    searchCount: document.getElementById('search-count'),
    searchResultsContainer: document.getElementById('search-results-container'),
    
    yearsGridContainer: document.getElementById('years-grid-container'),
    streamsGridContainer: document.getElementById('streams-grid-container'),
    subjectsGridContainer: document.getElementById('subjects-grid-container'),
    examsTableBody: document.getElementById('exams-table-body'),
    examsEmptyState: document.getElementById('exams-empty-state'),
    
    backBtns: {
        levelDetail: document.getElementById('level-detail-back'),
        streams: document.getElementById('streams-back'),
        subjects: document.getElementById('subjects-back'),
        examsList: document.getElementById('exams-list-back'),
        search: document.getElementById('search-back')
    },
    
    termTabBtns: document.querySelectorAll('.term-tab-btn'),
    
    titles: {
        levelDetail: document.getElementById('level-detail-title'),
        streams: document.getElementById('streams-title'),
        subjects: document.getElementById('subjects-title'),
        examsList: document.getElementById('exams-list-title')
    },
    
    modals: {
        pdfPreview: document.getElementById('pdf-preview-modal'),
        privacyPolicy: document.getElementById('privacy-policy-modal'),
        contactUs: document.getElementById('contact-us-modal')
    },
    
    modalOpenBtns: {
        privacy: document.getElementById('privacy-policy-btn'),
        contact: document.getElementById('contact-us-btn')
    },
    
    pdfModalTitle: document.getElementById('pdf-modal-title'),
    pdfSimTitle: document.getElementById('pdf-sim-title'),
    pdfModalDownloadBtn: document.getElementById('pdf-modal-download-btn'),
    
    contactForm: document.getElementById('contact-form'),
    contactFormAlert: document.getElementById('contact-form-alert'),
    
    // Noor AI Chatbot
    noorToggleBtn: document.getElementById('noor-chat-toggle-btn'),
    noorChatPanel: document.getElementById('noor-chat-panel'),
    noorCloseBtn: document.getElementById('noor-close-btn'),
    noorChatMessages: document.getElementById('noor-chat-messages'),
    noorChatForm: document.getElementById('noor-chat-form'),
    noorChatInput: document.getElementById('noor-chat-input'),
    noorImageUpload: document.getElementById('noor-image-upload'),
    noorSuggestionsContainer: document.getElementById('noor-suggestions-container'),
    
    // Countdown Selectors
    bacStatusLabel: document.getElementById('bac-status-label'),
    bacDays: document.getElementById('bac-days'),
    bacHours: document.getElementById('bac-hours'),
    bacMinutes: document.getElementById('bac-minutes'),
    bacSeconds: document.getElementById('bac-seconds'),
    bemStatusLabel: document.getElementById('bem-status-label'),
    bemDays: document.getElementById('bem-days'),
    bemHours: document.getElementById('bem-hours'),
    bemMinutes: document.getElementById('bem-minutes'),
    bemSeconds: document.getElementById('bem-seconds')
};

// ==========================================================================
// 4. MAIN APP INITIALIZER (SAFE BOOTSTRAP)
// ==========================================================================

function initApp() {
    setupEventListeners();
    setupTheme();
    updateBreadcrumbs();
    initCountdowns();
    switchView('home');
}

// ==========================================================================
// 5. EVENT LISTENERS MANAGEMENT (WITH SAFE NULL CHECKS)
// ==========================================================================

function setupEventListeners() {
    // Logo Click
    if (DOM.logoBtn) {
        DOM.logoBtn.addEventListener('click', () => {
            resetState();
            switchView('home');
        });
    }

    // Navigation Links
    if (DOM.navLinks) {
        DOM.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                handleNavClick(link.getAttribute('data-target'));
            });
        });
    }

    if (DOM.footerNavLinks) {
        DOM.footerNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                handleNavClick(link.getAttribute('data-target'));
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }

    // Level Cards (Home Screen)
    const levelCards = document.querySelectorAll('.level-card');
    levelCards.forEach(card => {
        card.addEventListener('click', () => {
            selectLevel(card.getAttribute('data-level'));
        });
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectLevel(card.getAttribute('data-level'));
            }
        });
    });

    // Back Buttons (with check wrap)
    if (DOM.backBtns.levelDetail) {
        DOM.backBtns.levelDetail.addEventListener('click', () => {
            AppState.currentLevel = null;
            switchView('home');
        });
    }

    if (DOM.backBtns.streams) {
        DOM.backBtns.streams.addEventListener('click', () => {
            AppState.currentYear = null;
            selectLevel(AppState.currentLevel);
        });
    }

    if (DOM.backBtns.subjects) {
        DOM.backBtns.subjects.addEventListener('click', () => {
            if (AppState.currentLevel === 'secondary' && parseInt(AppState.currentYear) > 1) {
                AppState.currentStream = null;
                goToStreams(AppState.currentYear);
            } else {
                AppState.currentYear = null;
                AppState.currentStream = null;
                selectLevel(AppState.currentLevel);
            }
        });
    }

    if (DOM.backBtns.examsList) {
        DOM.backBtns.examsList.addEventListener('click', () => {
            AppState.currentSubject = null;
            goToSubjects(AppState.currentYear, AppState.currentStream);
        });
    }

    if (DOM.backBtns.search) {
        DOM.backBtns.search.addEventListener('click', () => {
            switchView('home');
        });
    }

    // Terms Tabs click
    if (DOM.termTabBtns) {
        DOM.termTabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                DOM.termTabBtns.forEach(b => {
                    b.classList.remove('active');
                    b.setAttribute('aria-selected', 'false');
                });
                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');
                AppState.currentTerm = parseInt(btn.getAttribute('data-term'));
                renderExamsTable();
            });
        });
    }

    // Theme Switcher
    if (DOM.themeToggleBtn) {
        DOM.themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Mobile Menu
    if (DOM.menuToggleBtn) {
        DOM.menuToggleBtn.addEventListener('click', toggleMobileMenu);
    }

    // Search Operations
    if (DOM.searchActionBtn) {
        DOM.searchActionBtn.addEventListener('click', performSearch);
    }
    if (DOM.searchInput) {
        DOM.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    if (DOM.tagButtons) {
        DOM.tagButtons.forEach(tag => {
            tag.addEventListener('click', () => {
                if (DOM.searchInput) {
                    DOM.searchInput.value = tag.getAttribute('data-search');
                }
                performSearch();
            });
        });
    }

    // Close Modals
    document.querySelectorAll('[data-close-modal]').forEach(element => {
        element.addEventListener('click', () => {
            closeAllModals();
        });
    });

    // Open Modals
    if (DOM.modalOpenBtns.privacy) {
        DOM.modalOpenBtns.privacy.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(DOM.modals.privacyPolicy);
        });
    }

    if (DOM.modalOpenBtns.contact) {
        DOM.modalOpenBtns.contact.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(DOM.modals.contactUs);
        });
    }

    // Contact form submit
    if (DOM.contactForm) {
        DOM.contactForm.addEventListener('submit', handleContactFormSubmit);
    }

    // Noor AI Events
    if (DOM.noorToggleBtn) {
        DOM.noorToggleBtn.addEventListener('click', toggleNoorChat);
    }
    if (DOM.noorCloseBtn) {
        DOM.noorCloseBtn.addEventListener('click', closeNoorChat);
    }
    if (DOM.noorChatForm) {
        DOM.noorChatForm.addEventListener('submit', handleNoorChatSubmit);
    }
    if (DOM.noorImageUpload) {
        DOM.noorImageUpload.addEventListener('change', handleNoorImageUpload);
    }
    setupNoorSuggestions();
}

// ==========================================================================
// 6. SPA CONTROLLERS & ROUTERS
// ==========================================================================

function resetState() {
    AppState.currentLevel = null;
    AppState.currentYear = null;
    AppState.currentStream = null;
    AppState.currentSubject = null;
    AppState.currentTerm = 1;
    AppState.searchQuery = "";
    if (DOM.searchInput) DOM.searchInput.value = "";
    if (DOM.termTabBtns) {
        DOM.termTabBtns.forEach((btn, idx) => {
            if (idx === 0) {
                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');
            } else {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            }
        });
    }
}

function switchView(viewName) {
    AppState.currentView = viewName;
    
    Object.keys(DOM.views).forEach(key => {
        const viewEl = DOM.views[key];
        if (!viewEl) return;
        
        if (key === viewName || (key === 'levelDetail' && viewName === 'level-detail') || 
            (key === 'secondaryStreams' && viewName === 'secondary-streams') ||
            (key === 'examsList' && viewName === 'exams-list') || 
            (key === 'searchResults' && viewName === 'search-results')) {
            
            viewEl.style.display = 'block';
            setTimeout(() => {
                viewEl.classList.add('active');
            }, 50);
        } else {
            viewEl.classList.remove('active');
            viewEl.style.display = 'none';
        }
    });

    updateNavActiveState();
    updateBreadcrumbs();
    closeMobileMenu();

    const mainLayout = document.querySelector('.main-layout');
    if (mainLayout) {
        const headerHeight = 90;
        const mainPos = mainLayout.offsetTop;
        window.scrollTo({
            top: mainPos - headerHeight,
            behavior: 'smooth'
        });
    }
}

function handleNavClick(target) {
    resetState();
    if (target === 'home') {
        switchView('home');
    } else {
        selectLevel(target);
    }
}

function updateNavActiveState() {
    if (!DOM.navLinks) return;
    DOM.navLinks.forEach(link => {
        const target = link.getAttribute('data-target');
        if (target === 'home' && AppState.currentView === 'home') {
            link.classList.add('active');
        } else if (target === AppState.currentLevel && AppState.currentView !== 'home') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function selectLevel(level) {
    AppState.currentLevel = level;
    AppState.currentYear = null;
    AppState.currentStream = null;
    AppState.currentSubject = null;
    
    const dbLevel = EDUCATION_DB[level];
    if (DOM.titles.levelDetail) DOM.titles.levelDetail.textContent = dbLevel.title;
    
    if (DOM.yearsGridContainer) {
        DOM.yearsGridContainer.innerHTML = '';
        Object.keys(dbLevel.years).forEach(yearKey => {
            const yearData = dbLevel.years[yearKey];
            const card = document.createElement('div');
            card.className = 'year-item-card';
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.innerHTML = `
                <h4>${yearData.title}</h4>
                <span class="year-item-arrow">←</span>
            `;
            card.addEventListener('click', () => {
                selectYear(yearKey);
            });
            DOM.yearsGridContainer.appendChild(card);
        });
    }
    
    switchView('level-detail');
}

function selectYear(year) {
    AppState.currentYear = year;
    if (AppState.currentLevel === 'secondary') {
        goToStreams(year);
    } else {
        goToSubjects(year, null);
    }
}

function goToStreams(year) {
    AppState.currentStream = null;
    const levelData = EDUCATION_DB.secondary;
    const yearData = levelData.years[year];
    
    if (DOM.titles.streams) DOM.titles.streams.textContent = `${yearData.title}`;
    
    if (DOM.streamsGridContainer) {
        DOM.streamsGridContainer.innerHTML = '';
        Object.keys(yearData.streams).forEach(streamKey => {
            const streamData = yearData.streams[streamKey];
            const card = document.createElement('div');
            card.className = 'stream-item-card';
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.innerHTML = `
                <h4>${streamData.title}</h4>
                <span class="stream-item-arrow">←</span>
            `;
            card.addEventListener('click', () => {
                goToSubjects(year, streamKey);
            });
            DOM.streamsGridContainer.appendChild(card);
        });
    }
    
    switchView('secondary-streams');
}

function goToSubjects(year, stream) {
    AppState.currentYear = year;
    AppState.currentStream = stream;
    AppState.currentSubject = null;
    
    let yearTitle = "";
    let subjects = [];
    
    if (AppState.currentLevel === 'secondary') {
        const yearData = EDUCATION_DB.secondary.years[year];
        const streamData = yearData.streams[stream];
        yearTitle = `${yearData.title} - ${streamData.title}`;
        subjects = streamData.subjects;
    } else {
        const yearData = EDUCATION_DB[AppState.currentLevel].years[year];
        yearTitle = yearData.title;
        subjects = yearData.subjects;
    }
    
    if (DOM.titles.subjects) DOM.titles.subjects.textContent = `مواد ${yearTitle}`;
    
    if (DOM.subjectsGridContainer) {
        DOM.subjectsGridContainer.innerHTML = '';
        subjects.forEach(subj => {
            const card = document.createElement('div');
            card.className = 'subject-card';
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            const firstLetter = subj.name.charAt(0);
            card.innerHTML = `
                <div class="subject-card-icon">${firstLetter}</div>
                <h4>${subj.name}</h4>
            `;
            card.addEventListener('click', () => {
                selectSubject(subj.id, subj.name);
            });
            DOM.subjectsGridContainer.appendChild(card);
        });
    }
    
    switchView('subjects');
}

function selectSubject(subjectId, subjectName) {
    AppState.currentSubject = subjectId;
    let yearData = EDUCATION_DB[AppState.currentLevel].years[AppState.currentYear];
    let yearTitle = yearData.title;
    
    if (DOM.titles.examsList) {
        if (AppState.currentLevel === 'secondary') {
            const streamTitle = yearData.streams[AppState.currentStream].title;
            DOM.titles.examsList.textContent = `${subjectName} - ${yearTitle} (${streamTitle})`;
        } else {
            DOM.titles.examsList.textContent = `${subjectName} - ${yearTitle}`;
        }
    }
    
    renderExamsTable();
    switchView('exams-list');
}

function renderExamsTable() {
    if (!DOM.examsTableBody) return;
    DOM.examsTableBody.innerHTML = '';
    
    const filteredExams = EXAMS_DATA.filter(exam => {
        return exam.level === AppState.currentLevel &&
               exam.year === AppState.currentYear &&
               exam.stream === AppState.currentStream &&
               exam.subject === AppState.currentSubject &&
               exam.term === AppState.currentTerm;
    });
    
    const tableEl = document.querySelector('.exams-table');
    
    if (filteredExams.length === 0) {
        if (DOM.examsEmptyState) DOM.examsEmptyState.style.display = 'block';
        if (tableEl) tableEl.style.display = 'none';
    } else {
        if (DOM.examsEmptyState) DOM.examsEmptyState.style.display = 'none';
        if (tableEl) tableEl.style.display = 'table';
        
        filteredExams.forEach(exam => {
            const tr = document.createElement('tr');
            const termBadgeClass = `term-badge badge-${exam.term}`;
            const termLabel = `الفصل ${exam.term === 1 ? 'الأول' : exam.term === 2 ? 'الثاني' : 'الثالث'}`;
            
            tr.innerHTML = `
                <td><strong>${exam.title}</strong></td>
                <td><span class="${termBadgeClass}">${termLabel}</span></td>
                <td>
                    <button class="btn btn-secondary btn-preview-pdf" data-title="${exam.title}" data-url="${exam.examUrl}">
                        👁️ معاينة الموضوع
                    </button>
                </td>
                <td>
                    <a href="${exam.examUrl}" class="btn btn-primary" target="_blank" download>
                        📥 تحميل الموضوع (PDF)
                    </a>
                </td>
                <td>
                    <a href="${exam.solutionUrl}" class="btn btn-accent" target="_blank" download>
                        ✅ الحل النموذجي
                    </a>
                </td>
            `;
            
            tr.querySelector('.btn-preview-pdf').addEventListener('click', (e) => {
                const title = e.currentTarget.getAttribute('data-title');
                const url = e.currentTarget.getAttribute('data-url');
                openPDFPreview(title, url);
            });
            
            DOM.examsTableBody.appendChild(tr);
        });
    }
}

// ==========================================================================
// 7. SEARCH & BREADCRUMBS LOGIC
// ==========================================================================

function performSearch() {
    if (!DOM.searchInput || !DOM.searchResultsContainer) return;
    const query = DOM.searchInput.value.trim().toLowerCase();
    if (!query) return;
    
    AppState.searchQuery = query;
    if (DOM.searchKeyword) DOM.searchKeyword.textContent = `"${query}"`;
    DOM.searchResultsContainer.innerHTML = '';
    
    const matches = EXAMS_DATA.filter(exam => {
        let subjectName = "";
        let levelTitle = "";
        let yearTitle = "";
        
        try {
            levelTitle = EDUCATION_DB[exam.level].title;
            const yearObj = EDUCATION_DB[exam.level].years[exam.year];
            yearTitle = yearObj.title;
            
            if (exam.level === 'secondary') {
                const streamObj = yearObj.streams[exam.stream];
                subjectName = streamObj.subjects.find(s => s.id === exam.subject).name;
            } else {
                subjectName = yearObj.subjects.find(s => s.id === exam.subject).name;
            }
        } catch(e) {
            subjectName = "";
        }

        const matchTitle = exam.title.toLowerCase().includes(query);
        const matchSubject = subjectName.toLowerCase().includes(query);
        const matchLevel = levelTitle.toLowerCase().includes(query);
        const matchYear = yearTitle.toLowerCase().includes(query);
        
        return matchTitle || matchSubject || matchLevel || matchYear;
    });
    
    if (DOM.searchCount) DOM.searchCount.textContent = matches.length;
    
    if (matches.length === 0) {
        DOM.searchResultsContainer.innerHTML = `
            <div class="empty-state-container">
                <svg class="empty-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="currentColor"/>
                </svg>
                <p>لم نجد أي نتائج تطابق بحثك.</p>
                <small>حاول استخدام كلمات مفتاحية أخرى، مثل: "رياضيات رابعة متوسط".</small>
            </div>
        `;
    } else {
        matches.forEach(exam => {
            const item = document.createElement('div');
            item.className = 'search-result-item';
            let pathText = "";
            try {
                const lvlName = EDUCATION_DB[exam.level].title;
                const yrName = EDUCATION_DB[exam.level].years[exam.year].title;
                pathText = `${lvlName} > ${yrName}`;
                if (exam.stream) {
                    const stName = EDUCATION_DB[exam.level].years[exam.year].streams[exam.stream].title;
                    pathText += ` (${stName})`;
                }
            } catch(e) {
                pathText = "ملف عام";
            }
            
            item.innerHTML = `
                <div class="result-info">
                    <span class="result-path">📌 ${pathText}</span>
                    <h3 class="result-title">${exam.title}</h3>
                </div>
                <div class="result-actions">
                    <button class="btn btn-secondary btn-preview-pdf" data-title="${exam.title}" data-url="${exam.examUrl}">👁️ معاينة</button>
                    <a href="${exam.examUrl}" class="btn btn-primary" target="_blank" download>📥 تحميل الفرض</a>
                    <a href="${exam.solutionUrl}" class="btn btn-accent" target="_blank" download>✅ الحل النموذجي</a>
                </div>
            `;
            
            item.querySelector('.btn-preview-pdf').addEventListener('click', (e) => {
                const title = e.currentTarget.getAttribute('data-title');
                const url = e.currentTarget.getAttribute('data-url');
                openPDFPreview(title, url);
            });
            
            DOM.searchResultsContainer.appendChild(item);
        });
    }
    
    switchView('search-results');
}

function updateBreadcrumbs() {
    if (!DOM.breadcrumbs) return;
    DOM.breadcrumbs.innerHTML = '';
    
    const homeCrumb = document.createElement('span');
    homeCrumb.className = 'breadcrumb-item';
    homeCrumb.textContent = 'الرئيسية';
    homeCrumb.addEventListener('click', () => {
        resetState();
        switchView('home');
    });
    DOM.breadcrumbs.appendChild(homeCrumb);
    
    if (AppState.currentView === 'home') {
        homeCrumb.className = 'current';
        return;
    }
    
    if (AppState.currentLevel) {
        addBreadcrumbSeparator();
        const levelName = EDUCATION_DB[AppState.currentLevel].title;
        const levelCrumb = document.createElement('span');
        if (AppState.currentView === 'level-detail') {
            levelCrumb.className = 'current';
            levelCrumb.textContent = levelName;
        } else {
            levelCrumb.className = 'breadcrumb-item';
            levelCrumb.textContent = levelName;
            levelCrumb.addEventListener('click', () => {
                selectLevel(AppState.currentLevel);
            });
        }
        DOM.breadcrumbs.appendChild(levelCrumb);
    }
    
    if (AppState.currentYear) {
        addBreadcrumbSeparator();
        const yearName = EDUCATION_DB[AppState.currentLevel].years[AppState.currentYear].title;
        const yearCrumb = document.createElement('span');
        if (AppState.currentView === 'secondary-streams') {
            yearCrumb.className = 'current';
            yearCrumb.textContent = yearName;
        } else {
            yearCrumb.className = 'breadcrumb-item';
            yearCrumb.textContent = yearName;
            yearCrumb.addEventListener('click', () => {
                selectYear(AppState.currentYear);
            });
        }
        DOM.breadcrumbs.appendChild(yearCrumb);
    }

    if (AppState.currentStream) {
        addBreadcrumbSeparator();
        const streamName = EDUCATION_DB[AppState.currentLevel].years[AppState.currentYear].streams[AppState.currentStream].title;
        const streamCrumb = document.createElement('span');
        if (AppState.currentView === 'subjects') {
            streamCrumb.className = 'current';
            streamCrumb.textContent = streamName;
        } else {
            streamCrumb.className = 'breadcrumb-item';
            streamCrumb.textContent = streamName;
            streamCrumb.addEventListener('click', () => {
                goToSubjects(AppState.currentYear, AppState.currentStream);
            });
        }
        DOM.breadcrumbs.appendChild(streamCrumb);
    }

    if (AppState.currentSubject) {
        addBreadcrumbSeparator();
        let subName = "";
        try {
            const yrObj = EDUCATION_DB[AppState.currentLevel].years[AppState.currentYear];
            if (AppState.currentLevel === 'secondary') {
                subName = yrObj.streams[AppState.currentStream].subjects.find(s => s.id === AppState.currentSubject).name;
            } else {
                subName = yrObj.subjects.find(s => s.id === AppState.currentSubject).name;
            }
        } catch(e) {
            subName = "المادة";
        }
        const subCrumb = document.createElement('span');
        subCrumb.className = 'current';
        subCrumb.textContent = subName;
        DOM.breadcrumbs.appendChild(subCrumb);
    }

    if (AppState.currentView === 'search-results') {
        addBreadcrumbSeparator();
        const searchCrumb = document.createElement('span');
        searchCrumb.className = 'current';
        searchCrumb.textContent = `بحث: ${AppState.searchQuery}`;
        DOM.breadcrumbs.appendChild(searchCrumb);
    }
}

function addBreadcrumbSeparator() {
    if (!DOM.breadcrumbs) return;
    const sep = document.createElement('span');
    sep.className = 'separator';
    sep.textContent = ' > ';
    DOM.breadcrumbs.appendChild(sep);
}

// ==========================================================================
// 8. MODAL INTERACTIVE LOGIC
// ==========================================================================

function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('active');
    modalEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeAllModals() {
    Object.keys(DOM.modals).forEach(key => {
        const modal = DOM.modals[key];
        if (modal) {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
        }
    });
    
    const iframe = document.getElementById('pdf-preview-iframe');
    if (iframe) {
        iframe.src = "";
        iframe.style.display = "none";
    }
    const simulator = document.getElementById('pdf-simulator');
    if (simulator) simulator.style.display = "flex";
    
    document.body.style.overflow = '';
}

function openPDFPreview(title, downloadUrl) {
    if (DOM.pdfModalTitle) DOM.pdfModalTitle.textContent = `معاينة: ${title}`;
    if (DOM.pdfSimTitle) DOM.pdfSimTitle.textContent = title.length > 40 ? title.substring(0, 37) + '...' : title;
    if (DOM.pdfModalDownloadBtn) DOM.pdfModalDownloadBtn.href = downloadUrl;
    
    openModal(DOM.modals.pdfPreview);
}

function handleContactFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    
    const alertEl = DOM.contactFormAlert;
    if (!alertEl) return;
    
    alertEl.style.display = 'block';
    
    if (!name || !email || !subject || !message) {
        alertEl.className = 'form-alert error';
        alertEl.textContent = '⚠️ الرجاء ملء جميع الحقول المطلوبة.';
        return;
    }
    
    const submitBtn = document.getElementById('contact-submit-btn');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'جاري الإرسال...';
    }
    
    setTimeout(() => {
        alertEl.className = 'form-alert success';
        alertEl.textContent = '✅ تم إرسال رسالتك بنجاح! سنقوم بالرد عليك في أقرب وقت ممكن.';
        
        if (DOM.contactForm) DOM.contactForm.reset();
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'إرسال الرسالة';
        }
        
        setTimeout(() => {
            closeAllModals();
            alertEl.style.display = 'none';
        }, 3000);
        
    }, 1500);
}

// ==========================================================================
// 9. THEME & MOBILE MENUS
// ==========================================================================

function setupTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.className = 'dark-mode';
    } else {
        document.body.className = 'light-mode';
    }
}

function toggleTheme() {
    if (document.body.classList.contains('dark-mode')) {
        document.body.className = 'light-mode';
        localStorage.setItem('theme', 'light');
    } else {
        document.body.className = 'dark-mode';
        localStorage.setItem('theme', 'dark');
    }
}

function toggleMobileMenu() {
    if (DOM.menuToggleBtn) DOM.menuToggleBtn.classList.toggle('open');
    if (DOM.navMenu) DOM.navMenu.classList.toggle('open');
}

function closeMobileMenu() {
    if (DOM.menuToggleBtn) DOM.menuToggleBtn.classList.remove('open');
    if (DOM.navMenu) DOM.navMenu.classList.remove('open');
}

// ==========================================================================
// 10. NOOR AI CHATBOT SYSTEM LOGIC
// ==========================================================================

function toggleNoorChat() {
    if (!DOM.noorChatPanel) return;
    const isActive = DOM.noorChatPanel.classList.contains('active');
    if (isActive) {
        closeNoorChat();
    } else {
        DOM.noorChatPanel.classList.add('active');
        DOM.noorChatPanel.setAttribute('aria-hidden', 'false');
        triggerNoorContextGreeting();
    }
}

function closeNoorChat() {
    if (DOM.noorChatPanel) {
        DOM.noorChatPanel.classList.remove('active');
        DOM.noorChatPanel.setAttribute('aria-hidden', 'true');
    }
}

function setupNoorSuggestions() {
    if (!DOM.noorSuggestionsContainer) return;
    const chips = DOM.noorSuggestionsContainer.querySelectorAll('.noor-suggest-chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            const msg = chip.getAttribute('data-msg');
            sendUserMessage(msg);
            processNoorResponse(msg);
        });
    });
}

function sendUserMessage(text) {
    if (!DOM.noorChatMessages) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = 'noor-message noor-user';
    msgDiv.innerHTML = `<div class="message-content">${text}</div>`;
    DOM.noorChatMessages.appendChild(msgDiv);
    DOM.noorChatMessages.scrollTop = DOM.noorChatMessages.scrollHeight;
}

function showNoorTypingIndicator() {
    if (!DOM.noorChatMessages) return null;
    const indicator = document.createElement('div');
    indicator.className = 'noor-message noor-bot noor-indicator-msg';
    indicator.innerHTML = `
        <div class="noor-typing-indicator">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;
    DOM.noorChatMessages.appendChild(indicator);
    DOM.noorChatMessages.scrollTop = DOM.noorChatMessages.scrollHeight;
    return indicator;
}

function removeNoorTypingIndicator(indicatorEl) {
    if (indicatorEl) {
        indicatorEl.remove();
    }
}

function sendNoorBotMessage(text) {
    if (!DOM.noorChatMessages) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = 'noor-message noor-bot';
    let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formattedText = formattedText.replace(/\n/g, '<br>');
    msgDiv.innerHTML = `<div class="message-content">${formattedText}</div>`;
    DOM.noorChatMessages.appendChild(msgDiv);
    DOM.noorChatMessages.scrollTop = DOM.noorChatMessages.scrollHeight;
}

function processNoorResponse(userText) {
    const text = userText.toLowerCase().trim();
    const indicator = showNoorTypingIndicator();
    
    setTimeout(() => {
        removeNoorTypingIndicator(indicator);
        let response = "";
        
        if (text.includes("بكالوريا") || text.includes("باك") || text.includes("bac")) {
            response = "لتحقيق النجاح في **شهادة البكالوريا (BAC)**، أنصحك بالآتي:\n\n" +
                       "1. **تنظيم الوقت**: خصص 4 إلى 5 ساعات يومية للمراجعة مع فترات راحة قصيرة.\n" +
                       "2. **حل الحوليات السابقة**: قم بحل امتحانات البكالوريا الرسمية المتاحة على منصتنا.\n" +
                       "3. **التركيز على المعاملات**: ركز على المواد الأساسية لشعبتك دون إهمال المواد الثانوية.";
        } 
        else if (text.includes("بيام") || text.includes("bem") || text.includes("متوسط")) {
            response = "التحضير لشهادة **التعليم المتوسط (BEM)** يتطلب خطوات ذكية:\n\n" +
                       "- ابدأ بمراجعة المفاهيم الأساسية في الرياضيات والفيزياء.\n" +
                       "- تصفح قسم **التعليم المتوسط** في الموقع وحمّل فروض الفصول مع حلولها المعتمدة وزارياً.";
        }
        else if (text.includes("رياضيات") || text.includes("تمرين رياضيات") || text.includes("معادلة")) {
            response = "مرحباً! لحل أي تمرين في **الرياضيات**، اتبع هذه المنهجية العامة:\n\n" +
                       "1. **اقرأ المعطيات جيداً** وحدد القوانين المرتبطة.\n" +
                       "2. **الخطوة التفصيلية**: إذا كانت معادلة من الدرجة الثانية $ax^2 + bx + c = 0$، احسب المميز ديلتا:\n" +
                       "   **Δ = b² - 4ac**\n" +
                       "   - إذا كان Δ > 0: للمعادلة حلين متميزين.\n" +
                       "   - إذا كان Δ = 0: حل مضاعف.\n" +
                       "   - إذا كان Δ < 0: لا توجد حلول حقيقية.";
        }
        else if (text.includes("فيزياء") || text.includes("تمرين فيزياء")) {
            response = "في مادة **العلوم الفيزيائية**، السر يكمن في فهم الوحدات والقوانين!\n\n" +
                       "تأكد دائماً من تحويل الوحدات إلى الجملة الدولية (مثل تحويل الحجم إلى اللتر، والكتلة إلى الغرام أو الكيلوغرام).\n" +
                       "اكتب التمرين أو ارفع صورته، وسأساعدك في تطبيق القانون المناسب.";
        }
        else if (text.includes("جدول") || text.includes("مراجعة") || text.includes("وقت")) {
            response = "إليك مقترح **جدول مراجعة يومي** متوازن:\n\n" +
                       "- **الصباح الباكر (05:00 - 07:00)**: حفظ المواد الأدبية.\n" +
                       "- **المساء (16:00 - 19:00)**: حل تمارين المواد العلمية.\n" +
                       "- **الليل (20:00 - 21:30)**: مراجعة اللغات وحل مواضيع قصيرة.";
        }
        else if (text.includes("سلام") || text.includes("مرحبا") || text.includes("اهلين")) {
            response = "أهلاً بك يا بطل! 👋 أنا نور، مساعدتك الذكية لمرافقتك في رحلتك الدراسية بالجزائر.\n" +
                       "أنا هنا لمساعدتك في فهم الدروس وحل التمارين. ما هو الطور أو المادة التي تدرسها حالياً؟";
        }
        else {
            let contextText = "";
            if (AppState.currentLevel && AppState.currentYear) {
                const lvlTitle = EDUCATION_DB[AppState.currentLevel].title;
                const yrTitle = EDUCATION_DB[AppState.currentLevel].years[AppState.currentYear].title;
                contextText = `بما أنك تتصفح حالياً **${lvlTitle} - ${yrTitle}**، `;
            }
            response = `سؤال جميل جداً! ${contextText}دعني أساعدك في حله:\n\n` +
                       "لكي نقوم بحل هذا التمرين بشكل صحيح، يرجى تزويدي بالمعطيات بدقة، أو كتابة نص السؤال بالتفصيل.\n\n" +
                       "💡 **نصيحة**: يمكنك أيضاً الضغط على زر الكاميرا (📷) بالأسفل لرفع صورة التمرين مباشرة وسأقوم بتحليلها!";
        }
        
        sendNoorBotMessage(response);
    }, 1200);
}

function triggerNoorContextGreeting() {
    if (!DOM.noorChatMessages) return;
    const messagesCount = DOM.noorChatMessages.querySelectorAll('.noor-message').length;
    if (messagesCount > 1) return;
    
    if (AppState.currentLevel && AppState.currentYear && AppState.currentSubject) {
        let yrTitle = EDUCATION_DB[AppState.currentLevel].years[AppState.currentYear].title;
        let subName = "";
        try {
            const yrObj = EDUCATION_DB[AppState.currentLevel].years[AppState.currentYear];
            if (AppState.currentLevel === 'secondary') {
                subName = yrObj.streams[AppState.currentStream].subjects.find(s => s.id === AppState.currentSubject).name;
            } else {
                subName = yrObj.subjects.find(s => s.id === AppState.currentSubject).name;
            }
        } catch(e) {
            subName = "";
        }
        
        if (subName) {
            const indicator = showNoorTypingIndicator();
            setTimeout(() => {
                removeNoorTypingIndicator(indicator);
                sendNoorBotMessage(
                    `رائع! أراك تتصفح امتحانات **مادة ${subName}** لـ **${yrTitle}**. 📚\n` +
                    `هل تواجه صعوبة في فهم تمرين معين في هذه المادة؟ اكتبه لي هنا وسنقوم بحله معاً خطوة بخطوة!`
                );
            }, 800);
        }
    }
}

function handleNoorChatSubmit(e) {
    e.preventDefault();
    if (!DOM.noorChatInput) return;
    const text = DOM.noorChatInput.value.trim();
    if (!text) return;
    
    DOM.noorChatInput.value = "";
    sendUserMessage(text);
    processNoorResponse(text);
}

function handleNoorImageUpload(e) {
    const file = e.target.files[0];
    if (!file || !DOM.noorChatMessages) return;
    
    const imageCardDiv = document.createElement('div');
    imageCardDiv.className = 'noor-message noor-user';
    imageCardDiv.innerHTML = `
        <div class="message-content">
            <div class="mock-image-preview-card">
                <span class="mock-image-name">📷 تم رفع صورة التمرين:</span>
                <small class="mock-image-badge">${file.name} (${Math.round(file.size / 1024)} KB)</small>
            </div>
        </div>
    `;
    DOM.noorChatMessages.appendChild(imageCardDiv);
    DOM.noorChatMessages.scrollTop = DOM.noorChatMessages.scrollHeight;
    
    const indicator = showNoorTypingIndicator();
    
    setTimeout(() => {
        removeNoorTypingIndicator(indicator);
        let solvedText = "";
        let currentSubjectText = "الرياضيات";
        if (AppState.currentSubject === 'physics') {
            currentSubjectText = "العلوم الفيزيائية";
        } else if (AppState.currentSubject === 'sciences') {
            currentSubjectText = "العلوم الطبيعية";
        }
        
        solvedText = `🔍 **تم مسح الصورة ضوئياً بنجاح!**\n\n` +
                     `لقد قمت بتحليل نص التمرين المكتوب في مادة **${currentSubjectText}**، وإليك تفكيك وتحليل خطوات الحل المقترحة:\n\n` +
                     `1️⃣ **تحليل المعطيات**: الصورة تحتوي على معادلة/مسألة نموذجية.\n\n` +
                     `2️⃣ **خطوة الحل الأولى**: نبسط العبارة الجبرية أو نقوم بكتابة العلاقة الفيزيائية المباشرة.\n\n` +
                     `3️⃣ **التطبيق العددي**: نعوض القيم المعطاة في القانون للوصول إلى النتيجة النهائية وتحديد الوحدات.\n\n` +
                     `💡 **توجيه**: لمطابقة الحل بالكامل، أنصحك بتحميل موضوع الامتحان المقابل المتوفر في الجدول خلف هذه النافذة والاطلاع على **الحل النموذجي المعتمد**!`;
                     
        sendNoorBotMessage(solvedText);
        if (DOM.noorImageUpload) DOM.noorImageUpload.value = "";
    }, 2500);
}

// ==========================================================================
// 11. OFFICIAL EXAMS & RESULTS COUNTDOWNS LOGIC
// ==========================================================================

const EXAM_DATES_2026 = {
    // 0-indexed months: 5 = June, 6 = July
    bemResults: new Date(2026, 5, 25, 16, 0, 0).getTime(),
    bacExamsStart: new Date(2026, 5, 7, 8, 0, 0).getTime(),
    bacResults: new Date(2026, 6, 15, 16, 0, 0).getTime()
};

let countdownInterval = null;

function initCountdowns() {
    if (!DOM.bacDays || !DOM.bemDays) return;
    updateAllCountdowns();
    countdownInterval = setInterval(updateAllCountdowns, 1000);
}

function updateAllCountdowns() {
    const now = new Date().getTime();
    
    // BEM Countdown (results only)
    const bemDiff = EXAM_DATES_2026.bemResults - now;
    if (bemDiff > 0) {
        if (DOM.bemStatusLabel) DOM.bemStatusLabel.textContent = "متبقي على إعلان نتائج شهادة التعليم المتوسط (BEM):";
        renderTimerValues(bemDiff, DOM.bemDays, DOM.bemHours, DOM.bemMinutes, DOM.bemSeconds);
    } else {
        if (DOM.bemStatusLabel) DOM.bemStatusLabel.textContent = "🎉 تم إعلان نتائج التعليم المتوسط! مبارك للجميع.";
        zeroTimerValues(DOM.bemDays, DOM.bemHours, DOM.bemMinutes, DOM.bemSeconds);
    }
    
    // BAC Countdown (exams start or results countdown)
    const bacExamsDiff = EXAM_DATES_2026.bacExamsStart - now;
    if (bacExamsDiff > 0) {
        if (DOM.bacStatusLabel) DOM.bacStatusLabel.textContent = "متبقي على انطلاق امتحانات البكالوريا (BAC):";
        renderTimerValues(bacExamsDiff, DOM.bacDays, DOM.bacHours, DOM.bacMinutes, DOM.bacSeconds);
    } else {
        const bacResultsDiff = EXAM_DATES_2026.bacResults - now;
        if (bacResultsDiff > 0) {
            if (DOM.bacStatusLabel) DOM.bacStatusLabel.textContent = "🇩🇿 امتحانات البكالوريا جارية الآن! متبقي على إعلان النتائج:";
            renderTimerValues(bacResultsDiff, DOM.bacDays, DOM.bacHours, DOM.bacMinutes, DOM.bacSeconds);
        } else {
            if (DOM.bacStatusLabel) DOM.bacStatusLabel.textContent = "🎉 تم إعلان نتائج شهادة البكالوريا! مبارك للناجحين.";
            zeroTimerValues(DOM.bacDays, DOM.bacHours, DOM.bacMinutes, DOM.bacSeconds);
        }
    }
}

function renderTimerValues(diffMs, daysEl, hoursEl, minutesEl, secondsEl) {
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
    
    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
}

function zeroTimerValues(daysEl, hoursEl, minutesEl, secondsEl) {
    if (daysEl) daysEl.textContent = "00";
    if (hoursEl) hoursEl.textContent = "00";
    if (minutesEl) minutesEl.textContent = "00";
    if (secondsEl) secondsEl.textContent = "00";
}

// Start app on DOM Ready
document.addEventListener('DOMContentLoaded', initApp);
