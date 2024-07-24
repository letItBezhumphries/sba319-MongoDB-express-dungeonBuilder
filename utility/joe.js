const joe = {
  name: 'joe',
  race: 'elf',
  speed: { walk: 30 },
  age: 56,
  size: 'Medium',
  traits: [
    {
      index: 'darkvision',
      name: 'Darkvision',
      url: '/api/traits/darkvision',
    },
    {
      index: 'fey-ancestry',
      name: 'Fey Ancestry',
      url: '/api/traits/fey-ancestry',
    },
    { index: 'trance', name: 'Trance', url: '/api/traits/trance' },
    {
      index: 'keen-senses',
      name: 'Keen Senses',
      url: '/api/traits/keen-senses',
    },
  ],
  proficiencies: [
    {
      index: 'skill-perception',
      name: 'Skill: Perception',
      url: '/api/proficiencies/skill-perception',
    },
  ],
  languages: ['common', 'elvish'],
  dexterity: 2,
};

module.exports = joe;
