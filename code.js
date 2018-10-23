function display() {    
    var element = document.getElementById("result");
    var randomNumber = Math.random() * 100;
    element.innerHTML = "clicked: " + randomNumber;
 }