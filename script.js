const $button=document.querySelector('button')


function sayHello(name){
    return function(){
        console.log(name)
    }
}


// $button.addEventListener("click",sayHello("hello"))