// import the function sum from the app.js file
const { fromDollarToYen,fromEuroToDollar,fromYenToPound} = require('./app.js');

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("127.9 Yen should be 0.8 pounds", function(){
    //import the function from app.js
    
    expect(fromYenToPound(127.9)).toBe(0.8); 

    // use the function like its suppoed to be used
    // const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    // const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    //  expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("1 dollar should be 106.5833333 yen", function(){
    //import the function from app.js
    
    expect(fromDollarToYen(1)).toBe(106.58333333333334); 
})
