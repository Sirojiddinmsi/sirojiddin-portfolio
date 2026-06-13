import type { Locale } from "@/lib/i18n";

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  content: string[];
};

export const siteConfig = {
  name: "Sirojiddin",
  email: "hello@sirojiddin.uz",
  telegram: "https://t.me/sirojiddin",
  instagram: "https://instagram.com/sirojiddin",
  linkedin: "https://linkedin.com/in/sirojiddin",
  phone: "+998 90 000 00 00",
  location: "Tashkent, Uzbekistan"
};

export const blogPosts: Record<Locale, BlogPost[]> = {
  uz: [
    {
      slug: "kichik-biznesda-tartib",
      category: "Business",
      title: "Kichik biznesda tartib nega ustunlik beradi",
      excerpt: "Moliyaviy va operatsion intizom kundalik savdoda qanday farq yaratishini ko'rsatadigan qarashlar.",
      date: "2026-06-04",
      readingTime: "4 min",
      content: [
        "Kichik biznesda ko'p odamlar birinchi navbatda savdoni o'ylaydi. Amalda esa savdoni ushlab turadigan narsa tartib bo'ladi. Hisob, zaxira, xarajat va mijoz bilan ishlashdagi aniqlik biznesni barqaror qiladi.",
        "Tartib bo'lmagan joyda foyda ko'rinishi mumkin, lekin o'sish qiyinlashadi. Egasi doimiy ravishda kundalik muammolarni o'zi hal qilishga majbur bo'ladi va tizim qurilmaydi.",
        "Shuning uchun kichik biznesning haqiqiy ustunligi chiroyli reklama emas, balki ichki boshqaruv sifati hisoblanadi."
      ]
    },
    {
      slug: "mijoz-ishonchi-kapital",
      category: "Sales",
      title: "Mijoz ishonchi savdodagi eng katta kapital",
      excerpt: "Qisqa foyda o'rniga uzoq muddatli aloqani tanlashning tijoriy natijasi.",
      date: "2026-06-04",
      readingTime: "3 min",
      content: [
        "Savdoda ko'p narsani reklama emas, takroriy mijoz hal qiladi. Takroriy mijoz esa faqat ishonch orqali paydo bo'ladi.",
        "Ishonch shakllanishi uchun mahsulot haqida rost gapirish, noto'g'ri tavsiya bermaslik va xizmatda barqaror bo'lish kerak. Bu qisqa muddatda sekinroq ko'rinishi mumkin, lekin uzoq muddatda kuchliroq natija beradi.",
        "Mijoz sizni faqat sotuvchi sifatida emas, to'g'ri yo'l ko'rsatuvchi sifatida ko'ra boshlaganda, brend paydo bo'ladi."
      ]
    },
    {
      slug: "bozorni-kuzatish-ahamyati",
      category: "Markets",
      title: "Bozorni kuzatish tadbirkorga nima beradi",
      excerpt: "Bozor xulqini tahlil qilish orqali qarorlar sifatini oshirish haqida.",
      date: "2026-06-04",
      readingTime: "5 min",
      content: [
        "Bozorni kuzatish faqat treyderlar uchun emas. Tadbirkor uchun ham bozorni tushunish qarorlar tezligi va sifati uchun muhim.",
        "Narx, talab, mijoz xulqi va raqobatchilar harakati doimiy signal beradi. Shu signallarni ko'ra olgan odam tezroq moslashadi va kamroq xato qiladi.",
        "Tahliliy fikrlash savdoda ham, yirik biznes qurishda ham kuchli ustunlik yaratadi."
      ]
    }
  ],
  ru: [
    {
      slug: "poryadok-v-malom-biznese",
      category: "Business",
      title: "Почему порядок дает преимущество малому бизнесу",
      excerpt: "Наблюдения о том, как финансовая и операционная дисциплина меняют повседневную торговлю.",
      date: "2026-06-04",
      readingTime: "4 min",
      content: [
        "В малом бизнесе многие думают в первую очередь о продажах. На практике продажи удерживает порядок. Учет, запасы, расходы и ясность в работе с клиентом создают устойчивость.",
        "Там, где нет структуры, прибыль может казаться нормальной, но рост становится труднее. Владелец вынужден постоянно решать повседневные проблемы вручную.",
        "Поэтому настоящее преимущество малого бизнеса часто находится не в рекламе, а в качестве внутреннего управления."
      ]
    },
    {
      slug: "doverie-klienta-kapital",
      category: "Sales",
      title: "Доверие клиента как главный капитал в продажах",
      excerpt: "О коммерческой ценности долгосрочных отношений вместо короткой выгоды.",
      date: "2026-06-04",
      readingTime: "3 min",
      content: [
        "Во многих продажах результат делает не реклама, а возвращающийся клиент. А возвращающийся клиент появляется только через доверие.",
        "Для доверия нужно честно говорить о товаре, не советовать неподходящее и быть стабильным в сервисе. Краткосрочно это может выглядеть медленнее, но долгосрочно это сильнее.",
        "Когда клиент видит в вас не только продавца, но и надежного советника, начинает формироваться бренд."
      ]
    },
    {
      slug: "nablyudenie-za-rynkom",
      category: "Markets",
      title: "Что наблюдение за рынком дает предпринимателю",
      excerpt: "О том, как анализ рыночного поведения повышает качество решений.",
      date: "2026-06-04",
      readingTime: "5 min",
      content: [
        "Наблюдение за рынком важно не только трейдерам. Для предпринимателя понимание рынка влияет на скорость и качество решений.",
        "Цена, спрос, поведение клиента и действия конкурентов постоянно дают сигналы. Тот, кто умеет их видеть, быстрее адаптируется и реже ошибается.",
        "Аналитическое мышление создает сильное преимущество и в торговле, и в построении крупного бизнеса."
      ]
    }
  ],
  en: [
    {
      slug: "why-structure-wins",
      category: "Business",
      title: "Why structure gives small business an edge",
      excerpt: "A practical view on how financial and operational discipline improve day-to-day trade.",
      date: "2026-06-04",
      readingTime: "4 min",
      content: [
        "Many small businesses focus on sales first. In reality, what keeps sales sustainable is structure. Clear accounting, inventory control, expense discipline, and reliable customer handling create resilience.",
        "Without structure, profit may appear acceptable for a while, but growth becomes harder. The owner stays trapped inside daily problems instead of building systems.",
        "That is why a real competitive edge often comes less from promotion and more from the quality of internal operations."
      ]
    },
    {
      slug: "trust-is-sales-capital",
      category: "Sales",
      title: "Customer trust as the strongest sales asset",
      excerpt: "Why long-term commercial relationships outperform short-term gains.",
      date: "2026-06-04",
      readingTime: "3 min",
      content: [
        "In many businesses, repeat customers matter more than advertising. Repeat customers emerge when people trust your recommendation and experience.",
        "Trust requires honesty about the product, accurate guidance, and consistent service. It can feel slower in the short term, but it compounds far better over time.",
        "When customers stop seeing you as only a seller and start seeing you as a reliable advisor, brand value begins to form."
      ]
    },
    {
      slug: "what-market-observation-gives",
      category: "Markets",
      title: "What market observation gives an entrepreneur",
      excerpt: "How studying behavior, demand, and movement sharpens business decisions.",
      date: "2026-06-04",
      readingTime: "5 min",
      content: [
        "Market observation is not only for traders. Entrepreneurs also benefit from understanding patterns, demand shifts, and behavioral signals.",
        "Price, customer behavior, competitor movement, and timing all provide signals. The operator who reads them well adapts faster and makes fewer weak decisions.",
        "Analytical thinking becomes a durable advantage in both retail trade and larger business strategy."
      ]
    }
  ]
};

export function getBlogPosts(locale: Locale) {
  return blogPosts[locale];
}

export function getBlogPost(locale: Locale, slug: string) {
  return blogPosts[locale].find((post) => post.slug === slug);
}
