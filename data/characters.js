const characters = [
  {
    id: '17fcab197b5a443fbb188d861933a861',
    img: 'https://loremflickr.com/640/480/druid?lock=8908187348500480',
    userId: 'f57dfc7534b34f15b750ee11bbf3f520',
    name: 'Felicity Leuschke',
    gender: 'Omnigender',
    class_type: 'druid',
    age: 26,
    hit_points: 20,
  },
  {
    id: '77487dabb99c4ae2827970d24ce5a4b9',
    img: 'https://loremflickr.com/640/480/rogue?lock=4447791795404800',
    userId: 'f57dfc7534b34f15b750ee11bbf3f520',
    name: 'Ferne Kuhn',
    gender: 'Demigender',
    class_type: 'rogue',
    age: 56,
    hit_points: 23,
  },
  {
    id: 'd9e3714c3fc2462ea16ea994fdb629d0',
    img: 'https://loremflickr.com/640/480/paladin?lock=5348736586743808',
    userId: 'f414a1c903014ff0b3aeed911f37d4b4',
    name: 'Magnus Zboncak',
    gender: 'male',
    class_type: 'paladin',
    age: 18,
    hit_points: 18,
  },
  {
    id: 'e6f616c972914204a735bc44b8bd2dcd',
    img: 'https://loremflickr.com/640/480/cleric?lock=6568528150790144',
    userId: 'd20f715a96304c0f9a3b8722b052648a',
    name: 'Abbie Trantow-Ernser',
    gender: 'Genderqueer',
    class_type: 'cleric',
    age: 103,
    hit_points: 19,
  },
  {
    id: 'ee61f27697d049d5b8c2d11220be1ee6',
    img: 'https://loremflickr.com/640/480/bard?lock=1325166695022592',
    userId: 'd20f715a96304c0f9a3b8722b052648a',
    name: 'Emie Berge',
    gender: 'Female to male transsexual man',
    class_type: 'bard',
    age: 131,
    hit_points: 31,
  },
  {
    id: '84fc55f044be4f0789b70f8f23769da4',
    img: 'https://loremflickr.com/640/480/bard?lock=5482154662297600',
    userId: 'd20f715a96304c0f9a3b8722b052648a',
    name: 'London Bailey',
    gender: 'Intersex woman',
    class_type: 'bard',
    age: 77,
    hit_points: 17,
  },
  {
    id: '459c3d7ceb414731996fff510f6fa76d',
    img: 'https://loremflickr.com/640/480/rogue?lock=4953745077043200',
    userId: '53b0b4a8da8643e2966e13ab91ef5428',
    name: 'Baylee Howell',
    gender: 'male',
    class_type: 'rogue',
    age: 130,
    hit_points: 15,
  },
  {
    id: '9b1e2de6713b4ba7b602081eed36ed56',
    img: 'https://loremflickr.com/640/480/druid?lock=1939276266733568',
    userId: '53b0b4a8da8643e2966e13ab91ef5428',
    name: 'Sidney Rempel',
    gender: 'male',
    class_type: 'druid',
    age: 116,
    hit_points: 25,
  },
  {
    id: '4b3b4958ed7f488c8476d149d51d7597',
    img: 'https://loremflickr.com/640/480/fighter?lock=8625988384587776',
    userId: '53b0b4a8da8643e2966e13ab91ef5428',
    name: 'Kaden Bartoletti',
    gender: 'male',
    class_type: 'fighter',
    age: 16,
    hit_points: 12,
  },
  {
    id: '0158feb28e894555b1b261932b704610',
    img: 'https://loremflickr.com/640/480/ranger?lock=2788320759250944',
    userId: '85bee1f005694d2c851278c2523d15b4',
    name: 'Dorothea Smith',
    gender: 'M2F',
    class_type: 'ranger',
    age: 107,
    hit_points: 18,
  },
  {
    id: 'a76724093a704bbd9c986e89616d2fa2',
    img: 'https://loremflickr.com/640/480/sorcerer?lock=7022263975018496',
    userId: '85bee1f005694d2c851278c2523d15b4',
    name: 'Christ Orn',
    gender: 'Man',
    class_type: 'sorcerer',
    age: 37,
    hit_points: 14,
  },
  {
    id: 'ffe26e7c74ea49618772b94222560edd',
    img: 'https://loremflickr.com/640/480/monk?lock=2174719186960384',
    userId: '85bee1f005694d2c851278c2523d15b4',
    name: 'Donnie Rosenbaum',
    gender: 'Gender questioning',
    class_type: 'monk',
    age: 84,
    hit_points: 15,
  },
  {
    id: '1fdf169c1829448aaddd6e461a9631db',
    img: 'https://loremflickr.com/640/480/fighter?lock=7959325995696128',
    userId: 'd890f5e2b2c54aa6a3b1848e3dfc4722',
    name: 'Tanner Gerlach',
    gender: 'male',
    class_type: 'fighter',
    age: 42,
    hit_points: 28,
  },
  {
    id: '385ef7ed49514c5ba02729932ec51c8a',
    img: 'https://loremflickr.com/640/480/warlock?lock=464118685368320',
    userId: 'd890f5e2b2c54aa6a3b1848e3dfc4722',
    name: 'Shaniya Hills',
    gender: 'male',
    class_type: 'warlock',
    age: 105,
    hit_points: 31,
  },
  {
    id: '9c6165ea247c43c7ba0eac81da756ed1',
    img: 'https://loremflickr.com/640/480/paladin?lock=7609078547218432',
    userId: 'fe0007f2bbe3438c9b8130f2b92adede',
    name: 'Blaise Orn',
    gender: 'Transexual female',
    class_type: 'paladin',
    age: 142,
    hit_points: 29,
  },
  {
    id: 'f4ce7b19debb4fc6a41156dce97bb1e0',
    img: 'https://loremflickr.com/640/480/barbarian?lock=5344754250285056',
    userId: 'b60651d629444b56bb025d4df571a6ee',
    name: 'Maci Pfeffer',
    gender: 'male',
    class_type: 'barbarian',
    age: 38,
    hit_points: 20,
  },
  {
    id: '75e7060d2a7548ec9de2dd4b30eab7e6',
    img: 'https://loremflickr.com/640/480/fighter?lock=8050042342473728',
    userId: '4dae82ef90104b2eba57628e5efd7e21',
    name: 'Mellie Leuschke',
    gender: 'Demigender',
    class_type: 'fighter',
    age: 95,
    hit_points: 17,
  },
  {
    id: '0c18cda4709043398ba6fd371f00fc89',
    img: 'https://loremflickr.com/640/480/rogue?lock=8233124141989888',
    userId: '4dae82ef90104b2eba57628e5efd7e21',
    name: 'Missouri Schmeler',
    gender: 'Genderflux',
    class_type: 'rogue',
    age: 67,
    hit_points: 34,
  },
  {
    id: 'c8f3eed189964cec8aca613ce34417b4',
    img: 'https://loremflickr.com/640/480/paladin?lock=6660337084399616',
    userId: '4dae82ef90104b2eba57628e5efd7e21',
    name: 'Kennedi Luettgen-Schimmel',
    gender: 'Cis man',
    class_type: 'paladin',
    age: 71,
    hit_points: 28,
  },
  {
    id: '23be0c74691d4df3a3bde0f576781a79',
    img: 'https://loremflickr.com/640/480/sorcerer?lock=811472913432576',
    userId: 'a94d04c307144149adab97006a760d99',
    name: 'Lionel Bergstrom',
    gender: 'female',
    class_type: 'sorcerer',
    age: 124,
    hit_points: 18,
  },
  {
    id: 'b6c5972468a94300ae0e884062f29b7c',
    img: 'https://loremflickr.com/640/480/wizard?lock=8354091119935488',
    userId: 'a94d04c307144149adab97006a760d99',
    name: 'Marina Wehner',
    gender: 'male',
    class_type: 'wizard',
    age: 27,
    hit_points: 24,
  },
  {
    id: '27f0f9af8504430dba7c500e11b2b6fe',
    img: 'https://loremflickr.com/640/480/druid?lock=6774574584692736',
    userId: 'a94d04c307144149adab97006a760d99',
    name: 'Anika Stracke',
    gender: 'female',
    class_type: 'druid',
    age: 84,
    hit_points: 17,
  },
];

module.exports = characters;
