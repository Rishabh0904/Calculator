var flag = true;
var extend = document.querySelector("#extend");
function add(e) {
    e.preventDefault();
    console.log(e);
    if (flag == false) {
        flag = true;
        e.currentTarget.children[0].innerText = "";
        extend.nextSibling.parentNode.removeChild(extend.nextSibling);
    } else {

        e.currentTarget.children[0].innerText = "";
        console.log("clicked!!!");
        var divRow = document.createElement("div");
        divRow.classList.add("row");
        divRow.classList.add("new-row")
        divRow.innerHTML = ` <div class="col rounded"><a>sin</a></div>
                    <div class="col rounded"><a>cos</a></div>
                    <div class="col rounded"><a>tan</a></div>
                    <div class="col rounded"><a>^</a></div>`
        if (extend.nextSibling && flag == true) {
            console.log("hello");
            extend.parentNode.insertBefore(divRow, extend.nextSibling);
            flag = false;
            let buttons = document.querySelectorAll(".col");
            for (button of buttons) {
                button.addEventListener('click', calculation)
            }
        }
    }
}
extend.addEventListener("click", add);
let ans = '';
function calculation(e){
    buttonText = e.target.innerText;
    if(buttonText == 'C'){
        screen.value = "";
        ans = "";
        console.log("hello");
    }else if(buttonText == "="){
        screen.value = eval(ans);
        ans = screen.value;

    }else if(buttonText == "sin"){
        ans += buttonText;
        screen.value = ans;
        if(buttonText == "("){
            let str = '';
            while(buttonText != ")"){
                str = str + buttonText;
            }
            ans += buttonText;
            screen.value = ans;
            let val = Math.sin(str)
            screen.value = val;
        }

    }else{
        ans += buttonText;
        screen.value = ans
    }
    // console.log(buttonText);
}

let screen = document.querySelector(".text");
let buttons = document.querySelectorAll(".col");
for (button of buttons) {
    button.addEventListener('click', calculation)
}
