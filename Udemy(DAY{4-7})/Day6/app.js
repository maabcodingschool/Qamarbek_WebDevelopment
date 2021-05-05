const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const trigggerBottom = window.innerHeight / 5* 4
    boxes.forEach(box=>{
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < trigggerBottom){
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}