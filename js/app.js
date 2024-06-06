var input_first = document.getElementById(`input_first`)
var ul = document.getElementById(`ul`)
var btn1 = document.getElementById(`btn1`)
var error = document.getElementById(`error`)

function start() {
    if (input_first.value == ``) {
        error.innerText = `Please enter some text ❌`
        setTimeout(() => {
            error.innerText = ``
        }, 3000);
    }
    else {
        ul.innerHTML += `<li id = 'li'>${input_first.value}</li> <button id="edit">Edit</button> <button id = 'delete'>Delete</button>`
        input_first.value = ``
    }

}

btn1.addEventListener(`click`, function () {
    start()
})

input_first.addEventListener(`keypress`, function (e) {
    if (e.key == 'Enter') {
        start()
    }
})