var input=document.getElementById("userGuess")
var output=document.getElementById("result")
var btn=document.getElementById("btn")
//function 
var x=Math.floor(Math.random()*10)+1;
var guess=0;
var num=2;
btn.addEventListener("click",guessNum);
function guessNum(){
    guess=parseInt(input.value); 
    
    if(input.value==""){
        alert("give the number")
    }
    else if(guess!=x)
    {
        if(num>0){
            btn.textContent="Submit"
            output.textContent=  `Oops!!Wrong answer, you have ${num} tries left`
            num-=1;
            output.style.color="black"
            input.style.border="red solid"
            
        }
        else{
           input.style.border="red"
            input.disabled=true;
            output.textContent= `Oh!!you lost the game..`
            btn.textContent="Play Again"
            output.style.color="red"
            btn.addEventListener("click",again)
            function again(){
                location.reload();
            }
        }
    }
    else{
       input.style.border="green solid"
        input.disabled=true;
        btn.textContent="Play Again"
        output.textContent=  `You are right!!you won, answer is ${x}`
        output.style.color="green"
        btn.addEventListener("click",restart)
        function restart(){
            location.reload();
        }
    }
}