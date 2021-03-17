function handle(e) {
    alert ("We'll open a new tab for you!")
    onclose (
        alert ("thanks")
    )
    return;
}

var myImages = [
    "./img/cabinBoots.jpg",
    "./img/countrySide.jpg",
    "./img/skyView.jpg",
    "./img/sunsetRoad.jpg"
];

function changeImg(e) {
    var el = e.target;
    var newImgNumber = Math.round(Math.random() * 3);

    while (el.src.indexOf(myImages[newImgNumber]) != -1) {
        newImgNumber = Math.round(Math.random() * 3);
    }

    el.src= myImages[newImgNumber];

    return;
}