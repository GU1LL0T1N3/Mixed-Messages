function randomColor()  {
    let colors = ["1W", "2U", "3B", "4R", "5G"];
    let pairings = [];
    for (let i = 0; pairings.length < 3; i++) {
        let grabColor = colors[Math.floor(Math.random() * 5)];
        if (pairings.includes(grabColor) === false) {
            pairings.push(grabColor);
        }
    }

    return pairings.sort();
}
console.log(randomColor());
