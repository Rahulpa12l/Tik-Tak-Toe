let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let trueO=true; 

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    trueO =true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach(box => {
    box.addEventListener("click",()=>{
    
        if(trueO){
            box.innerText="O";
            box.style.color="red";
            trueO=false;
        
        } else{
            box.innerText="X";
            box.style.color="black";
            trueO=true;

        }
        box.disabled= true;
        checkwinner();

    });
    
});

const disableboxes =() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.style.color="black";
    }
};


const showWinner = (winner) =>{
    msg.innerText =`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner = () => {
    for(let pattern of winpatterns){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if(pos1val !=""&& pos2val !=""&& pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
        
                showWinner(pos1val);
            }
        }
    }
};

newGame.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);