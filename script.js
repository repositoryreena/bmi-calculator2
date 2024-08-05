const height = document.getElementById("height")
const weight = document.getElementById("weight")
const bmi = document.getElementById("bmi")
const weightCondition = document.getElementById("weightcondition")
const computeBtn = document.getElementById("computebtn")

computeBtn.addEventListener("click", ()=>{
    bmi.value = weight.value/(height.value/100)**2
    if (bmi.value < 18.5){
        weightCondition.innerText=`Weight Condition: Underweight`
    }else if (bmi.value < 24.9){
        weightCondition.innerText= `Weight Condition: Normal weight`
    }else if (bmi.value < 29.9){
        weightCondition.innerText= `Weight Condition: Overweight`
    }else{
        weightCondition.innerText=`Weight Condition: Obesity`
    }
})

