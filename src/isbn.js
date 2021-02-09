function checkISBN(digits) {
    let stringSplit = digits.replace(/-/g, "");
    let factor = 1;
    let sum = 0;


    for (let i = 0; i < stringSplit.length; i++) {
        sum = sum + factor * parseInt(stringSplit[i]);
        factor += 1;
    }
    let checkdigit = sum % 11;

    if (checkdigit === 10){
        return "X";
    }

    else if (checkdigit === 0) {
        return "";
    }
    return checkdigit.toString();
}

module.exports = {
    checkISBN
}