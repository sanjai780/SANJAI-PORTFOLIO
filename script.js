


const texts = document.querySelector('.sec-text');

const printText = (text, delay) => {
  const chars = text.split('');
  chars.forEach((char, index) => {
    setTimeout(() => {
      texts.textContent += char;
    }, delay * index);
  });
};

const clearText = () => {
  texts.textContent = '';
};

const loadedText = () => {
  clearText();
  printText('FrontEnd Developer', 150);
  setTimeout(() => {
    clearText();
    printText('BackEnd Developer', 150);
  }, 4000);
  setTimeout(() => {
    clearText();
    printText('DataBase Developer', 150);
  }, 8000);
};

loadedText();
setInterval(loadedText, 12000);