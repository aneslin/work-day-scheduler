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
let hourString = $(this).data("hour")
    hour = parseInt(hourString)
    if (hour > now){
        $(this).addClass("future")}
    else if (x === hour){
        $(this).addClass("present")
    } else{ $(this).addClass("past")}
    }
)
}


function save(saveobj){
    localStorage.setItem("toDo", JSON.stringify(saveobj))
}



//answer provided by https://stackoverflow.com/users/519413/rory-mccrossan
$("form").on("click", function(){
let saveText = $(this).find('textarea[name="task-name"]').val()
let saveId = $(this).find("textarea").attr("id")
let saveObj = { "id": saveId , "text": saveText}
save(saveObj)}
)


