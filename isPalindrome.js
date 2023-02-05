// Write your code below

function isPalindrome(str) {
    let x = Math.floor(str.length / 2);
    for (let i = 0; i < x; i++){
        if (str[i] !== str[str.length - i - 1]){
            return false
        }
    }
    return true
}

console.log(isPalindrome(`civic`))