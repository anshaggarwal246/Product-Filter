function func() {
    let input = document.getElementById('input_area');
    if(!input) return;

    let str = input.value;

    if (str.length > 50) {
        input.value = '';
        for_count(0);
        input.style.borderColor = "red";
    }
    else {
        input.style.borderColor = "blue";
        for_count(str.length);
    }
}

function for_count(count1) {
    let val = document.getElementById("counter");
    if(val) val.innerText = count1;
}

function ffunt1() {
    let res = {};
    let inputs = document.querySelectorAll(".submit");

    inputs.forEach(i => {
        res[i.name] = i.value;
    });

    console.log(res);

    // CLEAR INPUTS AFTER REGISTER
    inputs.forEach(i => i.value = "");
}


// Theme toggle SAFE FIX
const btn=document.getElementById("THEME_CHANGER");
const body=document.body;

if(btn){
    if(localStorage.getItem("theme")==="light"){
        body.classList.add("light");
        btn.innerText="Dark Mode";
    }

    btn.onclick=()=>{
        body.classList.toggle("light");
        const t=body.classList.contains("light")?"light":"dark";
        localStorage.setItem("theme",t);
        btn.innerText=t==="light"?"Dark Mode":"Light Mode";
    };
}

// Product filter
function filterProducts(){
let s=document.getElementById("category");
if(!s) return;

let v=s.value;
let p=document.getElementsByClassName("product");

for(let i of p){
let c=i.getAttribute("data-category");
i.style.display=(v==="all"||v===c)?"block":"none";
}
}
