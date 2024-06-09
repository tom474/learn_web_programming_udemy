function loveCalculator() {
    // name1 = prompt("What is your name?: ");
    // name2 = prompt("What is their name?: ");

    var loveScore = Math.floor(Math.random() * 100) + 1;    // 1-100

    if (loveScore > 70) {
        console.log("Your love score is: " + loveScore + "%");
        console.log("You love each other like Kanye loves Kanye.")
    } else if (loveScore > 30 && loveScore <= 70) {
        console.log("Your love score is: " + loveScore + "%");
    } else {
        console.log("Your love score is: " + loveScore + "%");
        console.log("You go together like oil and water.")
    }

}

loveCalculator();