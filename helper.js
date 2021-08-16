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

const testeFalhar = [
    {
        "input":{
            "palavra":"futebol"
        },
        "expected_output":'futebol'
    }
]



const testeFrase1 = [
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
            "number":13
        }
    },
    {
        "input":{
            "number":87
        }
    }
]


