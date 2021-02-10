

function checkUserInput(userISBN) {
    
        var digits = document.getElementById("userISBN").value;
        if (isISBNcorrect(digits) === true){
        document.querySelector("#isbnCorrect").style.display = "block";
        document.querySelector("#isbnFalse").style.display = "none";
    }
        else {
        document.querySelector("#isbnFalse").style.display = "block";
        document.querySelector("#isbnCorrect").style.display = "none";
    }
}

