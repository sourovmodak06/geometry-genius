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

    if (valueOne == "") {
        alert('Please Enter First Value');
    }
    else if(valueTwo == ""){
        alert('Please Enter Second Value');
    } 
    else {
        const newValue = parseFloat(valueOne) * parseFloat(valueTwo);
        return newValue;
    }
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
// Name 
function nameOfArea(elementIdData){
    const nameData = document.getElementById(elementIdData).innerText;
    return nameData;
}

// Edit 
function editValue(elementId) {
    document.getElementById(elementId).style.display ='block';
}
// serial area calculation
let serial = 0;

// triangle
document.getElementById('triangle-calculate').addEventListener('click',function(){
    serial += 1;
    const triangleArea = 0.5 * calculate('triangle-base','triangle-height');
    const triangleAreaFixed = triangleArea.toFixed(2);
    
    const name = nameOfArea('nameTriangle');
    displayData(name,triangleArea);
});
document.getElementById('triangle-edit').addEventListener('click',function(){
    editValue('triangle-show');
});

// Rectangle
document.getElementById('rectangle-calculate').addEventListener('click',function(){
    serial += 1;
    const rectangleArea = calculate('rectangle-width','rectangle-length');
    const rectangleAreaFixed = rectangleArea.toFixed(2);

    const name = nameOfArea('nameRectangle');
    displayData(name,rectangleAreaFixed);
});
document.getElementById('rectangle-edit').addEventListener('click',function(){
    editValue('rectangle-show');
});

// Parallelogram
document.getElementById('parallelogram-calculate').addEventListener('click',function(){
    serial += 1;
    const parallelogramArea = calculate('parallelogram-base','parallelogram-height');
    const parallelogramAreaFixed = parallelogramArea.toFixed(2);
    
    const name = nameOfArea('nameParallelogram');
    displayData(name,parallelogramAreaFixed);
});
document.getElementById('parallelogram-edit').addEventListener('click',function(){
    editValue('parallelogram-show');
});

// Rhombus
document.getElementById('rhombus-calculate').addEventListener('click',function(){
    serial += 1;
    const rhombusArea = 0.5 * calculate('rhombus-diagonal-one','rhombus-diagonal-two');
    const rhombusAreaFixed = rhombusArea.toFixed(2);
    
    const name = nameOfArea('nameRhombus');
    displayData(name,rhombusAreaFixed);
});
document.getElementById('rhombus-edit').addEventListener('click',function(){
    editValue('rhombus-show');
});

// Pentagon
document.getElementById('pentagon-calculate').addEventListener('click',function(){
    serial += 1;
    const pentagonArea = 0.5 * calculate('pentagon-first-filed','pentagon-second-filed');
    const pentagonAreaFixed = pentagonArea.toFixed(2);
    
    const name = nameOfArea('namePentagon');
    displayData(name,pentagonAreaFixed);
});
document.getElementById('pentagon-edit').addEventListener('click',function(){
    editValue('pentagon-show');
});

// Ellipse
document.getElementById('ellipse-calculate').addEventListener('click',function(){
    serial += 1;
    const ellipseArea = 3.1416 * calculate('ellipse-a-axis','ellipse-b-axis');
    const ellipseAreaFixed = ellipseArea.toFixed(2);
    
    const name = nameOfArea('nameEllipse');
    displayData(name,ellipseAreaFixed);
});
document.getElementById('ellipse-edit').addEventListener('click',function(){
    editValue('ellipse-show');
});


// Area Calculation
function displayData(areaName,area) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.style.display = 'flex';
    tr.style.alignItems = 'center';
    tr.style.margin ='16px 0';

    tr.innerHTML = `
      <td class="mr-4">${serial}</td>
      <td>${areaName}</td>
      <td class="ml-2">${area}cm<sup>2</sup></td>
      <td class="text-white bg-blue-600 px-3 rounded-lg ml-4">Covert to m<sup>2</sup></td>      
    `;
    container.appendChild(tr);
    document.getElementById("total-product").innerText = serial;
}