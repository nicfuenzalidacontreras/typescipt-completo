(() => {
    const hero:string = 'Flash';

    function returnName():string {
        return hero;
    }

    const activeBatiSignal = ():string => {
        return 'Batiseñal Activada';
    }

    console.log(typeof activeBatiSignal);

    const heroName = returnName();
})()
