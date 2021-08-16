const reverseString = (string) =>{
    let reversed = ''
    for(let i=string.length-1; i>=0;i--){
        reversed+=string[i]
    }
    return reversed
}
const stringSize = (string) =>{
    return string.length
}


const reverseSentence = (phrase) =>{
    phrase = phrase.split(' ')
    let newPhrase = []
    for(let i=phrase.length-1; i>=0;i--){
        newPhrase.push(phrase[i])
    }
    return newPhrase.join(" ")
}

const countingSpaces = (phrase) =>{
    let revertedPhrase = reverseSentence(phrase)
    let cont =0;
    for(let i=0; i<revertedPhrase.length;i++){
        if(revertedPhrase[i] === " "){
            cont++
        }
    }
    return cont
}

const minimumValue = (arr) =>{
    return Math.min(...arr)
}
const indexOfMinimumValue = (arr) =>{
    let minimum = minimumValue(arr)
    return arr.indexOf(minimum)
}

const maximumValue = (arr) =>{
    return Math.max(...arr)
}
const maxisEven = (arr) =>{
    let max = Math.max(...arr)
    if(max%2===0){
        return true
    }else{
        return false
    }
}

const calculateRemainder = (n) =>{
    if(n%2 === 1){
        return true
    }else{
        return false
    }
}
const areRemainderMultipleOfThree = (n) =>{
    if(n%3 === 0){
        return true
    }else{
        return false
    }
}