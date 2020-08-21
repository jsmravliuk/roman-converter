const romanToNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

function convertToNum(roman) {

    if (roman == null) 
        return -1;

    let num = charToNum(roman.charAt(0));
    let previous = "";
    let current = "";
    
    for (let i = 1; i < roman.length; i++) {
        
        current = charToNum(roman.charAt(i));
        previous = charToNum(roman.charAt(i-1));
        
        if (current <= previous) {
            num += current;
        } else {
            num = num - previous * 2 + current;
        }
    }
    
    document.getElementById('numberInput1').value = num;
    return num;

}
    
function charToNum(char) {
    for (const key in romanToNum) {
        if (char === key) {
            return romanToNum[key];
        }
    }
}

function convertToRoman(num) {

    let roman = "";

    for (const key in romanToNum) {
        while (num >= romanToNum[key]) {
            roman += key;
            num -= romanToNum[key];
        }
    }

    document.getElementById('romanInput2').value = roman;
    return roman;
    
}

document.getElementById('convert1').addEventListener('click', () => {
    let roman = document.getElementById('romanInput1').value;
    convertToNum(roman);
});

document.getElementById('convert2').addEventListener('click', () => {
    let number = document.getElementById('numberInput2').value;
    convertToRoman(number);
});