export const locales = ["uz", "ru", "en"] as const;

export type Locale = (typeof locales)[number];

type NavItem = {
  label: string;
  href: string;
};

type LinkItem = {
  label: string;
  href: string;
};

type SkillItem = {
  name: string;
  description: string;
};

type TimelineItem = {
  title: string;
  period: string;
  description: string;
};

type ProjectItem = {
  title: string;
  description: string;
  tag: string;
};

type AchievementItem = {
  value: string;
  label: string;
};

type BlogItem = {
  title: string;
  category: string;
  excerpt: string;
};

type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: NavItem[];
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    stats: { value: string; label: string }[];
    pillars: { title: string; description: string }[];
  };
  about: {
    label: string;
    title: string;
    description: string;
    values: string[];
    positioningTitle: string;
    positioningDescription: string;
  };
  skills: {
    label: string;
    title: string;
    items: SkillItem[];
  };
  timeline: {
    label: string;
    title: string;
    items: TimelineItem[];
  };
  projects: {
    label: string;
    title: string;
    items: ProjectItem[];
  };
  achievements: {
    label: string;
    title: string;
    items: AchievementItem[];
  };
  vision: {
    label: string;
    title: string;
    description: string;
  };
  blog: {
    label: string;
    title: string;
    readMore: string;
    items: BlogItem[];
  };
  contact: {
    label: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
  footer: string;
};

const dictionaries: Record<Locale, Dictionary> = {
  uz: {
    meta: {
      title: "Sirojiddin | Tadbirkor Portfolio",
      description:
        "Sirojiddinning premium portfolio sayti: biznes, savdo, texnologiya va uzoq muddatli o'sish haqida."
    },
    nav: [
      { label: "Bosh sahifa", href: "#hero" },
      { label: "Men haqimda", href: "#about" },
      { label: "Tajriba", href: "#timeline" },
      { label: "Loyihalar", href: "#projects" },
      { label: "Aloqa", href: "#contact" }
    ],
    hero: {
      badge: "Operator + Strateg + Entrepreneur",
      title: "Aniqlik, ishonch va uzoq muddatli vizion bilan biznes quraman.",
      description:
        "Men moliya, ishlab chiqarish, texnik mahsulotlar va savdoni birlashtirgan tadbirkorman. Bugun mahalliy bozorda mustahkam ishlayman, ertaga esa yirik biznes va xalqaro savdo tizimini qurishni maqsad qilganman.",
      primaryCta: "Loyihalarni ko'rish",
      secondaryCta: "Bog'lanish",
      stats: [
        { value: "3 yil", label: "Buxgalteriya tajribasi" },
        { value: "1.5 yil", label: "Ishlab chiqarish va boshqaruv" },
        { value: "6 oy", label: "Texnik ta'mirlash amaliyoti" },
        { value: "Hozir", label: "Do'kon egasi va operator" }
      ],
      pillars: [
        {
          title: "Savdo Operatori",
          description: "Kundalik bozorda mijoz ishonchi va mahsulot aniqligiga tayangan amaliy tajriba."
        },
        {
          title: "Texnik Bilim",
          description: "Mashina, ehtiyot qism va xarid qarorlarini amaliy tushunish."
        },
        {
          title: "O'sish Vizioni",
          description: "Kengayadigan tizimlar, kuchli savdo kanallari va uzoq muddatli rivojlanishga fokus."
        }
      ]
    },
    about: {
      label: "Men haqimda",
      title: "Amaliy tajribani tizimli biznes fikrlashga aylantirgan yo'l.",
      description:
        "Faoliyatim buxgalteriya bilan boshlanib, ishlab chiqarish, DTF termopress, texnik ta'mirlash va savdo orqali shakllandi. Har bir bosqich menga tartib, javobgarlik, jarayon nazorati va mijoz ishonchining haqiqiy qiymatini o'rgatdi. Hozir Abu Saxiy bozorida tikuv mashinkalari uchun ehtiyot qismlar va aksessuarlar do'konini boshqaraman.",
      values: [
        "Intizom va aniqlik",
        "Uzoq muddatli fikrlash",
        "Ishonchga asoslangan savdo",
        "Amaliy innovatsiya"
      ],
      positioningTitle: "Pozitsiya",
      positioningDescription:
        "Operatsion ishonchlilik, texnik mahsulot bilimi va tijoriy fikrlashni birlashtirgan intizomli tadbirkor."
    },
    skills: {
      label: "Kompetensiyalar",
      title: "Biznesning raqamidan tortib texnik detallargacha.",
      items: [
        { name: "Accounting", description: "Hisob-kitob, moliyaviy nazorat va tartib." },
        { name: "Business Management", description: "Operatsion boshqaruv va jamoa nazorati." },
        { name: "Sales", description: "Mijoz ishonchi va barqaror savdo." },
        { name: "Sewing Machine Technology", description: "Texnik mahsulot va ehtiyot qismlar bilimi." },
        { name: "Entrepreneurship", description: "Bozor imkoniyatini biznesga aylantirish." },
        { name: "Trading & Market Analysis", description: "Kripto va bozor xulqini o'rganish." }
      ]
    },
    timeline: {
      label: "Tajriba yo'li",
      title: "Turli sohalarda to'plangan qatlamli tajriba.",
      items: [
        {
          title: "Buxgalteriya",
          period: "3 yil",
          description: "Moliyaviy intizom, hisob-kitob aniqligi va mas'uliyat asoslari."
        },
        {
          title: "Tikuv sexi va jamoa boshqaruvi",
          period: "1.5 yil",
          description: "Ishlab chiqarish jarayoni, xodimlar bilan ishlash va samaradorlik nazorati."
        },
        {
          title: "DTF termopress amaliyoti",
          period: "Amaliy bosqich",
          description: "Texnologik jarayon va mahsulot sifati bilan ishlash tajribasi."
        },
        {
          title: "Tikuv mashinkalarini ta'mirlash",
          period: "6 oy",
          description: "Nosozliklar, ehtiyot qismlar va texnik tafakkurni chuqurlashtirish."
        },
        {
          title: "Abu Saxiy do'koni",
          period: "Hozir",
          description: "Tikuv mashinkalari uchun ehtiyot qismlar va aksessuarlar savdosi."
        }
      ]
    },
    projects: {
      label: "Loyihalar",
      title: "Bugungi faoliyat va ertangi kengayish nuqtalari.",
      items: [
        {
          title: "Sewing Machine Parts Store",
          tag: "Current Business",
          description: "Mahsulot sifati, amaliy tavsiya va mijoz bilan uzoq muddatli aloqaga qurilgan savdo nuqtasi."
        },
        {
          title: "Technical Product Expertise",
          tag: "Hands-On Knowledge",
          description: "Texnik bilimni savdo qiymatiga aylantirish va to'g'ri mahsulot tavsiyasi berish."
        },
        {
          title: "Operational Growth Model",
          tag: "Business Systems",
          description: "Kundalik operatsiyalarni tizimli va o'sishga tayyor shaklda boshqarish."
        },
        {
          title: "Future International Trade Vision",
          tag: "Long-Term Vision",
          description: "Mahalliy savdodan yirik biznes va xalqaro savdo tizimiga chiqish strategiyasi."
        }
      ]
    },
    achievements: {
      label: "Natijalar",
      title: "Ko'p yo'nalishli tajribadan shakllangan ishonch.",
      items: [
        { value: "4", label: "Asosiy soha tajribasi" },
        { value: "1", label: "Faol savdo biznesi" },
        { value: "360", label: "Biznesga tizimli qarash" },
        { value: "Global", label: "Kelajak vizioni" }
      ]
    },
    vision: {
      label: "Vizion",
      title: "Mahalliy savdodan global tizimga.",
      description:
        "Maqsadim faqat mahsulot sotish emas. Men intizom, tahlil va ishonchga asoslangan, kengayadigan biznes ekotizimini qurmoqchiman. Savdo, texnologiya va moliyaviy fikrlashni birlashtirib, xalqaro darajadagi struktura yaratishga harakat qilyapman."
    },
    blog: {
      label: "Fikrlar",
      title: "Bozor, savdo va biznes haqidagi kuzatuvlar.",
      readMore: "Batafsil",
      items: [
        {
          category: "Business",
          title: "Kichik biznesda tartib nega ustunlik beradi",
          excerpt: "Moliyaviy va operatsion intizomning kundalik savdoga ta'siri."
        },
        {
          category: "Sales",
          title: "Mijoz ishonchi savdodagi eng katta kapital",
          excerpt: "Qisqa foydadan ko'ra uzoq muddatli aloqani tanlash haqida."
        },
        {
          category: "Markets",
          title: "Bozorni kuzatish tadbirkorga nima beradi",
          excerpt: "Savdo qarorlarida bozor xulqi va fikrlashning o'rni."
        }
      ]
    },
    contact: {
      label: "Aloqa",
      title: "Qiymatli hamkorlik uchun suhbatni boshlaylik.",
      description:
        "Hamkorlik, savdo, biznes rivojlantirish yoki yangi imkoniyatlar bo'yicha bog'lanishingiz mumkin.",
      primary: "Suhbatni boshlash",
      secondary: "Telegram orqali yozish"
    },
    footer: "Built on discipline. Driven by vision."
  },
  ru: {
    meta: {
      title: "Сирожиддин | Портфолио предпринимателя",
      description:
        "Премиальный персональный сайт Сирожиддина: бизнес, торговля, технологии и долгосрочный рост."
    },
    nav: [
      { label: "Главная", href: "#hero" },
      { label: "Обо мне", href: "#about" },
      { label: "Опыт", href: "#timeline" },
      { label: "Проекты", href: "#projects" },
      { label: "Контакты", href: "#contact" }
    ],
    hero: {
      badge: "Operator + Strateg + Entrepreneur",
      title: "Строю бизнес на точности, доверии и долгосрочном видении.",
      description:
        "Я предприниматель, который объединяет финансы, производство, технические товары и продажи. Сегодня я уверенно работаю на локальном рынке, а в будущем стремлюсь создать крупный бизнес и международную торговую систему.",
      primaryCta: "Смотреть проекты",
      secondaryCta: "Связаться",
      stats: [
        { value: "3 года", label: "Опыт в бухгалтерии" },
        { value: "1.5 года", label: "Производство и управление" },
        { value: "6 мес.", label: "Технический ремонт" },
        { value: "Сейчас", label: "Владелец магазина" }
      ],
      pillars: [
        {
          title: "Торговый оператор",
          description: "Ежедневная рыночная практика, построенная на доверии клиента и ясности продукта."
        },
        {
          title: "Техническая экспертиза",
          description: "Практическое понимание машин, запчастей и решений о покупке."
        },
        {
          title: "Видение роста",
          description: "Фокус на масштабируемых системах, сильных каналах торговли и долгосрочном расширении."
        }
      ]
    },
    about: {
      label: "Обо мне",
      title: "Путь, где практический опыт стал системным бизнес-мышлением.",
      description:
        "Мой путь начался с бухгалтерии, затем продолжился через производство, DTF термопресс, технический ремонт и торговлю. Каждый этап усиливал дисциплину, ответственность, контроль процессов и понимание ценности доверия клиента. Сегодня я управляю магазином запчастей и аксессуаров для швейных машин на рынке Абу Сахий.",
      values: [
        "Дисциплина и точность",
        "Долгосрочное мышление",
        "Торговля на доверии",
        "Практичная инновация"
      ],
      positioningTitle: "Позиционирование",
      positioningDescription:
        "Дисциплинированный предприниматель, объединяющий операционную надежность, техническое знание продукта и коммерческое мышление."
    },
    skills: {
      label: "Компетенции",
      title: "От финансовых цифр до технических деталей бизнеса.",
      items: [
        { name: "Accounting", description: "Финансовый контроль, учет и порядок." },
        { name: "Business Management", description: "Операционное управление и контроль команды." },
        { name: "Sales", description: "Доверие клиента и стабильные продажи." },
        { name: "Sewing Machine Technology", description: "Знание техники и запчастей." },
        { name: "Entrepreneurship", description: "Преобразование рыночных возможностей в бизнес." },
        { name: "Trading & Market Analysis", description: "Изучение крипторынка и рыночного поведения." }
      ]
    },
    timeline: {
      label: "Путь опыта",
      title: "Многослойный опыт из разных сфер.",
      items: [
        {
          title: "Бухгалтерия",
          period: "3 года",
          description: "Финансовая дисциплина, точность учета и база ответственности."
        },
        {
          title: "Швейный цех и управление командой",
          period: "1.5 года",
          description: "Производственный процесс, работа с сотрудниками и контроль эффективности."
        },
        {
          title: "Практика DTF термопресса",
          period: "Практический этап",
          description: "Работа с технологическим процессом и качеством продукта."
        },
        {
          title: "Ремонт швейных машин",
          period: "6 месяцев",
          description: "Диагностика, запчасти и развитие технического мышления."
        },
        {
          title: "Магазин на Абу Сахий",
          period: "Сейчас",
          description: "Продажа запчастей и аксессуаров для швейных машин."
        }
      ]
    },
    projects: {
      label: "Проекты",
      title: "Текущая деятельность и точки будущего роста.",
      items: [
        {
          title: "Sewing Machine Parts Store",
          tag: "Current Business",
          description: "Торговая точка, построенная на качестве товара, практических рекомендациях и долгосрочном доверии клиента."
        },
        {
          title: "Technical Product Expertise",
          tag: "Hands-On Knowledge",
          description: "Преобразование технических знаний в ценность для клиента и точную рекомендацию."
        },
        {
          title: "Operational Growth Model",
          tag: "Business Systems",
          description: "Системное управление ежедневными операциями с фокусом на рост."
        },
        {
          title: "Future International Trade Vision",
          tag: "Long-Term Vision",
          description: "Стратегия перехода от локальной торговли к крупному бизнесу и международной системе."
        }
      ]
    },
    achievements: {
      label: "Результаты",
      title: "Доверие, сформированное многопрофильным опытом.",
      items: [
        { value: "4", label: "Ключевые сферы опыта" },
        { value: "1", label: "Действующий торговый бизнес" },
        { value: "360", label: "Системный взгляд на бизнес" },
        { value: "Global", label: "Вектор развития" }
      ]
    },
    vision: {
      label: "Видение",
      title: "От локальной торговли к глобальной системе.",
      description:
        "Моя цель не ограничивается продажей товара. Я хочу построить масштабируемую бизнес-экосистему на дисциплине, аналитике и доверии. Объединяя торговлю, технологии и финансовое мышление, я двигаюсь к международному уровню."
    },
    blog: {
      label: "Заметки",
      title: "Наблюдения о рынке, продажах и бизнесе.",
      readMore: "Подробнее",
      items: [
        {
          category: "Business",
          title: "Почему порядок дает преимущество малому бизнесу",
          excerpt: "О влиянии финансовой и операционной дисциплины на ежедневную торговлю."
        },
        {
          category: "Sales",
          title: "Доверие клиента как главный капитал в продажах",
          excerpt: "Почему долгосрочные отношения ценнее краткосрочной выгоды."
        },
        {
          category: "Markets",
          title: "Что наблюдение за рынком дает предпринимателю",
          excerpt: "Роль рыночного поведения и мышления в торговых решениях."
        }
      ]
    },
    contact: {
      label: "Контакты",
      title: "Начнем разговор о ценном сотрудничестве.",
      description:
        "Вы можете связаться со мной по вопросам партнерства, торговли, развития бизнеса и новых возможностей.",
      primary: "Начать диалог",
      secondary: "Написать в Telegram"
    },
    footer: "Built on discipline. Driven by vision."
  },
  en: {
    meta: {
      title: "Sirojiddin | Entrepreneur Portfolio",
      description:
        "Premium personal website for Sirojiddin: business, trade, technology, and long-term growth."
    },
    nav: [
      { label: "Home", href: "#hero" },
      { label: "About", href: "#about" },
      { label: "Experience", href: "#timeline" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" }
    ],
    hero: {
      badge: "Operator + Strategist + Entrepreneur",
      title: "Building businesses with precision, trust, and long-term vision.",
      description:
        "I am an entrepreneur combining finance, production, technical product knowledge, and sales. Today I operate confidently in a local market environment, with a long-term goal of building larger business systems and international trade channels.",
      primaryCta: "View Projects",
      secondaryCta: "Get in Touch",
      stats: [
        { value: "3 years", label: "Accounting background" },
        { value: "1.5 years", label: "Production leadership" },
        { value: "6 months", label: "Technical repair study" },
        { value: "Today", label: "Store owner and operator" }
      ],
      pillars: [
        {
          title: "Retail Operator",
          description: "Daily market experience built on customer trust and product clarity."
        },
        {
          title: "Technical Knowledge",
          description: "Practical understanding of machines, parts, and buying decisions."
        },
        {
          title: "Growth Vision",
          description: "Focused on scalable systems, stronger trade channels, and long-term expansion."
        }
      ]
    },
    about: {
      label: "About Me",
      title: "A path where practical experience became structured business thinking.",
      description:
        "My journey started in accounting and expanded through production work, DTF heat press operations, technical repair, and retail trade. Each stage strengthened discipline, responsibility, process control, and an understanding of how trust creates durable business value. Today I run a store for sewing machine parts and accessories in Abu Saxiy market.",
      values: [
        "Discipline and precision",
        "Long-term thinking",
        "Trust-based sales",
        "Practical innovation"
      ],
      positioningTitle: "Positioning",
      positioningDescription:
        "A disciplined entrepreneur combining operational reliability, technical product knowledge, and commercial thinking into one personal brand."
    },
    skills: {
      label: "Capabilities",
      title: "From financial structure to technical detail.",
      items: [
        { name: "Accounting", description: "Financial discipline, control, and reporting accuracy." },
        { name: "Business Management", description: "Operational structure and team coordination." },
        { name: "Sales", description: "Trust-building and consistent commercial performance." },
        { name: "Sewing Machine Technology", description: "Hands-on understanding of parts and technical needs." },
        { name: "Entrepreneurship", description: "Turning market opportunities into practical ventures." },
        { name: "Trading & Market Analysis", description: "Studying crypto and market behavior with analytical focus." }
      ]
    },
    timeline: {
      label: "Timeline",
      title: "Layered experience built across multiple operating environments.",
      items: [
        {
          title: "Accounting",
          period: "3 years",
          description: "Built a strong base in financial discipline, reporting accuracy, and responsibility."
        },
        {
          title: "Production and Team Leadership",
          period: "1.5 years",
          description: "Worked in a sewing workshop and managed staff with focus on process and output."
        },
        {
          title: "DTF Heat Press Operations",
          period: "Applied experience",
          description: "Gained exposure to technical workflow and product quality requirements."
        },
        {
          title: "Sewing Machine Repair",
          period: "6 months",
          description: "Studied repairs, components, and technical diagnostics in practice."
        },
        {
          title: "Store Ownership",
          period: "Current",
          description: "Running a parts and accessories business for sewing machines in Abu Saxiy."
        }
      ]
    },
    projects: {
      label: "Projects",
      title: "Current business activity and future expansion points.",
      items: [
        {
          title: "Sewing Machine Parts Store",
          tag: "Current Business",
          description: "A retail operation built on product quality, practical guidance, and long-term customer trust."
        },
        {
          title: "Technical Product Expertise",
          tag: "Hands-On Knowledge",
          description: "Converting technical knowledge into commercial value and better buying decisions."
        },
        {
          title: "Operational Growth Model",
          tag: "Business Systems",
          description: "Creating a more structured and scalable operating model for daily business activity."
        },
        {
          title: "Future International Trade Vision",
          tag: "Long-Term Vision",
          description: "A long-range plan to move from local trade into larger business and cross-border commerce."
        }
      ]
    },
    achievements: {
      label: "Signals",
      title: "Credibility shaped by cross-functional experience.",
      items: [
        { value: "4", label: "Core operating domains" },
        { value: "1", label: "Active retail business" },
        { value: "360", label: "Business perspective" },
        { value: "Global", label: "Growth ambition" }
      ]
    },
    vision: {
      label: "Vision",
      title: "From local trade to global systems.",
      description:
        "My goal is not only to sell products. I want to build a scalable business ecosystem grounded in discipline, analysis, and trust. By combining trade, technology, and financial thinking, I am working toward a stronger international business structure."
    },
    blog: {
      label: "Insights",
      title: "Observations on markets, sales, and business growth.",
      readMore: "Read more",
      items: [
        {
          category: "Business",
          title: "Why structure gives small business an edge",
          excerpt: "How financial and operational discipline improve daily trade performance."
        },
        {
          category: "Sales",
          title: "Customer trust as the strongest sales asset",
          excerpt: "Why long-term relationships outperform short-term wins."
        },
        {
          category: "Markets",
          title: "What market observation gives an entrepreneur",
          excerpt: "The role of market behavior and thinking quality in business decisions."
        }
      ]
    },
    contact: {
      label: "Contact",
      title: "Start a conversation around valuable collaboration.",
      description:
        "Reach out for partnerships, trade opportunities, business development, or strategic discussions.",
      primary: "Start the Conversation",
      secondary: "Message on Telegram"
    },
    footer: "Built on discipline. Driven by vision."
  }
};

export function isSupportedLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export type { Dictionary };
