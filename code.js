const firstDisplay = document.querySelector("#primary");
const secondDisplay = document.querySelector("#secondary");
const customBtn = document.getElementById("polite");
const elem0 = document.getElementById("e0");
const elem1 = document.getElementById("e1");
const elem2 = document.getElementById("e2");
const elem3 = document.getElementById("e3");
const elem4 = document.getElementById("e4");
const elem5 = document.getElementById("e5");

let index = 0;
const Types = [
  "Normal",
  "Fighting",
  "Flying",
  "Poison",
  "Ground",
  "Rock",
  "Bug",
  "Ghost",
  "Steel",
  "Fire",
  "Water",
  "Grass",
  "Electric",
  "Psychic",
  "Ice",
  "Dragon",
  "Dark",
  "Fairy",
];

const Weakness = [
  [1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 0.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], //Normal
  [2.0, 1.0, 0.5, 0.5, 1.0, 2.0, 0.5, 0.0, 2.0, 1.0, 1.0, 1.0, 1.0, 0.5, 2.0, 1.0, 2.0, 0.5], //Fighting
  [1.0, 2.0, 1.0, 1.0, 1.0, 0.5, 2.0, 1.0, 0.5, 1.0, 1.0, 2.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0], //Flying
  [1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.0, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0], //Poison
  [1.0, 1.0, 0.0, 2.0, 1.0, 2.0, 0.5, 1.0, 2.0, 2.0, 1.0, 0.5, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0], //Ground
  [1.0, 0.5, 2.0, 1.0, 0.5, 1.0, 2.0, 1.0, 0.5, 2.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0], //Rock
  [1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 2.0, 1.0, 2.0, 1.0, 1.0, 2.0, 0.5], //Bug
  [0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 0.5, 1.0], //Ghost
  [1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 1.0, 2.0, 1.0, 1.0, 2.0], //Steel
  [1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 2.0, 1.0, 2.0, 0.5, 0.5, 2.0, 1.0, 1.0, 2.0, 0.5, 1.0, 1.0], //Fire
  [1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 1.0, 1.0, 2.0, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0], //Water
  [1.0, 1.0, 0.5, 0.5, 2.0, 2.0, 0.5, 1.0, 0.5, 0.5, 2.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0], //Grass
  [1.0, 1.0, 2.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 0.5, 0.5, 1.0, 1.0, 0.5, 1.0, 1.0], //Electric
  [1.0, 2.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 0.0, 1.0], //Psychic
  [1.0, 1.0, 2.0, 1.0, 2.0, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 2.0, 1.0, 1.0, 0.5, 2.0, 1.0, 1.0], //Ice
  [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 0.0], //Dragon
  [1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 0.5, 0.5], //Dark
  [1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 1.0], //Fairy
];


// -------- Buttons -----------------------------
Types.forEach((type) => {
  //primary type buttons
  const button1 = document.createElement("button");
  button1.innerHTML = type;
  button1.classList.add(type);
  button1.classList.add(index);
  firstDisplay.appendChild(button1);
  button1.style.backgroundColor = getComputedStyle(button1).getPropertyValue(
    "--" + type
  );


  //secondary type buttons
  const button2 = document.createElement("button");
  button2.innerHTML = type;
  button2.classList.add(type);
  button2.classList.add(index);
  secondDisplay.appendChild(button2);
  button2.style.backgroundColor = getComputedStyle(button2).getPropertyValue(
    "--" + type
  );

  index++;
});
// --------------------------------------------------

// I want for button None to always be the last button in secondary, that's why it's not in the Types array and created here
const button2 = document.createElement("button");
button2.innerHTML = "None";
button2.classList.add("None");
button2.classList.add(Types.length);
secondDisplay.appendChild(button2);
button2.style.backgroundColor = getComputedStyle(button2).getPropertyValue("--" + "Normal");

const buttonArray1 = Array.from(firstDisplay.querySelectorAll("button"));
const buttonArray2 = Array.from(secondDisplay.querySelectorAll("button"));
let George, Silviu;
let chosen1 = 0;
let chosen2 = Types.length;

firstDisplay.querySelectorAll("button")[chosen1].classList.add("clicked");
secondDisplay.querySelectorAll("button")[chosen2].classList.add("clicked");
showResults();

// =====================EVENT LISTENERS=============================
firstDisplay.addEventListener("click", clicked1);
secondDisplay.addEventListener("click", clicked2);
customBtn.addEventListener("click", ()=>{
  document.getElementById("custom").classList.remove("disappear");
  document.getElementById("choose").classList.remove("flex");
  document.getElementById("choose").classList.add("disappear");
})

//  =========================== FUNCTIONS ===========================

// ---- What happens when we click a primary button -------------
function clicked1(e) {
  const but = e.target;

  if (but.tagName == "BUTTON") {

    buttonArray1.forEach((element) => {
      element.classList.remove("clicked");
    });
  
    buttonArray2.forEach((element) => {
      element.classList.remove("blocked");
    });

    but.classList.add("clicked");
    chosen1 = parseInt(but.classList[1]);
    George = but.textContent;
    stopGeorge();
  }

  showResults();
}
// --------------------------------------------------------------


// ------ What happens when we click a secondary button -----------
function clicked2(e) {
  const but = e.target;
  if (but.tagName == "BUTTON"){
    if (but.classList.contains("blocked") == true){
      but.classList.remove("clicked");
    }else{
    buttonArray2.forEach((element) => {
      element.classList.remove("clicked");
    });}

    if (but.classList.contains("blocked") == false) {
      but.classList.add("clicked");
      chosen2 = parseInt(but.classList[1]);
      Silviu = but.textContent;
    }
  }

  showResults();
}
// -------------------------------------------------------

// ---- Function for restraining the second type to be the same as the first type -------
function stopGeorge() {
  buttonArray2.forEach((element) => {
    if (element.textContent == George) {
      element.classList.add("blocked");
      element.classList.remove("clicked");
    }
    if(Silviu == George){
      let Last = secondDisplay.querySelectorAll("button")[Types.length];
      Last.classList.add("clicked");
      chosen2 = parseInt(Last.classList[1]);
    }
  });
}
// --------------------------------------------------------------------------------------

// ---- Function that displays the weaknesses and strenghts -----------------------
function showResults(){
  let result;

  console.log(chosen1 + " " + chosen2);
  elem0.innerHTML = "";
  elem1.innerHTML = "";
  elem2.innerHTML = "";
  elem3.innerHTML = "";
  elem4.innerHTML = "";
  elem5.innerHTML = "";

  for(let i=0; i<Weakness.length; i++){
    if(chosen2 == Types.length)
    {
      result = Weakness[i][chosen1];
    } else
    {
      result = Weakness[i][chosen1] * Weakness[i][chosen2];
    }

    const button = document.createElement("button");
    button.innerHTML = Types[i];
    button.classList.add(Types[i]);

    if(result == 4) elem0.appendChild(button);
    else if(result == 2) elem1.appendChild(button);
    else if(result == 1) elem2.appendChild(button);
    else if(result == 0.5) elem3.appendChild(button);
    else if(result == 0.25) elem4.appendChild(button);
    else elem5.appendChild(button);

    button.style.backgroundColor = getComputedStyle(button).getPropertyValue(
      "--" + Types[i]
    );
  }
}
// ------------------------------------------------------------------