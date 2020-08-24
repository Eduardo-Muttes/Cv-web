/*Mapa del tesoro*/
const WIDTH = 400;
const HEIGHT = 400;

let target = {
    x: getRandomSize(WIDTH),
    y: getRandomSize(HEIGHT)
};

let $map = document.getElementById('mapa');
let $distancia = document.getElementById('distancia');
let clicks = 0;

$map.addEventListener('click', function (e) {
    clicks++;
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
    $distancia.innerHTML = `<h1>${distanceHint}</h1>`;

    if (distance < 15) {
        alert(`Has encontrado el tesoro en ${clicks} clicks!`);
        clicks = 0;
        target = {
            x: getRandomSize(WIDTH),
            y: getRandomSize(HEIGHT)
        };
        $distancia.innerHTML = ""
    }
    
})


