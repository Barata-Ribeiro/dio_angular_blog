const hashCode = (str: string): number => {
  let hash = 0;

  for (let i = 0; i < str.length; i += 1) {
    // Get the ASCII value of the current character.
    let char = str.charCodeAt(i);

    // (hash << 5) is (hash * 32), so ((hash << 5) - hash) is (hash * 31)
    hash = (hash << 5) - hash + char;

    hash |= 0; // Convert to 32bit integer
  }

  return hash;
};

let nextId = (articleTitle: string): number => {
  return hashCode(articleTitle);
};

export const dataSimulation = [
  {
    id: nextId('The Great Zorgon Migration: A Spectacle of Nature').toString(),
    photo:
      'https://stockai-bucket.apyhi.com/images/uploads_image_1665742952068_1024.webp',
    photoTitle: 'The Great Zorgon Migration',
    photoCaption: 'Great Zorgon Migration, by Shlubov Yablabla',
    articleTitle: 'The Great Zorgon Migration: A Spectacle of Nature',
    articleDescription:
      'Witness the annual migration of the Zorgon creatures across the vast plains of Zeta-3.',
    completeArticle:
      'Every year, the inhabitants of Zeta-3 bear witness to a spectacle of nature that is both awe-inspiring and humbling. The Zorgon creatures, native to the plains of Zeta-3, embark on their annual migration, a journey that spans thousands of miles and lasts for several weeks. This migration is not only a testament to the endurance and resilience of the Zorgon creatures but also a crucial part of the ecosystem of Zeta-3. The migration leads to the fertilization of the soil and the distribution of plant seeds, ensuring the survival and growth of the flora on the plains. The Zorgon migration is truly a sight to behold and a reminder of the intricate balance of nature.',
  },
  {
    id: nextId('The Mysterious Disappearance of the Crystal Caves').toString(),
    photo:
      'https://openai-labs-public-images-prod.azureedge.net/user-3XkGi3LFTSRH9pgdDE6JPBQM/generations/generation-tOJ5nOz1h2WCUXByYxCWrYiu/image.webp',
    photoTitle: 'Crystal Caves of Quasar-7',
    photoCaption: 'Former Crystal Caves, by Qyutar Krropoiroi',
    articleTitle: 'The Mysterious Disappearance of the Crystal Caves',
    articleDescription:
      'The Crystal Caves of Quasar-7 have vanished overnight, leaving the inhabitants in shock and disbelief.',
    completeArticle:
      'The inhabitants of Quasar-7 woke up to a shocking sight this morning - the famed Crystal Caves, a natural wonder and a major tourist attraction, had disappeared without a trace. The caves, known for their stunning crystal formations and bioluminescent flora, were there the previous night, as confirmed by several tourists and locals. Authorities are investigating the incident, but so far, no plausible explanation has been found. The disappearance of the Crystal Caves has left the inhabitants of Quasar-7 in a state of shock and disbelief, and many are mourning the loss of this natural wonder.',
  },
  {
    id: nextId(
      'The Rise of the Mechano-Beings: A Technological Revolution'
    ).toString(),
    photo:
      'https://openai-labs-public-images-prod.azureedge.net/user-3XkGi3LFTSRH9pgdDE6JPBQM/generations/generation-QcCJmGJxZ5AfoYEALO9ly38r/image.webp',
    photoTitle: 'Mechano Beings from Nova-9',
    photoCaption: 'A Mechano Being, by Zxczdfa KJLKJlkjf skdjflskl',
    articleTitle: 'The Rise of the Mechano-Beings: A Technological Revolution',
    articleDescription:
      'Mechano-Beings, sentient robots with advanced AI, are transforming the society of Nova-9.',
    completeArticle:
      'The society of Nova-9 is undergoing a technological revolution. The Mechano-Beings, sentient robots equipped with advanced artificial intelligence, are transforming every aspect of life on Nova-9. From agriculture and industry to education and healthcare, the Mechano-Beings are bringing about unprecedented changes and improvements. They are capable of learning, adapting, and making decisions, making them invaluable assets in various fields. However, their rise has also sparked debates about the ethical implications of AI and the future of employment for the organic inhabitants of Nova-9. As the Mechano-Beings continue to evolve and integrate into society, the inhabitants of Nova-9 are left to navigate the challenges and opportunities of this technological revolution.',
  },
  {
    id: nextId('The Enigma of the Floating Islands of Pulsar-6').toString(),
    photo:
      'https://openai-labs-public-images-prod.azureedge.net/user-3XkGi3LFTSRH9pgdDE6JPBQM/generations/generation-p5pFNLGXzZmVfkZhS1h7B4Em/image.webp',
    photoTitle: 'The Floating islands of Pulsar-6',
    photoCaption:
      'Floating Islands, by Lrrrrrrrzzzz KKkkkrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
    articleTitle: 'The Enigma of the Floating Islands of Pulsar-6',
    articleDescription:
      'The Floating Islands of Pulsar-6 continue to baffle scientists with their anti-gravitational properties.',
    completeArticle:
      'The Floating Islands of Pulsar-6 have long been a subject of fascination and mystery. These islands, which float several feet above the ground without any visible means of support, exhibit anti-gravitational properties that defy the known laws of physics. Scientists have been studying these islands for years, but so far, they have been unable to determine the cause of their levitation. The islands are home to a variety of unique flora and fauna, which have adapted to the unique conditions of the islands. The Floating Islands of Pulsar-6 remain one of the greatest enigmas of our universe, a puzzle that continues to captivate and baffle scientists.',
  },
  {
    id: nextId('The Unseen Depths of the Nebula Ocean').toString(),
    photo:
      'https://openai-labs-public-images-prod.azureedge.net/user-3XkGi3LFTSRH9pgdDE6JPBQM/generations/generation-2HoOIxLR2QTeo2tqwiP2dfbr/image.webp',
    photoTitle: 'Unseen Depths of the Nebula Ocean',
    photoCaption: "Nebula Ocean, from the Galactic Empire's telescope",
    articleTitle: 'The Unseen Depths of the Nebula Ocean',
    articleDescription:
      'The Nebula Ocean on Orion-5 hides secrets yet to be discovered by its inhabitants.',
    completeArticle:
      "The Nebula Ocean, a vast body of water on Orion-5, is known for its stunningly beautiful, nebula-like colors. However, beneath its mesmerizing surface, the ocean hides secrets yet to be discovered. Despite the advanced technology of the inhabitants of Orion-5, the extreme conditions and mysterious creatures of the ocean's depths have made exploration a challenging task. The Nebula Ocean continues to captivate and intrigue the inhabitants of Orion-5, a testament to the endless mysteries of the universe.",
  },
  {
    id: nextId('The Unexpected Bloom of the Nightshade Flowers').toString(),
    photo:
      'https://openai-labs-public-images-prod.azureedge.net/user-3XkGi3LFTSRH9pgdDE6JPBQM/generations/generation-BCrvcsmUTh45oQ1h8MbS0nKv/image.webp',
    photoTitle: 'The Nightshade Flowers of Luna-7',
    photoCaption: 'Nightshade Flowers, by Flumdoodle Doodling',
    articleTitle: 'The Unexpected Bloom of the Nightshade Flowers',
    articleDescription:
      'The Nightshade Flowers on Luna-7 have bloomed unexpectedly, covering the landscape in a sea of luminescent blue.',
    completeArticle:
      'The inhabitants of Luna-7 woke up to a breathtaking sight this morning - the Nightshade Flowers, which usually bloom once every decade, have bloomed unexpectedly. The landscape is now covered in a sea of luminescent blue, creating a spectacle of unparalleled beauty. Scientists are investigating the cause of this unexpected bloom, but regardless of the reason, the inhabitants of Luna-7 are enjoying this rare and enchanting sight.',
  },
  {
    id: nextId('The Sudden Emergence of the Crystal Forest').toString(),
    photo:
      'https://openai-labs-public-images-prod.azureedge.net/user-3XkGi3LFTSRH9pgdDE6JPBQM/generations/generation-gshaFiF1nqNGaDxWwALPLXEn/image.webp',
    photoTitle: "Crystal Forest of Vega-2's desert",
    photoCaption: 'The Crystal Forest, by Xanthromax',
    articleTitle: 'The Sudden Emergence of the Crystal Forest',
    articleDescription:
      'A forest made entirely of crystals has emerged overnight on the desert planet of Vega-2.',
    completeArticle:
      'The desert landscape of Vega-2 has been transformed overnight with the sudden emergence of a forest made entirely of crystals. These towering crystal trees, shimmering in the sunlight, have turned the barren desert into a dazzling forest. Scientists are baffled by this phenomenon and are currently studying these crystal formations. The Crystal Forest has become a major attraction, drawing inhabitants from all over Vega-2 to witness this miracle of nature.',
  },
  {
    id: nextId('The Disappearance of the Twin Suns of Gemini-4').toString(),
    photo:
      'https://openai-labs-public-images-prod.azureedge.net/user-3XkGi3LFTSRH9pgdDE6JPBQM/generations/generation-wSiVjZ0TGArdVZU34e9UV5Ff/image.webp',
    photoTitle: 'The old Twin Suns of Gemini-4',
    photoCaption: 'The former Twin Suns, by Zorblax Qwarkenbaum',
    articleTitle: 'The Disappearance of the Twin Suns of Gemini-4',
    articleDescription:
      'The Twin Suns of Gemini-4 have disappeared, plunging the planet into an unexpected and indefinite night.',
    completeArticle:
      'The inhabitants of Gemini-4 are living in fear and confusion as their Twin Suns have disappeared without a trace. The planet, known for its perpetual daylight due to its two suns, has been plunged into an unexpected and indefinite night. Scientists are working tirelessly to understand this phenomenon and are trying to find a way to bring back the light to Gemini-4. The disappearance of the Twin Suns has highlighted the fragility of life and the dependence of inhabitants on the forces of nature.',
  },
  {
    id: nextId(
      'The Mysterious Signals from the Dark Side of the Moon'
    ).toString(),
    photo:
      'https://openai-labs-public-images-prod.azureedge.net/user-3XkGi3LFTSRH9pgdDE6JPBQM/generations/generation-oBzwUNVC3McFbfauwnGMVG9h/image.webp',
    photoTitle: 'The moon from the Alpha Centauri',
    photoCaption: "The Moon, from the Galactic Empire's telescope",
    articleTitle: 'The Mysterious Signals from the Dark Side of the Moon',
    articleDescription:
      'Mysterious signals have been detected coming from the dark side of the moon in the Alpha Centauri system.',
    completeArticle:
      'Scientists in the Alpha Centauri system have detected mysterious signals coming from the dark side of their moon. These signals, which are unlike anything they have encountered before, have sparked a wave of excitement and curiosity. Scientists are trying to decipher these signals and understand their origin. While some believe that these signals could be a natural phenomenon, others speculate that they could be a sign of extraterrestrial intelligence. The mystery of the signals continues to captivate the inhabitants of the Alpha Centauri system.',
  },
  {
    id: nextId('The Unexplained Phenomenon of the Dancing Lights').toString(),
    photo:
      'https://openai-labs-public-images-prod.azureedge.net/user-3XkGi3LFTSRH9pgdDE6JPBQM/generations/generation-kFI3JjWKuhk2NGY01e8fMT99/image.webp',
    photoTitle: 'Dancing Lights of the Polaris-3 sky',
    photoCaption: 'Dancing Lights, photographer unknown',
    articleTitle: 'The Unexplained Phenomenon of the Dancing Lights',
    articleDescription:
      'The sky of Polaris-3 has been lit up by dancing lights, a phenomenon that has both amazed and puzzled its inhabitants.',
    completeArticle:
      'The inhabitants of Polaris-3 have been witnessing an unexplained phenomenon for the past few nights - the sky has been lit up by dancing lights. These lights, varying in color and intensity, move in patterns that resemble a dance. Scientists are trying to understand this phenomenon, but so far, they have not been able to provide a satisfactory explanation. The dancing lights have become a major attraction, with inhabitants gathering every night to watch this mesmerizing spectacle.',
  },
];
