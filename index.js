

const roundtotal = document.getElementById("roundCount");
const playerScore = document.getElementById("Pscore");
const compScore = document.getElementById("Cscore");
let rounds= 0;


const status = document.getElementById("status");
const reset = document.getElementById("reset");
let playerchoice;
let choice;
let hands=["Rock","Paper","Scissors"];
let cpu= Math.floor(Math.random()*3);

const Guu = document.getElementById("Guu").onclick= ()=>{
    rounds ++
    choice =0;
    janken()
    wincondition()
    console.log(rounds)
    roundtotal.innerHTML =`${rounds}`;
};

const Paa = document.getElementById("Paa").onclick= ()=>{
    rounds++
    choice =1;
    janken()
    wincondition()
    console.log(rounds)
    roundtotal.innerHTML =`${rounds}`;
};


const Choki = document.getElementById("Choki").onclick= ()=>{
    rounds++
    choice =2
    janken()
    wincondition()
    console.log(rounds)
    roundtotal.innerHTML =`${rounds}`;
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