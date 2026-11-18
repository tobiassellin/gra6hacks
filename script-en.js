/**
 * GTA 6 Cheats (English) – Verified D-Pad button sequences, unlock requirements,
 * live search, platform/category filtering, and dynamic in-feed ads.
 */

const cheatsData = [
  // Player
  {
    title: "$250,000 Cash (Instant Money Cheat)",
    category: "Player",
    description: "Instantly adds $250,000 to your bank account. Unlock requirement: Finish the main story (all 91 missions). Pull out your phone (D-Pad Up), hold L1/LB + press R1/RB, and enter the D-pad sequence.",
    verified: true,
    ps5: "L1 + R1, Up, Right, Down, Left, Up, Left, Down, Right",
    xbox: "LB + RB, Up, Right, Down, Left, Up, Left, Down, Right",
    phone: "Unlock: Finish Main Story (Progress → Cheats)"
  },
  {
    title: "Unlimited Focus (Special Ability)",
    category: "Player",
    description: "Your Focus meter never drains. Unlock requirement: Finish the main story. Open your phone (D-Pad Up), hold L1/LB + R1/RB, and input the directional code.",
    verified: true,
    ps5: "L1 + R1, Down, Up, Up, Down, Up, Down, Up, Down, Up, Right",
    xbox: "LB + RB, Down, Up, Up, Down, Up, Down, Up, Down, Up, Right",
    phone: "Unlock: Finish Main Story (Progress → Cheats)"
  },
  {
    title: "Body Armor",
    category: "Player",
    description: "Instantly adds full body armor to your loadout. Unlock requirement: Complete 100 workouts after beating the main story.",
    verified: true,
    ps5: "L1 + R1, Down, Up, Left, Up, Up, Up, Up, Up, Down, Down",
    xbox: "LB + RB, Down, Up, Left, Up, Up, Up, Up, Up, Down, Down",
    phone: "Unlock: Complete 100 Workouts"
  },
  {
    title: "No Fall Damage",
    category: "Player",
    description: "Makes your character completely immune to fall damage. Unlock requirement: Survive a freefall from 40 feet (12 meters) 20 times.",
    verified: true,
    ps5: "Progress → Cheats → Player",
    xbox: "Progress → Cheats → Player",
    phone: "Unlock: Survive 20 Freefalls from 40ft"
  },
  {
    title: "Parachute",
    category: "Player",
    description: "Adds a parachute directly to your loadout. Unlock requirement: Complete 50 skydives or BASE jumps from 300 feet or higher.",
    verified: true,
    ps5: "Progress → Cheats → Player",
    xbox: "Progress → Cheats → Player",
    phone: "Unlock: Complete 50 Skydives (300ft+)"
  },
  {
    title: "Drunk Mode",
    category: "Player",
    description: "Instantly makes both you and your partner drunk. Unlock requirement: Spend $2,500 on alcohol in-game.",
    verified: true,
    ps5: "Progress → Cheats → Player",
    xbox: "Progress → Cheats → Player",
    phone: "Unlock: Spend $2,500 on Alcohol"
  },

  // Weapons & Combat
  {
    title: "Infinite Ammo",
    category: "Weapons",
    description: "Your ammunition never runs out when firing. Unlock requirement: Win 25 silver medals or higher at shooting ranges.",
    verified: true,
    ps5: "L1 + R1, Down, Up, Right, Down, Left, Left, Up, Down, Down, Down",
    xbox: "LB + RB, Down, Up, Right, Down, Left, Left, Up, Down, Down, Down",
    phone: "Unlock: 25 Silver Medals at Shooting Range"
  },
  {
    title: "Max Ammo",
    category: "Weapons",
    description: "Instantly refills all ammunition to maximum capacity. Unlock requirement: Win 25 bronze medals or higher at shooting ranges.",
    verified: true,
    ps5: "L1 + R1, Down, Up, Right, Down, Left, Left, Up, Up, Down, Left",
    xbox: "LB + RB, Down, Up, Right, Down, Left, Left, Up, Up, Down, Left",
    phone: "Unlock: 25 Bronze Medals at Shooting Range"
  },
  {
    title: "No Reload",
    category: "Weapons",
    description: "Infinite ammo with zero reloading required. Unlock requirement: Win 25 gold medals at shooting ranges.",
    verified: true,
    ps5: "L1 + R1, Down, Up, Right, Down, Left, Left, Up, Down, Down, Up",
    xbox: "LB + RB, Down, Up, Right, Down, Left, Left, Up, Down, Down, Up",
    phone: "Unlock: 25 Gold Medals at Shooting Range"
  },
  {
    title: "Attack Force (Super Knockback)",
    category: "Weapons",
    description: "Bullets and melee attacks launch targets flying on impact. Unlock requirement: Finish the main story.",
    verified: true,
    ps5: "L1 + R1, Down, Up, Left, Left, Right, Down, Down, Up, Down",
    xbox: "LB + RB, Down, Up, Left, Left, Right, Down, Down, Up, Down",
    phone: "Unlock: Finish Main Story (Progress → Cheats)"
  },
  {
    title: "Exploding Balls",
    category: "Weapons",
    description: "All sports balls explode violently on impact. Unlock requirement: Hit 20 enemies with explosive damage.",
    verified: true,
    ps5: "L1 + R1, Down, Up, Left, Left, Right, Down, Down, Up, Right",
    xbox: "LB + RB, Down, Up, Left, Left, Right, Down, Down, Up, Right",
    phone: "Unlock: Hit 20 Enemies with Explosives"
  },

  // Vehicles
  {
    title: "Vehicle Force (Collisions Launch Targets)",
    category: "Vehicles",
    description: "Vehicle collisions send other cars and targets flying through the air. Unlock requirement: Kill 25 enemies with a vehicle.",
    verified: true,
    ps5: "L1 + R1, Down, Up, Left, Left, Right, Down, Left, Up, Down",
    xbox: "LB + RB, Down, Up, Left, Left, Right, Down, Left, Up, Down",
    phone: "Unlock: Kill 25 Enemies with a Vehicle"
  },
  {
    title: "Repair Vehicle",
    category: "Vehicles",
    description: "Fully repairs your current vehicle instantly. Unlock requirement: Win 1st place in 10 races at Gellhorn Raceway, Thrillbilly Mud Club, and Boone Speedway.",
    verified: true,
    ps5: "Progress → Cheats → Player",
    xbox: "Progress → Cheats → Player",
    phone: "Unlock: 1st Place in 10 Races"
  },
  {
    title: "Unlimited Nitrous & Fuel",
    category: "Vehicles",
    description: "Nitrous boost and fuel never run out on any vehicle. Unlock requirement: Complete 50 Stunt Jumps across Leonida.",
    verified: true,
    ps5: "Progress → Cheats → Player",
    xbox: "Progress → Cheats → Player",
    phone: "Unlock: Complete 50 Stunt Jumps"
  },
  {
    title: "Spawn Sports Car (Bravado Banshee)",
    category: "Vehicles",
    description: "Spawns a Bravado Banshee sports car right in front of you. Unlock requirement: Complete all Combat Challenges.",
    verified: true,
    ps5: "Progress → Cheats → Spawn Vehicle",
    xbox: "Progress → Cheats → Spawn Vehicle",
    phone: "Unlock: Complete All Combat Challenges"
  },
  {
    title: "Spawn Airboat 09",
    category: "Vehicles",
    description: "Spawns an Airboat 09 built for tearing across the Grassrivers swamps. Unlock requirement: Complete 5 Survival Challenges.",
    verified: true,
    ps5: "Progress → Cheats → Spawn Vehicle",
    xbox: "Progress → Cheats → Spawn Vehicle",
    phone: "Unlock: Complete 5 Survival Challenges"
  },
  {
    title: "Spawn Tuff BMX",
    category: "Vehicles",
    description: "Spawns a Tuff BMX bike for street tricks in Vice City. Unlock requirement: Complete 5 Fitness Challenges.",
    verified: true,
    ps5: "Progress → Cheats → Spawn Vehicle",
    xbox: "Progress → Cheats → Spawn Vehicle",
    phone: "Unlock: Complete 5 Fitness Challenges"
  },

  // World & Police
  {
    title: "Cycle Weather in Vice City",
    category: "World",
    description: "Cycles dynamically through sunny skies, tropical storm, fog, rain, and thunder. Unlock requirement: Finish the main story / reveal the entire map.",
    verified: true,
    ps5: "L1 + R1, Down, Right, Up, Down, Right, Up, Right",
    xbox: "LB + RB, Down, Right, Up, Down, Right, Up, Right",
    phone: "Unlock: Finish Story / Reveal Map"
  },
  {
    title: "Raise Heat Level",
    category: "World",
    description: "Raises your police Heat Level across the map. Unlock requirement: Lose a 3-star wanted level 25 times.",
    verified: true,
    ps5: "L1 + R1, Left, Down, Right, Down, Up, Down, Up",
    xbox: "LB + RB, Left, Down, Right, Down, Up, Down, Up",
    phone: "Unlock: Lose 3-Star Wanted Level 25 Times"
  },
  {
    title: "Raise Wanted Level",
    category: "World",
    description: "Increases your active police Wanted Level for intense chases in Vice City. Unlock requirement: Lose a 3-star wanted level 50 times.",
    verified: true,
    ps5: "L1 + R1, Left, Down, Right, Down, Up, Right, Up",
    xbox: "LB + RB, Left, Down, Right, Down, Up, Right, Up",
    phone: "Unlock: Lose 3-Star Wanted Level 50 Times"
  },
  {
    title: "Move Time Forward",
    category: "World",
    description: "Advances the in-game time of day forward. Unlock requirement: Find 10 Collectible Watches hidden around Leonida.",
    verified: true,
    ps5: "Progress → Cheats → Environment",
    xbox: "Progress → Cheats → Environment",
    phone: "Unlock: Find 10 Collectible Watches"
  },
  {
    title: "Pause Time of Day",
    category: "World",
    description: "Locks the current time of day in place. Unlock requirement: Find 20 Collectible Watches across the map.",
    verified: true,
    ps5: "Progress → Cheats → Environment",
    xbox: "Progress → Cheats → Environment",
    phone: "Unlock: Find 20 Collectible Watches"
  }
];

const PLATFORM_META = {
  ps5: { label: "PS5 (D-Pad)", className: "platform-ps5" },
  xbox: { label: "Xbox Series X|S", className: "platform-xbox" },
  phone: { label: "Unlock / Menu", className: "platform-phone" }
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
      desc: "Expand your storage and get blazing-fast load times in Grand Theft Auto VI.",
      cta: "Compare SSDs on Amazon →",
      img: "https://m.media-amazon.com/images/I/71HdPilz0CL._AC_SL300_.jpg",
      alt: "Fast M.2 NVMe SSD with heatsink for PS5 on Amazon",
      url: "https://www.amazon.se/s?k=ps5+ssd+m2+heatsink&tag=gta6hacks-21"
    }
  ];

  function buildCodeSequence(codeValue) {
    const seqContainer = document.createElement("div");
    seqContainer.className = "code-sequence";

    const isRequirement =
      !codeValue ||
      codeValue.toLowerCase().includes("available") ||
      codeValue.toLowerCase().startsWith("unlock:");

    if (isRequirement) {
      const kbd = document.createElement("kbd");
      kbd.className = "kbd-token kbd-pending";
      kbd.textContent = codeValue || "Finish Main Story";
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
    statusBadge.textContent = cheat.verified ? "Verified" : "Pending";

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
        ? `Showing all ${filtered.length} verified GTA 6 cheats`
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
    state.category = btn.dataset.category || "All";
    setActiveButton(categoryFilters, btn);
    renderCheats();
  });

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
