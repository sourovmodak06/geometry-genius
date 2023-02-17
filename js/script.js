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
    console.log(rectangleArea);
});