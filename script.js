let inputWeight = document.querySelector("#col-weight");
let inputHeight = document.querySelector("#col-height");
let hasil = document.querySelector("#hasil");
let height;
let weight;
let hasilBmi;
let BMI;

document.querySelector("#formulir").addEventListener("submit", function(event) {
    event.preventDefault();
    weight = inputWeight.value;
    height = inputHeight.value;
    BMI = weight/(height/100)**2;
    hasilBmi = (Number(BMI.toFixed(1)));

    if(BMI < 18.5){
        hasil.innerHTML = `<p>Your BMI is <b>${hasilBmi}</b> which means You are <b>Under</b></p>`
    } else if(BMI < 24.9){
        hasil.innerHTML = `<p>Your BMI is <b>${hasilBmi}</b> which means You are <b>Normal</b></p>`
    } else if(BMI < 29.9){
        hasil.innerHTML = `<p>Your BMI is <b>${hasilBmi}</b> which means You are <b>Over</b></p>`
    }else if(BMI > 30){
        hasil.innerHTML = `<p>Your BMI is <b>${hasilBmi}</b> which means You are <b>Obesity</b></p>`
    }else{
    }
})
