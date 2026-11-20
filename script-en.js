/**
 * GTA 6 Cheats (English) – Complete list of all 61 cheats, verified D-Pad button sequences,
 * exact unlock requirements, live search, platform/category filtering, and dynamic in-feed ads.
 */

const cheatsData = [
  // ==========================================
  // PLAYER (10 Player Cheats)
  // ==========================================
  {
    title: "$250,000 Cash (Instant Money Cheat)",
    category: "Player",
    description: "Instantly adds $250,000 to your account. Requirement: Finish the main story (all 91 missions). Pull out your phone (D-Pad Up), hold L1 and press R1 (PS5) / hold LB and press RB (Xbox), and enter the D-pad sequence.",
    verified: true,
    ps5: "L1 + R1, Up, Right, Down, Left, Up, Left, Down, Right",
    xbox: "LB + RB, Up, Right, Down, Left, Up, Left, Down, Right",
    phone: "Unlock: Finish Main Story (91 missions)"
  },
  {
    title: "Unlimited Focus (Special Ability)",
    category: "Player",
    description: "Your Focus meter never drains. Requirement: Finish the main story. Open your phone (D-Pad Up), hold L1 and press R1 (PS5) / hold LB and press RB (Xbox), and input the directional code.",
    verified: true,
    ps5: "L1 + R1, Down, Up, Up, Down, Up, Down, Up, Down, Up, Right",
    xbox: "LB + RB, Down, Up, Up, Down, Up, Down, Up, Down, Up, Right",
    phone: "Unlock: Finish Main Story (91 missions)"
  },
  {
    title: "Body Armor",
    category: "Player",
    description: "Instantly adds full body armor to your loadout. Note: The code will not be accepted until the challenge is complete. Unlock requirement: Complete 100 workouts.",
    verified: true,
    ps5: "L1 + R1, Down, Up, Left, Up, Up, Up, Up, Up, Down, Down",
    xbox: "LB + RB, Down, Up, Left, Up, Up, Up, Up, Up, Down, Down",
    phone: "Unlock: Complete 100 Workouts"
  },
  {
    title: "Raise Heat Level",
    category: "Player",
    description: "Raises your police Heat Level across Leonida. The code is accepted once the challenge is completed. Unlock requirement: Lose a 3-star wanted level 25 times.",
    verified: true,
    ps5: "L1 + R1, Left, Down, Right, Down, Up, Down, Up",
    xbox: "LB + RB, Left, Down, Right, Down, Up, Down, Up",
    phone: "Unlock: Lose 3-Star Wanted Level 25 Times"
  },
  {
    title: "Raise Wanted Level",
    category: "Player",
    description: "Increases your active police Wanted Level for intense chases in Vice City. The code is accepted once the challenge is completed. Unlock requirement: Lose a 3-star wanted level 50 times.",
    verified: true,
    ps5: "L1 + R1, Left, Down, Right, Down, Up, Right, Up",
    xbox: "LB + RB, Left, Down, Right, Down, Up, Right, Up",
    phone: "Unlock: Lose 3-Star Wanted Level 50 Times"
  },
  {
    title: "No Fall Damage",
    category: "Player",
    description: "Makes your character completely immune to fall damage from any height. Unlock requirement: Survive a freefall from 40 feet (12 meters) 20 times.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Survive 20 Freefalls from 40ft (12m)"
  },
  {
    title: "Parachute",
    category: "Player",
    description: "Adds a parachute directly to your loadout. Unlock requirement: Complete 50 parachute jumps from 300 feet or higher.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Complete 50 Parachute Jumps (300ft+)"
  },
  {
    title: "Drunk Mode",
    category: "Player",
    description: "Instantly makes both you and your partner drunk. Unlock requirement: Spend $2,500 on alcohol in-game.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Spend $2,500 on Alcohol"
  },
  {
    title: "Repair Vehicle",
    category: "Player",
    description: "Fully repairs your current vehicle instantly. Unlock requirement: Finish 1st place in 10 races at Gellhorn Raceway, Thrillbilly Mud Club, and Boone Speedway.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Win 1st Place in 10 Races"
  },
  {
    title: "Unlimited Nitrous & Fuel",
    category: "Player",
    description: "Nitrous boost and fuel never run out on any vehicle. Unlock requirement: Complete 50 Stunt Jumps across Leonida.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Complete 50 Stunt Jumps"
  },

  // ==========================================
  // WEAPONS & COMBAT (11 Combat Cheats)
  // ==========================================
  {
    title: "Max Ammo",
    category: "Weapons",
    description: "Instantly refills all gun ammunition to maximum capacity. Unlock requirement: Win 25 bronze medals or higher at shooting ranges.",
    verified: true,
    ps5: "L1 + R1, Down, Up, Right, Down, Left, Left, Up, Up, Down, Left",
    xbox: "LB + RB, Down, Up, Right, Down, Left, Left, Up, Up, Down, Left",
    phone: "Unlock: 25 Bronze Medals at Shooting Range"
  },
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
    description: "Bullets and melee attacks launch targets flying backward on impact. Unlock requirement: Finish the main story (91 missions).",
    verified: true,
    ps5: "L1 + R1, Down, Up, Left, Left, Right, Down, Down, Up, Down",
    xbox: "LB + RB, Down, Up, Left, Left, Right, Down, Down, Up, Down",
    phone: "Unlock: Finish Main Story (91 missions)"
  },
  {
    title: "Exploding Balls",
    category: "Weapons",
    description: "All sports balls explode violently on impact. Unlock requirement: Hit 20 enemies with explosive damage.",
    verified: true,
    ps5: "L1 + R1, Down, Up, Left, Left, Right, Down, Down, Up, Right",
    xbox: "LB + RB, Down, Up, Left, Left, Right, Down, Down, Up, Right",
    phone: "Unlock: Hit 20 Enemies with Explosive Damage"
  },
  {
    title: "Vehicle Force (Collisions Launch Targets)",
    category: "Weapons",
    description: "Vehicle collisions send other cars and targets flying through the air. Unlock requirement: Kill 25 enemies with a vehicle.",
    verified: true,
    ps5: "L1 + R1, Down, Up, Left, Left, Right, Down, Left, Up, Down",
    xbox: "LB + RB, Down, Up, Left, Left, Right, Down, Left, Up, Down",
    phone: "Unlock: Kill 25 Enemies with a Vehicle"
  },
  {
    title: "All Explosive Weapons",
    category: "Weapons",
    description: "Adds every explosive weapon to your loadout with full ammo. Unlock requirement: Throw 100 grenades.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Throw 100 Grenades"
  },
  {
    title: "Incendiary Ammo (Flaming Bullets)",
    category: "Weapons",
    description: "Imbues all standard firearm ammunition with fire damage that ignites targets. Unlock requirement: Burn 100 enemies with fire damage.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Burn 100 Enemies with Fire Damage"
  },
  {
    title: "Exploding Bottles",
    category: "Weapons",
    description: "Causes all bottles in the game world to explode when damaged or shot. Unlock requirement: Throw 100 Molotov cocktails.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Throw 100 Molotovs"
  },
  {
    title: "Explosive Shotgun (Mason & Keen Shortstraw)",
    category: "Weapons",
    description: "Adds the Mason & Keen Shortstraw shotgun loaded with explosive shells to your inventory. Unlock requirement: Hit 100 enemies with explosive damage.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Hit 100 Enemies with Explosive Damage"
  },
  {
    title: "Hauners H-AT (Anti-Tank Weapon)",
    category: "Weapons",
    description: "Adds the heavy Hauners H-AT launcher to your weapon loadout. Unlock requirement: Blow up 100 vehicles.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Blow Up 100 Vehicles"
  },

  // ==========================================
  // VEHICLES (21 Spawn Vehicle Cheats)
  // ==========================================
  {
    title: "Spawn Maibatsu Boomazoom",
    category: "Vehicles",
    description: "Spawns a Maibatsu Boomazoom at your current location. Unlock requirement: Complete 5 Shopping Challenges.",
    verified: true,
    ps5: "L1 + R1, Left, Up, Right, Down, Left, Left, Up, Left",
    xbox: "LB + RB, Left, Up, Right, Down, Left, Left, Up, Left",
    phone: "Unlock: Complete 5 Shopping Challenges"
  },
  {
    title: "Spawn MTL Pumper (Fire Truck)",
    category: "Vehicles",
    description: "Spawns an MTL Pumper fire truck right in front of you. Unlock requirement: Discover the MTL Pumper in the Progress menu.",
    verified: true,
    ps5: "L1 + R1, Left, Up, Right, Down, Left, Right, Right, Up",
    xbox: "LB + RB, Left, Up, Right, Down, Left, Right, Right, Up",
    phone: "Unlock: Discover MTL Pumper in Progress Menu"
  },
  {
    title: "Spawn HVY Bulldozer",
    category: "Vehicles",
    description: "Spawns a heavy-duty HVY Bulldozer. Unlock requirement: Discover the HVY Bulldozer in the Progress menu.",
    verified: true,
    ps5: "L1 + R1, Left, Up, Right, Down, Left, Right, Right, Down",
    xbox: "LB + RB, Left, Up, Right, Down, Left, Right, Right, Down",
    phone: "Unlock: Discover HVY Bulldozer in Progress Menu"
  },
  {
    title: "Spawn Tank (Hauners Rhino Tank)",
    category: "Vehicles",
    description: "Spawns the heavily armored Hauners Rhino Tank. Unlock requirement: Complete all Survival Challenges.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Complete All Survival Challenges"
  },
  {
    title: "Spawn Fighter Jet (Hauners P-996 Lazer)",
    category: "Vehicles",
    description: "Spawns the Hauners P-996 Lazer military fighter jet. Unlock requirement: Complete all challenges in the entire game (100% completionist reward).",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Complete All Challenges in the Game"
  },
  {
    title: "Spawn Sports Car (Bravado Banshee)",
    category: "Vehicles",
    description: "Spawns a Bravado Banshee sports car right in front of you. Unlock requirement: Complete all Combat Challenges.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Complete All Combat Challenges"
  },
  {
    title: "Spawn Hypercar (Progen Emerus)",
    category: "Vehicles",
    description: "Spawns a Progen Emerus hypercar. Unlock requirement: Complete all Vehicle Challenges.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Complete All Vehicle Challenges"
  },
  {
    title: "Spawn Supercar (Truffade Thrax)",
    category: "Vehicles",
    description: "Spawns a luxury Truffade Thrax supercar in Vice City. Unlock requirement: Complete all Shopping Challenges.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Complete All Shopping Challenges"
  },
  {
    title: "Spawn Muscle Car ('65 Vapid Dominator)",
    category: "Vehicles",
    description: "Spawns a classic '65 Vapid Dominator muscle car. Unlock requirement: Complete all Fitness Challenges.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Complete All Fitness Challenges"
  },
  {
    title: "Spawn Sport Bike (Nagasaki Carbon RS)",
    category: "Vehicles",
    description: "Spawns a high-speed Nagasaki Carbon RS motorcycle. Unlock requirement: Complete all Exploration Challenges.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Complete All Exploration Challenges"
  },
  {
    title: "Spawn Chopper (Western Zombie Bobber)",
    category: "Vehicles",
    description: "Spawns a Western Zombie Bobber custom motorcycle. Unlock requirement: Complete all Criminal Challenges.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Complete All Criminal Challenges"
  },
  {
    title: "Spawn Golf Cart (Brimstone Golfer)",
    category: "Vehicles",
    description: "Spawns a Brimstone Golfer at your location. Unlock requirement: Complete all Sports Challenges.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Complete All Sports Challenges"
  },
  {
    title: "Spawn Sea Helicopter (Nagasaki Sea Sparrow)",
    category: "Vehicles",
    description: "Spawns a Nagasaki Sea Sparrow amphibious helicopter. Unlock requirement: Complete 5 Exploration Challenges.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Complete 5 Exploration Challenges"
  },
  {
    title: "Spawn Airboat 09",
    category: "Vehicles",
    description: "Spawns an Airboat 09 built for tearing across the Grassrivers swamps. Unlock requirement: Complete 5 Survival Challenges.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Complete 5 Survival Challenges"
  },
  {
    title: "Spawn Speedboat (Speeder 700 GT)",
    category: "Vehicles",
    description: "Spawns a fast Speeder 700 GT powerboat. Unlock requirement: Complete 5 Combat Challenges.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Complete 5 Combat Challenges"
  },
  {
    title: "Spawn Stunt Plane (Lapwing Mallard)",
    category: "Vehicles",
    description: "Spawns an acrobatic Lapwing Mallard stunt plane. Unlock requirement: Complete 5 Vehicle Challenges.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Complete 5 Vehicle Challenges"
  },
  {
    title: "Spawn Dirt Bike (Maibatsu Sanchez)",
    category: "Vehicles",
    description: "Spawns an off-road Maibatsu Sanchez dirt bike. Unlock requirement: Complete 5 Criminal Challenges.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Complete 5 Criminal Challenges"
  },
  {
    title: "Spawn Tuff BMX",
    category: "Vehicles",
    description: "Spawns a Tuff BMX bike for street tricks in Vice City. Unlock requirement: Complete 5 Fitness Challenges.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Complete 5 Fitness Challenges"
  },
  {
    title: "Spawn Taxi (Vapid Stanier G2 Taxi)",
    category: "Vehicles",
    description: "Spawns a Vapid Stanier G2 Taxi cab. Unlock requirement: Complete 5 Sports Challenges.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Complete 5 Sports Challenges"
  },
  {
    title: "Spawn Ambulance (Interstate Ambulance)",
    category: "Vehicles",
    description: "Spawns an Interstate Ambulance emergency vehicle. Unlock requirement: Discover the Interstate Ambulance in the Progress menu.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Discover Interstate Ambulance in Progress"
  },
  {
    title: "Spawn Inflatable Flamingo",
    category: "Vehicles",
    description: "Spawns a pink Inflatable Flamingo. Unlock requirement: Destroy 50 Cocaine Flamingos across Leonida.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Destroy 50 Cocaine Flamingos"
  },

  // ==========================================
  // WORLD & SCREEN FILTERS (3 Environment + 16 Screen Filters)
  // ==========================================
  {
    title: "Cycle Weather in Vice City",
    category: "World",
    description: "Cycles dynamically through sunny skies, tropical storm, fog, rain, and thunder. Unlock requirement: Finish the main story / reveal the entire map.",
    verified: true,
    ps5: "L1 + R1, Down, Right, Up, Down, Right, Up, Right",
    xbox: "LB + RB, Down, Right, Up, Down, Right, Up, Right",
    phone: "Unlock: Finish Story / Reveal Entire Map"
  },
  {
    title: "Move Time Forward",
    category: "World",
    description: "Advances the in-game time of day forward. Unlock requirement: Find 10 Collectible Watches hidden around Leonida.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Find 10 Collectible Watches"
  },
  {
    title: "Pause Time of Day",
    category: "World",
    description: "Locks the current time of day in place. Unlock requirement: Find 20 Collectible Watches across the map.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Find 20 Collectible Watches"
  },
  {
    title: "Cataclysm – Murky Smoke (Screen Filter)",
    category: "World",
    description: "Fills the entire game world of Leonida with dense, apocalyptic murky smoke. Unlock requirement: Discover Martha's Vamos in the Progress menu.",
    verified: true,
    ps5: "L1 + R1, Down, Down, Up, Right, Right, Up, Left, Left, Right, Right",
    xbox: "LB + RB, Down, Down, Up, Right, Right, Up, Left, Left, Right, Right",
    phone: "Unlock: Discover Martha's Vamos in Progress Menu"
  },
  {
    title: "Dollhouse – Vivid Narrow Aspect (Screen Filter)",
    category: "World",
    description: "Applies a vivid dollhouse color filter with a narrow aspect ratio. Unlock requirement: Spend 8 hours with your partner.",
    verified: true,
    ps5: "L1 + R1, Down, Down, Up, Right, Right, Up, Left, Left, Down, Right",
    xbox: "LB + RB, Down, Down, Up, Right, Right, Up, Left, Left, Down, Right",
    phone: "Unlock: Spend 8 Hours with Your Partner"
  },
  {
    title: "Faded Glory – Color CRT TV (Screen Filter)",
    category: "World",
    description: "Applies a nostalgic color CRT television filter across the screen. Unlock requirement: Rob 50 stores with your partner.",
    verified: true,
    ps5: "L1 + R1, Down, Down, Up, Right, Right, Up, Left, Left, Left, Right",
    xbox: "LB + RB, Down, Down, Up, Right, Right, Up, Left, Left, Left, Right",
    phone: "Unlock: Rob 50 Stores with Your Partner"
  },
  {
    title: "Golden Hour – Widescreen Sunset (Screen Filter)",
    category: "World",
    description: "Applies a cinematic golden sunset filter paired with a widescreen aspect ratio. Unlock requirement: Spend 4 hours holding hands with your partner.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Spend 4 Hours Holding Hands with Partner"
  },
  {
    title: "Powdered Sugar (Screen Filter)",
    category: "World",
    description: "Turns the game world stark white with sparkling highlights. Unlock requirement: Scan all space debris using WAiNK.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Scan All Space Debris with WAiNK"
  },
  {
    title: "Neon Jungle (Screen Filter)",
    category: "World",
    description: "Drenches Vice City and Leonida in vibrant neon highlights. Unlock requirement: Discover all 16 Girlypop vehicles.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Discover All 16 Girlypop Vehicles"
  },
  {
    title: "Pinhole Camera (Screen Filter)",
    category: "World",
    description: "Applies a classic pinhole camera vignette filter. Unlock requirement: Clear 25 gang operations with your partner.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Clear 25 Gang Operations with Partner"
  },
  {
    title: "Yesteryear – B&W CRT TV (Screen Filter)",
    category: "World",
    description: "Applies a vintage black-and-white CRT TV filter. Unlock requirement: Discover the Ridgway in the Progress menu.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Discover the Ridgway in Progress Menu"
  },
  {
    title: "Fast Forward – Motion Blur (Screen Filter)",
    category: "World",
    description: "Adds motion blur and accelerates cloud movement across the sky. Unlock requirement: Complete 50 meditations.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Complete 50 Meditations"
  },
  {
    title: "Fisheye Lens (Screen Filter)",
    category: "World",
    description: "Applies an ultra-wide fisheye camera lens filter. Unlock requirement: Catch 100 fish across Leonida.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Catch 100 Fish"
  },
  {
    title: "Pixel Art – Retro Pixelated (Screen Filter)",
    category: "World",
    description: "Applies a retro pixelated graphical filter over the game world. Unlock requirement: Make $250,000 selling collectibles.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Make $250,000 Selling Collectibles"
  },
  {
    title: "Hellscape – Heat Haze (Screen Filter)",
    category: "World",
    description: "Turns the world red and orange with a heavy heat-haze distortion. Unlock requirement: Steal 100 police vehicles.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Steal 100 Police Vehicles"
  },
  {
    title: "Videotape – VHS Filter (Screen Filter)",
    category: "World",
    description: "Applies a retro 1980s VHS videotape filter. Unlock requirement: Complete 50 activities with your partner.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Complete 50 Activities with Partner"
  },
  {
    title: "Dark Mirror – Upside Down (Screen Filter)",
    category: "World",
    description: "Flips the entire game world upside down and turns it black. Unlock requirement: Make $500,000 selling vehicles.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Make $500,000 Selling Vehicles"
  },
  {
    title: "Migraine – Blurred Distortion (Screen Filter)",
    category: "World",
    description: "Applies a blurred, distorted visual filter across the screen. Unlock requirement: Survive 6 minutes with a 6-star Wanted level.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Survive 6 Minutes with 6-Star Wanted Level"
  },
  {
    title: "Bubblegum – Purple & Yellow Sparkle (Screen Filter)",
    category: "World",
    description: "Turns the world purple and yellow with sparkling highlights. Unlock requirement: Find all 24 collectible cards for the Vice City Flamingos.",
    verified: false,
    ps5: "Code coming soon (Progress → Cheats)",
    xbox: "Code coming soon (Progress → Cheats)",
    phone: "Unlock: Find All 24 Vice City Flamingos Cards"
  }
];

const PLATFORM_META = {
  ps5: { label: "PS5 (via Phone)", className: "platform-ps5" },
  xbox: { label: "Xbox (via Phone)", className: "platform-xbox" },
  phone: { label: "Phone / Menu", className: "platform-phone" }
};

const SAFE_CODES_SEARCH_DATA = [
  {
    title: "Safe Code: Brooks Boatworks (Chapter 2)",
    category: "Safe Code",
    description: "Fixed safe code for the Illegal Operation in northeastern Port Gellhorn (Chapter 2). Slip through the eastern fence hole to the upper office of the gray building—inspecting the wall map logs all 3 codes.",
    verified: true,
    ps5: "6, 8, 2, 3",
    xbox: "6, 8, 2, 3",
    phone: "Port Gellhorn · Chapter 2 (Illegal Operation)"
  },
  {
    title: "Safe Code: La Cascara Motel (Chapter 2)",
    category: "Safe Code",
    description: "Fixed safe code for the Illegal Operation at La Cascara Motel in Port Gellhorn (Chapter 2). Usable right away during your first hours in Story Mode.",
    verified: true,
    ps5: "6, 9, 6, 9",
    xbox: "6, 9, 6, 9",
    phone: "Port Gellhorn · Chapter 2 (Illegal Operation)"
  },
  {
    title: "Safe Code: Kingpin Bowling (Chapter 2)",
    category: "Safe Code",
    description: "Fixed safe code for the Illegal Operation inside the back office of Kingpin Bowling in Port Gellhorn (Chapter 2). Regular store robberies use randomized codes every time.",
    verified: true,
    ps5: "0, 3, 0, 0",
    xbox: "0, 3, 0, 0",
    phone: "Port Gellhorn · Chapter 2 (Illegal Operation)"
  },
  {
    title: "Door Code: Moonstone Boutique / Acid Lab (Lab Fees)",
    category: "Story Code",
    description: "Fixed keypad code for the backroom door of Moonstone Boutique (Acid Lab) during the Lab Fees mission (Brian's Rent) in Chapter 1.",
    verified: true,
    ps5: "0, 4, 2, 0",
    xbox: "0, 4, 2, 0",
    phone: "Mission: Lab Fees · Chapter 1 (Keypad)"
  },
  {
    title: "Door Code: Brian's Lockup (Lab Fees)",
    category: "Story Code",
    description: "Fixed door keypad code for Brian's Lockup stash house during the Lab Fees mission in Chapter 1.",
    verified: true,
    ps5: "7, 7, 0, 0",
    xbox: "7, 7, 0, 0",
    phone: "Mission: Lab Fees · Chapter 1 (Keypad)"
  },
  {
    title: "PC Password: Pelican Valley Crab Research Outpost",
    category: "Story Code",
    description: "Computer password at Pelican Valley Crab Research Outpost (scratched on the side room floor after flipping the outdoor power switch).",
    verified: true,
    ps5: "CLEAVES",
    xbox: "CLEAVES",
    phone: "Pelican Valley · Crabshack VF5 SMG Puzzle"
  },
  {
    title: "Safe Code: Pelican Valley Crab Research Outpost",
    category: "Safe Code",
    description: "Fixed safe code (double specimen ID 0036) inside Pelican Valley Crab Research Outpost. Reveals code 0212 for the dock building containing the unique Crabshack VF5 SMG.",
    verified: true,
    ps5: "0, 0, 7, 2",
    xbox: "0, 0, 7, 2",
    phone: "Pelican Valley · Crabshack VF5 SMG Puzzle"
  },
  {
    title: "Keypad Code: Pelican Valley Dock Building (Crabshack VF5 SMG)",
    category: "Story Code",
    description: "Unlocks the dock building at Pelican Valley Crab Research Outpost where you can pick up the unique Crabshack VF5 SMG.",
    verified: true,
    ps5: "0, 2, 1, 2",
    xbox: "0, 2, 1, 2",
    phone: "Pelican Valley · Unique Weapon (Crabshack VF5 SMG)"
  },
  {
    title: "Garage Code: Randy's Wishlist Garage ('74 Vamos)",
    category: "Story Code",
    description: "Fixed garage keypad code to steal the '74 Vamos from Randy's Wishlist.",
    verified: true,
    ps5: "2, 7, 2, 7",
    xbox: "2, 7, 2, 7",
    phone: "Randy's Wishlist · Garage Door (Keypad)"
  },
  {
    title: "Safe Code: Casa de Empeño (Yasmani's Jewelry Jobs)",
    category: "Safe Code",
    description: "Fixed pawn shop safe code at Casa de Empeño during Chapter 3's Yasmani's Jewelry Jobs mission to steal the buffalo skull chain.",
    verified: true,
    ps5: "1, 6, 8, 0",
    xbox: "1, 6, 8, 0",
    phone: "Chapter 3 · Yasmani's Jewelry Jobs"
  },
  {
    title: "Safe Code: Richardson Jewelry & Diamonds (Chapter 3)",
    category: "Safe Code",
    description: "Fixed safe code at Richardson Jewelry & Diamonds during Chapter 3's Yasmani's Jewelry Jobs mission to steal the diamond ring.",
    verified: true,
    ps5: "6, 8, 1, 5",
    xbox: "6, 8, 1, 5",
    phone: "Chapter 3 · Yasmani's Jewelry Jobs"
  },
  {
    title: "Safe Code: Donovan Banks & Co. (Chapter 3)",
    category: "Safe Code",
    description: "Fixed safe code at Donovan Banks & Co. during Chapter 3's Yasmani's Jewelry Jobs mission (amethyst necklace). Be sure to enter the leading zero (0104).",
    verified: true,
    ps5: "0, 1, 0, 4",
    xbox: "0, 1, 0, 4",
    phone: "Chapter 3 · Yasmani's Jewelry Jobs"
  },
  {
    title: "Safe Code: Sunrise RV Park (Kingfishers Gang Operation)",
    category: "Safe Code",
    description: "Fixed safe code inside the warehouse at Sunrise RV Park (Kingfishers Illegal Operation), north of Cottonmouth Lake and northwest of Key Lento.",
    verified: true,
    ps5: "6, 7, 6, 9",
    xbox: "6, 7, 6, 9",
    phone: "Sunrise RV Park · Kingfishers Gang Operation"
  },
  {
    title: "Safe Code: Nova Auto Junkyard (M7 Gang Operation)",
    category: "Safe Code",
    description: "Fixed safe code at Nova Auto Junkyard during the M7 gang Illegal Operation.",
    verified: true,
    ps5: "7, 7, 7, 7",
    xbox: "7, 7, 7, 7",
    phone: "Nova Auto Junkyard · M7 Gang Operation"
  },
  {
    title: "Garage Code: Key Lento Party House (Hidden Collectibles)",
    category: "Story Code",
    description: "6-digit keypad code for the Key Lento party house garage door in southeast Leonida Keys. Unlocks hidden collectibles including a Los Santos Pounders card.",
    verified: true,
    ps5: "0, 9, 2, 3, 1, 9",
    xbox: "0, 9, 2, 3, 1, 9",
    phone: "Key Lento · Hidden Room & Collectibles"
  },
  {
    title: "Safe Code: Cottonmouth Lake Trailer (Grassrivers)",
    category: "Safe Code",
    description: "5-digit safe code inside the trailer on the southwest shore of Cottonmouth Lake (Grassrivers). Contains the Laki Maivia (Los Santos Pounders) collectible card.",
    verified: true,
    ps5: "4, 4, 0, 1, 7",
    xbox: "4, 4, 0, 1, 7",
    phone: "Cottonmouth Lake · Los Santos Pounders Card"
  },
  {
    title: "Door Code: Mount Kalaga National Park Shed",
    category: "Story Code",
    description: "5-digit keypad code to open the locked maintenance shed door in Mount Kalaga National Park in northern Leonida.",
    verified: true,
    ps5: "6, 9, 1, 8, 5",
    xbox: "6, 9, 1, 8, 5",
    phone: "Mount Kalaga National Park · Locked Shed"
  }
];

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

  function buildCodeSequence(codeValue, isPhoneMeta = false) {
    const seqContainer = document.createElement("div");
    seqContainer.className = "code-sequence";

    const lower = String(codeValue || "").toLowerCase();
    const isSingleBadge =
      !codeValue ||
      isPhoneMeta ||
      lower.includes("available") ||
      lower.includes("coming soon") ||
      lower.includes("unlock:") ||
      lower.includes("port gellhorn");

    if (isSingleBadge) {
      const kbd = document.createElement("kbd");
      const isPendingText = lower.includes("coming soon") || lower.includes("available");
      kbd.className = isPendingText ? "kbd-token kbd-pending" : "kbd-token";
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
    statusBadge.textContent = cheat.verified ? "Verified Code" : "Code coming soon";

    badges.append(catBadge, statusBadge);
    header.append(title, badges);

    const desc = document.createElement("p");
    desc.className = "cheat-description";
    desc.textContent = cheat.description;

    const codesWrap = document.createElement("div");
    codesWrap.className = "cheat-codes";

    const isSafeOrStory = cheat.category === "Safe Code" || cheat.category === "Story Code";
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
        tag.textContent = key === "ps5" ? "Code (PS5 & Xbox)" : "Location / Mission";
      } else {
        tag.textContent = meta.label;
      }

      let value = cheat[key];
      if (key === "phone" && !isSafeOrStory) {
        value = cheat.verified
          ? `Phone (↑) + L1/LB & R1/RB · ${cheat.phone}`
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
    const isSafesCategory = state.category === "Safes";

    const filteredCheats = isSafesCategory
      ? []
      : cheatsData
          .filter((item) => {
            const matchesCategory =
              state.category === "All" ||
              (state.category === "Verified" ? item.verified : item.category === state.category);
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
            query.includes("safe") ||
            query.includes("door code") ||
            query.includes("keypad")
          );
        })
      : [];

    const filtered = [...matchingSafeCodes, ...filteredCheats];

    gridEl.textContent = "";

    if (filtered.length === 0) {
      emptyStateEl.hidden = false;
      resultsCountEl.textContent = "0 codes found";
      return;
    }

    emptyStateEl.hidden = true;
    const verifiedCount = cheatsData.filter((c) => c.verified).length;
    resultsCountEl.textContent =
      !query && state.category === "All" && state.platform === "all"
        ? `Showing all ${cheatsData.length} GTA 6 cheats (${verifiedCount} verified D-Pad codes first + ${cheatsData.length - verifiedCount} unlock requirements)`
        : state.category === "Verified" && !query
        ? `Showing all ${filtered.length} verified GTA 6 directional codes (PS5, Xbox & Phone)`
        : isSafesCategory && !query
        ? `Showing all ${filtered.length} verified safe & door codes (Story Mode)`
        : `Showing ${filtered.length} matching results`;

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
