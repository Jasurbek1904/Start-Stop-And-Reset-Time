let a = 0;
let b;
let c = 0;

function start() {
    a++
    b = c + ":" + a
    if (a > 59) {
        c++
        a = 0
    }
    document.querySelector("p").innerHTML = b
    // console.log(b);
}


function reset() {
    location.reload();
    // a = 0
    // c = 0
    // b = "0" + c + ":" + a
    // document.querySelector("p").innerHTML = b
}