(() => {
    const batman:string = 'Batman';
    const flash:string = "Flash";
    const superman:string = `Superman`;

    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase);

    console.log(batman[10]?.toUpperCase() || 'No está presente');
})()