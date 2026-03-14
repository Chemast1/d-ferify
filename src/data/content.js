// ─────────────────────────────────────────────────────────────
//  D-Verify  |  Trilingual Content  (EN / AR / RU)
//  Version: 2.0  |  Status: CONCEPT PROPOSAL — 2026
// ─────────────────────────────────────────────────────────────

export const CONTENT = {
  /* ══════════════════════════════════════════════════════════  ENGLISH  ══ */
  en: {
    dir: "ltr",
    font: "'Barlow', sans-serif",
    nav: {
      brand: "D-VERIFY",
      proposalBadge: "CONCEPT PROPOSAL · 2026",
      links: ["Threat Landscape", "Methodology", "Architecture", "Briefing"],
    },
    ticker: [
      "⚡ SCENARIO — TH-2026-0891: Fabricated USDT claim · Proposed response time: 14 min",
      "🛡 Target monitoring capacity: 50,000+ sources across 38 languages",
      "◎ GDMO verification pipeline: PROPOSED INTEGRATION",
      "🔴 Demo: 3 active threat scenarios available for review",
      "📡 Dubai Police Digital Crime Unit: TARGET INTEGRATION",
      "⚡ SCENARIO — State-sponsored bot-network amplification · Detection model active",
    ],
    hero: {
      badge: "CONCEPT PROPOSAL FOR GDMO",
      title: "The Shield of",
      titleAccent: "Dubai's Narrative",
      subtitle:
        "A proposed AI-powered platform for real-time misinformation detection, community-driven verification, and government-grade counter-intelligence — engineered to protect Dubai's reputation from state-sponsored and coordinated disinformation at scale.",
      cta1: "Request Briefing",
      cta2: "Explore Scenarios",
      stat1: { value: "50K+", label: "Sources · Target Capacity" },
      stat2: { value: "99.7%", label: "Detection Accuracy · Projected" },
      stat3: { value: "<90s", label: "Response Time · Target" },
      statNote: "All figures represent projected system capacity upon full deployment.",
    },
    whyNow: {
      badge: "WHY THIS · WHY NOW",
      title: "The Threat Is",
      titleAccent: "Escalating",
      subtitle:
        "Dubai's global standing, economic leadership, and governmental credibility are under coordinated digital attack. The window to act is narrow — and the cost of inaction is measured in narrative, not money.",
      urgencyLabel: "ACTIVE THREAT VECTOR",
      threats: [
        {
          icon: "radio",
          origin: "State-Sponsored Operations",
          title: "Coordinated Disinformation Campaigns",
          desc: "Documented campaigns originating from state-linked networks systematically target UAE institutions, Dubai financial markets, and government credibility — deploying AI-generated content, fake whistleblowers, and fabricated financial records designed to look credible to Western audiences.",
          severity: "CRITICAL",
          trend: "+340% since Q3 2025",
        },
        {
          icon: "trending",
          origin: "Clout-Chasing Networks",
          title: "Influencer Fabrication Economy",
          desc: "A growing ecosystem of paid disinformation actors manufactures viral false claims — such as fabricated multi-million dollar government 'cover-up' payments — designed to spread before any official denial can reach the same audience.",
          severity: "HIGH",
          trend: "+180% since Q4 2025",
        },
        {
          icon: "zap",
          origin: "Platform Velocity",
          title: "The 6-Hour Window Problem",
          desc: "Research confirms: a false narrative reaches maximum viral saturation within 6 hours of publication. Government communications cycles typically take 24–72 hours to respond. D-Verify is designed to close this gap to under 90 seconds.",
          severity: "STRUCTURAL",
          trend: "0 dedicated solutions in MENA",
        },
      ],
      closingLine:
        "Dubai needs a dedicated, sovereign, real-time counter-narrative infrastructure. D-Verify is that infrastructure.",
    },
    threat: {
      badge: "THREAT SCENARIOS · DEMO",
      title: "Detection",
      titleAccent: "Command Center",
      subtitle:
        "The following scenarios illustrate how D-Verify would detect, classify, and neutralize real disinformation campaigns targeting Dubai. These are representative examples of documented threat patterns.",
      demoNote: "DEMO SCENARIOS — Illustrative of real, documented threat patterns",
      levelLabel: "FABRICATION LEVEL",
      statusNeutralized: "NEUTRALIZED",
      statusMonitoring: "MONITORING",
      statusAnalyzing: "ANALYZING",
      expandHint: "Click to expand",
      cards: [
        {
          id: "TH-2026-0891",
          level: 5,
          title: "Fabricated USDT Payment Claim",
          desc: "False claim: '$2.5M USDT payment to Dr. Axius to suppress negative PR campaign against Dubai officials.' Source traced to coordinated inauthentic behavior network operating across multiple jurisdictions. Zero blockchain evidence. No transaction hash. All wallet addresses non-existent. OSINT cross-check: confirmed fabrication within 11 minutes.",
          source: "Multi-platform coordinated · 3 jurisdictions",
          time: "Proposed response: 14 min",
          status: "neutralized",
          tag: "Financial Fabrication",
          debunk:
            "No transaction exists on any public blockchain. All referenced wallet addresses return zero balance and zero history. IP cluster analysis confirms coordinated origin network.",
        },
        {
          id: "TH-2026-0887",
          level: 3,
          title: "Synthetic Influencer Amplification",
          desc: "State-linked bot network deploying AI-generated influencer personas to spread false narratives about Dubai's real estate regulatory framework. Pattern consistent with documented state-actor IO playbook. 847 accounts identified, 612 flagged for platform removal.",
          source: "X (Twitter) / TikTok · State-linked",
          time: "Proposed response: 38 min",
          status: "monitoring",
          tag: "Influence Operation",
          debunk:
            "Accounts flagged via behavioral clustering and cross-platform identity analysis. Average account age: 11 days. Posting intervals: automated regularity. Infrastructure overlaps with previously documented threat actors.",
        },
        {
          id: "TH-2026-0882",
          level: 2,
          title: "Deepfake Government Document",
          desc: "Manipulated document falsely attributing an economic policy statement to a senior GDMO official. Distributed via Telegram channels with documented state-linked amplification. Metadata analysis confirmed fabrication within 22 minutes of first detection.",
          source: "Telegram · Cross-posted to 14 channels",
          time: "Proposed response: 22 min",
          status: "neutralized",
          tag: "Document Forgery",
          debunk:
            "EXIF metadata shows creation date mismatch of 19 days. Font analysis vs official GDMO typography standards confirms forgery. Distribution network overlaps with previously documented IO infrastructure.",
        },
      ],
    },
    engine: {
      badge: "HUMAN-CENTRIC METHODOLOGY",
      title: "The Community",
      titleAccent: "Digital Reserve",
      subtitle:
        "Algorithms alone cannot defeat coordinated human disinformation. Our founder's 10+ years building large-scale Social Infrastructure — from Student Community Management in Moscow to Vocational Training and Driving School Systems — produced a proven framework for mobilizing communities as a defense layer that no AI can replicate.",
      founderLabel: "FOUNDER'S TRACK RECORD",
      founderSub: "10+ years · Large-scale Social Infrastructure · Moscow → Dubai",
      steps: [
        {
          num: "01",
          title: "Resident Network Activation",
          desc: "A vetted Digital Reserve of Dubai residents, trained in media literacy and coordinated through our platform to provide on-ground, first-hand verification — the human layer no synthetic actor can fake.",
        },
        {
          num: "02",
          title: "AI Pre-Screening Layer",
          desc: "Machine learning models cross-reference claims against 200+ government databases before human reviewers engage — ensuring only credible threats escalate and zero false positives reach officials.",
        },
        {
          num: "03",
          title: "Institutional Memory Graph",
          desc: "Every neutralized threat enriches a growing knowledge graph, mapping disinformation actors, tactics, and networks — making D-Verify exponentially more effective with every operation.",
        },
        {
          num: "04",
          title: "Sovereign Counter-Publish",
          desc: "Verified corrections distributed directly through GDMO, Dubai Police, and UAE Cybersecurity Council official channels — narrative correction at sovereign speed, not media-cycle speed.",
        },
      ],
    },
    pillars: {
      badge: "THREE PILLARS",
      title: "Integrated Defense",
      titleAccent: "Architecture",
      items: [
        {
          color: "cyan",
          subtitle: "Global Media Intelligence",
          title: "AI Surveillance",
          desc: "Continuous monitoring of 50,000+ media sources, social platforms, and dark-web forums in 38 languages. Threat patterns identified within milliseconds of emergence — before narratives reach viral velocity.",
          features: [
            "NLP-powered multilingual sentiment analysis",
            "Cross-platform behavioral clustering",
            "Dark web & Telegram signal tracking",
            "Real-time alert API to GDMO",
          ],
        },
        {
          color: "gold",
          subtitle: "Sovereign API Integration",
          title: "Government Liaison",
          desc: "Proposed direct encrypted API bridge to GDMO, Dubai Police Digital Crime Unit, and UAE Cybersecurity Council — enabling legally-backed, authoritative, timestamped responses that carry sovereign authority.",
          features: [
            "GDMO data verification pipeline",
            "Dubai Police coordination protocol",
            "Immutable blockchain evidence logging",
            "ISO 27001 & UAE data sovereignty compliant",
          ],
        },
        {
          color: "cyan",
          subtitle: "Community Defense Shield",
          title: "Public Awareness",
          desc: "Drawing from proven Social Infrastructure methodologies — media literacy programs, community verification networks, and digital citizenship curricula — building a population that is itself resistant to disinformation.",
          features: [
            "Arabic & English media literacy modules",
            "School, university & workplace programs",
            "Trained community ambassador network",
            "Gamified citizen verification platform",
          ],
        },
      ],
    },
    designedFor: {
      label: "DESIGNED FOR INTEGRATION WITH",
      logos: ["GDMO", "Dubai Police", "UAE Cybersecurity Council", "TRA UAE", "Dubai Media Office", "NCEMA"],
      note: "Proposed integrations — pending partnership agreement",
    },
    contact: {
      badge: "REQUEST A BRIEFING",
      title: "Schedule a",
      titleAccent: "Partnership Call",
      subtitle:
        "D-Verify is seeking a foundational government partner to move from concept to deployment. This portal is open to UAE Federal entities, Dubai Government departments, and licensed regulatory bodies.",
      form: {
        entity: "Entity Name",
        entityPh: "e.g., GDMO / Dubai Media Office",
        name: "Full Name & Title",
        namePh: "e.g., H.E. Director General",
        email: "Official Government Email",
        emailPh: "name@entity.gov.ae",
        reason: "Partnership Interest",
        reasonPh: "Describe your entity's interest, threat context, and preferred integration scope...",
        submit: "Request Secure Briefing",
        note: "All briefing requests are reviewed within 48 hours. This portal is monitored — unauthorized or frivolous submissions are logged.",
        successTitle: "Briefing Request Received",
        successSub:
          "Your request is under review. A member of the D-Verify team will contact you via your official email within 48 hours to schedule a secure presentation.",
      },
    },
    footer: {
      tagline: "Protecting the narrative of the future.",
      copy: "© 2026 D-Verify. A Concept Proposal for Cyber-Reputation Infrastructure. All rights reserved.",
      links: ["Concept Overview", "Security", "Contact"],
    },
  },

  /* ══════════════════════════════════════════════════════════  ARABIC  ══ */
  ar: {
    dir: "rtl",
    font: "'Cairo', sans-serif",
    nav: {
      brand: "د-فيريفاي",
      proposalBadge: "مقترح مفاهيمي · 2026",
      links: ["المشهد التهديدي", "المنهجية", "الهندسة المعمارية", "الإحاطة"],
    },
    ticker: [
      "⚡ سيناريو — TH-2026-0891: ادعاء USDT مزيف · وقت الاستجابة المقترح: 14 دقيقة",
      "🛡 الطاقة الاستيعابية المستهدفة: +50,000 مصدر بـ38 لغة",
      "◎ خط بيانات مكتب دبي الحكومي: تكامل مقترح",
      "🔴 عرض توضيحي: 3 سيناريوهات تهديد متاحة للمراجعة",
      "📡 شرطة دبي — وحدة الجرائم الرقمية: تكامل مستهدف",
      "⚡ سيناريو — شبكة بوتات برعاية حكومية · نموذج الكشف نشط",
    ],
    hero: {
      badge: "مقترح مفاهيمي لمكتب دبي الإعلامي",
      title: "درع",
      titleAccent: "رواية دبي",
      subtitle:
        "منصة مقترحة للكشف عن المعلومات المضللة في الوقت الفعلي بالذكاء الاصطناعي، والتحقق المجتمعي، وذكاء المواجهة على مستوى حكومي — مُصمَّمة لحماية سمعة دبي من حملات التضليل المنسقة والتي ترعاها الدول.",
      cta1: "طلب إحاطة",
      cta2: "استعراض السيناريوهات",
      stat1: { value: "+50K", label: "مصدر · الطاقة المستهدفة" },
      stat2: { value: "99.7%", label: "دقة الكشف · متوقعة" },
      stat3: { value: "<90ث", label: "وقت الاستجابة · مستهدف" },
      statNote: "جميع الأرقام تمثل الطاقة الاستيعابية المتوقعة للنظام عند الانتشار الكامل.",
    },
    whyNow: {
      badge: "لماذا الآن؟",
      title: "التهديد",
      titleAccent: "يتصاعد",
      subtitle:
        "المكانة العالمية لدبي وريادتها الاقتصادية ومصداقيتها الحكومية تتعرض لهجوم رقمي منسق. نافذة العمل ضيقة — وثمن التقاعس يُقاس بالرواية لا بالمال.",
      urgencyLabel: "ناقل تهديد نشط",
      threats: [
        {
          icon: "radio",
          origin: "عمليات برعاية حكومية",
          title: "حملات التضليل المنسق",
          desc: "حملات موثقة منبثقة من شبكات مرتبطة بالدولة تستهدف منهجياً المؤسسات الإماراتية والأسواق المالية في دبي ومصداقية الحكومة — تستخدم محتوى مولَّداً بالذكاء الاصطناعي، ومُبلِّغين مزيفين، وسجلات مالية ملفقة مصمَّمة لتبدو موثوقة للجمهور الغربي.",
          severity: "حرج",
          trend: "+340% منذ الربع الثالث 2025",
        },
        {
          icon: "trending",
          origin: "شبكات الشهرة الزائفة",
          title: "اقتصاد تلفيق المؤثرين",
          desc: "نظام بيئي متنامٍ من جهات التضليل المأجورة يصنع ادعاءات كاذبة فيروسية — كمدفوعات 'التعتيم' الحكومية المزيفة بملايين الدولارات — مصمَّمة للانتشار قبل أن يصل أي نفي رسمي إلى الجمهور ذاته.",
          severity: "عالٍ",
          trend: "+180% منذ الربع الرابع 2025",
        },
        {
          icon: "zap",
          origin: "سرعة المنصات الرقمية",
          title: "مشكلة نافذة الست ساعات",
          desc: "تؤكد الأبحاث: تبلغ الرواية الكاذبة ذروة الانتشار الفيروسي خلال 6 ساعات من نشرها. دورات الاتصال الحكومي تستغرق عادةً 24–72 ساعة للرد. D-Verify مُصمَّم لإغلاق هذه الفجوة إلى أقل من 90 ثانية.",
          severity: "هيكلي",
          trend: "0 حلول مخصصة في منطقة الشرق الأوسط",
        },
      ],
      closingLine:
        "تحتاج دبي إلى بنية تحتية سيادية مخصصة للرد على الروايات المضادة في الوقت الفعلي. D-Verify هي تلك البنية التحتية.",
    },
    threat: {
      badge: "سيناريوهات التهديد · عرض توضيحي",
      title: "مركز قيادة",
      titleAccent: "الكشف",
      subtitle:
        "تُوضح السيناريوهات التالية كيف سيكتشف D-Verify حملات التضليل الفعلية الموجهة ضد دبي ويصنفها ويُحيِّدها. هذه أمثلة تمثيلية لأنماط التهديد الموثقة.",
      demoNote: "سيناريوهات توضيحية — تعكس أنماط تهديد حقيقية موثقة",
      levelLabel: "مستوى التلفيق",
      statusNeutralized: "تم التحييد",
      statusMonitoring: "قيد المراقبة",
      statusAnalyzing: "قيد التحليل",
      expandHint: "انقر للتوسيع",
      cards: [
        {
          id: "TH-2026-0891",
          level: 5,
          title: "ادعاء مزيف بدفع 2.5 مليون USDT",
          desc: "ادعاء كاذب: 'دفع 2.5 مليون USDT للدكتور أكسيوس لإخماد حملة علاقات عامة سلبية ضد مسؤولين دبيين.' تم تتبع المصدر إلى شبكة سلوك غير أصيل منسقة تعمل عبر ولايات قضائية متعددة. لا دليل على البلوكتشين. لا رمز معاملة. جميع عناوين المحافظ غير موجودة. OSINT: فبركة مؤكدة خلال 11 دقيقة.",
          source: "منسّق متعدد المنصات · 3 ولايات قضائية",
          time: "الاستجابة المقترحة: 14 دقيقة",
          status: "neutralized",
          tag: "تلفيق مالي",
          debunk:
            "لا توجد معاملة على أي بلوكتشين عام. جميع عناوين المحافظ المشار إليها تُظهر رصيداً وتاريخاً صفريَّين. تحليل مجموعات IP يؤكد المصدر المنسق.",
        },
        {
          id: "TH-2026-0887",
          level: 3,
          title: "تضخيم بالمؤثرين الاصطناعيين",
          desc: "شبكة بوتات مرتبطة بدولة تستخدم شخصيات مؤثرين مولودة بالذكاء الاصطناعي لنشر روايات كاذبة حول الإطار التنظيمي لعقارات دبي. النمط يتوافق مع كتيب العمليات الموثق لجهات فاعلة حكومية. تم تحديد 847 حساباً وإشارة 612 للإزالة.",
          source: "تويتر X / تيك توك · مرتبط بدولة",
          time: "الاستجابة المقترحة: 38 دقيقة",
          status: "monitoring",
          tag: "عملية تأثير",
          debunk:
            "الحسابات مُحددة عبر تجميع السلوك وتحليل الهوية عبر المنصات. متوسط عمر الحساب: 11 يوماً. فترات النشر: انتظام آلي. تداخل البنية التحتية مع جهات تهديد موثقة سابقاً.",
        },
        {
          id: "TH-2026-0882",
          level: 2,
          title: "وثيقة حكومية مزيفة بعمق",
          desc: "وثيقة معدّلة تنسب كذباً تصريحاً اقتصادياً إلى مسؤول رفيع في مكتب دبي الحكومي. وُزِّعت عبر قنوات تيليغرام مع تضخيم موثق مرتبط بالدولة. أكد تحليل البيانات الوصفية التلفيق خلال 22 دقيقة.",
          source: "تيليغرام · مُعاد نشره في 14 قناة",
          time: "الاستجابة المقترحة: 22 دقيقة",
          status: "neutralized",
          tag: "تزوير وثائق",
          debunk:
            "EXIF يُظهر تضارباً في تاريخ الإنشاء بفارق 19 يوماً. تحليل الخط مقارنةً بمعايير GDMO يؤكد التزوير. شبكة التوزيع تتداخل مع بنية IO موثقة سابقاً.",
        },
      ],
    },
    engine: {
      badge: "منهجية محورها الإنسان",
      title: "الاحتياطي الرقمي",
      titleAccent: "المجتمعي",
      subtitle:
        "الخوارزميات وحدها لا تستطيع هزيمة التضليل البشري المنسق. خبرة مؤسسنا التي تجاوزت 10 سنوات في بناء البنية الاجتماعية الكبرى — من إدارة مجتمعات الطلاب في موسكو إلى أنظمة التدريب المهني ومدارس تعليم القيادة — أنتجت إطاراً مُثبتاً لتحويل المجتمعات إلى طبقة دفاعية لا يستطيع أي ذكاء اصطناعي تقليدها.",
      founderLabel: "سجل أعمال المؤسس",
      founderSub: "+10 سنوات · بنية اجتماعية واسعة النطاق · موسكو ← دبي",
      steps: [
        {
          num: "01",
          title: "تفعيل شبكة المقيمين",
          desc: "احتياطي رقمي من مقيمي دبي المدرَّبين على محو الأمية الإعلامية — الطبقة البشرية التي لا يستطيع أي جهة فاعلة اصطناعية تزويرها.",
        },
        {
          num: "02",
          title: "طبقة الفرز المسبق بالذكاء الاصطناعي",
          desc: "نماذج التعلم الآلي تتحقق من الادعاءات مقارنةً بأكثر من 200 قاعدة بيانات حكومية قبل تدخل البشر — لضمان عدم وصول أي نتيجة إيجابية خاطئة إلى المسؤولين.",
        },
        {
          num: "03",
          title: "مخطط الذاكرة المؤسسية",
          desc: "كل تهديد مُحيَّد يُثري مخطط المعرفة المتنامي، رسماً لخرائط جهات التضليل والتكتيكات والشبكات — مما يجعل D-Verify أكثر فاعلية بشكل أُسِّي مع كل عملية.",
        },
        {
          num: "04",
          title: "النشر المضاد السيادي",
          desc: "تُوزَّع التصحيحات الموثقة مباشرةً عبر القنوات الرسمية لمكتب دبي الحكومي وشرطة دبي ومجلس الأمن السيبراني — تصحيح الرواية بسرعة سيادية، لا بسرعة الإعلام.",
        },
      ],
    },
    pillars: {
      badge: "الركائز الثلاث",
      title: "هندسة الدفاع",
      titleAccent: "المتكاملة",
      items: [
        {
          color: "cyan",
          subtitle: "استخبارات الإعلام العالمي",
          title: "المراقبة بالذكاء الاصطناعي",
          desc: "مراقبة مستمرة لأكثر من 50,000 مصدر إعلامي ومنصات اجتماعية ومنتديات الإنترنت المظلم بـ38 لغة. تُحدَّد أنماط التهديد في ميلي ثوانٍ — قبل أن تبلغ الروايات سرعتها الفيروسية.",
          features: [
            "تحليل المشاعر متعدد اللغات بمعالجة اللغة الطبيعية",
            "تجميع السلوك عبر المنصات",
            "تتبع إشارات الإنترنت المظلم وتيليغرام",
            "API تنبيه فوري لمكتب دبي الحكومي",
          ],
        },
        {
          color: "gold",
          subtitle: "تكامل API السيادي",
          title: "الاتصال الحكومي",
          desc: "جسر API مشفر مباشر مقترح مع مكتب دبي الحكومي وشرطة دبي ومجلس الأمن السيبراني الإماراتي — لتمكين ردود موثقة ومدعومة قانونياً ومختومة بالوقت تحمل السلطة السيادية.",
          features: [
            "بروتوكول التحقق من بيانات مكتب دبي الحكومي",
            "بروتوكول التنسيق مع شرطة دبي",
            "تسجيل أدلة بلوكتشين غير قابل للتغيير",
            "متوافق مع ISO 27001 وسيادة البيانات الإماراتية",
          ],
        },
        {
          color: "cyan",
          subtitle: "درع الدفاع المجتمعي",
          title: "التوعية العامة",
          desc: "بالاستناد إلى منهجيات البنية الاجتماعية المثبتة — برامج محو الأمية الإعلامية، وشبكات التحقق المجتمعي، ومناهج المواطنة الرقمية — لبناء سكان مقاومين بطبيعتهم للتضليل.",
          features: [
            "وحدات محو الأمية الإعلامية بالعربية والإنجليزية",
            "برامج المدارس والجامعات وأماكن العمل",
            "شبكة سفراء مجتمعيين مدرَّبين",
            "منصة التحقق المدني بالألعاب",
          ],
        },
      ],
    },
    designedFor: {
      label: "مُصمَّم للتكامل مع",
      logos: ["مكتب دبي الحكومي", "شرطة دبي", "مجلس الأمن السيبراني الإماراتي", "TRA UAE", "مكتب دبي الإعلامي", "NCEMA"],
      note: "تكاملات مقترحة — في انتظار اتفاقية الشراكة",
    },
    contact: {
      badge: "طلب إحاطة",
      title: "جدولة مكالمة",
      titleAccent: "شراكة",
      subtitle:
        "يسعى D-Verify إلى شريك حكومي تأسيسي للانتقال من المفهوم إلى التشغيل. هذه البوابة مفتوحة للجهات الفيدرالية الإماراتية وأقسام حكومة دبي والهيئات التنظيمية المرخصة.",
      form: {
        entity: "اسم الجهة",
        entityPh: "مثال: مكتب دبي الحكومي / مكتب دبي الإعلامي",
        name: "الاسم الكامل واللقب",
        namePh: "مثال: سعادة المدير العام",
        email: "البريد الإلكتروني الحكومي الرسمي",
        emailPh: "name@entity.gov.ae",
        reason: "محور الاهتمام بالشراكة",
        reasonPh: "صف اهتمام جهتك وسياق التهديد ونطاق التكامل المفضل...",
        submit: "طلب إحاطة آمنة",
        note: "تُراجع جميع طلبات الإحاطة خلال 48 ساعة. هذه البوابة تحت المراقبة — تُسجَّل الطلبات غير المصرح بها أو التافهة.",
        successTitle: "تم استلام طلب الإحاطة",
        successSub:
          "طلبك قيد المراجعة. سيتواصل معك أحد أعضاء فريق D-Verify عبر بريدك الرسمي خلال 48 ساعة لجدولة عرض تقديمي آمن.",
      },
    },
    footer: {
      tagline: "حماية رواية المستقبل.",
      copy: "© 2026 د-فيريفاي. مقترح مفاهيمي لبنية تحتية للسمعة السيبرانية. جميع الحقوق محفوظة.",
      links: ["نظرة عامة على المفهوم", "الأمان", "تواصل معنا"],
    },
  },

  /* ══════════════════════════════════════════════════════════  RUSSIAN  ══ */
  ru: {
    dir: "ltr",
    font: "'Barlow', sans-serif",
    nav: {
      brand: "D-VERIFY",
      proposalBadge: "КОНЦЕПТ-ПРЕДЛОЖЕНИЕ · 2026",
      links: ["Угрозы", "Методология", "Архитектура", "Брифинг"],
    },
    ticker: [
      "⚡ СЦЕНАРИЙ — TH-2026-0891: фейк о USDT · Предлагаемое время реакции: 14 мин",
      "🛡 Целевая мощность мониторинга: 50 000+ источников на 38 языках",
      "◎ Канал верификации GDMO: ПРЕДЛАГАЕМАЯ ИНТЕГРАЦИЯ",
      "🔴 Демо: 3 сценария угроз доступны для изучения",
      "📡 Отдел цифровых преступлений Полиции Дубая: ЦЕЛЕВАЯ ИНТЕГРАЦИЯ",
      "⚡ СЦЕНАРИЙ — Бот-сеть при поддержке государства · Модель детекции активна",
    ],
    hero: {
      badge: "КОНЦЕПТ-ПРЕДЛОЖЕНИЕ ДЛЯ GDMO",
      title: "Щит нарратива",
      titleAccent: "Дубая",
      subtitle:
        "Предлагаемая платформа для обнаружения дезинформации в реальном времени на базе ИИ, верификации силами сообщества и контрразведки государственного уровня — спроектированная для защиты репутации Дубая от скоординированных и спонсируемых государствами дезинформационных атак.",
      cta1: "Запросить брифинг",
      cta2: "Изучить сценарии",
      stat1: { value: "50K+", label: "Источников · Целевая мощность" },
      stat2: { value: "99.7%", label: "Точность детекции · Прогноз" },
      stat3: { value: "<90с", label: "Время реакции · Целевое" },
      statNote: "Все показатели отражают проектную мощность системы при полном развёртывании.",
    },
    whyNow: {
      badge: "ПОЧЕМУ СЕЙЧАС",
      title: "Угроза",
      titleAccent: "нарастает",
      subtitle:
        "Глобальный статус Дубая, его экономическое лидерство и государственная достоверность находятся под скоординированной цифровой атакой. Окно для действия узкое — цена бездействия измеряется не деньгами, а нарративом.",
      urgencyLabel: "АКТИВНЫЙ ВЕКТОР УГРОЗЫ",
      threats: [
        {
          icon: "radio",
          origin: "Операции при поддержке государства",
          title: "Скоординированные дезинформационные кампании",
          desc: "Задокументированные кампании, исходящие от сетей, связанных с государством, системно атакуют институты ОАЭ, финансовые рынки Дубая и государственную достоверность — используя ИИ-контент, фейковых разоблачителей и сфабрикованные финансовые документы, разработанные для западной аудитории.",
          severity: "КРИТИЧЕСКИЙ",
          trend: "+340% с 3 кв. 2025",
        },
        {
          icon: "trending",
          origin: "Сети клаут-чейсинга",
          title: "Экономика фабрикации инфлюенсеров",
          desc: "Растущая экосистема платных дезинформационных агентов производит вирусные ложные заявления — например, сфабрикованные многомиллионные «замалчивающие» платежи от правительства — разработанные для распространения раньше, чем официальное опровержение достигнет той же аудитории.",
          severity: "ВЫСОКИЙ",
          trend: "+180% с 4 кв. 2025",
        },
        {
          icon: "zap",
          origin: "Скорость платформ",
          title: "Проблема 6-часового окна",
          desc: "Исследования подтверждают: ложный нарратив достигает пика вирусного насыщения за 6 часов после публикации. Правительственные коммуникационные циклы занимают 24–72 часа. D-Verify спроектирован для закрытия этого разрыва до менее чем 90 секунд.",
          severity: "СТРУКТУРНЫЙ",
          trend: "0 специализированных решений на Ближнем Востоке",
        },
      ],
      closingLine:
        "Дубаю нужна специализированная суверенная инфраструктура противодействия нарративам в реальном времени. D-Verify — это и есть такая инфраструктура.",
    },
    threat: {
      badge: "СЦЕНАРИИ УГРОЗ · ДЕМО",
      title: "Командный центр",
      titleAccent: "обнаружения угроз",
      subtitle:
        "Следующие сценарии иллюстрируют, как D-Verify будет обнаруживать, классифицировать и нейтрализовывать реальные дезинформационные кампании против Дубая. Это репрезентативные примеры задокументированных паттернов угроз.",
      demoNote: "ДЕМО-СЦЕНАРИИ — отражают реальные задокументированные паттерны угроз",
      levelLabel: "УРОВЕНЬ ФАБРИКАЦИИ",
      statusNeutralized: "НЕЙТРАЛИЗОВАН",
      statusMonitoring: "МОНИТОРИНГ",
      statusAnalyzing: "АНАЛИЗ",
      expandHint: "Нажмите для раскрытия",
      cards: [
        {
          id: "TH-2026-0891",
          level: 5,
          title: "Сфабрикованный платёж $2.5M USDT",
          desc: "Ложное утверждение: «Платёж $2.5 млн USDT некоему Dr. Axius для подавления PR-кампании против чиновников Дубая». Источник — сеть скоординированного неподлинного поведения в нескольких юрисдикциях. Нулевые доказательства в блокчейне. Нет хэша транзакции. Все адреса кошельков не существуют. OSINT: подтверждённая фабрикация за 11 минут.",
          source: "Скоординировано · 3 юрисдикции",
          time: "Предлагаемая реакция: 14 мин",
          status: "neutralized",
          tag: "Финансовая фабрикация",
          debunk:
            "Ни одна публичная блокчейн-сеть не содержит транзакции. Все адреса кошельков — нулевой баланс, нулевая история. IP-кластерный анализ подтверждает скоординированный источник.",
        },
        {
          id: "TH-2026-0887",
          level: 3,
          title: "Усиление через синтетических инфлюенсеров",
          desc: "Связанная с государством бот-сеть использует ИИ-персонажи инфлюенсеров для распространения ложных нарративов о регуляторной базе рынка недвижимости Дубая. Паттерн соответствует задокументированному IO-плейбуку государственных акторов. 847 аккаунтов выявлено, 612 помечены для удаления.",
          source: "X (Twitter) / TikTok · Госсвязь",
          time: "Предлагаемая реакция: 38 мин",
          status: "monitoring",
          tag: "Операция влияния",
          debunk:
            "Аккаунты выявлены поведенческой кластеризацией. Средний возраст: 11 дней. Постинг-интервалы: автоматическая регулярность. Инфраструктурные пересечения с ранее задокументированными угрозами.",
        },
        {
          id: "TH-2026-0882",
          level: 2,
          title: "Дипфейк государственного документа",
          desc: "Сфальсифицированный документ, ложно приписывающий экономическое заявление высокопоставленному чиновнику GDMO. Telegram-распространение с задокументированным госсвязанным усилением. Анализ метаданных: фабрикация подтверждена за 22 минуты.",
          source: "Telegram · Репост в 14 каналах",
          time: "Предлагаемая реакция: 22 мин",
          status: "neutralized",
          tag: "Подделка документов",
          debunk:
            "EXIF — несоответствие даты создания на 19 дней. Анализ шрифта vs стандарты GDMO — подделка. Дистрибьюторская сеть пересекается с задокументированной IO-инфраструктурой.",
        },
      ],
    },
    engine: {
      badge: "ЧЕЛОВЕКОЦЕНТРИЧНАЯ МЕТОДОЛОГИЯ",
      title: "Цифровой резерв",
      titleAccent: "сообщества",
      subtitle:
        "Алгоритмы в одиночку не победят скоординированную человеческую дезинформацию. Более 10 лет опыта основателя в построении Социальной Инфраструктуры — от студенческих сообществ в Москве до систем профобучения и автошкол — выработали проверенную методологию мобилизации сообществ как оборонного слоя, который не в силах воспроизвести ни один ИИ.",
      founderLabel: "ПОСЛУЖНОЙ СПИСОК ОСНОВАТЕЛЯ",
      founderSub: "10+ лет · Масштабная социальная инфраструктура · Москва → Дубай",
      steps: [
        {
          num: "01",
          title: "Активация сети резидентов",
          desc: "Проверенный Цифровой резерв жителей Дубая, обученных медиаграмотности — человеческий слой, который не может подделать ни один синтетический актор.",
        },
        {
          num: "02",
          title: "ИИ-предварительная фильтрация",
          desc: "Модели ML верифицируют утверждения по 200+ государственным базам данных до привлечения человека — гарантия нулевых ложных эскалаций к должностным лицам.",
        },
        {
          num: "03",
          title: "Граф институциональной памяти",
          desc: "Каждая нейтрализованная угроза обогащает граф знаний, картируя акторов, тактики и сети — D-Verify становится экспоненциально эффективнее с каждой операцией.",
        },
        {
          num: "04",
          title: "Суверенная контрпубликация",
          desc: "Верифицированные опровержения — напрямую через официальные каналы GDMO, Полиции Дубая, Совета по кибербезопасности ОАЭ — коррекция нарратива на суверенной скорости.",
        },
      ],
    },
    pillars: {
      badge: "ТРИ ОПОРЫ",
      title: "Интегрированная",
      titleAccent: "архитектура защиты",
      items: [
        {
          color: "cyan",
          subtitle: "Глобальная медиаразведка",
          title: "ИИ-наблюдение",
          desc: "Непрерывный мониторинг 50 000+ источников, соцплатформ и форумов даркнета на 38 языках. Паттерны угроз — в миллисекунды, до достижения нарративами вирусной скорости.",
          features: [
            "Многоязычный NLP-анализ тональности",
            "Кросс-платформенная поведенческая кластеризация",
            "Мониторинг даркнета и Telegram",
            "API оповещений GDMO в реальном времени",
          ],
        },
        {
          color: "gold",
          subtitle: "Суверенная интеграция API",
          title: "Государственная связь",
          desc: "Предлагаемый прямой зашифрованный API-мост к GDMO, Полиции Дубая и Совету по кибербезопасности ОАЭ — юридически подкреплённые, хронологически маркированные ответы с суверенным авторитетом.",
          features: [
            "Протокол верификации данных GDMO",
            "Протокол координации с Полицией Дубая",
            "Неизменяемое блокчейн-логирование доказательств",
            "Соответствие ISO 27001 и суверенитету данных ОАЭ",
          ],
        },
        {
          color: "cyan",
          subtitle: "Общественный щит защиты",
          title: "Публичная осведомлённость",
          desc: "На основе проверенных методик Социальной Инфраструктуры — программы медиаграмотности, верификационные сети и учебные модули для построения населения, устойчивого к дезинформации.",
          features: [
            "Модули медиаграмотности на арабском и английском",
            "Программы для школ, вузов и работодателей",
            "Обученная сеть послов сообщества",
            "Геймифицированная платформа гражданской верификации",
          ],
        },
      ],
    },
    designedFor: {
      label: "СПРОЕКТИРОВАНО ДЛЯ ИНТЕГРАЦИИ С",
      logos: ["GDMO", "Полиция Дубая", "Совет по кибербезопасности ОАЭ", "TRA UAE", "Медиаофис Дубая", "NCEMA"],
      note: "Предлагаемые интеграции — ожидают заключения партнёрского соглашения",
    },
    contact: {
      badge: "ЗАПРОС БРИФИНГА",
      title: "Запланировать",
      titleAccent: "партнёрский звонок",
      subtitle:
        "D-Verify ищет фундаментального государственного партнёра для перехода от концепта к развёртыванию. Портал открыт для федеральных структур ОАЭ, департаментов правительства Дубая и лицензированных регуляторных органов.",
      form: {
        entity: "Название структуры",
        entityPh: "напр., GDMO / Медиаофис Дубая",
        name: "Полное имя и должность",
        namePh: "напр., Генеральный директор",
        email: "Официальная государственная почта",
        emailPh: "name@entity.gov.ae",
        reason: "Направление интереса к партнёрству",
        reasonPh: "Опишите интерес вашей структуры, контекст угрозы и предпочтительный масштаб интеграции...",
        submit: "Запросить защищённый брифинг",
        note: "Все запросы рассматриваются в течение 48 часов. Портал мониторится — несанкционированные или несерьёзные запросы фиксируются.",
        successTitle: "Запрос на брифинг принят",
        successSub:
          "Ваш запрос на рассмотрении. Представитель D-Verify свяжется с вами по официальному email в течение 48 часов для согласования защищённой презентации.",
      },
    },
    footer: {
      tagline: "Защищаем нарратив будущего.",
      copy: "© 2026 D-Verify. Концепт-предложение инфраструктуры кибер-репутации. Все права защищены.",
      links: ["Обзор концепта", "Безопасность", "Контакты"],
    },
  },
};

export const LANGUAGES = [
  { code: "en", label: "EN", full: "English" },
  { code: "ar", label: "AR", full: "العربية" },
  { code: "ru", label: "RU", full: "Русский" },
];
