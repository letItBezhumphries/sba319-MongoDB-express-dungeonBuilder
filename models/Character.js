const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  name: {
    type: String,
    required: true,
  },
  class_type: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
    default: 1,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
  },
  race: {
    type: String,
    // required: true,
  },
  alignment: {
    type: String,
    // required: true,
  },
  experiencePoints: {
    type: Number,
    required: true,
    default: 0,
  },
  // abilities: {
  //   strength: {
  //     type: Number,
  //     required: true,
  //   },
  //   dexterity: {
  //     type: Number,
  //     required: true,
  //   },
  //   constitution: {
  //     type: Number,
  //     required: true,
  //   },
  //   intelligence: {
  //     type: Number,
  //     required: true,
  //   },
  //   wisdom: {
  //     type: Number,
  //     required: true,
  //   },
  //   charisma: {
  //     type: Number,
  //     required: true,
  //   },
  // },
  // saving_throws: {
  //   strength: {
  //     type: String,
  //   },
  //   dexterity: {
  //     type: String,
  //   },
  //   constitution: {
  //     type: String,
  //   },
  //   intelligence: {
  //     type: String,
  //   },
  //   wisdom: {
  //     type: String,
  //   },
  //   charisma: {
  //     type: String,
  //   },
  // },
  // skills: [
  //   {
  //     acrobatics: {
  //       type: String,
  //     },
  //     animal_handling: {
  //       type: String,
  //     },
  //     arcana: {
  //       type: String,
  //     },
  //     athletics: {
  //       type: String,
  //     },
  //     deception: {
  //       type: String,
  //     },
  //     history: {
  //       type: String,
  //     },
  //     insight: {
  //       type: String,
  //     },
  //     intimidation: {
  //       type: String,
  //     },
  //     investigation: {
  //       type: String,
  //     },
  //     medicine: {
  //       type: String,
  //     },
  //     nature: {
  //       type: String,
  //     },
  //     peception: {
  //       type: String,
  //     },
  //     performance: {
  //       type: String,
  //     },
  //     persuasion: {
  //       type: String,
  //     },
  //     religion: {
  //       type: String,
  //     },
  //     slight_of_hand: {
  //       type: String,
  //     },
  //     stealth: {
  //       type: String,
  //     },
  //     survival: {
  //       type: String,
  //     },
  //   },
  // ],
  // background: {
  //   type: String,
  // },
  // armor_class: {
  //   type: Number,
  //   required: true,
  // },
  // speed: {
  //   type: String,
  //   required: true,
  // },
  // hit_points: {
  //   max: {
  //     type: Number,
  //   },
  //   current: {
  //     type: Number,
  //     required: true,
  //   },
  // },
  // hit_dice: {
  //   type: String,
  // },
  // death_saves: {
  //   successes: {
  //     type: Number,
  //   },
  //   failures: {
  //     type: Number,
  //   },
  // },
  // attacks_and_spellcasting: [
  //   {
  //     attack_name: {
  //       type: String,
  //     },
  //     attack_bonus: {
  //       type: Number,
  //     },
  //     attack_type: {
  //       type: String,
  //     },
  //     attack_damage: {
  //       type: Number,
  //     },
  //   },
  // ],
  // initiative: {
  //   type: String,
  // },
  // hit_dice: {
  //   type: [Number],
  //   required: true,
  // },
  // height: {
  //   type: String,
  //   required: true,
  // },
  // weight: {
  //   type: Number,
  //   required: true,
  // },
  // age: {
  //   type: Number,
  //   required: true,
  // },
  // speed: {
  //   type: Number,
  // },
  // armor: [],
  // items: [],
  // weapons: [],
  // spell_casting_class: {
  //   type: String,
  // },
  // spell_casting_ability: {
  //   type: Number,
  // },
  // spell_save_dice: {
  //   type: String,
  // },
  // spell_attack_bonus: {
  //   type: Number,
  // },
  // spells: [
  //   {
  //     level: {
  //       type: Number,
  //     },
  //   },
  // ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Character = mongoose.model('character', CharacterSchema);
