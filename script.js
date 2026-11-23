/**
 * GTA 6 Fuskkoder (Svenska) – Komplett lista med alla 61 fusk, verifierade D-Pad-koder,
 * exakta upplåsningskrav, livesökning, filtrering och dynamiska in-feed-annonser.
 */

const cheatsData = [
  // ==========================================
  // SPELARE (10 Player Cheats)
  // ==========================================
  {
    title: "$250 000 Pengar (Instant Cash)",
    category: "Spelare",
    description: "Ger dig omedelbart $250 000 på kontot. Krav: Klara huvudberättelsen (alla 91 uppdrag). Ta upp mobilen (↑), håll inne L1 och tryck R1 (PS5) / håll inne LB och tryck RB (Xbox) och slå in pilkoden.",
    verified: true,
    ps5: "L1 + R1, Upp, Höger, Ner, Vänster, Upp, Vänster, Ner, Höger",
    xbox: "LB + RB, Upp, Höger, Ner, Vänster, Upp, Vänster, Ner, Höger",
    phone: "Krav: Klara storyn (91 uppdrag)"
  },
  {
    title: "Oändligt Fokus (Unlimited Focus)",
    category: "Spelare",
    description: "Din specialförmåga (Focus) tar aldrig slut. Krav: Klara huvudberättelsen. Ta upp mobilen (↑), håll inne L1 och tryck R1 (PS5) / håll inne LB och tryck RB (Xbox) och mata in pilkoden.",
    verified: true,
    ps5: "L1 + R1, Ner, Upp, Upp, Ner, Upp, Ner, Upp, Ner, Upp, Höger",
    xbox: "LB + RB, Ner, Upp, Upp, Ner, Upp, Ner, Upp, Ner, Upp, Höger",
    phone: "Krav: Klara storyn (91 uppdrag)"
  },
  {
    title: "Skyddsväst (Body Armor)",
    category: "Spelare",
    description: "Lägger till full skyddsväst i din utrustning direkt. Koden accepteras först när utmaningen är avklarad. Krav för upplåsning: Genomför 100 träningspass (Workouts).",
    verified: true,
    ps5: "L1 + R1, Ner, Upp, Vänster, Upp, Upp, Upp, Upp, Upp, Ner, Ner",
    xbox: "LB + RB, Ner, Upp, Vänster, Upp, Upp, Upp, Upp, Upp, Ner, Ner",
    phone: "Krav: Genomför 100 träningspass (Workouts)"
  },
  {
    title: "Höj Heat-nivå (Raise Heat Level)",
    category: "Spelare",
    description: "Ökar din Heat-nivå hos polisen i Leonida. Koden accepteras först när utmaningen är klar. Krav för upplåsning: Bli av med 3-stjärnig efterlysning 25 gånger.",
    verified: true,
    ps5: "L1 + R1, Vänster, Ner, Höger, Ner, Upp, Ner, Upp",
    xbox: "LB + RB, Vänster, Ner, Höger, Ner, Upp, Ner, Upp",
    phone: "Krav: Bli av med 3 stjärnor 25 gånger"
  },
  {
    title: "Höj Efterlysningsnivå (Raise Wanted Level)",
    category: "Spelare",
    description: "Ökar din aktiva Wanted Level direkt för intensiv polisjakt. Koden accepteras först när utmaningen är klar. Krav för upplåsning: Bli av med 3-stjärnig efterlysning 50 gånger.",
    verified: true,
    ps5: "L1 + R1, Vänster, Ner, Höger, Ner, Upp, Höger, Upp",
    xbox: "LB + RB, Vänster, Ner, Höger, Ner, Upp, Höger, Upp",
    phone: "Krav: Bli av med 3 stjärnor 50 gånger"
  },
  {
    title: "Ingen Fallskada (No Fall Damage)",
    category: "Spelare",
    description: "Gör dig helt immun mot fallskador från höga höjder. Krav för upplåsning: Överlev 20 fria fall från minst 12 meter (40 fot).",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Överlev 20 fria fall från 12 m (40 fot)"
  },
  {
    title: "Fallskärm (Parachute)",
    category: "Spelare",
    description: "Lägger till en fallskärm direkt i din utrustning. Krav för upplåsning: Genomför 50 fallskärmshopp från minst 90 meter (300 fot).",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: 50 fallskärmshopp från 300 fot+"
  },
  {
    title: "Fylleri-läge (Drunk Mode)",
    category: "Spelare",
    description: "Gör omedelbart både dig och din partner berusade. Koden accepteras först när utmaningen är klar. Krav för upplåsning: Spendera totalt $2 500 på alkohol i spelet.",
    verified: true,
    ps5: "L1 + R1, Upp, Vänster, Höger, Upp, Upp, Vänster, Höger, Upp, Vänster, Höger",
    xbox: "LB + RB, Upp, Vänster, Höger, Upp, Upp, Vänster, Höger, Upp, Vänster, Höger",
    phone: "Krav: Spendera $2 500 på alkohol"
  },
  {
    title: "Reparera Fordon (Repair Vehicle)",
    category: "Spelare",
    description: "Reparerar omedelbart ditt nuvarande fordon till nyskick. Krav: Ta 1:a plats i 10 lopp på Gellhorn Raceway, Thrillbilly Mud Club och Boone Speedway.",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Vinn 1:a plats i 10 lopp"
  },
  {
    title: "Oändlig Lustgas & Bränsle (Unlimited Nitrous)",
    category: "Spelare",
    description: "Lustgas (Nitrous) och bränsle tar aldrig slut i fordon. Krav för upplåsning: Klara 50 stunthopp (Stunt Jumps) i Leonida.",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Klara 50 stunthopp (Stunt Jumps)"
  },

  // ==========================================
  // VAPEN & STRID (11 Combat Cheats)
  // ==========================================
  {
    title: "Full Ammunition (Max Ammo)",
    category: "Vapen",
    description: "Fyller omedelbart på maximal ammunition till alla dina vapen. Krav för upplåsning: Vinn 25 bronsmedaljer eller högre på skjutbanan (Shooting Range).",
    verified: true,
    ps5: "L1 + R1, Ner, Upp, Höger, Ner, Vänster, Vänster, Upp, Upp, Ner, Vänster",
    xbox: "LB + RB, Ner, Upp, Höger, Ner, Vänster, Vänster, Upp, Upp, Ner, Vänster",
    phone: "Krav: 25 bronsmedaljer på skjutbanan"
  },
  {
    title: "Oändlig Ammunition (Infinite Ammo)",
    category: "Vapen",
    description: "Din ammunition tar aldrig slut när du skjuter. Krav för upplåsning: Vinn 25 silvermedaljer eller högre på skjutbanan (Shooting Range).",
    verified: true,
    ps5: "L1 + R1, Ner, Upp, Höger, Ner, Vänster, Vänster, Upp, Ner, Ner, Ner",
    xbox: "LB + RB, Ner, Upp, Höger, Ner, Vänster, Vänster, Upp, Ner, Ner, Ner",
    phone: "Krav: 25 silvermedaljer på skjutbanan"
  },
  {
    title: "Ingen Omladdning (No Reload)",
    category: "Vapen",
    description: "Oändlig ammunition och du behöver aldrig ladda om vapnet. Krav för upplåsning: Vinn 25 guldmedaljer på skjutbanan (Shooting Range).",
    verified: true,
    ps5: "L1 + R1, Ner, Upp, Höger, Ner, Vänster, Vänster, Upp, Ner, Ner, Upp",
    xbox: "LB + RB, Ner, Upp, Höger, Ner, Vänster, Vänster, Upp, Ner, Ner, Upp",
    phone: "Krav: 25 guldmedaljer på skjutbanan"
  },
  {
    title: "Superkraft i Skott & Närstrid (Attack Force)",
    category: "Vapen",
    description: "Kulor och närstridsattacker slungar iväg fiender med enorm kraft vid träff. Krav för upplåsning: Klara huvudberättelsen (91 uppdrag).",
    verified: true,
    ps5: "L1 + R1, Ner, Upp, Vänster, Vänster, Höger, Ner, Ner, Upp, Ner",
    xbox: "LB + RB, Ner, Upp, Vänster, Vänster, Höger, Ner, Ner, Upp, Ner",
    phone: "Krav: Klara storyn (91 uppdrag)"
  },
  {
    title: "Explosiva Sportbollar (Exploding Balls)",
    category: "Vapen",
    description: "Alla sportbollar exploderar våldsamt vid nedslag. Krav för upplåsning: Träffa 20 fiender med explosiv skada.",
    verified: true,
    ps5: "L1 + R1, Ner, Upp, Vänster, Vänster, Höger, Ner, Ner, Upp, Höger",
    xbox: "LB + RB, Ner, Upp, Vänster, Vänster, Höger, Ner, Ner, Upp, Höger",
    phone: "Krav: Träffa 20 fiender med explosiv skada"
  },
  {
    title: "Fordonskraft – Krockar Slungar Mål (Vehicle Force)",
    category: "Vapen",
    description: "Kollisioner med ditt fordon slungar iväg andra bilar och mål genom luften. Krav för upplåsning: Besegra 25 fiender med ett fordon.",
    verified: true,
    ps5: "L1 + R1, Ner, Upp, Vänster, Vänster, Höger, Ner, Vänster, Upp, Ner",
    xbox: "LB + RB, Ner, Upp, Vänster, Vänster, Höger, Ner, Vänster, Upp, Ner",
    phone: "Krav: Besegra 25 fiender med fordon"
  },
  {
    title: "Alla Explosiva Vapen (All Explosive Weapons)",
    category: "Vapen",
    description: "Lägger till samtliga explosiva vapen med full ammunition i din utrustning. Krav för upplåsning: Kasta 100 handgranater.",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Kasta 100 granater"
  },
  {
    title: "Brandammunition (Incendiary Ammo)",
    category: "Vapen",
    description: "Förvandlar all din vanliga vapenammunition till brinnande skott som sätter eld på mål. Krav för upplåsning: Bränn 100 fiender med eldskada.",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Bränn 100 fiender med eldskada"
  },
  {
    title: "Explosiva Flaskor (Exploding Bottles)",
    category: "Vapen",
    description: "Gör att alla flaskor i spelvärlden exploderar när de skadas eller träffas. Krav för upplåsning: Kasta 100 Molotov-cocktails.",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Kasta 100 Molotovs"
  },
  {
    title: "Explosivt Hagelgevär (Explosive Shotgun – Shortstraw)",
    category: "Vapen",
    description: "Ger dig hagelgeväret Mason & Keen Shortstraw laddat med explosiva patroner. Krav för upplåsning: Träffa 100 fiender med explosiv skada.",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Träffa 100 fiender med explosiv skada"
  },
  {
    title: "Hauners H-AT (Pansarvärnsvapen)",
    category: "Vapen",
    description: "Lägger till det tunga pansarvärnsvapnet Hauners H-AT i din vapenarsenal. Krav för upplåsning: Spräng 100 fordon i luften.",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Spräng 100 fordon"
  },

  // ==========================================
  // FORDON (21 Spawn Vehicle Cheats)
  // ==========================================
  {
    title: "Spawna Maibatsu Boomazoom",
    category: "Fordon",
    description: "Frammanar en Maibatsu Boomazoom direkt på din position. Krav för upplåsning: Klara 5 shoppingutmaningar (Shopping Challenges).",
    verified: true,
    ps5: "L1 + R1, Vänster, Upp, Höger, Ner, Vänster, Vänster, Upp, Vänster",
    xbox: "LB + RB, Vänster, Upp, Höger, Ner, Vänster, Vänster, Upp, Vänster",
    phone: "Krav: Klara 5 Shopping Challenges"
  },
  {
    title: "Spawna MTL Pumper (Brandbil)",
    category: "Fordon",
    description: "Frammanar brandbilen MTL Pumper direkt framför dig. Krav för upplåsning: Upptäck MTL Pumper i Progress-menyn.",
    verified: true,
    ps5: "L1 + R1, Vänster, Upp, Höger, Ner, Vänster, Höger, Höger, Upp",
    xbox: "LB + RB, Vänster, Upp, Höger, Ner, Vänster, Höger, Höger, Upp",
    phone: "Krav: Upptäck MTL Pumper i Progress-menyn"
  },
  {
    title: "Spawna HVY Bulldozer",
    category: "Fordon",
    description: "Frammanar den tunga schaktmaskinen HVY Bulldozer. Krav för upplåsning: Upptäck HVY Bulldozer i Progress-menyn.",
    verified: true,
    ps5: "L1 + R1, Vänster, Upp, Höger, Ner, Vänster, Höger, Höger, Ner",
    xbox: "LB + RB, Vänster, Upp, Höger, Ner, Vänster, Höger, Höger, Ner",
    phone: "Krav: Upptäck HVY Bulldozer i Progress-menyn"
  },
  {
    title: "Spawna Stridsvagn (Hauners Rhino Tank)",
    category: "Fordon",
    description: "Frammanar den bepansrade stridsvagnen Hauners Rhino Tank. Krav för upplåsning: Klara samtliga överlevnadsutmaningar (Survival Challenges).",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Klara alla Survival-utmaningar"
  },
  {
    title: "Spawna Stridsflygplan (Hauners P-996 Lazer)",
    category: "Fordon",
    description: "Frammanar stridsflygplanet Hauners P-996 Lazer Jet. Krav för upplåsning: Klara samtliga utmaningar i hela spelet (100% Challenges).",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Klara alla utmaningar i spelet"
  },
  {
    title: "Spawna Sportbil (Bravado Banshee)",
    category: "Fordon",
    description: "Frammanar sportbilen Bravado Banshee direkt framför dig. Krav för upplåsning: Klara samtliga stridsutmaningar (Combat Challenges).",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Klara alla Combat Challenges"
  },
  {
    title: "Spawna Hyperbil (Progen Emerus)",
    category: "Fordon",
    description: "Frammanar hyperbilen Progen Emerus. Krav för upplåsning: Klara samtliga fordonsutmaningar (Vehicle Challenges).",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Klara alla Vehicle Challenges"
  },
  {
    title: "Spawna Superbil (Truffade Thrax)",
    category: "Fordon",
    description: "Frammanar lyxiga superbilen Truffade Thrax i Vice City. Krav för upplåsning: Klara samtliga shoppingutmaningar (Shopping Challenges).",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Klara alla Shopping Challenges"
  },
  {
    title: "Spawna Muskelbil ('65 Vapid Dominator)",
    category: "Fordon",
    description: "Frammanar den klassiska muskelbilen '65 Vapid Dominator. Krav för upplåsning: Klara samtliga träningsutmaningar (Fitness Challenges).",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Klara alla Fitness Challenges"
  },
  {
    title: "Spawna Sporthoj (Nagasaki Carbon RS)",
    category: "Fordon",
    description: "Frammanar den snabba motorcykeln Nagasaki Carbon RS. Krav för upplåsning: Klara samtliga utforskningsutmaningar (Exploration Challenges).",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Klara alla Exploration Challenges"
  },
  {
    title: "Spawna Chopper (Western Zombie Bobber)",
    category: "Fordon",
    description: "Frammanar motorcykeln Western Zombie Bobber. Krav för upplåsning: Klara samtliga brottsutmaningar (Criminal Challenges).",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Klara alla Criminal Challenges"
  },
  {
    title: "Spawna Golfbil (Brimstone Golfer)",
    category: "Fordon",
    description: "Frammanar en Brimstone Golfer direkt på din position. Krav för upplåsning: Klara samtliga sportutmaningar (Sports Challenges).",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Klara alla Sports Challenges"
  },
  {
    title: "Spawna Sjöhelikopter (Nagasaki Sea Sparrow)",
    category: "Fordon",
    description: "Frammanar helikoptern Nagasaki Sea Sparrow som kan landa på vatten. Krav för upplåsning: Klara 5 utforskningsutmaningar (Exploration Challenges).",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Klara 5 Exploration Challenges"
  },
  {
    title: "Spawna Träskbåt (Airboat 09)",
    category: "Fordon",
    description: "Frammanar en snabb Airboat 09 perfekt för våtmarkerna i Leonida. Krav för upplåsning: Klara 5 överlevnadsutmaningar (Survival Challenges).",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Klara 5 Survival Challenges"
  },
  {
    title: "Spawna Racerbåt (Speeder 700 GT)",
    category: "Fordon",
    description: "Frammanar motorbåten Speeder 700 GT. Krav för upplåsning: Klara 5 stridsutmaningar (Combat Challenges).",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Klara 5 Combat Challenges"
  },
  {
    title: "Spawna Stuntflygplan (Lapwing Mallard)",
    category: "Fordon",
    description: "Frammanar det akrobatiska propellerplanet Lapwing Mallard. Krav för upplåsning: Klara 5 fordonsutmaningar (Vehicle Challenges).",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Klara 5 Vehicle Challenges"
  },
  {
    title: "Spawna Crossmotorcykel (Maibatsu Sanchez)",
    category: "Fordon",
    description: "Frammanar terrängmotorcykeln Maibatsu Sanchez. Krav för upplåsning: Klara 5 brottsutmaningar (Criminal Challenges).",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Klara 5 Criminal Challenges"
  },
  {
    title: "Spawna BMX-cykel (Tuff BMX)",
    category: "Fordon",
    description: "Frammanar en Tuff BMX-cykel för tricks och hopp i Vice City. Krav för upplåsning: Klara 5 träningsutmaningar (Fitness Challenges).",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Klara 5 Fitness Challenges"
  },
  {
    title: "Spawna Taxi (Vapid Stanier G2 Taxi)",
    category: "Fordon",
    description: "Frammanar en Vapid Stanier G2 Taxi. Krav för upplåsning: Klara 5 sportutmaningar (Sports Challenges).",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Klara 5 Sports Challenges"
  },
  {
    title: "Spawna Ambulans (Interstate Ambulance)",
    category: "Fordon",
    description: "Frammanar utryckningsfordonet Interstate Ambulance. Krav för upplåsning: Upptäck Interstate Ambulance i Progress-menyn.",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Upptäck Interstate Ambulance i Progress"
  },
  {
    title: "Spawna Uppblåsbar Flamingo (Inflatable Flamingo)",
    category: "Fordon",
    description: "Frammanar en uppblåsbar rosa flamingo (Inflatable Flamingo). Krav för upplåsning: Förstör 50 kokain-flamingor (Cocaine Flamingos) i Leonida.",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Förstör 50 Cocaine Flamingos"
  },

  // ==========================================
  // VÄRLD & SKÄRMFILTER (3 Environment + 16 Screen Filters)
  // ==========================================
  {
    title: "Ändra Väder i Vice City (Cycle Weather)",
    category: "Värld",
    description: "Växlar dynamiskt mellan solsken, tropisk storm, dimma, regn och åskväder i Leonida. Krav: Klara huvudberättelsen / öppna hela kartan.",
    verified: true,
    ps5: "L1 + R1, Ner, Höger, Upp, Ner, Höger, Upp, Höger",
    xbox: "LB + RB, Ner, Höger, Upp, Ner, Höger, Upp, Höger",
    phone: "Krav: Klara storyn / öppna hela kartan"
  },
  {
    title: "Spola Fram Tiden (Move Time Forward)",
    category: "Värld",
    description: "Spolar fram tiden på dygnet i spelet. Krav för upplåsning: Hitta 10 samlarklockor (Collectible Watches) runt om i Leonida.",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Hitta 10 samlarklockor"
  },
  {
    title: "Pausa Tiden på Dygnet (Pause Time of Day)",
    category: "Värld",
    description: "Låser den nuvarande tiden på dygnet. Krav för upplåsning: Hitta 20 samlarklockor (Collectible Watches) på kartan.",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Hitta 20 samlarklockor"
  },
  {
    title: "Cataclysm – Mörk Rök (Skärmfilter)",
    category: "Värld",
    description: "Fyller hela spelvärlden i Leonida med tät, apokalyptisk rök. Krav för upplåsning: Upptäck Martha's Vamos i Progress-menyn.",
    verified: true,
    ps5: "L1 + R1, Ner, Ner, Upp, Höger, Höger, Upp, Vänster, Vänster, Höger, Höger",
    xbox: "LB + RB, Ner, Ner, Upp, Höger, Höger, Upp, Vänster, Vänster, Höger, Höger",
    phone: "Krav: Upptäck Martha's Vamos i Progress"
  },
  {
    title: "Dollhouse – Dockhus (Skärmfilter)",
    category: "Värld",
    description: "Ger spelet ett färgstarkt dockhusfilter med smalt bildformat. Krav för upplåsning: Spendera 8 timmar tillsammans med din partner.",
    verified: true,
    ps5: "L1 + R1, Ner, Ner, Upp, Höger, Höger, Upp, Vänster, Vänster, Ner, Höger",
    xbox: "LB + RB, Ner, Ner, Upp, Höger, Höger, Upp, Vänster, Vänster, Ner, Höger",
    phone: "Krav: Spendera 8 timmar med din partner"
  },
  {
    title: "Faded Glory – Färg-CRT TV (Skärmfilter)",
    category: "Värld",
    description: "Applicerar ett nostalgiskt färg-CRT TV-filter över skärmen. Krav för upplåsning: Råna 50 butiker tillsammans med din partner.",
    verified: true,
    ps5: "L1 + R1, Ner, Ner, Upp, Höger, Höger, Upp, Vänster, Vänster, Vänster, Höger",
    xbox: "LB + RB, Ner, Ner, Upp, Höger, Höger, Upp, Vänster, Vänster, Vänster, Höger",
    phone: "Krav: Råna 50 butiker med din partner"
  },
  {
    title: "Golden Hour – Gyllene Timmen (Skärmfilter)",
    category: "Värld",
    description: "Applicerar ett filmiskt gyllene solnedgångsfilter med bredbildsformat (widescreen). Krav för upplåsning: Håll handen med din partner i totalt 4 timmar.",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Håll handen med din partner i 4 timmar"
  },
  {
    title: "Powdered Sugar – Florsocker (Skärmfilter)",
    category: "Värld",
    description: "Förvandlar spelvärlden till vitt med gnistrande ljuseffekter. Krav för upplåsning: Skanna allt rymdskrot (Space Debris) med WAiNK.",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Skanna allt rymdskrot med WAiNK"
  },
  {
    title: "Neon Jungle – Neondjungel (Skärmfilter)",
    category: "Värld",
    description: "Dränker Vice City och Leonida i intensiva neonkontraster. Krav för upplåsning: Upptäck alla 16 Girlypop-fordon i spelet.",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Upptäck alla 16 Girlypop-fordon"
  },
  {
    title: "Pinhole – Hålkamera (Skärmfilter)",
    category: "Värld",
    description: "Applicerar ett klassiskt hålkamerafilter med mörk vinjett. Krav för upplåsning: Rensa 25 gängoperationer (Gang Operations) med din partner.",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Rensa 25 gängoperationer med partner"
  },
  {
    title: "Yesteryear – Svartvit CRT-TV (Skärmfilter)",
    category: "Värld",
    description: "Ger spelet ett klassiskt svartvitt tjock-TV-filter (CRT). Krav för upplåsning: Upptäck The Ridgway i Progress-menyn.",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Upptäck The Ridgway i Progress"
  },
  {
    title: "Fast Forward – Snabbspolning (Skärmfilter)",
    category: "Värld",
    description: "Lägger till rörelseoskärpa (motion blur) och snabbar upp molnens rörelser på himlen. Krav för upplåsning: Genomför 50 meditationer.",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Genomför 50 meditationer"
  },
  {
    title: "Fisheye – Fisköga (Skärmfilter)",
    category: "Värld",
    description: "Ger kameran ett extremt vidvinkligt fisheye-objektiv. Krav för upplåsning: Fånga 100 fiskar i Leonida.",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Fånga 100 fiskar"
  },
  {
    title: "Pixel Art – Retro Pixlar (Skärmfilter)",
    category: "Värld",
    description: "Förvandlar grafiken till ett retro-pixelerat 8-bitars/16-bitars filter. Krav för upplåsning: Tjäna $250 000 på att sälja samlarföremål (Collectibles).",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Tjäna $250 000 på att sälja samlarföremål"
  },
  {
    title: "Hellscape – Helveteshetta (Skärmfilter)",
    category: "Värld",
    description: "Färgar världen glödande röd och orange med dallrande värmedis. Krav för upplåsning: Stjäl 100 polisbilar.",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Stjäl 100 polisbilar"
  },
  {
    title: "Videotape – VHS-kassett (Skärmfilter)",
    category: "Värld",
    description: "Ger bilden ett retro 80-tals VHS-videobandsfilter. Krav för upplåsning: Genomför 50 aktiviteter tillsammans med din partner.",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Genomför 50 aktiviteter med partner"
  },
  {
    title: "Dark Mirror – Mörk Spegel (Skärmfilter)",
    category: "Värld",
    description: "Vänder hela spelvärlden upp och ner och färgar den mörk. Krav för upplåsning: Tjäna $500 000 på att sälja stulna fordon.",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Tjäna $500 000 på att sälja fordon"
  },
  {
    title: "Migraine – Migrän (Skärmfilter)",
    category: "Värld",
    description: "Applicerar ett suddigt och förvrängt synfält över skärmen. Krav för upplåsning: Överlev i 6 minuter med 6-stjärnig efterlysningsnivå (6-Star Wanted Level).",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Överlev 6 min med 6 stjärnor (Wanted Level)"
  },
  {
    title: "Bubblegum – Tuggummi (Skärmfilter)",
    category: "Värld",
    description: "Färgar världen lila och gul med glittrande ljuspunkter. Krav för upplåsning: Hitta alla 24 samlarkort för Vice City Flamingos.",
    verified: false,
    ps5: "Pausmeny: Progress → Cheats",
    xbox: "Pausmeny: Progress → Cheats",
    phone: "Krav: Hitta alla 24 Vice City Flamingos-kort"
  }
];

const PLATFORM_META = {
  ps5: { label: "PS5 (via Mobil)", className: "platform-ps5" },
  xbox: { label: "Xbox (via Mobil)", className: "platform-xbox" },
  phone: { label: "Mobil / Meny", className: "platform-phone" }
};

const SAFE_CODES_SEARCH_DATA = [
  {
    title: "Kassaskåpskod: Brooks Boatworks (Chapter 2)",
    category: "Kassaskåp",
    description: "Fast kassaskåpskod för Illegal Operation i nordöstra Port Gellhorn (Chapter 2). Smyg in genom hålet i det östra staketet upp till kontoret i den grå byggnaden – väggkartan bredvid loggar alla 3 koder.",
    verified: true,
    ps5: "6, 8, 2, 3",
    xbox: "6, 8, 2, 3",
    phone: "Port Gellhorn · Chapter 2 (Illegal Operation)"
  },
  {
    title: "Kassaskåpskod: La Cascara Motel (Chapter 2)",
    category: "Kassaskåp",
    description: "Fast kassaskåpskod för Illegal Operation på La Cascara Motel i Port Gellhorn (Chapter 2). Fungerar direkt under dina första timmar i Story Mode.",
    verified: true,
    ps5: "6, 9, 6, 9",
    xbox: "6, 9, 6, 9",
    phone: "Port Gellhorn · Chapter 2 (Illegal Operation)"
  },
  {
    title: "Kassaskåpskod: Kingpin Bowling (Chapter 2)",
    category: "Kassaskåp",
    description: "Fast kassaskåpskod för Illegal Operation inne på bakkontoret i Kingpin Bowling i Port Gellhorn (Chapter 2). Vanliga butiksrån har däremot slumpade koder varje gång.",
    verified: true,
    ps5: "0, 3, 0, 0",
    xbox: "0, 3, 0, 0",
    phone: "Port Gellhorn · Chapter 2 (Illegal Operation)"
  },
  {
    title: "Dörrkod: Moonstone Boutique / Acid Lab (Lab Fees)",
    category: "Story-kod",
    description: "Fast keypad-kod till bakdörren på Moonstone Boutique (Acid Lab) under uppdraget Lab Fees (Brian's Rent) i Chapter 1.",
    verified: true,
    ps5: "0, 4, 2, 0",
    xbox: "0, 4, 2, 0",
    phone: "Uppdrag: Lab Fees · Chapter 1 (Keypad)"
  },
  {
    title: "Dörrkod: Brian's Lockup (Lab Fees)",
    category: "Story-kod",
    description: "Fast dörrkod till Brian's Lockup (stöldgodsförrådet) under uppdraget Lab Fees i Chapter 1.",
    verified: true,
    ps5: "7, 7, 0, 0",
    xbox: "7, 7, 0, 0",
    phone: "Uppdrag: Lab Fees · Chapter 1 (Keypad)"
  },
  {
    title: "Datorlösenord: Pelican Valley Crab Research Outpost",
    category: "Story-kod",
    description: "Lösenordet till datorn på Pelican Valley Crab Research Outpost (hittas inristat på golvet i sidorummet när du slagit på strömmen utomhus).",
    verified: true,
    ps5: "CLEAVES",
    xbox: "CLEAVES",
    phone: "Pelican Valley · Crabshack VF5 SMG-pussel"
  },
  {
    title: "Kassaskåpskod: Pelican Valley Crab Research Outpost",
    category: "Kassaskåp",
    description: "Fast kassaskåpskod (dubbla labbnumret 0036) i Pelican Valley Crab Research Outpost. Innehåller koden 0212 till hamnbyggnaden med det unika vapnet Crabshack VF5 SMG.",
    verified: true,
    ps5: "0, 0, 7, 2",
    xbox: "0, 0, 7, 2",
    phone: "Pelican Valley · Crabshack VF5 SMG-pussel"
  },
  {
    title: "Keypad-kod: Pelican Valley Dock Building (Crabshack VF5 SMG)",
    category: "Story-kod",
    description: "Låser upp hamnbyggnaden vid Pelican Valley Crab Research Outpost där du hittar det unika vapnet Crabshack VF5 SMG.",
    verified: true,
    ps5: "0, 2, 1, 2",
    xbox: "0, 2, 1, 2",
    phone: "Pelican Valley · Unikt vapen (Crabshack VF5 SMG)"
  },
  {
    title: "Garagedörr-kod: Randy's Wishlist Garage ('74 Vamos)",
    category: "Story-kod",
    description: "Fast keypad-kod till garagedörren för att stjäla '74 Vamos från Randy's Wishlist.",
    verified: true,
    ps5: "2, 7, 2, 7",
    xbox: "2, 7, 2, 7",
    phone: "Randy's Wishlist · Garagedörr (Keypad)"
  },
  {
    title: "Kassaskåpskod: Casa de Empeño (Yasmani's Jewelry Jobs)",
    category: "Kassaskåp",
    description: "Fast kassaskåpskod till pantbanken Casa de Empeño under Chapter 3-uppdraget Yasmani's Jewelry Jobs för att stjäla buffalo skull-kedjan.",
    verified: true,
    ps5: "1, 6, 8, 0",
    xbox: "1, 6, 8, 0",
    phone: "Chapter 3 · Yasmani's Jewelry Jobs"
  },
  {
    title: "Kassaskåpskod: Richardson Jewelry & Diamonds (Chapter 3)",
    category: "Kassaskåp",
    description: "Fast kassaskåpskod hos juveleraren Richardson Jewelry & Diamonds under Chapter 3-uppdraget Yasmani's Jewelry Jobs (diamantring).",
    verified: true,
    ps5: "6, 8, 1, 5",
    xbox: "6, 8, 1, 5",
    phone: "Chapter 3 · Yasmani's Jewelry Jobs"
  },
  {
    title: "Kassaskåpskod: Donovan Banks & Co. (Chapter 3)",
    category: "Kassaskåp",
    description: "Fast kassaskåpskod hos Donovan Banks & Co. under Chapter 3-uppdraget Yasmani's Jewelry Jobs (ametisthalsband). Glöm inte den inledande nollan (0104).",
    verified: true,
    ps5: "0, 1, 0, 4",
    xbox: "0, 1, 0, 4",
    phone: "Chapter 3 · Yasmani's Jewelry Jobs"
  },
  {
    title: "Kassaskåpskod: Sunrise RV Park (Kingfishers Gang Operation)",
    category: "Kassaskåp",
    description: "Fast kassaskåpskod i lagret vid Sunrise RV Park (Kingfishers Illegal Operation), norr om Cottonmouth Lake och nordväst om Key Lento.",
    verified: true,
    ps5: "6, 7, 6, 9",
    xbox: "6, 7, 6, 9",
    phone: "Sunrise RV Park · Kingfishers Gang Operation"
  },
  {
    title: "Kassaskåpskod: Nova Auto Junkyard (M7 Gang Operation)",
    category: "Kassaskåp",
    description: "Fast kassaskåpskod på bilskroten Nova Auto Junkyard under M7-gängets Illegal Operation.",
    verified: true,
    ps5: "7, 7, 7, 7",
    xbox: "7, 7, 7, 7",
    phone: "Nova Auto Junkyard · M7 Gang Operation"
  },
  {
    title: "Garagedörr-kod: Key Lento Party House (Hemliga samlarföremål)",
    category: "Story-kod",
    description: "Sexsiffrig keypad-kod till garagedörren på partyhuset i sydöstra Key Lento (Leonida Keys). Ger tillgång till gömda samlarföremål och ett Los Santos Pounders-kort.",
    verified: true,
    ps5: "0, 9, 2, 3, 1, 9",
    xbox: "0, 9, 2, 3, 1, 9",
    phone: "Key Lento · Hemligt rum & Samlarkort"
  },
  {
    title: "Kassaskåpskod: Cottonmouth Lake Trailer (Grassrivers)",
    category: "Kassaskåp",
    description: "Femsiffrig kassaskåpskod till husvagnen på sydvästra sidan av Cottonmouth Lake (Grassrivers). Innehåller Laki Maivia-samlarkortet (Los Santos Pounders).",
    verified: true,
    ps5: "4, 4, 0, 1, 7",
    xbox: "4, 4, 0, 1, 7",
    phone: "Cottonmouth Lake · Los Santos Pounders-kort"
  },
  {
    title: "Dörrkod: Mount Kalaga National Park (Låst skjul)",
    category: "Story-kod",
    description: "Femsiffrig keypad-kod till det låsta underhållsskjulet (maintenance shed) i Mount Kalaga National Park i norra Leonida.",
    verified: true,
    ps5: "6, 9, 1, 8, 5",
    xbox: "6, 9, 1, 8, 5",
    phone: "Mount Kalaga National Park · Hemligt skjul"
  },
  {
    title: "Kassaskåpskod: Farm Fix Meth Lab (McKittrick Farm)",
    category: "Kassaskåp",
    description: "Fast kassaskåpskod för Illegal Operation i Farm Fix Meth Lab vid McKittrick Farm (Final Chapter-gänget).",
    verified: true,
    ps5: "2, 1, 2, 1",
    xbox: "2, 1, 2, 1",
    phone: "McKittrick Farm · Final Chapter Gang Operation"
  },
  {
    title: "Kassaskåpskod: Illegal Sneaker Trade (San4San – Vice City)",
    category: "Kassaskåp",
    description: "Fast kassaskåpskod i San4San-gängets Illegal Sneaker Trade-lokal i Vice City.",
    verified: true,
    ps5: "4, 1, 2, 4",
    xbox: "4, 1, 2, 4",
    phone: "Vice City · San4San Gang Operation"
  },
  {
    title: "Kassaskåpskod: Casa Guardia (The Guardia Brothers)",
    category: "Kassaskåp",
    description: "Fast kassaskåpskod inne på Casa Guardia under Illegal Operation mot The Guardia Brothers.",
    verified: true,
    ps5: "1, 9, 6, 5",
    xbox: "1, 9, 6, 5",
    phone: "Casa Guardia · The Guardia Brothers"
  },
  {
    title: "Kassaskåpskod: Saber Shipping Facility (Guardia Brothers)",
    category: "Kassaskåp",
    description: "Fast kassaskåpskod inne i huvudbyggnaden på Saber Shipping Facility (The Guardia Brothers Illegal Operation).",
    verified: true,
    ps5: "1, 1, 2, 2",
    xbox: "1, 1, 2, 2",
    phone: "Saber Shipping Facility · The Guardia Brothers"
  },
  {
    title: "Kassaskåpskod: Saber Shipping Yard (Guardia Brothers)",
    category: "Kassaskåp",
    description: "Fast kassaskåpskod ute på bangården/hamnområdet Saber Shipping Yard (The Guardia Brothers Illegal Operation).",
    verified: true,
    ps5: "8, 0, 4, 6",
    xbox: "8, 0, 4, 6",
    phone: "Saber Shipping Yard · The Guardia Brothers"
  },
  {
    title: "Dörrkod: South Point Airfield (Underjordiskt UFO-kontrollrum)",
    category: "Story-kod",
    description: "Fast keypad-kod till takluckan och det underjordiska kontrollrummet på South Point Airfield (kopplat till Pilot Pete och spelets UFO/Alien-mysterium).",
    verified: true,
    ps5: "2, 3, 4, 1",
    xbox: "2, 3, 4, 1",
    phone: "South Point Airfield · Hemlig UFO-bunker"
  },
  {
    title: "Garagedörr-kod: La Perle Garage (Boobies laptop / Pfister Growler)",
    category: "Story-kod",
    description: "Femsiffrig keypad-kod till garaget bredvid Auntie's Place på Del Rio Boulevard i La Perle (Vice City). Löses via Boobies laptop i Chapter 3 och låser upp garaget samt Vanessas rosa Pfister Growler.",
    verified: true,
    ps5: "9, 2, 6, 6, 5",
    xbox: "9, 2, 6, 6, 5",
    phone: "La Perle (Vice City) · Chapter 3 & Pfister Growler"
  },
  {
    title: "Dörrkod: Black Eagle Warehouse (Balsero – Bakkontor)",
    category: "Story-kod",
    description: "Sexsiffrig keypad-kod till bakkontoret inne på Black Eagle-lagret i Balsero (Vice City). Ger tillgång till rummet med Black Eagle-kassaskåpet (031462).",
    verified: true,
    ps5: "7, 8, 9, 9, 8, 7",
    xbox: "7, 8, 9, 9, 8, 7",
    phone: "Balsero (Vice City) · Black Eagle Warehouse"
  },
  {
    title: "Kassaskåpskod: Black Eagle Warehouse (Unik Kalinga .50 Pistol)",
    category: "Kassaskåp",
    description: "Sexsiffrig kassaskåpskod inne på bakkontoret i Black Eagle Warehouse (efter dörrkod 789987). Innehåller den unika pistolen Black Eagle Import Kalinga .50.",
    verified: true,
    ps5: "0, 3, 1, 4, 6, 2",
    xbox: "0, 3, 1, 4, 6, 2",
    phone: "Balsero (Vice City) · Unikt vapen (Kalinga .50)"
  },
  {
    title: "Kassaskåpskod: Janjak's Garage (San4San Weed Garage – La Perle)",
    category: "Kassaskåp",
    description: "Fast kassaskåpskod på kontoret i San4San-gängets weed-garage i La Perle (Vice City, ledtråd på kylskåpet). Belöning: kontanter, rosa Declasse Gin Tulip och unika geväret San4San KZ-59.",
    verified: true,
    ps5: "4, 4, 4, 4",
    xbox: "4, 4, 4, 4",
    phone: "La Perle (Vice City) · San4San KZ-59 & Cash"
  },
  {
    title: "Kassaskåpskod: Abandoned Laundry (Nordvästra Belville)",
    category: "Kassaskåp",
    description: "Femsiffrig kod till det förstärkta väggkassaskåpet inne i den övergivna tvättstugan i nordvästra Belville (söder om Biker Hideout – gå in via hålet i taket; koden står under ett samlarkort).",
    verified: true,
    ps5: "6, 2, 4, 1, 2",
    xbox: "6, 2, 4, 1, 2",
    phone: "Belville (Ambrosia) · Väggkassaskåp"
  },
  {
    title: "Kassaskåpskod: Biker Hideout (The Thirsty Wolf – Belville)",
    category: "Kassaskåp",
    description: "Fast kassaskåpskod i Final Chapter-gängets klubbhus vid baren The Thirsty Wolf i Belville (samma årtal som MC-klubbens grundande, 1982).",
    verified: true,
    ps5: "1, 9, 8, 2",
    xbox: "1, 9, 8, 2",
    phone: "Belville · Final Chapter Gang Operation"
  },
  {
    title: "Kassaskåpskod: Leonida Carrier Warehouse (Balsero, Vice City)",
    category: "Kassaskåp",
    description: "Fast kassaskåpskod inne på bakkontoret i Leonida Carrier Warehouse i Balsero, Vice City (nås via takluckan på byggnaden).",
    verified: true,
    ps5: "9, 2, 5, 6",
    xbox: "9, 2, 5, 6",
    phone: "Balsero (Vice City) · Bakkontor via taklucka"
  },
  {
    title: "Kassaskåpskod: Marbelle Hotel (Spökhotell / Silent Hill Easter Egg)",
    category: "Kassaskåp",
    description: "Sexsiffrig kod till bottenvåningens kassaskåp i det hemsökta Marbelle Hotel i södra Crosstown, Vice City (koden finns skriven på väggen högst upp – kopplad till spelets Silent Hill-påskägg).",
    verified: true,
    ps5: "9, 5, 5, 2, 1, 4",
    xbox: "9, 5, 5, 2, 1, 4",
    phone: "Södra Crosstown (Vice City) · Hemligt Easter Egg"
  },
  {
    title: "Kassaskåpskod: Watson Bay Safehouse (La Polilla Negra)",
    category: "Kassaskåp",
    description: "Fast kassaskåpskod (från köksdatorn) i La Polilla Negras gömställe nordost om Watson Bay. Ger kontanter under mikrovågsugnen, ljuddämpade specialgeväret La Polilla Negra VF-G1 samt en Canis Black Moth Kamacho i garaget.",
    verified: true,
    ps5: "1, 8, 1, 9",
    xbox: "1, 8, 1, 9",
    phone: "Watson Bay (Grassrivers) · VF-G1 & Kamacho"
  },
  {
    title: "Kassaskåpskod: Palmer Fishing Warehouse (La Polilla Negra)",
    category: "Kassaskåp",
    description: "Fast kassaskåpskod på Bobcat Key i Watson Bay (på enstaka patchversioner även rapporterad som 1886). Innehåller kontanter (upp till $5 400+), guldfärgade specialgeväret La Polilla Negra KZ-59 och lyxklocka.",
    verified: true,
    ps5: "1, 8, 8, 7",
    xbox: "1, 8, 8, 7",
    phone: "Bobcat Key / Watson Bay · Guld-KZ-59 & Cash"
  },
  {
    title: "Kassaskåpskod: Delights Cabaret Office (Uppdrag: Afternoon Delight)",
    category: "Kassaskåp",
    description: "Fast kassaskåpskod till kontoret inne på Delights Cabaret i Port Gellhorn under uppdraget Afternoon Delight.",
    verified: true,
    ps5: "2, 0, 0, 8",
    xbox: "2, 0, 0, 8",
    phone: "Port Gellhorn · Uppdrag: Afternoon Delight"
  },
  {
    title: "Dörrkod: Cigar Import (Entrédörr – Illegal Operation)",
    category: "Story-kod",
    description: "Fast fyrsiffrig keypad-kod till huvudentrén på Cigar Import Illegal Operation.",
    verified: true,
    ps5: "1, 4, 2, 6",
    xbox: "1, 4, 2, 6",
    phone: "Cigar Import · Illegal Operation (Keypad)"
  },
  {
    title: "Kassaskåpskod: Abandoned House (Ambrosia)",
    category: "Kassaskåp",
    description: "Femsiffrig kod till kassaskåpet i det övergivna huset i Ambrosia. Klättra upp på taket och gå ner genom hålet i taket – koden står uppe på utedasset (outhouse).",
    verified: true,
    ps5: "2, 3, 5, 5, 4",
    xbox: "2, 3, 5, 5, 4",
    phone: "Ambrosia · Övergivet hus (Ingång via taket)"
  },
  {
    title: "Kassaskåpskod: Slator Towing Inc. / Guarded House (Gloriana Key)",
    category: "Kassaskåp",
    description: "Fast kassaskåpskod på övervåningen inne på kontoret i det bevakade huset vid Slator Towing Inc. (Illegal Operation / Chop Shop) på Gloriana Key.",
    verified: true,
    ps5: "4, 5, 6, 7",
    xbox: "4, 5, 6, 7",
    phone: "Gloriana Key · Slator Towing Inc. (Illegal Operation)"
  },
  {
    title: "Garagedörr-kod: Waxman Island Garage (Uppdrag: First Impressions)",
    category: "Story-kod",
    description: "Fast keypad-kod till garageporten på Waxman Island under Chapter 3-uppdraget First Impressions (Raul Bautista) för att hämta flyktbilen Schafter.",
    verified: true,
    ps5: "2, 4, 0, 4",
    xbox: "2, 4, 0, 4",
    phone: "Chapter 3 · Waxman Island (First Impressions)"
  },
  {
    title: "Dörrkod: North Balsero Lockup Lab (Take Out Kitty Litter)",
    category: "Story-kod",
    description: "Fast keypad-kod till den låsta garageporten vid knarklabbet i norra Balsero under sidoaktiviteten Take Out Kitty Litter (Tyrone; ledtråd på närliggande skylt).",
    verified: true,
    ps5: "1, 9, 9, 9",
    xbox: "1, 9, 9, 9",
    phone: "Norra Balsero · Take Out Kitty Litter (Keypad)"
  },
  {
    title: "Kassaskåpskod: Pilot Pete's Hangar (The Last Mile: Passing the Torch)",
    category: "Kassaskåp",
    description: "Fast kassaskåpskod i bakrummet bakom den röda dörren i Pilot Petes hangar på Sundown Private Airfield under Chapter 4-uppdraget The Last Mile: Passing the Torch.",
    verified: true,
    ps5: "3, 7, 1, 8",
    xbox: "3, 7, 1, 8",
    phone: "Chapter 4 · Sundown Private Airfield (Pilot Pete)"
  }
];

const state = {
  search: "",
  platform: "all",
  category: "Alla"
};

const ENABLE_INFEED_ADS = false;

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

  function buildCodeSequence(codeValue, isPhoneMeta = false) {
    const seqContainer = document.createElement("div");
    seqContainer.className = "code-sequence";

    const lower = String(codeValue || "").toLowerCase();
    const isSingleBadge =
      !codeValue ||
      isPhoneMeta ||
      lower.includes("pausmeny:") ||
      lower.includes("progress → cheats") ||
      lower.includes("krav:") ||
      lower.includes("port gellhorn");

    if (isSingleBadge) {
      const kbd = document.createElement("kbd");
      const isPendingText = lower.includes("pausmeny:");
      kbd.className = isPendingText ? "kbd-token kbd-pending" : "kbd-token";
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
    statusBadge.textContent = cheat.verified ? "Verifierad pilkod" : "Meny-upplåsning";

    badges.append(catBadge, statusBadge);
    header.append(title, badges);

    const desc = document.createElement("p");
    desc.className = "cheat-description";
    desc.textContent = cheat.description;

    const codesWrap = document.createElement("div");
    codesWrap.className = "cheat-codes";

    const isSafeOrStory = cheat.category === "Kassaskåp" || cheat.category === "Story-kod";
    const platformsToShow =
      activePlatform === "all"
        ? isSafeOrStory
          ? ["ps5", "phone"]
          : ["ps5", "xbox", "phone"]
        : [activePlatform];

    platformsToShow.forEach((key) => {
      const meta = PLATFORM_META[key];
      const row = document.createElement("div");
      row.className = "code-row";

      const tag = document.createElement("span");
      tag.className = `platform-tag ${meta.className}`;
      if (isSafeOrStory && activePlatform === "all") {
        tag.textContent = key === "ps5" ? "Kod (PS5 & Xbox)" : "Plats / Uppdrag";
      } else {
        tag.textContent = meta.label;
      }

      let value = cheat[key];
      if (key === "phone" && !isSafeOrStory) {
        value = cheat.verified
          ? `Mobil (↑) + L1/LB & R1/RB · ${cheat.phone}`
          : `Progress → Cheats · ${cheat.phone}`;
      }

      const sequence = buildCodeSequence(value, key === "phone");
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
    const isSafesCategory = state.category === "Kassaskap";

    const filteredCheats = isSafesCategory
      ? []
      : cheatsData
          .filter((item) => {
            const matchesCategory =
              state.category === "Alla" ||
              (state.category === "Verifierade" ? item.verified : item.category === state.category);
            const matchesPlatform = state.platform === "all" || Boolean(item[state.platform]);
            const matchesSearch =
              !query ||
              item.title.toLowerCase().includes(query) ||
              item.description.toLowerCase().includes(query) ||
              (item.phone && item.phone.toLowerCase().includes(query));

            return matchesCategory && matchesPlatform && matchesSearch;
          })
          .sort((a, b) => Number(b.verified) - Number(a.verified));

    const matchingSafeCodes = isSafesCategory
      ? SAFE_CODES_SEARCH_DATA.filter((item) => {
          if (!query) return true;
          const codeNormalized = item.ps5.replace(/[^a-z0-9]/gi, "").toLowerCase();
          return (
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.phone.toLowerCase().includes(query) ||
            (codeNormalized && codeNormalized.includes(query))
          );
        })
      : query
      ? SAFE_CODES_SEARCH_DATA.filter((item) => {
          const codeNormalized = item.ps5.replace(/[^a-z0-9]/gi, "").toLowerCase();
          return (
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.phone.toLowerCase().includes(query) ||
            (codeNormalized && codeNormalized.includes(query)) ||
            query.includes("kassaskåp") ||
            query.includes("safe") ||
            query.includes("dörrkod") ||
            query.includes("keypad")
          );
        })
      : [];

    const filtered = [...matchingSafeCodes, ...filteredCheats];

    gridEl.textContent = "";

    if (filtered.length === 0) {
      emptyStateEl.hidden = false;
      resultsCountEl.textContent = "0 koder hittades";
      return;
    }

    emptyStateEl.hidden = true;
    const verifiedCount = cheatsData.filter((c) => c.verified).length;
    resultsCountEl.textContent =
      !query && state.category === "Alla" && state.platform === "all"
        ? `Visar alla ${cheatsData.length} GTA 6-fusk (${verifiedCount} klara pilkoder först + ${cheatsData.length - verifiedCount} med upplåsningskrav)`
        : state.category === "Verifierade" && !query
        ? `Visar alla ${filtered.length} bekräftade GTA 6-pilkoder (PS5, Xbox & Mobil)`
        : isSafesCategory && !query
        ? `Visar alla ${filtered.length} verifierade kassaskåps- & dörrkoder (Story Mode)`
        : `Visar ${filtered.length} träffar`;

    const fragment = document.createDocumentFragment();
    let adCount = 0;

    filtered.forEach((cheat, index) => {
      fragment.appendChild(createCheatCard(cheat, state.platform));

      if (ENABLE_INFEED_ADS && (index + 1) % 4 === 0) {
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

  function activateSafesFilter() {
    state.category = "Kassaskap";
    const safeBtn = categoryFilters.querySelector('[data-category="Kassaskap"]');
    if (safeBtn) setActiveButton(categoryFilters, safeBtn);
    renderCheats();
  }

  function syncHashFilter() {
    if (window.location.hash === "#kassaskapskoder") {
      activateSafesFilter();
    }
  }

  document.querySelectorAll('a[href="#kassaskapskoder"]').forEach((link) => {
    link.addEventListener("click", () => {
      activateSafesFilter();
    });
  });

  document.querySelectorAll('a[href="#fuskkoder"]').forEach((link) => {
    link.addEventListener("click", () => {
      if (state.category === "Kassaskap") {
        state.category = "Alla";
        const allBtn = categoryFilters.querySelector('[data-category="Alla"]');
        if (allBtn) setActiveButton(categoryFilters, allBtn);
        renderCheats();
      }
    });
  });

  window.addEventListener("hashchange", syncHashFilter);

  observeAdSlots();
  if (window.location.hash === "#kassaskapskoder") {
    syncHashFilter();
  } else {
    renderCheats();
  }
});
