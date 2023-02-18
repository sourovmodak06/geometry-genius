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

// validation
function validation(element,elementId){
    document.getElementById(elementId).innerText = element.value;
        if(isNaN(element.value)){
            document.getElementById(elementId).innerText = 'Please enter number only❌';
        }
        else{
            document.getElementById(elementId).innerText = '';
            if (element.value.length === 0) {
                    document.getElementById(elementId).innerText = 'Please enter number❎';
            }
            else if(parseFloat(element.value) <= 0){
                document.getElementById(elementId).innerText = 'Please enter positive number❌';
            }
            else{
                document.getElementById(elementId).innerText = '';
            }
        }
}


// triangle
document.getElementById('triangle-calculate').addEventListener('click',function(){
    const triangleArea = 0.5 * calculate('triangle-base','triangle-height');
    const triangleAreaFixed = triangleArea.toFixed(2);
    console.log(triangleAreaFixed);
});

// Rectangle
document.getElementById('rectangle-calculate').addEventListener('click',function(){
    const rectangleArea = calculate('rectangle-width','rectangle-length');
    const rectangleAreaFixed = rectangleArea.toFixed(2);
    console.log(rectangleAreaFixed);
});

// Parallelogram
document.getElementById('parallelogram-calculate').addEventListener('click',function(){
    const parallelogramArea = calculate('parallelogram-base','parallelogram-height');
    const parallelogramAreaFixed = parallelogramArea.toFixed(2);
    console.log(parallelogramAreaFixed);
});

// Rhombus
document.getElementById('rhombus-calculate').addEventListener('click',function(){
    const rhombusArea = 0.5 * calculate('rhombus-diagonal-one','rhombus-diagonal-two');
    const rhombusAreaFixed = rhombusArea.toFixed(2);
    console.log(rhombusAreaFixed);
});

// Pentagon
document.getElementById('pentagon-calculate').addEventListener('click',function(){
    const pentagonArea = 0.5 * calculate('pentagon-first-filed','pentagon-second-filed');
    const pentagonAreaFixed = pentagonArea.toFixed(2);
    console.log(pentagonAreaFixed);
});

// Ellipse
document.getElementById('ellipse-calculate').addEventListener('click',function(){
    const ellipseArea = 3.1416 * calculate('ellipse-a-axis','ellipse-b-axis');
    const ellipseAreaFixed = ellipseArea.toFixed(2);
    console.log(ellipseAreaFixed);
});