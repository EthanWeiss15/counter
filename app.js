// set initial count 
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const stlyes = e.currentTarget.classList;
        if (stlyes.contains('decrease')){
            count --;
        } else if (stlyes.contains('increase')){
            count ++;
        } else {
            count = 0;
        }
        
        if(count > 0){
            value.style.color = "green";
        } else if (count < 0){
            value.style.color = "red";
        } else {
            value.style.color = "black";
        };
            
        value.textContent = count;
    });
});
