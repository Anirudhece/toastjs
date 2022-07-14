let btn=document.querySelector(".btn");
let pop=document.querySelector(".pop");
btn.addEventListener("click",work);
function work(e){
    e.stopPropagation();
    pop.style.display="block";
    setTimeout(()=>{
        pop.style.display="none";
    },3000);
} 
