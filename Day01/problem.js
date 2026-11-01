
`1 ====>> Reverse a String `
`Question: "Pakistan" ko reverse karo.`;;;

// `Solution`;;;

function reverseString(str){
    let reverse = ' ';

    for(let i = str.length - 1; i >= 0; i--){
        reverse = reverse + str[i]
    };

    return reverse;
};

console.log(reverseString("Pakistan"));


`2. Check Palindrome
Question: Check karo "madam" palindrome hai ya nahi.`
`Palindrome ka matlab: Forward aur backward same ho.`

// `Solution`;;;

function palindRome(str){
    let reverse = '';

    for(let i = str.length - 1; i >= 0; i--){
        reverse = reverse + str[i]
    };
    if( str === reverse){
        return true
    }
    return false
};

console.log(palindRome('madam'))
