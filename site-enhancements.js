(() => {
  const favoriteKey = "natanimo-favorites";
  const recentKey = "natanimo-recent";
  const themeKey = "natanimo-theme";
  const languageKey = "natanimo-language";
  const translationScript = document.createElement("script");
  translationScript.src = new URL("natanimo-translations.js", document.currentScript.src).href;
  document.head.appendChild(translationScript);

  const languages = {
    tr: {
      label: "🇹🇷 Türkçe",
      nav: ["Ana Sayfa", "Yönlendirme", "Anime Listesi"],
      replacements: {
        "Anime rehberi": "Anime rehberi",
        "Anime Listesi": "Anime Listesi",
        "Bu arşivde 97 anime başlığı yer alır. Alttaki arama alanı ile hızlıca bulabilirsin.": "Bu arşivde 97 anime başlığı yer alır. Alttaki arama alanı ile hızlıca bulabilirsin.",
        "Tüm Animelerimiz": "Tüm Animelerimiz",
        "Tüm Animelerimiz | NatAnimo": "Tüm Animelerimiz | NatAnimo",
        "NatAnimo nedir?": "NatAnimo nedir?",
        "Neden NatAnimo?": "Neden NatAnimo?",
        "Anime dünyasını keşfet: Hikâyeler, karakterler ve temalar tek bir yerde.": "Anime dünyasını keşfet: Hikâyeler, karakterler ve temalar tek bir yerde.",
        "NatAnimo, animeleri sadece izlemek değil, anlamak isteyenler için hazırlanmış modern bir rehber.": "NatAnimo, animeleri sadece izlemek değil, anlamak isteyenler için hazırlanmış modern bir rehber.",
        "Arama": "Arama",
        "Son görüntülenenler": "Son görüntülenenler",
        "Son görüntülenen sayfalar": "Son görüntülenen sayfalar",
        "Favori durumunu değiştir": "Favori durumunu değiştir",
        "Temayı değiştir": "Temayı değiştir",
        "Yönlendirme": "Yönlendirme",
        "Yönlendirme Sayfası": "Yönlendirme Sayfası",
        "Bu sayfada": "Bu sayfada",
        "Dil seç": "Dil seç",
        "Storeka": "Storeka",
        "404": "404"
      }
    },
    en: {
      label: "🇬🇧 English",
      nav: ["Home", "Navigation", "Anime List"],
      replacements: {
        "Ana Sayfa": "Home",
        "Yönlendirme": "Navigation",
        "Anime Listesi": "Anime List",
        "Anime rehberi": "Anime guide",
        "Bu arşivde 97 anime başlığı yer alır. Alttaki arama alanı ile hızlıca bulabilirsin.": "This archive contains 97 anime titles. Find them quickly using the search field below.",
        "Tüm Animelerimiz": "All Our Anime",
        "Tüm Animelerimiz | NatAnimo": "All Our Anime | NatAnimo",
        "NatAnimo nedir?": "What is NatAnimo?",
        "Neden NatAnimo?": "Why NatAnimo?",
        "Anime dünyasını keşfet: Hikâyeler, karakterler ve temalar tek bir yerde.": "Explore the anime world: stories, characters and themes in one place.",
        "NatAnimo, animeleri sadece izlemek değil, anlamak isteyenler için hazırlanmış modern bir rehber.": "NatAnimo is a modern guide for those who want to understand anime, not just watch it.",
        "Arama": "Search",
        "Anime ara...": "Search anime...",
        "Varsayılan sıra": "Default order",
        "A'dan Z'ye": "A to Z",
        "Z'den A'ya": "Z to A",
        "Son görüntülenenler": "Recently viewed",
        "Son görüntülenen sayfalar": "Recently viewed pages",
        "Favori durumunu değiştir": "Toggle favorite",
        "Temayı değiştir": "Change theme",
        "Yönlendirme Sayfası": "Navigation Page",
        "Bu sayfada": "On this page",
        "Dil seç": "Select language",
        "Storeka": "Storeka"
        ,
        "NatAnimo": "NatAnimo",
        "NatAnimo | Animelerin sade, hızlı ve modern bir hâli.": "NatAnimo | Anime, in a simple, fast and modern form.",
        "Fatih tarafından hazırlanmıştır.": "Created by Fatih.",
        "NatAnimo, anime dünyasını daha anlaşılır ve düzenli bir şekilde keşfetmek isteyenler için hazırlanmış bir platformdur. Burada yalnızca hikâyeler ve karakterler değil, aynı zamanda temalar, kültürel arka planlar ve serilerin derinlikleri de ele alınır. Amacımız, animeyi sadece izlemekle sınırlı kalmayan; onun felsefesini, duygularını ve anlatım gücünü de tanıtmak. Böylece hem yeni başlayanlar hem de deneyimli izleyiciler için rehber niteliğinde bir kaynak sunuyoruz.": "NatAnimo is a platform created for those who want to explore the anime world in a clear and organized way. It covers not only stories and characters, but also themes, cultural backgrounds and the depth of series. Our goal is to introduce anime beyond watching, including its philosophy, emotions and storytelling power. Thus, we provide a useful guide for beginners and experienced viewers alike.",
        "Çünkü burada animeleri sadece listelemiyoruz; onların dünyasını, mesajlarını ve kültürel etkilerini keşfediyoruz.": "Because we do not just list anime here; we explore their worlds, messages and cultural impact.",
        "Tüm eklenen animeleri tek bir listede bulabilir, kısa tanıtımlarını okuyabilirsiniz.": "You can find all added anime in one list and read their short descriptions.",
        "One Piece Anlatımı": "One Piece Story",
        "Özgürlük, macera ve dostluğun birleştiği efsanevi yolculuğu keşfet.": "Explore the legendary journey where freedom, adventure and friendship come together.",
        "Sasuke Biyografisi": "Sasuke Biography",
        "Sasuke Uchiha'nın karakter gelişimi, motivasyonu ve trajik yolculuğunu oku.": "Read about Sasuke Uchiha's character development, motivation and tragic journey.",
        "Yeni anlatım": "New story",
        "İnsanlık, özgürlük ve tehdit kavramlarını güçlü bir şekilde ele alan bu seriye giriş yap.": "Discover this series that powerfully explores humanity, freedom and the concept of threat.",
        "Karakter biyografisi": "Character biography",
        "Itachi'nin fedakârlığı, sırları ve mirası hakkında kısa ama etkileyici bir profil.": "A short but impressive profile about Itachi's sacrifice, secrets and legacy.",
        "Öne çıkan anlatım": "Featured story",
        "İntikam, adalet ve fedakârlığın keskin çizgilerle anlatıldığı bir hikâyeye göz at.": "Explore a story in which revenge, justice and sacrifice are portrayed with sharp contrasts."
      }
    },
    ja: {
      label: "🇯🇵 日本語",
      nav: ["ホーム", "案内", "アニメ一覧"],
      replacements: {
        "Ana Sayfa": "ホーム",
        "Yönlendirme": "案内",
        "Anime Listesi": "アニメ一覧",
        "Anime rehberi": "アニメガイド",
        "Bu arşivde 97 anime başlığı yer alır. Alttaki arama alanı ile hızlıca bulabilirsin.": "このアーカイブには97のアニメ作品があります。下の検索欄ですばやく探せます。",
        "Tüm Animelerimiz": "すべてのアニメ",
        "Tüm Animelerimiz | NatAnimo": "すべてのアニメ | NatAnimo",
        "NatAnimo nedir?": "NatAnimoとは？",
        "Neden NatAnimo?": "なぜNatAnimo？",
        "Anime dünyasını keşfet: Hikâyeler, karakterler ve temalar tek bir yerde.": "アニメの世界を発見：物語、キャラクター、テーマを一か所で。",
        "NatAnimo, animeleri sadece izlemek değil, anlamak isteyenler için hazırlanmış modern bir rehber.": "NatAnimoは、アニメを単に見るだけでなく理解したい人向けのモダンなガイドです。",
        "Arama": "検索",
        "Anime ara...": "アニメを検索...",
        "Varsayılan sıra": "既定の順序",
        "A'dan Z'ye": "AからZへ",
        "Z'den A'ya": "ZからAへ",
        "Son görüntülenenler": "最近見たページ",
        "Son görüntülenen sayfalar": "最近見たページ",
        "Favori durumunu değiştir": "お気に入りを切り替え",
        "Temayı değiştir": "テーマを変更",
        "Yönlendirme Sayfası": "案内ページ",
        "Bu sayfada": "このページの内容",
        "Dil seç": "言語を選択",
        "Storeka": "ストア",
        "NatAnimo": "NatAnimo",
        "NatAnimo | Animelerin sade, hızlı ve modern bir hâli.": "NatAnimo | アニメをシンプル、高速、モダンに。",
        "Fatih tarafından hazırlanmıştır.": "Fatihによって作成。",
        "NatAnimo, anime dünyasını daha anlaşılır ve düzenli bir şekilde keşfetmek isteyenler için hazırlanmış bir platformdur. Burada yalnızca hikâyeler ve karakterler değil, aynı zamanda temalar, kültürel arka planlar ve serilerin derinlikleri de ele alınır. Amacımız, animeyi sadece izlemekle sınırlı kalmayan; onun felsefesini, duygularını ve anlatım gücünü de tanıtmak. Böylece hem yeni başlayanlar hem de deneyimli izleyiciler için rehber niteliğinde bir kaynak sunuyoruz.": "NatAnimoは、アニメの世界を分かりやすく整理された形で探求したい人向けに作られたプラットフォームです。物語やキャラクターだけでなく、テーマ、文化的背景、作品の奥深さも紹介します。アニメを単に見るだけでなく、その哲学や感情、表現力を伝えることが目的です。",
        "Çünkü burada animeleri sadece listelemiyoruz; onların dünyasını, mesajlarını ve kültürel etkilerini keşfediyoruz.": "ここではアニメを一覧にするだけでなく、その世界、メッセージ、文化的影響を探求します。",
        "Tüm eklenen animeleri tek bir listede bulabilir, kısa tanıtımlarını okuyabilirsiniz.": "追加されたすべてのアニメを一覧で見つけ、簡単な紹介を読むことができます。",
        "One Piece Anlatımı": "ワンピース解説",
        "Özgürlük, macera ve dostluğun birleştiği efsanevi yolculuğu keşfet.": "自由、冒険、友情が結びつく伝説の旅を発見しよう。",
        "Sasuke Biyografisi": "サスケの人物紹介",
        "Sasuke Uchiha'nın karakter gelişimi, motivasyonu ve trajik yolculuğunu oku.": "うちはサスケの成長、動機、悲劇的な旅について読もう。",
        "Yeni anlatım": "新しい解説",
        "İnsanlık, özgürlük ve tehdit kavramlarını güçlü bir şekilde ele alan bu seriye giriş yap.": "人間性、自由、脅威を力強く描くこの作品へ。",
        "Karakter biyografisi": "キャラクター紹介",
        "Itachi'nin fedakârlığı, sırları ve mirası hakkında kısa ama etkileyici bir profil.": "イタチの犠牲、秘密、遺産をまとめた短い人物紹介。",
        "Öne çıkan anlatım": "おすすめの解説",
        "İntikam, adalet ve fedakârlığın keskin çizgilerle anlatıldığı bir hikâyeye göz at.": "復讐、正義、犠牲が鮮明に描かれる物語をチェック。"
      }
    },
    zh: {
      label: "🇨🇳 中文",
      nav: ["首页", "导航", "动漫列表"],
      replacements: {
        "Ana Sayfa": "首页",
        "Yönlendirme": "导航",
        "Anime Listesi": "动漫列表",
        "Anime rehberi": "动漫指南",
        "Bu arşivde 97 anime başlığı yer alır. Alttaki arama alanı ile hızlıca bulabilirsin.": "此资料库收录了97部动漫作品。可使用下方搜索框快速查找。",
        "Tüm Animelerimiz": "全部动漫",
        "Tüm Animelerimiz | NatAnimo": "全部动漫 | NatAnimo",
        "NatAnimo nedir?": "什么是NatAnimo？",
        "Neden NatAnimo?": "为什么选择NatAnimo？",
        "Anime dünyasını keşfet: Hikâyeler, karakterler ve temalar tek bir yerde.": "探索动漫世界：故事、角色和主题尽在一处。",
        "NatAnimo, animeleri sadece izlemek değil, anlamak isteyenler için hazırlanmış modern bir rehber.": "NatAnimo 是为想深入了解而不仅是观看动漫的人打造的现代指南。",
        "Arama": "搜索",
        "Anime ara...": "搜索动漫...",
        "Varsayılan sıra": "默认排序",
        "A'dan Z'ye": "从 A 到 Z",
        "Z'den A'ya": "从 Z 到 A",
        "Son görüntülenenler": "最近查看",
        "Son görüntülenen sayfalar": "最近浏览的页面",
        "Favori durumunu değiştir": "切换收藏状态",
        "Temayı değiştir": "切换主题",
        "Yönlendirme Sayfası": "导航页面",
        "Bu sayfada": "本页内容",
        "Dil seç": "选择语言",
        "Storeka": "商店",
        "NatAnimo": "NatAnimo",
        "NatAnimo | Animelerin sade, hızlı ve modern bir hâli.": "NatAnimo | 简洁、快速、现代的动漫世界。",
        "Fatih tarafından hazırlanmıştır.": "由 Fatih 制作。",
        "NatAnimo, anime dünyasını daha anlaşılır ve düzenli bir şekilde keşfetmek isteyenler için hazırlanmış bir platformdur. Burada yalnızca hikâyeler ve karakterler değil, aynı zamanda temalar, kültürel arka planlar ve serilerin derinlikleri de ele alınır. Amacımız, animeyi sadece izlemekle sınırlı kalmayan; onun felsefesini, duygularını ve anlatım gücünü de tanıtmak. Böylece hem yeni başlayanlar hem de deneyimli izleyiciler için rehber niteliğinde bir kaynak sunuyoruz.": "NatAnimo 是为想清晰、有条理地探索动漫世界的用户打造的平台。这里不仅介绍故事和角色，还涉及主题、文化背景和作品深度。我们的目标不只是让人观看动漫，而是介绍它的哲学、情感和叙事力量。",
        "Çünkü burada animeleri sadece listelemiyoruz; onların dünyasını, mesajlarını ve kültürel etkilerini keşfediyoruz.": "因为我们不只是列出动漫，还会探索它们的世界、信息和文化影响。",
        "Tüm eklenen animeleri tek bir listede bulabilir, kısa tanıtımlarını okuyabilirsiniz.": "你可以在同一个列表中找到所有新增动漫，并阅读简短介绍。",
        "One Piece Anlatımı": "海贼王故事",
        "Özgürlük, macera ve dostluğun birleştiği efsanevi yolculuğu keşfet.": "探索自由、冒险与友谊交织的传奇旅程。",
        "Sasuke Biyografisi": "佐助人物传记",
        "Sasuke Uchiha'nın karakter gelişimi, motivasyonu ve trajik yolculuğunu oku.": "阅读宇智波佐助的成长、动机和悲剧旅程。",
        "Yeni anlatım": "最新故事",
        "İnsanlık, özgürlük ve tehdit kavramlarını güçlü bir şekilde ele alan bu seriye giriş yap.": "了解这部深入展现人性、自由与威胁的作品。",
        "Karakter biyografisi": "角色传记",
        "Itachi'nin fedakârlığı, sırları ve mirası hakkında kısa ama etkileyici bir profil.": "简短而精彩地介绍鼬的牺牲、秘密与遗产。",
        "Öne çıkan anlatım": "精选解说",
        "İntikam, adalet ve fedakârlığın keskin çizgilerle anlatıldığı bir hikâyeye göz at.": "了解一部以鲜明笔触描绘复仇、正义与牺牲的故事。"
      }
    }
  };

  const read = (key, fallback) => {
    try { return JSON.parse(localStorage.getItem(key)) || fallback; }
    catch { return fallback; }
  };

  const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));

  if (localStorage.getItem(themeKey) === "light") {
    document.body.classList.add("light-theme", "light-mode");
  }

  const savedRecent = read(recentKey, []);
  const recent = Array.isArray(savedRecent)
    ? savedRecent.filter(item =>
      item && typeof item.title === "string" && typeof item.url === "string" &&
      item.url.startsWith("/") && !item.url.startsWith("//")
    )
    : [];
  const title = document.title || "NatAnimo";
  const current = { title, url: location.pathname + location.search };
  const updatedRecent = [current, ...recent.filter(item => item.url !== current.url)].slice(0, 8);
  write(recentKey, updatedRecent);

  const tools = document.createElement("div");
  tools.className = "natanimo-tools";

  const languagePicker = document.createElement("div");
  languagePicker.className = "natanimo-language-picker";
  const languageTrigger = document.createElement("button");
  languageTrigger.type = "button";
  languageTrigger.className = "natanimo-language-trigger";
  languageTrigger.setAttribute("aria-haspopup", "listbox");
  languageTrigger.setAttribute("aria-expanded", "false");
  languageTrigger.setAttribute("aria-label", "Dil seç");
  const languageLabel = document.createElement("span");
  const languageChevron = document.createElement("span");
  languageChevron.className = "natanimo-language-chevron";
  languageChevron.setAttribute("aria-hidden", "true");
  languageChevron.textContent = "⌄";
  languageTrigger.append(languageLabel, languageChevron);

  const languageMenu = document.createElement("div");
  languageMenu.className = "natanimo-language-menu";
  languageMenu.setAttribute("role", "listbox");
  languageMenu.setAttribute("aria-label", "Dil seç");
  Object.entries(languages).forEach(([code, language]) => {
    const option = document.createElement("button");
    option.type = "button";
    option.className = "natanimo-language-option";
    option.dataset.language = code;
    option.setAttribute("role", "option");
    option.textContent = language.label;
    languageMenu.appendChild(option);
  });
  languagePicker.append(languageTrigger, languageMenu);
  let controlsContainer;

  const closeLanguageMenu = () => {
    languagePicker.classList.remove("is-open");
    languageTrigger.setAttribute("aria-expanded", "false");
    controlsContainer?.classList.remove("language-menu-open");
  };
  languageTrigger.addEventListener("click", () => {
    const isOpen = languagePicker.classList.toggle("is-open");
    languageTrigger.setAttribute("aria-expanded", String(isOpen));
    controlsContainer?.classList.toggle("language-menu-open", isOpen);
  });
  languageMenu.addEventListener("click", event => {
    const option = event.target.closest("[data-language]");
    if (!option) return;
    localStorage.setItem(languageKey, option.dataset.language);
    applyLanguage(option.dataset.language);
    closeLanguageMenu();
    languageTrigger.focus();
  });
  languagePicker.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeLanguageMenu();
      languageTrigger.focus();
    }
  });
  document.addEventListener("click", event => {
    if (!languagePicker.contains(event.target)) closeLanguageMenu();
  });

  const navList = document.querySelector("header nav ul");
  const originalTitle = document.title;
  if (navList) {
    const languageItem = document.createElement("li");
    languageItem.className = "nav-language";
    languageItem.appendChild(languagePicker);
    navList.appendChild(languageItem);
  }

  const originalTexts = new WeakMap();
  const textNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.textContent.trim()) {
      originalTexts.set(node, node.textContent);
      textNodes.push(node);
    }
  }
  document.querySelectorAll("input[placeholder]").forEach(input => {
    input.dataset.originalPlaceholder = input.getAttribute("placeholder") || "";
  });
  document.querySelectorAll("[aria-label]").forEach(element => {
    element.dataset.originalAriaLabel = element.getAttribute("aria-label") || "";
  });
  document.querySelectorAll("img[alt]:not([alt=''])").forEach(image => {
    image.dataset.originalAlt = image.getAttribute("alt") || "";
  });

  const translateNode = (node, languageCode) => {
    const original = originalTexts.get(node);
    const trimmed = original.trim();
    const normalized = trimmed.replace(/\s+/g, " ");
    const prefix = original.slice(0, original.indexOf(trimmed));
    const suffix = original.slice(original.indexOf(trimmed) + trimmed.length);
    const translated = languageCode === "tr"
      ? trimmed
      : (window.natanimoTranslations?.[languageCode]?.[normalized]
        || window.natanimoTranslations?.[languageCode]?.[trimmed]
        || languages[languageCode]?.replacements[normalized]
        || languages[languageCode]?.replacements[trimmed]
        || trimmed);
    node.textContent = prefix + translated + suffix;
  };

  const applyLanguage = (languageCode) => {
    const language = languages[languageCode] || languages.tr;
    document.documentElement.lang = languageCode;
    languageLabel.textContent = language.label;
    languageTrigger.setAttribute("aria-label", language.replacements["Dil seç"]);
    languageMenu.setAttribute("aria-label", language.replacements["Dil seç"]);
    languageMenu.querySelectorAll("[data-language]").forEach(option => {
      option.setAttribute("aria-selected", String(option.dataset.language === languageCode));
    });
    document.title = languageCode === "tr"
      ? originalTitle
      : (window.natanimoTranslations?.[languageCode]?.[originalTitle.trim()]
        || language.replacements[originalTitle.trim()]
        || originalTitle);

    textNodes.forEach(node => translateNode(node, languageCode));

    const tocTitle = document.querySelector(".natanimo-toc strong");
    if (tocTitle) tocTitle.textContent = language.replacements["Bu sayfada"] || "Bu sayfada";
    document.querySelectorAll(".natanimo-toc a[data-translation-key]").forEach(link => {
      const key = link.dataset.translationKey;
      link.textContent = languageCode === "tr"
        ? key
        : (window.natanimoTranslations?.[languageCode]?.[key]
          || language.replacements[key]
          || key);
    });

    document.querySelectorAll("input[placeholder]").forEach(input => {
      const original = input.dataset.originalPlaceholder || input.placeholder;
      input.placeholder = languageCode === "tr"
        ? original
        : (window.natanimoTranslations?.[languageCode]?.[original]
          || language.replacements[original]
          || original);
    });

    document.querySelectorAll("[aria-label][data-original-aria-label]").forEach(element => {
      const original = element.dataset.originalAriaLabel || "";
      element.setAttribute("aria-label", languageCode === "tr"
        ? original
        : (window.natanimoTranslations?.[languageCode]?.[original]
          || language.replacements[original]
          || original));
    });

    document.querySelectorAll("img[data-original-alt]").forEach(image => {
      const original = image.dataset.originalAlt || "";
      image.alt = languageCode === "tr"
        ? original
        : (window.natanimoTranslations?.[languageCode]?.[original]
          || language.replacements[original]
          || original);
    });

    document.querySelectorAll(".natanimo-favorite").forEach(button => {
      const heading = button.closest(".anime-card, .image-card, .link-card, .content-card")?.querySelector("h3");
      if (!heading) return;
      const action = language.replacements["Favori durumunu değiştir"] || "Favori durumunu değiştir";
      button.setAttribute("aria-label", `${heading.textContent.trim()} ${action}`);
    });

    if (typeof themeButton !== "undefined") {
      themeButton.setAttribute("aria-label", language.replacements["Temayı değiştir"]);
    }
    const recentPanel = document.getElementById("natanimo-recent-panel");
    if (recentPanel) {
      recentPanel.setAttribute("aria-label", language.replacements["Son görüntülenen sayfalar"]);
    }
    const recentButton = document.querySelector('[aria-controls="natanimo-recent-panel"]');
    if (recentButton) {
      recentButton.setAttribute("aria-label", language.replacements["Son görüntülenenler"]);
    }
  };

  const savedLanguage = localStorage.getItem(languageKey);
  const initialLanguage = languages[savedLanguage] ? savedLanguage : "tr";
  const getSavedLanguage = () => {
    const saved = localStorage.getItem(languageKey);
    return languages[saved] ? saved : "tr";
  };

  const dynamicTextObserver = new MutationObserver(records => {
    const addedTextNodes = new Set();
    const collect = (node, isRemoved = false) => {
      if (node.nodeType === Node.TEXT_NODE) {
        if (isRemoved) {
          if (originalTexts.has(node)) {
            originalTexts.delete(node);
            const index = textNodes.indexOf(node);
            if (index !== -1) textNodes.splice(index, 1);
          }
          return;
        }
        if (!node.textContent.trim() || originalTexts.has(node)) return;
        originalTexts.set(node, node.textContent);
        textNodes.push(node);
        addedTextNodes.add(node);
        return;
      }

      if (node.nodeType !== Node.ELEMENT_NODE) return;
      const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) collect(walker.currentNode, isRemoved);
    };

    records.forEach(record => {
      record.removedNodes.forEach(node => collect(node, true));
      record.addedNodes.forEach(node => {
        const roots = new Set();
        if (node.nodeType === Node.TEXT_NODE) {
          const root = node.parentElement?.closest(".store-modal, .natanimo-recent");
          if (root) collect(node);
          return;
        }
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        if (node.matches(".store-modal, .natanimo-recent")) roots.add(node);
        const parentRoot = node.parentElement?.closest(".store-modal, .natanimo-recent");
        if (parentRoot) roots.add(node);
        node.querySelectorAll(".store-modal, .natanimo-recent").forEach(root => roots.add(root));
        roots.forEach(root => collect(root));
      });
    });

    addedTextNodes.forEach(node => translateNode(node, getSavedLanguage()));
  });
  dynamicTextObserver.observe(document.body, { childList: true, subtree: true });

  const themeButton = document.createElement("button");
  themeButton.type = "button";
  themeButton.className = "natanimo-tool";
  themeButton.setAttribute("aria-label", "Temayı değiştir");
  const setThemeIcon = () => {
    const icon = document.body.classList.contains("light-theme")
      ? '<path d="M20.2 15.4A8.3 8.3 0 0 1 8.6 3.8a8.4 8.4 0 1 0 11.6 11.6Z"/>'
      : '<circle cx="12" cy="12" r="3.5"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>';
    themeButton.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${icon}</svg>`;
    themeButton.setAttribute("aria-pressed", String(document.body.classList.contains("light-theme")));
  };
  setThemeIcon();
  themeButton.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-theme");
    document.body.classList.toggle("light-mode", isLight);
    setThemeIcon();
    localStorage.setItem(themeKey, isLight ? "light" : "dark");
  });

  if (window.natanimoTranslations) {
    applyLanguage(initialLanguage);
  } else {
    translationScript.onload = () => applyLanguage(getSavedLanguage());
  }
  if (!navList) {
    tools.prepend(languagePicker);
  }
  tools.append(themeButton);

  const recentPanel = document.createElement("aside");
  recentPanel.className = "natanimo-recent";
  recentPanel.id = "natanimo-recent-panel";
  recentPanel.setAttribute("aria-label", languages[getSavedLanguage()].replacements["Son görüntülenen sayfalar"] || "Son görüntülenen sayfalar");
  updatedRecent.forEach(item => {
    if (!item.url.startsWith("/") || item.url.startsWith("//")) return;
    const link = document.createElement("a");
    link.href = item.url;
    link.textContent = item.title;
    recentPanel.appendChild(link);
  });
  const recentButton = document.createElement("button");
  recentButton.type = "button";
  recentButton.className = "natanimo-tool";
  recentButton.setAttribute("aria-label", languages[getSavedLanguage()].replacements["Son görüntülenenler"] || "Son görüntülenenler");
  recentButton.setAttribute("aria-controls", recentPanel.id);
  recentButton.setAttribute("aria-expanded", "false");
  recentButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 4H6a2 2 0 0 0-2 2v12"/><rect x="8" y="6" width="12" height="15" rx="2"/><path d="M11 10h6m-6 4h6m-6 4h4"/></svg>';
  recentButton.addEventListener("click", () => {
    const isOpen = recentPanel.classList.toggle("open");
    recentButton.setAttribute("aria-expanded", String(isOpen));
    controlsContainer?.classList.toggle("recent-menu-open", isOpen);
  });
  tools.appendChild(recentPanel);
  tools.appendChild(recentButton);
  const topbar = document.querySelector("header .topbar");
  if (navList) {
    const toolsItem = document.createElement("li");
    toolsItem.className = "nav-tools-item";
    toolsItem.appendChild(tools);
    navList.appendChild(toolsItem);
  } else if (topbar) {
    topbar.insertBefore(tools, topbar.querySelector(".back-link"));
  } else if (document.querySelector("header")) {
    document.querySelector("header").appendChild(tools);
  } else {
    (document.querySelector("main") || document.body).prepend(tools);
  }
  controlsContainer = languagePicker.closest("header, main");

  document.addEventListener("click", event => {
    if (!recentPanel.contains(event.target) && !recentButton.contains(event.target)) {
      recentPanel.classList.remove("open");
      recentButton.setAttribute("aria-expanded", "false");
      controlsContainer?.classList.remove("recent-menu-open");
    }
  });

  const savedFavorites = read(favoriteKey, []);
  const favorites = Array.isArray(savedFavorites) ? savedFavorites : [];
  document.querySelectorAll(".anime-card, .image-card, .link-card, .content-card").forEach(card => {
    const heading = card.querySelector("h3");
    if (!heading) return;

    const name = heading.textContent.trim();
    const button = document.createElement("button");
    button.type = "button";
    button.className = "natanimo-favorite";
    const favoriteAction = languages[getSavedLanguage()].replacements["Favori durumunu değiştir"] || "Favori durumunu değiştir";
    button.setAttribute("aria-label", `${name} ${favoriteAction}`);
    button.textContent = favorites.includes(name) ? "♥" : "♡";
    button.classList.toggle("active", favorites.includes(name));

    button.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      const savedCurrentFavorites = read(favoriteKey, []);
      const currentFavorites = Array.isArray(savedCurrentFavorites) ? savedCurrentFavorites : [];
      const exists = currentFavorites.includes(name);
      const next = exists
        ? currentFavorites.filter(item => item !== name)
        : [...currentFavorites, name];
      write(favoriteKey, next);
      button.textContent = exists ? "♡" : "♥";
      button.classList.toggle("active", !exists);
    });

    card.appendChild(button);
  });

  document.documentElement.style.scrollBehavior = "smooth";

  document.querySelectorAll("img").forEach(image => {
    if (!image.hasAttribute("loading")) image.setAttribute("loading", "lazy");
  });

  const article = document.querySelector(".anime-page-body");
  if (article) {
    const headings = [...article.querySelectorAll(":scope > .card h3")];
    if (headings.length > 2) {
      const toc = document.createElement("nav");
      toc.className = "natanimo-toc";
      toc.setAttribute("aria-label", "Sayfa içeriği");
      const tocHeading = document.createElement("strong");
      tocHeading.textContent = "Bu sayfada";
      toc.appendChild(tocHeading);
      headings.forEach((heading, index) => {
        const id = `natanimo-section-${index}`;
        heading.id = id;
        const link = document.createElement("a");
        link.href = `#${id}`;
        link.dataset.translationKey = [...heading.childNodes]
          .filter(node => node.nodeType === Node.TEXT_NODE)
          .map(node => (originalTexts.get(node) || node.textContent).trim())
          .join("")
          .trim();
        link.textContent = link.dataset.translationKey;
        toc.appendChild(link);
      });
      article.prepend(toc);
      applyLanguage(getSavedLanguage());
    }
  }
})();
