var input_first = document.getElementById(`input_first`)
var paragraph = document.getElementById(`paragraph`)
var btn1 = document.getElementById(`btn1`)
var error = document.getElementById(`error`)
var divE = document.getElementById(`divE`)

function add() {
    if (input_first.value == ``) {
        error.innerText = `Please enter some text ❌`
        divE.classList.add(`divE`)
        setTimeout(() => {
            error.innerText = ``
            divE.classList.remove(`divE`)
        }, 3000);
    }
    else {
        paragraph.innerHTML += `<div class='div_li my-5 mx-4'><p id = 'para'>${input_first.value} <i class="bi bi-pencil-square edit"></i><i class="bi bi-trash-fill delete"></i> </p></div>`
        input_first.value = ``
    }

    paragraph.addEventListener(`click`, function (e) {
        if (e.target.classList.contains(`edit`)) {
            e.target.parentElement.innerHTML = `<input type="text" id="input_second" placeholder="Enter text"> <button id = 'save'><i class="bi bi-clipboard-check-fill"></i></button>`
            var input_second = document.getElementById(`input_second`)
            var save = document.getElementById(`save`)
            function edit() {
                if (input_second.value == ``) {
                    error.innerText = `Please enter some text ❌`
                    divE.classList.add(`divE`)
                    setTimeout(() => {
                        error.innerText = ``
                        divE.classList.remove(`divE`)
                    }, 3000);
                }
                else {
                    input_second.parentElement.innerHTML = `${input_second.value} <i class="bi bi-pencil-square edit"></i><i class="bi bi-trash-fill delete"></i> </li>`
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
        else if (e.target.classList.contains(`delete`)) {
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

// activ input when I press i
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key ==`i`) {
        input_first.focus();
    }
})