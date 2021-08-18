//----------------Kata 1 ------------------

const testesCorreto1 = [
    {
        "input":{
            "palavra":"futebol"
        },
        "expected_output": "lobetuf",
    },
    
    {
        "input":{
            "palavra":"game"
        },
        "expected_output":"emag"
    },
    {
        "input":{
            "palavra":'proximo'
        },
        "expected_output":"omixorp"
    },
    {
        "input":{
            "palavra":"musica"
        },
        "expected_output":"acisum"
    },
    {
        "input":{
            "palavra":"farmácia"
        },
        "expected_output":"aicámraf"
    }
]
const testesCorreto2 = [
    {
        "input":{
            "palavra":"futebol"
        },
        "expected_output": 7,
    },
    
    {
        "input":{
            "palavra":"game"
        },
        "expected_output":4
    },
    {
        "input":{
            "palavra":'proximo'
        },
        "expected_output":7
    },
    {
        "input":{
            "palavra":"musica"
        },
        "expected_output":6
    },
    {
        "input":{
            "palavra":"farmácia"
        },
        "expected_output":8
    }
]




//----------------Kata 2 ------------------
const testPhrase1 = [
    {
        "input":{
            "frase":"bob likes dogs"
        },
        "expected_output": "dogs likes bob"
    },
    {
        "input":{
            "frase":"os três mosqueteiros"
        },
        'expected_output': "mosqueteiros três os"
    },
    {
        "input":{
            "frase":"Kenzie academy brasil"
        },
        "expected_output":'brasil academy Kenzie'
    },
    {
        "input":{
            "frase":"HTML CSS JavaScript"
        },
        "expected_output":"JavaScript CSS HTML"
    }
]

const testPhrase2 = [
    {
        "input":{
            "phrase":'bob likes dogs'
        },
        "expected_output":2
    },
    {
        "input":{
            "phrase":"os três mosqueteiros disney"
        },
        'expected_output': 3
    },
    {
        "input":{
            "phrase":"Kenzie academy brasil melhor bootcamp"
        },
        "expected_output":4
    },
    {
        "input":{
            "phrase":"HTML CSS JavaScript React Python Django"
        },
        "expected_output": 5
    }
]
 //---------------- Kata 3 ------------------ 
const MinValue = [
    {
      "input":{
        "numbers":[1,5,10,12,8,4,2]
      },
      "expected_output":1
    },
    {
        "input":{
            "numbers":[10,5,20,11,1,0,2]
        },
        "expected_output":0
    },
    {
        "input":{
            "numbers":[300,99,100,50,40,20,10]
        },
        "expected_output":10
    },
    {
        "input":{
            "numbers":[24,50,2,99,152,1000,4]
        },
        "expected_output":2
    },
    {
        "input":{
            "numbers":[5,10,5,20,25,30,1]
        },
        "expected_output":1
    }
]
const indexOfMinimum = [
    {
      "input":{
        "numbers":[1,5,10,12,8,4,2]
      },
      "expected_output":0
    },
    {
        "input":{
            "numbers":[10,5,20,11,1,0,2]
        },
        "expected_output":5
    },
    {
        "input":{
            "numbers":[300,99,100,50,40,20,10]
        },
        "expected_output":6
    },
    {
        "input":{
            "numbers":[24,50,2,99,152,1000,4]
        },
        "expected_output":2
    },
    {
        "input":{
            "numbers":[5,10,5,20,25,30,1]
        },
        "expected_output":6
    }
]
 //---------------- Kata 4 ------------------
const maxValueArr = [
    {
        "input":{
          "numbers":[1,5,10,12,8,4,2]
        },
        "expected_output":12
      },
      {
          "input":{
              "numbers":[10,5,20,11,1,0,2]
          },
          "expected_output":20
      },
      {
          "input":{
              "numbers":[300,99,100,50,40,20,10]
          },
          "expected_output":300
      },
      {
          "input":{
              "numbers":[24,50,2,99,152,1000,4]
          },
          "expected_output":1000
      },
      {
          "input":{
              "numbers":[5,10,5,20,25,30,1]
          },
          "expected_output":30
      }
]
const maxValueEvenArr = [
    {
        "input":{
          "numbers":[1,5,10,12,8,4,2]
        },
      },
      {
          "input":{
              "numbers":[10,5,20,11,1,0,2]
          },
      },
      {
          "input":{
              "numbers":[300,99,100,50,40,20,10]
          },
      },
      {
          "input":{
              "numbers":[24,50,2,99,152,1000,4]
          },
      },
      {
          "input":{
              "numbers":[5,10,5,20,25,30,1]
          },
      }
]
// ---------------- Kata 5 ------------------
const remindersArr = [
    {
        "input":{
            "number":9
        }
    },
    {
        "input":{
            "number":27
        }
    },
    {
        "input":{
            "number":21
        }
    },
    {
        "input":{
            "number":15
        }
    },
    {
        "input":{
            "number":39
        }
    },
    {
        "input":{
            "number":57
        }
    },{
        "input":{
            "number":9
        }
    },
    {
        "input":{
            "number":87
        }
    }
]
// ---------------- Kata 6 ------------------
const distinctValuesArr = [
    {
        "input":{
            "numbers":[1, 3, 5, 3, 7, 3, 1, 1, 5]
        },
        "expected_output":[1,3,5,7],
        "expected_ouput2":16
    },
    {
        "input":{
            "numbers":[5,3,4,5,3,1,1,2,0,4]
        },
        "expected_output":[5,3,4,1,2,0],
        "expected_ouput2":15
        
    },
    {
        "input":{
            "numbers":[4,3,2,2,4,1,1,3]
        },
        "expected_output":[4,3,2,1],
        "expected_ouput2":10
    },
    {
        "input":{
            "numbers":[1,1,2,2,3,3,4,4,5]
        },
        "expected_output":[1, 2, 3, 4, 5],
        "expected_ouput2":15
    }
]

//---------------- Kata 7 ------------------
const countingValuesArr = [
    {
        "input":{
            "numbers":[5,10,2,5,25,30,5,1,1,2,4]
        },
        "expected_output":"5(3),10(1),2(2),25(1),30(1),1(2),4(1)",
        "expected_output2":"10(1),25(1),30(1),4(1)"
    },
    {
        "input":{
            "numbers":[1,2,3,3,1]
        },
        "expected_output":"1(2),2(1),3(2)",
        "expected_output2":"2(1)"
    },
    {
        "input":{
            "numbers":[5,5,5,2,1,4,2]
        },
        "expected_output":"5(3),2(2),1(1),4(1)",
        "expected_output2":"1(1),4(1)"
    },
    {
        "input":{
            "numbers":[11,12,13,11,11]
        },
        "expected_output":"11(3),12(1),13(1)",
        "expected_output2":"12(1),13(1)"
    },
    {
        "input":{
            "numbers":[3,4,4,5,5,3,1]
        },
        "expected_output":"3(2),4(2),5(2),1(1)",
        "expected_output2":"1(1)"
    }
]
// Kata 8
const testEvaluateExpressionArr = [
    {
        "input":{
            "str":"a + b + c - d",
            "expression":{a: 1, b: 7, c: 3, d: 14}
        },
        "expected_output":-3,
        "expected_outpu2":14
        //8+3-14
    },
    {
        "input":{
            "str":"a - b + c - d",
            "expression":{a: 5, b: 5, c: 4, d: 2}
        },
        "expected_output":2,
        "expected_outpu2":5
        //5-5+4-2
    },
    {
        "input":{
            "str":"c - a + b - d",
            "expression":{a: 2, b: 3, c: 1, d: 2}
        },
        "expected_output":0,
        "expected_outpu2":3
        //1-2+3-2
        //1-2+3-2
    }
]
