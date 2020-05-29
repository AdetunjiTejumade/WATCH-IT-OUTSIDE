function openNav() {
    document.getElementById("smallNav").style.width = "100%"
}

function closeNav() {
    document.getElementById("smallNav").style.width = "0%"
}
const setDate = document.getElementById("set-date")
const btns = document.querySelectorAll('.res-btn')
const links = document.querySelectorAll('.overlay-links')

// overlay-links

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", () => {
        console.log(links[1])
        closeNav();
    })
}


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
        switch (btns[i].value) {
            case "knife-out":
                setDate.value = "2020-07-05 : KNIFES OUT"
                break;
            case "the-great":
                setDate.value = "2020-07-06 : THE GREAT"
                break;
            case "future-man":
                setDate.value = "2020-07-07 : FUTURE MAN"
                break;
            case "summertime":
                setDate.value = "2020-07-07 : SUMMERTIME"
                break;
            case "inTheDark":
                setDate.value = "2020-07-08 : IN THE DARK"
                break;
            case "dangerousGame":
                setDate.value = "2020-07-08 : MOST DANGEROUS GAME"
                break;
            default:
                break;
        }
        //  console.log("Teju")
    })
}


// const btn = document.getElementById("res-btn")
// var a = ["teju","tolu", "Timi"]

/*


btn.addEventListener('click', () => {
    console.log("Clicked")
})*/