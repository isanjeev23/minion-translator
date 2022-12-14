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

         //console.log(json);
         if(json.hasOwnProperty('error') ){
            alert(json.error.message);
            console.warn(`get request code : ${json.error.code}\n message : ${json.error.message}`)
         }
         else
         outputText.textContent = json.contents.translated ;

        })
    .catch(error => {
        alert("something went wrong! or you may have crossed 5 req limit") ;
        console.log(error);
    })



});

clearBtn.addEventListener('click', () => {
    text.value = '';
    outputText.textContent = '';
})