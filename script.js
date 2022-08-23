const btnTranslate = document.querySelector(`#btn-translate`);
const txtInput = document.querySelector(`#txt-input`);
const outputDiv = document.querySelector(`#output`);

const url = `https://api.funtranslations.com/translate/morse.json`;

function getServerURL(text) {
  return url + `?` + `text=` + text;
}

function errorHandler(error) {
  console.log(`error occured`, error);
  alert(`Something wrong with the server, please try again later.`);
}

function clickHandler() {
  const inputTxt = txtInput.value;

  fetch(getServerURL(inputTxt))
    .then((response) => response.json())
    .then((json) => {
      const translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener(`click`, clickHandler);
