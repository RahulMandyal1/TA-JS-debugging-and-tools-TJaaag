
let result , expected;

function sum(numA,numB){
    return numA + numB;
};

function mult(numA,numB){
    return numA*numB;
}



function expect(actual){
    return{
        toEqual : function(expected){
            if(typeof(actual)!= typeof(expected) || actual !== expected){
               throw new Error(`${actual} is not equal ${expected}`);
            }
        },       
    }
};


function test(message,callBack){
    try{
        callBack();
        console.log(`${message} Test got passed✅`);
    }
    catch(error){
        console.error(`Test got failed ❎ Because of ${error}`);
    }
};

//first test 


test('addition of 20 + 10', function(){
    expect(sum(20,10)).toEqual(20);
});



// second test 

test('addition of  10 + 10', function(){
    expect(sum(10,10)).toEqual(20);
});


// third test 

test('addition of  30 + 10', function(){
    expect(sum(30,'10')).toEqual(40);
});

// Fourth  test 
test('addition of  50 + 10', function(){
    expect(sum(50,10)).toEqual(60);
});

// fifth test 
test('addition of  50 + 10', function(){
    expect(sum(50,10)).toEqual(40);
});

// Mutliplication of two numbers //
test('Multiplication of two numbers 5 * 5', function() {
    expect(mult(5,5)).toEqual(50);
});
test('Multiplication of two numbers 5 * 10', function() {
    expect(mult(5,10)).toEqual(50);
});

test('Multiplication of two numbers 5 * 4', function() {
    expect(mult(5,4)).toEqual(20);
});
test('Multiplication of two numbers 5 * 9', function() {
    expect(mult(5,9)).toEqual(45);
});
test('Multiplication of two numbers 5 * 20', function() {
    expect(mult(5,20)).toEqual(45);
});
