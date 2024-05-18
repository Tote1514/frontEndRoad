const input         = document.getElementById("number");
const convertBtn    = document.getElementById("convert-btn");
const output        = document.getElementById("output");

const checkInput = (numberInput) => {
    
    if (numberInput === "")
        return 1;

    const number = Number(numberInput);

    if (number < 1)
        return 2;

    if (number > 3999) 
        return 3;

    return 0;
};

const showMessageError = (index) => {

    const errorMessages = {
        1 : "Please enter a valid number",
        2 : "Please enter a number greater than or equal to 1",
        3 : "Please enter a number less than or equal to 3999"
    };

    const message = errorMessages[index];

    output.textContent      = message;
    output.classList.add("warning");
    output.style.display    =  "block";

    console.log(output.classList.length);
};

const convertNumber = (number) => {
    
    const someRomansNumbers = {
        1000 : "M",
        900  : "CM",
        500  : "D",
        400  : "CD",
        100  : "C",
        90   : "XC",
        50   : "L",
        40   : "XL",
        10   : "X",
        9    : "IX",
        5    : "V",
        4    : "IV",
        1    : "I",
        0    : ""
    }
    
    if (someRomansNumbers[number])
        return someRomansNumbers[number];
    
    if (number > 1000)
        return someRomansNumbers[1000] + convertNumber(number - 1000);

    if (number > 900) 
        return someRomansNumbers[900] + convertNumber(number - 900);

    if (number > 500) 
        return someRomansNumbers[500] + convertNumber(number - 500);

    if (number > 400)
        return someRomansNumbers[400] + convertNumber(number - 400);

    if (number > 100) 
        return someRomansNumbers[100] + convertNumber(number - 100);

    if (number > 90)
        return someRomansNumbers[90] + convertNumber(number - 90);

    if (number > 50) 
        return someRomansNumbers[50] + convertNumber(number - 50);

    if (number > 40)
        return someRomansNumbers[40] + convertNumber(number - 40);

    if ( number > 10) 
        return someRomansNumbers[10] + convertNumber(number - 10);

    if (number > 5)
        return someRomansNumbers[5] + convertNumber(number - 5);

    return someRomansNumbers[1] + convertNumber(number - 1);
};

const showResult = (romanNumber) => {
    output.textContent = romanNumber;
    output.classList.remove("warning");
    output.style.display = "block";

}

const convertToRoman = () => {

    const numberInput = input.value;

    const typeOfInput = checkInput(numberInput);

    console.log(typeOfInput);

    if (typeOfInput !== 0 )
    {
        showMessageError(typeOfInput);
        return;
    }

    const romanNumber = convertNumber(Number(numberInput));
    showResult(romanNumber);

};

convertBtn.addEventListener("click", convertToRoman);