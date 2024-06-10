var input_first = document.getElementById(`input_first`)
var ul = document.getElementById(`ul`)
var btn1 = document.getElementById(`btn1`)
var error = document.getElementById(`error`)

function add() {
    if (input_first.value == ``) {
        error.innerText = `Please enter some text ❌`
        setTimeout(() => {
            error.innerText = ``
        }, 3000);
    }
    else {
        ul.innerHTML += `<li id = 'li'>${input_first.value} <button class="edit"><i class="bi bi-pencil-square"></i></button> <button class = 'delete'><i class="bi bi-trash-fill"></i></button> </li>`
        input_first.value = ``
    }

    ul.addEventListener(`click`, function (e) {
        if (e.target.parentElement.classList.contains(`edit`)) {
            e.target.parentElement.parentElement.innerHTML = `<input type="text" id="input_second" placeholder="Enter text"> <button id = 'save'><i class="bi bi-clipboard-check-fill"></i></button>`
            var input_second = document.getElementById(`input_second`)
            var save = document.getElementById(`save`)
            function edit() {
                if (input_second.value == ``) {
                    error.innerText = `Please enter some text ❌`
                    setTimeout(() => {
                        error.innerText = ``
                    }, 3000);
                }
                else {
                    input_second.parentElement.innerHTML = `${input_second.value} <button class="edit"><i class="bi bi-pencil-square"></i></button> <button class="delete"><i class="bi bi-trash-fill"></i></button>`
                }
            }
            input_second.addEventListener(`keypress`, function (e) {
                if (e.key == 'Enter') {
                    edit()
                }
            })
            save.addEventListener(`click`, function () {
                edit()
            })
        }
        else if (e.target.parentElement.classList.contains(`delete`)) {
            e.target.parentElement.parentElement.remove()
        }
    })

}



btn1.addEventListener(`click`, function () {
    add()
})

input_first.addEventListener(`keypress`, function (e) {
    if (e.key == 'Enter') {
        add()
    }
})