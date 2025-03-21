 let c = document.getElementById("count")
// commenting mult lines = ctrl + k + c UNDO = ctrl + k + u

let count = 0
function increment(){
    count += 1
    c.innerText = count
}

let save = document.getElementById("save")
save.innerText = "Previous Clicks:  "
 function saveit(){
     save.innerText += " " + count + " -"
     count = 0
     c.innerText = 0
 }