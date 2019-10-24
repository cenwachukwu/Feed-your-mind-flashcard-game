let flashCards = [{
        "Africa": "Africa has 54 countries and one “non-self governing territory”, the Western Sahara.",
        "Egypt": "The Pharaonic civilization of ancient Egypt is one of the world’s oldest and longest-lasting civilizations.",
        "The Sahara": "The Sahara is the largest desert in the world and is bigger than the continental USA.",
        "Nigeria": "Nigeria is fourth largest oil exporter in the world, and Africa’s biggest oil producer with about 2.2 million barrels produced every day.",
        "Lake Victoria": "Lake Victoria is the largest lake in Africa and the second-largest freshwater lake in the world.",
        "Global Warming": "Africa has the most extensive biomass burning in the world, yet only emits about 4% of the world’s total carbon dioxide emissions.",
        "Wild Life": "Africa has eight of the 11 major biomes and the largest-remaining populations of lion, elephant, rhinoceros, cheetah, hyena, leopard and hundreds of other species.",
        "Megafauna": "Megafauna like giraffe, zebra, gorilla, hippopotamus, chimpanzee and wildebeest are unique to the continent.",
        "Lake Malawi":"Lake Malawi has more fish species than any other freshwater system on earth.",
        "WildLife Migration": "The Serengeti (Tanzania) hosts the world’s largest wildlife migration on Earth with over 750,000 zebra marching ahead of 1.2 million wildebeest as they cross this amazing landscape.",
        "African elephant": "Africa is home to the world’s largest living land animal, the African elephant, which can weigh up to 7 tons.",
        "The Nile": "The Nile River is the longest river in the world with a total length of 6,650 kilometres.",
},
{
        "DNA": "DNA consists of very long molecules that contain nucleotide bases encoding genes.",
        "Gene": "A sequence of DNA containing instructions for one protein (that may produce a trait; like eye color or lactose persistence).",
        "Genome": "Total DNA sequence that contains the complete collection of genes that make up an organism's genetic information.",
        "Chromosomes": "46 chromosomes, 23 pairs (including the sex chromosome). Females are XX and males are XY.",
        "Karyotype": "The number, arrangement and size of chromosome in a particular organism.",
        "The Central Dogma of Molecular Biology": "DNA-->mRNA-->Protein",
        "Steps of the Central Dogma": "Replication, Transcription, Translation",
        "Intron": "Intervening sequence in an RNA primary transcript and it's edited out (removed)",
        "Exon":"Expressed sequence, part of the mRNA that is expressed as part of the protein",
        "Messenger RNA": "A continuous chain of codons that specify a specifies amino acids to be included in the protein.",
        "Translation": "Translate the mRNA message into a protein sequence",
        "Transcription":"Transcribe one strand of the DNA as a message"
    
},

{
        "MediciJeanne Villepreux-Power": "The aquarium",
        "Josephine Cochrane": "The dishwasher",
        "Madam C. J. Walker": "Hair care products",
        "Grace Hopper": "The Computer",
        "Marie Van Brittan Brown":"home security systems,",
        "Patricia Bath":"Laserphaco Probe",
        "Marie Curie":"Theory of Radioactivity",
        "Rosalind Franklin":"Rosalind Franklin",
        "Dr. Shirley Jackson:":"Modern Day Telecommunication",
        "Maria Beasley":"The Life Raft",
        "Katharine Burr Blodgett":"Non-reflective Glass"
},
{
    // title : "See Africa",
    // words:{
    //     "":"",
    //     "":"",
    //     "":"",
    //     "":"",
    //     "":"",
    //     "":"",
    //     "":"",
    //     "":"",
    //     "":"",
    //     "":"",
    //     "":"",
    //     "":""
    // }
}
]

const cardContainer = document.querySelector("#cardcontainer")
const frontCard = document.querySelector(".front-card")
const backCard = document.querySelector(".back-card")
const africa = document.querySelector(".africa")
// const buttons = document.querySelector(".buttons")
const next = document.querySelector(".next")
const previous = document.querySelector(".previous")

let i = 0 //this is serving as a constant for our index as we are going to use this to manipultae the dom
let j = 0
africa.addEventListener("click", function(evt){
    flashCard = Object.entries(flashCards[j]) //makes the object into an array so you're able to access it, remember that the value of i and j is 0. 
    frontCard.textContent = flashCard[i][0]  //now you can access the array index and make the text content of the front and back card different things 
    backCard.textContent = flashCard[i][1]
    next.classList.remove("inactive");
})


cardContainer.addEventListener("click", function(evt){
    evt.preventDefault
    // flashCard = Object.entries(flashCards[j]) 
    // console.log(flashCard[j])
    backCard.classList.toggle("inactive"); //this does the opposite, adding the back of the card to the view and removing the class of inactive we placed on it earlier
    frontCard.classList.toggle("inactive"); //this adds a class of inactive(make this in css) to the front of the card, removing it from view
    
})

// flashCard = Object.entries(flashCards)
// for (i = 0; i < flashCard.length; i++){
next.addEventListener("click", function(evt){
    nextItem()
    flashCard = Object.entries(flashCards[j])
    frontCard.textContent = flashCard[i][0]
    backCard.textContent = flashCard[i][1]
    previous.classList.remove("inactive");
})

function nextItem() {
    i = i + 1; // increase i by one
    i = i % flashCard.length; // if we've gone too high, start from `0` again
    return flashCard[i]; // give us back the item of where we are now
}

function prevItem() {
    if (i === 0) { // i would become 0
        i = flashCard.length; // so put it at the other end of the array
    }
    i = i - 1; // decrease by one
    return flashCard[i]; // give us back the item of where we are now
}
// }





// next = i + 1
// previous = i - 1

// flashCard = Object.entries(flashCards[j, 1])