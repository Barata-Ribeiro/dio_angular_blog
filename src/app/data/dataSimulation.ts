let nextId = () => {
  let randomNumber = Math.floor(Math.random() * 100);
  return randomNumber++;
};

export const dataSimulation = [
  {
    id: nextId(),
    photo: 'aaa',
    photoTitle: 'aaa',
    photoCaption: 'aaa',
    articleTitle: 'aaa',
    articleDescription: 'aaa',
  },
  {
    id: nextId(),
    photo: 'aaa',
    photoTitle: 'aaa',
    photoCaption: 'aaa',
    articleTitle: 'aaa',
    articleDescription: 'aaa',
  },
];
