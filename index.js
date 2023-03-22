

const roundtotal = document.getElementById("roundCount");
const playerScore = document.getElementById("Pscore");
const compScore = document.getElementById("Cscore");
const drawscore = document.getElementById("Dscore");
const status = document.getElementById("status");
const Guu = document.getElementById("Guu")
const Paa = document.getElementById("Paa")
const Choki = document.getElementById("Choki")

let rounds= 0;
let wins=0;
let loss =0;
let draw =0
let playerchoice;
let choice;
let conditon;
let state=["win","lose","draw"];
let hands=["Rock","Paper","Scissors"];
let totalrounds;


function reseter(){ rounds=0;
    if(wins>loss){alert("you win")}else if(loss>wins){alert("you lose")}else{alert("Draw")}
    wins=0
    loss =0
    draw =0
    roundtotal.innerHTML=`${rounds}`
    playerScore.innerHTML=`${wins}`
    compScore.innerHTML=`${loss}`
    drawscore.innerHTML=`${draw}`
    status.innerHTML=""}
const reset = document.getElementById("reset").onclick= ()=>{
   rounds=0;
    wins=0
    loss =0
    draw = 0
    roundtotal.innerHTML=`${rounds}`
    playerScore.innerHTML=`${wins}`
    compScore.innerHTML=`${loss}`
    drawscore.innerHTML=`${draw}`
    status.innerHTML=""
    totalrounds=0;
     totalrounds = prompt("pick number of rounds",)

}
function game(){
totalrounds = prompt("pick number of rounds",)
Guu.addEventListener('click',()=>{
    choices(0)
    if(rounds==totalrounds){
        reseter()
    }
   });
    Paa.addEventListener('click',()=>{
    choices(1)
    if(rounds==totalrounds){
        
        reseter()
    }
    });
    Choki.addEventListener('click',()=>{
    choices(2)
    if(rounds==totalrounds){
        reseter()
    }
    })
    
}

 game()


choices(choice)

function choices(choice){
var cpu= Math.floor(Math.random()*3);  
switch(choice){
    case 0:
    rounds ++
    choice =0;
    
    janken(choice,cpu)
    wincondition(choice,cpu)
    
    console.log(rounds)
    roundtotal.innerHTML =`${rounds}`;
    status.innerHTML = ` you chose ${hands[choice]} and the cpu chose ${hands[cpu]} you ${state[conditon]}`
    break;

    case 1:
    rounds++
    
    
    janken(choice,cpu)
    wincondition(choice,cpu)
   
    console.log(rounds)
    roundtotal.innerHTML =`${rounds}`;
    status.innerHTML = ` you chose ${hands[choice]} and the cpu chose ${hands[cpu]} you ${state[conditon]}`
    break;


    case 2:
    rounds++
    
    
    janken(choice,cpu)
    wincondition(choice,cpu)
    
    console.log(rounds)
    roundtotal.innerHTML =`${rounds}`;
    status.innerHTML = ` you chose ${hands[choice]} and the cpu chose ${hands[cpu]} you ${state[conditon]}`
    break;
};
}

    
    
    
    function wincondition(choice,cpu){
       
        if(choice == 0 && cpu == 2 || choice ==1 && cpu == 0 || choice == 2 && cpu == 1 ){
            console.log("win");
            conditon=0;
            wins ++;
            playerScore.innerHTML= `${wins}`;
            

        }else if(choice == 2 && cpu == 0 || choice ==0 && cpu == 1 || choice == 1 && cpu == 2){
            console.log("lose");
            conditon=1;
            loss ++;
            compScore.innerHTML= `${loss}`;
            
        }else {
            draw ++;
            console.log("Draw");
            conditon=2;
            drawscore.innerHTML=`${draw}`
            
        }
    }
    
function janken(choice,cpu){
 
    console.log(hands[choice]);
    
    console.log(hands[cpu])
    
    }
    

/*
function choices(){

    
    const Guu = document.getElementById("Guu").onclick= ()=>{
        rounds ++
        choice =0;
        
        janken()
        wincondition()
        
        console.log(rounds)
        roundtotal.innerHTML =`${rounds}`;
        status.innerHTML = ` you chose ${hands[choice]} and the cpu chose ${hands[cpu]} you ${state[conditon]}`
    };
    
    const Paa = document.getElementById("Paa").onclick= ()=>{
        rounds++
        choice =1;
        
        janken()
        wincondition()
       
        console.log(rounds)
        roundtotal.innerHTML =`${rounds}`;
        status.innerHTML = ` you chose ${hands[choice]} and the cpu chose ${hands[cpu]} you ${state[conditon]}`
    };
    
    
    const Choki = document.getElementById("Choki").onclick= ()=>{
        rounds++
        choice =2
        
        janken()
        wincondition()
        
        console.log(rounds)
        roundtotal.innerHTML =`${rounds}`;
        status.innerHTML = ` you chose ${hands[choice]} and the cpu chose ${hands[cpu]} you ${state[conditon]}`
    };
    }*/