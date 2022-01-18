function getFullName(firstName , lastName){
    return firstName+ lastName;
}
let expectedOutput= "JhonStark";
if(getFullName()!==expectedOutput){
    throw new Error("Expected result is not like this ");
}
getFullName("Rahul","Thakur");


function calculateTotalAmount(amount , taxRate){
    return amount+(amount * taxRate);
}

expectedOutput = 300+ (300*0.5);
if(calculateTotalAmount!==expectedOutput){
    throw new Error(`Expexted output is not this `);
}