const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

const rps =  {
    1: "rock",
    2: "paper",
    3: "scissors"
}

rock.addEventListener("click", function() {
    document.getElementById("message_box").innerHTML = "Je kiest: steen!!"
    document.getElementById("player").style.backgroundImage = "url('http://localhost/js%20steenpapierschaar/images/rock.png')"
    let randomNumber = Math.floor(Math.random() * 3) + 1
    
    const computerChoice = rps[randomNumber]
    document.getElementById("message_box").innerHTML += "  Computer kiest: " + computerChoice
    if(computerChoice == "paper") {
        document.getElementById("status-msg").innerHTML = "<h3> Je hebt verloren!</h3>"
        document.getElementById("status-msg").style.backgroundColor = 'rgb(239, 65, 22)'
    }
    if (computerChoice == "scissors"){
        document.getElementById("status-msg").innerHTML = "<h3> Je hebt gewonnen!</h3>"
        document.getElementById("status-msg").style.backgroundColor = 'rgb(38, 253, 110)'
    }
    if (computerChoice == "rock") {
        document.getElementById("status-msg").innerHTML = "<h3> Het is gelijkspel!</h3>"
        document.getElementById("status-msg").style.backgroundColor = 'rgb(49, 231, 251)'
    }
     
})

paper.addEventListener("click", function() {
    document.getElementById("message_box").innerHTML = "Je kiest: papier!!"
    let randomNumber = Math.floor(Math.random() * 3) + 1
    const computerChoice = rps[randomNumber]
    document.getElementById("message_box").innerHTML += "  Computer kiest: " + computerChoice

    if(computerChoice == "paper") {
        document.getElementById("status-msg").innerHTML = "<h3> Het is gelijkspel!</h3>"
        document.getElementById("status-msg").style.backgroundColor = 'rgb(49, 231, 251)'
    }
    if (computerChoice == "scissors"){
        document.getElementById("status-msg").innerHTML = "<h3> Je hebt verloren!</h3>"
        document.getElementById("status-msg").style.backgroundColor = 'rgb(239, 65, 22)'
    }
    if (computerChoice == "rock") {
        document.getElementById("status-msg").innerHTML = "<h3> Je hebt gewonnen!</h3>"
        document.getElementById("status-msg").style.backgroundColor = 'rgb(38, 253, 110)'
    }
})

scissors.addEventListener("click", function() {
    document.getElementById("message_box").innerHTML = "Je kiest: schaar!!"
    let randomNumber = Math.floor(Math.random() * 3) + 1
    const computerChoice = rps[randomNumber]
    document.getElementById("message_box").innerHTML += "  Computer kiest: " + computerChoice

    if(computerChoice == "scissors") {
        document.getElementById("status-msg").innerHTML = "<h3> Het is gelijkspel!</h3>"
        document.getElementById("status-msg").style.backgroundColor = 'rgb(49, 231, 251)'
    }
    if (computerChoice == "rock"){
        document.getElementById("status-msg").innerHTML = "<h3> Je hebt verloren!</h3>"
        document.getElementById("status-msg").style.backgroundColor = 'rgb(239, 65, 22)'
    }
    if (computerChoice == "paper") {
        document.getElementById("status-msg").innerHTML = "<h3> Je hebt gewonnen!</h3>"
        document.getElementById("status-msg").style.backgroundColor = 'rgb(38, 253, 110)'
    }
})



