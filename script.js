//MONTANDO O CORPO DO DOCUMENTO
let divCabecalho = document.createElement("div")
divCabecalho.id = "cabecalho"
let h1 = document.createElement("h1")
h1.innerText = "Contador de letras e palavras"
let textInput = document.createElement("textarea")
textInput.id = "textInput"
textInput.setAttribute("rows", 15)
textInput.setAttribute("cols", 60)

divCabecalho.appendChild(h1)
divCabecalho.appendChild(textInput)

let btnContador = document.createElement("button")
btnContador.id = "countButton"
btnContador.innerText = "Contador de Frequência"

let main = document.querySelector("main")
main.appendChild(divCabecalho)
main.appendChild(btnContador)

let divRespostas = document.createElement("div")
divRespostas.id = "respostas"
let divLetras = document.createElement("div")
divLetras.id = "lettersDiv"
let divPalavras = document.createElement("div")
divPalavras.id = "wordsDiv"
divLetras.innerHTML = "<em> Contagem Letras </em><br>"
divPalavras.innerHTML = "<em> Contagem Palavras </em><br>"

divRespostas.appendChild(divLetras)
divRespostas.appendChild(divPalavras)

main.appendChild(divRespostas)


const button = document.getElementById("countButton");
button.addEventListener("click", function() {  
  // teu código vai aqui ... 
  let typedText = document.getElementById('textInput').value;
  typedText.toLowerCase()
  typedText.replace(/[^a-z'\s]+/g, "")
  
  const letterCounts = {};
  const wordsCounts = {};
  words = typedText.split(/\s/);

  for (let i = 0; i < typedText.length; i++) {
    let currentLetter = typedText[i];
    
  // faça algo com cada letra 
    if (letterCounts[currentLetter] === undefined) {
      letterCounts[currentLetter] = 1; 
    } else { 
      letterCounts[currentLetter]++; 
    }
  }

  for (let i = 0; i < words.length; i++) {
    let currentWords = words[i];
    
  // faça algo com cada letra 
    if (wordsCounts[currentWords] === undefined) {

      wordsCounts[currentWords] = 1; 
    } else { 
      wordsCounts[currentWords]++;
    }
  }
  for (let letter in letterCounts) { 
    const span = document.createElement("span"); 
    const textContent = `"${letter}": ${letterCounts[letter]}, `;
    span.innerText = textContent; 
    const letters = document.getElementById("lettersDiv");
    letters.appendChild(span); 
  }
  console.log(wordsCounts)
  for (let word in wordsCounts) { 

    const span = document.createElement("span"); 
    const textContent = `"${word}": ${wordsCounts[word]}, `;
    span.innerText = textContent; 
    const words = document.getElementById("wordsDiv");
    words.appendChild(span); 
  }
})

