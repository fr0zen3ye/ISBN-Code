function checkISBN(digits) {
    let stringSplit = digits.split("-").join(""); 
    let factor = 1;
    let sum = 0;

    for (let i = 0; i < stringSplit.length; i++) {
        parsedString = parseInt(stringSplit[i])
        sum = sum + factor * parsedString;
        factor += 1;
    }

    let checkdigit = sum % 11;
    if (checkdigit === 10){
        return "X";
    }

    else if (checkdigit == 0) {
        return "";
    }
    return checkdigit.toString();
}
function isISBNcorrect (digits) {
    let stringSplit = digits.split("-").join(""); 
    let stringSliced = stringSplit.substring(0, 9);
    let factor = 1;
    let sum = 0;

    for (let i = 0; i < stringSliced.length; i++) {
        parsedString = parseInt(stringSliced[i])
        sum = sum + factor * parsedString;
        factor += 1;
    }

    let checkdigit = sum % 11;

    if(checkdigit === 10) {
        checkdigit = "X";
    }

    if (stringSplit[9] === checkdigit.toString()) {
        return true;
    }

    else {
        return false;
    }
}

module.exports = {
    checkISBN,
    isISBNcorrect
}