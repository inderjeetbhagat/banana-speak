// https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json

// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json))

//fetch(url)
// .then(function responseHandler(response) {return response.json()})
// .then(function logJson(json) {console.log(json)})


// const text1 = "I'm Inder"
// const text2 = "I'm Tanay"
// function constructUrl(text) {
//     return "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=" + text;
//     } 
        
// function doFetch(text) {
//     fetch(constructUrl(text))
//     .then(response => response.json)
//     .then(json => console.log(json))
//     }
//     doFetch(text1)


var btnTranslate = document. querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
return serverURL + "?text=" + text
}

function errorHandler(error) {
    console.log("error occured");
    alert("Something wrong with server!")
}


function clickHandler() {
    // outputDiv.innerText = "Translated " + txtInput.value;
    var inputTxt = txtInput.value; //taking input

    //calling server for processing
    fetch(getTranslationURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;//output
    })
    .catch(errorHandler)
};



btnTranslate.addEventListener("click", clickHandler)
