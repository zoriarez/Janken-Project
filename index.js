



const rounds = document.getElementById("roundCount");
const playerScore = document.getElementById("Pscore");
const compScore = document.getElementById("Cscore");



const status = document.getElementById("status");
const reset = document.getElementById("reset");
let playerchoice;
let choice;
let hands=["Rock","Paper","Scissors"];
let cpu= Math.floor(Math.random()*3);

const Guu = document.getElementById("Guu").onclick= ()=>{
    
    choice =0;
    janken()
    wincondition()
};

const Paa = document.getElementById("Paa").onclick= ()=>{
    
    choice =1;
    janken()
    wincondition()
};


const Choki = document.getElementById("Choki").onclick= ()=>{
    
    choice =2
    janken()
    wincondition()
};



function janken(){
console.log(hands[choice]);

console.log(hands[cpu])

}




function wincondition(){
    if(choice == 0 && cpu == 2 || choice ==1 && cpu == 0 || choice == 2 && cpu == 1 ){
        console.log("win");
    }else if(choice == 2 && cpu == 0 || choice ==0 && cpu == 1 || choice == 1 && cpu == 2){
        console.log("lose");
    }else{
        console.log("Draw");
    }
}