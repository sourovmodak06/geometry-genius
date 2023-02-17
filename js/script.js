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