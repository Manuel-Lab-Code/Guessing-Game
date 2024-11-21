// let choice = true;
// confirm(`Do you want to play the game ? `)
//     if (true){
//     confirm(`\n if YES click on the okay button below`) 
// }
// else{ 
//     choice = false;
//     alert(`maybe some other time`)
// }

//Random Number
// var randomNum = Math.random() * 10;
// var ciled = Math.ceil(randomNum);
// let ciled = 8;
// console.log(ciled)
// let myinput = 4
// let count = 0; 
// while (count < 3) {
//     if (myinput == ciled) {
//         console.log("you won" + count)
//         count=+1
//     } else if( myinput != ciled &&count !=2) {
//         console.log("you lost keep trying!" + count)
//         count+=1;
// break;
        
// }
//     else {
//         console.log("Out of time")
        
//         }
//         break;
    
// } 
// if (count !=3 ) {
//     console.log("keep trying ", {count})
    
// }else {
//     console.log("Out of time")
// }
function dateTime(){  
         
    document.getElementById("time").innerHTML = Date();
  }
  dateTime()

// let timeDate = document.getElementById("time").value;
// timeDate.innerHTML = Date();
let useroutput = document.getElementById("outPut");
// let pic = document.getElementById("imagePic");
let button = document.getElementById("btn");
let userChance = document.getElementById("chance")
// let pic = document.getElementById("imagePic");

// let images= src = "Assets/img1.png"
//Random Number


let counter = 0;

button.addEventListener("click", function(){ 
    var randomNum = Math.random() * 10 *100;
var ciled = Math.ceil(randomNum);
console.log( "random number" + ciled);
let running = true
    while (counter < 3  && running) { 
    let userInput = document.getElementById("inPut").value;
    if (userInput == ciled ) {
        useroutput.innerHTML = `Waow!! it Emmanuel's Birthday Today! You win 2GB of Data for guessing the Right number ${ciled}`;
        alert(`Woooow! lucky You won 2GB of Data, Screenshot this and send it to iMadious on 08122958042`)
        location.reload();
        break;
      

    }
    
else{
     useroutput.innerHTML = `It Emmanuel's Birthday Today!! But Oops You are unable to guess the corret number this time, keep trying. The correct number was ${ciled} this time`;
    //  pic.appendChild(images)   
     // console.log(`Oops! try again the correct number is ${ciled} you got more chance`);
        

    }  
    userChance.innerHTML= `Guess time = ${counter +=1}`;
    running = false;
}

        if(counter === 3) {
         
        alert(`Oops! Game Over! you can only guess 3 times`);
        confirm(`Will like to try again`);
        location.reload();
       
                }        // console.log(`sorry! you can only guess ${counter} times  `);      
    else {
        
       
    }
})
