(() => {
    const addNumbers = (a:number, b:number) => a + b;
    const greet = (name:string) => `Hola ${name}`;
    const saveTheWorld = () => 'El Mundo está salvado';

    //let myFunction:Function;
    let myFunction: (a:number , b:number) => number;
  
    //* myFunction = 10;
    //* console.log(myFunction);

    myFunction = addNumbers;
    console.log(myFunction(1,2));

    //myFunction = greet;
    //console.log(myFunction('Nicolás'));

    //myFunction = saveTheWorld;
    //console.log(myFunction());
})()
