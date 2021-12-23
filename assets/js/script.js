/* display current date */ 

let today = moment().format('MMMM Do YYYY');
console.log(today)
$("#currentDay").text(today);