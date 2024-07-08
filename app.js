let usersc=0;
let compsc=0;

const selet = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const yourr = document.querySelector("#you");
const compute = document.querySelector("#compute");

const cgenerator= ()=>{
    const options=["rock","paper","scissor"];
    const compChoice=Math.floor(Math.random()*3);
    return options[compChoice];
    
    };
const draw = () =>{
    msg.innerText = "GAME DRAW! PLAY AGAIN";
    msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoice, coch)=>{ 
    if(userWin ===true){
        usersc++;
        yourr.innerText = usersc;
         msg.innerText = `YOU WIN! YOUR ${userChoice} BEATS COMPUTER ${coch}` ;
         msg.style.backgroundColor = "green";
        }
    else{
        compsc++;
        compute.innerText = compsc;
         msg.innerText = `COMPUTER WIN! COMPUTER ${userChoice} BEATS YOUR ${coch} ` ;
         msg.style.backgroundColor = "red";
    }
    }


    const playGame= (userChoice)=>{
        console.log("user choice is",userChoice);
        const coch=cgenerator();
        console.log("computer choice is =",coch);
            if(coch===userChoice){
                console.log("Match is draw");
                draw();
            }else{
                let userWin=true;
                if (userChoice==="rock"){
                    userWin = coch ==="paper" ? false : true;
                    if(userWin== true){
                        console.log("winner is rock");
                    }else{
                        console.log("winner is paper");

                    }
                }else if(userChoice ==="paper"){
                    userWin = coch ==="scissor" ? false : true;
                    if(userWin== true){
                        console.log("winner is paper");
                    }
                    else{
                        console.log("winner is scissor");
                    }
                }else{
                    userWin = coch ==="rock" ? false : true;
                    if(userWin== true){
                        console.log("winner is scissor");
                    }
                    else{
                        console.log("winner is rock");
                    }
                }showWinner(userWin, userChoice, coch);
            }
        
    
    };
        
selet.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
       const userChoice=choice.getAttribute("id");
        playGame(userChoice);
        
        

    });
    
});
