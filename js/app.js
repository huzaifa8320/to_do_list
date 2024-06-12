var input_first = document.getElementById(`input_first`)
var div_list = document.getElementById(`div_list`)
var btn_add = document.getElementById(`btn_add`)
var btn_dell = document.getElementById(`btn_dell`)
var count = `0`

function add() {
    if (input_first.value == ``) {
        Swal.fire("Please enter some text ❌");

    }
    else {
        ++count
        var input_first_value = `${input_first.value.slice(0, 1).toUpperCase()}${input_first.value.slice(1)}`
        div_list.innerHTML += `<div class='d-flex justify-content-center  gap-2 py-3'><div class='list_item  d-flex align-items-center px-4'><p class='mb-0 list_para' id='para'>${count}.  ${input_first_value}</p></div><button class="edit">Edit</button><button class="delete">Delete</button></div>`
        input_first.value = ``
    }

    div_list.addEventListener(`click`, function (e) {
        if (e.target.classList.contains(`edit`)) {
            e.target.parentElement.innerHTML = `<div class='list_item  d-flex align-items-center px-4'><input type="text" id="input_second" placeholder="Enter text"></div><button id='save'>Save</button>`
            var input_second = document.getElementById(`input_second`)
           
            var save = document.getElementById(`save`)
            function edit() {
                if (input_second.value == ``) {
                    Swal.fire("Please enter some text ❌");
                }
                else {
                    ++count
                    var input_second_value = `${input_second.value.slice(0, 1).toUpperCase()}${input_second.value.slice(1)}`
                    input_second.parentElement.parentElement.innerHTML = `<div class='list_item  d-flex align-items-center px-4'><p class='mb-0 list_para'>${count}.  ${input_second_value}</p></div><button class="edit">Edit</button><button class="delete">Delete</button>`
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
        else if (e.target.classList.contains('delete')) {
            e.target.parentElement.remove()
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

btn_dell.addEventListener(`click` , function(e){
    div_list.innerHTML = ``
    count = 0
})

