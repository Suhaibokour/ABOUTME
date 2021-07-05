'use strics';

let userName = prompt("Hello friend, it would please us if you inter your name here");
console.log(userName);

let ready=prompt(userName + " are you ready to start a guessing game in which you are going to be asked a few questions about me>( yes . no )")

ready=ready.toLowerCase();

while (ready != "yes" && ready != "no") {
    ready=prompt("Pleas answer with yes or no")
}
alert("Let's start anyway :D")

let q1=prompt("Do you think that I love online games?(yes,no)");
q1 = q1.toLowerCase();
if (q1 == "yes") {
    alert("You are absloutly right !")
} else if (q1 == "no") {
    alert("Actually i do love games, try the next Question:)")
} else {
    alert("Let us go to the next one")
}

let q2=prompt("Do you think that my age is above 30?(yes,no)")
q2=q2.toLowerCase();
if (q2 == "no") {
    alert("You are absloutly right !")
} else if (q2 == "yes") {
    alert("Actually I'm 27, try the next Question:)")
} else {
    alert("Let us go to the next one")
}

let q3=prompt("Do you think that I'm married?(yes,no)")
q3=q3.toLowerCase();
if (q3 == "yes") {
    alert("You are absloutly right !")
} else if (q3 == "no") {
    alert("Actually I'm married to a lovely women named Banan, try the next Question:)")
} else {
    alert("Let us go to the next one")
}

let q4=prompt("Do you think that we can be firends?(yes,no)")
q4=q4.toLowerCase();
if (q4 == "yes") {
    alert("I would love to!, I am the kinda guy that would be more than happy to have new friends in his life ")
} else {
    alert("This is unfortionate, but anyway it was nice to chat with you)")
} 