// var btn = document.querySelector(".hs");
// function myScript(e){
//     e.preventDefault();
//     console.log("clicked!!!");
// }
// btn.addEventListener("click", myScript);

var flag = true;
var extend = document.querySelector("#extend");
function myScript(e) {
    e.preventDefault();
    console.log(e);
    if (flag == false) {
        flag = true;
        e.currentTarget.children[0].innerText = "v";
        extend.nextSibling.parentNode.removeChild(extend.nextSibling);
    } else {

        e.currentTarget.children[0].innerText = "dvksd";
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
        }
    }
}
extend.addEventListener("click", myScript);
