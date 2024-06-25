const score = document.querySelector(".score");
const home = document.querySelector(".home");
const about = document.querySelector(".about_us");
const team = document.querySelectorAll(".team");
const first_team = document.querySelector(".first_team");
const second_team = document.querySelector(".second_team");
const batting_team = document.querySelector("#bteam");
const enter = document.querySelector(".enter");
const benter = document.querySelector(".benter");
const team1 = document.querySelector(".team1");
const team2 = document.querySelector(".team2");
const batting = document.querySelector(".batting");
const new_over = document.querySelector(".over");
const new_match = document.querySelector(".match");
const new_inning = document.querySelector(".inning");
const run = document.querySelector(".run");
const overs = document.querySelector(".overs");
const wickets = document.querySelector(".wickets");
const keys = document.querySelectorAll(".key");
const balls = document.querySelector(".balls");
const result1 = document.querySelector(".team1_result");
const result2 = document.querySelector(".team2_result");



let ft = "";
let st = "";
let bt = "";

enter.addEventListener('click', (event) => {
    ft = first_team.value;
    st = second_team.value;

    team1.textContent = first_team.value;
    team2.textContent = second_team.value;

    event.preventDefault();
});

benter.addEventListener('click', () => {

    if (batting_team.value == ft || batting_team.value == st) {
        bt = batting_team.value;
        batting.textContent = batting_team.value;
    }
    else {
        alert("enter valid team!");
    }
})




let ball = 0;
let sum = 0;
let wicket = 0;
let over = 0.0;
let temp_over = 0;
let temp = 0.0;
let run1 = 100000000;
let inning = 0;


for (let key of keys) {
    key.addEventListener('click', () => {

        let num = key.textContent;
        const div = document.createElement("div");
        div.className = "box";
        div.style.border = "2px solid white";
        div.style.height = "75px";
        div.style.width = "75px";
        div.style.margin = "5px";
        div.style.borderRadius = "100px";
        div.style.backgroundColor = "black";
        div.style.textAlign = "center";
        div.style.paddingTop = "18px";
        div.style.fontSize = "30px";
        if (num == "Wide") {
            div.textContent = "WD";
            sum = sum + 1;
        }
        else if (num == "Wicket" && wicket <= 10) {
            div.style.backgroundColor = "white";
            div.style.color = "black";
            div.style.border = "3px solid black"
            div.textContent = "W";
            wicket += 1;
            updateOver();
            ball++;
        }
        else if (num == "No Ball") {
            div.textContent = "NB";
            sum += 1;
        }
        else {
            div.textContent = num;
            sum += +num;
            updateOver();
            ball++;
        }
        if (ball < 7) {
            console.log("hello", ball);
            balls.appendChild(div);
        }
        run.textContent = sum;
        wickets.textContent = wicket;
        overs.textContent = over.toFixed(1);
        if (wicket == 10) {
            alert("match over");
        }


    })
}

function next_inning()
{
    if (result1.textContent == "" && result2.textContent == "") {
        temp_over = over.toFixed(1);
        result1.textContent = `${bt} : ${sum}-${wicket} / ${over.toFixed(1)}`;
    }
    else {
        result2.textContent = `${bt} : ${sum}-${wicket} / ${over.toFixed(1)}`;
    }
}


function updateOver() {
    if (temp == 0.5) {
        alert("pleace select new over button");
        over += 0.5;
        temp = 0.0;
        if (over.toFixed(1) == temp_over) {
            if (sum < run1) {
                alert(`${bt} is lose the match,
                    match over`);
                    next_inning();  
            }
            else {
                alert(`${bt} win the match,
                    match over`);
                    new_inning();
            }
        }

    } else {
        console.log("sum",sum,"run1",run1);
        temp += 0.1;
        over += 0.1;
        if (sum > run1) {
            alert(`${bt} is won the match,
                match over`);
                next_inning();
        }

    }
}

new_over.addEventListener('click', () => {
    temp = 0.0;
    console.log("hello");
    const boxs = document.querySelectorAll(".box");
    console.log(boxs);
    for (let box of boxs) {
        balls.removeChild(box);
    }
    ball = 0;
})

new_match.addEventListener('click', () => {
    team1.textContent = "";
    team2.textContent = "";
    batting.textContent = "";
    first_team.value = ""
    second_team.value = ""
    batting_team.value = ""
    run.textContent = "0";
    wickets.textContent = "0";
    overs.textContent = "0.0";
    run1=100000000;
    sum = 0;
    wicket = 0;
    over = 0.0;
    temp = 0.0;
    const boxs = document.querySelectorAll(".box");
    console.log(boxs);
    for (let box of boxs) {
        balls.removeChild(box);
    }
    ball = 0;
    ft = "";
    st = "";
})


new_inning.addEventListener('click', ()=> {

    if (result1.textContent == "" && result2.textContent == "") {
        temp_over = over.toFixed(1);
        result1.textContent = `${bt} : ${sum}-${wicket} / ${over.toFixed(1)}`;
    }
    else {
        result2.textContent = `${bt} : ${sum}-${wicket} / ${over.toFixed(1)}`;
    }
    if (batting.textContent == ft) {
        bt = st;
        batting.textContent = st;
    }
    else {
        bt = ft;
        batting.textContent = ft;

    }
    run.textContent = "0";
    wickets.textContent = "0";
    overs.textContent = "0.0";
    run1 = sum;
    sum = 0;
    wicket = 0;
    over = 0.0;
    temp = 0.0;
    const boxs = document.querySelectorAll(".box");
    console.log(boxs);
    for (let box of boxs) {
        balls.removeChild(box);
    }
    ball = 0;
    inning++;
    // console.log("before run copy sum",sum);

    console.log("run copy",run1);
})

function go_score() {
    score.scrollIntoView();
}
function go_home() {
    home.scrollIntoView();
}
function go_about() {
    about.scrollIntoView();
}