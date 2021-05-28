function randomColor () {
    return 'rgb (' + 
    Math.floor(Math.random() * 255) + 
    "," + 
    Math.floor(Math.random() * 255) + 
    ","+ 
    Math.floor(Math.random() * 255) + 
    ")"
}

var box = document.querySelector(".box");
for (let index = 0; index < 2000; index++) {
    const element = document.createElement('div');
    element.classList.add("item");
    // element.innerHTML = index;
    element.addEventListener("mouseenter", function () {
        // element.style.backgroundColor = "black";
        var imageUrl = "url(" + randomArrayItem(imgArray) + ")";
        console.log(imageUrl);
        element.style.backgroundImage = imageUrl;
    });
    box.appendChild(element);
}


var resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", function () {
    var items = document.querySelectorAll(".item");
    items.forEach(function (item) {
        item.style.backgroundImage = "none";
    });
});


function randomArrayItem (array) {
    return array [Math.floor (Math.random () * array.length)];
}


var imgArray = [];

for (var i = 0; i < 20; i++) {
    var imgNumber = i + 1 >= 10 ? i + 1 : "0" + (i + 1);
    var imgPath = "tiles/tiles-" + imgNumber + ".jpg";
    imgArray.push (imgPath);
}


// setTimeout(reset, 5000);

// setInterval(reset, 5000);

setInterval (function () {
    var items = Array.from (document.querySelectorAll (".item")).slice(500, 900);
    var randomItem = randomArrayItem(items);
    randomItem.style.backgroundImage = "url(" + imgArray[0] + ")";
}, 10);

setInterval (function () {
    var items = Array.from (document.querySelectorAll (".item")).slice(1000, 2000);
    var randomItem = randomArrayItem(items);
    randomItem.style.backgroundImage = "url(" + imgArray[5] + ")";
}, 100);