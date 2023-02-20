// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables to select each button from the html
-------------------------------------------------- */
let firstbutton = document.querySelector("#noun1");
let secondbutton = document.querySelector("#verb");
let thirdbutton = document.querySelector("#adjective");
let fourthbutton = document.querySelector("#noun2");
let fifthbutton = document.querySelector("#setting");
let playback = document.querySelector("#playback");
let next = document.querySelector("#next")


// variables to select each paragraph with their id

let txtnoun = document.getElementById("nountxt");
let txtverb = document.getElementById("verbtxt");
let txtadjective = document.getElementById("adjectivetxt");
let txtnoun2 = document.getElementById("noun2txt");
let txtsetting = document.getElementById("settingtxt");
let story = document.getElementById("story");
let txtnext = document.getElementById("nexttxt");

// assigning array for each button
let button1 = [
   "The chicken",
   "Mom",
   "Dad",
   "The dog",
   "My teacher",
   "The elephant",
   "The cat"
];
let button2 = [
   "sat on",
   "ate",
   "danced with",
   "saw",
   "doesn't like",
   "kissed"
];
let button3 = [
   "a funny",
   "a scary",
   "a goofy",
   "a slimy",
   "a barking",
   "a fat"
];
let button4 = [
   "goat",
   "monkey",
   "fish",
   "cow",
   "frog",
   "bug",
   "worm"
];
let button5 = [
   "on the moon",
   "on the chair",
   "in my spaghetti",
   "in my soup",
   "on the grass",
   "in my shoes"
];



/* Functions
-------------------------------------------------- */

// for nounone

//index1 keep track of the array 
 let index1 = 0;

// on each call it updates the txt noun at the current index and increase the index1 varibale by 1 and when it cross the array length the modules helps in resetting the index to zero

 function firstNounfuction() {
  txtnoun.textContent = button1[index1];
  index1 = (index1 + 1) % button1.length;
}

// for verb

//same fucntionality as the first nounone
 let index2 = 0;

 function verbfuction() {
   txtverb.textContent = button2[index2];
   index2 = (index2 + 1) % button2.length;
 }

//for adjective

//same functionlity 
 let index3 =0;

 function adjectivefuction() {
   txtadjective.textContent = button3[index3];
   index3 = (index3 + 1) % button3.length;
 }

// for nountwo
 let index4 = 0;

 function nountwofunction(){
   txtnoun2.textContent = button4[index4];
   index4 = (index4 + 1) % button4.length;

 }

//for setting

let index5 = 0;

function settingfunction(){
   txtsetting.textContent = button5[index5];
   index5 = (index5 + 1) % button5.length;
 }

//now we need to combine these selected index and show the selected text to the user

function Story() {
   story.textContent = `${txtnoun.textContent} ${txtverb.textContent} ${txtadjective.textContent} ${txtnoun2.textContent} ${txtsetting.textContent}.`;
 }

//so now we need to randomize the txt of 5 buttons ..math.floor doesnot let the number to be decimal and round it up and other function creates the random value for button 1
 function randomStoryGenerate(){
   let txtnounrand = Math.floor(Math.random() * button1.length);
   let txtverbrand = Math.floor(Math.random() * button2.length);
   let txtadjectiverand = Math.floor(Math.random() * button3.length);
   let txtnoun2rand = Math.floor(Math.random() * button4.length);
   let txtsettingrand = Math.floor(Math.random() * button5.length);

   story.textContent = `${button1[txtnounrand]} ${button2[txtverbrand]} ${button3[txtadjectiverand]} ${button4[txtnoun2rand]} ${button5[txtsettingrand]}.`;
 }

/* Event Listeners
 -------------------------------------------------- */

//  now we create event listeners to listen for the click of the buttons
 
firstbutton.addEventListener("click", firstNounfuction);
secondbutton.addEventListener("click", verbfuction);
thirdbutton.addEventListener("click", adjectivefuction);
fourthbutton.addEventListener("click", nountwofunction);
fifthbutton.addEventListener("click", settingfunction);
playback.addEventListener("click", Story);
next.addEventListener("click", randomStoryGenerate);


 