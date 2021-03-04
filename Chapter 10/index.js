function linkClick() {
    alert ("You Clicked The Link!")
    return;
}

var myImages = [
    "./img/cabinBoots.jpg",
    "./img/countrySide.jpg",
    "./img/skyView.jpg",
    "./img/sunsetRoad.jpg"
];

function changeImg(that) {
    var newImgNumber = Math.round(Math.random() * 3);

    while (that.src.indexOf(myImages[newImgNumber]) != -1) {
        newImgNumber = Math.round(Math.random() * 3);
    }

    that.src= myImages[newImgNumber];

    return;
}