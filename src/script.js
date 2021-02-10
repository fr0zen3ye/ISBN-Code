function checkUserInput(userISBN) {
    let input1 = document.getElementById("1").value;
    let input2 = document.getElementById("2").value;
    let input3 = document.getElementById("3").value;
    let input4 = document.getElementById("4").value;
    var digits = input1 + input2 +input3 +input4;
    
      
    if (digits.length>9) {
        if (isISBNcorrect(digits) === true){
            document.querySelector("#isbnCorrect").style.display = "block";
            document.querySelector("#isbnFalse").style.display = "none";
        }
        else {
            document.querySelector("#isbnFalse").style.display = "block";
            document.querySelector("#isbnCorrect").style.display = "none";
        }
    }
    else{
        document.querySelector("#isbnFalse").style.display = "none";
        document.querySelector("#isbnCorrect").style.display = "none";
    } 

}

function getFocus(id) {
    document.getElementById(id).focus();

}
function testLength (event) {
    let input = document.getElementById(event.target.id).value;
    if (input.length === +event.target.attributes["maxlength"].value && event.keyCode != 8) {
        getFocus(+event.target.id+1);
    }
    if (input.length === 0 && event.keyCode === 8) {
        getFocus(+event.target.id-1);
    }
}