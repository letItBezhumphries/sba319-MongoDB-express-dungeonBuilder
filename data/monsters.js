const monsters = [
  {
    slug: 'aboleth',
    desc: '',
    name: 'Aboleth',
    size: 'Large',
    type: 'Aberration',
    alignment: 'lawful evil',
    armor_class: 17,
    armor_desc: 'natural armor',
    hit_points: 135,
    hit_dice: '18d10+36',
    speed: { walk: 10, swim: 40 },
    strength: 21,
    dexterity: 9,
    constitution: 15,
    intelligence: 18,
    wisdom: 15,
    charisma: 18,
    constitution_save: 6,
    intelligence_save: 8,
    wisdom_save: 6,
    charisma_save: null,
    perception: 10,
    skills: { history: 12, perception: 10 },
    senses: 'darkvision 120 ft., passive Perception 20',
    languages: 'Deep Speech, telepathy 120 ft.',
    challenge_rating: 10,
    actions: [
      {
        name: 'Multiattack',
        desc: 'The aboleth makes three tentacle attacks.',
      },
      {
        name: 'Tentacle',
        desc: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.",
        attack_bonus: 9,
        damage_dice: '2d6',
        damage_bonus: 5,
      },
      {
        name: 'Tail',
        desc: 'Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 15 (3d6 + 5) bludgeoning damage.',
        attack_bonus: 9,
        damage_dice: '3d6',
        damage_bonus: 5,
      },
      {
        name: 'Enslave (3/day)',
        desc: "The aboleth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.\nWhenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.",
      },
    ],
    bonus_actions: null,
    reactions: null,
    legendary_desc:
      "The aboleth can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The aboleth regains spent legendary actions at the start of its turn.",
    legendary_actions: [
      {
        name: 'Detect',
        desc: 'The aboleth makes a Wisdom (Perception) check.',
      },
      { name: 'Tail Swipe', desc: 'The aboleth makes one tail attack.' },
      {
        name: 'Psychic Drain (Costs 2 Actions)',
        desc: 'One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.',
      },
    ],
    special_abilities: [
      { name: 'Amphibious', desc: 'The aboleth can breathe air and water.' },
      {
        name: 'Mucous Cloud',
        desc: 'While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 ft. of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater.',
      },
      {
        name: 'Probing Telepathy',
        desc: "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature.",
      },
    ],
    spell_list: [],
    environments: ['Underdark', 'Sewer', 'Caverns', 'Plane Of Water', 'Water'],
    img_main: 'http://api.open5e.com/static/img/monsters/aboleth.png',
  },
  {
    slug: 'ankheg',
    desc: '',
    name: 'Ankheg',
    size: 'Large',
    type: 'Monstrosity',
    alignment: 'unaligned',
    armor_class: 14,
    armor_desc: '14 (natural armor), 11 while prone',
    hit_points: 39,
    hit_dice: '6d10+6',
    speed: { walk: 30, burrow: 10 },
    strength: 17,
    dexterity: 11,
    constitution: 13,
    intelligence: 1,
    wisdom: 13,
    charisma: 6,
    constitution_save: null,
    intelligence_save: null,
    wisdom_save: null,
    charisma_save: null,
    perception: null,
    skills: {},
    senses: 'darkvision 60 ft., tremorsense 60 ft., passive Perception 11',
    languages: '',
    challenge_rating: 2,
    actions: [
      {
        name: 'Bite',
        desc: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage plus 3 (1d6) acid damage. If the target is a Large or smaller creature, it is grappled (escape DC 13). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so.',
        attack_bonus: 5,
        damage_dice: '2d6+1d6',
        damage_bonus: 3,
      },
      {
        name: 'Acid Spray (Recharge 6)',
        desc: 'The ankheg spits acid in a line that is 30 ft. long and 5 ft. wide, provided that it has no creature grappled. Each creature in that line must make a DC 13 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one.',
        attack_bonus: 0,
        damage_dice: '3d6',
      },
    ],
    bonus_actions: null,
    reactions: null,
    legendary_desc: '',
    legendary_actions: null,
    special_abilities: null,
    spell_list: [],
    environments: ['Desert', 'Hills', 'Grassland', 'Settlement', 'Forest'],
    img_main: 'http://api.open5e.com/static/img/monsters/ankheg.png',
  },
  {
    slug: 'basilisk',
    desc: '',
    name: 'Basilisk',
    size: 'Medium',
    type: 'Monstrosity',
    alignment: 'unaligned',
    armor_class: 12,
    armor_desc: 'natural armor',
    hit_points: 52,
    hit_dice: '8d8+16',
    speed: { walk: 20 },
    strength: 16,
    dexterity: 8,
    constitution: 15,
    intelligence: 2,
    wisdom: 8,
    charisma: 7,
    constitution_save: null,
    intelligence_save: null,
    wisdom_save: null,
    charisma_save: null,
    perception: null,
    skills: {},
    senses: 'darkvision 60 ft., passive Perception 9',
    languages: '',
    challenge_rating: 3,
    actions: [
      {
        name: 'Bite',
        desc: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage plus 7 (2d6) poison damage.',
        attack_bonus: 5,
        damage_dice: '2d6+2d6',
        damage_bonus: 3,
      },
    ],
    bonus_actions: null,
    reactions: null,
    legendary_desc: '',
    legendary_actions: null,
    special_abilities: [
      {
        name: 'Petrifying Gaze',
        desc: "If a creature starts its turn within 30 ft. of the basilisk and the two of them can see each other, the basilisk can force the creature to make a DC 12 Constitution saving throw if the basilisk isn't incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.\nA creature that isn't surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can't see the basilisk until the start of its next turn, when it can avert its eyes again. If it looks at the basilisk in the meantime, it must immediately make the save.\nIf the basilisk sees its reflection within 30 ft. of it in bright light, it mistakes itself for a rival and targets itself with its gaze.",
      },
    ],
    spell_list: [],
    environments: [
      'Desert',
      'Mountains',
      'Ruin',
      'Jungle',
      'Hills',
      'Mountain',
      'Caverns',
      'Plane Of Earth',
    ],
    img_main: 'http://api.open5e.com/static/img/monsters/basilisk.png',
  },
  {
    slug: 'behir',
    desc: '',
    name: 'Behir',
    size: 'Huge',
    type: 'Monstrosity',
    alignment: 'neutral evil',
    armor_class: 17,
    armor_desc: 'natural armor',
    hit_points: 168,
    hit_dice: '16d12+64',
    speed: { walk: 50, climb: 40 },
    strength: 23,
    dexterity: 16,
    constitution: 18,
    intelligence: 7,
    wisdom: 14,
    charisma: 12,
    constitution_save: null,
    intelligence_save: null,
    wisdom_save: null,
    charisma_save: null,
    perception: 6,
    skills: { perception: 6, stealth: 7 },
    senses: 'darkvision 90 ft., passive Perception 16',
    languages: 'Draconic',
    challenge_rating: 11,
    actions: [
      {
        name: 'Multiattack',
        desc: 'The behir makes two attacks: one with its bite and one to constrict.',
      },
      {
        name: 'Bite',
        desc: 'Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 6) piercing damage.',
        attack_bonus: 10,
        damage_dice: '3d10',
        damage_bonus: 6,
      },
      {
        name: 'Constrict',
        desc: "Melee Weapon Attack: +10 to hit, reach 5 ft., one Large or smaller creature. Hit: 17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) slashing damage. The target is grappled (escape DC 16) if the behir isn't already constricting a creature, and the target is restrained until this grapple ends.",
        attack_bonus: 10,
        damage_dice: '2d10+2d10',
        damage_bonus: 6,
      },
      {
        name: 'Lightning Breath (Recharge 5-6)',
        desc: 'The behir exhales a line of lightning that is 20 ft. long and 5 ft. wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.',
        attack_bonus: 0,
        damage_dice: '12d10',
      },
      {
        name: 'Swallow',
        desc: "The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes 21 (6d6) acid damage at the start of each of the behir's turns. A behir can have only one creature swallowed at a time.\nIf the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 ft. of the behir. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 ft. of movement, exiting prone.",
        attack_bonus: 0,
        damage_dice: '6d6',
      },
    ],
    bonus_actions: null,
    reactions: null,
    legendary_desc: '',
    legendary_actions: null,
    special_abilities: null,
    spell_list: [],
    environments: ['Underdark', 'Ruin', 'Plane Of Earth', 'Caverns'],
    img_main: 'http://api.open5e.com/static/img/monsters/behir.png',
  },
  {
    slug: 'bulette',
    desc: '',
    name: 'Bulette',
    size: 'Large',
    type: 'Monstrosity',
    alignment: 'unaligned',
    armor_class: 17,
    armor_desc: 'natural armor',
    hit_points: 94,
    hit_dice: '9d10+45',
    speed: { walk: 40, burrow: 40 },
    strength: 19,
    dexterity: 11,
    constitution: 21,
    intelligence: 2,
    wisdom: 10,
    charisma: 5,
    constitution_save: null,
    intelligence_save: null,
    wisdom_save: null,
    charisma_save: null,
    perception: 6,
    skills: { perception: 6 },
    senses: 'darkvision 60 ft., tremorsense 60 ft., passive Perception 16',
    languages: '',
    challenge_rating: 5,
    actions: [
      {
        name: 'Bite',
        desc: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 30 (4d12 + 4) piercing damage.',
        attack_bonus: 7,
        damage_dice: '4d12',
        damage_bonus: 4,
      },
      {
        name: 'Deadly Leap',
        desc: "If the bulette jumps at least 15 ft. as part of its movement, it can then use this action to land on its ft. in a space that contains one or more other creatures. Each of those creatures must succeed on a DC 16 Strength or Dexterity saving throw (target's choice) or be knocked prone and take 14 (3d6 + 4) bludgeoning damage plus 14 (3d6 + 4) slashing damage. On a successful save, the creature takes only half the damage, isn't knocked prone, and is pushed 5 ft. out of the bulette's space into an unoccupied space of the creature's choice. If no unoccupied space is within range, the creature instead falls prone in the bulette's space.",
      },
    ],
    bonus_actions: null,
    reactions: null,
    legendary_desc: '',
    legendary_actions: null,
    special_abilities: [
      {
        name: 'Standing Leap',
        desc: "The bulette's long jump is up to 30 ft. and its high jump is up to 15 ft., with or without a running start.",
      },
    ],
    spell_list: [],
    environments: [
      'Hill',
      'Desert',
      'Mountains',
      'Grassland',
      'Forest',
      'Ruin',
      'Hills',
      'Mountain',
      'Settlement',
      'Plane Of Earth',
    ],
    img_main: 'http://api.open5e.com/static/img/monsters/bulette.png',
  },
  {
    slug: 'chuul',
    desc: '',
    name: 'Chuul',
    size: 'Large',
    type: 'Aberration',
    alignment: 'chaotic evil',
    armor_class: 16,
    armor_desc: 'natural armor',
    hit_points: 93,
    hit_dice: '11d10+33',
    speed: { walk: 30, swim: 30 },
    strength: 19,
    dexterity: 10,
    constitution: 16,
    intelligence: 5,
    wisdom: 11,
    charisma: 5,
    constitution_save: null,
    intelligence_save: null,
    wisdom_save: null,
    charisma_save: null,
    perception: 4,
    skills: { perception: 4 },
    senses: 'darkvision 60 ft., passive Perception 14',
    languages: "understands Deep Speech but can't speak",
    challenge_rating: 4,
    actions: [
      {
        name: 'Multiattack',
        desc: 'The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once.',
      },
      {
        name: 'Pincer',
        desc: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage. The target is grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures grappled.",
        attack_bonus: 6,
        damage_dice: '2d6',
        damage_bonus: 4,
      },
      {
        name: 'Tentacles',
        desc: 'One creature grappled by the chuul must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.',
      },
    ],
    bonus_actions: null,
    reactions: null,
    legendary_desc: '',
    legendary_actions: null,
    special_abilities: [
      { name: 'Amphibious', desc: 'The chuul can breathe air and water.' },
      {
        name: 'Sense Magic',
        desc: "The chuul senses magic within 120 feet of it at will. This trait otherwise works like the detect magic spell but isn't itself magical.",
      },
    ],
    spell_list: [],
    environments: ['Underdark', 'Plane Of Water', 'Water', 'Caverns'],
    img_main: 'http://api.open5e.com/static/img/monsters/chuul.png',
  },
  {
    slug: 'cloaker',
    desc: '',
    name: 'Cloaker',
    size: 'Large',
    type: 'Aberration',
    alignment: 'chaotic neutral',
    armor_class: 14,
    armor_desc: 'natural armor',
    hit_points: 78,
    hit_dice: '12d10+12',
    speed: { walk: 10, fly: 40 },
    strength: 17,
    dexterity: 15,
    constitution: 12,
    intelligence: 13,
    wisdom: 12,
    charisma: 14,
    constitution_save: null,
    intelligence_save: null,
    wisdom_save: null,
    charisma_save: null,
    perception: null,
    skills: { stealth: 5 },
    senses: 'darkvision 60 ft., passive Perception 11',
    languages: 'Deep Speech, Undercommon',
    challenge_rating: 8,
    actions: [
      {
        name: 'Multiattack',
        desc: 'The cloaker makes two attacks: one with its bite and one with its tail.',
      },
      {
        name: 'Bite',
        desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 10 (2d6 + 3) piercing damage, and if the target is Large or smaller, the cloaker attaches to it. If the cloaker has advantage against the target, the cloaker attaches to the target's head, and the target is blinded and unable to breathe while the cloaker is attached. While attached, the cloaker can make this attack only against the target and has advantage on the attack roll. The cloaker can detach itself by spending 5 feet of its movement. A creature, including the target, can take its action to detach the cloaker by succeeding on a DC 16 Strength check.",
        attack_bonus: 6,
        damage_dice: '2d6',
        damage_bonus: 3,
      },
      {
        name: 'Tail',
        desc: 'Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 7 (1d8 + 3) slashing damage.',
        attack_bonus: 6,
        damage_dice: '1d8',
        damage_bonus: 3,
      },
      {
        name: 'Moan',
        desc: "Each creature within 60 feet of the cloaker that can hear its moan and that isn't an aberration must succeed on a DC 13 Wisdom saving throw or become frightened until the end of the cloaker's next turn. If a creature's saving throw is successful, the creature is immune to the cloaker's moan for the next 24 hours.",
      },
      {
        name: 'Phantasms (Recharges after a Short or Long Rest)',
        desc: "The cloaker magically creates three illusory duplicates of itself if it isn't in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one. If the cloaker is ever in an area of bright light, the duplicates disappear.\nWhenever any creature targets the cloaker with an attack or a harmful spell while a duplicate remains, that creature rolls randomly to determine whether it targets the cloaker or one of the duplicates. A creature is unaffected by this magical effect if it can't see or if it relies on senses other than sight.\nA duplicate has the cloaker's AC and uses its saving throws. If an attack hits a duplicate, or if a duplicate fails a saving throw against an effect that deals damage, the duplicate disappears.",
      },
    ],
    bonus_actions: null,
    reactions: null,
    legendary_desc: '',
    legendary_actions: null,
    special_abilities: [
      {
        name: 'Damage Transfer',
        desc: 'While attached to a creature, the cloaker takes only half the damage dealt to it (rounded down). and that creature takes the other half.',
      },
      {
        name: 'False Appearance',
        desc: 'While the cloaker remains motionless without its underside exposed, it is indistinguishable from a dark leather cloak.',
      },
      {
        name: 'Light Sensitivity',
        desc: 'While in bright light, the cloaker has disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight.',
      },
    ],
    spell_list: [],
    environments: ['Underdark', 'Sewer', 'Laboratory', 'Caverns'],
    img_main: 'http://api.open5e.com/static/img/monsters/cloaker.png',
  },
  {
    slug: 'cockatrice',
    desc: '',
    name: 'Cockatrice',
    size: 'Small',
    type: 'Monstrosity',
    alignment: 'unaligned',
    armor_class: 11,
    armor_desc: null,
    hit_points: 27,
    hit_dice: '6d6+6',
    speed: { walk: 20, fly: 40 },
    strength: 6,
    dexterity: 12,
    constitution: 12,
    intelligence: 2,
    wisdom: 13,
    charisma: 5,
    constitution_save: null,
    intelligence_save: null,
    wisdom_save: null,
    charisma_save: null,
    perception: null,
    skills: {},
    senses: 'darkvision 60 ft., passive Perception 11',
    languages: '',
    challenge_rating: 0.5,
    actions: [
      {
        name: 'Bite',
        desc: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) piercing damage, and the target must succeed on a DC 11 Constitution saving throw against being magically petrified. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours.',
        attack_bonus: 3,
        damage_dice: '1d4',
        damage_bonus: 1,
      },
    ],
    bonus_actions: null,
    reactions: null,
    legendary_desc: '',
    legendary_actions: null,
    special_abilities: null,
    spell_list: [],
    environments: [
      'Desert',
      'Mountains',
      'Grassland',
      'Ruin',
      'Jungle',
      'Hills',
      'Swamp',
    ],
    img_main: 'http://api.open5e.com/static/img/monsters/cockatrice.png',
  },
  {
    slug: 'couatl',
    desc: '',
    name: 'Couatl',
    size: 'Medium',
    type: 'Celestial',
    alignment: 'lawful good',
    armor_class: 19,
    armor_desc: 'natural armor',
    hit_points: 97,
    hit_dice: '13d8+39',
    speed: { walk: 30, fly: 90 },
    strength: 16,
    dexterity: 20,
    constitution: 17,
    intelligence: 18,
    wisdom: 20,
    charisma: 18,
    constitution_save: 5,
    intelligence_save: null,
    wisdom_save: 7,
    charisma_save: 6,
    perception: null,
    skills: {},
    senses: 'truesight 120 ft., passive Perception 15',
    languages: 'all, telepathy 120 ft.',
    challenge_rating: 4,
    actions: [
      {
        name: 'Bite',
        desc: 'Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 8 (1d6 + 5) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 24 hours. Until this poison ends, the target is unconscious. Another creature can use an action to shake the target awake.',
        attack_bonus: 8,
        damage_dice: '1d6',
        damage_bonus: 5,
      },
      {
        name: 'Constrict',
        desc: "Melee Weapon Attack: +6 to hit, reach 10 ft., one Medium or smaller creature. Hit: 10 (2d6 + 3) bludgeoning damage, and the target is grappled (escape DC 15). Until this grapple ends, the target is restrained, and the couatl can't constrict another target.",
        attack_bonus: 6,
        damage_dice: '2d6',
        damage_bonus: 3,
      },
      {
        name: 'Change Shape',
        desc: "The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl's choice).\nIn a new form, the couatl retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and other actions are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks. If the new form has a bite attack, the couatl can use its bite in that form.",
      },
    ],
    bonus_actions: null,
    reactions: null,
    legendary_desc: '',
    legendary_actions: null,
    special_abilities: [
      {
        name: 'Innate Spellcasting',
        desc: "The couatl's spellcasting ability is Charisma (spell save DC 14). It can innately cast the following spells, requiring only verbal components:\n\nAt will: detect evil and good, detect magic, detect thoughts\n3/day each: bless, create food and water, cure wounds, lesser restoration, protection from poison, sanctuary, shield\n1/day each: dream, greater restoration, scrying",
      },
      {
        name: 'Magic Weapons',
        desc: "The couatl's weapon attacks are magical.",
      },
      {
        name: 'Shielded Mind',
        desc: 'The couatl is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location.',
      },
    ],
    spell_list: [
      'https://api.open5e.com/v1/spells/detect-evil-and-good/',
      'https://api.open5e.com/v1/spells/detect-magic/',
      'https://api.open5e.com/v1/spells/detect-thoughts/',
      'https://api.open5e.com/v1/spells/bless/',
      'https://api.open5e.com/v1/spells/create-food-and-water/',
      'https://api.open5e.com/v1/spells/cure-wounds/',
      'https://api.open5e.com/v1/spells/lesser-restoration/',
      'https://api.open5e.com/v1/spells/protection-from-poison/',
      'https://api.open5e.com/v1/spells/sanctuary/',
      'https://api.open5e.com/v1/spells/shield/',
      'https://api.open5e.com/v1/spells/dream/',
      'https://api.open5e.com/v1/spells/greater-restoration/',
      'https://api.open5e.com/v1/spells/scrying/',
    ],
    environments: [
      'Urban',
      'Desert',
      'Jungle',
      'Astral Plane',
      'Grassland',
      'Forest',
    ],
    img_main: 'http://api.open5e.com/static/img/monsters/couatl.png',
  },
  {
    slug: 'darkmantle',
    desc: '',
    name: 'Darkmantle',
    size: 'Small',
    type: 'Monstrosity',
    alignment: 'unaligned',
    armor_class: 11,
    armor_desc: null,
    hit_points: 22,
    hit_dice: '5d6+5',
    speed: { walk: 10, fly: 30 },
    strength: 16,
    dexterity: 12,
    constitution: 13,
    intelligence: 2,
    wisdom: 10,
    charisma: 5,
    constitution_save: null,
    intelligence_save: null,
    wisdom_save: null,
    charisma_save: null,
    perception: null,
    skills: { stealth: 3 },
    senses: 'blindsight 60 ft., passive Perception 10',
    languages: '',
    challenge_rating: 0.5,
    actions: [
      {
        name: 'Crush',
        desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6 + 3) bludgeoning damage, and the darkmantle attaches to the target. If the target is Medium or smaller and the darkmantle has advantage on the attack roll, it attaches by engulfing the target's head, and the target is also blinded and unable to breathe while the darkmantle is attached in this way.\nWhile attached to the target, the darkmantle can attack no other creature except the target but has advantage on its attack rolls. The darkmantle's speed also becomes 0, it can't benefit from any bonus to its speed, and it moves with the target.\nA creature can detach the darkmantle by making a successful DC 13 Strength check as an action. On its turn, the darkmantle can detach itself from the target by using 5 feet of movement.",
        attack_bonus: 5,
        damage_dice: '1d6',
        damage_bonus: 3,
      },
      {
        name: 'Darkness Aura (1/day)',
        desc: "A 15-foot radius of magical darkness extends out from the darkmantle, moves with it, and spreads around corners. The darkness lasts as long as the darkmantle maintains concentration, up to 10 minutes (as if concentrating on a spell). Darkvision can't penetrate this darkness, and no natural light can illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell creating the light is dispelled.",
      },
    ],
    bonus_actions: null,
    reactions: null,
    legendary_desc: '',
    legendary_actions: null,
    special_abilities: [
      {
        name: 'Echolocation',
        desc: "The darkmantle can't use its blindsight while deafened.",
      },
      {
        name: 'False Appearance',
        desc: 'While the darkmantle remains motionless, it is indistinguishable from a cave formation such as a stalactite or stalagmite.',
      },
    ],
    spell_list: [],
    environments: ['Underdark', 'Shadowfell', 'Caverns'],
    img_main: 'http://api.open5e.com/static/img/monsters/darkmantle.png',
  },
  {
    slug: 'hezrou',
    desc: '',
    name: 'Hezrou',
    size: 'Large',
    type: 'Fiend',
    alignment: 'chaotic evil',
    armor_class: 16,
    armor_desc: 'natural armor',
    hit_points: 136,
    hit_dice: '13d10+65',
    speed: { walk: 30 },
    strength: 19,
    dexterity: 17,
    constitution: 20,
    intelligence: 5,
    wisdom: 12,
    charisma: 13,
    constitution_save: 8,
    intelligence_save: null,
    wisdom_save: 4,
    charisma_save: null,
    perception: null,
    skills: {},
    senses: 'darkvision 120 ft., passive Perception 11',
    languages: 'Abyssal, telepathy 120 ft.',
    challenge_rating: 8,
    actions: [
      {
        name: 'Multiattack',
        desc: 'The hezrou makes three attacks: one with its bite and two with its claws.',
      },
      {
        name: 'Bite',
        desc: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) piercing damage.',
        attack_bonus: 7,
        damage_dice: '2d10',
        damage_bonus: 4,
      },
      {
        name: 'Claws',
        desc: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.',
        attack_bonus: 7,
        damage_dice: '2d6',
        damage_bonus: 4,
      },
      {
        name: 'Variant: Summon Demon (1/Day)',
        desc: "The demon chooses what to summon and attempts a magical summoning.\nA hezrou has a 30 percent chance of summoning 2d6 dretches or one hezrou.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
      },
    ],
    bonus_actions: null,
    reactions: null,
    legendary_desc: '',
    legendary_actions: null,
    special_abilities: [
      {
        name: 'Magic Resistance',
        desc: 'The hezrou has advantage on saving throws against spells and other magical effects.',
      },
      {
        name: 'Stench',
        desc: "Any creature that starts its turn within 10 feet of the hezrou must succeed on a DC 14 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the hezrou's stench for 24 hours.",
      },
    ],
    spell_list: [],
    environments: ['Abyss'],
    img_main: 'http://api.open5e.com/static/img/monsters/hezrou.png',
  },
];

module.exports = monsters;
