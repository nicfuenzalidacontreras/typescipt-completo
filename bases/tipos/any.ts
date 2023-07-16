(() => {
    let avengers:any = 123;
    let exists;
    let power;

    avengers = 'Dr. Strange';
    console.log((avengers as string).charAt(0));

    avengers = 150.12312312;
    console.log(<number>avengers.toFixed(2));

    console.log(exists);
    console.log(power);
})()