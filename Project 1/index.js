let index = 0; // Define index globally

function ChangeColors() {
    let colors = ["red", "orange", "green", "blue", "yellow","purple"];

    document.getElementsByTagName("body")[0].style.background = colors[index++];
    
    if (index > colors.length - 1) {
        index = 0; // Reset index when the last color is reached
    }
}
