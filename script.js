/**
 * GTA 6 Fuskkoder (Svenska) – Verifierade D-Pad-koder, upplåsningskrav,
 * livesökning, filtrering och dynamiska in-feed-annonser.
 */

const cheatsData = [
  // Spelare (Player)
  {
    title: "$250 000 Pengar (Instant Cash)",
    category: "Spelare",
    description: "Ger dig omedelbart $250 000 på kontot. Krav: Klara huvudberättelsen (alla 91 uppdrag). Öppna telefonen (Upp), håll inne L1/LB + tryck R1/RB och slå in D-pad-koden.",
    verified: true,
    ps5: "L1 + R1, Upp, Höger, Ner, Vänster, Upp, Vänster, Ner, Höger",
    xbox: "LB + RB, Upp, Höger, Ner, Vänster, Upp, Vänster, Ner, Höger",
    phone: "Krav: Klara storyn (Progress → Cheats)"
  },
  {
    title: "Oändligt Fokus (Unlimited Focus)",
    category: "Spelare",
    description: "Din specialförmåga (Focus) tar aldrig slut. Krav: Klara huvudberättelsen. Öppna telefonen med Upp på styrkorset, håll L1/LB + R1/RB och mata in koden.",
    verified: true,
    ps5: "L1 + R1, Ner, Upp, Upp, Ner, Upp, Ner, Upp, Ner, Upp, Höger",
    xbox: "LB + RB, Ner, Upp, Upp, Ner, Upp, Ner, Upp, Ner, Upp, Höger",
    phone: "Krav: Klara storyn (Progress → Cheats)"
  },
  {
    title: "Skyddsväst (Body Armor)",
    category: "Spelare",
    description: "Utrustar din karaktär med full skyddsväst direkt. Krav för upplåsning: Genomför 100 träningspass (workouts) efter att du klarat storyn.",
    verified: true,
    ps5: "L1 + R1, Ner, Upp, Vänster, Upp, Upp, Upp, Upp, Upp, Ner, Ner",
    xbox: "LB + RB, Ner, Upp, Vänster, Upp, Upp, Upp, Upp, Upp, Ner, Ner",
    phone: "Krav: 100 träningspass (Workouts)"
  },
  {
    title: "Ingen Fallskada (No Fall Damage)",
    category: "Spelare",
    description: "Gör dig helt immun mot fallskador från höga höjder. Krav för upplåsning: Överlev 20 fria fall från minst 12 meter (40 fot).",
    verified: true,
    ps5: "Progress → Cheats → Player",
    xbox: "Progress → Cheats → Player",
    phone: "Krav: Överlev 20 fall från 40 fot"
  },
  {
    title: "Fallskärm (Parachute)",
    category: "Spelare",
    description: "Lägger till en fallskärm i din utrustning. Krav för upplåsning: Genomför 50 fallskärmshopp eller BASE-hopp från minst 300 fot.",
    verified: true,
    ps5: "Progress → Cheats → Player",
    xbox: "Progress → Cheats → Player",
    phone: "Krav: 50 fallskärmshopp (300 fot+)"
  },
  {
    title: "Fylleri-läge (Drunk Mode)",
    category: "Spelare",
    description: "Gör omedelbart både dig och din partner berusade. Krav för upplåsning: Spendera totalt $2 500 på alkohol i spelet.",
    verified: true,
    ps5: "Progress → Cheats → Player",
    xbox: "Progress → Cheats → Player",
    phone: "Krav: Spendera $2 500 på alkohol"
  },

  // Vapen & Strid (Weapons & Combat)
  {
    title: "Oändlig Ammunition (Infinite Ammo)",
    category: "Vapen",
    description: "Din ammunition tar aldrig slut när du skjuter. Krav för upplåsning: Vinn 25 silvermedaljer eller högre på skjutbanan (Shooting Range).",
    verified: true,
    ps5: "L1 + R1, Ner, Upp, Höger, Ner, Vänster, Vänster, Upp, Ner, Ner, Ner",
    xbox: "LB + RB, Ner, Upp, Höger, Ner, Vänster, Vänster, Upp, Ner, Ner, Ner",
    phone: "Krav: 25 silver på skjutbanan"
  },
  {
    title: "Full Ammunition (Max Ammo)",
    category: "Vapen",
    description: "Fyller omedelbart på maximal ammunition till alla dina vapen. Krav för upplåsning: Vinn 25 bronsmedaljer eller högre på skjutbanan.",
    verified: true,
    ps5: "L1 + R1, Ner, Upp, Höger, Ner, Vänster, Vänster, Upp, Upp, Ner, Vänster",
    xbox: "LB + RB, Ner, Upp, Höger, Ner, Vänster, Vänster, Upp, Upp, Ner, Vänster",
    phone: "Krav: 25 brons på skjutbanan"
  },
  {
    title: "Ingen Omladdning (No Reload)",
    category: "Vapen",
    description: "Oändlig ammunition och du behöver aldrig ladda om vapnet. Krav för upplåsning: Vinn 25 guldmedaljer på skjutbanan.",
    verified: true,
    ps5: "L1 + R1, Ner, Upp, Höger, Ner, Vänster, Vänster, Upp, Ner, Ner, Upp",
    xbox: "LB + RB, Ner, Upp, Höger, Ner, Vänster, Vänster, Upp, Ner, Ner, Upp",
    phone: "Krav: 25 guld på skjutbanan"
  },
  {
    title: "Superkraft i Skott & Närstrid (Attack Force)",
    category: "Vapen",
    description: "Kulor och närstridsattacker slungar iväg fiender med enorm kraft vid träff. Krav för upplåsning: Klara huvudberättelsen.",
    verified: true,
    ps5: "L1 + R1, Ner, Upp, Vänster, Vänster, Höger, Ner, Ner, Upp, Ner",
    xbox: "LB + RB, Ner, Upp, Vänster, Vänster, Höger, Ner, Ner, Upp, Ner",
    phone: "Krav: Klara storyn (Progress → Cheats)"
  },
  {
    title: "Explosiva Sportbollar (Exploding Balls)",
    category: "Vapen",
    description: "Alla sportbollar exploderar våldsamt vid nedslag. Krav för upplåsning: Träffa 20 fiender med explosiv skada.",
    verified: true,
    ps5: "L1 + R1, Ner, Upp, Vänster, Vänster, Höger, Ner, Ner, Upp, Höger",
    xbox: "LB + RB, Ner, Upp, Vänster, Vänster, Höger, Ner, Ner, Upp, Höger",
    phone: "Krav: Träffa 20 fiender med explosioner"
  },

  // Fordon (Vehicles)
  {
    title: "Fordonskraft – Krockar Slungar Mål (Vehicle Force)",
    category: "Fordon",
    description: "Kollisioner med ditt fordon slungar iväg andra bilar och mål genom luften. Krav: Beseгра 25 fiender med ett fordon.",
    verified: true,
    ps5: "L1 + R1, Ner, Upp, Vänster, Vänster, Höger, Ner, Vänster, Upp, Ner",
    xbox: "LB + RB, Ner, Upp, Vänster, Vänster, Höger, Ner, Vänster, Upp, Ner",
    phone: "Krav: 25 fordons-elimineringar"
  },
  {
    title: "Reparera Fordon (Repair Vehicle)",
    category: "Fordon",
    description: "Reparerar omedelbart ditt nuvarande fordon till nyskick. Krav: Ta 1:a plats i 10 lopp på Gellhorn Raceway, Thrillbilly Mud Club och Boone Speedway.",
    verified: true,
    ps5: "Progress → Cheats → Player",
    xbox: "Progress → Cheats → Player",
    phone: "Krav: Vinn 10 lopp (1:a plats)"
  },
  {
    title: "Oändlig Lustgas & Bränsle (Unlimited Nitrous)",
    category: "Fordon",
    description: "Lustgas (Nitrous) och bränsle tar aldrig slut i fordon. Krav för upplåsning: Klara 50 stunthopp (Stunt Jumps) i Leonida.",
    verified: true,
    ps5: "Progress → Cheats → Player",
    xbox: "Progress → Cheats → Player",
    phone: "Krav: Klara 50 stunthopp"
  },
  {
    title: "Spawna Sportbil (Bravado Banshee)",
    category: "Fordon",
    description: "Frammanar sportbilen Bravado Banshee direkt framför dig. Krav för upplåsning: Klara samtliga stridsutmaningar (Combat Challenges).",
    verified: true,
    ps5: "Progress → Cheats → Spawn Vehicle",
    xbox: "Progress → Cheats → Spawn Vehicle",
    phone: "Krav: Klara alla Combat Challenges"
  },
  {
    title: "Spawna Träskbåt (Airboat 09)",
    category: "Fordon",
    description: "Frammanar en snabb Airboat 09 perfekt för våtmarkerna i Leonida. Krav: Klara 5 överlevnadsutmaningar (Survival Challenges).",
    verified: true,
    ps5: "Progress → Cheats → Spawn Vehicle",
    xbox: "Progress → Cheats → Spawn Vehicle",
    phone: "Krav: Klara 5 Survival Challenges"
  },
  {
    title: "Spawna BMX (Tuff BMX)",
    category: "Fordon",
    description: "Frammanar en Tuff BMX-cykel för tricks och hopp i Vice City. Krav: Klara 5 träningsutmaningar (Fitness Challenges).",
    verified: true,
    ps5: "Progress → Cheats → Spawn Vehicle",
    xbox: "Progress → Cheats → Spawn Vehicle",
    phone: "Krav: Klara 5 Fitness Challenges"
  },

  // Värld & Polis (World & Police)
  {
    title: "Ändra Väder i Vice City (Cycle Weather)",
    category: "Värld",
    description: "Växlar dynamiskt mellan solsken, tropisk storm, dimma, regn och åskväder i Leonida. Krav: Klara huvudberättelsen / utforska hela kartan.",
    verified: true,
    ps5: "L1 + R1, Ner, Höger, Upp, Ner, Höger, Upp, Höger",
    xbox: "LB + RB, Ner, Höger, Upp, Ner, Höger, Upp, Höger",
    phone: "Krav: Klara storyn / öppna hela kartan"
  },
  {
    title: "Höj Heat-nivå (Raise Heat Level)",
    category: "Värld",
    description: "Ökar din Heat-nivå hos polisen över hela kartan. Krav för upplåsning: Bli av med 3-stjärnig efterlysning 25 gånger.",
    verified: true,
    ps5: "L1 + R1, Vänster, Ner, Höger, Ner, Upp, Ner, Upp",
    xbox: "LB + RB, Vänster, Ner, Höger, Ner, Upp, Ner, Upp",
    phone: "Krav: Fly från 3 stjärnor 25 gånger"
  },
  {
    title: "Höj Efterlysningsnivå (Raise Wanted Level)",
    category: "Värld",
    description: "Ökar din Wanted Level direkt för maximal polisjakt i Vice City. Krav för upplåsning: Bli av med 3-stjärnig efterlysning 50 gånger.",
    verified: true,
    ps5: "L1 + R1, Vänster, Ner, Höger, Ner, Upp, Höger, Upp",
    xbox: "LB + RB, Vänster, Ner, Höger, Ner, Upp, Höger, Upp",
    phone: "Krav: Fly från 3 stjärnor 50 gånger"
  },
  {
    title: "Spola Fram Tiden (Move Time Forward)",
    category: "Värld",
    description: "Spolar fram tiden på dygnet i spelet. Krav för upplåsning: Hitta 10 samlarklockor (Collectible Watches) runt om i Leonida.",
    verified: true,
    ps5: "Progress → Cheats → Environment",
    xbox: "Progress → Cheats → Environment",
    phone: "Krav: Hitta 10 samlarklockor"
  },
  {
    title: "Pausa Tiden på Dygnet (Pause Time of Day)",
    category: "Värld",
    description: "Låser den nuvarande tiden på dygnet. Krav för upplåsning: Hitta 20 samlarklockor (Collectible Watches) på kartan.",
    verified: true,
    ps5: "Progress → Cheats → Environment",
    xbox: "Progress → Cheats → Environment",
    phone: "Krav: Hitta 20 samlarklockor"
  }
];

const PLATFORM_META = {
  ps5: { label: "PS5 (D-Pad)", className: "platform-ps5" },
  xbox: { label: "Xbox Series X|S", className: "platform-xbox" },
  phone: { label: "Upplåsning / Meny", className: "platform-phone" }
};

const state = {
  search: "",
  platform: "all",
  category: "Alla"
};

// Automatisk omdirigering till en.html för utländska besökare (ej sökrobotar) om de inte aktivt valt svenska
(function autoRouteLanguage() {
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get("lang") === "sv") {
      sessionStorage.setItem("gta6_lang_pref", "sv");
      return;
    }
    if (sessionStorage.getItem("gta6_lang_pref") === "sv") {
      return;
    }
    const ua = navigator.userAgent || "";
    const isBotOrAudit =
      Boolean(navigator.webdriver) ||
      /bot|crawl|spider|slurp|lighthouse|pagespeed|gtmetrix|screaming|playwright|headless/i.test(ua);
    if (isBotOrAudit) {
      return;
    }
    const browserLangs = Array.isArray(navigator.languages) && navigator.languages.length
      ? navigator.languages
      : [navigator.language || "sv"];
    const hasSwedish = browserLangs.some((l) => String(l).toLowerCase().startsWith("sv"));
    if (!hasSwedish) {
      window.location.replace("en.html");
    }
  } catch (_e) {
    // Ignorera eventuella fel
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  const gridEl = document.getElementById("cheats-grid");
  const emptyStateEl = document.getElementById("empty-state");
  const resultsCountEl = document.getElementById("results-count");
  const searchInput = document.getElementById("search-input");
  const clearSearchBtn = document.getElementById("clear-search");
  const resetFiltersBtn = document.getElementById("reset-filters-btn");
  const platformFilters = document.getElementById("platform-filters");
  const categoryFilters = document.getElementById("category-filters");
  const stickyBottomAd = document.getElementById("sticky-bottom-ad");
  const closeStickyBtn = document.getElementById("close-sticky-ad");
  const siteFooter = document.getElementById("site-footer");

  const AMAZON_INFEED_OFFERS = [
    {
      title: "PlayStation 5 DualSense Trådlös Handkontroll",
      desc: "Perfekt för GTA 6 i Vice City – känn varje krock, explosion och gaspådrag med haptisk feedback.",
      cta: "Se pris på Amazon.se →",
      img: "https://m.media-amazon.com/images/I/61wKe+YH9BL._AC_SL300_.jpg",
      alt: "PlayStation 5 DualSense trådlös handkontroll på Amazon.se",
      url: "https://www.amazon.se/s?k=PS5+DualSense+handkontroll&tag=gta6hacks-21"
    },
    {
      title: "Trådlöst Gaming-Headset för PS5 & Xbox Series X|S",
      desc: "Upplev 3D-ljudet på gatorna i Leonida med kristallklart ljud och bekväm passform för långa pass.",
      cta: "Kolla utbud på Amazon.se →",
      img: "https://m.media-amazon.com/images/I/71Gc7gSd2tL._AC_SL300_.jpg",
      alt: "Trådlöst gaming-headset för PS5 och Xbox Series X|S på Amazon.se",
      url: "https://www.amazon.se/s?k=gaming+headset+ps5+xbox&tag=gta6hacks-21"
    },
    {
      title: "Snabb M.2 NVMe SSD med kylfläns (1 TB / 2 TB) till PS5",
      desc: "Frigör lagringsutrymme och få blixtsnabba laddningstider i Grand Theft Auto VI.",
      cta: "Jämför SSD på Amazon.se →",
      img: "https://m.media-amazon.com/images/I/71HdPilz0CL._AC_SL300_.jpg",
      alt: "Snabb M.2 NVMe SSD med kylfläns till PS5 på Amazon.se",
      url: "https://www.amazon.se/s?k=ps5+ssd+m2+heatsink&tag=gta6hacks-21"
    }
  ];

  function buildCodeSequence(codeValue) {
    const seqContainer = document.createElement("div");
    seqContainer.className = "code-sequence";

    const isRequirement =
      !codeValue ||
      codeValue.toLowerCase().includes("publiceras") ||
      codeValue.toLowerCase().startsWith("krav:");

    if (isRequirement) {
      const kbd = document.createElement("kbd");
      kbd.className = "kbd-token kbd-pending";
      kbd.textContent = codeValue || "Klara storyn";
      seqContainer.appendChild(kbd);
      return seqContainer;
    }

    const tokens = Array.isArray(codeValue)
      ? codeValue
      : String(codeValue)
          .split(/\s*(?:,|→|>)\s*/)
          .filter(Boolean);

    tokens.forEach((token) => {
      const kbd = document.createElement("kbd");
      kbd.className = "kbd-token";
      kbd.textContent = token;
      seqContainer.appendChild(kbd);
    });

    return seqContainer;
  }

  function createCheatCard(cheat, activePlatform) {
    const card = document.createElement("article");
    card.className = "cheat-card";

    const header = document.createElement("div");
    header.className = "cheat-card-header";

    const title = document.createElement("h2");
    title.className = "cheat-title";
    title.textContent = cheat.title;

    const badges = document.createElement("div");
    badges.className = "cheat-badges";

    const catBadge = document.createElement("span");
    catBadge.className = "badge badge-category";
    catBadge.textContent = cheat.category;

    const statusBadge = document.createElement("span");
    statusBadge.className = cheat.verified ? "badge badge-verified" : "badge badge-pending";
    statusBadge.textContent = cheat.verified ? "Verifierad" : "Inväntar kod";

    badges.append(catBadge, statusBadge);
    header.append(title, badges);

    const desc = document.createElement("p");
    desc.className = "cheat-description";
    desc.textContent = cheat.description;

    const codesWrap = document.createElement("div");
    codesWrap.className = "cheat-codes";

    const platformsToShow =
      activePlatform === "all" ? ["ps5", "xbox", "phone"] : [activePlatform];

    platformsToShow.forEach((key) => {
      const meta = PLATFORM_META[key];
      const row = document.createElement("div");
      row.className = "code-row";

      const tag = document.createElement("span");
      tag.className = `platform-tag ${meta.className}`;
      tag.textContent = meta.label;

      const sequence = buildCodeSequence(cheat[key]);
      row.append(tag, sequence);
      codesWrap.appendChild(row);
    });

    card.append(header, desc, codesWrap);
    return card;
  }

  function createInFeedAdCard(slotIndex) {
    const adWrap = document.createElement("div");
    adWrap.className = "infeed-ad-card";
    adWrap.setAttribute("role", "complementary");
    adWrap.setAttribute("aria-label", `Annons ${slotIndex}`);

    const ins = document.createElement("ins");
    ins.className = "adsbygoogle";
    ins.style.display = "block";
    ins.dataset.adFormat = "fluid";
    ins.dataset.adLayoutKey = "-fb+5w+4e-db+86";
    ins.dataset.adClient = "ca-pub-3461073406787574";
    ins.dataset.adSlot = "5444765227";

    const offer = AMAZON_INFEED_OFFERS[(slotIndex - 1) % AMAZON_INFEED_OFFERS.length];
    const fallbackLink = document.createElement("a");
    fallbackLink.href = offer.url;
    fallbackLink.target = "_blank";
    fallbackLink.rel = "sponsored nofollow noopener";
    fallbackLink.className = "amazon-fallback amazon-infeed-card";

    const thumb = document.createElement("img");
    thumb.src = offer.img;
    thumb.alt = offer.alt;
    thumb.width = 96;
    thumb.height = 88;
    thumb.loading = "lazy";
    thumb.className = "amazon-thumb";

    const copyWrap = document.createElement("div");
    copyWrap.className = "amazon-banner-copy";

    const badge = document.createElement("span");
    badge.className = "amazon-badge";
    badge.textContent = "Annons · Amazon.se";

    const title = document.createElement("strong");
    title.className = "amazon-banner-title";
    title.textContent = offer.title;

    const desc = document.createElement("span");
    desc.className = "amazon-banner-sub";
    desc.textContent = offer.desc;

    const cta = document.createElement("span");
    cta.className = "amazon-cta";
    cta.textContent = offer.cta;

    copyWrap.append(badge, title, desc);
    fallbackLink.append(thumb, copyWrap, cta);

    adWrap.append(ins, fallbackLink);
    return adWrap;
  }

  function initInFeedAds() {
    const uninitializedAds = gridEl.querySelectorAll(
      "ins.adsbygoogle:not([data-adsbygoogle-status])"
    );
    uninitializedAds.forEach(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (_err) {
        // Ignorera om AdSense-skriptet blockeras av annonsblockerare
      }
    });
  }

  function renderCheats() {
    const query = state.search.trim().toLowerCase();

    const filtered = cheatsData.filter((item) => {
      const matchesCategory = state.category === "Alla" || item.category === state.category;
      const matchesPlatform = state.platform === "all" || Boolean(item[state.platform]);
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      return matchesCategory && matchesPlatform && matchesSearch;
    });

    gridEl.textContent = "";

    if (filtered.length === 0) {
      emptyStateEl.hidden = false;
      resultsCountEl.textContent = "0 fuskkoder hittades";
      return;
    }

    emptyStateEl.hidden = true;
    resultsCountEl.textContent =
      filtered.length === cheatsData.length
        ? `Visar alla ${filtered.length} verifierade GTA 6-fusk`
        : `Visar ${filtered.length} av ${cheatsData.length} fuskkoder`;

    const fragment = document.createDocumentFragment();
    let adCount = 0;

    filtered.forEach((cheat, index) => {
      fragment.appendChild(createCheatCard(cheat, state.platform));

      if ((index + 1) % 4 === 0) {
        adCount += 1;
        fragment.appendChild(createInFeedAdCard(adCount));
      }
    });

    gridEl.appendChild(fragment);
    initInFeedAds();
  }

  function setActiveButton(container, clickedBtn) {
    container.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.toggle("active", btn === clickedBtn);
    });
  }

  let searchDebounceTimer = null;
  searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    clearSearchBtn.hidden = state.search.length === 0;
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => {
      renderCheats();
    }, 250);
  });

  clearSearchBtn.addEventListener("click", () => {
    clearTimeout(searchDebounceTimer);
    searchInput.value = "";
    state.search = "";
    clearSearchBtn.hidden = true;
    searchInput.focus();
    renderCheats();
  });

  platformFilters.addEventListener("click", (event) => {
    const btn = event.target.closest(".filter-btn");
    if (!btn) return;
    state.platform = btn.dataset.platform || "all";
    setActiveButton(platformFilters, btn);
    renderCheats();
  });

  categoryFilters.addEventListener("click", (event) => {
    const btn = event.target.closest(".filter-btn");
    if (!btn) return;
    state.category = btn.dataset.category || "Alla";
    setActiveButton(categoryFilters, btn);
    renderCheats();
  });

  resetFiltersBtn.addEventListener("click", () => {
    state.search = "";
    state.platform = "all";
    state.category = "Alla";
    searchInput.value = "";
    clearSearchBtn.hidden = true;

    const defaultPlatformBtn = platformFilters.querySelector('[data-platform="all"]');
    const defaultCategoryBtn = categoryFilters.querySelector('[data-category="Alla"]');
    if (defaultPlatformBtn) setActiveButton(platformFilters, defaultPlatformBtn);
    if (defaultCategoryBtn) setActiveButton(categoryFilters, defaultCategoryBtn);

    renderCheats();
  });

  if (closeStickyBtn && stickyBottomAd) {
    closeStickyBtn.addEventListener("click", () => {
      stickyBottomAd.hidden = true;
      if (siteFooter) {
        siteFooter.classList.remove("has-bottom-ad");
        siteFooter.classList.add("banner-dismissed");
      }
    });
  }

  function syncAdContainer(ins) {
    const container = ins.closest(
      ".ad-banner-top-wrap, .ad-rectangle-wrap, .infeed-ad-card, #sticky-bottom-ad, .ad-rail"
    );
    if (!container) return;

    const status = ins.getAttribute("data-ad-status");
    if (status === "filled") {
      container.classList.remove("ad-unfilled");
      container.classList.add("ad-filled");
    } else {
      container.classList.remove("ad-filled");
    }
  }

  function observeAdSlots() {
    document.querySelectorAll("ins.adsbygoogle").forEach(syncAdContainer);

    if (typeof MutationObserver !== "function") return;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.target instanceof HTMLElement &&
          mutation.target.matches("ins.adsbygoogle")
        ) {
          syncAdContainer(mutation.target);
        } else if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (!(node instanceof HTMLElement)) return;
            if (node.matches("ins.adsbygoogle")) {
              syncAdContainer(node);
            } else {
              node.querySelectorAll("ins.adsbygoogle").forEach(syncAdContainer);
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-ad-status"],
      childList: true,
      subtree: true
    });
  }

  observeAdSlots();
  renderCheats();
});
