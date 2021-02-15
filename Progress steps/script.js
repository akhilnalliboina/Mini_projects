const prev= document.getElementById('prev')
const next= document.getElementById('next')
const circles=document.querySelectorAll('.circle')
const progress= document.getElementById('progress')

let currentStep = 1

next.addEventListener('click',()=>{
    currentStep++
    if(currentStep>circles.length){
        currentStep=circles.length
    }
    update()
})


prev.addEventListener('click',()=>{
    currentStep--
    if(currentStep<1){
        currentStep=1
    }
    
    update()
})

function update(){
    circles.forEach((circle,idx)=>{
        if(idx<currentStep){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    if(currentStep==1){
        prev.disabled=true
    } else if(currentStep==circles.length){
        next.disabled=true
    } else {
        prev.disabled=false
        next.disabled=false
    }

    progress.style.width= (currentStep-1)/(circles.length-1)*100 +'%'

}