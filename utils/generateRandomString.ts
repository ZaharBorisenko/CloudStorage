export const generateRandomString = () => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz',
    word = '';
  for (let i = 0; i < 6; i++) {
    word +=
      alphabet[Math.round(Math.random() * (alphabet.length - 1))];
  }
  return word;
};
