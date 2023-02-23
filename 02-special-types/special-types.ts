
// Type Any
{
    let myAnyVariable: any = true;

    console.log(myAnyVariable);

    myAnyVariable = "string"; // no error as it can be "any" type

    console.log(myAnyVariable);

    myAnyVariable = Math.round(myAnyVariable); // no error as it can be "any" type 

    console.log(myAnyVariable);
}

// Type unknown
{

    let myUnknownVariable: unknown = 1;
    myUnknownVariable = "Foo"; // no error
    myUnknownVariable = {
        myMethod: () => {
            console.log("My Method Called");
        }
    } as { myMethod: () => void }
    
    //myUnknownVariable.myMethod(); // 'myUnknownVariable' is of type 'unknown'.ts(18046)

    if (typeof myUnknownVariable === 'object' && myUnknownVariable !== null) {
        (myUnknownVariable as { myMethod: Function }).myMethod();
    }

}