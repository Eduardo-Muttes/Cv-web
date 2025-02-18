let getRandomSize = size => {
    return Math.floor(Math.random() * size);
}

let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

let getDistanceHint = distance => {
    if (distance < 30) {
        return "Hirviendo!";
    } else if (distance < 60) {
        return "Muy Caliente!";
    } else if (distance < 100) {
        return "Tibio";
    } else if (distance < 150) {
        return "Frio";
    } else if (distance < 200) {
        return "Muy Frio";
    } else {
        return "Congelado";

    }
}