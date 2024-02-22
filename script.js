const result = document.querySelector("#result");

let pointsHuman = 0
let pointsMachine = 0

const humanPlay = (humanChoice) => {
    playTheGame(humanChoice, machinePlay());
};

const machinePlay = (machineChoice) => {
    const choices = ["rock", "paper", "scissors"];

    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
};

const playTheGame = (human, machine) => {
    console.log(human, machine);

    if (human === machine) {
        result.src = "./assets/empate.png";
    } else if (
        (human === "paper" && machine === "scissors") ||
        (human === "scissors" && machine === "rock") ||
        (human === "rock" && machine === "paper")
    ) {
        pointsMachine ++
        document.querySelector('#machine-score span').innerHTML = pointsMachine
        result.src = "./assets/perdeu.png";
    } else {
        pointsHuman ++
        document.querySelector('#human-score span').innerHTML = pointsHuman
        result.src = "./assets/ganhou.png";
    }
};

// pedra > papel > tesoura
