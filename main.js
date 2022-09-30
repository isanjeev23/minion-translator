let text = document.querySelector('#txt-input');
let outputText = document.querySelector('#output')
let translateBtn = document.querySelector('#translateBTN');
let clearBtn = document.querySelector('#clearBTN');




translateBtn.addEventListener('click' , () => {
    let txtContent = text.value ; 
    outputText.innerHTML = txtContent ;
    console.log(txtContent) ;
});

clearBtn.addEventListener('click' , () => {
    text.value = '' ;
    outputText.textContent = '';
})