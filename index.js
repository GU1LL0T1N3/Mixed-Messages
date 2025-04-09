// Returns var with three random colors/numbers 
function randomColors() {
    let colors = ["1W", "2U", "3B", "4R", "5G"];
    let pairings = [];
    for (let i = 0; pairings.length < 3; i++) {
        let grabColor = colors[Math.floor(Math.random() * 5)];
        if (pairings.includes(grabColor) === false) {
            pairings.push(grabColor);
        }
    }

    pairings = pairings.sort();
    pairings = pairings.join("");
    return pairings;
}

let setPair = randomColors();

let clanNameAndColors = [];

switch  (setPair)   {
    case "1W2U3B": 
        clanNameAndColors.push("Esper", "Shard", "White, Blue, and Black");
        break;
    case "1W2U5G":
        clanNameAndColors.push("Bant", "Shard", "Green, White, and Blue");
        break;
    case "2U3B4R":
        clanNameAndColors.push("Grixis", "Shard", "Blue, Black, and Red");
        break;
    case "3B4R5G":
        clanNameAndColors.push("Jund", "Shard", "Black, Red, and Green");
        break;
    case "1W4R5G":
        clanNameAndColors.push("Naya", "Shard", "Red, Green, and White");
        break;
    case "1W3B5G":
        clanNameAndColors.push("Abzan", "Wedge", "White, Black, and Green");
        break;
    case "1W2U4R":
        clanNameAndColors.push("Jeskai", "Wedge", "Blue, Red, and White");
        break;
    case "2U3B5G":
        clanNameAndColors.push("Sultai", "Wedge", "Black, Green, and Blue");
        break;
    case "1W3B4R":
        clanNameAndColors.push("Mardu", "Wedge", "Red, White, and Black");
        break;
    case "2B4R5G":
        clanNameAndColors.push("Temur", "Wedge", "Green, Blue, and Red");
        break;
    default:
        console.log("There is not enough colors!")
}
console.log(clanNameAndColors)

function clanAndColors()    {
    console.log(`Your ${clanNameAndColors[1]} name is ${clanNameAndColors[0]}!`);
    console.log(`Your ${clanNameAndColors[1]}'s colors are ${clanNameAndColors[2]}`)
}

clanAndColors();



    /*
for (let i = 0; i < 3; i++) {
    numberedPairings.push(parseInt(pairings[i]));
    console.log(numberedPairings);
}*/


/*
switch  (numberedPairings)  {
    case "":
}*/
    