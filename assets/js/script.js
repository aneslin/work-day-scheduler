//const now = 16
const now = moment().hour()
let today = moment().format('MMMM Do YYYY');

/* var textareas = document.body.getElementsByTagName("textarea")
function setColors(){
for(let i = 0; i < textareas.length; i++){
    let x  = parseInt(textareas[i].getAttribute("data-hour"))
    if (x > now){
        console.log(x + " is in the future")
        textareas[i].classList.add("future")
    }
    else if (x === now){
        textareas[i].classList.add("present")
    } else { textareas[i].classList.add("past")} 
};
}
 */

function setColors(){
$("textarea").each(function(){
let x = $(this).data("hour")
    x = parseInt(x)
    if (x > now){
        $(this).addClass("future")}
    else if (x === now){
        $(this).addClass("present")
    } else{ $(this).addClass("past")}
    }
)
}

console.log($("button"))

/* add data element to text 
 * use > < = to apply css */

