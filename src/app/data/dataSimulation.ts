let nextId = (): number => {
  let randomNumber = Math.floor(Math.random() * 100);
  return randomNumber++;
};

export const dataSimulation = [
  {
    id: nextId().toString(),
    photo:
      'https://static.wikia.nocookie.net/marveldatabase/images/e/eb/Young_Avengers_Vol_2_13_Textless.jpg/revision/latest?cb=20130917005408',
    photoTitle: 'The Young Avengers comic cover',
    photoCaption: 'Cover of the Young Avengers comic',
    articleTitle:
      'Emergence of the Young Avengers Sparks Excitement Among Marvel Fans',
    articleDescription:
      'Marvel aficionados worldwide are abuzz with anticipation as rumors of a new Young Avengers series circulate online. The fresh storyline promises to introduce a younger generation of superheroes, embarking on a thrilling journey of self-discovery and heroism.',
    completeArticle:
      'Marvel has consistently kept fans on their toes with compelling new storylines and characters. The latest rumors hint at a Young Avengers series that explores the challenges and triumphs of new heroes stepping into the spotlight. Details of the plot remain closely guarded, sparking enthusiastic speculation among fans and critics alike.',
  },
  {
    id: nextId().toString(),
    photo:
      'https://m.media-amazon.com/images/M/MV5BMWQwODdkMzItMTQ3MC00ZjllLTg4ZjMtMWY0NjhjYTdlM2U5XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg',
    photoTitle: 'Avengers Secret War poster',
    photoCaption: 'Avengers Secret Wars: Battleworld',
    articleTitle:
      'Secret Wars: Battleworld - A New Multi-Dimensional Conflict Brewing in Marvel Universe',
    articleDescription:
      'Speculation is rife that Marvel is planning a grand cinematic adaptation of the Secret Wars storyline. This could see beloved heroes and villains traversing Battleworld, a mashup of different universes, in what could be Marvel’s most ambitious project yet.',
    completeArticle:
      'The Marvel cinematic universe may soon expand in a remarkable new direction if rumors of a Secret Wars adaptation prove true. This fan-favorite storyline could see well-loved characters pitted against each other in a reality-blending clash of epic proportions. Audiences worldwide eagerly anticipate official confirmation from Marvel.',
  },
  {
    id: nextId().toString(),
    photo:
      'https://www.hqzona.com.br/wp-content/uploads/2019/08/Asgard-800x445.png',
    photoTitle: 'The Asgard from the cinematic universe',
    photoCaption: 'Old Asgard photo',
    articleTitle: 'Asgard Reborn in Upcoming Thor Saga: A Realm Renewed',
    articleDescription:
      'In the wake of recent calamities, an exciting development teases the rejuvenation of Asgard in an upcoming Thor storyline. The god of thunder is expected to unearth hidden truths and rally allies in his quest to restore his homeland.',
    completeArticle:
      "Following the destructive events that left Asgard in ruins, Marvel fans are intrigued by hints of an upcoming saga that sees Thor fight for his realm's restoration. The plot's finer details are shrouded in mystery, adding to the hype surrounding this potential storyline. Fans eagerly wait to see their favorite god of thunder back in action.",
  },
  {
    id: nextId().toString(),
    photo:
      'https://rollingstone.uol.com.br/media/uploads/scarlett_johansson_como_natasha_romanoff_em_viuva_negra_foto_divulgacaodisney.jpg',
    photoTitle: 'Photo of Natasha Romanoff',
    photoCaption: 'Natasha Romanoff by Scarlett Johansson',
    articleTitle:
      'Delving Deeper into Natasha Romanoff’s Past in "Black Widow: Red Ledger"',
    articleDescription:
      'An intriguing exploration into the enigmatic life of super-spy Natasha Romanoff, before her Avenger days, may be in the works. This could offer Marvel fans a riveting journey into her history, unearthing secrets, alliances, and betrayals.',
    completeArticle:
      'The mysterious past of Black Widow, aka Natasha Romanoff, has been a source of intrigue for fans since her first appearance. Rumors suggest that Marvel may finally be ready to unveil a deep dive into her story before the Avengers, promising a thrilling mix of secrets, alliances, and betrayals that shaped her path. Fans eagerly await official announcements regarding the project.',
  },
];
