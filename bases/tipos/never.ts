(() => {
    const error = (message:string):(never|number) => {
       if(false) {
        throw new Error (message);
       } 
    };

    error('Auxilio!');
    console.log('Hola Mundo')
})()