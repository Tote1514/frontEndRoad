const checkButton = document.getElementById("check-btn");
const inputText = document.getElementById("text-input");
const result = document.getElementById("result");

const getCleanInput = (text) => {

    const regex = /[\W_]/g;
    return text.replace(regex, '').toLowerCase();
};

const checkPalindrome = ()=> {
    const valueInput = inputText.value;
    inputText.value = "";

    if(valueInput === "") {
        alert("Please input a value");
        return;
    }

    const cleanInput = getCleanInput(valueInput);

    console.log(cleanInput);

    const invertText = cleanInput.split("")
                                .reverse()
                                .join("");

    console.log(invertText);
                                                             
    const resultText = `<p><strong>${valueInput}</strong> 
        ${(invertText===cleanInput) ?  "is a palindrome" : "is not a palindrome"}</p>`;

    result.innerHTML = resultText;
};

checkButton.addEventListener("click", checkPalindrome);

inputText.addEventListener("keydown", (e)=>{

    console.log("oi");

    if(e.key == "Enter"){
        checkPalindrome();
    }
});