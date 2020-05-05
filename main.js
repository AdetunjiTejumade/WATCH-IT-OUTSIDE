function openNav(){
    document.getElementById("smallNav").style.width = "100%"
}

function closeNav(){
    document.getElementById("smallNav").style.width = "0%"
}
const setDate = document.getElementById("set-date")
const btns = document.querySelectorAll('.res-btn')


 for(let i = 0; i < btns.length; i++){
     btns[i].addEventListener("click", () => {
         switch (btns[i].value) {
             case "knife-out":
                setDate.value = "2020-05-15"
                 break;
            case "the-great":
                setDate.value = "2020-05-20"
                 break;
            case "future-man":
                setDate.value = "2020-05-23"
                 break;
            case "summertime":
                setDate.value = "2020-05-27"
                break;
            case "inTheDark":
                setDate.value = "2020-05-29"
                break;
            case "dangerousGame":
                setDate.value = "2020-05-30"
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