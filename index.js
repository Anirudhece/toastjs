let btn=document.querySelector(".btn");
let pop=document.querySelector(".pop");
btn.addEventListener("click",work);
function work(){
    pop.style.display="block";
    setTimeout((e)=>{
        pop.style.display="none";
        e.stopPropagation();
    },3000);
} 
