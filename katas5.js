// implemente aqui as funções de teste
const testeReversedString1 = () =>{
   testesCorreto1.forEach((teste)=>console.assert(JSON.stringify(reverseString(teste.input.palavra))=== JSON.stringify(teste.expected_output),
   
                                                {
                                                   'function':'reverseString',
                                                   'expected':teste.expected_output,
                                                   "got":reverseString(teste.input.palavra)
                                                }))
}
testeReversedString1()

const testeReversedString2 = () =>{
   testesCorreto2.forEach((teste) => console.assert(JSON.stringify(stringSize(teste.input.palavra)) === JSON.stringify(teste.expected_output),

                                                {
                                                   'function':"stringSize",
                                                   'expected':teste.expected_output,
                                                   "got":stringSize(teste.input.palavra)                                    
                                                }))
}
testeReversedString2()


const testReverseSentence1 = () =>{
   testeFrase1.forEach((teste)=>console.assert(JSON.stringify(reverseSentence(teste.input.frase)) === JSON.stringify(teste.expected_output),
   {
      "function":"reverseSentence",
      "expected":teste.expected_output,
      "got":reverseSentence(teste.input.frase)
   }))
}
testReverseSentence1()

const testReverseSentence2 = () =>{
   testPhrase2.forEach((test)=> console.assert(JSON.stringify(countingSpaces(test.input.phrase)) === JSON.stringify(test.expected_output),
                                                {
                                                   "function":"countingSpaces",
                                                   "phrase": test.input.phrase,
                                                   "expected":test.expected_output,
                                                   "got":countingSpaces(test.input.phrase)
                                                }))
}
testReverseSentence2()


const testMinimumValue1 = () =>{
   MinValue.forEach((vet)=>console.assert(JSON.stringify(minimumValue(vet.input.numbers)) === JSON.stringify(vet.expected_output),
                                                {
                                                   "function":"minimumValue",
                                                   "array": vet.input.numbers,
                                                   "expected": vet.expected_output,
                                                   "got":minimumValue(vet.input.numbers)
                                                }))
} 
testMinimumValue1()

const testMinimumValue2 = () =>{
   indexOfMinimum.forEach((vet)=>console.assert(JSON.stringify(indexOfMinimumValue(vet.input.numbers)) === JSON.stringify(vet.expected_output),
                                                {
                                                   "function":"indexOfMinimumValue",
                                                   "expected":vet.expected_output,
                                                   "got":indexOfMinimumValue(vet.input.numbers)
                                                }))   
}
testMinimumValue2()

const testMaximumValue1 = () =>{
   maxValueArr.forEach((vet) => console.assert(JSON.stringify(maximumValue(vet.input.numbers)) === JSON.stringify(vet.expected_output),
                                                {
                                                   "function":"maximumValue",
                                                   "expected":vet.expected_output,
                                                   "got":maximumValue(vet.input.numbers)
                                                }))
}
testMaximumValue1()

const testMaximumValue2 = () =>{
   //Testando se é par
   maxValueEvenArr.forEach((vet)=>console.assert(JSON.stringify(maxisEven(vet.input.numbers)) === "true",
                                                {
                                                   "function":"maxisEven",
                                                   "expected":"true",
                                                   "got":maxisEven(vet.input.numbers)
                                                }))
}
testMaximumValue2()

const testCalculateRemainder1 = () =>{
   remindersArr.forEach((n)=> console.assert(JSON.stringify(calculateRemainder(n.input.number)) === 'true',
                                                {
                                                   "function":"calculateRemainder",
                                                   "expected":"true",
                                                   "got":calculateRemainder(n.input.numbers)
                                                }))
}
testCalculateRemainder1()

const testCalculateRemainder2 = () =>{
   remindersArr.forEach((n) => console.assert(JSON.stringify(areRemainderMultipleOfThree(n.input.number)) === "true",
   //Deixei o 13 não passar no teste propositalmente
                                                {
                                                   "function":"calculateRemainder",
                                                   "expected":"true",
                                                   "number":n.input.number,
                                                   "got":areRemainderMultipleOfThree(n.input.number)
                                                }))
}
testCalculateRemainder2()



const testDistinctValues1  = () =>{
   
}