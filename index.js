let btn=document.querySelector(".btn");
let pop=document.querySelector(".pop");
btn.addEventListener("click",work);
function work(){
    pop.style.display="block";
    setInterval(()=>{
        pop.style.display="none";
    },3000);
}
