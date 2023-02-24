// Type Array
{
    const myArray: string[] = [];
    myArray.push("Foo"); // no error
    //myArray.push(3); //Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
}

// readonly
{
    const myArray: readonly string[] = ["1", "2"];
    //myArray.push("Foo"); //Property 'push' does not exist on type 'readonly string[]'.ts(2339)

}