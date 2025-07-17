// set score to 0
let yourscore=0;
let compscore=0;

//// to activate the id 
let boxes=document.querySelectorAll(".box");
let msg=document.querySelector("#msg");
let yourscorepara=document.querySelector("#yourscore");
let compscorepara=document.querySelector("#compscore");


//find user choice
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        let userchoice=box.getAttribute("id");
        palyGame(userchoice);   // playgame ko call kiye
    })
})


////to genertate computer choice
const gencompchoice=() =>{
    const option=["rock","paper","Sessior"];
    const index=[Math.floor(Math.random()*3)];
     return option[index];
}


// play game compare userchoice and compcoice
const palyGame = (userchoice)=>{
    console.log(`user choice is ${userchoice}`);
    let compchoice=gencompchoice();
    console.log(`computer choice is ${compchoice}`)

    if(userchoice===compchoice){
        drawGame();  // call draw function
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="Sessior"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showWinner(userwin,userchoice,compchoice); // call show winner function
    }
}

// draw game
const drawGame=() =>{
    msg.innerText="Match is drwa";
    console.log("game is drwa,play again");
}


//  function for show winner
const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        yourscore++;
        yourscorepara .innerText= yourscore;
        msg.innerText=`win your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorepara .innerText= compscore;
        msg.innerText=`Loss ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}