let text = document.querySelector('#txt-input');
let outputText = document.querySelector('#output')
let translateBtn = document.querySelector('#translateBTN');
let clearBtn = document.querySelector('#clearBTN');


let url = "https://api.funtranslations.com/translate/minion.json";

function bindKeyValueToUrl(txt) {
   // console.log(`${url}?text=${txt}`)
    return `${url}?text=${txt}`;
}

translateBtn.addEventListener('click', () => {
    let txtContent = text.value;

    fetch(bindKeyValueToUrl(txtContent))
    .then(response => response.json())
    .then(json => {
         outputText.textContent = json.contents.translated 
     //    console.log(json);
        })
    .catch(error => {
        alert("Something went wrong see console to know whats the error") ;
        console.log(err);
    })



});

clearBtn.addEventListener('click', () => {
    text.value = '';
    outputText.textContent = '';
})