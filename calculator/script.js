const btn = document.querySelectorAll(".btn")
const display = document.querySelector(".display")
const ac = document.querySelector(".clear")
const del = document.querySelector(".delete")
const equal = document.querySelector(".equal")

for (const btns of btn) {
    btns.addEventListener("click", function(){
        display.value += btns.value;
    })
}

ac.addEventListener('click', function () {
    display.value = ""
})

del.addEventListener('click', function () {
    display.value = display.value.toString().slice(0,-1)
})


equal.addEventListener('click', function () {
    display.value = eval(display.value)
})

