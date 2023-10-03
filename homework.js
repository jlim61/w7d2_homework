console.log('w7d2 homework')

/*
Q1:
Use the array of shop items provided and present the the information in the following format

```
=======================================
Name: 	 Air Max 97
Price: 	 130
About: 	 The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. 
Category: shoes
=======================================
Name: 	 Adidas NMD R1
Price: 	 128
About: 	 New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.
Category: shoes
=======================================
Name: 	 Gucci Oversize T-shirt with Interlocking G
Price: 	 580
About: 	 The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.
Category: shirts
=======================================
Name: 	 Nike Sportswear Club
Price: 	 18.97
About: 	 The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.
Category: shirts
=======================================
Name: 	 Spanx Flare Jeans, Vintage Indigo
Price: 	 148
About: 	 These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.
Category: pants
=======================================
Name: 	 Bonobos Premium Stretch Jeans
Price: 	 69
About: 	 Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.
Category: pants
```


*/

const shopItems=[{
    id:1,
    name:"Air Max 97",
    price:130.00,
    desc:"The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
    category:"shoes"
},{
    id:2,
    name:"Adidas NMD R1",
    price:128,
    desc:"New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
    category:"shoes"
},{
    id:3,
    name:"Gucci Oversize T-shirt with Interlocking G",
    price:580,
    desc:"The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
    category:"shirts"
},{
    id:4,
    name:"Nike Sportswear Club",
    price:18.97,
    desc:"The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
    category:"shirts"
},{
    id:5,
    name:"Spanx Flare Jeans, Vintage Indigo",
    price:148,
    desc:"These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
    category:"pants"
},{
    id:6,
    name:"Bonobos Premium Stretch Jeans",
    price:69,
    desc:"Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
    category:"pants"
}]

function question1Function(anArray) {
    for (let element = 0; element < anArray.length; element ++) {
        console.log(`
        =======================================
        Name: ${anArray[element].name}
        Price: ${anArray[element].price}
        About: ${anArray[element].desc}
        Category: ${anArray[element].category}
        =======================================
        `)
    }
}

question1Function(shopItems)

//================================================================================================================================================================================================================================

/*
Question 2:
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
```
pizza contains:
Deep Dish
South Side Thin Crust
tacos contains:
Anything not from Taco bell
burgers contains:
Portillos Burgers
ice_cream contains:
Chocolate
Vanilla
Oreo
shakes contains:
oberwise contains:
Chocolate
dunkin contains:
Vanilla
culvers contains:
All of them
mcDonalds contains:
Sham-rock-shake
cupids_candies contains:
Chocolate Malt
```
Note:  The solution should work on any object with values of strings, numbers, objects, and arrays not just this specific object
*/

const hwPerson = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


function question2Function(aPerson) {
    for (const k in aPerson) {
        console.log(k)
        if (Array.isArray(aPerson[k])) {
            console.log(`
            ${k} contains:
            `)
            for (const v in aPerson[k]) {
                console.log(v)
            }
        }
    }
}

function question2FunctionTest(aPerson) {
    for (const k in aPerson) {
        console.log(`${k} contains:`)
        if (Array.isArray(aPerson[k])) {
            for (const food of aPerson[k]) {
                if (typeof food === 'object') {
                    for (const subfood in food) {
                        console.log(`${subfood} contains:`)
                        console.log(`${food[subfood]}`)
                    }
                } else {console.log(`${food}`)}
            }
        } else if (typeof aPerson[k] === "string") {
            console.log(aPerson[k])
        }
    }
}

// question2Function(hwPerson)
question2FunctionTest(hwPerson)

//================================================================================================================================================================================================================================


// Codewars problems (3)


/*
Codewars Problem 1: Sum of two lowest positive integers
Codewars Link: https://www.codewars.com/kata/558fc85d8fd1938afb000014
*/
//Codewars Problem 1 Solution:
function sumTwoSmallestNumbers(numbers) {  
    console.log(numbers)
    numbers.sort((a, b) => a - b)
    console.log(numbers)
    result = numbers[0] + numbers[1]
    return result
  }

/*
Codewars Problem 2: Beginner Series #3 Sum of Numbers
Codewars Link: https://www.codewars.com/kata/55f2b110f61eb01779000053
*/
//Codewars Problem 2 Solution:
function getSum(a, b) {
    const myList = []
    myList.push(a, b)
    myList.sort((a, b) => a-b)
    console.log(myList)
    let i=myList[0]
    let sum = myList[0]
    console.log(sum)
    while (i < myList[1]) {
      i += 1
      sum += i
      console.log(sum)
    }
    return sum
  }


/*
Codewars Problem 3: String ends with?
Codewars Link: https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
*/
//Codewars Problem 3 Solution:
function solution(str, ending){
    console.log(str, ending)
    console.log(ending.length)
    console.log(str.length)
    const startPoint = str.length - ending.length
    console.log(startPoint)
    if (str.slice(startPoint) == ending) {
      return true
    } else {
      return false
    }
  }