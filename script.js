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

const distinctValues = (arr) =>{
    let newArr = []
    for(let i=0; i<arr.length;i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
}
const sumDistinctValues = (arr) =>{
    let distincts =  distinctValues(arr)
    let sum  = distincts.reduce((prev, current) => prev + current, 0 )
    return sum
}


const countValues = (arr) =>{
    let number = []
    let times = []
    arr.forEach((elemento, indice)=>{
        let cont = 0 
        for(let i=indice; i<arr.length;i++){
            if(elemento === arr[i]){
                if(!number.includes(elemento)){
                    cont ++
                }
                
            }
        }
        if(cont !==0){
            times.push(cont)
        }
        
        if(!number.includes(elemento)){
            number.push(elemento)
        }
        
    })
    let arrPhrase = ''
    for(let i=0; i<number.length;i++){
        if(i === number.length-1){
            arrPhrase += `${number[i]}(${times[i]})`
        }else{
            arrPhrase += `${number[i]}(${times[i]}),`
        }
        
    }
    
    return arrPhrase.replace(/,\s*$/, "")

}
const leastAppears = (arr) =>{
    let number = []
    let times = []
    arr.forEach((elemento, indice)=>{
        let cont = 0 
        for(let i=indice; i<arr.length;i++){
            if(elemento === arr[i]){
                if(!number.includes(elemento)){
                    cont ++
                }
                
            }
        }
        if(cont !==0){
            times.push(cont)
        }
        
        if(!number.includes(elemento)){
            number.push(elemento)
        }
        
    })
    let arrPhrase = ''
    for(let i=0; i<number.length;i++){
        if(times[i]=== 1 && i !== number.length-1){
            arrPhrase+= `${number[i]}(${times[i]}) `
        }if(times[i] === 1 && i === number.length-1){
            arrPhrase+= `${number[i]}(${times[i]})`
        }
    }
    arrPhrase =arrPhrase.split(" ").join(",")
    return arrPhrase.replace(/,\s*$/, "")
}


const evaluateExpression = (str,exp ) => {
    str = str.split('')
    let res = []
    let nums  = []
    Object.keys(exp).forEach((letra)=>{
        for(let i=0; i<str.length;i++){
            if(letra === str[i]){
                nums.push(exp[letra])
            }
        }
    })
    
    let signals = []
    for(let i=0; i<str.length;i++){
        if(str[i] === '+'||str[i] === '-'){
            signals.push(str[i])
        }
    }
    let a = []
    let i =0
    for(let i=0; i<nums.length;i++){
        
        a.push(nums[i])
        if(signals[i] !== undefined){
            a.push(signals[i])
        }
        
        if(signals[i]=== undefined){
            break
        }
    }
    
    console.log(a)
    let n = 0
    let arrN = []
    for(let i=0; i<a.length;i++){
        if(i%2 === 0){
            arrN.push(a[i])
        }if(arrN.length === 2){
            let sinal = a[i-1]
            let res = 0
            if(sinal === '+'){
                res = arrN[0]+arrN[1]
            }if(sinal === '-'){
                res = arrN[0]-arrN[1]
            }
            a.splice(i,1,res)
            arrN = new Array()
        }
    }
    console.log(a)

}
    
    
 
  // 1 - 2 + 3 - 2
    


const highestNumber = (obj) =>{
    let arr = Object.values(obj)
    return Math.max(...arr)
}