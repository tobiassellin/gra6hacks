/**
 * GTA 6 Cheats (English) – Live search, platform/category filtering,
 * and dynamic in-feed ads with Amazon / Google AdSense fallback.
 */

const cheatsData = [
  // Player
  {
    title: "Invincibility / God Mode (5 Minutes)",
    category: "Player",
    description: "Makes your character completely immune to bullets, explosions, and fall damage for 5 minutes.",
    verified: false,
    ps5: "Available Nov 19",
    xbox: "Available Nov 19",
    phone: "Available Nov 19"
  },
  {
    title: "Max Health & Armor",
    category: "Player",
    description: "Instantly restores full health, stamina, and maxes out your body armor.",
    verified: false,
    ps5: "Available Nov 19",
    xbox: "Available Nov 19",
    phone: "Available Nov 19"
  },
  {
    title: "Lower Wanted Level (-1 Star)",
    category: "World",
    description: "Reduces your police Wanted Level by one star per activation.",
    verified: false,
    ps5: "Available Nov 19",
    xbox: "Available Nov 19",
    phone: "Available Nov 19"
  },
  {
    title: "Raise Wanted Level (+1 Star)",
    category: "World",
    description: "Increases your police Wanted Level by one star for extra chaos in Vice City.",
    verified: false,
    ps5: "Available Nov 19",
    xbox: "Available Nov 19",
    phone: "Available Nov 19"
  },
  {
    title: "Super Jump & Fast Run",
    category: "Player",
    description: "Significantly boosts sprinting speed and lets your character leap over obstacles.",
    verified: false,
    ps5: "Available Nov 19",
    xbox: "Available Nov 19",
    phone: "Available Nov 19"
  },

  // Weapons
  {
    title: "All Weapons & Full Ammo",
    category: "Weapons",
    description: "Equips your character with a complete weapon loadout from pistols to heavy rocket launchers.",
    verified: false,
    ps5: "Available Nov 19",
    xbox: "Available Nov 19",
    phone: "Available Nov 19"
  },
  {
    title: "Explosive Ammo Rounds",
    category: "Weapons",
    description: "Every bullet explodes on impact, shredding vehicles and cover in an instant.",
    verified: false,
    ps5: "Available Nov 19",
    xbox: "Available Nov 19",
    phone: "Available Nov 19"
  },
  {
    title: "Flaming Bullets (Incendiary Ammo)",
    category: "Weapons",
    description: "Sets enemies, tires, and flammable objects ablaze upon impact.",
    verified: false,
    ps5: "Available Nov 19",
    xbox: "Available Nov 19",
    phone: "Available Nov 19"
  },

  // Vehicles
  {
    title: "Spawn Sports Car (Cheetah Classic)",
    category: "Vehicles",
    description: "Spawns an iconic Vice City sports car right in front of you on the street.",
    verified: false,
    ps5: "Available Nov 19",
    xbox: "Available Nov 19",
    phone: "Available Nov 19"
  },
  {
    title: "Spawn Attack Helicopter",
    category: "Vehicles",
    description: "Spawns an armed combat helicopter ready for fast flights across Leonida.",
    verified: false,
    ps5: "Available Nov 19",
    xbox: "Available Nov 19",
    phone: "Available Nov 19"
  },
  {
    title: "Spawn Dirt Bike",
    category: "Vehicles",
    description: "Spawns an agile off-road motocross bike built for swamps, trails, and beaches.",
    verified: false,
    ps5: "Available Nov 19",
    xbox: "Available Nov 19",
    phone: "Available Nov 19"
  },
  {
    title: "Slidey Cars (Drift Mode)",
    category: "Vehicles",
    description: "Reduces tire traction on all vehicles so you can drift effortlessly around every corner.",
    verified: false,
    ps5: "Available Nov 19",
    xbox: "Available Nov 19",
    phone: "Available Nov 19"
  },

  // World
  {
    title: "Change Weather in Vice City",
    category: "World",
    description: "Cycles through sunny skies, tropical storm, fog, rain, and thunder.",
    verified: false,
    ps5: "Available Nov 19",
    xbox: "Available Nov 19",
    phone: "Available Nov 19"
  },
  {
    title: "Moon Gravity (Low Gravity)",
    category: "World",
    description: "Lowers gravity for both vehicles and characters for wild stunts.",
    verified: false,
    ps5: "Available Nov 19",
    xbox: "Available Nov 19",
    phone: "Available Nov 19"
  },
  {
    title: "Slow-Motion Aim",
    category: "World",
    description: "Slows down time while aiming weapons (enter up to three times for stronger effect).",
    verified: false,
    ps5: "Available Nov 19",
    xbox: "Available Nov 19",
    phone: "Available Nov 19"
  }
];

const PLATFORM_META = {
  ps5: { label: "PS5", className: "platform-ps5" },
  xbox: { label: "Xbox Series X|S", className: "platform-xbox" },
  phone: { label: "Phone", className: "platform-phone" }
};

const state = {
  search: "",
  platform: "all",
  category: "All"
};

document.addEventListener("DOMContentLoaded", () => {
  try {
    sessionStorage.setItem("gta6_lang_pref", "en");
  } catch (_e) {
    // Ignore storage errors
  }

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
      title: "PlayStation 5 DualSense Wireless Controller",
      desc: "Built for GTA 6 in Vice City – feel every crash, explosion, and throttle with haptic feedback.",
      cta: "Check price on Amazon →",
      img: "https://m.media-amazon.com/images/I/61wKe+YH9BL._AC_SL300_.jpg",
      alt: "PlayStation 5 DualSense wireless controller on Amazon",
      url: "https://www.amazon.se/s?k=PS5+DualSense+handkontroll&tag=gta6hacks-21"
    },
    {
      title: "Wireless Gaming Headset for PS5 & Xbox Series X|S",
      desc: "Experience 3D audio on the streets of Leonida with crystal-clear sound and all-day comfort.",
      cta: "Browse headsets on Amazon →",
      img: "https://m.media-amazon.com/images/I/71Gc7gSd2tL._AC_SL300_.jpg",
      alt: "Wireless gaming headset for PS5 and Xbox Series X|S on Amazon",
      url: "https://www.amazon.se/s?k=gaming+headset+ps5+xbox&tag=gta6hacks-21"
    },
    {
      title: "Fast M.2 NVMe SSD with Heatsink (1 TB / 2 TB) for PS5",
      desc: "Expand your storage and get blazing-fast load times ahead of installing Grand Theft Auto VI.",
      cta: "Compare SSDs on Amazon →",
      img: "https://m.media-amazon.com/images/I/71HdPilz0CL._AC_SL300_.jpg",
      alt: "Fast M.2 NVMe SSD with heatsink for PS5 on Amazon",
      url: "https://www.amazon.se/s?k=ps5+ssd+m2+heatsink&tag=gta6hacks-21"
    }
  ];

  /**
   * Builds <kbd> elements for button combinations or placeholder text.
   */
  function buildCodeSequence(codeValue) {
    const seqContainer = document.createElement("div");
    seqContainer.className = "code-sequence";

    const isPlaceholder =
      !codeValue ||
      codeValue.toLowerCase().includes("available") ||
      codeValue.toLowerCase().includes("publiceras");

    if (isPlaceholder) {
      const kbd = document.createElement("kbd");
      kbd.className = "kbd-token kbd-pending";
      kbd.textContent = codeValue || "Available Nov 19";
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
   * Creates a single cheat card.
   */
  function createCheatCard(cheat, activePlatform) {
    const card = document.createElement("article");
    card.className = "cheat-card";

    // Header & badges
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
    statusBadge.textContent = cheat.verified ? "Verified" : "Drops Nov 19";

    badges.append(catBadge, statusBadge);
    header.append(title, badges);

    // Description
    const desc = document.createElement("p");
    desc.className = "cheat-description";
    desc.textContent = cheat.description;

    // Platform code rows
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
   * Creates an in-feed ad card injected after every 4th cheat code.
   */
  function createInFeedAdCard(slotIndex) {
    const adWrap = document.createElement("div");
    adWrap.className = "infeed-ad-card";
    adWrap.setAttribute("role", "complementary");
    adWrap.setAttribute("aria-label", `Advertisement ${slotIndex}`);

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
    badge.textContent = "Ad · Amazon";

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

  /**
   * Initializes newly mounted AdSense in-feed units.
   */
  function initInFeedAds() {
    const uninitializedAds = gridEl.querySelectorAll(
      "ins.adsbygoogle:not([data-adsbygoogle-status])"
    );
    uninitializedAds.forEach(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (_err) {
        // Ignore if AdSense is blocked by an adblocker
      }
    });
  }

  /**
   * Filters and renders cheat codes and in-feed ads.
   */
  function renderCheats() {
    const query = state.search.trim().toLowerCase();

    const filtered = cheatsData.filter((item) => {
      const matchesCategory = state.category === "All" || item.category === state.category;
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
      resultsCountEl.textContent = "0 cheat codes found";
      return;
    }

    emptyStateEl.hidden = true;
    resultsCountEl.textContent =
      filtered.length === cheatsData.length
        ? `Showing all ${filtered.length} cheat codes`
        : `Showing ${filtered.length} of ${cheatsData.length} cheat codes`;

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

  // Live search with debounce
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

  // Platform filter
  platformFilters.addEventListener("click", (event) => {
    const btn = event.target.closest(".filter-btn");
    if (!btn) return;
    state.platform = btn.dataset.platform || "all";
    setActiveButton(platformFilters, btn);
    renderCheats();
  });

  // Category filter
  categoryFilters.addEventListener("click", (event) => {
    const btn = event.target.closest(".filter-btn");
    if (!btn) return;
    state.category = btn.dataset.category || "All";
    setActiveButton(categoryFilters, btn);
    renderCheats();
  });

  // Reset filters
  resetFiltersBtn.addEventListener("click", () => {
    state.search = "";
    state.platform = "all";
    state.category = "All";
    searchInput.value = "";
    clearSearchBtn.hidden = true;

    const defaultPlatformBtn = platformFilters.querySelector('[data-platform="all"]');
    const defaultCategoryBtn = categoryFilters.querySelector('[data-category="All"]');
    if (defaultPlatformBtn) setActiveButton(platformFilters, defaultPlatformBtn);
    if (defaultCategoryBtn) setActiveButton(categoryFilters, defaultCategoryBtn);

    renderCheats();
  });

  // Close sticky bottom banner
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
