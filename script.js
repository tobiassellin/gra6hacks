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
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Överlev 20 fria fall från 12 m (40 fot)"
  },
  {
    title: "Fallskärm (Parachute)",
    category: "Spelare",
    description: "Lägger till en fallskärm direkt i din utrustning. Krav för upplåsning: Genomför 50 fallskärmshopp från minst 90 meter (300 fot).",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: 50 fallskärmshopp från 300 fot+"
  },
  {
    title: "Fylleri-läge (Drunk Mode)",
    category: "Spelare",
    description: "Gör omedelbart både dig och din partner berusade. Krav för upplåsning: Spendera totalt $2 500 på alkohol i spelet.",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Spendera $2 500 på alkohol"
  },
  {
    title: "Reparera Fordon (Repair Vehicle)",
    category: "Spelare",
    description: "Reparerar omedelbart ditt nuvarande fordon till nyskick. Krav: Ta 1:a plats i 10 lopp på Gellhorn Raceway, Thrillbilly Mud Club och Boone Speedway.",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Vinn 1:a plats i 10 lopp"
  },
  {
    title: "Oändlig Lustgas & Bränsle (Unlimited Nitrous)",
    category: "Spelare",
    description: "Lustgas (Nitrous) och bränsle tar aldrig slut i fordon. Krav för upplåsning: Klara 50 stunthopp (Stunt Jumps) i Leonida.",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
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
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Kasta 100 granater"
  },
  {
    title: "Brandammunition (Incendiary Ammo)",
    category: "Vapen",
    description: "Förvandlar all din vanliga vapenammunition till brinnande skott som sätter eld på mål. Krav för upplåsning: Bränn 100 fiender med eldskada.",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Bränn 100 fiender med eldskada"
  },
  {
    title: "Explosiva Flaskor (Exploding Bottles)",
    category: "Vapen",
    description: "Gör att alla flaskor i spelvärlden exploderar när de skadas eller träffas. Krav för upplåsning: Kasta 100 Molotov-cocktails.",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Kasta 100 Molotovs"
  },
  {
    title: "Explosivt Hagelgevär (Explosive Shotgun – Shortstraw)",
    category: "Vapen",
    description: "Ger dig hagelgeväret Mason & Keen Shortstraw laddat med explosiva patroner. Krav för upplåsning: Träffa 100 fiender med explosiv skada.",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Träffa 100 fiender med explosiv skada"
  },
  {
    title: "Hauners H-AT (Pansarvärnsvapen)",
    category: "Vapen",
    description: "Lägger till det tunga pansarvärnsvapnet Hauners H-AT i din vapenarsenal. Krav för upplåsning: Spräng 100 fordon i luften.",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
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
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Klara alla Survival-utmaningar"
  },
  {
    title: "Spawna Stridsflygplan (Hauners P-996 Lazer)",
    category: "Fordon",
    description: "Frammanar stridsflygplanet Hauners P-996 Lazer Jet. Krav för upplåsning: Klara samtliga utmaningar i hela spelet (100% Challenges).",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Klara alla utmaningar i spelet"
  },
  {
    title: "Spawna Sportbil (Bravado Banshee)",
    category: "Fordon",
    description: "Frammanar sportbilen Bravado Banshee direkt framför dig. Krav för upplåsning: Klara samtliga stridsutmaningar (Combat Challenges).",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Klara alla Combat Challenges"
  },
  {
    title: "Spawna Hyperbil (Progen Emerus)",
    category: "Fordon",
    description: "Frammanar hyperbilen Progen Emerus. Krav för upplåsning: Klara samtliga fordonsutmaningar (Vehicle Challenges).",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Klara alla Vehicle Challenges"
  },
  {
    title: "Spawna Superbil (Truffade Thrax)",
    category: "Fordon",
    description: "Frammanar lyxiga superbilen Truffade Thrax i Vice City. Krav för upplåsning: Klara samtliga shoppingutmaningar (Shopping Challenges).",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Klara alla Shopping Challenges"
  },
  {
    title: "Spawna Muskelbil ('65 Vapid Dominator)",
    category: "Fordon",
    description: "Frammanar den klassiska muskelbilen '65 Vapid Dominator. Krav för upplåsning: Klara samtliga träningsutmaningar (Fitness Challenges).",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Klara alla Fitness Challenges"
  },
  {
    title: "Spawna Sporthoj (Nagasaki Carbon RS)",
    category: "Fordon",
    description: "Frammanar den snabba motorcykeln Nagasaki Carbon RS. Krav för upplåsning: Klara samtliga utforskningsutmaningar (Exploration Challenges).",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Klara alla Exploration Challenges"
  },
  {
    title: "Spawna Chopper (Western Zombie Bobber)",
    category: "Fordon",
    description: "Frammanar motorcykeln Western Zombie Bobber. Krav för upplåsning: Klara samtliga brottsutmaningar (Criminal Challenges).",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Klara alla Criminal Challenges"
  },
  {
    title: "Spawna Golfbil (Brimstone Golfer)",
    category: "Fordon",
    description: "Frammanar en Brimstone Golfer direkt på din position. Krav för upplåsning: Klara samtliga sportutmaningar (Sports Challenges).",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Klara alla Sports Challenges"
  },
  {
    title: "Spawna Sjöhelikopter (Nagasaki Sea Sparrow)",
    category: "Fordon",
    description: "Frammanar helikoptern Nagasaki Sea Sparrow som kan landa på vatten. Krav för upplåsning: Klara 5 utforskningsutmaningar (Exploration Challenges).",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Klara 5 Exploration Challenges"
  },
  {
    title: "Spawna Träskbåt (Airboat 09)",
    category: "Fordon",
    description: "Frammanar en snabb Airboat 09 perfekt för våtmarkerna i Leonida. Krav för upplåsning: Klara 5 överlevnadsutmaningar (Survival Challenges).",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Klara 5 Survival Challenges"
  },
  {
    title: "Spawna Racerbåt (Speeder 700 GT)",
    category: "Fordon",
    description: "Frammanar motorbåten Speeder 700 GT. Krav för upplåsning: Klara 5 stridsutmaningar (Combat Challenges).",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Klara 5 Combat Challenges"
  },
  {
    title: "Spawna Stuntflygplan (Lapwing Mallard)",
    category: "Fordon",
    description: "Frammanar det akrobatiska propellerplanet Lapwing Mallard. Krav för upplåsning: Klara 5 fordonsutmaningar (Vehicle Challenges).",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Klara 5 Vehicle Challenges"
  },
  {
    title: "Spawna Crossmotorcykel (Maibatsu Sanchez)",
    category: "Fordon",
    description: "Frammanar terrängmotorcykeln Maibatsu Sanchez. Krav för upplåsning: Klara 5 brottsutmaningar (Criminal Challenges).",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Klara 5 Criminal Challenges"
  },
  {
    title: "Spawna BMX-cykel (Tuff BMX)",
    category: "Fordon",
    description: "Frammanar en Tuff BMX-cykel för tricks och hopp i Vice City. Krav för upplåsning: Klara 5 träningsutmaningar (Fitness Challenges).",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Klara 5 Fitness Challenges"
  },
  {
    title: "Spawna Taxi (Vapid Stanier G2 Taxi)",
    category: "Fordon",
    description: "Frammanar en Vapid Stanier G2 Taxi. Krav för upplåsning: Klara 5 sportutmaningar (Sports Challenges).",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Klara 5 Sports Challenges"
  },
  {
    title: "Spawna Ambulans (Interstate Ambulance)",
    category: "Fordon",
    description: "Frammanar utryckningsfordonet Interstate Ambulance. Krav för upplåsning: Upptäck Interstate Ambulance i Progress-menyn.",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Upptäck Interstate Ambulance i Progress"
  },
  {
    title: "Spawna Uppblåsbar Flamingo (Inflatable Flamingo)",
    category: "Fordon",
    description: "Frammanar en uppblåsbar rosa flamingo (Inflatable Flamingo). Krav för upplåsning: Förstör 50 kokain-flamingor (Cocaine Flamingos) i Leonida.",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
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
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Hitta 10 samlarklockor"
  },
  {
    title: "Pausa Tiden på Dygnet (Pause Time of Day)",
    category: "Värld",
    description: "Låser den nuvarande tiden på dygnet. Krav för upplåsning: Hitta 20 samlarklockor (Collectible Watches) på kartan.",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
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
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Håll handen med din partner i 4 timmar"
  },
  {
    title: "Powdered Sugar – Florsocker (Skärmfilter)",
    category: "Värld",
    description: "Förvandlar spelvärlden till vitt med gnistrande ljuseffekter. Krav för upplåsning: Skanna allt rymdskrot (Space Debris) med WAiNK.",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Skanna allt rymdskrot med WAiNK"
  },
  {
    title: "Neon Jungle – Neondjungel (Skärmfilter)",
    category: "Värld",
    description: "Dränker Vice City och Leonida i intensiva neonkontraster. Krav för upplåsning: Upptäck alla 16 Girlypop-fordon i spelet.",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Upptäck alla 16 Girlypop-fordon"
  },
  {
    title: "Pinhole – Hålkamera (Skärmfilter)",
    category: "Värld",
    description: "Applicerar ett klassiskt hålkamerafilter med mörk vinjett. Krav för upplåsning: Rensa 25 gängoperationer (Gang Operations) med din partner.",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Rensa 25 gängoperationer med partner"
  },
  {
    title: "Yesteryear – Svartvit CRT-TV (Skärmfilter)",
    category: "Värld",
    description: "Ger spelet ett klassiskt svartvitt tjock-TV-filter (CRT). Krav för upplåsning: Upptäck The Ridgway i Progress-menyn.",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Upptäck The Ridgway i Progress"
  },
  {
    title: "Fast Forward – Snabbspolning (Skärmfilter)",
    category: "Värld",
    description: "Lägger till rörelseoskärpa (motion blur) och snabbar upp molnens rörelser på himlen. Krav för upplåsning: Genomför 50 meditationer.",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Genomför 50 meditationer"
  },
  {
    title: "Fisheye – Fisköga (Skärmfilter)",
    category: "Värld",
    description: "Ger kameran ett extremt vidvinkligt fisheye-objektiv. Krav för upplåsning: Fånga 100 fiskar i Leonida.",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Fånga 100 fiskar"
  },
  {
    title: "Pixel Art – Retro Pixlar (Skärmfilter)",
    category: "Värld",
    description: "Förvandlar grafiken till ett retro-pixelerat 8-bitars/16-bitars filter. Krav för upplåsning: Tjäna $250 000 på att sälja samlarföremål (Collectibles).",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Tjäna $250 000 på att sälja samlarföremål"
  },
  {
    title: "Hellscape – Helveteshetta (Skärmfilter)",
    category: "Värld",
    description: "Färgar världen glödande röd och orange med dallrande värmedis. Krav för upplåsning: Stjäl 100 polisbilar.",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Stjäl 100 polisbilar"
  },
  {
    title: "Videotape – VHS-kassett (Skärmfilter)",
    category: "Värld",
    description: "Ger bilden ett retro 80-tals VHS-videobandsfilter. Krav för upplåsning: Genomför 50 aktiviteter tillsammans med din partner.",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Genomför 50 aktiviteter med partner"
  },
  {
    title: "Dark Mirror – Mörk Spegel (Skärmfilter)",
    category: "Värld",
    description: "Vänder hela spelvärlden upp och ner och färgar den mörk. Krav för upplåsning: Tjäna $500 000 på att sälja stulna fordon.",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Tjäna $500 000 på att sälja fordon"
  },
  {
    title: "Migraine – Migrän (Skärmfilter)",
    category: "Värld",
    description: "Applicerar ett suddigt och förvrängt synfält över skärmen. Krav för upplåsning: Överlev i 6 minuter med 6-stjärnig efterlysningsnivå (6-Star Wanted Level).",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
    phone: "Krav: Överlev 6 min med 6 stjärnor (Wanted Level)"
  },
  {
    title: "Bubblegum – Tuggummi (Skärmfilter)",
    category: "Värld",
    description: "Färgar världen lila och gul med glittrande ljuspunkter. Krav för upplåsning: Hitta alla 24 samlarkort för Vice City Flamingos.",
    verified: false,
    ps5: "Kod kommer snart (Progress → Cheats)",
    xbox: "Kod kommer snart (Progress → Cheats)",
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
  }
];

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

  function buildCodeSequence(codeValue, isPhoneMeta = false) {
    const seqContainer = document.createElement("div");
    seqContainer.className = "code-sequence";

    const lower = String(codeValue || "").toLowerCase();
    const isSingleBadge =
      !codeValue ||
      isPhoneMeta ||
      lower.includes("publiceras") ||
      lower.includes("kommer snart") ||
      lower.includes("krav:") ||
      lower.includes("port gellhorn");

    if (isSingleBadge) {
      const kbd = document.createElement("kbd");
      const isPendingText = lower.includes("kommer snart") || lower.includes("publiceras");
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
    statusBadge.textContent = cheat.verified ? "Verifierad kod" : "Kod kommer snart";

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

      let value = cheat[key];
      if (key === "phone" && cheat.category !== "Kassaskåp") {
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

    const filteredCheats = cheatsData
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

    const matchingSafeCodes = query
      ? SAFE_CODES_SEARCH_DATA.filter((item) => {
          const codeDigits = item.ps5.replace(/[^0-9]/g, "");
          return (
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.phone.toLowerCase().includes(query) ||
            codeDigits.includes(query) ||
            query.includes("kassaskåp") ||
            query.includes("safe") ||
            query.includes("chapter 2")
          );
        })
      : [];

    const filtered = [...matchingSafeCodes, ...filteredCheats];

    gridEl.textContent = "";

    if (filtered.length === 0) {
      emptyStateEl.hidden = false;
      resultsCountEl.textContent = "0 fuskkoder hittades";
      return;
    }

    emptyStateEl.hidden = true;
    const verifiedCount = cheatsData.filter((c) => c.verified).length;
    resultsCountEl.textContent =
      !query && state.category === "Alla" && state.platform === "all"
        ? `Visar alla ${cheatsData.length} GTA 6-fusk (${verifiedCount} klara pilkoder först + ${cheatsData.length - verifiedCount} med upplåsningskrav)`
        : state.category === "Verifierade" && !query
        ? `Visar alla ${filtered.length} bekräftade GTA 6-pilkoder (PS5, Xbox & Mobil)`
        : `Visar ${filtered.length} träffar`;

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
