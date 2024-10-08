let currentPageUrl = 'https://swapi.dev/api/people/'

window.onload = async () => {
    try {
       await loadCharacters(currentPageUrl);

    } catch (error) {
        console.log(error);
        alert('Erro ao carregar cards');

    }

    const nextButton = document.getElementById('next-button')
    const backButton = document.getElementById('back-button')

    nextButton.addEventListener('click', loadNextPage)
    backButton.addEventListener('click',loadPriviousPage)



};
async function loadCharacters(url) {
    const mainContent = document.getElementById('main-content')
    mainContent.innerHTML = '';


    try {

        const response = await fetch(url);
        const responseJson = await response.json();

        responseJson.results.forEach((character) => {
            const card = document.createElement("div")
            card.style.backgroundImage=`url('https://starwars-visualguide.com/assets/img/characters/${character.url.replace(/\D/g, "")}.jpg')`
            card.className = "cards"

            const characterNameBG = document.createElement("div")
            characterNameBG.className = "character-name-bg"

            const characterName = document.createElement("span")
            characterName.className= "character-name"
            characterName.innerText = `${character.name}`
            characterNameBG.appendChild(characterName)
            card.appendChild(characterNameBG)

            card.onclick = () => {
                const modal = document.getElementById("modal")
                modal.style.visibility = "visible"

                const moldalContent = document.getElementById("modal-content")
                moldalContent.innerHTML = ""

                const characterImage = document.createElement("div")
                characterImage.style.backgroundImage =
                `url('https://starwars-visualguide.com/assets/img/characters/${character.url.replace(/\D/g, "")}.jpg')`
                characterImage.className= "character-image"

                const name = document.createElement("span")
                name.className = "character-details"
                name.innerText =  `Nome: ${character.name}`

                const characterHeight = document.createElement("span")
                characterHeight.className = "character-details"
                characterHeight.innerText =  `Altura: ${convertHeight(character.height)}`

                

                const mass = document.createElement("span")
                mass.className = "character-details"
                mass.innerText =  `Peso: ${convertMass(character.mass)}`

                const eyeColor = document.createElement("span")
                eyeColor.className = "character-details"
                eyeColor.innerText =  `Cor dos olhos: ${convertEyecolor(character.eye_color)}`

                const birthYear = document.createElement("span")
                birthYear.className = "character-details"
                birthYear.innerText =  `Nascimento: ${convertBirthYear(character.birth_year)}`

                moldalContent.appendChild(characterImage)
                moldalContent.appendChild(name)
                moldalContent.appendChild(characterHeight)
                moldalContent.appendChild(mass)
                moldalContent.appendChild(eyeColor)
                moldalContent.appendChild(birthYear)









            }

            mainContent.appendChild(card)
        });

        const nextButton = document.getElementById('next-button')
        const backButton = document.getElementById('back-button')

        nextButton.disabled = !responseJson.next
        backButton.disabled = !responseJson.previous

        backButton.style.visibility = responseJson.previous?"visible": "hidden"


        
      
      
        currentPageUrl = url


    }catch(error){
        alert('Erro ao carregar os personagens')
        console.log(error)

    }
}


async function  loadNextPage() {
    if (!currentPageUrl) return;
    
    try {
        const response = await fetch(currentPageUrl)
        const responseJson = await response.json()

        await loadCharacters(responseJson.next)

    }catch (error) {
        console.log(error)
        alert('Erro ao carregar a proxima pagina')
    }
}


async function loadPriviousPage() {
    if (!currentPageUrl) return;
    try{
        const response = await fetch(currentPageUrl)
        const responseJson = await response.json()

        await loadCharacters(responseJson.previous)

    }catch (error) {
        console.log(error)
        alert('Erro ao carregar a pagina anterior')
    }
}


function hideModal() {
    const modal = document.getElementById("modal")
    modal.style.visibility = "hidden"
}

function convertEyecolor(eyeColor) {
    const cores = {
        blue: "azul",
        brown: "castanho",
        green: "verde",
        yellow: "amarelo",
        black: "preto",
        pink: "rosa",
        red: "rosa",
        orange: "laranja",
        hazel: "avela",
        unknown: "desconhecida"

    };
    return cores[eyeColor.toLowerCase()] || eyeColor;
}

function convertHeight(height) {
    if (height === "unknow") {
        return "desconhecida"
    }

    return (height / 100).toFixed(2)
}

function convertMass(mass) {
    if (mass === "unknown") {
        return "desconhecido"
    }

    return `${mass} kg`
}

function convertBirthYear(birthYear) {
    if (birthYear === "unknown") {
        return "desconhecido"
    }

    return birthYear
}
const textarea = document.getElementById('Assunto-contato');
textarea.addEventListener('input', function() {
  this.style.height = 'auto'; // Redefine a altura para calcular corretamente
  this.style.height = (this.scrollHeight) + 'px'; // Define a altura de acordo com o conteúdo
});
const bataoEnviar = document.getElementById('submitBotao');
const mensageicone = document.getElementById('mensagemEnviada');
const textoinput = document.getElementById('textinput');

    bataoEnviar.addEventListener('click', function() {
        if (textoinput.value.trim() !== '' || textarea.value.trim() !== '') {
           
            mensageicone.classList.remove('hidden');
            
            
            setTimeout(() => {
                mensageicone.classList.add('hidden');
            }, 3000);
            setTimeout(() =>{
                window.location.reload();
            },1500);
          } 
         else {
            alert('Por favor, digite algo no campo de texto ou textarea.');
          }
        });
const contatoScroll = document.getElementById('scroll-contato');
function scrolar (){
   contatoScroll.scrollIntoView({ behavior: 'smooth' });
}      
function projetos() {
    let divproject = document.getElementById('all-projects')
 
    
     if(divproject.classList.contains('caixa-projetos-hide')){
         divproject.classList.add('caixa-projetos-show');
         divproject.classList.remove('caixa-projetos-hide');
 
     }else{
         divproject.classList.add('caixa-projetos-hide');
         divproject.classList.remove('caixa-projetos-show');
 
     }
 }
 let menuRota = document.getElementById('menuHamburguer');
 


function menuMobile(){
     
   let todosProjetos = document.getElementById('all-projects');
   if(todosProjetos.classList.contains('caixa-projetos-show')){
       todosProjetos.classList.remove('caixa-projetos-show');
       todosProjetos.classList.add('caixa-projetos-hide');
   }else{
       todosProjetos.classList.add('caixa-projetos-show');
       todosProjetos.classList.remove('caixa-projetos-hide');
   }
    
    if (menuRota.classList.contains('menu-mostrar')){
        menuRota.classList.remove('menu-mostrar');
        menuRota.classList.add('barrasMenu');

    }else{
        menuRota.classList.add('menu-mostrar');
        menuRota.classList.remove('barrasMenu');
    }
        
 }

let openBox = document.getElementById('box');
let classAtual = openBox.className;

function ativarBox(){
    openBox.classList.remove('boxOculto');
    openBox.classList.add('boxAviso');
    startBlinking();
}


function closebox(){
    openBox.classList.remove('boxAviso');
    openBox.classList.add('boxOculto');
    stopBlinking();
    menuMobile();
}


 
 let trianExcla = document.getElementById('exclamation-triangle');
 let blinkInterval;



function startBlinking() {
    blinkInterval = setInterval(() => {
        if (trianExcla.classList.contains('iconeTriangle')){
            trianExcla.classList.remove('iconeTriangle');
            trianExcla.classList.add('esconder');
        }else{
            trianExcla.classList.remove('esconder'); 
            trianExcla.classList.add('iconeTriangle');
        }
  }, 800); // Pisca a cada 500ms (0,5s)
}

function stopBlinking() {
   clearInterval(blinkInterval);
   trianExcla.classList.remove('esconder'); // Garante que o ícone fique visível
}

