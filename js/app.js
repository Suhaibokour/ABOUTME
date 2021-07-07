'use strict'
function question1(){
let userName = prompt("Hello friend, it would please us if you inter your name here");
console.log(userName);

let ready = prompt(userName + " are you ready to start a guessing game in which you are going to be asked a few questions about me>( yes . no )")

let score=0; 

ready = ready.toLowerCase();

while (ready != "yes" && ready != "no") {
    ready = prompt("Pleas answer with yes or no")
}
alert("Let's start anyway :D")

let q1 = prompt("Do you think that I love online games?(yes,no)");
q1 = q1.toLowerCase();
if (q1 == "yes") {
    alert("You are absloutly right !")
    score++;
} else if (q1 == "no") {
    alert("Actually i do love games, try the next Question:)")
} else {
    alert("Let us go to the next one")
}
}
question1();
function question2(){
let q2 = prompt("Do you think that my age is above 30?(yes,no)")
q2 = q2.toLowerCase();
if (q2 == "no") {
    alert("You are absloutly right !")
    score++;
} else if (q2 == "yes") {
    alert("Actually I'm 27, try the next Question:)")
} else {
    alert("Let us go to the next one")
}
}
question2();
let q3 = prompt("Do you think that I'm married?(yes,no)")
q3 = q3.toLowerCase();
if (q3 == "yes") {
    alert("You are absloutly right !")
    score++;
} else if (q3 == "no") {
    alert("Actually I'm married to a lovely women named Banan, try the next Question:)")
} else {
    alert("Let us go to the next one")
}

let q4 = prompt("Do you think that we can be firends?(yes,no)")
q4 = q4.toLowerCase();
if (q4 == "yes") {
    alert("I would love to!, I am the kinda guy that would be more than happy to have new friends in his life ")
    score++;
} else {
    alert("This is unfortionate, but anyway it was nice to chat with you)")
}



for(let i=1;i<=4;i++){
let num=prompt("I would like you to guess a number between (1-5)")
let number=parseInt(num);

if(number===3){
    alert('This is correct')
    score++;
    break;

}
if(number<=2){
    alert("Too low!");
}else if(number>=4){
    alert("Too high!");
}else{
    comsole.log(number);
}
}



let movies = ['the shawshank redemption', 'the godfather', 'godfather part two', 'forrest gump', 'spirited away'];

console.log(movies.length);

for (let i = 0; i < 6; i++) {
    let favMovie = prompt("Can you guess one of my top 5 favorite movies?");
    let movies = ['the shawshank redemption', 'the godfather', 'godfather part two', 'forrest gump', 'spirited away'];


    if (favMovie == movies[0] || favMovie == movies[1] || favMovie == movies[2] || favMovie == movies[3] || favMovie == movies[4]) {
        alert("correct");
        score++;
        break;
    } else {
        alert("wrong answer");

    }
    if (i < 5) {
        continue;
    }

}

alert("You score is "+score+"/6")

alert("My favorite movies are ('the shawshank redemption', 'the godfather', 'godfather part two', 'forrest gump', 'spirited away') ")



















// for (let j = 0; j <= 5; j++) {

//     for (let i = 0; i <= movies.length; i++) {
//         let favMovie = prompt("Can you guess one of my top 5 favorite movies?");

//         // favMovie=favMovie.toLowerCase();

//         if (favMovie == movies[i]) {
//             alert("this is correct")
//             // j = 6;
//             break;

//         } else {

//             alert("wrong answer");
//             favMovie = prompt("Can you guess one of my top 5 favorite movies?");
//         }

//         // else if (favMovie != movies[i]) {
//         //     alert("Try again!")
//         // favMovie=prompt("Can you guess one of my top 5 favorite movies?");

//         // if (j < 5) {
//         //     continue;
//         // }
//     }
// }










