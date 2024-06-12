var input_first = document.getElementById(`input_first`)
var div_list = document.getElementById(`div_list`)
var btn_add = document.getElementById(`btn_add`)
var btn_dell = document.getElementById(`btn_dell`)
var count = `0`
input_first.focus();

function add() {
    if (input_first.value == ``) {
        Swal.fire("Please enter some text ❌");

    }

    else {
        ++count
        var input_first_value = `${input_first.value.slice(0, 1).toUpperCase()}${input_first.value.slice(1)}`
        div_list.innerHTML += `<div class='justify-content-center gap-2 py-2 div3 mb-5'><div class='list_item  d-flex align-items-center'><p class='mb-0 list_para' id='para'>${count}.  ${input_first_value}</p></div><button class="edit">Edit</button><button class="delete">Delete</button></div>`
        input_first.value = ``
    }

    div_list.addEventListener(`click`, function (e) {
        if (e.target.classList.contains(`edit`)) {
            Swal.fire({
                title: "Do you want to edit this list?",
                showDenyButton: true,
                confirmButtonText: "Yes",
                denyButtonText: `No`
            })

            .then((result) => {
                if (result.isConfirmed) {
                    var siblingDiv = e.target.previousElementSibling;
                    var siblingDiv_valu = siblingDiv.querySelector(`.list_para`).innerText.slice(2);
                    console.log(siblingDiv_valu);
                    e.target.parentElement.innerHTML = `<div class='list_item  d-flex align-items-center'><input type="text" id="input_second" placeholder="Enter text"></div><button id='save'>Save</button>`
                    var input_second = document.getElementById(`input_second`)
                    input_second.value = `${siblingDiv_valu}`
                    var save = document.getElementById(`save`)
                    input_second.focus();

                    function edit() {
                        if (input_second.value == ``) {
                            Swal.fire("Please enter some text ❌");
                        }
                        else {
                            ++count
                            var input_second_value = `${input_second.value.slice(0, 1).toUpperCase()}${input_second.value.slice(1)}`
                            input_second.parentElement.parentElement.innerHTML = `<div class='list_item  d-flex align-items-center'><p class='mb-0 list_para'>${count}.  ${input_second_value}</p></div><button class="edit">Edit</button><button class="delete">Delete</button>`
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
            });




        }

        else if (e.target.classList.contains('delete')) {
            Swal.fire({
                title: "Do you want to delete this list?",
                showDenyButton: true,
                confirmButtonText: "Yes",
                denyButtonText: `No`
            }).then((result) => {
                if (result.isConfirmed) {
                    e.target.parentElement.remove()
                }
            });

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

btn_dell.addEventListener(`click`, function (e) {
    if (div_list.innerHTML == ``) {
        Swal.fire("You have no list item!");
    }
    else {
        Swal.fire({
            title: "Do you want to delete To-do list?",
            showDenyButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `No`
        }).then((result) => {
            if (result.isConfirmed) {
                div_list.innerHTML = ``
                count = 0
            }
        });
    }
})

