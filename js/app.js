var input_first = document.getElementById(`input_first`)
var div_list = document.getElementById(`div_list`)
var btn_add = document.getElementById(`btn_add`)
var error = document.getElementById(`error`)
var count = `0`

function add() {
    if (input_first.value == ``) {
        Swal.fire("Please enter some text ❌");
       
    }
    else {
        ++count
        var input_value = `${input_first.value.slice(0, 1).toUpperCase()}${input_first.value.slice(1)}`
        div_list.innerHTML += `<div class='d-flex justify-content-center  gap-2 py-3'><div class='list_item  d-flex align-items-center px-4'><p class='mb-0 list_para'>${count}.  ${input_value}</p></div><button id="edit">Edit</button><button id="delete">Delete</button></div>`
        input_first.value = ``
    }

    div_list.addEventListener(`click`, function (e) {
        if (e.target.id ==`edit`) {
            // e.target.parentElement.parentElement.parentElement.innerHTML = `<div class='d-flex justify-content-center  gap-2 py-3'><div class='list_item  d-flex align-items-center px-4'><input type="text" id="input_second" placeholder="Enter text"></div> <button id = 'save'>Save</button></div>`
            e.target.parentElement.parentElement.innerHTML = `<div class='d-flex justify-content-center  gap-2 py-3'><div class='list_item  d-flex align-items-center px-4'><input type="text" id="input_second" placeholder="Enter text"></div><button id="edit">Edit</button><button id="delete">Delete</button></div>`
            var input_second= document.getElementById(`input_second`)
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
                    input_value = `${input_second.value.slice(0, 1).toUpperCase()}${input_second.value.slice(1)}`
                    input_second.parentElement.parentElement.innerHTML = `<div class='d-flex justify-content-center  gap-2 py-3'><div class='list_item  d-flex align-items-center px-4'><p class='mb-0 list_para'>${count}.  ${input_value}</p></div><button id="edit">Edit</button><button id="delete">Delete</button></div>`
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



btn_add.addEventListener(`click`, function () {
    add()
})

input_first.addEventListener(`keypress`, function (e) {
    if (e.key == 'Enter') {
        add()
    }
})

// activ input when I press i
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key == `i`) {
        input_first.focus();
    }
})



