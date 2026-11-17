/**
 * GTA 6 Fuskkoder – Interaktiv sökning, filtrering, tvåspråkigt stöd (SV / EN)
 * samt dynamiska in-feed-annonser med Amazon.se/AdSense-fallback.
 */

const cheatsData = [
  // Spelare / Player
  {
    title: "Odödlighet (5 minuter)",
    titleEn: "Invincibility / God Mode (5 Minutes)",
    category: "Spelare",
    categoryEn: "Player",
    description: "Gör din karaktär helt immun mot kulor, explosioner och fallskador i 5 minuter.",
    descriptionEn: "Makes your character completely immune to bullets, explosions, and fall damage for 5 minutes.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },
  {
    title: "Full hälsa och skyddsväst",
    titleEn: "Max Health & Armor",
    category: "Spelare",
    categoryEn: "Player",
    description: "Återställer omedelbart full hälsa, uthållighet och maximerar kroppsskyddet.",
    descriptionEn: "Instantly restores full health, stamina, and maximizes body armor.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },
  {
    title: "Sänk efterlysningsnivå (-1 stjärna)",
    titleEn: "Lower Wanted Level (-1 Star)",
    category: "Spelare",
    categoryEn: "Player",
    description: "Minskar polisens efterlysningsnivå med en stjärna per aktivering.",
    descriptionEn: "Reduces your police Wanted Level by one star per activation.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },
  {
    title: "Höj efterlysningsnivå (+1 stjärna)",
    titleEn: "Raise Wanted Level (+1 Star)",
    category: "Spelare",
    categoryEn: "Player",
    description: "Ökar polisens efterlysningsnivå med en stjärna för större utmaning i Vice City.",
    descriptionEn: "Increases your police Wanted Level by one star for extra chaos in Vice City.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },
  {
    title: "Supersprång och snabb löpning",
    titleEn: "Super Jump & Fast Run",
    category: "Spelare",
    categoryEn: "Player",
    description: "Ökar löphastigheten markant och låter din karaktär hoppa extremt högt.",
    descriptionEn: "Significantly boosts sprinting speed and lets your character jump super high.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },

  // Vapen / Weapons
  {
    title: "Alla vapen och full ammunition",
    titleEn: "All Weapons & Full Ammo",
    category: "Vapen",
    categoryEn: "Weapons",
    description: "Utrustar dig direkt med ett komplett vapenpaket från pistoler till raketgevär.",
    descriptionEn: "Equips your character with a complete weapon loadout from pistols to rocket launchers.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },
  {
    title: "Explosiva kulor",
    titleEn: "Explosive Ammo Rounds",
    category: "Vapen",
    categoryEn: "Weapons",
    description: "Varje avfyrat skott exploderar vid träff och förstör fordon på ett ögonblick.",
    descriptionEn: "Every bullet explodes on impact, destroying vehicles in an instant.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },
  {
    title: "Eldkulor (Brinnande ammunition)",
    titleEn: "Flaming Bullets (Incendiary Ammo)",
    category: "Vapen",
    categoryEn: "Weapons",
    description: "Sätter fyr på fiender, däck och brännbara objekt när du skjuter dem.",
    descriptionEn: "Sets enemies, tires, and flammable objects on fire upon impact.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },

  // Fordon / Vehicles
  {
    title: "Spawna Sportbil (Cheetah Classic)",
    titleEn: "Spawn Sports Car (Cheetah Classic)",
    category: "Fordon",
    categoryEn: "Vehicles",
    description: "Frammanar en klassisk Vice City-sportbil direkt framför dig på gatan.",
    descriptionEn: "Spawns an iconic Vice City sports car right in front of you on the street.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },
  {
    title: "Spawna Stridshelikopter",
    titleEn: "Spawn Attack Helicopter",
    category: "Fordon",
    categoryEn: "Vehicles",
    description: "Levererar en beväpnad attackhelikopter redo för snabba flygningar över Leonida.",
    descriptionEn: "Spawns an armed attack helicopter ready for fast flights across Leonida.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },
  {
    title: "Spawna Crossmotor",
    titleEn: "Spawn Dirt Bike",
    category: "Fordon",
    categoryEn: "Vehicles",
    description: "Skapar en smidig terrängmotorcykel perfekt för träskmarker och stränder.",
    descriptionEn: "Spawns an agile off-road dirt bike built for swamps, trails, and beaches.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },
  {
    title: "Hala däck (Drifting-läge)",
    titleEn: "Slidey Cars (Drift Mode)",
    category: "Fordon",
    categoryEn: "Vehicles",
    description: "Minskar väggreppet för alla fordon så du enkelt kan sladda i varje kurva.",
    descriptionEn: "Reduces tire grip on all vehicles so you can drift effortlessly around corners.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },

  // Värld / World
  {
    title: "Ändra väder i Vice City",
    titleEn: "Change Weather in Vice City",
    category: "Värld",
    categoryEn: "World",
    description: "Växlar mellan solsken, tropisk storm, dimma, regn och åskväder.",
    descriptionEn: "Cycles through sunshine, tropical storm, fog, rain, and thunder.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },
  {
    title: "Låg gravitation (Mångravitation)",
    titleEn: "Moon Gravity (Low Gravity)",
    category: "Värld",
    categoryEn: "World",
    description: "Minskar tyngdkraften för både fordon och karaktärer för absurda stunts.",
    descriptionEn: "Lowers gravity for both vehicles and characters for wild stunts.",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  },
  {
    title: "Slow Motion-sikte",
    titleEn: "Slow-Motion Aim",
    category: "Värld",
    categoryEn: "World",
    description: "Saktar ner tiden när du siktar med vapen (aktivera flera gånger för starkare effekt).",
    descriptionEn: "Slows down time while aiming weapons (enter multiple times for stronger effect).",
    verified: false,
    ps5: "Publiceras 19 nov",
    xbox: "Publiceras 19 nov",
    phone: "Publiceras 19 nov"
  }
];

const PLATFORM_META = {
  ps5: { label: "PS5", labelEn: "PS5", className: "platform-ps5" },
  xbox: { label: "Xbox Series X|S", labelEn: "Xbox Series X|S", className: "platform-xbox" },
  phone: { label: "Telefon", labelEn: "Phone", className: "platform-phone" }
};

const I18N = {
  sv: {
    pageTitle: "GTA 6 Fuskkoder (PS5, Xbox & Telefon) – Komplett Guide",
    logoSub: "FUSK & KODER",
    releaseBadge: "Lansering 19 nov 2026",
    heroTitle: "Alla fuskkoder till GTA 6 – PS5, Xbox & Telefon",
    heroLead:
      'Sök och filtrera bland kommande fuskkoder för <strong>Grand Theft Auto VI</strong> i Vice City och Leonida. Databasen uppdateras live med verifierade knappkombinationer så fort spelet släpps den 19 november 2026.',
    lastUpdated:
      'Senast uppdaterad: <time datetime="2026-11-17">17 november 2026</time> &middot; Guiden för PS5, Xbox Series X|S &amp; Telefon',
    navCheats: "Alla fuskkoder",
    navHowTo: "Så aktiverar du fusk",
    navCategories: "Kategorier",
    navFaq: "Vanliga frågor (FAQ)",
    navAbout: "Om guiden & Källor",
    navPrivacy: "Integritetspolicy",
    searchLabel: "Sök efter fuskkod eller effekt",
    searchPlaceholder: "Sök fusk (t.ex. odödlig, vapen, helikopter, polis)...",
    platformLabel: "Plattform:",
    categoryLabel: "Kategori:",
    filterAll: "Alla",
    platformPhone: "Telefon",
    catPlayer: "Spelare",
    catWeapons: "Vapen",
    catVehicles: "Fordon",
    catWorld: "Värld",
    emptyTitle: "Inga fuskkoder matchade din sökning",
    emptyDesc: "Prova ett annat sökord eller återställ filtren för att visa alla kommande GTA 6-fusk.",
    resetBtn: "Återställ alla filter",
    verifiedBadge: "Verifierad",
    pendingBadge: "Inväntar 19 nov",
    pendingCode: "Publiceras 19 nov",
    adBadge: "Annons · Amazon.se",
    leftSkyTitle: "Snabb M.2 SSD för PS5",
    leftSkyDesc: "Frigör lagringsutrymme inför GTA 6 i Vice City med snabb NVMe SSD och kylfläns.",
    rightSkyTitle: "Trådlöst Gaming-Headset",
    rightSkyDesc: "Upplev 3D-ljudet i Leonida med trådlöst headset för PS5 och Xbox Series X|S.",
    skyCta: "Se på Amazon →",
    topBannerTitle: "Köp Grand Theft Auto VI (PS5 & Xbox Series X)",
    topBannerSub: "Säkra ditt exemplar och gamingtillbehör med snabb leverans på Amazon.se",
    topBannerCta: "Se pris på Amazon →",
    rectTitle: "Redo för Vice City 19 nov?",
    rectDesc:
      "Hitta GTA 6, trådlösa PS5 DualSense- och Xbox-handkontroller, gaming-headset och snabba M.2 SSD-diskar på Amazon.se.",
    rectCta1: "GTA 6 (PS5 & Xbox) →",
    rectCta2: "Kontroller & Headset →",
    bottomBarText: "<strong>GTA 6 &amp; Tillbehör</strong> på Amazon.se",
    bottomBarCta: "Visa pris →",
    howToTitle: "Så aktiverar du fuskkoder i GTA 6 – Steg för steg",
    howToIntro1:
      'Inför premiären av <strong>Grand Theft Auto VI</strong> den 19 november 2026 samlar vi Sveriges mest kompletta och lättlästa referensguide för klassiska GTA-fuskkoder. Oavsett om du vill orsaka totalt kaos på gatorna i Vice City, spawna en snabb sportbil i delstaten Leonida eller utforska kartan utan polisens efterlysning hittar du alla koder samlade här i vår <a href="#fuskkoder">sökbara fuskkodstabell</a>.',
    howToIntro2:
      "Följ dessa fyra enkla steg för att aktivera fusk säkert på PlayStation 5 och Xbox Series X|S utan att förlora dina framsteg i kampanjen:",
    step1:
      "<strong>Spara ditt spel manuellt:</strong> Öppna menyn och skapa en separat sparfil innan du slår in koder, eftersom aktiva fusk stänger av Trophies och Achievements under spelsessionen.",
    step2:
      "<strong>Stanna i vanlig spelvy:</strong> Knappkombinationer måste tryckas in medan din karaktär befinner sig ute i spelvärlden (inte inne i pausmenyn).",
    step3:
      "<strong>Mata in koden via handkontroll eller telefon:</strong> Tryck antingen in knappsekvensen i jämn takt på din DualSense-/Xbox-kontroll, eller öppna karaktärens mobiltelefon och ring fusknumret.",
    step4:
      "<strong>Kontrollera bekräftelsen:</strong> En liten notis visas på skärmen så fort fusket har aktiverats. Ladda om din sparfil när du vill återgå till vanligt spelande.",
    catHeading: "Alla kategorier av fusk i Grand Theft Auto VI",
    catIntro:
      'För att du snabbt ska hitta rätt kod under spelets gång är samtliga fuskkoder i vår <a href="#fuskkoder">interaktiva databas</a> uppdelade i fyra tydliga huvudkategorier:',
    catItem1:
      "<strong>Spelare:</strong> Odödlighet (God Mode), full hälsa och skyddsväst, supersprång, snabb löpning samt höj eller sänk efterlysningsnivå (Wanted Level).",
    catItem2:
      "<strong>Vapen:</strong> Komplett vapenpaket med full ammunition, explosiva skott och brinnande eldkulor.",
    catItem3:
      "<strong>Fordon:</strong> Direkt-spawn av sportbilar (t.ex. Cheetah Classic), beväpnade stridshelikoptrar, crossmotorcyklar samt drifting-läge med hala däck.",
    catItem4:
      "<strong>Värld:</strong> Växla väder i Vice City (sol, tropisk storm, dimma och åska), mångravitation och slow motion-sikte.",
    faqHeading: "Guide & Vanliga frågor om GTA 6-fusk (FAQ)",
    faq1Q: "Hur aktiverar man fuskkoder via handkontroll eller telefon?",
    faq1A:
      "I moderna Rockstar-spel finns det två huvudsakliga sätt att slå in fusk. Det snabbaste sättet är att mata in en sekvens av knappar direkt på din <strong>PlayStation 5 DualSense</strong> eller <strong>Xbox Series X|S-handkontroll</strong> medan du befinner dig i spelet (inte i pausmenyn). Knappa in kombinationen i jämn takt så dyker en bekräftelseruta upp ovanför minikartan. Det andra sättet är att öppna karaktärens mobiltelefon i spelet, gå till knappsatsen och ringa det specifika fusknumret. Telefonkoder är ofta lättare att använda eftersom du inte behöver stressa med tajmingen.",
    faq2Q: "Påverkar fuskkoder mina Trophies och Achievements?",
    faq2A:
      "Ja. Precis som i föregångarna GTA V och Red Dead Redemption 2 inaktiveras både <strong>PlayStation Trophies</strong> och <strong>Xbox Achievements</strong> tillfälligt så fort du aktiverar ett fusk. Denna spärr gäller för din pågående spelsession och kvarstår om du skulle spara över din huvudfil medan fusken är aktiva. Vårt viktigaste tips är därför att alltid skapa en manuell <em>säkerhetskopia av din sparfil</em> innan du börjar experimentera. När du har lekt klart laddar du bara om den sparade filen eller startar om spelet för att återigen kunna tjäna troféer och framsteg i berättelsen.",
    faq3Q: "Fungerar fusken i GTA 6 Online och på PC?",
    faq3A:
      "Klassiska fuskkoder är strikt reserverade för enspelarläget (Story Mode) och fungerar aldrig i ett eventuellt onlineläge. Vid lanseringen i november 2026 släpps GTA 6 till PS5 och Xbox Series X|S, och samtliga platshållare i tabellen ovan kommer att fyllas med verifierade knapptryckningar och telefonnummer direkt på lanseringsdagen.",
    faq4Q: "Finns det fuskkod för oändligt med pengar i GTA 6?",
    faq4A:
      "I föregångaren GTA V fanns det ingen direkt kod för <strong>obegränsat med pengar</strong> – det är därför troligt att även GTA 6 fokuserar på fusk för <strong>vapen, bilar, helikoptrar, odödlighet</strong> och efterlysningsnivå. Om Rockstar lägger till ett nytt pengafusk dyker det upp i listan ovan den 19 november 2026, och tills dess sparar du pengar genom att spawna fordon och full ammunition gratis.",
    aboutHeading: "Om GTA 6 Fuskkoder Sverige, källor & kontakt",
    aboutP1:
      '<strong>GTA 6 Fuskkoder Sverige</strong> är en fristående svensk spelguide skapad för att ge konsolspelare snabb och mobilvänlig tillgång till verifierade fuskkoder utan krångel. Alla koder testas manuellt på <strong>PlayStation 5</strong> och <strong>Xbox Series X|S</strong> i samband med den officiella lanseringen från <a href="https://www.rockstargames.com/VI" target="_blank" rel="noopener noreferrer">Rockstar Games (Grand Theft Auto VI)</a>, samt via plattformsutgåvorna på <a href="https://www.playstation.com/sv-se/games/grand-theft-auto-vi/" target="_blank" rel="noopener noreferrer">PlayStation Store Sverige</a> och <a href="https://www.xbox.com/sv-SE/" target="_blank" rel="noopener noreferrer">Xbox Sverige</a>.',
    aboutP2:
      'Har du hittat en ny fuskkod, ett hemligt telefonnummer i Leonida eller vill rapportera en rättelse? Kontakta redaktionen på <a href="mailto:kontakt@gta6hacks.se">kontakt@gta6hacks.se</a> eller läs mer om hur vi hanterar data och annonser på vår sida för <a href="integritet.html">integritetspolicy och cookies</a>.',
    footerDisclaimer:
      "Inofficiell svensk fansida för fuskkoder till Grand Theft Auto VI. Ej associerad med Rockstar Games eller Take-Two Interactive. Som Amazon-associates tjänar vi pengar på kvalificerade köp.",
    footerPrivacy: "Integritetspolicy & Cookies",
    footerContact: "Kontakt",
    footerCopy: "© 2026 GTA 6 Fuskkoder Sverige"
  },
  en: {
    pageTitle: "GTA 6 Cheat Codes (PS5, Xbox & Phone) – Complete Guide",
    logoSub: "CHEATS & CODES",
    releaseBadge: "Release Nov 19, 2026",
    heroTitle: "All GTA 6 Cheat Codes – PS5, Xbox & Phone",
    heroLead:
      "Search and filter upcoming cheat codes for <strong>Grand Theft Auto VI</strong> in Vice City and Leonida. Our database updates live with verified button combinations and phone numbers as soon as the game launches on November 19, 2026.",
    lastUpdated:
      'Last updated: <time datetime="2026-11-17">November 17, 2026</time> &middot; Guide for PS5, Xbox Series X|S &amp; Phone',
    navCheats: "All Cheat Codes",
    navHowTo: "How to Enter Cheats",
    navCategories: "Categories",
    navFaq: "FAQ",
    navAbout: "About & Sources",
    navPrivacy: "Privacy Policy",
    searchLabel: "Search cheat code or effect",
    searchPlaceholder: "Search cheats (e.g. god mode, weapons, helicopter, police)...",
    platformLabel: "Platform:",
    categoryLabel: "Category:",
    filterAll: "All",
    platformPhone: "Phone",
    catPlayer: "Player",
    catWeapons: "Weapons",
    catVehicles: "Vehicles",
    catWorld: "World",
    emptyTitle: "No cheat codes matched your search",
    emptyDesc: "Try another keyword or reset the filters to view all upcoming GTA 6 cheats.",
    resetBtn: "Reset all filters",
    verifiedBadge: "Verified",
    pendingBadge: "Drops Nov 19",
    pendingCode: "Drops Nov 19",
    adBadge: "Ad · Amazon",
    leftSkyTitle: "Fast M.2 SSD for PS5",
    leftSkyDesc: "Free up storage space ahead of GTA 6 in Vice City with a high-speed NVMe SSD with heatsink.",
    rightSkyTitle: "Wireless Gaming Headset",
    rightSkyDesc: "Experience 3D audio across Leonida with a wireless headset for PS5 and Xbox Series X|S.",
    skyCta: "View on Amazon →",
    topBannerTitle: "Buy Grand Theft Auto VI (PS5 & Xbox Series X)",
    topBannerSub: "Secure your copy and next-gen gaming gear with fast shipping on Amazon",
    topBannerCta: "Check price on Amazon →",
    rectTitle: "Ready for Vice City on Nov 19?",
    rectDesc:
      "Find GTA 6, wireless PS5 DualSense & Xbox controllers, gaming headsets, and high-speed M.2 SSD drives on Amazon.",
    rectCta1: "GTA 6 (PS5 & Xbox) →",
    rectCta2: "Controllers & Headsets →",
    bottomBarText: "<strong>GTA 6 &amp; Gaming Gear</strong> on Amazon",
    bottomBarCta: "View price →",
    howToTitle: "How to Enter Cheat Codes in GTA 6 – Step by Step",
    howToIntro1:
      'Ahead of the <strong>Grand Theft Auto VI</strong> launch on November 19, 2026, we have compiled the fastest and easiest-to-read reference guide for classic GTA cheat codes. Whether you want to cause total mayhem on the streets of Vice City, spawn a supercar in Leonida, or explore the map without police interference, you will find every combination right here in our <a href="#fuskkoder">searchable cheat code table</a>.',
    howToIntro2:
      "Follow these four simple steps to activate cheats safely on PlayStation 5 and Xbox Series X|S without losing your story progress:",
    step1:
      "<strong>Save your game manually:</strong> Open the menu and create a separate save slot before entering cheats, as active cheats disable Trophies and Achievements for the current session.",
    step2:
      "<strong>Stay in normal gameplay view:</strong> Controller button sequences must be entered during live gameplay (not inside the pause menu).",
    step3:
      "<strong>Enter the code via controller or phone:</strong> Press the button sequence at a steady pace on your DualSense/Xbox controller, or open your character's in-game smartphone and dial the cheat number.",
    step4:
      "<strong>Check the confirmation message:</strong> A notification appears above the minimap once the cheat is active. Reload your clean save file whenever you want to earn Trophies/Achievements again.",
    catHeading: "All Cheat Code Categories in Grand Theft Auto VI",
    catIntro:
      'To help you find the right code quickly during gameplay, all cheats in our <a href="#fuskkoder">interactive database</a> are organized into four main categories:',
    catItem1:
      "<strong>Player:</strong> Invincibility (God Mode), max health and armor, super jump, fast run, and raise or lower your Wanted Level.",
    catItem2:
      "<strong>Weapons:</strong> Full weapon loadout with max ammunition, explosive rounds, and flaming incendiary bullets.",
    catItem3:
      "<strong>Vehicles:</strong> Instant spawn for sports cars (such as the Cheetah Classic), armed attack helicopters, dirt bikes, and slidey drift mode.",
    catItem4:
      "<strong>World:</strong> Change Vice City weather (sunny, tropical storm, fog, and thunder), moon gravity, and slow-motion aiming.",
    faqHeading: "Guide & Frequently Asked Questions (GTA 6 Cheats FAQ)",
    faq1Q: "How do you activate cheat codes via controller or phone?",
    faq1A:
      "In modern Rockstar games, there are two main ways to enter cheats. The fastest method is pressing a button sequence directly on your <strong>PlayStation 5 DualSense</strong> or <strong>Xbox Series X|S controller</strong> during live gameplay (outside the pause menu). Enter the buttons at an even rhythm and a confirmation message will pop up above the minimap. The second method is opening your character's in-game smartphone, selecting the dial pad, and calling the specific cheat phone number.",
    faq2Q: "Do cheat codes disable Trophies and Achievements?",
    faq2A:
      "Yes. Just like in GTA V and Red Dead Redemption 2, both <strong>PlayStation Trophies</strong> and <strong>Xbox Achievements</strong> are temporarily disabled as soon as you activate a cheat. This block applies to your active play session and persists if you overwrite your main save file while cheats are active. Always create a manual <em>backup save file</em> before experimenting with cheats.",
    faq3Q: "Do cheats work in GTA 6 Online and on PC?",
    faq3A:
      "Classic cheat codes are strictly reserved for single-player Story Mode and never work in online multiplayer modes. At launch in November 2026, GTA 6 releases on PS5 and Xbox Series X|S, and all placeholders in the table above will be updated with verified button combinations and phone numbers on release day.",
    faq4Q: "Is there an unlimited money cheat code in GTA 6?",
    faq4A:
      "In GTA V, Rockstar did not include a direct cheat code for <strong>infinite money</strong>—so GTA 6 is also expected to focus on cheats for <strong>weapons, cars, helicopters, invincibility</strong>, and Wanted Level. If Rockstar adds a money cheat, it will be listed above on November 19, 2026; meanwhile, spawning vehicles and full ammo for free saves your in-game cash.",
    aboutHeading: "About GTA 6 Hacks & Cheats, Sources & Contact",
    aboutP1:
      '<strong>GTA 6 Fuskkoder Sverige (gta6hacks.se)</strong> is an independent gaming guide built to give console players fast, mobile-friendly access to verified cheat codes. All codes are tested manually on <strong>PlayStation 5</strong> and <strong>Xbox Series X|S</strong> upon the official release from <a href="https://www.rockstargames.com/VI" target="_blank" rel="noopener noreferrer">Rockstar Games (Grand Theft Auto VI)</a>, as well as the official platform editions on <a href="https://www.playstation.com/sv-se/games/grand-theft-auto-vi/" target="_blank" rel="noopener noreferrer">PlayStation Store</a> and <a href="https://www.xbox.com/sv-SE/" target="_blank" rel="noopener noreferrer">Xbox</a>.',
    aboutP2:
      'Found a new cheat code, a secret phone number in Leonida, or want to report a correction? Contact our editorial team at <a href="mailto:kontakt@gta6hacks.se">kontakt@gta6hacks.se</a> or read more about how we handle data and ads on our <a href="integritet.html">Privacy &amp; Cookie Policy</a> page.',
    footerDisclaimer:
      "Unofficial fan site for Grand Theft Auto VI cheat codes. Not affiliated with Rockstar Games or Take-Two Interactive. As an Amazon Associate we earn from qualifying purchases.",
    footerPrivacy: "Privacy & Cookies",
    footerContact: "Contact",
    footerCopy: "© 2026 GTA 6 Cheats (gta6hacks.se)"
  }
};

const state = {
  lang: "sv",
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
  const langButtons = document.querySelectorAll(".lang-btn");

  const AMAZON_INFEED_OFFERS = [
    {
      title: "PlayStation 5 DualSense Trådlös Handkontroll",
      titleEn: "PlayStation 5 DualSense Wireless Controller",
      desc: "Perfekt inför GTA 6 i Vice City – känn varje krock, explosion och gaspådrag med haptisk feedback.",
      descEn: "Built for GTA 6 in Vice City – feel every crash, explosion, and throttle with haptic feedback.",
      cta: "Se pris på Amazon.se →",
      ctaEn: "Check price on Amazon →",
      img: "https://m.media-amazon.com/images/I/61wKe+YH9BL._AC_SL300_.jpg",
      alt: "PlayStation 5 DualSense trådlös handkontroll på Amazon.se",
      altEn: "PlayStation 5 DualSense wireless controller on Amazon",
      url: "https://www.amazon.se/s?k=PS5+DualSense+handkontroll&tag=gta6hacks-21"
    },
    {
      title: "Trådlöst Gaming-Headset för PS5 & Xbox Series X|S",
      titleEn: "Wireless Gaming Headset for PS5 & Xbox Series X|S",
      desc: "Upplev 3D-ljudet på gatorna i Leonida med kristallklart ljud och bekväm passform för långa pass.",
      descEn: "Experience 3D audio on the streets of Leonida with crystal-clear sound and all-day comfort.",
      cta: "Kolla utbud på Amazon.se →",
      ctaEn: "Browse headsets on Amazon →",
      img: "https://m.media-amazon.com/images/I/71Gc7gSd2tL._AC_SL300_.jpg",
      alt: "Trådlöst gaming-headset för PS5 och Xbox Series X|S på Amazon.se",
      altEn: "Wireless gaming headset for PS5 and Xbox Series X|S on Amazon",
      url: "https://www.amazon.se/s?k=gaming+headset+ps5+xbox&tag=gta6hacks-21"
    },
    {
      title: "Snabb M.2 NVMe SSD med kylfläns (1 TB / 2 TB) till PS5",
      titleEn: "Fast M.2 NVMe SSD with Heatsink (1 TB / 2 TB) for PS5",
      desc: "Frigör lagringsutrymme och få blixtsnabba laddningstider inför installationen av Grand Theft Auto VI.",
      descEn: "Expand your storage and get blazing-fast load times ahead of installing Grand Theft Auto VI.",
      cta: "Jämför SSD på Amazon.se →",
      ctaEn: "Compare SSDs on Amazon →",
      img: "https://m.media-amazon.com/images/I/71HdPilz0CL._AC_SL300_.jpg",
      alt: "Snabb M.2 NVMe SSD med kylfläns till PS5 på Amazon.se",
      altEn: "Fast M.2 NVMe SSD with heatsink for PS5 on Amazon",
      url: "https://www.amazon.se/s?k=ps5+ssd+m2+heatsink&tag=gta6hacks-21"
    }
  ];

  /**
   * Detekterar språk:
   * 1. ?lang=en eller ?lang=sv i URL:en
   * 2. Sparat val i localStorage
   * 3. Automatisk detektering via navigator.languages (för riktiga besökare som inte har svenska)
   */
  function detectInitialLanguage() {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = (params.get("lang") || "").toLowerCase();
      if (urlLang === "en" || urlLang === "sv") {
        return urlLang;
      }
    } catch (_e) {
      // Ignorera URL-fel
    }

    try {
      const saved = localStorage.getItem("gta6_lang");
      if (saved === "en" || saved === "sv") {
        return saved;
      }
    } catch (_e) {
      // Ignorera om localStorage är blockerat
    }

    // Låt sökmotorrobotar och automatiserade SEO-verktyg se svenska grundversionen på "/"
    const ua = navigator.userAgent || "";
    const isBotOrAudit =
      Boolean(navigator.webdriver) ||
      /bot|crawl|spider|slurp|lighthouse|pagespeed|gtmetrix|screaming|playwright|headless/i.test(ua);
    if (isBotOrAudit) {
      return "sv";
    }

    const browserLangs = Array.isArray(navigator.languages) && navigator.languages.length
      ? navigator.languages
      : [navigator.language || "sv"];

    const hasSwedish = browserLangs.some((l) => String(l).toLowerCase().startsWith("sv"));
    return hasSwedish ? "sv" : "en";
  }

  /**
   * Uppdaterar alla statiska texter på sidan till valt språk (sv eller en).
   */
  function applyLanguage(lang) {
    state.lang = lang === "en" ? "en" : "sv";
    const dict = I18N[state.lang];

    document.documentElement.lang = state.lang;
    document.title = dict.pageTitle;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (key && dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    if (searchInput) {
      searchInput.placeholder = dict.searchPlaceholder;
    }

    langButtons.forEach((btn) => {
      const isMatch = btn.dataset.lang === state.lang;
      btn.classList.toggle("active", isMatch);
      btn.setAttribute("aria-pressed", isMatch ? "true" : "false");
    });

    renderCheats();
  }

  /**
   * Skapar <kbd>-element för knappkombinationer eller platshållartext.
   */
  function buildCodeSequence(codeValue) {
    const seqContainer = document.createElement("div");
    seqContainer.className = "code-sequence";
    const dict = I18N[state.lang];

    const isPlaceholder = !codeValue || codeValue.toLowerCase().includes("publiceras");
    if (isPlaceholder) {
      const kbd = document.createElement("kbd");
      kbd.className = "kbd-token kbd-pending";
      kbd.textContent = dict.pendingCode;
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
   * Skapar ett enskilt fuskkort på valt språk.
   */
  function createCheatCard(cheat, activePlatform) {
    const isEn = state.lang === "en";
    const dict = I18N[state.lang];

    const card = document.createElement("article");
    card.className = "cheat-card";

    // Rubrik & badges
    const header = document.createElement("div");
    header.className = "cheat-card-header";

    const title = document.createElement("h2");
    title.className = "cheat-title";
    title.textContent = isEn ? cheat.titleEn : cheat.title;

    const badges = document.createElement("div");
    badges.className = "cheat-badges";

    const catBadge = document.createElement("span");
    catBadge.className = "badge badge-category";
    catBadge.textContent = isEn ? cheat.categoryEn : cheat.category;

    const statusBadge = document.createElement("span");
    statusBadge.className = cheat.verified ? "badge badge-verified" : "badge badge-pending";
    statusBadge.textContent = cheat.verified ? dict.verifiedBadge : dict.pendingBadge;

    badges.append(catBadge, statusBadge);
    header.append(title, badges);

    // Beskrivning
    const desc = document.createElement("p");
    desc.className = "cheat-description";
    desc.textContent = isEn ? cheat.descriptionEn : cheat.description;

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
      tag.textContent = isEn ? meta.labelEn : meta.label;

      const sequence = buildCodeSequence(cheat[key]);
      row.append(tag, sequence);
      codesWrap.appendChild(row);
    });

    card.append(header, desc, codesWrap);
    return card;
  }

  /**
   * Skapar ett in-feed-annonskort som skjuts in efter var 4:e fuskkod.
   * Visar Amazon-rekommendation tills Google AdSense fyllt platsen.
   */
  function createInFeedAdCard(slotIndex) {
    const isEn = state.lang === "en";
    const dict = I18N[state.lang];

    const adWrap = document.createElement("div");
    adWrap.className = "infeed-ad-card";
    adWrap.setAttribute("role", "complementary");
    adWrap.setAttribute("aria-label", isEn ? `Ad ${slotIndex}` : `Annons ${slotIndex}`);

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
    thumb.alt = isEn ? offer.altEn : offer.alt;
    thumb.width = 96;
    thumb.height = 88;
    thumb.loading = "lazy";
    thumb.className = "amazon-thumb";

    const copyWrap = document.createElement("div");
    copyWrap.className = "amazon-banner-copy";

    const badge = document.createElement("span");
    badge.className = "amazon-badge";
    badge.textContent = dict.adBadge;

    const title = document.createElement("strong");
    title.className = "amazon-banner-title";
    title.textContent = isEn ? offer.titleEn : offer.title;

    const desc = document.createElement("span");
    desc.className = "amazon-banner-sub";
    desc.textContent = isEn ? offer.descEn : offer.desc;

    const cta = document.createElement("span");
    cta.className = "amazon-cta";
    cta.textContent = isEn ? offer.ctaEn : offer.cta;

    copyWrap.append(badge, title, desc);
    fallbackLink.append(thumb, copyWrap, cta);

    adWrap.append(ins, fallbackLink);
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
    const isEn = state.lang === "en";

    const filtered = cheatsData.filter((item) => {
      const matchesCategory = state.category === "Alla" || item.category === state.category;
      const matchesPlatform = state.platform === "all" || Boolean(item[state.platform]);
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.titleEn.toLowerCase().includes(query) ||
        item.descriptionEn.toLowerCase().includes(query);

      return matchesCategory && matchesPlatform && matchesSearch;
    });

    gridEl.textContent = "";

    if (filtered.length === 0) {
      emptyStateEl.hidden = false;
      resultsCountEl.textContent = isEn ? "0 cheat codes found" : "0 fuskkoder hittades";
      return;
    }

    emptyStateEl.hidden = true;
    if (isEn) {
      resultsCountEl.textContent =
        filtered.length === cheatsData.length
          ? `Showing all ${filtered.length} cheat codes`
          : `Showing ${filtered.length} of ${cheatsData.length} cheat codes`;
    } else {
      resultsCountEl.textContent =
        filtered.length === cheatsData.length
          ? `Visar alla ${filtered.length} fuskkoder`
          : `Visar ${filtered.length} av ${cheatsData.length} fuskkoder`;
    }

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

  // Språkväxlare (SV / EN)
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const chosen = btn.dataset.lang === "en" ? "en" : "sv";
      try {
        localStorage.setItem("gta6_lang", chosen);
      } catch (_e) {
        // Ignorera om localStorage är blockerat
      }
      applyLanguage(chosen);
    });
  });

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
        siteFooter.classList.remove("has-bottom-ad");
        siteFooter.classList.add("banner-dismissed");
      }
    });
  }

  /**
   * Övervakar AdSense-enheter: när Google fyller en plats (data-ad-status="filled")
   * döljs Amazon-fallbacken automatiskt till förmån för AdSense-annonsen.
   */
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

  // Initial rendering med automatisk språkdetektering
  observeAdSlots();
  applyLanguage(detectInitialLanguage());
});
