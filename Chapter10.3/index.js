function linkClick() {
    alert("This Link is going nowhere")
    return false;
};

document.getElementById("someLink").onclick = linkClick;
