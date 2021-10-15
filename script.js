console.log("Hello World!");
const button = document.getElementById("button")
const wheel = document.getElementById('wheel');


//array
const spaken = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

//loop die de spaken/wiel bouwt
spaken.forEach(element => {
    const m = document.createElement("div");
    m.classList.add("spaak");
    m.style.transform = `rotate(${360 / spaken.length * element}deg)`
    m.innerHTML = spaken[element];
    wheel.appendChild(m);

});


button.addEventListener('click', () => {
    wheel.style.transform = "rotate(180deg)";
    // wheel.style.marginTop = "200px";
    // wheel.style.marginLeft = "500px";
    wheel.style.position = "absolute";
    tick();
})
let rotation = 0;
let speed = 10;

const down = 1;
const up = 2;
let direction = up;
// const limit = 2;


function tick() {
    let degree =  Math.round(Math.random()*10);
    console.log(degree);
    switch (direction) {
        case up:
            speed += 0.05;
            if (speed > degree) {
                speed = degree;
                direction = down;
                console.log("hallo" + down);
             
            }
            break;
        case down:
            speed -= 0.05;
            if (speed < 0) {
                speed = 0;
                direction = null;
                alert(degree);
            }
            break;
        default:
    }
    rotation = rotation + speed;
    // speed = speed + 0.05;
    wheel.style.transform = "rotate(" + rotation + "deg)";
    console.log(speed);
    setTimeout(tick, 50);


}




