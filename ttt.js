let boxes= document.querySelectorAll(".box");
console.log(boxes);
let restart= document.querySelector("#restart");
let msgContainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");


 let turnO = true;

 const users = {
    'X' :"User1",
    'O' :"user2"
 }

 const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ];
 boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnO){
        box.innerText="O";
        turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
        
    } );
 });

 const disableBoxes = () => {
    
    for(let box of boxes){ 
        box.disabled = true;

    }
 }
 const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;

    }
 }


 const showWinner = (winner) => {

    msg.innerText = 'CONGRATULATIONS ' + users[winner];
    msgContainer.classList.remove("hide");
   
    
 } 
 

 const checkWinner = () => {
   for(let pattern of winPatterns){
    let posiValue0= boxes[pattern[0]].innerText;
    let posiValue1= boxes[pattern[1]].innerText;
    let posiValue2= boxes[pattern[2]].innerText;

    if(posiValue0!=""&&posiValue1!=""&&posiValue2!=""){
        if(posiValue0==posiValue1&&posiValue1==posiValue2){
             console.log("winner",posiValue0);
             disableBoxes();
             showWinner(posiValue0);
        }
    }
    
   }
 };

 const t_fun = (box,ind,t) => {
   const obj = {}
   const arr= [];

   
    box.innerText ="";
}
 
 restart.addEventListener('click',()=>{
    boxes.forEach(t_fun);
    enableBoxes();
    msgContainer.classList.add("hide");
    turnO = true;

 });


   