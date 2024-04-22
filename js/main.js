const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

const rps =  {
    1: "steen",
    2: "papier",
    3: "schaar"
}

rock.addEventListener("click", function() {
    document.getElementById("message_box").innerHTML = "Je kiest: steen!!"
    document.getElementById("player").style.backgroundImage = "url('http://localhost/js%20steenpapierschaar/images/steen.png')"

    let randomNumber = Math.floor(Math.random() * 3) + 1
    const computerChoice = rps[randomNumber]
    document.getElementById("message_box").innerHTML += "  Computer kiest: " + computerChoice
    document.getElementById("PC").style.backgroundImage = "url('http://localhost/js%20steenpapierschaar/images/" + computerChoice + ".png')"

    if(computerChoice == "papier") {
        document.getElementById("status-msg").innerHTML = "<h3> Je hebt verloren!</h3>"
        document.getElementById("status-msg").style.backgroundColor = 'rgb(239, 65, 22)'
    }
    if (computerChoice == "schaar"){
        document.getElementById("status-msg").innerHTML = "<h3> Je hebt gewonnen!</h3>"
        document.getElementById("status-msg").style.backgroundColor = 'rgb(38, 253, 110)'
    }
    if (computerChoice == "steen") {
        document.getElementById("status-msg").innerHTML = "<h3> Het is gelijkspel!</h3>"
        document.getElementById("status-msg").style.backgroundColor = 'rgb(49, 231, 251)'
    }
     
})

paper.addEventListener("click", function() {
    document.getElementById("message_box").innerHTML = "Je kiest: papier!!"
    document.getElementById("player").style.backgroundImage = "url('http://localhost/js%20steenpapierschaar/images/papier.png')"
    let randomNumber = Math.floor(Math.random() * 3) + 1
    const computerChoice = rps[randomNumber]
    document.getElementById("message_box").innerHTML += "  Computer kiest: " + computerChoice
    document.getElementById("PC").style.backgroundImage = "url('http://localhost/js%20steenpapierschaar/images/" + computerChoice + ".png')"

    if(computerChoice == "papier") {
        document.getElementById("status-msg").innerHTML = "<h3> Het is gelijkspel!</h3>"
        document.getElementById("status-msg").style.backgroundColor = 'rgb(49, 231, 251)'
    }
    if (computerChoice == "schaar"){
        document.getElementById("status-msg").innerHTML = "<h3> Je hebt verloren!</h3>"
        document.getElementById("status-msg").style.backgroundColor = 'rgb(239, 65, 22)'
    }
    if (computerChoice == "steen") {
        document.getElementById("status-msg").innerHTML = "<h3> Je hebt gewonnen!</h3>"
        document.getElementById("status-msg").style.backgroundColor = 'rgb(38, 253, 110)'
    }
})

scissors.addEventListener("click", function() {
    document.getElementById("message_box").innerHTML = "Je kiest: schaar!!"
    document.getElementById("player").style.backgroundImage = "url('http://localhost/js%20steenpapierschaar/images/schaar.png')"
    let randomNumber = Math.floor(Math.random() * 3) + 1
    const computerChoice = rps[randomNumber]
    document.getElementById("message_box").innerHTML += "  Computer kiest: " + computerChoice
    document.getElementById("PC").style.backgroundImage = "url('http://localhost/js%20steenpapierschaar/images/" + computerChoice + ".png')"

    if(computerChoice == "schaar") {
        document.getElementById("status-msg").innerHTML = "<h3> Het is gelijkspel!</h3>"
        document.getElementById("status-msg").style.backgroundColor = 'rgb(49, 231, 251)'
    }
    if (computerChoice == "steen"){
        document.getElementById("status-msg").innerHTML = "<h3> Je hebt verloren!</h3>"
        document.getElementById("status-msg").style.backgroundColor = 'rgb(239, 65, 22)'
    }
    if (computerChoice == "papier") {
        document.getElementById("status-msg").innerHTML = "<h3> Je hebt gewonnen!</h3>"
        document.getElementById("status-msg").style.backgroundColor = 'rgb(38, 253, 110)'
    }
})



