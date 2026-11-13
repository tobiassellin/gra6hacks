/**
 * GTA 6 Fuskkoder – Interaktiv sökning, filtrering och dynamiska in-feed-annonser.
 */

const cheatsData = [
  // Spelare
  {
    title: "Odödlighet (5 minuter)",
    category: "Spelare",
    description: "Gör din karaktär helt immun mot kulor, explosioner och fallskador i 5 minuter.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },
  {
    title: "Full hälsa och skyddsväst",
    category: "Spelare",
    description: "Återställer omedelbart full hälsa, uthållighet och maximerar kroppsskyddet.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },
  {
    title: "Sänk efterlysningsnivå (-1 stjärna)",
    category: "Spelare",
    description: "Minskar polisens efterlysningsnivå med en stjärna per aktivering.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },
  {
    title: "Höj efterlysningsnivå (+1 stjärna)",
    category: "Spelare",
    description: "Ökar polisens efterlysningsnivå med en stjärna för större utmaning i Vice City.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },
  {
    title: "Supersprång och snabb löpning",
    category: "Spelare",
    description: "Ökar löphastigheten markant och låter din karaktär hoppa extremt högt.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },

  // Vapen
  {
    title: "Alla vapen och full ammunition",
    category: "Vapen",
    description: "Utrustar dig direkt med ett komplett vapenpaket från pistoler till raketgevär.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },
  {
    title: "Explosiva kulor",
    category: "Vapen",
    description: "Varje avfyrat skott exploderar vid träff och förstör fordon på ett ögonblick.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },
  {
    title: "Eldkulor (Brinnande ammunition)",
    category: "Vapen",
    description: "Sätter fyr på fiender, däck och brännbara objekt när du skjuter dem.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },

  // Fordon
  {
    title: "Spawna Sportbil (Cheetah Classic)",
    category: "Fordon",
    description: "Frammanar en klassisk Vice City-sportbil direkt framför dig på gatan.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },
  {
    title: "Spawna Stridshelikopter",
    category: "Fordon",
    description: "Levererar en beväpnad attackhelikopter redo för snabba flygningar över Leonida.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },
  {
    title: "Spawna Crossmotor",
    category: "Fordon",
    description: "Skapar en smidig terrängmotorcykel perfekt för träskmarker och stränder.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },
  {
    title: "Hala däck (Drifting-läge)",
    category: "Fordon",
    description: "Minskar väggreppet för alla fordon så du enkelt kan sladda i varje kurva.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },

  // Värld
  {
    title: "Ändra väder i Vice City",
    category: "Värld",
    description: "Växlar mellan solsken, tropisk storm, dimma, regn och åskväder.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },
  {
    title: "Låg gravitation (Mångravitation)",
    category: "Värld",
    description: "Minskar tyngdkraften för både fordon och karaktärer för absurda stunts.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },
  {
    title: "Slow Motion-sikte",
    category: "Värld",
    description: "Saktar ner tiden när du siktar med vapen (aktivera flera gånger för starkare effekt).",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  }
];

const PLATFORM_META = {
  ps5: { label: "PS5", className: "platform-ps5" },
  xbox: { label: "Xbox Series X|S", className: "platform-xbox" },
  phone: { label: "Telefon", className: "platform-phone" }
};

const state = {
  search: "",
  platform: "all",
  category: "Alla"
};

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

  /**
   * Skapar <kbd>-element för knappkombinationer eller platshållartext.
   */
  function buildCodeSequence(codeValue) {
    const seqContainer = document.createElement("div");
    seqContainer.className = "code-sequence";

    const isPlaceholder = !codeValue || codeValue.toLowerCase().includes("publiceras");
    if (isPlaceholder) {
      const kbd = document.createElement("kbd");
      kbd.className = "kbd-token kbd-pending";
      kbd.textContent = codeValue || "Publiceras 19 nov";
      seqContainer.appendChild(kbd);
      return seqContainer;
    }

    const tokens = Array.isArray(codeValue)
      ? codeValue
      : String(codeValue)
          .split(/\s*(?:,|\+|→|>)\s*/)
          .filter(Boolean);

    tokens.forEach((token) => {
      const kbd = document.createElement("kbd");
      kbd.className = "kbd-token";
      kbd.textContent = token;
      seqContainer.appendChild(kbd);
    });

    return seqContainer;
  }

  /**
   * Skapar ett enskilt fuskkort.
   */
  function createCheatCard(cheat, activePlatform) {
    const card = document.createElement("article");
    card.className = "cheat-card";

    // Rubrik & badges
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
    statusBadge.textContent = cheat.verified ? "Verifierad" : "Inväntar 19 nov";

    badges.append(catBadge, statusBadge);
    header.append(title, badges);

    // Beskrivning
    const desc = document.createElement("p");
    desc.className = "cheat-description";
    desc.textContent = cheat.description;

    // Kodrader per plattform
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

  /**
   * Skapar ett in-feed-annonskort som skjuts in efter var 4:e fuskkod.
   */
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

    adWrap.appendChild(ins);
    return adWrap;
  }

  /**
   * Initierar nya in-feed-annonser efter att de lagts till i DOM:en.
   */
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

  /**
   * Filtrerar och renderar fuskkoder samt in-feed-annonser.
   */
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
        ? `Visar alla ${filtered.length} fuskkoder`
        : `Visar ${filtered.length} av ${cheatsData.length} fuskkoder`;

    const fragment = document.createDocumentFragment();
    let adCount = 0;

    filtered.forEach((cheat, index) => {
      fragment.appendChild(createCheatCard(cheat, state.platform));

      // Skjut in in-feed-annons automatiskt efter var 4:e fuskkod
      if ((index + 1) % 4 === 0) {
        adCount += 1;
        fragment.appendChild(createInFeedAdCard(adCount));
      }
    });

    gridEl.appendChild(fragment);
    initInFeedAds();
  }

  /**
   * Uppdaterar aktiv knapp i en filtergrupp.
   */
  function setActiveButton(container, clickedBtn) {
    container.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.toggle("active", btn === clickedBtn);
    });
  }

  // Livesökning med debounce så in-feed-annonser inte skapas om på varje tangenttryckning
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

  // Plattformsfilter
  platformFilters.addEventListener("click", (event) => {
    const btn = event.target.closest(".filter-btn");
    if (!btn) return;
    state.platform = btn.dataset.platform || "all";
    setActiveButton(platformFilters, btn);
    renderCheats();
  });

  // Kategorifilter
  categoryFilters.addEventListener("click", (event) => {
    const btn = event.target.closest(".filter-btn");
    if (!btn) return;
    state.category = btn.dataset.category || "Alla";
    setActiveButton(categoryFilters, btn);
    renderCheats();
  });

  // Återställ alla filter
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

  // Stäng-knapp för sticky bottenbanner
  if (closeStickyBtn && stickyBottomAd) {
    closeStickyBtn.addEventListener("click", () => {
      stickyBottomAd.hidden = true;
      if (siteFooter) {
        siteFooter.classList.add("banner-dismissed");
      }
    });
  }

  // Initial rendering
  renderCheats();
});
