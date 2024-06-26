const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
let ronde = 0;
let gewonnen = 0;
let PC = 0;

const rps =  {
    1: "steen",
    2: "papier",
    3: "schaar"
}




rock.addEventListener("click", function() {

    if (ronde >= 3){
        if (gewonnen == PC){
            document.getElementById("status-msg").innerHTML = "<h3> Gelijkspel!</h3>"
            document.getElementById("status-msg").style.backgroundColor = 'rgba(30, 78, 255, 0.539)'
        }
        if (gewonnen > PC){
            document.getElementById("status-msg").innerHTML = "<h3> Je hebt gewonnen!</h3>"
            document.getElementById("status-msg").style.backgroundColor = 'rgb(38, 253, 110)'
        }
        if (gewonnen < PC){
            document.getElementById("status-msg").innerHTML = "<h3> Je hebt verloren!</h3>"
            document.getElementById("status-msg").style.backgroundColor = 'rgb(239, 65, 22)'
        }
        return;
    }
    document.getElementById("message_box").innerHTML = "Je kiest: steen!!"
    document.getElementById("player").style.backgroundImage = "url('http://localhost/js%20steenpapierschaar/images/steen.png')"

    let randomNumber = Math.floor(Math.random() * 3) + 1
    const computerChoice = rps[randomNumber]
    document.getElementById("message_box").innerHTML += "  Computer kiest: " + computerChoice
    document.getElementById("PC").style.backgroundImage = "url('http://localhost/js%20steenpapierschaar/images/" + computerChoice + ".png')"

    if(computerChoice == "papier") {
        document.getElementById("ronde-status").innerHTML = "Je hebt deze ronde verloren"
        PC++
    }
    if (computerChoice == "schaar"){
        document.getElementById("ronde-status").innerHTML = "Je hebt deze ronde gewonnen"
        gewonnen++
    }
    if (computerChoice == "steen"){
        document.getElementById("ronde-status").innerHTML = "Deze ronde is gelijkspel"
        PC++
        gewonnen++
    }
    
   console.log(gewonnen, PC)
    ronde++
    document.getElementById("ronde-box").innerHTML = "Ronde: " + ronde + "."
})

paper.addEventListener("click", function() {

    if (ronde >= 3){
        if (gewonnen == PC){
            document.getElementById("status-msg").innerHTML = "<h3> Gelijkspel!</h3>"
            document.getElementById("status-msg").style.backgroundColor = 'rgba(30, 78, 255, 0.539)'
        }
        if (gewonnen > PC){
            document.getElementById("status-msg").innerHTML = "<h3> Je hebt gewonnen!</h3>"
            document.getElementById("status-msg").style.backgroundColor = 'rgb(38, 253, 110)'
        }if (gewonnen < PC){
            document.getElementById("status-msg").innerHTML = "<h3> Je hebt verloren!</h3>"
            document.getElementById("status-msg").style.backgroundColor = 'rgb(239, 65, 22)'
        }
        return;
    }
    document.getElementById("message_box").innerHTML = "Je kiest: papier!!"
    document.getElementById("player").style.backgroundImage = "url('http://localhost/js%20steenpapierschaar/images/papier.png')"
    let randomNumber = Math.floor(Math.random() * 3) + 1
    const computerChoice = rps[randomNumber]
    document.getElementById("message_box").innerHTML += "  Computer kiest: " + computerChoice
    document.getElementById("PC").style.backgroundImage = "url('http://localhost/js%20steenpapierschaar/images/" + computerChoice + ".png')"

    if (computerChoice == "schaar"){
        document.getElementById("ronde-status").innerHTML = "Je hebt deze ronde verloren"
       
        PC++
    }
    if (computerChoice == "steen") {
        document.getElementById("ronde-status").innerHTML = "Je hebt deze ronde gewonnen"
        gewonnen++
    }
    if (computerChoice == "papier"){
        document.getElementById("ronde-status").innerHTML = "Deze ronde is gelijkspel"
        PC++
        gewonnen++
    }
    console.log(gewonnen, PC)
    ronde++
    document.getElementById("ronde-box").innerHTML = "Ronde: " + ronde + "."
})

scissors.addEventListener("click", function() {

    if (ronde >= 3){
        if (gewonnen == PC){
            document.getElementById("status-msg").innerHTML = "<h3> Gelijkspel!</h3>"
            document.getElementById("status-msg").style.backgroundColor = 'rgba(30, 78, 255, 0.539)'
        }
        if (gewonnen > PC){
            document.getElementById("status-msg").innerHTML = "<h3> Je hebt gewonnen!</h3>"
            document.getElementById("status-msg").style.backgroundColor = 'rgb(38, 253, 110)'
        } if (gewonnen < PC){
            document.getElementById("status-msg").innerHTML = "<h3> Je hebt verloren!</h3>"
            document.getElementById("status-msg").style.backgroundColor = 'rgb(239, 65, 22)'
        }
        return;
    }
    document.getElementById("message_box").innerHTML = "Je kiest: schaar!!"
    document.getElementById("player").style.backgroundImage = "url('http://localhost/js%20steenpapierschaar/images/schaar.png')"
    let randomNumber = Math.floor(Math.random() * 3) + 1
    const computerChoice = rps[randomNumber]
    document.getElementById("message_box").innerHTML += "  Computer kiest: " + computerChoice
    document.getElementById("PC").style.backgroundImage = "url('http://localhost/js%20steenpapierschaar/images/" + computerChoice + ".png')"

    if (computerChoice == "steen"){
        document.getElementById("ronde-status").innerHTML = "Je hebt deze ronde verloren"
        PC++
    }
    if (computerChoice == "papier") {
        document.getElementById("ronde-status").innerHTML = "Je hebt deze ronde gewonnen"
        gewonnen++
    }
    if (computerChoice == "schaar"){
        document.getElementById("ronde-status").innerHTML = "Deze ronde is gelijkspel"
        PC++
        gewonnen++
    }
    
    console.log(gewonnen, PC)
    ronde++
    document.getElementById("ronde-box").innerHTML = "Ronde: " + ronde + "."
})



