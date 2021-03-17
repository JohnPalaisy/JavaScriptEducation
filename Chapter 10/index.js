function linkClick() {
    alert ("We'll open a new tab for you!")
    return;
};

function handle(e) {
    alert(e.type);
};

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
};