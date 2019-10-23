const words = ["Africa","Egypt","The Sahara","Nigeria","Lake Victoria","Global Warming","Wild Life","Megafauna","Lake Malawi","WildLife Migration","African elephant","The Nile"]
const definitions = ["Africa has 54 countries and one “non-self governing territory”, the Western Sahara.", "The Pharaonic civilization of ancient Egypt is one of the world’s oldest and longest-lasting civilizations.", "The Sahara is the largest desert in the world and is bigger than the continental USA.", "Nigeria is fourth largest oil exporter in the world, and Africa’s biggest oil producer with about 2.2 million barrels produced every day.", "Lake Victoria is the largest lake in Africa and the second-largest freshwater lake in the world.",
"Africa has the most extensive biomass burning in the world, yet only emits about 4% of the world’s total carbon dioxide emissions.",
"Africa has eight of the 11 major biomes and the largest-remaining populations of lion, elephant, rhinoceros, cheetah, hyena, leopard and hundreds of other species.",
"Megafauna like giraffe, zebra, gorilla, hippopotamus, chimpanzee and wildebeest are unique to the continent.",
"Lake Malawi has more fish species than any other freshwater system on earth.",
"The Serengeti (Tanzania) hosts the world’s largest wildlife migration on Earth with over 750,000 zebra marching ahead of 1.2 million wildebeest as they cross this amazing landscape.",
"Africa is home to the world’s largest living land animal, the African elephant, which can weigh up to 7 tons.",
"The Nile River is the longest river in the world with a total length of 6,650 kilometres."]

function createFlashCard(){
const carddiv = document.querySelector(".cardbox");
const cardBox = document.createElement("div")
cardBox.classList.add("card");
cardBox.setAttribute("id", "showword");
carddiv.appendChild(cardBox);

for (let i = 0; i < words.length; i++) {
let frontText = words[i] 
const wordSide = document.createElement("div")
wordSide.classList.add("flashcard");
wordSide.setAttribute("id", "front-card");
wordSide.textContent = frontText
cardBox.appendChild(wordSide);
}

for (let j = 0; j < definitions.length; j++) {
let backText = definitions[j]
const definitionSide = document.createElement("div")
definitionSide.classList.add("flashcard");
definitionSide.setAttribute("id", "definition");
definitionSide.textContent = backText
cardBox.appendChild(definitionSide);
}
return(cardBox)
}

