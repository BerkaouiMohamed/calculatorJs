const numbers=document.querySelectorAll(".num")
const affichage=  document.querySelector('.value')
var calc=""
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click",function(){
        calc+=this.innerText
        affichage.value=calc
    })
}
document.querySelector(".equal").addEventListener("click",function(){
affichage.value=calc=eval(calc)
})
document.querySelector('.clear').addEventListener("click",()=>affichage.value=calc="")