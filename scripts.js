var bodies = [
    {
        name: "blonde",
        width: 10,
        color: 'yellow',
    },
    {
        name: "red",
        width: 5,
        color: 'red',
    },
    {
        name: "dark",
        width: 7,
        color: 'Sienna',
    },
    {
        name: "gray",
        width: 3,
        color: 'gray',
    },
    {
        name: "white",
        width: 6,
        color: 'white',
    },
];

console.log (bodies);

bodies.forEach(function (buddy) {
    var container = document.querySelector(".container");
    var buddyElement = document.createElement("div");
    buddyElement.innerText = buddy.name;
    buddyElement.style.backgroundColor = buddy.color;
    buddyElement.style.width = buddy.width * 200 + "px";
    buddyElement.classList.add("buddy");
    container.appendChild(buddyElement);
});