const panels= document.querySelectorAll('.panel')
console.log(panels)

panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removeactiveclass();
        panel.classList.add('active')
    })
})

function removeactiveclass(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}