(() => {
    let avengers;

    console.log(avengers);

    const villians:number = 20;

    if(avengers < villians) {
        console.log('Estamos en problemas');
    } else {
        console.log('Estamos salvados');
    }

    avengers = Number('55A');
    console.log({avengers});
})()