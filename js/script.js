function blogPage(){
    location.href = 'blog.html';
}
function homePage(){
    location.href = 'index.html';
}

// Random Color generator
function getColor(elementId){
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = '#' + randomNumber.toString(16);
    document.getElementById(elementId).style.backgroundColor = randomCode;
}

// common calculation
function calculate(firstValue,secondValue){
    const valueOne = document.getElementById(firstValue).value;
    const valueTwo = document.getElementById(secondValue).value;
    const newValue = parseFloat(valueOne) * parseFloat(valueTwo);
    return newValue;
}

// triangle
document.getElementById('triangle-calculate').addEventListener('click',function(){
    const triangleArea = 0.5 * calculate('triangle-base','triangle-height');
    // console.log(triangleArea);
});

// Rectangle
document.getElementById('rectangle-calculate').addEventListener('click',function(){
    const rectangleArea = calculate('rectangle-width','rectangle-length');
    // console.log(rectangleArea);
});

// Parallelogram
document.getElementById('parallelogram-calculate').addEventListener('click',function(){
    const parallelogramArea = calculate('parallelogram-base','parallelogram-height');
    console.log(parallelogramArea);
});

// Rhombus
document.getElementById('rhombus-calculate').addEventListener('click',function(){
    const rhombusArea = 0.5 * calculate('rhombus-diagonal-one','rhombus-diagonal-two');
    console.log(rhombusArea);
});

// Pentagon
document.getElementById('pentagon-calculate').addEventListener('click',function(){
    const pentagonArea = 0.5 * calculate('pentagon-first-filed','pentagon-second-filed');
    console.log(pentagonArea);
});

// Ellipse
document.getElementById('ellipse-calculate').addEventListener('click',function(){
    const ellipseArea = 3.1416 * calculate('ellipse-a-axis','ellipse-b-axis');
    console.log(ellipseArea);
});