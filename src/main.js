

function computerPlay() {
    const itemsArray = ["Rock", "Paper", "Scissors"];
    let randomItem = itemsArray[Math.floor(Math.random() * itemsArray.length)];
    console.log(randomItem)
}

computerPlay()

