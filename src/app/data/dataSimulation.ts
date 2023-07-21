let nextId = (): number => {
  let randomNumber = Math.floor(Math.random() * 100000);
  return randomNumber++;
};

export const dataSimulation = [
  {
    id: nextId().toString(),
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
    id: nextId().toString(),
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
    id: nextId().toString(),
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
    id: nextId().toString(),
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
];
